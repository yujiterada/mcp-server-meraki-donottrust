export async function _secureConnect(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getOrganizationSecureConnectPrivateApplicationGroups": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplicationGroups`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSecureConnectPrivateApplicationGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplicationGroups`;
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
    case "updateOrganizationSecureConnectPrivateApplicationGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplicationGroups/{id}`;
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
    case "deleteOrganizationSecureConnectPrivateApplicationGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplicationGroups/{id}`;
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
    case "getOrganizationSecureConnectPrivateApplicationGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplicationGroups/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSecureConnectPrivateApplications": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplications`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSecureConnectPrivateApplication": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplications`;
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
    case "updateOrganizationSecureConnectPrivateApplication": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplications/{id}`;
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
    case "deleteOrganizationSecureConnectPrivateApplication": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplications/{id}`;
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
    case "getOrganizationSecureConnectPrivateApplication": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateApplications/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSecureConnectPrivateResourceGroups": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateResourceGroups`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSecureConnectPrivateResourceGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateResourceGroups`;
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
    case "updateOrganizationSecureConnectPrivateResourceGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateResourceGroups/{id}`;
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
    case "deleteOrganizationSecureConnectPrivateResourceGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateResourceGroups/{id}`;
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
    case "getOrganizationSecureConnectPrivateResources": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateResources`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSecureConnectPrivateResource": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateResources`;
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
    case "updateOrganizationSecureConnectPrivateResource": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateResources/{id}`;
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
    case "deleteOrganizationSecureConnectPrivateResource": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/privateResources/{id}`;
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
    case "getOrganizationSecureConnectPublicApplications": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/publicApplications`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSecureConnectRegions": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/regions`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSecureConnectRemoteAccessLog": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/remoteAccessLog`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSecureConnectRemoteAccessLogsExports": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/remoteAccessLogsExports`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSecureConnectRemoteAccessLogsExport": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/remoteAccessLogsExports`;
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
    case "getOrganizationSecureConnectRemoteAccessLogsExportsDownload": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/remoteAccessLogsExports/download`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSecureConnectRemoteAccessLogsExport": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/remoteAccessLogsExports/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSecureConnectSites": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/sites`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSecureConnectSite": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/sites`;
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
    case "deleteOrganizationSecureConnectSites": {
      let path = `/organizations/${params.arguments.path.organizationId}/secureConnect/sites`;
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

export const secureConnectEndpoints = [
  "getOrganizationSecureConnectPrivateApplicationGroups",
  "createOrganizationSecureConnectPrivateApplicationGroup",
  "updateOrganizationSecureConnectPrivateApplicationGroup",
  "deleteOrganizationSecureConnectPrivateApplicationGroup",
  "getOrganizationSecureConnectPrivateApplicationGroup",
  "getOrganizationSecureConnectPrivateApplications",
  "createOrganizationSecureConnectPrivateApplication",
  "updateOrganizationSecureConnectPrivateApplication",
  "deleteOrganizationSecureConnectPrivateApplication",
  "getOrganizationSecureConnectPrivateApplication",
  "getOrganizationSecureConnectPrivateResourceGroups",
  "createOrganizationSecureConnectPrivateResourceGroup",
  "updateOrganizationSecureConnectPrivateResourceGroup",
  "deleteOrganizationSecureConnectPrivateResourceGroup",
  "getOrganizationSecureConnectPrivateResources",
  "createOrganizationSecureConnectPrivateResource",
  "updateOrganizationSecureConnectPrivateResource",
  "deleteOrganizationSecureConnectPrivateResource",
  "getOrganizationSecureConnectPublicApplications",
  "getOrganizationSecureConnectRegions",
  "getOrganizationSecureConnectRemoteAccessLog",
  "getOrganizationSecureConnectRemoteAccessLogsExports",
  "createOrganizationSecureConnectRemoteAccessLogsExport",
  "getOrganizationSecureConnectRemoteAccessLogsExportsDownload",
  "getOrganizationSecureConnectRemoteAccessLogsExport",
  "getOrganizationSecureConnectSites",
  "createOrganizationSecureConnectSite",
  "deleteOrganizationSecureConnectSites"
];
