import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const updateDeviceWirelessAlternateManagementInterfaceIpv6Tool: Tool = {
  name: "updateDeviceWirelessAlternateManagementInterfaceIpv6",
  scope: "",
  description: "Update alternate management interface IPv6 address",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-addresses": {
        type: "array",
        description: "configured alternate management interface addresses"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceWirelessBluetoothSettingsTool: Tool = {
  name: "getDeviceWirelessBluetoothSettings",
  scope: "",
  description: "Return the bluetooth settings for a wireless device",
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

export const updateDeviceWirelessBluetoothSettingsTool: Tool = {
  name: "updateDeviceWirelessBluetoothSettings",
  scope: "",
  description: "Update the bluetooth settings for a wireless device",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-uuid": {
        type: "string",
        description: "Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's          automatically generated value."
      },
      "body-major": {
        type: "integer",
        description: "Desired major value of the beacon. If the value is set to null it will reset to          Dashboard's automatically generated value."
      },
      "body-minor": {
        type: "integer",
        description: "Desired minor value of the beacon. If the value is set to null it will reset to          Dashboard's automatically generated value."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceWirelessConnectionStatsTool: Tool = {
  name: "getDeviceWirelessConnectionStats",
  scope: "",
  description: "Aggregated connectivity info for a given AP on this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceWirelessElectronicShelfLabelTool: Tool = {
  name: "getDeviceWirelessElectronicShelfLabel",
  scope: "",
  description: "Return the ESL settings of a device",
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

export const updateDeviceWirelessElectronicShelfLabelTool: Tool = {
  name: "updateDeviceWirelessElectronicShelfLabel",
  scope: "",
  description: "Update the ESL settings of a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-channel": {
        type: "string",
        description: "Desired ESL channel for the device, or 'Auto' (case insensitive) to use the recommended channel"
      },
      "body-enabled": {
        type: "boolean",
        description: "Turn ESL features on and off for this device"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceWirelessHealthScoresTool: Tool = {
  name: "getDeviceWirelessHealthScores",
  scope: "",
  description: "Fetch the health scores for a given AP on this network",
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

export const getDeviceWirelessLatencyStatsTool: Tool = {
  name: "getDeviceWirelessLatencyStats",
  scope: "",
  description: "Aggregated latency info for a given AP on this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      },
      "query-fields": {
        type: "string",
        description: "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceWirelessRadioAfcPositionTool: Tool = {
  name: "getDeviceWirelessRadioAfcPosition",
  scope: "",
  description: "Return the position for a wireless device",
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

export const updateDeviceWirelessRadioAfcPositionTool: Tool = {
  name: "updateDeviceWirelessRadioAfcPosition",
  scope: "",
  description: "Update the position attributes for this device",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-elevation": {
        type: "object",
        description: "Elevation attributes"
      },
      "body-gps": {
        type: "object",
        description: "GPS attributes"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceWirelessRadioAfcPowerLimitsTool: Tool = {
  name: "getDeviceWirelessRadioAfcPowerLimits",
  scope: "",
  description: "Return the AFC power limits for a wireless device",
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

export const getDeviceWirelessRadioSettingsTool: Tool = {
  name: "getDeviceWirelessRadioSettings",
  scope: "",
  description: "Return the manually configured radio settings overrides of a device, which take precedence over RF profiles.",
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

export const updateDeviceWirelessRadioSettingsTool: Tool = {
  name: "updateDeviceWirelessRadioSettings",
  scope: "",
  description: "Update the radio settings overrides of a device, which take precedence over RF profiles.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-rfProfileId": {
        type: "string",
        description: "The ID of an RF profile to assign to the device. If the value of this parameter is null, the appropriate basic RF profile (indoor or outdoor) will be assigned to the device. Assigning an RF profile will clear ALL manually configured overrides on the device (channel width, channel, power)."
      },
      "body-twoFourGhzSettings": {
        type: "object",
        description: "Manual radio settings for 2.4 GHz."
      },
      "body-fiveGhzSettings": {
        type: "object",
        description: "Manual radio settings for 5 GHz."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceWirelessStatusTool: Tool = {
  name: "getDeviceWirelessStatus",
  scope: "",
  description: "Return the SSID statuses of an access point",
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

export const createDeviceWirelessZigbeeEnrollmentTool: Tool = {
  name: "createDeviceWirelessZigbeeEnrollment",
  scope: "",
  description: "Enqueue a job to start enrolling doorlocks on zigbee configured MRs",
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

export const getDeviceWirelessZigbeeEnrollmentTool: Tool = {
  name: "getDeviceWirelessZigbeeEnrollment",
  scope: "",
  description: "Return an enrollment job",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-serial","path-id"],
  },
};

export const getNetworkWirelessAirMarshalTool: Tool = {
  name: "getNetworkWirelessAirMarshal",
  scope: "",
  description: "List Air Marshal scan results from a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      }
    },
    required: ["path-networkId"],
  },
};

export const createNetworkWirelessAirMarshalRuleTool: Tool = {
  name: "createNetworkWirelessAirMarshalRule",
  scope: "",
  description: "Creates a new rule",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-type": {
        type: "string",
        description: "Indicates if this rule will allow, block, or alert."
      },
      "body-match": {
        type: "object",
        description: "Object describing the rule specification."
      }
    },
    required: ["path-networkId","body-type","body-match"],
  },
};

export const updateNetworkWirelessAirMarshalRuleTool: Tool = {
  name: "updateNetworkWirelessAirMarshalRule",
  scope: "",
  description: "Update a rule",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-ruleId": {
        type: "string",
        description: "Rule ID"
      },
      "body-type": {
        type: "string",
        description: "Indicates if this rule will allow, block, or alert."
      },
      "body-match": {
        type: "object",
        description: "Object describing the rule specification."
      }
    },
    required: ["path-networkId","path-ruleId"],
  },
};

export const deleteNetworkWirelessAirMarshalRuleTool: Tool = {
  name: "deleteNetworkWirelessAirMarshalRule",
  scope: "",
  description: "Delete an Air Marshal rule.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-ruleId": {
        type: "string",
        description: "Rule ID"
      }
    },
    required: ["path-networkId","path-ruleId"],
  },
};

export const updateNetworkWirelessAirMarshalSettingsTool: Tool = {
  name: "updateNetworkWirelessAirMarshalSettings",
  scope: "",
  description: "Updates Air Marshal settings.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-defaultPolicy": {
        type: "string",
        description: "Allows clients to access rogue networks. Blocked by default."
      }
    },
    required: ["path-networkId","body-defaultPolicy"],
  },
};

export const getNetworkWirelessAlternateManagementInterfaceTool: Tool = {
  name: "getNetworkWirelessAlternateManagementInterface",
  scope: "",
  description: "Return alternate management interface and devices with IP assigned",
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

export const updateNetworkWirelessAlternateManagementInterfaceTool: Tool = {
  name: "updateNetworkWirelessAlternateManagementInterface",
  scope: "",
  description: "Update alternate management interface and device static IP",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Boolean value to enable or disable alternate management interface"
      },
      "body-vlanId": {
        type: "integer",
        description: "Alternate management interface VLAN, must be between 1 and 4094"
      },
      "body-protocols": {
        type: "array",
        description: "Can be one or more of the following values: 'radius', 'snmp', 'syslog' or 'ldap'"
      },
      "body-accessPoints": {
        type: "array",
        description: "Array of access point serial number and IP assignment. Note: accessPoints IP assignment is not applicable for template networks, in other words, do not put 'accessPoints' in the body when updating template networks. Also, an empty 'accessPoints' array will remove all previous static IP assignments"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessBillingTool: Tool = {
  name: "getNetworkWirelessBilling",
  scope: "",
  description: "Return the billing settings of this network",
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

export const updateNetworkWirelessBillingTool: Tool = {
  name: "updateNetworkWirelessBilling",
  scope: "",
  description: "Update the billing settings",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-currency": {
        type: "string",
        description: "The currency code of this node group's billing plans"
      },
      "body-plans": {
        type: "array",
        description: "Array of billing plans in the node group. (Can configure a maximum of 5)"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessBluetoothSettingsTool: Tool = {
  name: "getNetworkWirelessBluetoothSettings",
  scope: "",
  description: "Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.",
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

export const updateNetworkWirelessBluetoothSettingsTool: Tool = {
  name: "updateNetworkWirelessBluetoothSettings",
  scope: "",
  description: "Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-scanningEnabled": {
        type: "boolean",
        description: "Whether APs will scan for Bluetooth enabled clients."
      },
      "body-advertisingEnabled": {
        type: "boolean",
        description: "Whether APs will advertise beacons."
      },
      "body-uuid": {
        type: "string",
        description: "The UUID to be used in the beacon identifier."
      },
      "body-majorMinorAssignmentMode": {
        type: "string",
        description: "The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')"
      },
      "body-major": {
        type: "integer",
        description: "The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode."
      },
      "body-minor": {
        type: "integer",
        description: "The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessChannelUtilizationHistoryTool: Tool = {
  name: "getNetworkWirelessChannelUtilizationHistory",
  scope: "",
  description: "Return AP channel utilization over time for a device or network client",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400."
      },
      "query-autoResolution": {
        type: "boolean",
        description: "Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false."
      },
      "query-clientId": {
        type: "string",
        description: "Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client's connection history."
      },
      "query-deviceSerial": {
        type: "string",
        description: "Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified."
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6')."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessClientCountHistoryTool: Tool = {
  name: "getNetworkWirelessClientCountHistory",
  scope: "",
  description: "Return wireless client counts over time for a network, device, or network client",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400."
      },
      "query-autoResolution": {
        type: "boolean",
        description: "Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false."
      },
      "query-clientId": {
        type: "string",
        description: "Filter results by network client to return per-device client counts over time inner joined by the queried client's connection history."
      },
      "query-deviceSerial": {
        type: "string",
        description: "Filter results by device."
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP tag."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6')."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID number."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessClientsConnectionStatsTool: Tool = {
  name: "getNetworkWirelessClientsConnectionStats",
  scope: "",
  description: "Aggregated connectivity info for this network, grouped by clients",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessClientsHealthScoresTool: Tool = {
  name: "getNetworkWirelessClientsHealthScores",
  scope: "",
  description: "Fetch the health scores for all clients on this network",
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

export const getNetworkWirelessClientsLatencyStatsTool: Tool = {
  name: "getNetworkWirelessClientsLatencyStats",
  scope: "",
  description: "Aggregated latency info for this network, grouped by clients",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      },
      "query-fields": {
        type: "string",
        description: "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessClientsOnboardingHistoryTool: Tool = {
  name: "getNetworkWirelessClientsOnboardingHistory",
  scope: "",
  description: "Return counts of distinct wireless clients connecting to a network over time",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 300. The default is 300."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'); this cannot be combined with the SSID filter."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID number; this cannot be combined with the band filter."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessClientConnectionStatsTool: Tool = {
  name: "getNetworkWirelessClientConnectionStats",
  scope: "",
  description: "Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-clientId": {
        type: "string",
        description: "Client ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      }
    },
    required: ["path-networkId","path-clientId"],
  },
};

export const getNetworkWirelessClientConnectivityEventsTool: Tool = {
  name: "getNetworkWirelessClientConnectivityEvents",
  scope: "",
  description: "List the wireless connectivity events for a client within a network in the timespan.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-clientId": {
        type: "string",
        description: "Client ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of entries. Order options are 'ascending' and 'descending'. Default is 'ascending'."
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
      },
      "query-types": {
        type: "array",
        description: "A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam', 'connection' and/or 'sticky'."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band. Valid bands are '2.4', '5' or '6'."
      },
      "query-ssidNumber": {
        type: "integer",
        description: "Filter results by SSID. If not specified, events for all SSIDs will be returned."
      },
      "query-includedSeverities": {
        type: "array",
        description: "A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'."
      },
      "query-deviceSerial": {
        type: "string",
        description: "Filter results by an AP's serial number."
      }
    },
    required: ["path-networkId","path-clientId"],
  },
};

export const getNetworkWirelessClientHealthScoresTool: Tool = {
  name: "getNetworkWirelessClientHealthScores",
  scope: "",
  description: "Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-clientId": {
        type: "string",
        description: "Client ID"
      }
    },
    required: ["path-networkId","path-clientId"],
  },
};

export const getNetworkWirelessClientLatencyHistoryTool: Tool = {
  name: "getNetworkWirelessClientLatencyHistory",
  scope: "",
  description: "Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-clientId": {
        type: "string",
        description: "Client ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 791 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 791 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400."
      }
    },
    required: ["path-networkId","path-clientId"],
  },
};

export const getNetworkWirelessClientLatencyStatsTool: Tool = {
  name: "getNetworkWirelessClientLatencyStats",
  scope: "",
  description: "Aggregated latency info for a given client on this network. Clients are identified by their MAC.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-clientId": {
        type: "string",
        description: "Client ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      },
      "query-fields": {
        type: "string",
        description: "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string."
      }
    },
    required: ["path-networkId","path-clientId"],
  },
};

export const getNetworkWirelessConnectionStatsTool: Tool = {
  name: "getNetworkWirelessConnectionStats",
  scope: "",
  description: "Aggregated connectivity info for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessDataRateHistoryTool: Tool = {
  name: "getNetworkWirelessDataRateHistory",
  scope: "",
  description: "Return PHY data rates over time for a network, device, or network client",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400."
      },
      "query-autoResolution": {
        type: "boolean",
        description: "Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false."
      },
      "query-clientId": {
        type: "string",
        description: "Filter results by network client."
      },
      "query-deviceSerial": {
        type: "string",
        description: "Filter results by device."
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP tag."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6')."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID number."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessDevicesConnectionStatsTool: Tool = {
  name: "getNetworkWirelessDevicesConnectionStats",
  scope: "",
  description: "Aggregated connectivity info for this network, grouped by node",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessDevicesHealthScoresTool: Tool = {
  name: "getNetworkWirelessDevicesHealthScores",
  scope: "",
  description: "Fetch the health scores of all APs on this network",
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

export const getNetworkWirelessDevicesLatencyStatsTool: Tool = {
  name: "getNetworkWirelessDevicesLatencyStats",
  scope: "",
  description: "Aggregated latency info for this network, grouped by node",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      },
      "query-fields": {
        type: "string",
        description: "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessElectronicShelfLabelTool: Tool = {
  name: "getNetworkWirelessElectronicShelfLabel",
  scope: "",
  description: "Return the ESL settings of a wireless network",
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

export const updateNetworkWirelessElectronicShelfLabelTool: Tool = {
  name: "updateNetworkWirelessElectronicShelfLabel",
  scope: "",
  description: "Update the ESL settings of a wireless network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-hostname": {
        type: "string",
        description: "Desired ESL hostname of the network"
      },
      "body-enabled": {
        type: "boolean",
        description: "Turn ESL features on and off for this network"
      },
      "body-mode": {
        type: "string",
        description: "Electronic shelf label mode of the network. Valid options are 'Bluetooth', 'high frequency'"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessElectronicShelfLabelConfiguredDevicesTool: Tool = {
  name: "getNetworkWirelessElectronicShelfLabelConfiguredDevices",
  scope: "",
  description: "Get a list of all ESL eligible devices of a network",
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

export const getNetworkWirelessEthernetPortsProfilesTool: Tool = {
  name: "getNetworkWirelessEthernetPortsProfiles",
  scope: "",
  description: "List the AP port profiles for this network",
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

export const createNetworkWirelessEthernetPortsProfileTool: Tool = {
  name: "createNetworkWirelessEthernetPortsProfile",
  scope: "",
  description: "Create an AP port profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-name": {
        type: "string",
        description: "AP port profile name"
      },
      "body-ports": {
        type: "array",
        description: "AP ports configuration"
      },
      "body-usbPorts": {
        type: "array",
        description: "AP usb ports configuration"
      }
    },
    required: ["path-networkId","body-name","body-ports"],
  },
};

export const assignNetworkWirelessEthernetPortsProfilesTool: Tool = {
  name: "assignNetworkWirelessEthernetPortsProfiles",
  scope: "",
  description: "Assign AP port profile to list of APs",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-serials": {
        type: "array",
        description: "List of AP serials"
      },
      "body-profileId": {
        type: "string",
        description: "AP profile ID"
      }
    },
    required: ["path-networkId","body-serials","body-profileId"],
  },
};

export const setNetworkWirelessEthernetPortsProfilesDefaultTool: Tool = {
  name: "setNetworkWirelessEthernetPortsProfilesDefault",
  scope: "",
  description: "Set the AP port profile to be default for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-profileId": {
        type: "string",
        description: "AP profile ID"
      }
    },
    required: ["path-networkId","body-profileId"],
  },
};

export const getNetworkWirelessEthernetPortsProfileTool: Tool = {
  name: "getNetworkWirelessEthernetPortsProfile",
  scope: "",
  description: "Show the AP port profile by ID for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-profileId": {
        type: "string",
        description: "Profile ID"
      }
    },
    required: ["path-networkId","path-profileId"],
  },
};

export const updateNetworkWirelessEthernetPortsProfileTool: Tool = {
  name: "updateNetworkWirelessEthernetPortsProfile",
  scope: "",
  description: "Update the AP port profile by ID for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-profileId": {
        type: "string",
        description: "Profile ID"
      },
      "body-name": {
        type: "string",
        description: "AP port profile name"
      },
      "body-ports": {
        type: "array",
        description: "AP ports configuration"
      },
      "body-usbPorts": {
        type: "array",
        description: "AP usb ports configuration"
      }
    },
    required: ["path-networkId","path-profileId"],
  },
};

export const deleteNetworkWirelessEthernetPortsProfileTool: Tool = {
  name: "deleteNetworkWirelessEthernetPortsProfile",
  scope: "",
  description: "Delete an AP port profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-profileId": {
        type: "string",
        description: "Profile ID"
      }
    },
    required: ["path-networkId","path-profileId"],
  },
};

export const getNetworkWirelessFailedConnectionsTool: Tool = {
  name: "getNetworkWirelessFailedConnections",
  scope: "",
  description: "List of all failed client connection events on this network in a given time range",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      },
      "query-serial": {
        type: "string",
        description: "Filter by AP"
      },
      "query-clientId": {
        type: "string",
        description: "Filter by client MAC"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessLatencyHistoryTool: Tool = {
  name: "getNetworkWirelessLatencyHistory",
  scope: "",
  description: "Return average wireless latency over time for a network, device, or network client",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400."
      },
      "query-autoResolution": {
        type: "boolean",
        description: "Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false."
      },
      "query-clientId": {
        type: "string",
        description: "Filter results by network client."
      },
      "query-deviceSerial": {
        type: "string",
        description: "Filter results by device."
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP tag."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6')."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID number."
      },
      "query-accessCategory": {
        type: "string",
        description: "Filter by access category."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessLatencyStatsTool: Tool = {
  name: "getNetworkWirelessLatencyStats",
  scope: "",
  description: "Aggregated latency info for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 180 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID"
      },
      "query-vlan": {
        type: "integer",
        description: "Filter results by VLAN"
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP Tag"
      },
      "query-fields": {
        type: "string",
        description: "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string."
      }
    },
    required: ["path-networkId"],
  },
};

export const updateNetworkWirelessLocationScanningTool: Tool = {
  name: "updateNetworkWirelessLocationScanning",
  scope: "",
  description: "Change scanning API settings",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Collect location and scanning analytics"
      },
      "body-api": {
        type: "object",
        description: "Enable push API for scanning events, analytics must be enabled"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessMeshStatusesTool: Tool = {
  name: "getNetworkWirelessMeshStatuses",
  scope: "",
  description: "List wireless mesh statuses for repeaters",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 500. Default is 50."
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

export const updateNetworkWirelessOpportunisticPcapTool: Tool = {
  name: "updateNetworkWirelessOpportunisticPcap",
  scope: "",
  description: "Update the Opportunistic Pcap settings for a wireless network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-enablement": {
        type: "object",
        description: "Enablement settings"
      }
    },
    required: ["path-networkId"],
  },
};

export const updateNetworkWirelessRadioAutoRfTool: Tool = {
  name: "updateNetworkWirelessRadioAutoRf",
  scope: "",
  description: "Update the AutoRF settings for a wireless network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-busyHour": {
        type: "object",
        description: "Busy Hour settings"
      },
      "body-channel": {
        type: "object",
        description: "Channel settings"
      },
      "body-fra": {
        type: "object",
        description: "FRA settings"
      },
      "body-aiRrm": {
        type: "object",
        description: "AI-RRM settings"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessRfProfilesTool: Tool = {
  name: "getNetworkWirelessRfProfiles",
  scope: "",
  description: "List RF profiles for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-includeTemplateProfiles": {
        type: "boolean",
        description: "If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false."
      }
    },
    required: ["path-networkId"],
  },
};

export const createNetworkWirelessRfProfileTool: Tool = {
  name: "createNetworkWirelessRfProfile",
  scope: "",
  description: "Creates new RF profile for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new profile. Must be unique. This param is required on creation."
      },
      "body-clientBalancingEnabled": {
        type: "boolean",
        description: "Steers client to best available access point. Can be either true or false. Defaults to true."
      },
      "body-minBitrateType": {
        type: "string",
        description: "Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band."
      },
      "body-bandSelectionType": {
        type: "string",
        description: "Band selection can be set to either 'ssid' or 'ap'. This param is required on creation."
      },
      "body-apBandSettings": {
        type: "object",
        description: "Settings that will be enabled if selectionType is set to 'ap'."
      },
      "body-twoFourGhzSettings": {
        type: "object",
        description: "Settings related to 2.4Ghz band"
      },
      "body-fiveGhzSettings": {
        type: "object",
        description: "Settings related to 5Ghz band"
      },
      "body-sixGhzSettings": {
        type: "object",
        description: "Settings related to 6Ghz band. Only applicable to networks with 6Ghz capable APs"
      },
      "body-transmission": {
        type: "object",
        description: "Settings related to radio transmission."
      },
      "body-perSsidSettings": {
        type: "object",
        description: "Per-SSID radio settings by number."
      },
      "body-flexRadios": {
        type: "object",
        description: "Flex radio settings."
      }
    },
    required: ["path-networkId","body-name","body-bandSelectionType"],
  },
};

export const updateNetworkWirelessRfProfileTool: Tool = {
  name: "updateNetworkWirelessRfProfile",
  scope: "",
  description: "Updates specified RF profile for this network. Note: built-in RF profiles can only be assigned as a default, and its attributes are immutable",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-rfProfileId": {
        type: "string",
        description: "Rf profile ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new profile. Must be unique."
      },
      "body-isIndoorDefault": {
        type: "boolean",
        description: "Set this profile as the default indoor rf profile. If the profile ID is one of 'indoor' or 'outdoor',   then a new profile will be created from the respective ID and set as the default"
      },
      "body-isOutdoorDefault": {
        type: "boolean",
        description: "Set this profile as the default outdoor rf profile. If the profile ID is one of 'indoor' or 'outdoor',   then a new profile will be created from the respective ID and set as the default"
      },
      "body-clientBalancingEnabled": {
        type: "boolean",
        description: "Steers client to best available access point. Can be either true or false."
      },
      "body-minBitrateType": {
        type: "string",
        description: "Minimum bitrate can be set to either 'band' or 'ssid'."
      },
      "body-bandSelectionType": {
        type: "string",
        description: "Band selection can be set to either 'ssid' or 'ap'."
      },
      "body-apBandSettings": {
        type: "object",
        description: "Settings that will be enabled if selectionType is set to 'ap'."
      },
      "body-twoFourGhzSettings": {
        type: "object",
        description: "Settings related to 2.4Ghz band"
      },
      "body-fiveGhzSettings": {
        type: "object",
        description: "Settings related to 5Ghz band"
      },
      "body-sixGhzSettings": {
        type: "object",
        description: "Settings related to 6Ghz band. Only applicable to networks with 6Ghz capable APs"
      },
      "body-transmission": {
        type: "object",
        description: "Settings related to radio transmission."
      },
      "body-perSsidSettings": {
        type: "object",
        description: "Per-SSID radio settings by number."
      },
      "body-flexRadios": {
        type: "object",
        description: "Flex radio settings."
      }
    },
    required: ["path-networkId","path-rfProfileId"],
  },
};

export const deleteNetworkWirelessRfProfileTool: Tool = {
  name: "deleteNetworkWirelessRfProfile",
  scope: "",
  description: "Delete a RF Profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-rfProfileId": {
        type: "string",
        description: "Rf profile ID"
      }
    },
    required: ["path-networkId","path-rfProfileId"],
  },
};

export const getNetworkWirelessRfProfileTool: Tool = {
  name: "getNetworkWirelessRfProfile",
  scope: "",
  description: "Return a RF profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-rfProfileId": {
        type: "string",
        description: "Rf profile ID"
      }
    },
    required: ["path-networkId","path-rfProfileId"],
  },
};

export const getNetworkWirelessSettingsTool: Tool = {
  name: "getNetworkWirelessSettings",
  scope: "",
  description: "Return the wireless settings for a network",
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

export const updateNetworkWirelessSettingsTool: Tool = {
  name: "updateNetworkWirelessSettings",
  scope: "",
  description: "Update the wireless settings for a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-meshingEnabled": {
        type: "boolean",
        description: "Toggle for enabling or disabling meshing in a network"
      },
      "body-ipv6BridgeEnabled": {
        type: "boolean",
        description: "Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode)"
      },
      "body-locationAnalyticsEnabled": {
        type: "boolean",
        description: "Toggle for enabling or disabling location analytics for your network"
      },
      "body-upgradeStrategy": {
        type: "string",
        description: "The default strategy that network devices will use to perform an upgrade. Requires firmware version MR 26.8 or higher."
      },
      "body-ledLightsOn": {
        type: "boolean",
        description: "Toggle for enabling or disabling LED lights on all APs in the network (making them run dark)"
      },
      "body-namedVlans": {
        type: "object",
        description: "Named VLAN settings for wireless networks."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessSignalQualityHistoryTool: Tool = {
  name: "getNetworkWirelessSignalQualityHistory",
  scope: "",
  description: "Return signal quality (SNR/RSSI) over time for a device or network client",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400."
      },
      "query-autoResolution": {
        type: "boolean",
        description: "Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false."
      },
      "query-clientId": {
        type: "string",
        description: "Filter results by network client."
      },
      "query-deviceSerial": {
        type: "string",
        description: "Filter results by device."
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6')."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID number."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkWirelessSsidsTool: Tool = {
  name: "getNetworkWirelessSsids",
  scope: "",
  description: "List the MR SSIDs in a network",
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

export const getNetworkWirelessSsidTool: Tool = {
  name: "getNetworkWirelessSsid",
  scope: "",
  description: "Return a single MR SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidTool: Tool = {
  name: "updateNetworkWirelessSsid",
  scope: "",
  description: "Update the attributes of an MR SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-name": {
        type: "string",
        description: "The name of the SSID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Whether or not the SSID is enabled"
      },
      "body-localAuth": {
        type: "boolean",
        description: "Extended local auth flag for Enterprise NAC"
      },
      "body-authMode": {
        type: "string",
        description: "The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-entra', '8021x-localradius', 'ipsk-with-radius', 'ipsk-without-radius', 'ipsk-with-nac' or 'ipsk-with-radius-easy-psk')"
      },
      "body-enterpriseAdminAccess": {
        type: "string",
        description: "Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')"
      },
      "body-encryptionMode": {
        type: "string",
        description: "The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'"
      },
      "body-psk": {
        type: "string",
        description: "The passkey for the SSID. This param is only valid if the authMode is 'psk'"
      },
      "body-wpaEncryptionMode": {
        type: "string",
        description: "The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode', 'WPA3 only' or 'WPA3 192-bit Security')"
      },
      "body-dot11w": {
        type: "object",
        description: "The current setting for Protected Management Frames (802.11w)."
      },
      "body-dot11r": {
        type: "object",
        description: "The current setting for 802.11r"
      },
      "body-splashPage": {
        type: "string",
        description: "The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Microsoft Entra ID', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children."
      },
      "body-splashGuestSponsorDomains": {
        type: "array",
        description: "Array of valid sponsor email domains for sponsored guest splash type."
      },
      "body-oauth": {
        type: "object",
        description: "The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'."
      },
      "body-localRadius": {
        type: "object",
        description: "The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'."
      },
      "body-ldap": {
        type: "object",
        description: "The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'."
      },
      "body-activeDirectory": {
        type: "object",
        description: "The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'"
      },
      "body-radiusServers": {
        type: "array",
        description: "The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'"
      },
      "body-radiusProxyEnabled": {
        type: "boolean",
        description: "If true, Meraki devices will proxy RADIUS messages through the Meraki cloud to the configured RADIUS auth and accounting servers."
      },
      "body-radiusTestingEnabled": {
        type: "boolean",
        description: "If true, Meraki devices will periodically send Access-Request messages to configured RADIUS servers using identity 'meraki_8021x_test' to ensure that the RADIUS servers are reachable."
      },
      "body-radiusCalledStationId": {
        type: "string",
        description: "The template of the called station identifier to be used for RADIUS (ex. $NODE_MAC$:$VAP_NUM$)."
      },
      "body-radiusAuthenticationNasId": {
        type: "string",
        description: "The template of the NAS identifier to be used for RADIUS authentication (ex. $NODE_MAC$:$VAP_NUM$)."
      },
      "body-radiusServerTimeout": {
        type: "integer",
        description: "The amount of time for which a RADIUS client waits for a reply from the RADIUS server (must be between 1-10 seconds)."
      },
      "body-radiusServerAttemptsLimit": {
        type: "integer",
        description: "The maximum number of transmit attempts after which a RADIUS server is failed over (must be between 1-5)."
      },
      "body-radiusFallbackEnabled": {
        type: "boolean",
        description: "Whether or not higher priority RADIUS servers should be retried after 60 seconds."
      },
      "body-radiusRadsec": {
        type: "object",
        description: "The current settings for RADIUS RADSec"
      },
      "body-radiusCoaEnabled": {
        type: "boolean",
        description: "If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server."
      },
      "body-radiusFailoverPolicy": {
        type: "string",
        description: "This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')"
      },
      "body-radiusLoadBalancingPolicy": {
        type: "string",
        description: "This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')"
      },
      "body-radiusAccountingEnabled": {
        type: "boolean",
        description: "Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'"
      },
      "body-radiusAccountingServers": {
        type: "array",
        description: "The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true'"
      },
      "body-radiusAccountingInterimInterval": {
        type: "integer",
        description: "The interval (in seconds) in which accounting information is updated and sent to the RADIUS accounting server."
      },
      "body-radiusAttributeForGroupPolicies": {
        type: "string",
        description: "Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message"
      },
      "body-ipAssignmentMode": {
        type: "string",
        description: "The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Ethernet over GRE', 'Layer 3 roaming with a concentrator' or 'VPN')"
      },
      "body-useVlanTagging": {
        type: "boolean",
        description: "Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'"
      },
      "body-concentratorNetworkId": {
        type: "string",
        description: "The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'."
      },
      "body-secondaryConcentratorNetworkId": {
        type: "string",
        description: "The secondary concentrator to use when the ipAssignmentMode is 'VPN'. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. ('disabled' represents no secondary concentrator.)"
      },
      "body-disassociateClientsOnVpnFailover": {
        type: "boolean",
        description: "Disassociate clients when 'VPN' concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is 'VPN'."
      },
      "body-vlanId": {
        type: "integer",
        description: "The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'"
      },
      "body-defaultVlanId": {
        type: "integer",
        description: "The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'"
      },
      "body-apTagsAndVlanIds": {
        type: "array",
        description: "The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'"
      },
      "body-walledGardenEnabled": {
        type: "boolean",
        description: "Allow access to a configurable list of IP ranges, which users may access prior to sign-on."
      },
      "body-walledGardenRanges": {
        type: "array",
        description: "Specify your walled garden by entering an array of addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. '192.168.1.1/24', '192.168.37.10/32', 'www.yahoo.com', '*.google.com']). Meraki's splash page is automatically included in your walled garden."
      },
      "body-gre": {
        type: "object",
        description: "Ethernet over GRE settings"
      },
      "body-radiusOverride": {
        type: "boolean",
        description: "If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'."
      },
      "body-radiusGuestVlanEnabled": {
        type: "boolean",
        description: "Whether or not RADIUS Guest VLAN is enabled. This param is only valid if the authMode is 'open-with-radius' and addressing mode is not set to 'isolated' or 'nat' mode"
      },
      "body-radiusGuestVlanId": {
        type: "integer",
        description: "VLAN ID of the RADIUS Guest VLAN. This param is only valid if the authMode is 'open-with-radius' and addressing mode is not set to 'isolated' or 'nat' mode"
      },
      "body-minBitrate": {
        type: "number",
        description: "The minimum bitrate in Mbps of this SSID in the default indoor RF profile. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54')"
      },
      "body-bandSelection": {
        type: "string",
        description: "The client-serving radio frequencies of this SSID in the default indoor RF profile. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering')"
      },
      "body-perClientBandwidthLimitUp": {
        type: "integer",
        description: "The upload bandwidth limit in Kbps. (0 represents no limit.)"
      },
      "body-perClientBandwidthLimitDown": {
        type: "integer",
        description: "The download bandwidth limit in Kbps. (0 represents no limit.)"
      },
      "body-perSsidBandwidthLimitUp": {
        type: "integer",
        description: "The total upload bandwidth limit in Kbps. (0 represents no limit.)"
      },
      "body-perSsidBandwidthLimitDown": {
        type: "integer",
        description: "The total download bandwidth limit in Kbps. (0 represents no limit.)"
      },
      "body-lanIsolationEnabled": {
        type: "boolean",
        description: "Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'."
      },
      "body-visible": {
        type: "boolean",
        description: "Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true"
      },
      "body-availableOnAllAps": {
        type: "boolean",
        description: "Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags."
      },
      "body-availabilityTags": {
        type: "array",
        description: "Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list."
      },
      "body-adaptivePolicyGroupId": {
        type: "string",
        description: "Adaptive policy group ID this SSID is assigned to."
      },
      "body-mandatoryDhcpEnabled": {
        type: "boolean",
        description: "If true, Mandatory DHCP will enforce that clients connecting to this SSID must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate."
      },
      "body-adultContentFilteringEnabled": {
        type: "boolean",
        description: "Boolean indicating whether or not adult content will be blocked"
      },
      "body-dnsRewrite": {
        type: "object",
        description: "DNS servers rewrite settings"
      },
      "body-speedBurst": {
        type: "object",
        description: "The SpeedBurst setting for this SSID'"
      },
      "body-namedVlans": {
        type: "object",
        description: "Named VLAN settings."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidBonjourForwardingTool: Tool = {
  name: "getNetworkWirelessSsidBonjourForwarding",
  scope: "",
  description: "List the Bonjour forwarding setting and rules for the SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidBonjourForwardingTool: Tool = {
  name: "updateNetworkWirelessSsidBonjourForwarding",
  scope: "",
  description: "Update the bonjour forwarding setting and rules for the SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-enabled": {
        type: "boolean",
        description: "If true, Bonjour forwarding is enabled on this SSID."
      },
      "body-rules": {
        type: "array",
        description: "List of bonjour forwarding rules."
      },
      "body-exception": {
        type: "object",
        description: "Bonjour forwarding exception"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidDeviceTypeGroupPoliciesTool: Tool = {
  name: "getNetworkWirelessSsidDeviceTypeGroupPolicies",
  scope: "",
  description: "List the device type group policies for the SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidDeviceTypeGroupPoliciesTool: Tool = {
  name: "updateNetworkWirelessSsidDeviceTypeGroupPolicies",
  scope: "",
  description: "Update the device type group policies for the SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-enabled": {
        type: "boolean",
        description: "If true, the SSID device type group policies are enabled."
      },
      "body-deviceTypePolicies": {
        type: "array",
        description: "List of device type policies."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidEapOverrideTool: Tool = {
  name: "getNetworkWirelessSsidEapOverride",
  scope: "",
  description: "Return the EAP overridden parameters for an SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidEapOverrideTool: Tool = {
  name: "updateNetworkWirelessSsidEapOverride",
  scope: "",
  description: "Update the EAP overridden parameters for an SSID.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-timeout": {
        type: "integer",
        description: "General EAP timeout in seconds."
      },
      "body-identity": {
        type: "object",
        description: "EAP settings for identity requests."
      },
      "body-maxRetries": {
        type: "integer",
        description: "Maximum number of general EAP retries."
      },
      "body-eapolKey": {
        type: "object",
        description: "EAPOL Key settings."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidFirewallL3FirewallRulesTool: Tool = {
  name: "getNetworkWirelessSsidFirewallL3FirewallRules",
  scope: "",
  description: "Return the L3 firewall rules for an SSID on an MR network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidFirewallL3FirewallRulesTool: Tool = {
  name: "updateNetworkWirelessSsidFirewallL3FirewallRules",
  scope: "",
  description: "Update the L3 firewall rules of an SSID on an MR network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the firewall rules for this SSID (not including the local LAN access rule or the default rule)."
      },
      "body-allowLanAccess": {
        type: "boolean",
        description: "Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional)"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidFirewallL7FirewallRulesTool: Tool = {
  name: "getNetworkWirelessSsidFirewallL7FirewallRules",
  scope: "",
  description: "Return the L7 firewall rules for an SSID on an MR network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidFirewallL7FirewallRulesTool: Tool = {
  name: "updateNetworkWirelessSsidFirewallL7FirewallRules",
  scope: "",
  description: "Update the L7 firewall rules of an SSID on an MR network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-rules": {
        type: "array",
        description: "An array of L7 firewall rules for this SSID. Rules will get applied in the same order user has specified in request. Empty array will clear the L7 firewall rule configuration."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidHotspot20Tool: Tool = {
  name: "getNetworkWirelessSsidHotspot20",
  scope: "",
  description: "Return the Hotspot 2.0 settings for an SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidHotspot20Tool: Tool = {
  name: "updateNetworkWirelessSsidHotspot20",
  scope: "",
  description: "Update the Hotspot 2.0 settings of an SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-enabled": {
        type: "boolean",
        description: "Whether or not Hotspot 2.0 for this SSID is enabled"
      },
      "body-operator": {
        type: "object",
        description: "Operator settings for this SSID"
      },
      "body-venue": {
        type: "object",
        description: "Venue settings for this SSID"
      },
      "body-networkAccessType": {
        type: "string",
        description: "The network type of this SSID ('Private network', 'Private network with guest access', 'Chargeable public network', 'Free public network', 'Personal device network', 'Emergency services only network', 'Test or experimental', 'Wildcard')"
      },
      "body-domains": {
        type: "array",
        description: "An array of domain names"
      },
      "body-roamConsortOis": {
        type: "array",
        description: "An array of roaming consortium OIs (hexadecimal number 3-5 octets in length)"
      },
      "body-mccMncs": {
        type: "array",
        description: "An array of MCC/MNC pairs"
      },
      "body-naiRealms": {
        type: "array",
        description: "An array of NAI realms"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidIdentityPsksTool: Tool = {
  name: "getNetworkWirelessSsidIdentityPsks",
  scope: "",
  description: "List all Identity PSKs in a wireless network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const createNetworkWirelessSsidIdentityPskTool: Tool = {
  name: "createNetworkWirelessSsidIdentityPsk",
  scope: "",
  description: "Create an Identity PSK",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-name": {
        type: "string",
        description: "The name of the Identity PSK"
      },
      "body-passphrase": {
        type: "string",
        description: "The passphrase for client authentication. If left blank, one will be auto-generated."
      },
      "body-groupPolicyId": {
        type: "string",
        description: "The group policy to be applied to clients"
      },
      "body-expiresAt": {
        type: "string",
        description: "Timestamp for when the Identity PSK expires. Will not expire if left blank."
      }
    },
    required: ["path-networkId","path-number","body-name","body-groupPolicyId"],
  },
};

export const getNetworkWirelessSsidIdentityPskTool: Tool = {
  name: "getNetworkWirelessSsidIdentityPsk",
  scope: "",
  description: "Return an Identity PSK",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "path-identityPskId": {
        type: "string",
        description: "Identity psk ID"
      }
    },
    required: ["path-networkId","path-number","path-identityPskId"],
  },
};

export const updateNetworkWirelessSsidIdentityPskTool: Tool = {
  name: "updateNetworkWirelessSsidIdentityPsk",
  scope: "",
  description: "Update an Identity PSK",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "path-identityPskId": {
        type: "string",
        description: "Identity psk ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the Identity PSK"
      },
      "body-passphrase": {
        type: "string",
        description: "The passphrase for client authentication"
      },
      "body-groupPolicyId": {
        type: "string",
        description: "The group policy to be applied to clients"
      },
      "body-expiresAt": {
        type: "string",
        description: "Timestamp for when the Identity PSK expires, or 'null' to never expire"
      }
    },
    required: ["path-networkId","path-number","path-identityPskId"],
  },
};

export const deleteNetworkWirelessSsidIdentityPskTool: Tool = {
  name: "deleteNetworkWirelessSsidIdentityPsk",
  scope: "",
  description: "Delete an Identity PSK",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "path-identityPskId": {
        type: "string",
        description: "Identity psk ID"
      }
    },
    required: ["path-networkId","path-number","path-identityPskId"],
  },
};

export const getNetworkWirelessSsidSchedulesTool: Tool = {
  name: "getNetworkWirelessSsidSchedules",
  scope: "",
  description: "List the outage schedule for the SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidSchedulesTool: Tool = {
  name: "updateNetworkWirelessSsidSchedules",
  scope: "",
  description: "Update the outage schedule for the SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-enabled": {
        type: "boolean",
        description: "If true, the SSID outage schedule is enabled."
      },
      "body-ranges": {
        type: "array",
        description: "List of outage ranges. Has a start date and time, and end date and time. If this parameter is passed in along with rangesInSeconds parameter, this will take precedence."
      },
      "body-rangesInSeconds": {
        type: "array",
        description: "List of outage ranges in seconds since Sunday at Midnight. Has a start and end. If this parameter is passed in along with the ranges parameter, ranges will take precedence."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidSplashSettingsTool: Tool = {
  name: "getNetworkWirelessSsidSplashSettings",
  scope: "",
  description: "Display the splash page settings for the given SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidSplashSettingsTool: Tool = {
  name: "updateNetworkWirelessSsidSplashSettings",
  scope: "",
  description: "Modify the splash page settings for the given SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-splashUrl": {
        type: "string",
        description: "[optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'"
      },
      "body-useSplashUrl": {
        type: "boolean",
        description: "[optional] Boolean indicating whether the users will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL."
      },
      "body-splashTimeout": {
        type: "integer",
        description: "Splash timeout in minutes. This will determine how often users will see the splash page."
      },
      "body-redirectUrl": {
        type: "string",
        description: "The custom redirect URL where the users will go after the splash page."
      },
      "body-useRedirectUrl": {
        type: "boolean",
        description: "The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page. A custom redirect URL must be set if this is true."
      },
      "body-welcomeMessage": {
        type: "string",
        description: "The welcome message for the users on the splash page."
      },
      "body-themeId": {
        type: "string",
        description: "The id of the selected splash theme."
      },
      "body-splashLogo": {
        type: "object",
        description: "The logo used in the splash page."
      },
      "body-splashImage": {
        type: "object",
        description: "The image used in the splash page."
      },
      "body-splashPrepaidFront": {
        type: "object",
        description: "The prepaid front image used in the splash page."
      },
      "body-blockAllTrafficBeforeSignOn": {
        type: "boolean",
        description: "How restricted allowing traffic should be. If true, all traffic types are blocked until the splash page is acknowledged. If false, all non-HTTP traffic is allowed before the splash page is acknowledged."
      },
      "body-controllerDisconnectionBehavior": {
        type: "string",
        description: "How login attempts should be handled when the controller is unreachable. Can be either 'open', 'restricted', or 'default'."
      },
      "body-allowSimultaneousLogins": {
        type: "boolean",
        description: "Whether or not to allow simultaneous logins from different devices."
      },
      "body-guestSponsorship": {
        type: "object",
        description: "Details associated with guest sponsored splash."
      },
      "body-billing": {
        type: "object",
        description: "Details associated with billing splash."
      },
      "body-sentryEnrollment": {
        type: "object",
        description: "Systems Manager sentry enrollment splash settings."
      },
      "body-selfRegistration": {
        type: "object",
        description: "Self-registration settings for splash with Meraki authentication."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidTrafficShapingRulesTool: Tool = {
  name: "updateNetworkWirelessSsidTrafficShapingRules",
  scope: "",
  description: "Update the traffic shaping rules for an SSID on an MR network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-trafficShapingEnabled": {
        type: "boolean",
        description: "Whether traffic shaping rules are applied to clients on your SSID."
      },
      "body-defaultRulesEnabled": {
        type: "boolean",
        description: "Whether default traffic shaping rules are enabled (true) or disabled (false). There are 4 default rules, which can be seen on your network's traffic shaping page. Note that default rules count against the rule limit of 8."
      },
      "body-rules": {
        type: "array",
        description: "    An array of traffic shaping rules. Rules are applied in the order that    they are specified in. An empty list (or null) means no rules. Note that    you are allowed a maximum of 8 rules."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidTrafficShapingRulesTool: Tool = {
  name: "getNetworkWirelessSsidTrafficShapingRules",
  scope: "",
  description: "Display the traffic shaping settings for a SSID on an MR network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessSsidVpnTool: Tool = {
  name: "getNetworkWirelessSsidVpn",
  scope: "",
  description: "List the VPN settings for the SSID.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const updateNetworkWirelessSsidVpnTool: Tool = {
  name: "updateNetworkWirelessSsidVpn",
  scope: "",
  description: "Update the VPN settings for the SSID",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-number": {
        type: "string",
        description: "Number"
      },
      "body-concentrator": {
        type: "object",
        description: "The VPN concentrator settings for this SSID."
      },
      "body-splitTunnel": {
        type: "object",
        description: "The VPN split tunnel settings for this SSID."
      },
      "body-failover": {
        type: "object",
        description: "Secondary VPN concentrator settings. This is only used when two VPN concentrators are configured on the SSID."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkWirelessUsageHistoryTool: Tool = {
  name: "getNetworkWirelessUsageHistory",
  scope: "",
  description: "Return AP usage over time for a device or network client",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400."
      },
      "query-autoResolution": {
        type: "boolean",
        description: "Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false."
      },
      "query-clientId": {
        type: "string",
        description: "Filter results by network client to return per-device AP usage over time inner joined by the queried client's connection history."
      },
      "query-deviceSerial": {
        type: "string",
        description: "Filter results by device. Requires :band."
      },
      "query-apTag": {
        type: "string",
        description: "Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified."
      },
      "query-band": {
        type: "string",
        description: "Filter results by band (either '2.4', '5' or '6')."
      },
      "query-ssid": {
        type: "integer",
        description: "Filter results by SSID number."
      }
    },
    required: ["path-networkId"],
  },
};

export const updateNetworkWirelessZigbeeTool: Tool = {
  name: "updateNetworkWirelessZigbee",
  scope: "",
  description: "Update Zigbee Configs for specified network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "To enable/disable Zigbee on the network"
      },
      "body-iotController": {
        type: "object",
        description: "Zigbee's IoT controller details"
      },
      "body-lockManagement": {
        type: "object",
        description: "Login Credentials of on-premises lock management"
      },
      "body-defaults": {
        type: "object",
        description: "Default Settings for Zigbee Devices"
      }
    },
    required: ["path-networkId"],
  },
};

export const getOrganizationWirelessAirMarshalRulesTool: Tool = {
  name: "getOrganizationWirelessAirMarshalRules",
  scope: "",
  description: "Returns the current Air Marshal rules for this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "(optional) The set of network IDs to include."
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
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessAirMarshalSettingsByNetworkTool: Tool = {
  name: "getOrganizationWirelessAirMarshalSettingsByNetwork",
  scope: "",
  description: "Returns the current Air Marshal settings for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "The network IDs to include in the result set."
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
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessCertificatesOpenRoamingCertificateAuthorityTool: Tool = {
  name: "getOrganizationWirelessCertificatesOpenRoamingCertificateAuthori",
  scope: "",
  description: "Query for details on the organization's OpenRoaming Certificate Authority certificate (CAs).",
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

export const getOrganizationWirelessClientsOverviewByDeviceTool: Tool = {
  name: "getOrganizationWirelessClientsOverviewByDevice",
  scope: "",
  description: "List access point client count at the moment in an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter access points client counts by network ID. This filter uses multiple exact matches."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter access points client counts by its serial numbers. This filter uses multiple exact matches."
      },
      "query-campusGatewayClusterIds": {
        type: "array",
        description: "Optional parameter to filter access points client counts by MCG cluster IDs. This filter uses multiple exact matches."
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
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesChannelUtilizationByDeviceTool: Tool = {
  name: "getOrganizationWirelessDevicesChannelUtilizationByDevice",
  scope: "",
  description: "Get average channel utilization for all bands in a network, split by AP",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 90 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 90 days. The default is 7 days."
      },
      "query-interval": {
        type: "integer",
        description: "The time interval in seconds for returned data. The valid intervals are: 300, 600, 3600, 7200, 14400, 21600. The default is 3600."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesChannelUtilizationByNetworkTool: Tool = {
  name: "getOrganizationWirelessDevicesChannelUtilizationByNetwork",
  scope: "",
  description: "Get average channel utilization across all bands for all networks in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 90 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 90 days. The default is 7 days."
      },
      "query-interval": {
        type: "integer",
        description: "The time interval in seconds for returned data. The valid intervals are: 300, 600, 3600, 7200, 14400, 21600. The default is 3600."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesChannelUtilizationHistoryByDeviceByIntervalTool: Tool = {
  name: "getOrganizationWirelessDevicesChannelUtilizationHistoryByDeviceB",
  scope: "",
  description: "Get a time-series of average channel utilization for all bands, segmented by device.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-interval": {
        type: "integer",
        description: "The time interval in seconds for returned data. The valid intervals are: 300, 600, 3600, 7200, 14400, 21600. The default is 3600."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesChannelUtilizationHistoryByNetworkByIntervalTool: Tool = {
  name: "getOrganizationWirelessDevicesChannelUtilizationHistoryByNetwork",
  scope: "",
  description: "Get a time-series of average channel utilization for all bands",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days."
      },
      "query-interval": {
        type: "integer",
        description: "The time interval in seconds for returned data. The valid intervals are: 300, 600, 3600, 7200, 14400, 21600. The default is 3600."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesEthernetStatusesTool: Tool = {
  name: "getOrganizationWirelessDevicesEthernetStatuses",
  scope: "",
  description: "List the most recent Ethernet link speed, duplex, aggregation and power mode and status information for wireless devices.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
      },
      "query-networkIds": {
        type: "array",
        description: "A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesLatencyByClientTool: Tool = {
  name: "getOrganizationWirelessDevicesLatencyByClient",
  scope: "",
  description: "Get latency summaries for all wireless devices in an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 90 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 90 days. The default is 7 days."
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      },
      "query-macs": {
        type: "array",
        description: "Filter results by client mac address(es)."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesLatencyByDeviceTool: Tool = {
  name: "getOrganizationWirelessDevicesLatencyByDevice",
  scope: "",
  description: "Get latency summaries for all wireless devices in an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 90 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 90 days. The default is 7 days."
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesLatencyByNetworkTool: Tool = {
  name: "getOrganizationWirelessDevicesLatencyByNetwork",
  scope: "",
  description: "Get per-network latency summaries for all wireless networks in an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 90 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 90 days. The default is 7 days."
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesPacketLossByClientTool: Tool = {
  name: "getOrganizationWirelessDevicesPacketLossByClient",
  scope: "",
  description: "Get average packet loss for the given timespan for all clients in the organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
      },
      "query-macs": {
        type: "array",
        description: "Filter results by client mac address(es)."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 90 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 5 minutes and be less than or equal to 90 days. The default is 7 days."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesPacketLossByDeviceTool: Tool = {
  name: "getOrganizationWirelessDevicesPacketLossByDevice",
  scope: "",
  description: "Get average packet loss for the given timespan for all devices in the organization. Does not include device's own traffic.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 90 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 5 minutes and be less than or equal to 90 days. The default is 7 days."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesPacketLossByNetworkTool: Tool = {
  name: "getOrganizationWirelessDevicesPacketLossByNetwork",
  scope: "",
  description: "Get average packet loss for the given timespan for all networks in the organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 90 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 5 minutes and be less than or equal to 90 days. The default is 7 days."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesPowerModeHistoryTool: Tool = {
  name: "getOrganizationWirelessDevicesPowerModeHistory",
  scope: "",
  description: "Return a record of power mode changes for wireless devices in the organization. For each device, it provides a series of events with timestamps indicating when a power mode change occurred and the new mode. The events are ordered by timestamp.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 1 day from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 1 day after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 1 day. The default is 1 day."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 20. Default is 10."
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
        description: "Optional parameter to filter the result set by the included set of network IDs"
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by device serial numbers"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesTool: Tool = {
  name: "getOrganizationWirelessDevicesRadsecCertificatesAuthorities",
  scope: "",
  description: "Query for details on the organization's RADSEC device Certificate Authority certificates (CAs). The primary CA signs all the certificates that devices present when establishing a secure connection to RADIUS servers via RADSEC protocol. This API returns an array of the status of all of the CAs as well as their contents, if they've been generated. An organization will have at most one CA unless the CA is being rotated.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-certificateAuthorityIds": {
        type: "array",
        description: "Optional parameter to filter CAs by one or more CA IDs. All returned CAs will have an ID that is an exact match."
      }
    },
    required: ["path-organizationId"],
  },
};

export const updateOrganizationWirelessDevicesRadsecCertificatesAuthoritiesTool: Tool = {
  name: "updateOrganizationWirelessDevicesRadsecCertificatesAuthorities",
  scope: "",
  description: "Update an organization's RADSEC device Certificate Authority (CA) state. Note this CA is generated and controlled by Meraki. Call this endpoint to update the state to \"trusted\", at which point Meraki will generate device certificates. \"trusted\" means the CA is placed on your RADSEC server(s) and devices establishing a secure connection using certs signed by this CA will pass verification.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-status": {
        type: "string",
        description: "The \"status\" to update the Certificate Authority to. Only valid option is \"trusted\"."
      },
      "body-certificateAuthorityId": {
        type: "string",
        description: "The ID of the Certificate Authority to update."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationWirelessDevicesRadsecCertificatesAuthorityTool: Tool = {
  name: "createOrganizationWirelessDevicesRadsecCertificatesAuthority",
  scope: "",
  description: "Create an organization's RADSEC device Certificate Authority (CA). Call this endpoint when turning on RADSEC in the firmware for the first time. Calling this endpoint starts an asynchronous process to generate the CA; call GET afterwards to retrieve the contents of the CA. Note this CA is generated and controlled by Meraki. Subsequent calls will not generate a new CA.",
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

export const getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrlsTool: Tool = {
  name: "getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrls",
  scope: "",
  description: "Query for certificate revocation list (CRL) for the organization's RADSEC device Certificate Authorities (CAs).",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-certificateAuthorityIds": {
        type: "array",
        description: "Optional parameter to filter CAs by one or more CA IDs. All returned CAs will have an ID that is an exact match."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrlsDeltasTool: Tool = {
  name: "getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrlsD",
  scope: "",
  description: "Query for all delta certificate revocation list (CRL) for the organization's RADSEC device Certificate Authority (CA) with the given id.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-certificateAuthorityIds": {
        type: "array",
        description: "Parameter to filter CAs by one or more CA IDs. All returned CAs will have an ID that is an exact match."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesSignalQualityByClientTool: Tool = {
  name: "getOrganizationWirelessDevicesSignalQualityByClient",
  scope: "",
  description: "Get average signal quality for all clients in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device serial number."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
      },
      "query-macs": {
        type: "array",
        description: "Filter results by client mac address(es)."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 30 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 30 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 30 days. The default is 7 days."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesSignalQualityByDeviceTool: Tool = {
  name: "getOrganizationWirelessDevicesSignalQualityByDevice",
  scope: "",
  description: "Get average signal quality for all devices in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device serial number."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 30 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 30 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 30 days. The default is 7 days."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesSignalQualityByNetworkTool: Tool = {
  name: "getOrganizationWirelessDevicesSignalQualityByNetwork",
  scope: "",
  description: "Get average signal quality for all networks in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter results by network."
      },
      "query-serials": {
        type: "array",
        description: "Filter results by device serial number."
      },
      "query-ssids": {
        type: "array",
        description: "Filter results by SSID number."
      },
      "query-bands": {
        type: "array",
        description: "Filter results by band. Valid bands are: 2.4, 5, and 6."
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
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 30 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 30 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 30 days. The default is 7 days."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesSystemCpuLoadHistoryTool: Tool = {
  name: "getOrganizationWirelessDevicesSystemCpuLoadHistory",
  scope: "",
  description: "Return the CPU Load history for a list of wireless devices in the organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 1 day from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 1 day after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 1 day. The default is 1 day."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 20. Default is 10."
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
        description: "Optional parameter to filter the result set by the included set of network IDs"
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by device serial numbers"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessDevicesWirelessControllersByDeviceTool: Tool = {
  name: "getOrganizationWirelessDevicesWirelessControllersByDevice",
  scope: "",
  description: "List of Catalyst access points information",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter access points by network ID. This filter uses multiple exact matches."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter access points by its cloud ID. This filter uses multiple exact matches."
      },
      "query-controllerSerials": {
        type: "array",
        description: "Optional parameter to filter access points by its wireless LAN controller cloud ID. This filter uses multiple exact matches."
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
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessLocationScanningByNetworkTool: Tool = {
  name: "getOrganizationWirelessLocationScanningByNetwork",
  scope: "",
  description: "Return scanning API settings",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 250. Default is 50."
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
        description: "Optional parameter to filter scanning settings by network ID."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessLocationScanningReceiversTool: Tool = {
  name: "getOrganizationWirelessLocationScanningReceivers",
  scope: "",
  description: "Return scanning API receivers",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 250. Default is 50."
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
        description: "Optional parameter to filter scanning API receivers by network ID."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationWirelessLocationScanningReceiverTool: Tool = {
  name: "createOrganizationWirelessLocationScanningReceiver",
  scope: "",
  description: "Add new receiver for scanning API",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-network": {
        type: "object",
        description: "Add scanning API receiver for network"
      },
      "body-url": {
        type: "string",
        description: "Receiver Url"
      },
      "body-version": {
        type: "string",
        description: "Scanning API Version"
      },
      "body-radio": {
        type: "object",
        description: "Add scanning API Radio"
      },
      "body-sharedSecret": {
        type: "string",
        description: "Secret Value for Receiver"
      }
    },
    required: ["path-organizationId","body-network","body-url","body-version","body-radio","body-sharedSecret"],
  },
};

export const updateOrganizationWirelessLocationScanningReceiverTool: Tool = {
  name: "updateOrganizationWirelessLocationScanningReceiver",
  scope: "",
  description: "Change scanning API receiver settings",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-receiverId": {
        type: "string",
        description: "Receiver ID"
      },
      "body-url": {
        type: "string",
        description: "Receiver Url"
      },
      "body-version": {
        type: "string",
        description: "Scanning API Version"
      },
      "body-radio": {
        type: "object",
        description: "Add scanning API Radio"
      }
    },
    required: ["path-organizationId","path-receiverId"],
  },
};

export const deleteOrganizationWirelessLocationScanningReceiverTool: Tool = {
  name: "deleteOrganizationWirelessLocationScanningReceiver",
  scope: "",
  description: "Delete a scanning API receiver",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-receiverId": {
        type: "string",
        description: "Receiver ID"
      }
    },
    required: ["path-organizationId","path-receiverId"],
  },
};

export const getOrganizationWirelessOpportunisticPcapByNetworkTool: Tool = {
  name: "getOrganizationWirelessOpportunisticPcapByNetwork",
  scope: "",
  description: "List the Opportunistic Pcap settings of an organization by network",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter results by network."
      }
    },
    required: ["path-organizationId"],
  },
};

export const byOrganizationWirelessOpportunisticPcapLicenseNetworkTool: Tool = {
  name: "byOrganizationWirelessOpportunisticPcapLicenseNetwork",
  scope: "",
  description: "Check the Opportunistic Pcap license status of an organization by network",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter results by network."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessRadioAfcPositionByDeviceTool: Tool = {
  name: "getOrganizationWirelessRadioAfcPositionByDevice",
  scope: "",
  description: "List the AFC power limits of an organization by device",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter device's AFC position by network ID.         This filter uses multiple exact matches."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device's AFC position by device serial numbers.         This filter uses multiple exact matches."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessRadioAfcPowerLimitsByDeviceTool: Tool = {
  name: "getOrganizationWirelessRadioAfcPowerLimitsByDevice",
  scope: "",
  description: "List the AFC power limits of an organization by device",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter device's AFC power limits by network ID. This filter uses multiple exact matches."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device's AFC power limits by device serial numbers. This filter uses multiple exact matches."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessRadioAutoRfByNetworkTool: Tool = {
  name: "getOrganizationWirelessRadioAutoRfByNetwork",
  scope: "",
  description: "List the AutoRF settings of an organization by network",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter results by network."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessRadioAutoRfChannelsPlanningActivitiesTool: Tool = {
  name: "getOrganizationWirelessRadioAutoRfChannelsPlanningActivities",
  scope: "",
  description: "List the channel planning activities of an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter results by network."
      },
      "query-deviceSerials": {
        type: "array",
        description: "Optional parameter to filter results by device serial."
      },
      "query-bands": {
        type: "array",
        description: "Optional parameter to filter results by bands. Valid bands are 2.4, 5, and 6."
      },
      "query-channels": {
        type: "array",
        description: "Optional parameter to filter results by channels."
      },
      "query-serials": {
        type: "array",
        description: "Serial number of the devices for which information should be gathered."
      },
      "query-gFloorplanId": {
        type: "string",
        description: "Geoaligned floorplan ID nodes for which information is gathered belong to."
      },
      "query-tags": {
        type: "array",
        description: "Optional parameter to filter results by node tags."
      },
      "query-models": {
        type: "array",
        description: "Optional parameter to filter results by access point models."
      },
      "query-rfProfiles": {
        type: "array",
        description: "Optional parameter to filter results by RF Profiles."
      },
      "query-minimumRfHealthScore": {
        type: "integer",
        description: "Minimum RF Health score for an AP to be retrieved."
      },
      "query-maximumRfHealthScore": {
        type: "integer",
        description: "Maximum RF Health score for an AP to be retrieved."
      }
    },
    required: ["path-organizationId"],
  },
};

export const recalculateOrganizationWirelessRadioAutoRfChannelsTool: Tool = {
  name: "recalculateOrganizationWirelessRadioAutoRfChannels",
  scope: "",
  description: "Recalculates automatically assigned channels for every AP within specified the specified network(s). Note: This could cause a brief loss in connectivity for wireless clients.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-networkIds": {
        type: "array",
        description: "A list of network ids (limit: 15)."
      }
    },
    required: ["path-organizationId","body-networkIds"],
  },
};

export const getOrganizationWirelessRfProfilesAssignmentsByDeviceTool: Tool = {
  name: "getOrganizationWirelessRfProfilesAssignmentsByDevice",
  scope: "",
  description: "List the RF profiles of an organization by device",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter devices by network."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor, wirelessController, and secureConnect."
      },
      "query-name": {
        type: "string",
        description: "Optional parameter to filter RF profiles by device name. All returned devices will have a name that contains the search term or is an exact match."
      },
      "query-mac": {
        type: "string",
        description: "Optional parameter to filter RF profiles by device MAC address. All returned devices will have a MAC address that contains the search term or is an exact match."
      },
      "query-serial": {
        type: "string",
        description: "Optional parameter to filter RF profiles by device serial number. All returned devices will have a serial number that contains the search term or is an exact match."
      },
      "query-model": {
        type: "string",
        description: "Optional parameter to filter RF profiles by device model. All returned devices will have a model that contains the search term or is an exact match."
      },
      "query-macs": {
        type: "array",
        description: "Optional parameter to filter RF profiles by one or more device MAC addresses. All returned devices will have a MAC address that is an exact match."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter RF profiles by one or more device serial numbers. All returned devices will have a serial number that is an exact match."
      },
      "query-models": {
        type: "array",
        description: "Optional parameter to filter RF profiles by one or more device models. All returned devices will have a model that is an exact match."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessSsidsFirewallIsolationAllowlistEntriesTool: Tool = {
  name: "getOrganizationWirelessSsidsFirewallIsolationAllowlistEntries",
  scope: "",
  description: "List the L2 isolation allow list MAC entry in an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
      },
      "query-networkIds": {
        type: "array",
        description: "networkIds array to filter out results"
      },
      "query-ssids": {
        type: "array",
        description: "ssids number array to filter out results"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationWirelessSsidsFirewallIsolationAllowlistEntryTool: Tool = {
  name: "createOrganizationWirelessSsidsFirewallIsolationAllowlistEntry",
  scope: "",
  description: "Create isolation allow list MAC entry for this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-description": {
        type: "string",
        description: "The description of mac address"
      },
      "body-client": {
        type: "object",
        description: "The client of allowlist"
      },
      "body-ssid": {
        type: "object",
        description: "The SSID that allowlist belongs to"
      },
      "body-network": {
        type: "object",
        description: "The Network that allowlist belongs to"
      }
    },
    required: ["path-organizationId","body-client","body-ssid","body-network"],
  },
};

export const deleteOrganizationWirelessSsidsFirewallIsolationAllowlistEntryTool: Tool = {
  name: "deleteOrganizationWirelessSsidsFirewallIsolationAllowlistEntry",
  scope: "",
  description: "Destroy isolation allow list MAC entry for this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-entryId": {
        type: "string",
        description: "Entry ID"
      }
    },
    required: ["path-organizationId","path-entryId"],
  },
};

export const updateOrganizationWirelessSsidsFirewallIsolationAllowlistEntryTool: Tool = {
  name: "updateOrganizationWirelessSsidsFirewallIsolationAllowlistEntry",
  scope: "",
  description: "Update isolation allow list MAC entry info",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-entryId": {
        type: "string",
        description: "Entry ID"
      },
      "body-description": {
        type: "string",
        description: "The description of mac address"
      },
      "body-client": {
        type: "object",
        description: "The client of allowlist"
      }
    },
    required: ["path-organizationId","path-entryId"],
  },
};

export const getOrganizationWirelessSsidsStatusesByDeviceTool: Tool = {
  name: "getOrganizationWirelessSsidsStatusesByDevice",
  scope: "",
  description: "List status information of all BSSIDs in your organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter the result set by the included set of network IDs"
      },
      "query-serials": {
        type: "array",
        description: "A list of serial numbers. The returned devices will be filtered to only include these serials."
      },
      "query-bssids": {
        type: "array",
        description: "A list of BSSIDs. The returned devices will be filtered to only include these BSSIDs."
      },
      "query-hideDisabled": {
        type: "boolean",
        description: "If true, the returned devices will not include disabled SSIDs. (default: true)"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 500. Default is 100."
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

export const getOrganizationWirelessZigbeeByNetworkTool: Tool = {
  name: "getOrganizationWirelessZigbeeByNetwork",
  scope: "",
  description: "Return list of Zigbee configs",
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
        description: "Filter by specified Network IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessZigbeeDevicesTool: Tool = {
  name: "getOrganizationWirelessZigbeeDevices",
  scope: "",
  description: "List the Zigbee MR Nodes for and organization or the supplied network(s)",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10."
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
        description: "Parameter of networks you want the zigbee devices for. E.g.: networkIds[]=N_12345678&networkIds[]=N_3456"
      },
      "query-isEnrolled": {
        type: "boolean",
        description: "Filter devices based on if they are enrolled or not"
      },
      "query-search": {
        type: "string",
        description: "Filter devices by their name and/or serial"
      }
    },
    required: ["path-organizationId"],
  },
};

export const updateOrganizationWirelessZigbeeDeviceTool: Tool = {
  name: "updateOrganizationWirelessZigbeeDevice",
  scope: "",
  description: "Endpoint to update zigbee gateways",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-enrolled": {
        type: "boolean",
        description: "Parameter to enroll or unenroll the zigbee devices"
      },
      "body-channel": {
        type: "string",
        description: "The new channel for the zigbee device"
      }
    },
    required: ["path-organizationId","path-id","body-enrolled"],
  },
};

export const createOrganizationWirelessZigbeeDisenrollmentTool: Tool = {
  name: "createOrganizationWirelessZigbeeDisenrollment",
  scope: "",
  description: "Enqueue a job to start disenrolling doorlocks on zigbee configured MRs",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-doorLockIds": {
        type: "array",
        description: "A list of Meraki doorlock ids to disenroll from the device"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWirelessZigbeeDisenrollmentTool: Tool = {
  name: "getOrganizationWirelessZigbeeDisenrollment",
  scope: "",
  description: "Return a disenrollment job",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationWirelessZigbeeDoorLocksTool: Tool = {
  name: "getOrganizationWirelessZigbeeDoorLocks",
  scope: "",
  description: "Return the list of doorlocks for a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter by specified Network IDs"
      },
      "query-serial": {
        type: "string",
        description: "Filter by device serial"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 500. Default is 50."
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

export const updateOrganizationWirelessZigbeeDoorLockTool: Tool = {
  name: "updateOrganizationWirelessZigbeeDoorLock",
  scope: "",
  description: "Endpoint to bulk update door locks params",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-name": {
        type: "string",
        description: "Door lock name to update"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const wirelessTools = [
  updateDeviceWirelessAlternateManagementInterfaceIpv6Tool,
  getDeviceWirelessBluetoothSettingsTool,
  updateDeviceWirelessBluetoothSettingsTool,
  getDeviceWirelessConnectionStatsTool,
  getDeviceWirelessElectronicShelfLabelTool,
  updateDeviceWirelessElectronicShelfLabelTool,
  getDeviceWirelessHealthScoresTool,
  getDeviceWirelessLatencyStatsTool,
  getDeviceWirelessRadioAfcPositionTool,
  updateDeviceWirelessRadioAfcPositionTool,
  getDeviceWirelessRadioAfcPowerLimitsTool,
  getDeviceWirelessRadioSettingsTool,
  updateDeviceWirelessRadioSettingsTool,
  getDeviceWirelessStatusTool,
  createDeviceWirelessZigbeeEnrollmentTool,
  getDeviceWirelessZigbeeEnrollmentTool,
  getNetworkWirelessAirMarshalTool,
  createNetworkWirelessAirMarshalRuleTool,
  updateNetworkWirelessAirMarshalRuleTool,
  deleteNetworkWirelessAirMarshalRuleTool,
  updateNetworkWirelessAirMarshalSettingsTool,
  getNetworkWirelessAlternateManagementInterfaceTool,
  updateNetworkWirelessAlternateManagementInterfaceTool,
  getNetworkWirelessBillingTool,
  updateNetworkWirelessBillingTool,
  getNetworkWirelessBluetoothSettingsTool,
  updateNetworkWirelessBluetoothSettingsTool,
  getNetworkWirelessChannelUtilizationHistoryTool,
  getNetworkWirelessClientCountHistoryTool,
  getNetworkWirelessClientsConnectionStatsTool,
  getNetworkWirelessClientsHealthScoresTool,
  getNetworkWirelessClientsLatencyStatsTool,
  getNetworkWirelessClientsOnboardingHistoryTool,
  getNetworkWirelessClientConnectionStatsTool,
  getNetworkWirelessClientConnectivityEventsTool,
  getNetworkWirelessClientHealthScoresTool,
  getNetworkWirelessClientLatencyHistoryTool,
  getNetworkWirelessClientLatencyStatsTool,
  getNetworkWirelessConnectionStatsTool,
  getNetworkWirelessDataRateHistoryTool,
  getNetworkWirelessDevicesConnectionStatsTool,
  getNetworkWirelessDevicesHealthScoresTool,
  getNetworkWirelessDevicesLatencyStatsTool,
  getNetworkWirelessElectronicShelfLabelTool,
  updateNetworkWirelessElectronicShelfLabelTool,
  getNetworkWirelessElectronicShelfLabelConfiguredDevicesTool,
  getNetworkWirelessEthernetPortsProfilesTool,
  createNetworkWirelessEthernetPortsProfileTool,
  assignNetworkWirelessEthernetPortsProfilesTool,
  setNetworkWirelessEthernetPortsProfilesDefaultTool,
  getNetworkWirelessEthernetPortsProfileTool,
  updateNetworkWirelessEthernetPortsProfileTool,
  deleteNetworkWirelessEthernetPortsProfileTool,
  getNetworkWirelessFailedConnectionsTool,
  getNetworkWirelessLatencyHistoryTool,
  getNetworkWirelessLatencyStatsTool,
  updateNetworkWirelessLocationScanningTool,
  getNetworkWirelessMeshStatusesTool,
  updateNetworkWirelessOpportunisticPcapTool,
  updateNetworkWirelessRadioAutoRfTool,
  getNetworkWirelessRfProfilesTool,
  createNetworkWirelessRfProfileTool,
  updateNetworkWirelessRfProfileTool,
  deleteNetworkWirelessRfProfileTool,
  getNetworkWirelessRfProfileTool,
  getNetworkWirelessSettingsTool,
  updateNetworkWirelessSettingsTool,
  getNetworkWirelessSignalQualityHistoryTool,
  getNetworkWirelessSsidsTool,
  getNetworkWirelessSsidTool,
  updateNetworkWirelessSsidTool,
  getNetworkWirelessSsidBonjourForwardingTool,
  updateNetworkWirelessSsidBonjourForwardingTool,
  getNetworkWirelessSsidDeviceTypeGroupPoliciesTool,
  updateNetworkWirelessSsidDeviceTypeGroupPoliciesTool,
  getNetworkWirelessSsidEapOverrideTool,
  updateNetworkWirelessSsidEapOverrideTool,
  getNetworkWirelessSsidFirewallL3FirewallRulesTool,
  updateNetworkWirelessSsidFirewallL3FirewallRulesTool,
  getNetworkWirelessSsidFirewallL7FirewallRulesTool,
  updateNetworkWirelessSsidFirewallL7FirewallRulesTool,
  getNetworkWirelessSsidHotspot20Tool,
  updateNetworkWirelessSsidHotspot20Tool,
  getNetworkWirelessSsidIdentityPsksTool,
  createNetworkWirelessSsidIdentityPskTool,
  getNetworkWirelessSsidIdentityPskTool,
  updateNetworkWirelessSsidIdentityPskTool,
  deleteNetworkWirelessSsidIdentityPskTool,
  getNetworkWirelessSsidSchedulesTool,
  updateNetworkWirelessSsidSchedulesTool,
  getNetworkWirelessSsidSplashSettingsTool,
  updateNetworkWirelessSsidSplashSettingsTool,
  updateNetworkWirelessSsidTrafficShapingRulesTool,
  getNetworkWirelessSsidTrafficShapingRulesTool,
  getNetworkWirelessSsidVpnTool,
  updateNetworkWirelessSsidVpnTool,
  getNetworkWirelessUsageHistoryTool,
  updateNetworkWirelessZigbeeTool,
  getOrganizationWirelessAirMarshalRulesTool,
  getOrganizationWirelessAirMarshalSettingsByNetworkTool,
  getOrganizationWirelessCertificatesOpenRoamingCertificateAuthorityTool,
  getOrganizationWirelessClientsOverviewByDeviceTool,
  getOrganizationWirelessDevicesChannelUtilizationByDeviceTool,
  getOrganizationWirelessDevicesChannelUtilizationByNetworkTool,
  getOrganizationWirelessDevicesChannelUtilizationHistoryByDeviceByIntervalTool,
  getOrganizationWirelessDevicesChannelUtilizationHistoryByNetworkByIntervalTool,
  getOrganizationWirelessDevicesEthernetStatusesTool,
  getOrganizationWirelessDevicesLatencyByClientTool,
  getOrganizationWirelessDevicesLatencyByDeviceTool,
  getOrganizationWirelessDevicesLatencyByNetworkTool,
  getOrganizationWirelessDevicesPacketLossByClientTool,
  getOrganizationWirelessDevicesPacketLossByDeviceTool,
  getOrganizationWirelessDevicesPacketLossByNetworkTool,
  getOrganizationWirelessDevicesPowerModeHistoryTool,
  getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesTool,
  updateOrganizationWirelessDevicesRadsecCertificatesAuthoritiesTool,
  createOrganizationWirelessDevicesRadsecCertificatesAuthorityTool,
  getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrlsTool,
  getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrlsDeltasTool,
  getOrganizationWirelessDevicesSignalQualityByClientTool,
  getOrganizationWirelessDevicesSignalQualityByDeviceTool,
  getOrganizationWirelessDevicesSignalQualityByNetworkTool,
  getOrganizationWirelessDevicesSystemCpuLoadHistoryTool,
  getOrganizationWirelessDevicesWirelessControllersByDeviceTool,
  getOrganizationWirelessLocationScanningByNetworkTool,
  getOrganizationWirelessLocationScanningReceiversTool,
  createOrganizationWirelessLocationScanningReceiverTool,
  updateOrganizationWirelessLocationScanningReceiverTool,
  deleteOrganizationWirelessLocationScanningReceiverTool,
  getOrganizationWirelessOpportunisticPcapByNetworkTool,
  byOrganizationWirelessOpportunisticPcapLicenseNetworkTool,
  getOrganizationWirelessRadioAfcPositionByDeviceTool,
  getOrganizationWirelessRadioAfcPowerLimitsByDeviceTool,
  getOrganizationWirelessRadioAutoRfByNetworkTool,
  getOrganizationWirelessRadioAutoRfChannelsPlanningActivitiesTool,
  recalculateOrganizationWirelessRadioAutoRfChannelsTool,
  getOrganizationWirelessRfProfilesAssignmentsByDeviceTool,
  getOrganizationWirelessSsidsFirewallIsolationAllowlistEntriesTool,
  createOrganizationWirelessSsidsFirewallIsolationAllowlistEntryTool,
  deleteOrganizationWirelessSsidsFirewallIsolationAllowlistEntryTool,
  updateOrganizationWirelessSsidsFirewallIsolationAllowlistEntryTool,
  getOrganizationWirelessSsidsStatusesByDeviceTool,
  getOrganizationWirelessZigbeeByNetworkTool,
  getOrganizationWirelessZigbeeDevicesTool,
  updateOrganizationWirelessZigbeeDeviceTool,
  createOrganizationWirelessZigbeeDisenrollmentTool,
  getOrganizationWirelessZigbeeDisenrollmentTool,
  getOrganizationWirelessZigbeeDoorLocksTool,
  updateOrganizationWirelessZigbeeDoorLockTool
];