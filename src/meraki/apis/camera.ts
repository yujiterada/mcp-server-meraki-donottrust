export async function _camera(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceCameraAnalyticsLive": {
      let path = `/devices/${params.arguments.path.serial}/camera/analytics/live`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCameraAnalyticsOverview": {
      let path = `/devices/${params.arguments.path.serial}/camera/analytics/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCameraAnalyticsRecent": {
      let path = `/devices/${params.arguments.path.serial}/camera/analytics/recent`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCameraAnalyticsZones": {
      let path = `/devices/${params.arguments.path.serial}/camera/analytics/zones`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCameraAnalyticsZoneHistory": {
      let path = `/devices/${params.arguments.path.serial}/camera/analytics/zones/{zoneId}/history`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCameraCustomAnalytics": {
      let path = `/devices/${params.arguments.path.serial}/camera/customAnalytics`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCameraCustomAnalytics": {
      let path = `/devices/${params.arguments.path.serial}/camera/customAnalytics`;
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
    case "generateDeviceCameraSnapshot": {
      let path = `/devices/${params.arguments.path.serial}/camera/generateSnapshot`;
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
    case "getDeviceCameraQualityAndRetention": {
      let path = `/devices/${params.arguments.path.serial}/camera/qualityAndRetention`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCameraQualityAndRetention": {
      let path = `/devices/${params.arguments.path.serial}/camera/qualityAndRetention`;
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
    case "getDeviceCameraSense": {
      let path = `/devices/${params.arguments.path.serial}/camera/sense`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCameraSense": {
      let path = `/devices/${params.arguments.path.serial}/camera/sense`;
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
    case "getDeviceCameraSenseObjectDetectionModels": {
      let path = `/devices/${params.arguments.path.serial}/camera/sense/objectDetectionModels`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCameraVideoSettings": {
      let path = `/devices/${params.arguments.path.serial}/camera/video/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCameraVideoSettings": {
      let path = `/devices/${params.arguments.path.serial}/camera/video/settings`;
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
    case "getDeviceCameraVideoLink": {
      let path = `/devices/${params.arguments.path.serial}/camera/videoLink`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceCameraWirelessProfiles": {
      let path = `/devices/${params.arguments.path.serial}/camera/wirelessProfiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCameraWirelessProfiles": {
      let path = `/devices/${params.arguments.path.serial}/camera/wirelessProfiles`;
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
    case "getNetworkCameraQualityRetentionProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/camera/qualityRetentionProfiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkCameraQualityRetentionProfile": {
      let path = `/networks/${params.arguments.path.networkId}/camera/qualityRetentionProfiles`;
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
    case "getNetworkCameraQualityRetentionProfile": {
      let path = `/networks/${params.arguments.path.networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCameraQualityRetentionProfile": {
      let path = `/networks/${params.arguments.path.networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}`;
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
    case "deleteNetworkCameraQualityRetentionProfile": {
      let path = `/networks/${params.arguments.path.networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}`;
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
    case "getNetworkCameraSchedules": {
      let path = `/networks/${params.arguments.path.networkId}/camera/schedules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkCameraWirelessProfile": {
      let path = `/networks/${params.arguments.path.networkId}/camera/wirelessProfiles`;
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
    case "getNetworkCameraWirelessProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/camera/wirelessProfiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkCameraWirelessProfile": {
      let path = `/networks/${params.arguments.path.networkId}/camera/wirelessProfiles/{wirelessProfileId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkCameraWirelessProfile": {
      let path = `/networks/${params.arguments.path.networkId}/camera/wirelessProfiles/{wirelessProfileId}`;
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
    case "deleteNetworkCameraWirelessProfile": {
      let path = `/networks/${params.arguments.path.networkId}/camera/wirelessProfiles/{wirelessProfileId}`;
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
    case "getOrganizationCameraBoundariesAreasByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/boundaries/areas/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCameraBoundariesLinesByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/boundaries/lines/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCameraCustomAnalyticsArtifacts": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/customAnalytics/artifacts`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationCameraCustomAnalyticsArtifact": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/customAnalytics/artifacts`;
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
    case "getOrganizationCameraCustomAnalyticsArtifact": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/customAnalytics/artifacts/{artifactId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationCameraCustomAnalyticsArtifact": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/customAnalytics/artifacts/{artifactId}`;
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
    case "getOrganizationCameraDetectionsHistoryByBoundaryByInterval": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/detections/history/byBoundary/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCameraOnboardingStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/onboarding/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationCameraOnboardingStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/onboarding/statuses`;
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
    case "getOrganizationCameraPermissions": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/permissions`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCameraPermission": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/permissions/{permissionScopeId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationCameraRoles": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/roles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationCameraRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/roles`;
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
    case "getOrganizationCameraRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/roles/{roleId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationCameraRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/roles/{roleId}`;
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
    case "updateOrganizationCameraRole": {
      let path = `/organizations/${params.arguments.path.organizationId}/camera/roles/{roleId}`;
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
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
}

export const cameraEndpoints = [
  "getDeviceCameraAnalyticsLive",
  "getDeviceCameraAnalyticsOverview",
  "getDeviceCameraAnalyticsRecent",
  "getDeviceCameraAnalyticsZones",
  "getDeviceCameraAnalyticsZoneHistory",
  "getDeviceCameraCustomAnalytics",
  "updateDeviceCameraCustomAnalytics",
  "generateDeviceCameraSnapshot",
  "getDeviceCameraQualityAndRetention",
  "updateDeviceCameraQualityAndRetention",
  "getDeviceCameraSense",
  "updateDeviceCameraSense",
  "getDeviceCameraSenseObjectDetectionModels",
  "getDeviceCameraVideoSettings",
  "updateDeviceCameraVideoSettings",
  "getDeviceCameraVideoLink",
  "getDeviceCameraWirelessProfiles",
  "updateDeviceCameraWirelessProfiles",
  "getNetworkCameraQualityRetentionProfiles",
  "createNetworkCameraQualityRetentionProfile",
  "getNetworkCameraQualityRetentionProfile",
  "updateNetworkCameraQualityRetentionProfile",
  "deleteNetworkCameraQualityRetentionProfile",
  "getNetworkCameraSchedules",
  "createNetworkCameraWirelessProfile",
  "getNetworkCameraWirelessProfiles",
  "getNetworkCameraWirelessProfile",
  "updateNetworkCameraWirelessProfile",
  "deleteNetworkCameraWirelessProfile",
  "getOrganizationCameraBoundariesAreasByDevice",
  "getOrganizationCameraBoundariesLinesByDevice",
  "getOrganizationCameraCustomAnalyticsArtifacts",
  "createOrganizationCameraCustomAnalyticsArtifact",
  "getOrganizationCameraCustomAnalyticsArtifact",
  "deleteOrganizationCameraCustomAnalyticsArtifact",
  "getOrganizationCameraDetectionsHistoryByBoundaryByInterval",
  "getOrganizationCameraOnboardingStatuses",
  "updateOrganizationCameraOnboardingStatuses",
  "getOrganizationCameraPermissions",
  "getOrganizationCameraPermission",
  "getOrganizationCameraRoles",
  "createOrganizationCameraRole",
  "getOrganizationCameraRole",
  "deleteOrganizationCameraRole",
  "updateOrganizationCameraRole"
];
