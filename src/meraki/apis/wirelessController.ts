function hasBodyPrefixedKeys(obj: any) {
  // Check if obj is null or not an object
  if (!obj || typeof obj !== 'object') {
    return false;
  }
  // Get all keys of the object
  const keys = Object.keys(obj);
  // Check if any key starts with "body-"
  return keys.some(key => key.startsWith('body-'));
}

function transformRequestBody(obj: any) {
  const transformedObject: any = {};
  // Loop through all keys in the original object
  Object.keys(obj).forEach(key => {
    // Check if the key starts with "body-"
    if (key.startsWith('body-')) {
      // Create a new key without the "body-" prefix
      const newKey = key.substring(5); // Remove first 5 characters ("body-")
      // Copy the value to the new key
      transformedObject[newKey] = obj[key];
    } else {
      // If the key doesn't start with "body-", keep it as is
      transformedObject[key] = obj[key];
    }
  });
  return transformedObject;
}

function transformQueryParams(obj: any) {
  const transformedObject: any = {};
  Object.keys(obj).forEach(key => {
    // Check if the key starts with "query-"
    if (key.startsWith('query-')) {
      // Create a new key without the "query-" prefix
      const newKey = key.substring(6); // Remove first 6 characters ("query-")
      // Copy the value to the new key
      transformedObject[newKey] = obj[key];
    }
  });
  return transformedObject;
}

export async function _wirelessController(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getOrganizationWirelessControllerAvailabilitiesChangeHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/availabilities/changeHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerClientsOverviewHistoryByDeviceB": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/clients/overview/history/byDevice/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerConnections": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/connections`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerConnectionsUnassigned": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/connections/unassigned`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL2ByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/interfaces/l2/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL2StatusesChan": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/interfaces/l2/statuses/changeHistory/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL2UsageHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/interfaces/l2/usage/history/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL3ByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/interfaces/l3/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL3StatusesChan": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/interfaces/l3/statuses/changeHistory/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesL3UsageHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/interfaces/l3/usage/history/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesPacketsOvervie": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/interfaces/packets/overview/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesInterfacesUsageHistoryBy": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/interfaces/usage/history/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesRedundancyFailoverHistor": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/redundancy/failover/history`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesRedundancyStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/redundancy/statuses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerDevicesSystemUtilizationHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/devices/system/utilization/history/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessControllerOverviewByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/wirelessController/overview/byDevice`, { params: queryParams });
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
  "getOrganizationWirelessControllerAvailabilitiesChangeHistory","getOrganizationWirelessControllerClientsOverviewHistoryByDeviceB","getOrganizationWirelessControllerConnections","getOrganizationWirelessControllerConnectionsUnassigned","getOrganizationWirelessControllerDevicesInterfacesL2ByDevice","getOrganizationWirelessControllerDevicesInterfacesL2StatusesChan","getOrganizationWirelessControllerDevicesInterfacesL2UsageHistory","getOrganizationWirelessControllerDevicesInterfacesL3ByDevice","getOrganizationWirelessControllerDevicesInterfacesL3StatusesChan","getOrganizationWirelessControllerDevicesInterfacesL3UsageHistory","getOrganizationWirelessControllerDevicesInterfacesPacketsOvervie","getOrganizationWirelessControllerDevicesInterfacesUsageHistoryBy","getOrganizationWirelessControllerDevicesRedundancyFailoverHistor","getOrganizationWirelessControllerDevicesRedundancyStatuses","getOrganizationWirelessControllerDevicesSystemUtilizationHistory","getOrganizationWirelessControllerOverviewByDevice"
];
