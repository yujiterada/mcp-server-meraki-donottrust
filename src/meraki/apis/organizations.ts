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

export async function _organizations(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getOrganizations": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganization": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganization": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganization": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganization": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationActionBatch": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/actionBatches`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/actionBatches`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationActionBatches": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/actionBatches`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationActionBatch": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/actionBatches/{actionBatchId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationActionBatch": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/actionBatches/{actionBatchId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/actionBatches/{actionBatchId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationActionBatch": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/actionBatches/{actionBatchId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/actionBatches/{actionBatchId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicyAcls": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/acls`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAdaptivePolicyAcl": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/acls`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/acls`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicyAcl": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/acls/{aclId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdaptivePolicyAcl": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/acls/{aclId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/acls/{aclId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationAdaptivePolicyAcl": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/acls/{aclId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/acls/{aclId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicyGroups": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/groups`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAdaptivePolicyGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/groups`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/groups`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicyGroup": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/groups/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdaptivePolicyGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/groups/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/groups/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationAdaptivePolicyGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/groups/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/groups/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicyOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicyPolicies": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/policies`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAdaptivePolicyPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/policies`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/policies`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicyPolicy": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/policies/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdaptivePolicyPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/policies/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/policies/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationAdaptivePolicyPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/policies/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/policies/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicySettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdaptivePolicySettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/adaptivePolicy/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdmins": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/admins`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAdmin": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/admins`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/admins`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdmin": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/admins/{adminId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/admins/{adminId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationAdmin": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/admins/{adminId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/admins/{adminId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAlertsProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/alerts/profiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAlertsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/alerts/profiles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/alerts/profiles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAlertsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/alerts/profiles/{alertConfigId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/alerts/profiles/{alertConfigId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationAlertsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/alerts/profiles/{alertConfigId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/alerts/profiles/{alertConfigId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApiRequests": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/apiRequests`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApiRequestsOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/apiRequests/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApiRequestsOverviewResponseCodesByInterval": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/apiRequests/overview/responseCodes/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlerts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "dismissOrganizationAssuranceAlerts": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/dismiss`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/dismiss`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlertsOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlertsOverviewByNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/overview/byNetwork`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlertsOverviewByType": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/overview/byType`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlertsOverviewHistorical": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/overview/historical`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "restoreOrganizationAssuranceAlerts": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/restore`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/restore`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlert": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/assurance/alerts/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceProductAnnouncements": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/assurance/productAnnouncements`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAuthRadiusServers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAuthRadiusServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAuthRadiusServersAssignments": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers/assignments`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAuthRadiusServer": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers/{serverId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAuthRadiusServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers/{serverId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers/{serverId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationAuthRadiusServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers/{serverId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/auth/radius/servers/{serverId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationBrandingPolicies": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationBrandingPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationBrandingPoliciesPriorities": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies/priorities`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationBrandingPoliciesPriorities": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies/priorities`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies/priorities`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationBrandingPolicy": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies/{brandingPolicyId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationBrandingPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies/{brandingPolicyId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies/{brandingPolicyId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationBrandingPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies/{brandingPolicyId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/brandingPolicies/{brandingPolicyId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCertificates": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/certificates`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationCertificatesImport": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/certificates/import`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/certificates/import`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationCertificate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/certificates/{certificateId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/certificates/{certificateId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationCertificate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/certificates/{certificateId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/certificates/{certificateId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCertificateContents": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/certificates/{certificateId}/contents`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "claimIntoOrganization": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/claim`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/claim`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationClientsBandwidthUsageHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/clients/bandwidthUsageHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationClientsOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/clients/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationClientsSearch": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/clients/search`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "cloneOrganization": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/clone`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/clone`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCloudConnectivityRequirements": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/cloud/connectivity/requirements`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplates": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/configTemplates`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationConfigTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/configTemplates`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/configTemplates`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplate": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationConfigTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationConfigTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigurationChanges": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/configurationChanges`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevices": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesAvailabilities": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/availabilities`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesAvailabilitiesChangeHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/availabilities/changeHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesBootsHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/boots/history`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationDevicesControllerMigration": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/controller/migrations`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/controller/migrations`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesControllerMigrations": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/controller/migrations`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bulkUpdateOrganizationDevicesDetails": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/details/bulkUpdate`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/details/bulkUpdate`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesOverviewByModel": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/overview/byModel`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesPacketCaptureCaptures": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationDevicesPacketCaptureCapture": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bulkOrganizationDevicesPacketCaptureCapturesCreate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/bulkCreate`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/bulkCreate`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bulkOrganizationDevicesPacketCaptureCapturesDelete": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/bulkDelete`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/bulkDelete`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationDevicesPacketCaptureCapture": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/{captureId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/{captureId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "generateOrganizationDevicesPacketCaptureCaptureDownloadUrl": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/{captureId}/downloadUrl/generate`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/{captureId}/downloadUrl/generate`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "stopOrganizationDevicesPacketCaptureCapture": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/{captureId}/stop`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/captures/{captureId}/stop`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesPacketCaptureSchedules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationDevicesPacketCaptureSchedule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bulkOrganizationDevicesPacketCaptureSchedulesDelete": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules/bulkDelete`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules/bulkDelete`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "reorderOrganizationDevicesPacketCaptureSchedules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules/reorder`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules/reorder`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationDevicesPacketCaptureSchedule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules/{scheduleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules/{scheduleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationDevicesPacketCaptureSchedule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules/{scheduleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCapture/schedules/{scheduleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "tasksOrganizationDevicesPacketCapture": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCaptures/{packetId}/tasks`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCaptures/{packetId}/tasks`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesPacketCaptureTask": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/packetCaptures/{packetId}/tasks/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesPowerModulesStatusesByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/powerModules/statuses/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesProvisioningStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/provisioning/statuses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/statuses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesStatusesOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/statuses/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesSyslogServersRolesByNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/syslog/servers/roles/byNetwork`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesSystemMemoryUsageHistoryByInterval": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/system/memory/usage/history/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesUplinksAddressesByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/uplinks/addresses/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesUplinksLossAndLatency": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/devices/uplinksLossAndLatency`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationEarlyAccessFeatures": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationEarlyAccessFeaturesOptIns": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features/optIns`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationEarlyAccessFeaturesOptIn": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features/optIns`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features/optIns`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationEarlyAccessFeaturesOptIn": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features/optIns/{optInId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationEarlyAccessFeaturesOptIn": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features/optIns/{optInId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features/optIns/{optInId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationEarlyAccessFeaturesOptIn": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features/optIns/{optInId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/earlyAccess/features/optIns/{optInId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationExtensionsSdwanmanagerInterconnect": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/extensions/sdwanmanager/interconnects/{interconnectId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/extensions/sdwanmanager/interconnects/{interconnectId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationExtensionsThousandEyesNetworks": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationExtensionsThousandEyesNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationExtensionsThousandEyesNetworksSupported": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks/supported`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationExtensionsThousandEyesNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks/{networkId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationExtensionsThousandEyesNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks/{networkId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks/{networkId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationExtensionsThousandEyesNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks/{networkId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/networks/{networkId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationExtensionsThousandEyesTest": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/tests`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/extensions/thousandEyes/tests`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationFirmwareUpgrades": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/firmware/upgrades`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationFirmwareUpgradesByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/firmware/upgrades/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationFloorPlansAutoLocateDevices": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/floorPlans/autoLocate/devices`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationFloorPlansAutoLocateStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/floorPlans/autoLocate/statuses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationIntegrationsXdrNetworks": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/integrations/xdr/networks`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "disableOrganizationIntegrationsXdrNetworks": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/integrations/xdr/networks/disable`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/integrations/xdr/networks/disable`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "enableOrganizationIntegrationsXdrNetworks": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/integrations/xdr/networks/enable`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/integrations/xdr/networks/enable`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "claimIntoOrganizationInventory": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/claim`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/claim`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInventoryDevices": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/inventory/devices`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInventoryDevicesSwapsBulk": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/devices/swaps/bulk`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/devices/swaps/bulk`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInventoryDevicesSwapsBulk": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/inventory/devices/swaps/bulk/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInventoryDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/inventory/devices/{serial}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInventoryOnboardingCloudMonitoringExportEvent": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/onboarding/cloudMonitoring/exportEvents`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/onboarding/cloudMonitoring/exportEvents`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInventoryOnboardingCloudMonitoringImport": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/onboarding/cloudMonitoring/imports`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/onboarding/cloudMonitoring/imports`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInventoryOnboardingCloudMonitoringImports": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/inventory/onboarding/cloudMonitoring/imports`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInventoryOnboardingCloudMonitoringNetworks": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/inventory/onboarding/cloudMonitoring/networks`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInventoryOnboardingCloudMonitoringPrepare": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/onboarding/cloudMonitoring/prepare`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/onboarding/cloudMonitoring/prepare`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "claimOrganizationInventoryOrders": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/orders/claim`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/orders/claim`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "previewOrganizationInventoryOrders": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/orders/preview`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/orders/preview`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "releaseFromOrganizationInventory": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/release`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/inventory/release`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationLicenses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/licenses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "assignOrganizationLicensesSeats": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/licenses/assignSeats`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/licenses/assignSeats`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "moveOrganizationLicenses": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/licenses/move`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/licenses/move`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "moveOrganizationLicensesSeats": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/licenses/moveSeats`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/licenses/moveSeats`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationLicensesOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/licenses/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "renewOrganizationLicensesSeats": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/licenses/renewSeats`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/licenses/renewSeats`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationLicense": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/licenses/{licenseId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationLicense": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/licenses/{licenseId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/licenses/{licenseId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationLoginSecurity": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/loginSecurity`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationLoginSecurity": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/loginSecurity`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/loginSecurity`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationNetworks": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/networks`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/networks`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/networks`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "combineOrganizationNetworks": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/networks/combine`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/networks/combine`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkMove": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/networks/moves`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/networks/moves`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkMoves": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/networks/moves`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkMove": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/networks/moves/{networkMoveId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationOpenapiSpec": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/openapiSpec`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationPoliciesAssignmentsByClient": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/policies/assignments/byClient`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationPolicyObjects": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/policyObjects`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationPolicyObject": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/policyObjects`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/policyObjects`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationPolicyObjectsGroups": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/groups`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationPolicyObjectsGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/groups`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/groups`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationPolicyObjectsGroup": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/groups/{policyObjectGroupId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationPolicyObjectsGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/groups/{policyObjectGroupId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/groups/{policyObjectGroupId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationPolicyObjectsGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/groups/{policyObjectGroupId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/groups/{policyObjectGroupId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationPolicyObject": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/{policyObjectId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationPolicyObject": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/{policyObjectId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/{policyObjectId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationPolicyObject": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/{policyObjectId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/policyObjects/{policyObjectId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSaml": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/saml`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSaml": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/saml`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/saml`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSamlIdps": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/saml/idps`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSamlIdp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/saml/idps`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/saml/idps`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSamlIdp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/saml/idps/{idpId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/saml/idps/{idpId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSamlIdp": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/saml/idps/{idpId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSamlIdp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/saml/idps/{idpId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/saml/idps/{idpId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSamlRoles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/samlRoles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSamlRole": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/samlRoles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/samlRoles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSamlRole": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/samlRoles/{samlRoleId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSamlRole": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/samlRoles/{samlRoleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/samlRoles/{samlRoleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSamlRole": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/samlRoles/{samlRoleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/samlRoles/{samlRoleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSaseConnectivityEnrollableNetworks": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sase/connectivity/enrollableNetworks`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSaseConnectivitySitesBulkDetach": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/sase/connectivity/sites/bulkDetach`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/sase/connectivity/sites/bulkDetach`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSaseConnectivitySitesBulkEnroll": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/sase/connectivity/sites/bulkEnroll`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/sase/connectivity/sites/bulkEnroll`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSaseConnectivitySite": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sase/connectivity/sites/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSnmp": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/snmp`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSnmp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/snmp`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/snmp`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSnmpTrapsByNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/snmp/traps/byNetwork`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSpacesIntegrationRemove": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/spaces/integration/remove`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/spaces/integration/remove`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSpacesIntegrationRemove": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/spaces/integration/remove`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/spaces/integration/remove`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSplashAsset": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/splash/assets/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSplashAsset": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/splash/assets/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/splash/assets/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSplashThemes": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/splash/themes`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSplashTheme": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/splash/themes`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/splash/themes`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSplashTheme": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/splash/themes/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/splash/themes/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSplashThemeAsset": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/splash/themes/{themeIdentifier}/assets`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/splash/themes/{themeIdentifier}/assets`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopAppliancesByUtilization": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/appliances/byUtilization`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopApplicationsByUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/applications/byUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopApplicationsCategoriesByUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/applications/categories/byUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopClientsByUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/clients/byUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopClientsManufacturersByUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/clients/manufacturers/byUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopDevicesByUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/devices/byUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopDevicesModelsByUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/devices/models/byUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopNetworksByStatus": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/networks/byStatus`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopSsidsByUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/ssids/byUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopSwitchesByEnergyUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/top/switches/byEnergyUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSupportSalesRepresentatives": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/support/salesRepresentatives`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationUplinksStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/uplinks/statuses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksAlertTypes": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/webhooks/alertTypes`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksCallbacksStatus": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/webhooks/callbacks/statuses/{callbackId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksHttpServers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/webhooks/httpServers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationWebhooksHttpServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/webhooks/httpServers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/webhooks/httpServers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksHttpServer": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/webhooks/httpServers/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationWebhooksHttpServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/webhooks/httpServers/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/webhooks/httpServers/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationWebhooksHttpServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/webhooks/httpServers/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/webhooks/httpServers/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksLogs": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/webhooks/logs`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksPayloadTemplates": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/webhooks/payloadTemplates`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationWebhooksPayloadTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/webhooks/payloadTemplates`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/webhooks/payloadTemplates`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksPayloadTemplate": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationWebhooksPayloadTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationWebhooksPayloadTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationWebhooksWebhookTest": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/webhooks/webhookTests`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/webhooks/webhookTests`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksWebhookTest": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/webhooks/webhookTests/{webhookTestId}`, { params: queryParams });
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

export const organizationsEndpoints = [
  "getOrganizations","createOrganization","getOrganization","updateOrganization","deleteOrganization","createOrganizationActionBatch","getOrganizationActionBatches","getOrganizationActionBatch","deleteOrganizationActionBatch","updateOrganizationActionBatch","getOrganizationAdaptivePolicyAcls","createOrganizationAdaptivePolicyAcl","getOrganizationAdaptivePolicyAcl","updateOrganizationAdaptivePolicyAcl","deleteOrganizationAdaptivePolicyAcl","getOrganizationAdaptivePolicyGroups","createOrganizationAdaptivePolicyGroup","getOrganizationAdaptivePolicyGroup","updateOrganizationAdaptivePolicyGroup","deleteOrganizationAdaptivePolicyGroup","getOrganizationAdaptivePolicyOverview","getOrganizationAdaptivePolicyPolicies","createOrganizationAdaptivePolicyPolicy","getOrganizationAdaptivePolicyPolicy","updateOrganizationAdaptivePolicyPolicy","deleteOrganizationAdaptivePolicyPolicy","getOrganizationAdaptivePolicySettings","updateOrganizationAdaptivePolicySettings","getOrganizationAdmins","createOrganizationAdmin","updateOrganizationAdmin","deleteOrganizationAdmin","getOrganizationAlertsProfiles","createOrganizationAlertsProfile","updateOrganizationAlertsProfile","deleteOrganizationAlertsProfile","getOrganizationApiRequests","getOrganizationApiRequestsOverview","getOrganizationApiRequestsOverviewResponseCodesByInterval","getOrganizationAssuranceAlerts","dismissOrganizationAssuranceAlerts","getOrganizationAssuranceAlertsOverview","getOrganizationAssuranceAlertsOverviewByNetwork","getOrganizationAssuranceAlertsOverviewByType","getOrganizationAssuranceAlertsOverviewHistorical","restoreOrganizationAssuranceAlerts","getOrganizationAssuranceAlert","getOrganizationAssuranceProductAnnouncements","getOrganizationAuthRadiusServers","createOrganizationAuthRadiusServer","getOrganizationAuthRadiusServersAssignments","getOrganizationAuthRadiusServer","updateOrganizationAuthRadiusServer","deleteOrganizationAuthRadiusServer","getOrganizationBrandingPolicies","createOrganizationBrandingPolicy","getOrganizationBrandingPoliciesPriorities","updateOrganizationBrandingPoliciesPriorities","getOrganizationBrandingPolicy","updateOrganizationBrandingPolicy","deleteOrganizationBrandingPolicy","getOrganizationCertificates","createOrganizationCertificatesImport","deleteOrganizationCertificate","updateOrganizationCertificate","getOrganizationCertificateContents","claimIntoOrganization","getOrganizationClientsBandwidthUsageHistory","getOrganizationClientsOverview","getOrganizationClientsSearch","cloneOrganization","getOrganizationCloudConnectivityRequirements","getOrganizationConfigTemplates","createOrganizationConfigTemplate","getOrganizationConfigTemplate","updateOrganizationConfigTemplate","deleteOrganizationConfigTemplate","getOrganizationConfigurationChanges","getOrganizationDevices","getOrganizationDevicesAvailabilities","getOrganizationDevicesAvailabilitiesChangeHistory","getOrganizationDevicesBootsHistory","createOrganizationDevicesControllerMigration","getOrganizationDevicesControllerMigrations","bulkUpdateOrganizationDevicesDetails","getOrganizationDevicesOverviewByModel","getOrganizationDevicesPacketCaptureCaptures","createOrganizationDevicesPacketCaptureCapture","bulkOrganizationDevicesPacketCaptureCapturesCreate","bulkOrganizationDevicesPacketCaptureCapturesDelete","deleteOrganizationDevicesPacketCaptureCapture","generateOrganizationDevicesPacketCaptureCaptureDownloadUrl","stopOrganizationDevicesPacketCaptureCapture","getOrganizationDevicesPacketCaptureSchedules","createOrganizationDevicesPacketCaptureSchedule","bulkOrganizationDevicesPacketCaptureSchedulesDelete","reorderOrganizationDevicesPacketCaptureSchedules","updateOrganizationDevicesPacketCaptureSchedule","deleteOrganizationDevicesPacketCaptureSchedule","tasksOrganizationDevicesPacketCapture","getOrganizationDevicesPacketCaptureTask","getOrganizationDevicesPowerModulesStatusesByDevice","getOrganizationDevicesProvisioningStatuses","getOrganizationDevicesStatuses","getOrganizationDevicesStatusesOverview","getOrganizationDevicesSyslogServersRolesByNetwork","getOrganizationDevicesSystemMemoryUsageHistoryByInterval","getOrganizationDevicesUplinksAddressesByDevice","getOrganizationDevicesUplinksLossAndLatency","getOrganizationEarlyAccessFeatures","getOrganizationEarlyAccessFeaturesOptIns","createOrganizationEarlyAccessFeaturesOptIn","getOrganizationEarlyAccessFeaturesOptIn","updateOrganizationEarlyAccessFeaturesOptIn","deleteOrganizationEarlyAccessFeaturesOptIn","updateOrganizationExtensionsSdwanmanagerInterconnect","getOrganizationExtensionsThousandEyesNetworks","createOrganizationExtensionsThousandEyesNetwork","getOrganizationExtensionsThousandEyesNetworksSupported","getOrganizationExtensionsThousandEyesNetwork","updateOrganizationExtensionsThousandEyesNetwork","deleteOrganizationExtensionsThousandEyesNetwork","createOrganizationExtensionsThousandEyesTest","getOrganizationFirmwareUpgrades","getOrganizationFirmwareUpgradesByDevice","getOrganizationFloorPlansAutoLocateDevices","getOrganizationFloorPlansAutoLocateStatuses","getOrganizationIntegrationsXdrNetworks","disableOrganizationIntegrationsXdrNetworks","enableOrganizationIntegrationsXdrNetworks","claimIntoOrganizationInventory","getOrganizationInventoryDevices","createOrganizationInventoryDevicesSwapsBulk","getOrganizationInventoryDevicesSwapsBulk","getOrganizationInventoryDevice","createOrganizationInventoryOnboardingCloudMonitoringExportEvent","createOrganizationInventoryOnboardingCloudMonitoringImport","getOrganizationInventoryOnboardingCloudMonitoringImports","getOrganizationInventoryOnboardingCloudMonitoringNetworks","createOrganizationInventoryOnboardingCloudMonitoringPrepare","claimOrganizationInventoryOrders","previewOrganizationInventoryOrders","releaseFromOrganizationInventory","getOrganizationLicenses","assignOrganizationLicensesSeats","moveOrganizationLicenses","moveOrganizationLicensesSeats","getOrganizationLicensesOverview","renewOrganizationLicensesSeats","getOrganizationLicense","updateOrganizationLicense","getOrganizationLoginSecurity","updateOrganizationLoginSecurity","getOrganizationNetworks","createOrganizationNetwork","combineOrganizationNetworks","createNetworkMove","getNetworkMoves","getNetworkMove","getOrganizationOpenapiSpec","getOrganizationPoliciesAssignmentsByClient","getOrganizationPolicyObjects","createOrganizationPolicyObject","getOrganizationPolicyObjectsGroups","createOrganizationPolicyObjectsGroup","getOrganizationPolicyObjectsGroup","updateOrganizationPolicyObjectsGroup","deleteOrganizationPolicyObjectsGroup","getOrganizationPolicyObject","updateOrganizationPolicyObject","deleteOrganizationPolicyObject","getOrganizationSaml","updateOrganizationSaml","getOrganizationSamlIdps","createOrganizationSamlIdp","updateOrganizationSamlIdp","getOrganizationSamlIdp","deleteOrganizationSamlIdp","getOrganizationSamlRoles","createOrganizationSamlRole","getOrganizationSamlRole","updateOrganizationSamlRole","deleteOrganizationSamlRole","getOrganizationSaseConnectivityEnrollableNetworks","deleteOrganizationSaseConnectivitySitesBulkDetach","createOrganizationSaseConnectivitySitesBulkEnroll","getOrganizationSaseConnectivitySite","getOrganizationSnmp","updateOrganizationSnmp","getOrganizationSnmpTrapsByNetwork","deleteOrganizationSpacesIntegrationRemove","createOrganizationSpacesIntegrationRemove","getOrganizationSplashAsset","deleteOrganizationSplashAsset","getOrganizationSplashThemes","createOrganizationSplashTheme","deleteOrganizationSplashTheme","createOrganizationSplashThemeAsset","getOrganizationSummaryTopAppliancesByUtilization","getOrganizationSummaryTopApplicationsByUsage","getOrganizationSummaryTopApplicationsCategoriesByUsage","getOrganizationSummaryTopClientsByUsage","getOrganizationSummaryTopClientsManufacturersByUsage","getOrganizationSummaryTopDevicesByUsage","getOrganizationSummaryTopDevicesModelsByUsage","getOrganizationSummaryTopNetworksByStatus","getOrganizationSummaryTopSsidsByUsage","getOrganizationSummaryTopSwitchesByEnergyUsage","getOrganizationSupportSalesRepresentatives","getOrganizationUplinksStatuses","getOrganizationWebhooksAlertTypes","getOrganizationWebhooksCallbacksStatus","getOrganizationWebhooksHttpServers","createOrganizationWebhooksHttpServer","getOrganizationWebhooksHttpServer","updateOrganizationWebhooksHttpServer","deleteOrganizationWebhooksHttpServer","getOrganizationWebhooksLogs","getOrganizationWebhooksPayloadTemplates","createOrganizationWebhooksPayloadTemplate","getOrganizationWebhooksPayloadTemplate","deleteOrganizationWebhooksPayloadTemplate","updateOrganizationWebhooksPayloadTemplate","createOrganizationWebhooksWebhookTest","getOrganizationWebhooksWebhookTest"
];
