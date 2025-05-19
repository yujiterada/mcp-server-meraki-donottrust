#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequest,
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import {DasbhoardAPI } from "./meraki/index.js";
import {
  administeredTools,
  applianceTools,
  cameraTools,
  campusGatewayTools,
  cellularGatewayTools,
  devicesTools,
  insightTools,
  licensingTools,
  networksTools,
  organizationsTools,
  secureConnectTools,
  sensorTools,
  smTools,
  switchTools,
  wirelessTools,
  wirelessControllerTools,
} from "./meraki/tools/index.js";


async function main() {
  const {
    MERAKI_DASHBOARD_API_KEY,
    BASE_URL,
    ADMINISTERED_API_ENABLED,
    APPLIANCE_API_ENABLED,
    CAMERA_API_ENABLED,
    CAMPUS_GATEWAY_API_ENABLED,
    CELLULAR_GATEWAY_API_ENABLED,
    DEVICES_API_ENABLED,
    INSIGHT_API_ENABLED,
    LICENSING_API_ENABLED,
    NETWORKS_API_ENABLED,
    ORGANIZATIONS_API_ENABLED,
    SECURE_CONNECT_API_ENABLED,
    SENSOR_API_ENABLED,
    SM_API_ENABLED,
    SWITCH_API_ENABLED,
    WIRELESS_API_ENABLED,
    WIRELESS_CONTROLLER_API_ENABLED,
  } = process.env;

  const administeredApiEnabled = JSON.parse(ADMINISTERED_API_ENABLED || "false")
  const applianceApiEnabled = JSON.parse(APPLIANCE_API_ENABLED || "false")
  const cameraApiEnabled = JSON.parse(CAMERA_API_ENABLED || "false")
  const campusGatewayApiEnabled = JSON.parse(CAMPUS_GATEWAY_API_ENABLED || "false")
  const cellularGatewayApiEnabled = JSON.parse(CELLULAR_GATEWAY_API_ENABLED || "false")
  const devicesApiEnabled = JSON.parse(DEVICES_API_ENABLED || "false")
  const insightApiEnabled = JSON.parse(INSIGHT_API_ENABLED || "false")
  const licensingApiEnabled = JSON.parse(LICENSING_API_ENABLED || "false")
  const networksApiEnabled = JSON.parse(NETWORKS_API_ENABLED || "false")
  const organizationsApiEnabled = JSON.parse(ORGANIZATIONS_API_ENABLED || "false")
  const secureConnectApiEnabled = JSON.parse(SECURE_CONNECT_API_ENABLED || "false")
  const sensorApiEnabled = JSON.parse(SENSOR_API_ENABLED || "false")
  const smApiEnabled = JSON.parse(SM_API_ENABLED || "false")
  const switchApiEnabled = JSON.parse(SWITCH_API_ENABLED || "false")
  const wirelessApiEnabled = JSON.parse(WIRELESS_API_ENABLED || "false")
  const wirelessControllerApiEnabled = JSON.parse(WIRELESS_CONTROLLER_API_ENABLED || "false")

  if (!MERAKI_DASHBOARD_API_KEY || !BASE_URL) {
    console.error("Please set MERAKI_DASHBOARD_API_KEY and BASE_URL environment variables");
    process.exit(1);
  }

  console.error("Starting Meraki MCP Server...");
  const server = new Server(
    {
      name: "Meraki MCP Server",
      version: "0.0.1",
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );
  const merakiClient = new DasbhoardAPI(MERAKI_DASHBOARD_API_KEY, BASE_URL);

  server.setRequestHandler(
    CallToolRequestSchema,
    async (request: CallToolRequest) => {
      console.error("Received CallToolRequest:", request);
      try {
        if (!request.params.arguments) {
          throw new Error("No arguments provided");
        }

        const response = await merakiClient.call(request.params);
        return {
          content: [{ type: "text", text: JSON.stringify(response) }],
        };
      } catch (error) {
        console.error("Error executing tool:", error);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                error: error instanceof Error ? error.message : String(error),
              }),
            },
          ],
        };
      }
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    console.error("Received ListToolsRequest");
    console.error(ADMINISTERED_API_ENABLED)
    return {
      tools: [
        ...(administeredApiEnabled ? administeredTools : []),
        ...(applianceApiEnabled ? applianceTools : []),
        ...(cameraApiEnabled ? cameraTools : []),
        ...(campusGatewayApiEnabled ? campusGatewayTools : []),
        ...(cellularGatewayApiEnabled ? cellularGatewayTools : []),
        ...(devicesApiEnabled ? devicesTools : []),
        ...(insightApiEnabled ? insightTools : []),
        ...(licensingApiEnabled ? licensingTools : []),
        ...(networksApiEnabled ? networksTools : []),
        ...(organizationsApiEnabled ? organizationsTools : []),
        ...(secureConnectApiEnabled ? secureConnectTools : []),
        ...(sensorApiEnabled ? sensorTools : []),
        ...(smApiEnabled ? smTools : []),
        ...(switchApiEnabled ? switchTools : []),
        ...(wirelessApiEnabled ? wirelessTools : []),
        ...(wirelessControllerApiEnabled ? wirelessControllerTools : []),
      ],
    };
  });

  const transport = new StdioServerTransport();
  console.error("Connecting server to transport...");
  await server.connect(transport);

  console.error("Meraki MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
