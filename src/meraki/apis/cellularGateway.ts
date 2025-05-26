export async function _cellularGateway(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceCellularGatewayLan": {
      let path = `/devices/${params.arguments.path.serial}/cellularGateway/lan`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCellularGatewayLan": {
      let path = `/devices/${params.arguments.path.serial}/cellularGateway/lan`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCellularGatewayPortForwardingRules": {
      let path = `/devices/${params.arguments.path.serial}/cellularGateway/portForwardingRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCellularGatewayPortForwardingRules": {
      let path = `/devices/${params.arguments.path.serial}/cellularGateway/portForwardingRules`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCellularGatewayConnectivityMonitoringDestinations": {
      let path = `/networks/${params.arguments.path.networkId}/cellularGateway/connectivityMonitoringDestinations`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCellularGatewayConnectivityMonitoringDestinations": {
      let path = `/networks/${params.arguments.path.networkId}/cellularGateway/connectivityMonitoringDestinations`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCellularGatewayDhcp": {
      let path = `/networks/${params.arguments.path.networkId}/cellularGateway/dhcp`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCellularGatewayDhcp": {
      let path = `/networks/${params.arguments.path.networkId}/cellularGateway/dhcp`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCellularGatewaySubnetPool": {
      let path = `/networks/${params.arguments.path.networkId}/cellularGateway/subnetPool`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCellularGatewaySubnetPool": {
      let path = `/networks/${params.arguments.path.networkId}/cellularGateway/subnetPool`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCellularGatewayUplink": {
      let path = `/networks/${params.arguments.path.networkId}/cellularGateway/uplink`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCellularGatewayUplink": {
      let path = `/networks/${params.arguments.path.networkId}/cellularGateway/uplink`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsInventory": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/inventory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationCellularGatewayEsimsInventory": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/inventory/{id}`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsServiceProviders": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/serviceProviders`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsServiceProvidersAccounts": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/serviceProviders/accounts`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationCellularGatewayEsimsServiceProvidersAccount": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/serviceProviders/accounts`;
      if (params.arguments.body) {
        response = await client.post(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.post(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsServiceProvidersAccountsCommu": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/serviceProviders/accounts/communicationPlans`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayEsimsServiceProvidersAccountsRateP": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/serviceProviders/accounts/ratePlans`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationCellularGatewayEsimsServiceProvidersAccount": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/serviceProviders/accounts/{accountId}`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationCellularGatewayEsimsServiceProvidersAccount": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/serviceProviders/accounts/{accountId}`;
      if (params.arguments.body) {
        response = await client.delete(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.delete(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationCellularGatewayEsimsSwap": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/swap`;
      if (params.arguments.body) {
        response = await client.post(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.post(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationCellularGatewayEsimsSwap": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/esims/swap/{id}`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCellularGatewayUplinkStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/cellularGateway/uplink/statuses`;
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

export const cellularGatewayEndpoints = [
  "getDeviceCellularGatewayLan",
  "updateDeviceCellularGatewayLan",
  "getDeviceCellularGatewayPortForwardingRules",
  "updateDeviceCellularGatewayPortForwardingRules",
  "getNetworkCellularGatewayConnectivityMonitoringDestinations",
  "updateNetworkCellularGatewayConnectivityMonitoringDestinations",
  "getNetworkCellularGatewayDhcp",
  "updateNetworkCellularGatewayDhcp",
  "getNetworkCellularGatewaySubnetPool",
  "updateNetworkCellularGatewaySubnetPool",
  "getNetworkCellularGatewayUplink",
  "updateNetworkCellularGatewayUplink",
  "getOrganizationCellularGatewayEsimsInventory",
  "updateOrganizationCellularGatewayEsimsInventory",
  "getOrganizationCellularGatewayEsimsServiceProviders",
  "getOrganizationCellularGatewayEsimsServiceProvidersAccounts",
  "createOrganizationCellularGatewayEsimsServiceProvidersAccount",
  "getOrganizationCellularGatewayEsimsServiceProvidersAccountsCommu",
  "getOrganizationCellularGatewayEsimsServiceProvidersAccountsRateP",
  "updateOrganizationCellularGatewayEsimsServiceProvidersAccount",
  "deleteOrganizationCellularGatewayEsimsServiceProvidersAccount",
  "createOrganizationCellularGatewayEsimsSwap",
  "updateOrganizationCellularGatewayEsimsSwap",
  "getOrganizationCellularGatewayUplinkStatuses"
];
