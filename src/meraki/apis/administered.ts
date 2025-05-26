export async function _administered(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getAdministeredIdentitiesMe": {
      let path = `/administered/identities/me`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getAdministeredIdentitiesMeApiKeys": {
      let path = `/administered/identities/me/api/keys`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "generateAdministeredIdentitiesMeApiKeys": {
      let path = `/administered/identities/me/api/keys/generate`;
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
    case "revokeAdministeredIdentitiesMeApiKeys": {
      let path = `/administered/identities/me/api/keys/${params.arguments.path.suffix}/revoke`;
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
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
}

export const administeredEndpoints = [
  "getAdministeredIdentitiesMe",
  "getAdministeredIdentitiesMeApiKeys",
  "generateAdministeredIdentitiesMeApiKeys",
  "revokeAdministeredIdentitiesMeApiKeys"
];
