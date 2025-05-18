import axios from "axios";
import {
  administeredAPI, administeredAPIEndpoints,
  applianceAPI, applianceAPIEndpoints,
  cameraAPI, cameraAPIEndpoints,
  campusGatewayAPI, campusGatewayAPIEndpoints,
  cellularGatewayAPI, cellularGatewayAPIEndpoints,
  devicesAPI, devicesAPIEndpoints,
  insightAPI, insightAPIEndpoints,
  licensingAPI, licensingAPIEndpoints,
  networksAPI, networksAPIEndpoints,
  organizationsAPI, organizationsAPIEndpoints,
  secureConnectAPI, secureConnectAPIEndpoints,
  smAPI, smAPIEndpoints,
  switchAPI, switchAPIEndpoints,
  wirelessAPI, wirelessAPIEndpoints,
  wirelessControllerAPI, wirelessControllerAPIEndpoints,
} from "./apis/index.js";

export class DasbhoardAPI {
  private client: any;

  constructor(apiKey: string, baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      }
    });
  }

  async call(params: any): Promise<any> {
    if (administeredAPIEndpoints.includes(params.name)) {
      const response = await administeredAPI(this.client, params);
      return response;
    } else if (applianceAPIEndpoints.includes(params.name)) {
      const response = await applianceAPI(this.client, params);
      return response;
    } else if (cameraAPIEndpoints.includes(params.name)) {
      const response = await cameraAPI(this.client, params);
      return response;
    } else if (campusGatewayAPIEndpoints.includes(params.name)) {
      const response = await campusGatewayAPI(this.client, params);
      return response;
    } else if (cellularGatewayAPIEndpoints.includes(params.name)) {
      const response = await cellularGatewayAPI(this.client, params);
      return response;
    } else if (devicesAPIEndpoints.includes(params.name)) {
      const response = await devicesAPI(this.client, params);
      return response;
    } else if (insightAPIEndpoints.includes(params.name)) {
      const response = await insightAPI(this.client, params);
      return response;
    } else if (licensingAPIEndpoints.includes(params.name)) {
      const response = await licensingAPI(this.client, params);
      return response;
    } else if (networksAPIEndpoints.includes(params.name)) {
      const response = await networksAPI(this.client, params);
      return response;
    } else if (organizationsAPIEndpoints.includes(params.name)) {
      const response = await organizationsAPI(this.client, params);
      return response;
    } else if (secureConnectAPIEndpoints.includes(params.name)) {
      const response = await secureConnectAPI(this.client, params);
      return response;
    } else if (smAPIEndpoints.includes(params.name)) {
      const response = await smAPI(this.client, params);
      return response;
    } else if (switchAPIEndpoints.includes(params.name)) {
      const response = await switchAPI(this.client, params);
      return response;
    } else if (wirelessAPIEndpoints.includes(params.name)) {
      const response = await wirelessAPI(this.client, params);
      return response;
    } else if (wirelessControllerAPIEndpoints.includes(params.name)) {
      const response = await wirelessControllerAPI(this.client, params);
      return response;
    } else {
      throw new Error(`Unknown tool: ${params.name}`);
    }
  }
}