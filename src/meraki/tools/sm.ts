import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const createNetworkSmBypassActivationLockAttemptTool: Tool = {
  name: "createNetworkSmBypassActivationLockAttempt",
  scope: "",
  description: "Bypass activation lock attempt",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-ids": {
        type: "array",
        description: "The ids of the devices to attempt activation lock bypass."
      }
    },
    required: ["path-networkId","body-ids"],
  },
};

export const getNetworkSmBypassActivationLockAttemptTool: Tool = {
  name: "getNetworkSmBypassActivationLockAttempt",
  scope: "",
  description: "Bypass activation lock attempt status",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-attemptId": {
        type: "string",
        description: "Attempt ID"
      }
    },
    required: ["path-networkId","path-attemptId"],
  },
};

export const getNetworkSmDevicesTool: Tool = {
  name: "getNetworkSmDevices",
  scope: "",
  description: "List the devices enrolled in an SM network with various specified fields and filters",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-fields": {
        type: "array",
        description: "Additional fields that will be displayed for each device.    The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,    systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,    ownerEmail, ownerUsername, osBuild, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,    simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,    isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,    hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, androidSecurityPatchVersion, cellular, and url."
      },
      "query-wifiMacs": {
        type: "array",
        description: "Filter devices by wifi mac(s)."
      },
      "query-serials": {
        type: "array",
        description: "Filter devices by serial(s)."
      },
      "query-ids": {
        type: "array",
        description: "Filter devices by id(s)."
      },
      "query-uuids": {
        type: "array",
        description: "Filter devices by uuid(s)."
      },
      "query-systemTypes": {
        type: "array",
        description: "Filter devices by system type(s)."
      },
      "query-scope": {
        type: "array",
        description: "Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-networkId"],
  },
};

export const checkinNetworkSmDevicesTool: Tool = {
  name: "checkinNetworkSmDevices",
  scope: "",
  description: "Force check-in a set of devices",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wifiMacs": {
        type: "array",
        description: "The wifiMacs of the devices to be checked-in."
      },
      "body-ids": {
        type: "array",
        description: "The ids of the devices to be checked-in."
      },
      "body-serials": {
        type: "array",
        description: "The serials of the devices to be checked-in."
      },
      "body-scope": {
        type: "array",
        description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be checked-in."
      }
    },
    required: ["path-networkId"],
  },
};

export const updateNetworkSmDevicesFieldsTool: Tool = {
  name: "updateNetworkSmDevicesFields",
  scope: "",
  description: "Modify the fields of a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wifiMac": {
        type: "string",
        description: "The wifiMac of the device to be modified."
      },
      "body-id": {
        type: "string",
        description: "The id of the device to be modified."
      },
      "body-serial": {
        type: "string",
        description: "The serial of the device to be modified."
      },
      "body-deviceFields": {
        type: "object",
        description: "The new fields of the device. Each field of this object is optional."
      }
    },
    required: ["path-networkId","body-deviceFields"],
  },
};

export const lockNetworkSmDevicesTool: Tool = {
  name: "lockNetworkSmDevices",
  scope: "",
  description: "Lock a set of devices",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wifiMacs": {
        type: "array",
        description: "The wifiMacs of the devices to be locked."
      },
      "body-ids": {
        type: "array",
        description: "The ids of the devices to be locked."
      },
      "body-serials": {
        type: "array",
        description: "The serials of the devices to be locked."
      },
      "body-scope": {
        type: "array",
        description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be locked."
      },
      "body-pin": {
        type: "integer",
        description: "The pin number for locking macOS devices (a six digit number). Required only for macOS devices."
      }
    },
    required: ["path-networkId"],
  },
};

export const modifyNetworkSmDevicesTagsTool: Tool = {
  name: "modifyNetworkSmDevicesTags",
  scope: "",
  description: "Add, delete, or update the tags of a set of devices",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wifiMacs": {
        type: "array",
        description: "The wifiMacs of the devices to be modified."
      },
      "body-ids": {
        type: "array",
        description: "The ids of the devices to be modified."
      },
      "body-serials": {
        type: "array",
        description: "The serials of the devices to be modified."
      },
      "body-scope": {
        type: "array",
        description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified."
      },
      "body-tags": {
        type: "array",
        description: "The tags to be added, deleted, or updated."
      },
      "body-updateAction": {
        type: "string",
        description: "One of add, delete, or update. Only devices that have been modified will be returned."
      }
    },
    required: ["path-networkId","body-tags","body-updateAction"],
  },
};

export const moveNetworkSmDevicesTool: Tool = {
  name: "moveNetworkSmDevices",
  scope: "",
  description: "Move a set of devices to a new network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wifiMacs": {
        type: "array",
        description: "The wifiMacs of the devices to be moved."
      },
      "body-ids": {
        type: "array",
        description: "The ids of the devices to be moved."
      },
      "body-serials": {
        type: "array",
        description: "The serials of the devices to be moved."
      },
      "body-scope": {
        type: "array",
        description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be moved."
      },
      "body-newNetwork": {
        type: "string",
        description: "The new network to which the devices will be moved."
      }
    },
    required: ["path-networkId","body-newNetwork"],
  },
};

export const rebootNetworkSmDevicesTool: Tool = {
  name: "rebootNetworkSmDevices",
  scope: "",
  description: "Reboot a set of endpoints",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wifiMacs": {
        type: "array",
        description: "The wifiMacs of the endpoints to be rebooted."
      },
      "body-ids": {
        type: "array",
        description: "The ids of the endpoints to be rebooted."
      },
      "body-serials": {
        type: "array",
        description: "The serials of the endpoints to be rebooted."
      },
      "body-scope": {
        type: "array",
        description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the endpoints to be rebooted."
      },
      "body-kextPaths": {
        type: "array",
        description: "The KextPaths of the endpoints to be rebooted. Available for macOS 11+"
      },
      "body-notifyUser": {
        type: "boolean",
        description: "Whether or not to notify the user before rebooting the endpoint. Available for macOS 11.3+"
      },
      "body-rebuildKernelCache": {
        type: "boolean",
        description: "Whether or not to rebuild the kernel cache when rebooting the endpoint. Available for macOS 11+"
      },
      "body-requestRequiresNetworkTether": {
        type: "boolean",
        description: "Whether or not the request requires network tethering. Available for macOS and supervised iOS or tvOS"
      }
    },
    required: ["path-networkId"],
  },
};

export const shutdownNetworkSmDevicesTool: Tool = {
  name: "shutdownNetworkSmDevices",
  scope: "",
  description: "Shutdown a set of endpoints",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wifiMacs": {
        type: "array",
        description: "The wifiMacs of the endpoints to be shutdown."
      },
      "body-ids": {
        type: "array",
        description: "The ids of the endpoints to be shutdown."
      },
      "body-serials": {
        type: "array",
        description: "The serials of the endpoints to be shutdown."
      },
      "body-scope": {
        type: "array",
        description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the endpoints to be shutdown."
      }
    },
    required: ["path-networkId"],
  },
};

export const wipeNetworkSmDevicesTool: Tool = {
  name: "wipeNetworkSmDevices",
  scope: "",
  description: "Wipe a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wifiMac": {
        type: "string",
        description: "The wifiMac of the device to be wiped."
      },
      "body-id": {
        type: "string",
        description: "The id of the device to be wiped."
      },
      "body-serial": {
        type: "string",
        description: "The serial of the device to be wiped."
      },
      "body-pin": {
        type: "integer",
        description: "The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkSmDeviceCellularUsageHistoryTool: Tool = {
  name: "getNetworkSmDeviceCellularUsageHistory",
  scope: "",
  description: "Return the client's daily cellular data usage history. Usage data is in kilobytes.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDeviceCertsTool: Tool = {
  name: "getNetworkSmDeviceCerts",
  scope: "",
  description: "List the certs on a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDeviceConnectivityTool: Tool = {
  name: "getNetworkSmDeviceConnectivity",
  scope: "",
  description: "Returns historical connectivity data (whether a device is regularly checking in to Dashboard).",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDeviceDesktopLogsTool: Tool = {
  name: "getNetworkSmDeviceDesktopLogs",
  scope: "",
  description: "Return historical records of various Systems Manager network connection details for desktop devices.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDeviceDeviceCommandLogsTool: Tool = {
  name: "getNetworkSmDeviceDeviceCommandLogs",
  scope: "",
  description: "Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDeviceDeviceProfilesTool: Tool = {
  name: "getNetworkSmDeviceDeviceProfiles",
  scope: "",
  description: "Get the installed profiles associated with a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const installNetworkSmDeviceAppsTool: Tool = {
  name: "installNetworkSmDeviceApps",
  scope: "",
  description: "Install applications on a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      },
      "body-appIds": {
        type: "array",
        description: "ids of applications to be installed"
      },
      "body-force": {
        type: "boolean",
        description: "By default, installation of an app which is believed to already be present on the device will be skipped. If you'd like to force the installation of the app, set this parameter to true."
      }
    },
    required: ["path-networkId","path-deviceId","body-appIds"],
  },
};

export const getNetworkSmDeviceNetworkAdaptersTool: Tool = {
  name: "getNetworkSmDeviceNetworkAdapters",
  scope: "",
  description: "List the network adapters of a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDevicePerformanceHistoryTool: Tool = {
  name: "getNetworkSmDevicePerformanceHistory",
  scope: "",
  description: "Return historical records of various Systems Manager client metrics for desktop devices.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const refreshNetworkSmDeviceDetailsTool: Tool = {
  name: "refreshNetworkSmDeviceDetails",
  scope: "",
  description: "Refresh the details of a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDeviceRestrictionsTool: Tool = {
  name: "getNetworkSmDeviceRestrictions",
  scope: "",
  description: "List the restrictions on a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDeviceSecurityCentersTool: Tool = {
  name: "getNetworkSmDeviceSecurityCenters",
  scope: "",
  description: "List the security centers on a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmDeviceSoftwaresTool: Tool = {
  name: "getNetworkSmDeviceSoftwares",
  scope: "",
  description: "Get a list of softwares associated with a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const unenrollNetworkSmDeviceTool: Tool = {
  name: "unenrollNetworkSmDevice",
  scope: "",
  description: "Unenroll a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const uninstallNetworkSmDeviceAppsTool: Tool = {
  name: "uninstallNetworkSmDeviceApps",
  scope: "",
  description: "Uninstall applications on a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      },
      "body-appIds": {
        type: "array",
        description: "ids of applications to be uninstalled"
      }
    },
    required: ["path-networkId","path-deviceId","body-appIds"],
  },
};

export const getNetworkSmDeviceWlanListsTool: Tool = {
  name: "getNetworkSmDeviceWlanLists",
  scope: "",
  description: "List the saved SSID names on a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-deviceId": {
        type: "string",
        description: "Device ID"
      }
    },
    required: ["path-networkId","path-deviceId"],
  },
};

export const getNetworkSmProfilesTool: Tool = {
  name: "getNetworkSmProfiles",
  scope: "",
  description: "List all profiles in a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-payloadTypes": {
        type: "array",
        description: "Filter by payload types"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkSmTargetGroupsTool: Tool = {
  name: "getNetworkSmTargetGroups",
  scope: "",
  description: "List the target groups in this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-withDetails": {
        type: "boolean",
        description: "Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response"
      }
    },
    required: ["path-networkId"],
  },
};

export const createNetworkSmTargetGroupTool: Tool = {
  name: "createNetworkSmTargetGroup",
  scope: "",
  description: "Add a target group",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-name": {
        type: "string",
        description: "The name of this target group"
      },
      "body-scope": {
        type: "string",
        description: "The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkSmTargetGroupTool: Tool = {
  name: "getNetworkSmTargetGroup",
  scope: "",
  description: "Return a target group",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-targetGroupId": {
        type: "string",
        description: "Target group ID"
      },
      "query-withDetails": {
        type: "boolean",
        description: "Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response"
      }
    },
    required: ["path-networkId","path-targetGroupId"],
  },
};

export const updateNetworkSmTargetGroupTool: Tool = {
  name: "updateNetworkSmTargetGroup",
  scope: "",
  description: "Update a target group",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-targetGroupId": {
        type: "string",
        description: "Target group ID"
      },
      "body-name": {
        type: "string",
        description: "The name of this target group"
      },
      "body-scope": {
        type: "string",
        description: "The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty."
      }
    },
    required: ["path-networkId","path-targetGroupId"],
  },
};

export const deleteNetworkSmTargetGroupTool: Tool = {
  name: "deleteNetworkSmTargetGroup",
  scope: "",
  description: "Delete a target group from a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-targetGroupId": {
        type: "string",
        description: "Target group ID"
      }
    },
    required: ["path-networkId","path-targetGroupId"],
  },
};

export const getNetworkSmTrustedAccessConfigsTool: Tool = {
  name: "getNetworkSmTrustedAccessConfigs",
  scope: "",
  description: "List Trusted Access Configs",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkSmUserAccessDevicesTool: Tool = {
  name: "getNetworkSmUserAccessDevices",
  scope: "",
  description: "List User Access Devices and its Trusted Access Connections",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-networkId"],
  },
};

export const deleteNetworkSmUserAccessDeviceTool: Tool = {
  name: "deleteNetworkSmUserAccessDevice",
  scope: "",
  description: "Delete a User Access Device",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-userAccessDeviceId": {
        type: "string",
        description: "User access device ID"
      }
    },
    required: ["path-networkId","path-userAccessDeviceId"],
  },
};

export const getNetworkSmUsersTool: Tool = {
  name: "getNetworkSmUsers",
  scope: "",
  description: "List the owners in an SM network with various specified fields and filters",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-ids": {
        type: "array",
        description: "Filter users by id(s)."
      },
      "query-usernames": {
        type: "array",
        description: "Filter users by username(s)."
      },
      "query-emails": {
        type: "array",
        description: "Filter users by email(s)."
      },
      "query-scope": {
        type: "array",
        description: "Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkSmUserDeviceProfilesTool: Tool = {
  name: "getNetworkSmUserDeviceProfiles",
  scope: "",
  description: "Get the profiles associated with a user",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-userId": {
        type: "string",
        description: "User ID"
      }
    },
    required: ["path-networkId","path-userId"],
  },
};

export const getNetworkSmUserSoftwaresTool: Tool = {
  name: "getNetworkSmUserSoftwares",
  scope: "",
  description: "Get a list of softwares associated with a user",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-userId": {
        type: "string",
        description: "User ID"
      }
    },
    required: ["path-networkId","path-userId"],
  },
};

export const getOrganizationSmAdminsRolesTool: Tool = {
  name: "getOrganizationSmAdminsRoles",
  scope: "",
  description: "List the Limited Access Roles for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationSmAdminsRoleTool: Tool = {
  name: "createOrganizationSmAdminsRole",
  scope: "",
  description: "Create a Limited Access Role",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the Limited Access Role"
      },
      "body-scope": {
        type: "string",
        description: "The scope of the Limited Access Role"
      },
      "body-tags": {
        type: "array",
        description: "The tags of the Limited Access Role"
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const getOrganizationSmAdminsRoleTool: Tool = {
  name: "getOrganizationSmAdminsRole",
  scope: "",
  description: "Return a Limited Access Role",
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

export const updateOrganizationSmAdminsRoleTool: Tool = {
  name: "updateOrganizationSmAdminsRole",
  scope: "",
  description: "Update a Limited Access Role",
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
        description: "The name of the Limited Access Role"
      },
      "body-scope": {
        type: "string",
        description: "The scope of the Limited Access Role"
      },
      "body-tags": {
        type: "array",
        description: "The tags of the Limited Access Role"
      }
    },
    required: ["path-organizationId","path-roleId"],
  },
};

export const deleteOrganizationSmAdminsRoleTool: Tool = {
  name: "deleteOrganizationSmAdminsRole",
  scope: "",
  description: "Delete a Limited Access Role",
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

export const getOrganizationSmApnsCertTool: Tool = {
  name: "getOrganizationSmApnsCert",
  scope: "",
  description: "Get the organization's APNS certificate",
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

export const createOrganizationSmAppleCloudEnrollmentSyncJobTool: Tool = {
  name: "createOrganizationSmAppleCloudEnrollmentSyncJob",
  scope: "",
  description: "Enqueue a sync job for an ADE account",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-adeAccountId": {
        type: "string",
        description: "ADE Account ID"
      },
      "body-fullSync": {
        type: "boolean",
        description: "Whether or not job is full sync (defaults to full sync)"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSmAppleCloudEnrollmentSyncJobTool: Tool = {
  name: "getOrganizationSmAppleCloudEnrollmentSyncJob",
  scope: "",
  description: "Retrieve the status of an ADE sync job",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-syncJobId": {
        type: "string",
        description: "Sync job ID"
      }
    },
    required: ["path-organizationId","path-syncJobId"],
  },
};

export const createOrganizationSmBulkEnrollmentTokenTool: Tool = {
  name: "createOrganizationSmBulkEnrollmentToken",
  scope: "",
  description: "Create a PccBulkEnrollmentToken",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-networkId": {
        type: "string",
        description: "The id of the associated node_group."
      },
      "body-expiresAt": {
        type: "string",
        description: "The expiration date."
      }
    },
    required: ["path-organizationId","body-networkId","body-expiresAt"],
  },
};

export const getOrganizationSmBulkEnrollmentTokenTool: Tool = {
  name: "getOrganizationSmBulkEnrollmentToken",
  scope: "",
  description: "Return a BulkEnrollmentToken",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-tokenId": {
        type: "string",
        description: "Token ID"
      }
    },
    required: ["path-organizationId","path-tokenId"],
  },
};

export const updateOrganizationSmBulkEnrollmentTokenTool: Tool = {
  name: "updateOrganizationSmBulkEnrollmentToken",
  scope: "",
  description: "Update a PccBulkEnrollmentToken",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-tokenId": {
        type: "string",
        description: "Token ID"
      },
      "body-networkId": {
        type: "string",
        description: "The id of the associated node_group."
      },
      "body-expiresAt": {
        type: "string",
        description: "The expiration date."
      }
    },
    required: ["path-organizationId","path-tokenId"],
  },
};

export const deleteOrganizationSmBulkEnrollmentTokenTool: Tool = {
  name: "deleteOrganizationSmBulkEnrollmentToken",
  scope: "",
  description: "Delete a PccBulkEnrollmentToken",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-tokenId": {
        type: "string",
        description: "Token ID"
      }
    },
    required: ["path-organizationId","path-tokenId"],
  },
};

export const getOrganizationSmBulkEnrollmentTokensTool: Tool = {
  name: "getOrganizationSmBulkEnrollmentTokens",
  scope: "",
  description: "List all BulkEnrollmentTokens for an organization.",
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

export const updateOrganizationSmSentryPoliciesAssignmentsTool: Tool = {
  name: "updateOrganizationSmSentryPoliciesAssignments",
  scope: "",
  description: "Update an Organizations Sentry Policies using the provided list. Sentry Policies are ordered in descending order of priority (i.e. highest priority at the bottom, this is opposite the Dashboard UI). Policies not present in the request will be deleted.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-items": {
        type: "array",
        description: "Sentry Group Policies for the Organization keyed by Network Id"
      }
    },
    required: ["path-organizationId","body-items"],
  },
};

export const getOrganizationSmSentryPoliciesAssignmentsByNetworkTool: Tool = {
  name: "getOrganizationSmSentryPoliciesAssignmentsByNetwork",
  scope: "",
  description: "List the Sentry Policies for an organization ordered in ascending order of priority",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter Sentry Policies by Network Id"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSmVppAccountsTool: Tool = {
  name: "getOrganizationSmVppAccounts",
  scope: "",
  description: "List the VPP accounts in the organization",
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

export const getOrganizationSmVppAccountTool: Tool = {
  name: "getOrganizationSmVppAccount",
  scope: "",
  description: "Get a hash containing the unparsed token of the VPP account with the given ID",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-vppAccountId": {
        type: "string",
        description: "Vpp account ID"
      }
    },
    required: ["path-organizationId","path-vppAccountId"],
  },
};

export const smTools = [
  createNetworkSmBypassActivationLockAttemptTool,
  getNetworkSmBypassActivationLockAttemptTool,
  getNetworkSmDevicesTool,
  checkinNetworkSmDevicesTool,
  updateNetworkSmDevicesFieldsTool,
  lockNetworkSmDevicesTool,
  modifyNetworkSmDevicesTagsTool,
  moveNetworkSmDevicesTool,
  rebootNetworkSmDevicesTool,
  shutdownNetworkSmDevicesTool,
  wipeNetworkSmDevicesTool,
  getNetworkSmDeviceCellularUsageHistoryTool,
  getNetworkSmDeviceCertsTool,
  getNetworkSmDeviceConnectivityTool,
  getNetworkSmDeviceDesktopLogsTool,
  getNetworkSmDeviceDeviceCommandLogsTool,
  getNetworkSmDeviceDeviceProfilesTool,
  installNetworkSmDeviceAppsTool,
  getNetworkSmDeviceNetworkAdaptersTool,
  getNetworkSmDevicePerformanceHistoryTool,
  refreshNetworkSmDeviceDetailsTool,
  getNetworkSmDeviceRestrictionsTool,
  getNetworkSmDeviceSecurityCentersTool,
  getNetworkSmDeviceSoftwaresTool,
  unenrollNetworkSmDeviceTool,
  uninstallNetworkSmDeviceAppsTool,
  getNetworkSmDeviceWlanListsTool,
  getNetworkSmProfilesTool,
  getNetworkSmTargetGroupsTool,
  createNetworkSmTargetGroupTool,
  getNetworkSmTargetGroupTool,
  updateNetworkSmTargetGroupTool,
  deleteNetworkSmTargetGroupTool,
  getNetworkSmTrustedAccessConfigsTool,
  getNetworkSmUserAccessDevicesTool,
  deleteNetworkSmUserAccessDeviceTool,
  getNetworkSmUsersTool,
  getNetworkSmUserDeviceProfilesTool,
  getNetworkSmUserSoftwaresTool,
  getOrganizationSmAdminsRolesTool,
  createOrganizationSmAdminsRoleTool,
  getOrganizationSmAdminsRoleTool,
  updateOrganizationSmAdminsRoleTool,
  deleteOrganizationSmAdminsRoleTool,
  getOrganizationSmApnsCertTool,
  createOrganizationSmAppleCloudEnrollmentSyncJobTool,
  getOrganizationSmAppleCloudEnrollmentSyncJobTool,
  createOrganizationSmBulkEnrollmentTokenTool,
  getOrganizationSmBulkEnrollmentTokenTool,
  updateOrganizationSmBulkEnrollmentTokenTool,
  deleteOrganizationSmBulkEnrollmentTokenTool,
  getOrganizationSmBulkEnrollmentTokensTool,
  updateOrganizationSmSentryPoliciesAssignmentsTool,
  getOrganizationSmSentryPoliciesAssignmentsByNetworkTool,
  getOrganizationSmVppAccountsTool,
  getOrganizationSmVppAccountTool
];