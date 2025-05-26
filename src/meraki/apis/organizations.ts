export async function _organizations(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getOrganizations": {
      let path = `/organizations`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganization": {
      let path = `/organizations`;
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
    case "getOrganization": {
      let path = `/organizations/${params.arguments.path.organizationId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganization": {
      let path = `/organizations/${params.arguments.path.organizationId}`;
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
    case "deleteOrganization": {
      let path = `/organizations/${params.arguments.path.organizationId}`;
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
    case "createOrganizationActionBatch": {
      let path = `/organizations/${params.arguments.path.organizationId}/actionBatches`;
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
    case "getOrganizationActionBatches": {
      let path = `/organizations/${params.arguments.path.organizationId}/actionBatches`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationActionBatch": {
      let path = `/organizations/${params.arguments.path.organizationId}/actionBatches/{actionBatchId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationActionBatch": {
      let path = `/organizations/${params.arguments.path.organizationId}/actionBatches/{actionBatchId}`;
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
    case "updateOrganizationActionBatch": {
      let path = `/organizations/${params.arguments.path.organizationId}/actionBatches/{actionBatchId}`;
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
    case "getOrganizationAdaptivePolicyAcls": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/acls`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAdaptivePolicyAcl": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/acls`;
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
    case "getOrganizationAdaptivePolicyAcl": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/acls/{aclId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdaptivePolicyAcl": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/acls/{aclId}`;
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
    case "deleteOrganizationAdaptivePolicyAcl": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/acls/{aclId}`;
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
    case "getOrganizationAdaptivePolicyGroups": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/groups`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAdaptivePolicyGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/groups`;
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
    case "getOrganizationAdaptivePolicyGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/groups/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdaptivePolicyGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/groups/{id}`;
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
    case "deleteOrganizationAdaptivePolicyGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/groups/{id}`;
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
    case "getOrganizationAdaptivePolicyOverview": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAdaptivePolicyPolicies": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/policies`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAdaptivePolicyPolicy": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/policies`;
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
    case "getOrganizationAdaptivePolicyPolicy": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/policies/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdaptivePolicyPolicy": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/policies/{id}`;
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
    case "deleteOrganizationAdaptivePolicyPolicy": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/policies/{id}`;
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
    case "getOrganizationAdaptivePolicySettings": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAdaptivePolicySettings": {
      let path = `/organizations/${params.arguments.path.organizationId}/adaptivePolicy/settings`;
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
    case "getOrganizationAdmins": {
      let path = `/organizations/${params.arguments.path.organizationId}/admins`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAdmin": {
      let path = `/organizations/${params.arguments.path.organizationId}/admins`;
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
    case "updateOrganizationAdmin": {
      let path = `/organizations/${params.arguments.path.organizationId}/admins/{adminId}`;
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
    case "deleteOrganizationAdmin": {
      let path = `/organizations/${params.arguments.path.organizationId}/admins/{adminId}`;
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
    case "getOrganizationAlertsProfiles": {
      let path = `/organizations/${params.arguments.path.organizationId}/alerts/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAlertsProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/alerts/profiles`;
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
    case "updateOrganizationAlertsProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/alerts/profiles/{alertConfigId}`;
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
    case "deleteOrganizationAlertsProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/alerts/profiles/{alertConfigId}`;
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
    case "getOrganizationApiRequests": {
      let path = `/organizations/${params.arguments.path.organizationId}/apiRequests`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApiRequestsOverview": {
      let path = `/organizations/${params.arguments.path.organizationId}/apiRequests/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApiRequestsOverviewResponseCodesByInterval": {
      let path = `/organizations/${params.arguments.path.organizationId}/apiRequests/overview/responseCodes/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlerts": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/alerts`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "dismissOrganizationAssuranceAlerts": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/alerts/dismiss`;
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
    case "getOrganizationAssuranceAlertsOverview": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/alerts/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlertsOverviewByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/alerts/overview/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlertsOverviewByType": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/alerts/overview/byType`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceAlertsOverviewHistorical": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/alerts/overview/historical`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "restoreOrganizationAssuranceAlerts": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/alerts/restore`;
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
    case "getOrganizationAssuranceAlert": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/alerts/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAssuranceProductAnnouncements": {
      let path = `/organizations/${params.arguments.path.organizationId}/assurance/productAnnouncements`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAuthRadiusServers": {
      let path = `/organizations/${params.arguments.path.organizationId}/auth/radius/servers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationAuthRadiusServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/auth/radius/servers`;
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
    case "getOrganizationAuthRadiusServersAssignments": {
      let path = `/organizations/${params.arguments.path.organizationId}/auth/radius/servers/assignments`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationAuthRadiusServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/auth/radius/servers/{serverId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationAuthRadiusServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/auth/radius/servers/{serverId}`;
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
    case "deleteOrganizationAuthRadiusServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/auth/radius/servers/{serverId}`;
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
    case "getOrganizationBrandingPolicies": {
      let path = `/organizations/${params.arguments.path.organizationId}/brandingPolicies`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationBrandingPolicy": {
      let path = `/organizations/${params.arguments.path.organizationId}/brandingPolicies`;
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
    case "getOrganizationBrandingPoliciesPriorities": {
      let path = `/organizations/${params.arguments.path.organizationId}/brandingPolicies/priorities`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationBrandingPoliciesPriorities": {
      let path = `/organizations/${params.arguments.path.organizationId}/brandingPolicies/priorities`;
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
    case "getOrganizationBrandingPolicy": {
      let path = `/organizations/${params.arguments.path.organizationId}/brandingPolicies/{brandingPolicyId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationBrandingPolicy": {
      let path = `/organizations/${params.arguments.path.organizationId}/brandingPolicies/{brandingPolicyId}`;
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
    case "deleteOrganizationBrandingPolicy": {
      let path = `/organizations/${params.arguments.path.organizationId}/brandingPolicies/{brandingPolicyId}`;
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
    case "getOrganizationCertificates": {
      let path = `/organizations/${params.arguments.path.organizationId}/certificates`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationCertificatesImport": {
      let path = `/organizations/${params.arguments.path.organizationId}/certificates/import`;
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
    case "deleteOrganizationCertificate": {
      let path = `/organizations/${params.arguments.path.organizationId}/certificates/{certificateId}`;
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
    case "updateOrganizationCertificate": {
      let path = `/organizations/${params.arguments.path.organizationId}/certificates/{certificateId}`;
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
    case "getOrganizationCertificateContents": {
      let path = `/organizations/${params.arguments.path.organizationId}/certificates/{certificateId}/contents`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "claimIntoOrganization": {
      let path = `/organizations/${params.arguments.path.organizationId}/claim`;
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
    case "getOrganizationClientsBandwidthUsageHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/clients/bandwidthUsageHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationClientsOverview": {
      let path = `/organizations/${params.arguments.path.organizationId}/clients/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationClientsSearch": {
      let path = `/organizations/${params.arguments.path.organizationId}/clients/search`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "cloneOrganization": {
      let path = `/organizations/${params.arguments.path.organizationId}/clone`;
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
    case "getOrganizationCloudConnectivityRequirements": {
      let path = `/organizations/${params.arguments.path.organizationId}/cloud/connectivity/requirements`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplates": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationConfigTemplate": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates`;
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
    case "getOrganizationConfigTemplate": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/{configTemplateId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationConfigTemplate": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/{configTemplateId}`;
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
    case "deleteOrganizationConfigTemplate": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/{configTemplateId}`;
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
    case "getOrganizationConfigurationChanges": {
      let path = `/organizations/${params.arguments.path.organizationId}/configurationChanges`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevices": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesAvailabilities": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/availabilities`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesAvailabilitiesChangeHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/availabilities/changeHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesBootsHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/boots/history`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationDevicesControllerMigration": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/controller/migrations`;
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
    case "getOrganizationDevicesControllerMigrations": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/controller/migrations`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bulkUpdateOrganizationDevicesDetails": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/details/bulkUpdate`;
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
    case "getOrganizationDevicesOverviewByModel": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/overview/byModel`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesPacketCaptureCaptures": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/captures`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationDevicesPacketCaptureCapture": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/captures`;
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
    case "bulkOrganizationDevicesPacketCaptureCapturesCreate": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/captures/bulkCreate`;
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
    case "bulkOrganizationDevicesPacketCaptureCapturesDelete": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/captures/bulkDelete`;
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
    case "deleteOrganizationDevicesPacketCaptureCapture": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/captures/{captureId}`;
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
    case "generateOrganizationDevicesPacketCaptureCaptureDownloadUrl": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/captures/{captureId}/downloadUrl/generate`;
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
    case "stopOrganizationDevicesPacketCaptureCapture": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/captures/{captureId}/stop`;
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
    case "getOrganizationDevicesPacketCaptureSchedules": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/schedules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationDevicesPacketCaptureSchedule": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/schedules`;
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
    case "bulkOrganizationDevicesPacketCaptureSchedulesDelete": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/schedules/bulkDelete`;
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
    case "reorderOrganizationDevicesPacketCaptureSchedules": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/schedules/reorder`;
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
    case "updateOrganizationDevicesPacketCaptureSchedule": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/schedules/{scheduleId}`;
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
    case "deleteOrganizationDevicesPacketCaptureSchedule": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCapture/schedules/{scheduleId}`;
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
    case "tasksOrganizationDevicesPacketCapture": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCaptures/{packetId}/tasks`;
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
    case "getOrganizationDevicesPacketCaptureTask": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/packetCaptures/{packetId}/tasks/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesPowerModulesStatusesByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/powerModules/statuses/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesProvisioningStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/provisioning/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesStatusesOverview": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/statuses/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesSyslogServersRolesByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/syslog/servers/roles/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesSystemMemoryUsageHistoryByInterval": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/system/memory/usage/history/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesUplinksAddressesByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/uplinks/addresses/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationDevicesUplinksLossAndLatency": {
      let path = `/organizations/${params.arguments.path.organizationId}/devices/uplinksLossAndLatency`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationEarlyAccessFeatures": {
      let path = `/organizations/${params.arguments.path.organizationId}/earlyAccess/features`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationEarlyAccessFeaturesOptIns": {
      let path = `/organizations/${params.arguments.path.organizationId}/earlyAccess/features/optIns`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationEarlyAccessFeaturesOptIn": {
      let path = `/organizations/${params.arguments.path.organizationId}/earlyAccess/features/optIns`;
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
    case "getOrganizationEarlyAccessFeaturesOptIn": {
      let path = `/organizations/${params.arguments.path.organizationId}/earlyAccess/features/optIns/{optInId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationEarlyAccessFeaturesOptIn": {
      let path = `/organizations/${params.arguments.path.organizationId}/earlyAccess/features/optIns/{optInId}`;
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
    case "deleteOrganizationEarlyAccessFeaturesOptIn": {
      let path = `/organizations/${params.arguments.path.organizationId}/earlyAccess/features/optIns/{optInId}`;
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
    case "updateOrganizationExtensionsSdwanmanagerInterconnect": {
      let path = `/organizations/${params.arguments.path.organizationId}/extensions/sdwanmanager/interconnects/{interconnectId}`;
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
    case "getOrganizationExtensionsThousandEyesNetworks": {
      let path = `/organizations/${params.arguments.path.organizationId}/extensions/thousandEyes/networks`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationExtensionsThousandEyesNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/extensions/thousandEyes/networks`;
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
    case "getOrganizationExtensionsThousandEyesNetworksSupported": {
      let path = `/organizations/${params.arguments.path.organizationId}/extensions/thousandEyes/networks/supported`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationExtensionsThousandEyesNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/extensions/thousandEyes/networks/{networkId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationExtensionsThousandEyesNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/extensions/thousandEyes/networks/{networkId}`;
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
    case "deleteOrganizationExtensionsThousandEyesNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/extensions/thousandEyes/networks/{networkId}`;
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
    case "createOrganizationExtensionsThousandEyesTest": {
      let path = `/organizations/${params.arguments.path.organizationId}/extensions/thousandEyes/tests`;
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
    case "getOrganizationFirmwareUpgrades": {
      let path = `/organizations/${params.arguments.path.organizationId}/firmware/upgrades`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationFirmwareUpgradesByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/firmware/upgrades/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationFloorPlansAutoLocateDevices": {
      let path = `/organizations/${params.arguments.path.organizationId}/floorPlans/autoLocate/devices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationFloorPlansAutoLocateStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/floorPlans/autoLocate/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationIntegrationsXdrNetworks": {
      let path = `/organizations/${params.arguments.path.organizationId}/integrations/xdr/networks`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "disableOrganizationIntegrationsXdrNetworks": {
      let path = `/organizations/${params.arguments.path.organizationId}/integrations/xdr/networks/disable`;
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
    case "enableOrganizationIntegrationsXdrNetworks": {
      let path = `/organizations/${params.arguments.path.organizationId}/integrations/xdr/networks/enable`;
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
    case "claimIntoOrganizationInventory": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/claim`;
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
    case "getOrganizationInventoryDevices": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/devices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInventoryDevicesSwapsBulk": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/devices/swaps/bulk`;
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
    case "getOrganizationInventoryDevicesSwapsBulk": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/devices/swaps/bulk/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInventoryDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/devices/{serial}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInventoryOnboardingCloudMonitoringExportEvent": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/onboarding/cloudMonitoring/exportEvents`;
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
    case "createOrganizationInventoryOnboardingCloudMonitoringImport": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/onboarding/cloudMonitoring/imports`;
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
    case "getOrganizationInventoryOnboardingCloudMonitoringImports": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/onboarding/cloudMonitoring/imports`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationInventoryOnboardingCloudMonitoringNetworks": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/onboarding/cloudMonitoring/networks`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationInventoryOnboardingCloudMonitoringPrepare": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/onboarding/cloudMonitoring/prepare`;
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
    case "claimOrganizationInventoryOrders": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/orders/claim`;
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
    case "previewOrganizationInventoryOrders": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/orders/preview`;
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
    case "releaseFromOrganizationInventory": {
      let path = `/organizations/${params.arguments.path.organizationId}/inventory/release`;
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
    case "getOrganizationLicenses": {
      let path = `/organizations/${params.arguments.path.organizationId}/licenses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "assignOrganizationLicensesSeats": {
      let path = `/organizations/${params.arguments.path.organizationId}/licenses/assignSeats`;
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
    case "moveOrganizationLicenses": {
      let path = `/organizations/${params.arguments.path.organizationId}/licenses/move`;
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
    case "moveOrganizationLicensesSeats": {
      let path = `/organizations/${params.arguments.path.organizationId}/licenses/moveSeats`;
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
    case "getOrganizationLicensesOverview": {
      let path = `/organizations/${params.arguments.path.organizationId}/licenses/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "renewOrganizationLicensesSeats": {
      let path = `/organizations/${params.arguments.path.organizationId}/licenses/renewSeats`;
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
    case "getOrganizationLicense": {
      let path = `/organizations/${params.arguments.path.organizationId}/licenses/{licenseId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationLicense": {
      let path = `/organizations/${params.arguments.path.organizationId}/licenses/{licenseId}`;
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
    case "getOrganizationLoginSecurity": {
      let path = `/organizations/${params.arguments.path.organizationId}/loginSecurity`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationLoginSecurity": {
      let path = `/organizations/${params.arguments.path.organizationId}/loginSecurity`;
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
    case "getOrganizationNetworks": {
      let path = `/organizations/${params.arguments.path.organizationId}/networks`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/networks`;
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
    case "combineOrganizationNetworks": {
      let path = `/organizations/${params.arguments.path.organizationId}/networks/combine`;
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
    case "createNetworkMove": {
      let path = `/organizations/${params.arguments.path.organizationId}/networks/moves`;
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
    case "getNetworkMoves": {
      let path = `/organizations/${params.arguments.path.organizationId}/networks/moves`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkMove": {
      let path = `/organizations/${params.arguments.path.organizationId}/networks/moves/{networkMoveId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationOpenapiSpec": {
      let path = `/organizations/${params.arguments.path.organizationId}/openapiSpec`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationPoliciesAssignmentsByClient": {
      let path = `/organizations/${params.arguments.path.organizationId}/policies/assignments/byClient`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationPolicyObjects": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationPolicyObject": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects`;
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
    case "getOrganizationPolicyObjectsGroups": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects/groups`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationPolicyObjectsGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects/groups`;
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
    case "getOrganizationPolicyObjectsGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects/groups/{policyObjectGroupId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationPolicyObjectsGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects/groups/{policyObjectGroupId}`;
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
    case "deleteOrganizationPolicyObjectsGroup": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects/groups/{policyObjectGroupId}`;
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
    case "getOrganizationPolicyObject": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects/{policyObjectId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationPolicyObject": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects/{policyObjectId}`;
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
    case "deleteOrganizationPolicyObject": {
      let path = `/organizations/${params.arguments.path.organizationId}/policyObjects/{policyObjectId}`;
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
    case "getOrganizationSaml": {
      let path = `/organizations/${params.arguments.path.organizationId}/saml`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSaml": {
      let path = `/organizations/${params.arguments.path.organizationId}/saml`;
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
    case "getOrganizationSamlIdps": {
      let path = `/organizations/${params.arguments.path.organizationId}/saml/idps`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSamlIdp": {
      let path = `/organizations/${params.arguments.path.organizationId}/saml/idps`;
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
    case "updateOrganizationSamlIdp": {
      let path = `/organizations/${params.arguments.path.organizationId}/saml/idps/{idpId}`;
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
    case "getOrganizationSamlIdp": {
      let path = `/organizations/${params.arguments.path.organizationId}/saml/idps/{idpId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSamlIdp": {
      let path = `/organizations/${params.arguments.path.organizationId}/saml/idps/{idpId}`;
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
    case "getOrganizationSamlRoles": {
      let path = `/organizations/${params.arguments.path.organizationId}/samlRoles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSamlRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/samlRoles`;
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
    case "getOrganizationSamlRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/samlRoles/{samlRoleId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSamlRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/samlRoles/{samlRoleId}`;
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
    case "deleteOrganizationSamlRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/samlRoles/{samlRoleId}`;
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
    case "getOrganizationSaseConnectivityEnrollableNetworks": {
      let path = `/organizations/${params.arguments.path.organizationId}/sase/connectivity/enrollableNetworks`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSaseConnectivitySitesBulkDetach": {
      let path = `/organizations/${params.arguments.path.organizationId}/sase/connectivity/sites/bulkDetach`;
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
    case "createOrganizationSaseConnectivitySitesBulkEnroll": {
      let path = `/organizations/${params.arguments.path.organizationId}/sase/connectivity/sites/bulkEnroll`;
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
    case "getOrganizationSaseConnectivitySite": {
      let path = `/organizations/${params.arguments.path.organizationId}/sase/connectivity/sites/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSnmp": {
      let path = `/organizations/${params.arguments.path.organizationId}/snmp`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSnmp": {
      let path = `/organizations/${params.arguments.path.organizationId}/snmp`;
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
    case "getOrganizationSnmpTrapsByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/snmp/traps/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSpacesIntegrationRemove": {
      let path = `/organizations/${params.arguments.path.organizationId}/spaces/integration/remove`;
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
    case "createOrganizationSpacesIntegrationRemove": {
      let path = `/organizations/${params.arguments.path.organizationId}/spaces/integration/remove`;
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
    case "getOrganizationSplashAsset": {
      let path = `/organizations/${params.arguments.path.organizationId}/splash/assets/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSplashAsset": {
      let path = `/organizations/${params.arguments.path.organizationId}/splash/assets/{id}`;
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
    case "getOrganizationSplashThemes": {
      let path = `/organizations/${params.arguments.path.organizationId}/splash/themes`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSplashTheme": {
      let path = `/organizations/${params.arguments.path.organizationId}/splash/themes`;
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
    case "deleteOrganizationSplashTheme": {
      let path = `/organizations/${params.arguments.path.organizationId}/splash/themes/{id}`;
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
    case "createOrganizationSplashThemeAsset": {
      let path = `/organizations/${params.arguments.path.organizationId}/splash/themes/{themeIdentifier}/assets`;
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
    case "getOrganizationSummaryTopAppliancesByUtilization": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/appliances/byUtilization`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopApplicationsByUsage": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/applications/byUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopApplicationsCategoriesByUsage": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/applications/categories/byUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopClientsByUsage": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/clients/byUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopClientsManufacturersByUsage": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/clients/manufacturers/byUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopDevicesByUsage": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/devices/byUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopDevicesModelsByUsage": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/devices/models/byUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopNetworksByStatus": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/networks/byStatus`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopSsidsByUsage": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/ssids/byUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummaryTopSwitchesByEnergyUsage": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/top/switches/byEnergyUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSupportSalesRepresentatives": {
      let path = `/organizations/${params.arguments.path.organizationId}/support/salesRepresentatives`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationUplinksStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/uplinks/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksAlertTypes": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/alertTypes`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksCallbacksStatus": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/callbacks/statuses/{callbackId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksHttpServers": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/httpServers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationWebhooksHttpServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/httpServers`;
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
    case "getOrganizationWebhooksHttpServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/httpServers/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationWebhooksHttpServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/httpServers/{id}`;
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
    case "deleteOrganizationWebhooksHttpServer": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/httpServers/{id}`;
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
    case "getOrganizationWebhooksLogs": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/logs`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWebhooksPayloadTemplates": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/payloadTemplates`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationWebhooksPayloadTemplate": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/payloadTemplates`;
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
    case "getOrganizationWebhooksPayloadTemplate": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationWebhooksPayloadTemplate": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`;
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
    case "updateOrganizationWebhooksPayloadTemplate": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`;
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
    case "createOrganizationWebhooksWebhookTest": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/webhookTests`;
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
    case "getOrganizationWebhooksWebhookTest": {
      let path = `/organizations/${params.arguments.path.organizationId}/webhooks/webhookTests/{webhookTestId}`;
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

export const organizationsEndpoints = [
  "getOrganizations",
  "createOrganization",
  "getOrganization",
  "updateOrganization",
  "deleteOrganization",
  "createOrganizationActionBatch",
  "getOrganizationActionBatches",
  "getOrganizationActionBatch",
  "deleteOrganizationActionBatch",
  "updateOrganizationActionBatch",
  "getOrganizationAdaptivePolicyAcls",
  "createOrganizationAdaptivePolicyAcl",
  "getOrganizationAdaptivePolicyAcl",
  "updateOrganizationAdaptivePolicyAcl",
  "deleteOrganizationAdaptivePolicyAcl",
  "getOrganizationAdaptivePolicyGroups",
  "createOrganizationAdaptivePolicyGroup",
  "getOrganizationAdaptivePolicyGroup",
  "updateOrganizationAdaptivePolicyGroup",
  "deleteOrganizationAdaptivePolicyGroup",
  "getOrganizationAdaptivePolicyOverview",
  "getOrganizationAdaptivePolicyPolicies",
  "createOrganizationAdaptivePolicyPolicy",
  "getOrganizationAdaptivePolicyPolicy",
  "updateOrganizationAdaptivePolicyPolicy",
  "deleteOrganizationAdaptivePolicyPolicy",
  "getOrganizationAdaptivePolicySettings",
  "updateOrganizationAdaptivePolicySettings",
  "getOrganizationAdmins",
  "createOrganizationAdmin",
  "updateOrganizationAdmin",
  "deleteOrganizationAdmin",
  "getOrganizationAlertsProfiles",
  "createOrganizationAlertsProfile",
  "updateOrganizationAlertsProfile",
  "deleteOrganizationAlertsProfile",
  "getOrganizationApiRequests",
  "getOrganizationApiRequestsOverview",
  "getOrganizationApiRequestsOverviewResponseCodesByInterval",
  "getOrganizationAssuranceAlerts",
  "dismissOrganizationAssuranceAlerts",
  "getOrganizationAssuranceAlertsOverview",
  "getOrganizationAssuranceAlertsOverviewByNetwork",
  "getOrganizationAssuranceAlertsOverviewByType",
  "getOrganizationAssuranceAlertsOverviewHistorical",
  "restoreOrganizationAssuranceAlerts",
  "getOrganizationAssuranceAlert",
  "getOrganizationAssuranceProductAnnouncements",
  "getOrganizationAuthRadiusServers",
  "createOrganizationAuthRadiusServer",
  "getOrganizationAuthRadiusServersAssignments",
  "getOrganizationAuthRadiusServer",
  "updateOrganizationAuthRadiusServer",
  "deleteOrganizationAuthRadiusServer",
  "getOrganizationBrandingPolicies",
  "createOrganizationBrandingPolicy",
  "getOrganizationBrandingPoliciesPriorities",
  "updateOrganizationBrandingPoliciesPriorities",
  "getOrganizationBrandingPolicy",
  "updateOrganizationBrandingPolicy",
  "deleteOrganizationBrandingPolicy",
  "getOrganizationCertificates",
  "createOrganizationCertificatesImport",
  "deleteOrganizationCertificate",
  "updateOrganizationCertificate",
  "getOrganizationCertificateContents",
  "claimIntoOrganization",
  "getOrganizationClientsBandwidthUsageHistory",
  "getOrganizationClientsOverview",
  "getOrganizationClientsSearch",
  "cloneOrganization",
  "getOrganizationCloudConnectivityRequirements",
  "getOrganizationConfigTemplates",
  "createOrganizationConfigTemplate",
  "getOrganizationConfigTemplate",
  "updateOrganizationConfigTemplate",
  "deleteOrganizationConfigTemplate",
  "getOrganizationConfigurationChanges",
  "getOrganizationDevices",
  "getOrganizationDevicesAvailabilities",
  "getOrganizationDevicesAvailabilitiesChangeHistory",
  "getOrganizationDevicesBootsHistory",
  "createOrganizationDevicesControllerMigration",
  "getOrganizationDevicesControllerMigrations",
  "bulkUpdateOrganizationDevicesDetails",
  "getOrganizationDevicesOverviewByModel",
  "getOrganizationDevicesPacketCaptureCaptures",
  "createOrganizationDevicesPacketCaptureCapture",
  "bulkOrganizationDevicesPacketCaptureCapturesCreate",
  "bulkOrganizationDevicesPacketCaptureCapturesDelete",
  "deleteOrganizationDevicesPacketCaptureCapture",
  "generateOrganizationDevicesPacketCaptureCaptureDownloadUrl",
  "stopOrganizationDevicesPacketCaptureCapture",
  "getOrganizationDevicesPacketCaptureSchedules",
  "createOrganizationDevicesPacketCaptureSchedule",
  "bulkOrganizationDevicesPacketCaptureSchedulesDelete",
  "reorderOrganizationDevicesPacketCaptureSchedules",
  "updateOrganizationDevicesPacketCaptureSchedule",
  "deleteOrganizationDevicesPacketCaptureSchedule",
  "tasksOrganizationDevicesPacketCapture",
  "getOrganizationDevicesPacketCaptureTask",
  "getOrganizationDevicesPowerModulesStatusesByDevice",
  "getOrganizationDevicesProvisioningStatuses",
  "getOrganizationDevicesStatuses",
  "getOrganizationDevicesStatusesOverview",
  "getOrganizationDevicesSyslogServersRolesByNetwork",
  "getOrganizationDevicesSystemMemoryUsageHistoryByInterval",
  "getOrganizationDevicesUplinksAddressesByDevice",
  "getOrganizationDevicesUplinksLossAndLatency",
  "getOrganizationEarlyAccessFeatures",
  "getOrganizationEarlyAccessFeaturesOptIns",
  "createOrganizationEarlyAccessFeaturesOptIn",
  "getOrganizationEarlyAccessFeaturesOptIn",
  "updateOrganizationEarlyAccessFeaturesOptIn",
  "deleteOrganizationEarlyAccessFeaturesOptIn",
  "updateOrganizationExtensionsSdwanmanagerInterconnect",
  "getOrganizationExtensionsThousandEyesNetworks",
  "createOrganizationExtensionsThousandEyesNetwork",
  "getOrganizationExtensionsThousandEyesNetworksSupported",
  "getOrganizationExtensionsThousandEyesNetwork",
  "updateOrganizationExtensionsThousandEyesNetwork",
  "deleteOrganizationExtensionsThousandEyesNetwork",
  "createOrganizationExtensionsThousandEyesTest",
  "getOrganizationFirmwareUpgrades",
  "getOrganizationFirmwareUpgradesByDevice",
  "getOrganizationFloorPlansAutoLocateDevices",
  "getOrganizationFloorPlansAutoLocateStatuses",
  "getOrganizationIntegrationsXdrNetworks",
  "disableOrganizationIntegrationsXdrNetworks",
  "enableOrganizationIntegrationsXdrNetworks",
  "claimIntoOrganizationInventory",
  "getOrganizationInventoryDevices",
  "createOrganizationInventoryDevicesSwapsBulk",
  "getOrganizationInventoryDevicesSwapsBulk",
  "getOrganizationInventoryDevice",
  "createOrganizationInventoryOnboardingCloudMonitoringExportEvent",
  "createOrganizationInventoryOnboardingCloudMonitoringImport",
  "getOrganizationInventoryOnboardingCloudMonitoringImports",
  "getOrganizationInventoryOnboardingCloudMonitoringNetworks",
  "createOrganizationInventoryOnboardingCloudMonitoringPrepare",
  "claimOrganizationInventoryOrders",
  "previewOrganizationInventoryOrders",
  "releaseFromOrganizationInventory",
  "getOrganizationLicenses",
  "assignOrganizationLicensesSeats",
  "moveOrganizationLicenses",
  "moveOrganizationLicensesSeats",
  "getOrganizationLicensesOverview",
  "renewOrganizationLicensesSeats",
  "getOrganizationLicense",
  "updateOrganizationLicense",
  "getOrganizationLoginSecurity",
  "updateOrganizationLoginSecurity",
  "getOrganizationNetworks",
  "createOrganizationNetwork",
  "combineOrganizationNetworks",
  "createNetworkMove",
  "getNetworkMoves",
  "getNetworkMove",
  "getOrganizationOpenapiSpec",
  "getOrganizationPoliciesAssignmentsByClient",
  "getOrganizationPolicyObjects",
  "createOrganizationPolicyObject",
  "getOrganizationPolicyObjectsGroups",
  "createOrganizationPolicyObjectsGroup",
  "getOrganizationPolicyObjectsGroup",
  "updateOrganizationPolicyObjectsGroup",
  "deleteOrganizationPolicyObjectsGroup",
  "getOrganizationPolicyObject",
  "updateOrganizationPolicyObject",
  "deleteOrganizationPolicyObject",
  "getOrganizationSaml",
  "updateOrganizationSaml",
  "getOrganizationSamlIdps",
  "createOrganizationSamlIdp",
  "updateOrganizationSamlIdp",
  "getOrganizationSamlIdp",
  "deleteOrganizationSamlIdp",
  "getOrganizationSamlRoles",
  "createOrganizationSamlRole",
  "getOrganizationSamlRole",
  "updateOrganizationSamlRole",
  "deleteOrganizationSamlRole",
  "getOrganizationSaseConnectivityEnrollableNetworks",
  "deleteOrganizationSaseConnectivitySitesBulkDetach",
  "createOrganizationSaseConnectivitySitesBulkEnroll",
  "getOrganizationSaseConnectivitySite",
  "getOrganizationSnmp",
  "updateOrganizationSnmp",
  "getOrganizationSnmpTrapsByNetwork",
  "deleteOrganizationSpacesIntegrationRemove",
  "createOrganizationSpacesIntegrationRemove",
  "getOrganizationSplashAsset",
  "deleteOrganizationSplashAsset",
  "getOrganizationSplashThemes",
  "createOrganizationSplashTheme",
  "deleteOrganizationSplashTheme",
  "createOrganizationSplashThemeAsset",
  "getOrganizationSummaryTopAppliancesByUtilization",
  "getOrganizationSummaryTopApplicationsByUsage",
  "getOrganizationSummaryTopApplicationsCategoriesByUsage",
  "getOrganizationSummaryTopClientsByUsage",
  "getOrganizationSummaryTopClientsManufacturersByUsage",
  "getOrganizationSummaryTopDevicesByUsage",
  "getOrganizationSummaryTopDevicesModelsByUsage",
  "getOrganizationSummaryTopNetworksByStatus",
  "getOrganizationSummaryTopSsidsByUsage",
  "getOrganizationSummaryTopSwitchesByEnergyUsage",
  "getOrganizationSupportSalesRepresentatives",
  "getOrganizationUplinksStatuses",
  "getOrganizationWebhooksAlertTypes",
  "getOrganizationWebhooksCallbacksStatus",
  "getOrganizationWebhooksHttpServers",
  "createOrganizationWebhooksHttpServer",
  "getOrganizationWebhooksHttpServer",
  "updateOrganizationWebhooksHttpServer",
  "deleteOrganizationWebhooksHttpServer",
  "getOrganizationWebhooksLogs",
  "getOrganizationWebhooksPayloadTemplates",
  "createOrganizationWebhooksPayloadTemplate",
  "getOrganizationWebhooksPayloadTemplate",
  "deleteOrganizationWebhooksPayloadTemplate",
  "updateOrganizationWebhooksPayloadTemplate",
  "createOrganizationWebhooksWebhookTest",
  "getOrganizationWebhooksWebhookTest"
];
