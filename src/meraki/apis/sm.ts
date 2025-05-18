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

export async function _sm(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "createNetworkSmBypassActivationLockAttempt": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/bypassActivationLockAttempts`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/bypassActivationLockAttempts`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmBypassActivationLockAttempt": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/bypassActivationLockAttempts/{attemptId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDevices": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "checkinNetworkSmDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/checkin`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/checkin`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSmDevicesFields": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/sm/devices/fields`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/sm/devices/fields`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "lockNetworkSmDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/lock`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/lock`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "modifyNetworkSmDevicesTags": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/modifyTags`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/modifyTags`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "moveNetworkSmDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/move`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/move`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "rebootNetworkSmDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/reboot`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/reboot`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "shutdownNetworkSmDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/shutdown`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/shutdown`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "wipeNetworkSmDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/wipe`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/wipe`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceCellularUsageHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/cellularUsageHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceCerts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/certs`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceConnectivity": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/connectivity`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceDesktopLogs": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/desktopLogs`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceDeviceCommandLogs": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/deviceCommandLogs`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceDeviceProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/deviceProfiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "installNetworkSmDeviceApps": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/installApps`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/installApps`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceNetworkAdapters": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/networkAdapters`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDevicePerformanceHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/performanceHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "refreshNetworkSmDeviceDetails": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/refreshDetails`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/refreshDetails`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceRestrictions": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/restrictions`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceSecurityCenters": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/securityCenters`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceSoftwares": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/softwares`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "unenrollNetworkSmDevice": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/unenroll`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/unenroll`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "uninstallNetworkSmDeviceApps": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/uninstallApps`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/uninstallApps`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceWlanLists": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/devices/{deviceId}/wlanLists`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/profiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmTargetGroups": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/targetGroups`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSmTargetGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/targetGroups`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sm/targetGroups`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmTargetGroup": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/targetGroups/{targetGroupId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSmTargetGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/sm/targetGroups/{targetGroupId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/sm/targetGroups/{targetGroupId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSmTargetGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/sm/targetGroups/{targetGroupId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/sm/targetGroups/{targetGroupId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmTrustedAccessConfigs": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/trustedAccessConfigs`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmUserAccessDevices": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/userAccessDevices`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSmUserAccessDevice": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/sm/userAccessDevices/{userAccessDeviceId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/sm/userAccessDevices/{userAccessDeviceId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmUsers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/users`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmUserDeviceProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/users/{userId}/deviceProfiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmUserSoftwares": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sm/users/{userId}/softwares`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmAdminsRoles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/admins/roles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSmAdminsRole": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/sm/admins/roles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/sm/admins/roles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmAdminsRole": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/admins/roles/{roleId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSmAdminsRole": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/sm/admins/roles/{roleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/sm/admins/roles/{roleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSmAdminsRole": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/sm/admins/roles/{roleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/sm/admins/roles/{roleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmApnsCert": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/apnsCert`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSmAppleCloudEnrollmentSyncJob": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/sm/apple/cloudEnrollment/syncJobs`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/sm/apple/cloudEnrollment/syncJobs`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmAppleCloudEnrollmentSyncJob": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/apple/cloudEnrollment/syncJobs/{syncJobId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSmBulkEnrollmentToken": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/sm/bulkEnrollment/token`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/sm/bulkEnrollment/token`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmBulkEnrollmentToken": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/bulkEnrollment/token/{tokenId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSmBulkEnrollmentToken": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/sm/bulkEnrollment/token/{tokenId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/sm/bulkEnrollment/token/{tokenId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSmBulkEnrollmentToken": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/sm/bulkEnrollment/token/{tokenId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/sm/bulkEnrollment/token/{tokenId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmBulkEnrollmentTokens": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/bulkEnrollment/tokens`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSmSentryPoliciesAssignments": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/sm/sentry/policies/assignments`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/sm/sentry/policies/assignments`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmSentryPoliciesAssignmentsByNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/sentry/policies/assignments/byNetwork`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmVppAccounts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/vppAccounts`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmVppAccount": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sm/vppAccounts/{vppAccountId}`, { params: queryParams });
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

export const smEndpoints = [
  "createNetworkSmBypassActivationLockAttempt","getNetworkSmBypassActivationLockAttempt","getNetworkSmDevices","checkinNetworkSmDevices","updateNetworkSmDevicesFields","lockNetworkSmDevices","modifyNetworkSmDevicesTags","moveNetworkSmDevices","rebootNetworkSmDevices","shutdownNetworkSmDevices","wipeNetworkSmDevices","getNetworkSmDeviceCellularUsageHistory","getNetworkSmDeviceCerts","getNetworkSmDeviceConnectivity","getNetworkSmDeviceDesktopLogs","getNetworkSmDeviceDeviceCommandLogs","getNetworkSmDeviceDeviceProfiles","installNetworkSmDeviceApps","getNetworkSmDeviceNetworkAdapters","getNetworkSmDevicePerformanceHistory","refreshNetworkSmDeviceDetails","getNetworkSmDeviceRestrictions","getNetworkSmDeviceSecurityCenters","getNetworkSmDeviceSoftwares","unenrollNetworkSmDevice","uninstallNetworkSmDeviceApps","getNetworkSmDeviceWlanLists","getNetworkSmProfiles","getNetworkSmTargetGroups","createNetworkSmTargetGroup","getNetworkSmTargetGroup","updateNetworkSmTargetGroup","deleteNetworkSmTargetGroup","getNetworkSmTrustedAccessConfigs","getNetworkSmUserAccessDevices","deleteNetworkSmUserAccessDevice","getNetworkSmUsers","getNetworkSmUserDeviceProfiles","getNetworkSmUserSoftwares","getOrganizationSmAdminsRoles","createOrganizationSmAdminsRole","getOrganizationSmAdminsRole","updateOrganizationSmAdminsRole","deleteOrganizationSmAdminsRole","getOrganizationSmApnsCert","createOrganizationSmAppleCloudEnrollmentSyncJob","getOrganizationSmAppleCloudEnrollmentSyncJob","createOrganizationSmBulkEnrollmentToken","getOrganizationSmBulkEnrollmentToken","updateOrganizationSmBulkEnrollmentToken","deleteOrganizationSmBulkEnrollmentToken","getOrganizationSmBulkEnrollmentTokens","updateOrganizationSmSentryPoliciesAssignments","getOrganizationSmSentryPoliciesAssignmentsByNetwork","getOrganizationSmVppAccounts","getOrganizationSmVppAccount"
];
