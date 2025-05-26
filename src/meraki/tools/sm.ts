import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const createNetworkSmBypassActivationLockAttemptTool: Tool = {
  name: "createNetworkSmBypassActivationLockAttempt",
  scope: "sm",
  description: "Bypass activation lock attempt",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          ids: {
            type: "array",
            description: "The ids of the devices to attempt activation lock bypass."
          }
        }
      }
    },
    required: ["path.networkId, body.ids"],
  },
};

export const getNetworkSmBypassActivationLockAttemptTool: Tool = {
  name: "getNetworkSmBypassActivationLockAttempt",
  scope: "sm",
  description: "Bypass activation lock attempt status",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          attemptId: {
            type: "string",
            description: "Attempt ID"
          }
        }
      }
    },
    required: ["path.networkId, path.attemptId"],
  },
};

export const getNetworkSmDevicesTool: Tool = {
  name: "getNetworkSmDevices",
  scope: "sm",
  description: "List the devices enrolled in an SM network with various specified fields and filters",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          fields: {
            type: "array",
            description: "Additional fields that will be displayed for each device.    The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,    systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,    ownerEmail, ownerUsername, osBuild, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,    simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,    isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,    hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, androidSecurityPatchVersion, cellular, and url."
          },
          wifiMacs: {
            type: "array",
            description: "Filter devices by wifi mac(s)."
          },
          serials: {
            type: "array",
            description: "Filter devices by serial(s)."
          },
          ids: {
            type: "array",
            description: "Filter devices by id(s)."
          },
          uuids: {
            type: "array",
            description: "Filter devices by uuid(s)."
          },
          systemTypes: {
            type: "array",
            description: "Filter devices by system type(s)."
          },
          scope: {
            type: "array",
            description: "Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const checkinNetworkSmDevicesTool: Tool = {
  name: "checkinNetworkSmDevices",
  scope: "sm",
  description: "Force check-in a set of devices",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          wifiMacs: {
            type: "array",
            description: "The wifiMacs of the devices to be checked-in."
          },
          ids: {
            type: "array",
            description: "The ids of the devices to be checked-in."
          },
          serials: {
            type: "array",
            description: "The serials of the devices to be checked-in."
          },
          scope: {
            type: "array",
            description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be checked-in."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkSmDevicesFieldsTool: Tool = {
  name: "updateNetworkSmDevicesFields",
  scope: "sm",
  description: "Modify the fields of a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          wifiMac: {
            type: "string",
            description: "The wifiMac of the device to be modified."
          },
          id: {
            type: "string",
            description: "The id of the device to be modified."
          },
          serial: {
            type: "string",
            description: "The serial of the device to be modified."
          },
          deviceFields: {
            type: "object",
            description: "The new fields of the device. Each field of this object is optional."
          }
        }
      }
    },
    required: ["path.networkId, body.deviceFields"],
  },
};

export const lockNetworkSmDevicesTool: Tool = {
  name: "lockNetworkSmDevices",
  scope: "sm",
  description: "Lock a set of devices",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          wifiMacs: {
            type: "array",
            description: "The wifiMacs of the devices to be locked."
          },
          ids: {
            type: "array",
            description: "The ids of the devices to be locked."
          },
          serials: {
            type: "array",
            description: "The serials of the devices to be locked."
          },
          scope: {
            type: "array",
            description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be locked."
          },
          pin: {
            type: "integer",
            description: "The pin number for locking macOS devices (a six digit number). Required only for macOS devices."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const modifyNetworkSmDevicesTagsTool: Tool = {
  name: "modifyNetworkSmDevicesTags",
  scope: "sm",
  description: "Add, delete, or update the tags of a set of devices",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          wifiMacs: {
            type: "array",
            description: "The wifiMacs of the devices to be modified."
          },
          ids: {
            type: "array",
            description: "The ids of the devices to be modified."
          },
          serials: {
            type: "array",
            description: "The serials of the devices to be modified."
          },
          scope: {
            type: "array",
            description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified."
          },
          tags: {
            type: "array",
            description: "The tags to be added, deleted, or updated."
          },
          updateAction: {
            type: "string",
            description: "One of add, delete, or update. Only devices that have been modified will be returned."
          }
        }
      }
    },
    required: ["path.networkId, body.tags, body.updateAction"],
  },
};

export const moveNetworkSmDevicesTool: Tool = {
  name: "moveNetworkSmDevices",
  scope: "sm",
  description: "Move a set of devices to a new network",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          wifiMacs: {
            type: "array",
            description: "The wifiMacs of the devices to be moved."
          },
          ids: {
            type: "array",
            description: "The ids of the devices to be moved."
          },
          serials: {
            type: "array",
            description: "The serials of the devices to be moved."
          },
          scope: {
            type: "array",
            description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be moved."
          },
          newNetwork: {
            type: "string",
            description: "The new network to which the devices will be moved."
          }
        }
      }
    },
    required: ["path.networkId, body.newNetwork"],
  },
};

export const rebootNetworkSmDevicesTool: Tool = {
  name: "rebootNetworkSmDevices",
  scope: "sm",
  description: "Reboot a set of endpoints",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          wifiMacs: {
            type: "array",
            description: "The wifiMacs of the endpoints to be rebooted."
          },
          ids: {
            type: "array",
            description: "The ids of the endpoints to be rebooted."
          },
          serials: {
            type: "array",
            description: "The serials of the endpoints to be rebooted."
          },
          scope: {
            type: "array",
            description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the endpoints to be rebooted."
          },
          kextPaths: {
            type: "array",
            description: "The KextPaths of the endpoints to be rebooted. Available for macOS 11+"
          },
          notifyUser: {
            type: "boolean",
            description: "Whether or not to notify the user before rebooting the endpoint. Available for macOS 11.3+"
          },
          rebuildKernelCache: {
            type: "boolean",
            description: "Whether or not to rebuild the kernel cache when rebooting the endpoint. Available for macOS 11+"
          },
          requestRequiresNetworkTether: {
            type: "boolean",
            description: "Whether or not the request requires network tethering. Available for macOS and supervised iOS or tvOS"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const shutdownNetworkSmDevicesTool: Tool = {
  name: "shutdownNetworkSmDevices",
  scope: "sm",
  description: "Shutdown a set of endpoints",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          wifiMacs: {
            type: "array",
            description: "The wifiMacs of the endpoints to be shutdown."
          },
          ids: {
            type: "array",
            description: "The ids of the endpoints to be shutdown."
          },
          serials: {
            type: "array",
            description: "The serials of the endpoints to be shutdown."
          },
          scope: {
            type: "array",
            description: "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the endpoints to be shutdown."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const wipeNetworkSmDevicesTool: Tool = {
  name: "wipeNetworkSmDevices",
  scope: "sm",
  description: "Wipe a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          wifiMac: {
            type: "string",
            description: "The wifiMac of the device to be wiped."
          },
          id: {
            type: "string",
            description: "The id of the device to be wiped."
          },
          serial: {
            type: "string",
            description: "The serial of the device to be wiped."
          },
          pin: {
            type: "integer",
            description: "The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSmDeviceCellularUsageHistoryTool: Tool = {
  name: "getNetworkSmDeviceCellularUsageHistory",
  scope: "sm",
  description: "Return the client's daily cellular data usage history. Usage data is in kilobytes.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDeviceCertsTool: Tool = {
  name: "getNetworkSmDeviceCerts",
  scope: "sm",
  description: "List the certs on a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDeviceConnectivityTool: Tool = {
  name: "getNetworkSmDeviceConnectivity",
  scope: "sm",
  description: "Returns historical connectivity data (whether a device is regularly checking in to Dashboard).",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDeviceDesktopLogsTool: Tool = {
  name: "getNetworkSmDeviceDesktopLogs",
  scope: "sm",
  description: "Return historical records of various Systems Manager network connection details for desktop devices.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDeviceDeviceCommandLogsTool: Tool = {
  name: "getNetworkSmDeviceDeviceCommandLogs",
  scope: "sm",
  description: "Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDeviceDeviceProfilesTool: Tool = {
  name: "getNetworkSmDeviceDeviceProfiles",
  scope: "sm",
  description: "Get the installed profiles associated with a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const installNetworkSmDeviceAppsTool: Tool = {
  name: "installNetworkSmDeviceApps",
  scope: "sm",
  description: "Install applications on a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          appIds: {
            type: "array",
            description: "ids of applications to be installed"
          },
          force: {
            type: "boolean",
            description: "By default, installation of an app which is believed to already be present on the device will be skipped. If you'd like to force the installation of the app, set this parameter to true."
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId, body.appIds"],
  },
};

export const getNetworkSmDeviceNetworkAdaptersTool: Tool = {
  name: "getNetworkSmDeviceNetworkAdapters",
  scope: "sm",
  description: "List the network adapters of a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDevicePerformanceHistoryTool: Tool = {
  name: "getNetworkSmDevicePerformanceHistory",
  scope: "sm",
  description: "Return historical records of various Systems Manager client metrics for desktop devices.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const refreshNetworkSmDeviceDetailsTool: Tool = {
  name: "refreshNetworkSmDeviceDetails",
  scope: "sm",
  description: "Refresh the details of a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDeviceRestrictionsTool: Tool = {
  name: "getNetworkSmDeviceRestrictions",
  scope: "sm",
  description: "List the restrictions on a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDeviceSecurityCentersTool: Tool = {
  name: "getNetworkSmDeviceSecurityCenters",
  scope: "sm",
  description: "List the security centers on a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmDeviceSoftwaresTool: Tool = {
  name: "getNetworkSmDeviceSoftwares",
  scope: "sm",
  description: "Get a list of softwares associated with a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const unenrollNetworkSmDeviceTool: Tool = {
  name: "unenrollNetworkSmDevice",
  scope: "sm",
  description: "Unenroll a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const uninstallNetworkSmDeviceAppsTool: Tool = {
  name: "uninstallNetworkSmDeviceApps",
  scope: "sm",
  description: "Uninstall applications on a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          appIds: {
            type: "array",
            description: "ids of applications to be uninstalled"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId, body.appIds"],
  },
};

export const getNetworkSmDeviceWlanListsTool: Tool = {
  name: "getNetworkSmDeviceWlanLists",
  scope: "sm",
  description: "List the saved SSID names on a device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          deviceId: {
            type: "string",
            description: "Device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.deviceId"],
  },
};

export const getNetworkSmProfilesTool: Tool = {
  name: "getNetworkSmProfiles",
  scope: "sm",
  description: "List all profiles in a network",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          payloadTypes: {
            type: "array",
            description: "Filter by payload types"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSmTargetGroupsTool: Tool = {
  name: "getNetworkSmTargetGroups",
  scope: "sm",
  description: "List the target groups in this network",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          withDetails: {
            type: "boolean",
            description: "Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkSmTargetGroupTool: Tool = {
  name: "createNetworkSmTargetGroup",
  scope: "sm",
  description: "Add a target group",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of this target group"
          },
          scope: {
            type: "string",
            description: "The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSmTargetGroupTool: Tool = {
  name: "getNetworkSmTargetGroup",
  scope: "sm",
  description: "Return a target group",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          targetGroupId: {
            type: "string",
            description: "Target group ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          withDetails: {
            type: "boolean",
            description: "Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response"
          }
        }
      }
    },
    required: ["path.networkId, path.targetGroupId"],
  },
};

export const updateNetworkSmTargetGroupTool: Tool = {
  name: "updateNetworkSmTargetGroup",
  scope: "sm",
  description: "Update a target group",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          targetGroupId: {
            type: "string",
            description: "Target group ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of this target group"
          },
          scope: {
            type: "string",
            description: "The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty."
          }
        }
      }
    },
    required: ["path.networkId, path.targetGroupId"],
  },
};

export const deleteNetworkSmTargetGroupTool: Tool = {
  name: "deleteNetworkSmTargetGroup",
  scope: "sm",
  description: "Delete a target group from a network",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          targetGroupId: {
            type: "string",
            description: "Target group ID"
          }
        }
      }
    },
    required: ["path.networkId, path.targetGroupId"],
  },
};

export const getNetworkSmTrustedAccessConfigsTool: Tool = {
  name: "getNetworkSmTrustedAccessConfigs",
  scope: "sm",
  description: "List Trusted Access Configs",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSmUserAccessDevicesTool: Tool = {
  name: "getNetworkSmUserAccessDevices",
  scope: "sm",
  description: "List User Access Devices and its Trusted Access Connections",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const deleteNetworkSmUserAccessDeviceTool: Tool = {
  name: "deleteNetworkSmUserAccessDevice",
  scope: "sm",
  description: "Delete a User Access Device",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          userAccessDeviceId: {
            type: "string",
            description: "User access device ID"
          }
        }
      }
    },
    required: ["path.networkId, path.userAccessDeviceId"],
  },
};

export const getNetworkSmUsersTool: Tool = {
  name: "getNetworkSmUsers",
  scope: "sm",
  description: "List the owners in an SM network with various specified fields and filters",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          ids: {
            type: "array",
            description: "Filter users by id(s)."
          },
          usernames: {
            type: "array",
            description: "Filter users by username(s)."
          },
          emails: {
            type: "array",
            description: "Filter users by email(s)."
          },
          scope: {
            type: "array",
            description: "Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSmUserDeviceProfilesTool: Tool = {
  name: "getNetworkSmUserDeviceProfiles",
  scope: "sm",
  description: "Get the profiles associated with a user",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          userId: {
            type: "string",
            description: "User ID"
          }
        }
      }
    },
    required: ["path.networkId, path.userId"],
  },
};

export const getNetworkSmUserSoftwaresTool: Tool = {
  name: "getNetworkSmUserSoftwares",
  scope: "sm",
  description: "Get a list of softwares associated with a user",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          networkId: {
            type: "string",
            description: "Network ID"
          },
          userId: {
            type: "string",
            description: "User ID"
          }
        }
      }
    },
    required: ["path.networkId, path.userId"],
  },
};

export const getOrganizationSmAdminsRolesTool: Tool = {
  name: "getOrganizationSmAdminsRoles",
  scope: "sm",
  description: "List the Limited Access Roles for an organization",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const createOrganizationSmAdminsRoleTool: Tool = {
  name: "createOrganizationSmAdminsRole",
  scope: "sm",
  description: "Create a Limited Access Role",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of the Limited Access Role"
          },
          scope: {
            type: "string",
            description: "The scope of the Limited Access Role"
          },
          tags: {
            type: "array",
            description: "The tags of the Limited Access Role"
          }
        }
      }
    },
    required: ["path.organizationId, body.name"],
  },
};

export const getOrganizationSmAdminsRoleTool: Tool = {
  name: "getOrganizationSmAdminsRole",
  scope: "sm",
  description: "Return a Limited Access Role",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          },
          roleId: {
            type: "string",
            description: "Role ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.roleId"],
  },
};

export const updateOrganizationSmAdminsRoleTool: Tool = {
  name: "updateOrganizationSmAdminsRole",
  scope: "sm",
  description: "Update a Limited Access Role",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          },
          roleId: {
            type: "string",
            description: "Role ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of the Limited Access Role"
          },
          scope: {
            type: "string",
            description: "The scope of the Limited Access Role"
          },
          tags: {
            type: "array",
            description: "The tags of the Limited Access Role"
          }
        }
      }
    },
    required: ["path.organizationId, path.roleId"],
  },
};

export const deleteOrganizationSmAdminsRoleTool: Tool = {
  name: "deleteOrganizationSmAdminsRole",
  scope: "sm",
  description: "Delete a Limited Access Role",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          },
          roleId: {
            type: "string",
            description: "Role ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.roleId"],
  },
};

export const getOrganizationSmApnsCertTool: Tool = {
  name: "getOrganizationSmApnsCert",
  scope: "sm",
  description: "Get the organization's APNS certificate",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const createOrganizationSmAppleCloudEnrollmentSyncJobTool: Tool = {
  name: "createOrganizationSmAppleCloudEnrollmentSyncJob",
  scope: "sm",
  description: "Enqueue a sync job for an ADE account",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          adeAccountId: {
            type: "string",
            description: "ADE Account ID"
          },
          fullSync: {
            type: "boolean",
            description: "Whether or not job is full sync (defaults to full sync)"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSmAppleCloudEnrollmentSyncJobTool: Tool = {
  name: "getOrganizationSmAppleCloudEnrollmentSyncJob",
  scope: "sm",
  description: "Retrieve the status of an ADE sync job",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          },
          syncJobId: {
            type: "string",
            description: "Sync job ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.syncJobId"],
  },
};

export const createOrganizationSmBulkEnrollmentTokenTool: Tool = {
  name: "createOrganizationSmBulkEnrollmentToken",
  scope: "sm",
  description: "Create a PccBulkEnrollmentToken",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          networkId: {
            type: "string",
            description: "The id of the associated node_group."
          },
          expiresAt: {
            type: "string",
            description: "The expiration date."
          }
        }
      }
    },
    required: ["path.organizationId, body.networkId, body.expiresAt"],
  },
};

export const getOrganizationSmBulkEnrollmentTokenTool: Tool = {
  name: "getOrganizationSmBulkEnrollmentToken",
  scope: "sm",
  description: "Return a BulkEnrollmentToken",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          },
          tokenId: {
            type: "string",
            description: "Token ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.tokenId"],
  },
};

export const updateOrganizationSmBulkEnrollmentTokenTool: Tool = {
  name: "updateOrganizationSmBulkEnrollmentToken",
  scope: "sm",
  description: "Update a PccBulkEnrollmentToken",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          },
          tokenId: {
            type: "string",
            description: "Token ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          networkId: {
            type: "string",
            description: "The id of the associated node_group."
          },
          expiresAt: {
            type: "string",
            description: "The expiration date."
          }
        }
      }
    },
    required: ["path.organizationId, path.tokenId"],
  },
};

export const deleteOrganizationSmBulkEnrollmentTokenTool: Tool = {
  name: "deleteOrganizationSmBulkEnrollmentToken",
  scope: "sm",
  description: "Delete a PccBulkEnrollmentToken",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          },
          tokenId: {
            type: "string",
            description: "Token ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.tokenId"],
  },
};

export const getOrganizationSmBulkEnrollmentTokensTool: Tool = {
  name: "getOrganizationSmBulkEnrollmentTokens",
  scope: "sm",
  description: "List all BulkEnrollmentTokens for an organization.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const updateOrganizationSmSentryPoliciesAssignmentsTool: Tool = {
  name: "updateOrganizationSmSentryPoliciesAssignments",
  scope: "sm",
  description: "Update an Organizations Sentry Policies using the provided list. Sentry Policies are ordered in descending order of priority (i.e. highest priority at the bottom, this is opposite the Dashboard UI). Policies not present in the request will be deleted.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          items: {
            type: "array",
            description: "Sentry Group Policies for the Organization keyed by Network Id"
          }
        }
      }
    },
    required: ["path.organizationId, body.items"],
  },
};

export const getOrganizationSmSentryPoliciesAssignmentsByNetworkTool: Tool = {
  name: "getOrganizationSmSentryPoliciesAssignmentsByNetwork",
  scope: "sm",
  description: "List the Sentry Policies for an organization ordered in ascending order of priority",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          networkIds: {
            type: "array",
            description: "Optional parameter to filter Sentry Policies by Network Id"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSmVppAccountsTool: Tool = {
  name: "getOrganizationSmVppAccounts",
  scope: "sm",
  description: "List the VPP accounts in the organization",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSmVppAccountTool: Tool = {
  name: "getOrganizationSmVppAccount",
  scope: "sm",
  description: "Get a hash containing the unparsed token of the VPP account with the given ID",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          },
          vppAccountId: {
            type: "string",
            description: "Vpp account ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.vppAccountId"],
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