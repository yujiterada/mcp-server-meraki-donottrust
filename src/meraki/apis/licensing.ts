export async function _licensing(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getAdministeredLicensingSubscriptionEntitlements": {
      let path = `/administered/licensing/subscription/entitlements`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "batchAdministeredLicensingSubscriptionNetworksFeatureTiersUpdate": {
      let path = `/administered/licensing/subscription/networks/featureTiers/batchUpdate`;
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
    case "getAdministeredLicensingSubscriptionSubscriptions": {
      let path = `/administered/licensing/subscription/subscriptions`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "claimAdministeredLicensingSubscriptionSubscriptions": {
      let path = `/administered/licensing/subscription/subscriptions/claim`;
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
    case "validateAdministeredLicensingSubscriptionSubscriptionsClaimKey": {
      let path = `/administered/licensing/subscription/subscriptions/claimKey/validate`;
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
    case "getAdministeredLicensingSubscriptionSubscriptionsComplianceStatu": {
      let path = `/administered/licensing/subscription/subscriptions/compliance/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bindAdministeredLicensingSubscriptionSubscription": {
      let path = `/administered/licensing/subscription/subscriptions/${params.arguments.path.subscriptionId}/bind`;
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
    case "getOrganizationLicensingCotermLicenses": {
      let path = `/organizations/${params.arguments.path.organizationId}/licensing/coterm/licenses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "moveOrganizationLicensingCotermLicenses": {
      let path = `/organizations/${params.arguments.path.organizationId}/licensing/coterm/licenses/move`;
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

export const licensingEndpoints = [
  "getAdministeredLicensingSubscriptionEntitlements",
  "batchAdministeredLicensingSubscriptionNetworksFeatureTiersUpdate",
  "getAdministeredLicensingSubscriptionSubscriptions",
  "claimAdministeredLicensingSubscriptionSubscriptions",
  "validateAdministeredLicensingSubscriptionSubscriptionsClaimKey",
  "getAdministeredLicensingSubscriptionSubscriptionsComplianceStatu",
  "bindAdministeredLicensingSubscriptionSubscription",
  "getOrganizationLicensingCotermLicenses",
  "moveOrganizationLicensingCotermLicenses"
];
