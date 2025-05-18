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

export async function _cellularGateway(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceCellularGatewayLan": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/cellularGateway/lan`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCellularGatewayLan": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/cellularGateway/lan`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/cellularGateway/lan`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCellularGatewayPortForwardingRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/cellularGateway/portForwardingRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCellularGatewayPortForwardingRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/cellularGateway/portForwardingRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/cellularGateway/portForwardingRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCellularGatewayConnectivityMonitoringDestinations": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/cellularGateway/connectivityMonitoringDestinations`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCellularGatewayConnectivityMonitoringDestinations": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/cellularGateway/connectivityMonitoringDestinations`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/cellularGateway/connectivityMonitoringDestinations`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCellularGatewayDhcp": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/cellularGateway/dhcp`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCellularGatewayDhcp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/cellularGateway/dhcp`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/cellularGateway/dhcp`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCellularGatewaySubnetPool": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/cellularGateway/subnetPool`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCellularGatewaySubnetPool": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/cellularGateway/subnetPool`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/cellularGateway/subnetPool`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCellularGatewayUplink": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/cellularGateway/uplink`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCellularGatewayUplink": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/cellularGateway/uplink`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/cellularGateway/uplink`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsInventory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/inventory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationCellularGatewayEsimsInventory": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/inventory/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/inventory/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsServiceProviders": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsServiceProvidersAccounts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationCellularGatewayEsimsServiceProvidersAccount": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsServiceProvidersAccountsCommu": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts/communicationPlans`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsServiceProvidersAccountsRateP": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts/ratePlans`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationCellularGatewayEsimsServiceProvidersAccount": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts/{accountId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts/{accountId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationCellularGatewayEsimsServiceProvidersAccount": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts/{accountId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/serviceProviders/accounts/{accountId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationCellularGatewayEsimsSwap": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/swap`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/swap`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationCellularGatewayEsimsSwap": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/swap/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/esims/swap/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayUplinkStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/cellularGateway/uplink/statuses`, { params: queryParams });
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

export const cellularGatewayEndpoints = [
  "getDeviceCellularGatewayLan","updateDeviceCellularGatewayLan","getDeviceCellularGatewayPortForwardingRules","updateDeviceCellularGatewayPortForwardingRules","getNetworkCellularGatewayConnectivityMonitoringDestinations","updateNetworkCellularGatewayConnectivityMonitoringDestinations","getNetworkCellularGatewayDhcp","updateNetworkCellularGatewayDhcp","getNetworkCellularGatewaySubnetPool","updateNetworkCellularGatewaySubnetPool","getNetworkCellularGatewayUplink","updateNetworkCellularGatewayUplink","getOrganizationCellularGatewayEsimsInventory","updateOrganizationCellularGatewayEsimsInventory","getOrganizationCellularGatewayEsimsServiceProviders","getOrganizationCellularGatewayEsimsServiceProvidersAccounts","createOrganizationCellularGatewayEsimsServiceProvidersAccount","getOrganizationCellularGatewayEsimsServiceProvidersAccountsCommu","getOrganizationCellularGatewayEsimsServiceProvidersAccountsRateP","updateOrganizationCellularGatewayEsimsServiceProvidersAccount","deleteOrganizationCellularGatewayEsimsServiceProvidersAccount","createOrganizationCellularGatewayEsimsSwap","updateOrganizationCellularGatewayEsimsSwap","getOrganizationCellularGatewayUplinkStatuses"
];
