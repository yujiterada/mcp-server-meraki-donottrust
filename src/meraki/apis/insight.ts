export async function _insight(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getNetworkInsightApplicationHealthByTime": {
      let path = `/networks/${params.arguments.path.networkId}/insight/applications/{applicationId}/healthByTime`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInsightApplications": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/applications`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInsightApplication": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/applications`;
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
    case "updateOrganizationInsightApplication": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/applications/{applicationId}`;
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
    case "deleteOrganizationInsightApplication": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/applications/{applicationId}`;
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
    case "getOrganizationInsightMonitoredMediaServers": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/monitoredMediaServers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInsightMonitoredMediaServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/monitoredMediaServers`;
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
    case "getOrganizationInsightMonitoredMediaServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationInsightMonitoredMediaServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}`;
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
    case "deleteOrganizationInsightMonitoredMediaServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}`;
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
    case "getOrganizationInsightSpeedTestResults": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/speedTestResults`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInsightWebApps": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/webApps`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInsightWebApp": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/webApps`;
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
    case "updateOrganizationInsightWebApp": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/webApps/{customCounterSetRuleId}`;
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
    case "deleteOrganizationInsightWebApp": {
      let path = `/organizations/${params.arguments.path.organizationId}/insight/webApps/{customCounterSetRuleId}`;
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
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
}

export const insightEndpoints = [
  "getNetworkInsightApplicationHealthByTime",
  "getOrganizationInsightApplications",
  "createOrganizationInsightApplication",
  "updateOrganizationInsightApplication",
  "deleteOrganizationInsightApplication",
  "getOrganizationInsightMonitoredMediaServers",
  "createOrganizationInsightMonitoredMediaServer",
  "getOrganizationInsightMonitoredMediaServer",
  "updateOrganizationInsightMonitoredMediaServer",
  "deleteOrganizationInsightMonitoredMediaServer",
  "getOrganizationInsightSpeedTestResults",
  "getOrganizationInsightWebApps",
  "createOrganizationInsightWebApp",
  "updateOrganizationInsightWebApp",
  "deleteOrganizationInsightWebApp"
];
