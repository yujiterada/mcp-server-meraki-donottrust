export async function _wirelessController(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getOrganizationWirelessControllerAvailabilitiesChangeHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/availabilities/changeHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerClientsOverviewHistoryByDeviceB": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/clients/overview/history/byDevice/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerConnections": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/connections`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerConnectionsUnassigned": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/connections/unassigned`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL2ByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/interfaces/l2/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL2StatusesChan": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/interfaces/l2/statuses/changeHistory/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL2UsageHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/interfaces/l2/usage/history/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL3ByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/interfaces/l3/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL3StatusesChan": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/interfaces/l3/statuses/changeHistory/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL3UsageHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/interfaces/l3/usage/history/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesPacketsOvervie": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/interfaces/packets/overview/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesUsageHistoryBy": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/interfaces/usage/history/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesRedundancyFailoverHistor": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/redundancy/failover/history`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesRedundancyStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/redundancy/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesSystemUtilizationHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/devices/system/utilization/history/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerOverviewByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wirelessController/overview/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
}

export const wirelessControllerEndpoints = [
  "getOrganizationWirelessControllerAvailabilitiesChangeHistory",
  "getOrganizationWirelessControllerClientsOverviewHistoryByDeviceB",
  "getOrganizationWirelessControllerConnections",
  "getOrganizationWirelessControllerConnectionsUnassigned",
  "getOrganizationWirelessControllerDevicesInterfacesL2ByDevice",
  "getOrganizationWirelessControllerDevicesInterfacesL2StatusesChan",
  "getOrganizationWirelessControllerDevicesInterfacesL2UsageHistory",
  "getOrganizationWirelessControllerDevicesInterfacesL3ByDevice",
  "getOrganizationWirelessControllerDevicesInterfacesL3StatusesChan",
  "getOrganizationWirelessControllerDevicesInterfacesL3UsageHistory",
  "getOrganizationWirelessControllerDevicesInterfacesPacketsOvervie",
  "getOrganizationWirelessControllerDevicesInterfacesUsageHistoryBy",
  "getOrganizationWirelessControllerDevicesRedundancyFailoverHistor",
  "getOrganizationWirelessControllerDevicesRedundancyStatuses",
  "getOrganizationWirelessControllerDevicesSystemUtilizationHistory",
  "getOrganizationWirelessControllerOverviewByDevice"
];
