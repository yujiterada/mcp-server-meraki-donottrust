export async function _campusGateway(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "createNetworkCampusGatewayCluster": {
      let path = `/networks/${params.arguments.path.networkId}/campusGateway/clusters`;
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
    case "updateNetworkCampusGatewayCluster": {
      let path = `/networks/${params.arguments.path.networkId}/campusGateway/clusters/{clusterId}`;
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
    case "getOrganizationCampusGatewayClusters": {
      let path = `/organizations/${params.arguments.path.organizationId}/campusGateway/clusters`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCampusGatewayDevicesUplinksLocalOverridesByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/campusGateway/devices/uplinks/localOverrides/byDevice`;
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

export const campusGatewayEndpoints = [
  "createNetworkCampusGatewayCluster",
  "updateNetworkCampusGatewayCluster",
  "getOrganizationCampusGatewayClusters",
  "getOrganizationCampusGatewayDevicesUplinksLocalOverridesByDevice"
];
