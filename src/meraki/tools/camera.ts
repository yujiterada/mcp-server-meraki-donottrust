import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getDeviceCameraAnalyticsLiveTool: Tool = {
  name: "getDeviceCameraAnalyticsLive",
  scope: "",
  description: "Returns live state from camera analytics zones",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraAnalyticsOverviewTool: Tool = {
  name: "getDeviceCameraAnalyticsOverview",
  scope: "",
  description: "Returns an overview of aggregate analytics data for a timespan",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 365 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour."
      },
      "query-objectType": {
        type: "string",
        description: "[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraAnalyticsRecentTool: Tool = {
  name: "getDeviceCameraAnalyticsRecent",
  scope: "",
  description: "Returns most recent record for analytics zones",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-objectType": {
        type: "string",
        description: "[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraAnalyticsZonesTool: Tool = {
  name: "getDeviceCameraAnalyticsZones",
  scope: "",
  description: "Returns all configured analytic zones for this camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraAnalyticsZoneHistoryTool: Tool = {
  name: "getDeviceCameraAnalyticsZoneHistory",
  scope: "",
  description: "Return historical records for analytic zones",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-zoneId": {
        type: "string",
        description: "Zone ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 365 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 14 hours after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60."
      },
      "query-objectType": {
        type: "string",
        description: "[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]."
      }
    },
    required: ["path-serial","path-zoneId"],
  },
};

export const getDeviceCameraCustomAnalyticsTool: Tool = {
  name: "getDeviceCameraCustomAnalytics",
  scope: "",
  description: "Return custom analytics settings for a camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-serial"],
  },
};

export const updateDeviceCameraCustomAnalyticsTool: Tool = {
  name: "updateDeviceCameraCustomAnalytics",
  scope: "",
  description: "Update custom analytics settings for a camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-enabled": {
        type: "boolean",
        description: "Enable custom analytics"
      },
      "body-artifactId": {
        type: "string",
        description: "The ID of the custom analytics artifact"
      },
      "body-parameters": {
        type: "array",
        description: "Parameters for the custom analytics workload"
      }
    },
    required: ["path-serial"],
  },
};

export const generateDeviceCameraSnapshotTool: Tool = {
  name: "generateDeviceCameraSnapshot",
  scope: "",
  description: "Generate a snapshot of what the camera sees at the specified time and return a link to that image.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-timestamp": {
        type: "string",
        description: "[optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time."
      },
      "body-fullframe": {
        type: "boolean",
        description: "[optional] If set to \"true\" the snapshot will be taken at full sensor resolution. This will error if used with timestamp."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraQualityAndRetentionTool: Tool = {
  name: "getDeviceCameraQualityAndRetention",
  scope: "",
  description: "Returns quality and retention settings for the given camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-serial"],
  },
};

export const updateDeviceCameraQualityAndRetentionTool: Tool = {
  name: "updateDeviceCameraQualityAndRetention",
  scope: "",
  description: "Update quality and retention settings for the given camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-profileId": {
        type: "string",
        description: "The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera."
      },
      "body-motionBasedRetentionEnabled": {
        type: "boolean",
        description: "Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera."
      },
      "body-audioRecordingEnabled": {
        type: "boolean",
        description: "Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera"
      },
      "body-restrictedBandwidthModeEnabled": {
        type: "boolean",
        description: "Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera. This setting does not apply to MV2 cameras."
      },
      "body-quality": {
        type: "string",
        description: "Quality of the camera. Can be one of 'Standard', 'High', 'Enhanced' or 'Ultra'. Not all qualities are supported by every camera model."
      },
      "body-resolution": {
        type: "string",
        description: "Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080', '2112x2112', '2880x2880', '2688x1512' or '3840x2160'.Not all resolutions are supported by every camera model."
      },
      "body-motionDetectorVersion": {
        type: "integer",
        description: "The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraSenseTool: Tool = {
  name: "getDeviceCameraSense",
  scope: "",
  description: "Returns sense settings for a given camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-serial"],
  },
};

export const updateDeviceCameraSenseTool: Tool = {
  name: "updateDeviceCameraSense",
  scope: "",
  description: "Update sense settings for the given camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-senseEnabled": {
        type: "boolean",
        description: "Boolean indicating if sense(license) is enabled(true) or disabled(false) on the camera"
      },
      "body-mqttBrokerId": {
        type: "string",
        description: "The ID of the MQTT broker to be enabled on the camera. A value of null will disable MQTT on the camera"
      },
      "body-audioDetection": {
        type: "object",
        description: "The details of the audio detection config."
      },
      "body-detectionModelId": {
        type: "string",
        description: "The ID of the object detection model"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraSenseObjectDetectionModelsTool: Tool = {
  name: "getDeviceCameraSenseObjectDetectionModels",
  scope: "",
  description: "Returns the MV Sense object detection model list for the given camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraVideoSettingsTool: Tool = {
  name: "getDeviceCameraVideoSettings",
  scope: "",
  description: "Returns video settings for the given camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-serial"],
  },
};

export const updateDeviceCameraVideoSettingsTool: Tool = {
  name: "updateDeviceCameraVideoSettings",
  scope: "",
  description: "Update video settings for the given camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-externalRtspEnabled": {
        type: "boolean",
        description: "Boolean indicating if external rtsp stream is exposed"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraVideoLinkTool: Tool = {
  name: "getDeviceCameraVideoLink",
  scope: "",
  description: "Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-timestamp": {
        type: "string",
        description: "[optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCameraWirelessProfilesTool: Tool = {
  name: "getDeviceCameraWirelessProfiles",
  scope: "",
  description: "Returns wireless profile assigned to the given camera",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-serial"],
  },
};

export const updateDeviceCameraWirelessProfilesTool: Tool = {
  name: "updateDeviceCameraWirelessProfiles",
  scope: "",
  description: "Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-ids": {
        type: "object",
        description: "The ids of the wireless profile to assign to the given camera"
      }
    },
    required: ["path-serial","body-ids"],
  },
};

export const getNetworkCameraQualityRetentionProfilesTool: Tool = {
  name: "getNetworkCameraQualityRetentionProfiles",
  scope: "",
  description: "List the quality retention profiles for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      }
    },
    required: ["path-networkId"],
  },
};

export const createNetworkCameraQualityRetentionProfileTool: Tool = {
  name: "createNetworkCameraQualityRetentionProfile",
  scope: "",
  description: "Creates new quality retention profile for this network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new profile. Must be unique. This parameter is required."
      },
      "body-motionBasedRetentionEnabled": {
        type: "boolean",
        description: "Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras."
      },
      "body-restrictedBandwidthModeEnabled": {
        type: "boolean",
        description: "Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras."
      },
      "body-audioRecordingEnabled": {
        type: "boolean",
        description: "Whether or not to record audio. Can be either true or false. Defaults to false."
      },
      "body-cloudArchiveEnabled": {
        type: "boolean",
        description: "Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false."
      },
      "body-motionDetectorVersion": {
        type: "integer",
        description: "The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2."
      },
      "body-smartRetention": {
        type: "object",
        description: "Smart Retention records footage in two qualities and intelligently retains higher quality when motion, people or vehicles are detected."
      },
      "body-scheduleId": {
        type: "string",
        description: "Schedule for which this camera will record video, or 'null' to always record."
      },
      "body-maxRetentionDays": {
        type: "integer",
        description: "The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be in the range of one to ninety days."
      },
      "body-videoSettings": {
        type: "object",
        description: "Video quality and resolution settings for all the camera models."
      }
    },
    required: ["path-networkId","body-name"],
  },
};

export const getNetworkCameraQualityRetentionProfileTool: Tool = {
  name: "getNetworkCameraQualityRetentionProfile",
  scope: "",
  description: "Retrieve a single quality retention profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-qualityRetentionProfileId": {
        type: "string",
        description: "Quality retention profile ID"
      }
    },
    required: ["path-networkId","path-qualityRetentionProfileId"],
  },
};

export const updateNetworkCameraQualityRetentionProfileTool: Tool = {
  name: "updateNetworkCameraQualityRetentionProfile",
  scope: "",
  description: "Update an existing quality retention profile for this network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-qualityRetentionProfileId": {
        type: "string",
        description: "Quality retention profile ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new profile. Must be unique."
      },
      "body-motionBasedRetentionEnabled": {
        type: "boolean",
        description: "Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras."
      },
      "body-restrictedBandwidthModeEnabled": {
        type: "boolean",
        description: "Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras."
      },
      "body-audioRecordingEnabled": {
        type: "boolean",
        description: "Whether or not to record audio. Can be either true or false. Defaults to false."
      },
      "body-cloudArchiveEnabled": {
        type: "boolean",
        description: "Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false."
      },
      "body-motionDetectorVersion": {
        type: "integer",
        description: "The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2."
      },
      "body-smartRetention": {
        type: "object",
        description: "Smart Retention records footage in two qualities and intelligently retains higher quality when motion, people or vehicles are detected."
      },
      "body-scheduleId": {
        type: "string",
        description: "Schedule for which this camera will record video, or 'null' to always record."
      },
      "body-maxRetentionDays": {
        type: "integer",
        description: "The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be in the range of one to ninety days."
      },
      "body-videoSettings": {
        type: "object",
        description: "Video quality and resolution settings for all the camera models."
      }
    },
    required: ["path-networkId","path-qualityRetentionProfileId"],
  },
};

export const deleteNetworkCameraQualityRetentionProfileTool: Tool = {
  name: "deleteNetworkCameraQualityRetentionProfile",
  scope: "",
  description: "Delete an existing quality retention profile for this network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-qualityRetentionProfileId": {
        type: "string",
        description: "Quality retention profile ID"
      }
    },
    required: ["path-networkId","path-qualityRetentionProfileId"],
  },
};

export const getNetworkCameraSchedulesTool: Tool = {
  name: "getNetworkCameraSchedules",
  scope: "",
  description: "Returns a list of all camera recording schedules.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      }
    },
    required: ["path-networkId"],
  },
};

export const createNetworkCameraWirelessProfileTool: Tool = {
  name: "createNetworkCameraWirelessProfile",
  scope: "",
  description: "Creates a new camera wireless profile for this network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the camera wireless profile. This parameter is required."
      },
      "body-ssid": {
        type: "object",
        description: "The details of the SSID config."
      },
      "body-identity": {
        type: "object",
        description: "The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode."
      }
    },
    required: ["path-networkId","body-name","body-ssid"],
  },
};

export const getNetworkCameraWirelessProfilesTool: Tool = {
  name: "getNetworkCameraWirelessProfiles",
  scope: "",
  description: "List the camera wireless profiles for this network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkCameraWirelessProfileTool: Tool = {
  name: "getNetworkCameraWirelessProfile",
  scope: "",
  description: "Retrieve a single camera wireless profile.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-wirelessProfileId": {
        type: "string",
        description: "Wireless profile ID"
      }
    },
    required: ["path-networkId","path-wirelessProfileId"],
  },
};

export const updateNetworkCameraWirelessProfileTool: Tool = {
  name: "updateNetworkCameraWirelessProfile",
  scope: "",
  description: "Update an existing camera wireless profile in this network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-wirelessProfileId": {
        type: "string",
        description: "Wireless profile ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the camera wireless profile."
      },
      "body-ssid": {
        type: "object",
        description: "The details of the SSID config."
      },
      "body-identity": {
        type: "object",
        description: "The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode."
      }
    },
    required: ["path-networkId","path-wirelessProfileId"],
  },
};

export const deleteNetworkCameraWirelessProfileTool: Tool = {
  name: "deleteNetworkCameraWirelessProfile",
  scope: "",
  description: "Delete an existing camera wireless profile for this network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-wirelessProfileId": {
        type: "string",
        description: "Wireless profile ID"
      }
    },
    required: ["path-networkId","path-wirelessProfileId"],
  },
};

export const getOrganizationCameraBoundariesAreasByDeviceTool: Tool = {
  name: "getOrganizationCameraBoundariesAreasByDevice",
  scope: "",
  description: "Returns all configured area boundaries of cameras",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-serials": {
        type: "array",
        description: "A list of serial numbers. The returned cameras will be filtered to only include these serials."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationCameraBoundariesLinesByDeviceTool: Tool = {
  name: "getOrganizationCameraBoundariesLinesByDevice",
  scope: "",
  description: "Returns all configured crossingline boundaries of cameras",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-serials": {
        type: "array",
        description: "A list of serial numbers. The returned cameras will be filtered to only include these serials."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationCameraCustomAnalyticsArtifactsTool: Tool = {
  name: "getOrganizationCameraCustomAnalyticsArtifacts",
  scope: "",
  description: "List Custom Analytics Artifacts",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationCameraCustomAnalyticsArtifactTool: Tool = {
  name: "createOrganizationCameraCustomAnalyticsArtifact",
  scope: "",
  description: "Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Unique name of the artifact"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationCameraCustomAnalyticsArtifactTool: Tool = {
  name: "getOrganizationCameraCustomAnalyticsArtifact",
  scope: "",
  description: "Get Custom Analytics Artifact",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-artifactId": {
        type: "string",
        description: "Artifact ID"
      }
    },
    required: ["path-organizationId","path-artifactId"],
  },
};

export const deleteOrganizationCameraCustomAnalyticsArtifactTool: Tool = {
  name: "deleteOrganizationCameraCustomAnalyticsArtifact",
  scope: "",
  description: "Delete Custom Analytics Artifact",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-artifactId": {
        type: "string",
        description: "Artifact ID"
      }
    },
    required: ["path-organizationId","path-artifactId"],
  },
};

export const getOrganizationCameraDetectionsHistoryByBoundaryByIntervalTool: Tool = {
  name: "getOrganizationCameraDetectionsHistoryByBoundaryByInterval",
  scope: "",
  description: "Returns analytics data for timespans",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-boundaryIds": {
        type: "array",
        description: "A list of boundary ids. The returned cameras will be filtered to only include these ids."
      },
      "query-duration": {
        type: "integer",
        description: "The minimum time, in seconds, that the person or car remains in the area to be counted. Defaults to boundary configuration or 60."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 1 - 1000. Defaults to 1000."
      },
      "query-boundaryTypes": {
        type: "array",
        description: "The detection types. Defaults to 'person'."
      }
    },
    required: ["path-organizationId","query-boundaryIds"],
  },
};

export const getOrganizationCameraOnboardingStatusesTool: Tool = {
  name: "getOrganizationCameraOnboardingStatuses",
  scope: "",
  description: "Fetch onboarding status of cameras",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-serials": {
        type: "array",
        description: "A list of serial numbers. The returned cameras will be filtered to only include these serials."
      },
      "query-networkIds": {
        type: "array",
        description: "A list of network IDs. The returned cameras will be filtered to only include these networks."
      }
    },
    required: ["path-organizationId"],
  },
};

export const updateOrganizationCameraOnboardingStatusesTool: Tool = {
  name: "updateOrganizationCameraOnboardingStatuses",
  scope: "",
  description: "Notify that credential handoff to camera has completed",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-serial": {
        type: "string",
        description: "Serial of camera"
      },
      "body-wirelessCredentialsSent": {
        type: "boolean",
        description: "Note whether credentials were sent successfully"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationCameraPermissionsTool: Tool = {
  name: "getOrganizationCameraPermissions",
  scope: "",
  description: "List the permissions scopes for this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationCameraPermissionTool: Tool = {
  name: "getOrganizationCameraPermission",
  scope: "",
  description: "Retrieve a single permission scope",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-permissionScopeId": {
        type: "string",
        description: "Permission scope ID"
      }
    },
    required: ["path-organizationId","path-permissionScopeId"],
  },
};

export const getOrganizationCameraRolesTool: Tool = {
  name: "getOrganizationCameraRoles",
  scope: "",
  description: "List all the roles in this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationCameraRoleTool: Tool = {
  name: "createOrganizationCameraRole",
  scope: "",
  description: "Creates new role for this organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new role. Must be unique. This parameter is required."
      },
      "body-appliedOnDevices": {
        type: "array",
        description: "Device tag on which this specified permission is applied."
      },
      "body-appliedOnNetworks": {
        type: "array",
        description: "Network tag on which this specified permission is applied."
      },
      "body-appliedOrgWide": {
        type: "array",
        description: "Permissions to be applied org wide."
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const getOrganizationCameraRoleTool: Tool = {
  name: "getOrganizationCameraRole",
  scope: "",
  description: "Retrieve a single role.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-roleId": {
        type: "string",
        description: "Role ID"
      }
    },
    required: ["path-organizationId","path-roleId"],
  },
};

export const deleteOrganizationCameraRoleTool: Tool = {
  name: "deleteOrganizationCameraRole",
  scope: "",
  description: "Delete an existing role for this organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-roleId": {
        type: "string",
        description: "Role ID"
      }
    },
    required: ["path-organizationId","path-roleId"],
  },
};

export const updateOrganizationCameraRoleTool: Tool = {
  name: "updateOrganizationCameraRole",
  scope: "",
  description: "Update an existing role in this organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-roleId": {
        type: "string",
        description: "Role ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new role. Must be unique."
      },
      "body-appliedOnDevices": {
        type: "array",
        description: "Device tag on which this specified permission is applied."
      },
      "body-appliedOnNetworks": {
        type: "array",
        description: "Network tag on which this specified permission is applied."
      },
      "body-appliedOrgWide": {
        type: "array",
        description: "Permissions to be applied org wide."
      }
    },
    required: ["path-organizationId","path-roleId"],
  },
};

export const cameraTools = [
  getDeviceCameraAnalyticsLiveTool,
  getDeviceCameraAnalyticsOverviewTool,
  getDeviceCameraAnalyticsRecentTool,
  getDeviceCameraAnalyticsZonesTool,
  getDeviceCameraAnalyticsZoneHistoryTool,
  getDeviceCameraCustomAnalyticsTool,
  updateDeviceCameraCustomAnalyticsTool,
  generateDeviceCameraSnapshotTool,
  getDeviceCameraQualityAndRetentionTool,
  updateDeviceCameraQualityAndRetentionTool,
  getDeviceCameraSenseTool,
  updateDeviceCameraSenseTool,
  getDeviceCameraSenseObjectDetectionModelsTool,
  getDeviceCameraVideoSettingsTool,
  updateDeviceCameraVideoSettingsTool,
  getDeviceCameraVideoLinkTool,
  getDeviceCameraWirelessProfilesTool,
  updateDeviceCameraWirelessProfilesTool,
  getNetworkCameraQualityRetentionProfilesTool,
  createNetworkCameraQualityRetentionProfileTool,
  getNetworkCameraQualityRetentionProfileTool,
  updateNetworkCameraQualityRetentionProfileTool,
  deleteNetworkCameraQualityRetentionProfileTool,
  getNetworkCameraSchedulesTool,
  createNetworkCameraWirelessProfileTool,
  getNetworkCameraWirelessProfilesTool,
  getNetworkCameraWirelessProfileTool,
  updateNetworkCameraWirelessProfileTool,
  deleteNetworkCameraWirelessProfileTool,
  getOrganizationCameraBoundariesAreasByDeviceTool,
  getOrganizationCameraBoundariesLinesByDeviceTool,
  getOrganizationCameraCustomAnalyticsArtifactsTool,
  createOrganizationCameraCustomAnalyticsArtifactTool,
  getOrganizationCameraCustomAnalyticsArtifactTool,
  deleteOrganizationCameraCustomAnalyticsArtifactTool,
  getOrganizationCameraDetectionsHistoryByBoundaryByIntervalTool,
  getOrganizationCameraOnboardingStatusesTool,
  updateOrganizationCameraOnboardingStatusesTool,
  getOrganizationCameraPermissionsTool,
  getOrganizationCameraPermissionTool,
  getOrganizationCameraRolesTool,
  createOrganizationCameraRoleTool,
  getOrganizationCameraRoleTool,
  deleteOrganizationCameraRoleTool,
  updateOrganizationCameraRoleTool
];