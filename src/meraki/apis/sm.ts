export async function _sm(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "createNetworkSmBypassActivationLockAttempt": {
      let path = `/networks/${params.arguments.path.networkId}/sm/bypassActivationLockAttempts`;
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
    case "getNetworkSmBypassActivationLockAttempt": {
      let path = `/networks/${params.arguments.path.networkId}/sm/bypassActivationLockAttempts/{attemptId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDevices": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "checkinNetworkSmDevices": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/checkin`;
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
    case "updateNetworkSmDevicesFields": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/fields`;
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
    case "lockNetworkSmDevices": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/lock`;
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
    case "modifyNetworkSmDevicesTags": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/modifyTags`;
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
    case "moveNetworkSmDevices": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/move`;
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
    case "rebootNetworkSmDevices": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/reboot`;
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
    case "shutdownNetworkSmDevices": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/shutdown`;
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
    case "wipeNetworkSmDevices": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/wipe`;
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
    case "getNetworkSmDeviceCellularUsageHistory": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/cellularUsageHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceCerts": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/certs`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceConnectivity": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/connectivity`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceDesktopLogs": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/desktopLogs`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceDeviceCommandLogs": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/deviceCommandLogs`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceDeviceProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/deviceProfiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "installNetworkSmDeviceApps": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/installApps`;
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
    case "getNetworkSmDeviceNetworkAdapters": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/networkAdapters`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDevicePerformanceHistory": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/performanceHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "refreshNetworkSmDeviceDetails": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/refreshDetails`;
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
    case "getNetworkSmDeviceRestrictions": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/restrictions`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceSecurityCenters": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/securityCenters`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmDeviceSoftwares": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/softwares`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "unenrollNetworkSmDevice": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/unenroll`;
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
    case "uninstallNetworkSmDeviceApps": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/uninstallApps`;
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
    case "getNetworkSmDeviceWlanLists": {
      let path = `/networks/${params.arguments.path.networkId}/sm/devices/{deviceId}/wlanLists`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/sm/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmTargetGroups": {
      let path = `/networks/${params.arguments.path.networkId}/sm/targetGroups`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSmTargetGroup": {
      let path = `/networks/${params.arguments.path.networkId}/sm/targetGroups`;
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
    case "getNetworkSmTargetGroup": {
      let path = `/networks/${params.arguments.path.networkId}/sm/targetGroups/{targetGroupId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSmTargetGroup": {
      let path = `/networks/${params.arguments.path.networkId}/sm/targetGroups/{targetGroupId}`;
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
    case "deleteNetworkSmTargetGroup": {
      let path = `/networks/${params.arguments.path.networkId}/sm/targetGroups/{targetGroupId}`;
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
    case "getNetworkSmTrustedAccessConfigs": {
      let path = `/networks/${params.arguments.path.networkId}/sm/trustedAccessConfigs`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmUserAccessDevices": {
      let path = `/networks/${params.arguments.path.networkId}/sm/userAccessDevices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSmUserAccessDevice": {
      let path = `/networks/${params.arguments.path.networkId}/sm/userAccessDevices/{userAccessDeviceId}`;
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
    case "getNetworkSmUsers": {
      let path = `/networks/${params.arguments.path.networkId}/sm/users`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmUserDeviceProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/sm/users/{userId}/deviceProfiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSmUserSoftwares": {
      let path = `/networks/${params.arguments.path.networkId}/sm/users/{userId}/softwares`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmAdminsRoles": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/admins/roles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSmAdminsRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/admins/roles`;
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
    case "getOrganizationSmAdminsRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/admins/roles/{roleId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSmAdminsRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/admins/roles/{roleId}`;
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
    case "deleteOrganizationSmAdminsRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/admins/roles/{roleId}`;
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
    case "getOrganizationSmApnsCert": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/apnsCert`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSmAppleCloudEnrollmentSyncJob": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/apple/cloudEnrollment/syncJobs`;
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
    case "getOrganizationSmAppleCloudEnrollmentSyncJob": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/apple/cloudEnrollment/syncJobs/{syncJobId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSmBulkEnrollmentToken": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/bulkEnrollment/token`;
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
    case "getOrganizationSmBulkEnrollmentToken": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/bulkEnrollment/token/{tokenId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSmBulkEnrollmentToken": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/bulkEnrollment/token/{tokenId}`;
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
    case "deleteOrganizationSmBulkEnrollmentToken": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/bulkEnrollment/token/{tokenId}`;
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
    case "getOrganizationSmBulkEnrollmentTokens": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/bulkEnrollment/tokens`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSmSentryPoliciesAssignments": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/sentry/policies/assignments`;
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
    case "getOrganizationSmSentryPoliciesAssignmentsByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/sentry/policies/assignments/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmVppAccounts": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/vppAccounts`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSmVppAccount": {
      let path = `/organizations/${params.arguments.path.organizationId}/sm/vppAccounts/{vppAccountId}`;
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

export const smEndpoints = [
  "createNetworkSmBypassActivationLockAttempt",
  "getNetworkSmBypassActivationLockAttempt",
  "getNetworkSmDevices",
  "checkinNetworkSmDevices",
  "updateNetworkSmDevicesFields",
  "lockNetworkSmDevices",
  "modifyNetworkSmDevicesTags",
  "moveNetworkSmDevices",
  "rebootNetworkSmDevices",
  "shutdownNetworkSmDevices",
  "wipeNetworkSmDevices",
  "getNetworkSmDeviceCellularUsageHistory",
  "getNetworkSmDeviceCerts",
  "getNetworkSmDeviceConnectivity",
  "getNetworkSmDeviceDesktopLogs",
  "getNetworkSmDeviceDeviceCommandLogs",
  "getNetworkSmDeviceDeviceProfiles",
  "installNetworkSmDeviceApps",
  "getNetworkSmDeviceNetworkAdapters",
  "getNetworkSmDevicePerformanceHistory",
  "refreshNetworkSmDeviceDetails",
  "getNetworkSmDeviceRestrictions",
  "getNetworkSmDeviceSecurityCenters",
  "getNetworkSmDeviceSoftwares",
  "unenrollNetworkSmDevice",
  "uninstallNetworkSmDeviceApps",
  "getNetworkSmDeviceWlanLists",
  "getNetworkSmProfiles",
  "getNetworkSmTargetGroups",
  "createNetworkSmTargetGroup",
  "getNetworkSmTargetGroup",
  "updateNetworkSmTargetGroup",
  "deleteNetworkSmTargetGroup",
  "getNetworkSmTrustedAccessConfigs",
  "getNetworkSmUserAccessDevices",
  "deleteNetworkSmUserAccessDevice",
  "getNetworkSmUsers",
  "getNetworkSmUserDeviceProfiles",
  "getNetworkSmUserSoftwares",
  "getOrganizationSmAdminsRoles",
  "createOrganizationSmAdminsRole",
  "getOrganizationSmAdminsRole",
  "updateOrganizationSmAdminsRole",
  "deleteOrganizationSmAdminsRole",
  "getOrganizationSmApnsCert",
  "createOrganizationSmAppleCloudEnrollmentSyncJob",
  "getOrganizationSmAppleCloudEnrollmentSyncJob",
  "createOrganizationSmBulkEnrollmentToken",
  "getOrganizationSmBulkEnrollmentToken",
  "updateOrganizationSmBulkEnrollmentToken",
  "deleteOrganizationSmBulkEnrollmentToken",
  "getOrganizationSmBulkEnrollmentTokens",
  "updateOrganizationSmSentryPoliciesAssignments",
  "getOrganizationSmSentryPoliciesAssignmentsByNetwork",
  "getOrganizationSmVppAccounts",
  "getOrganizationSmVppAccount"
];
