import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getDeviceApplianceDhcpSubnetsTool: Tool = {
  name: "getDeviceApplianceDhcpSubnets",
  scope: "",
  description: "Return the DHCP subnet information for an appliance",
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

export const getDeviceAppliancePerformanceTool: Tool = {
  name: "getDeviceAppliancePerformance",
  scope: "",
  description: "Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 30 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 14 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 30 minutes and be less than or equal to 14 days. The default is 30 minutes."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceAppliancePrefixesDelegatedTool: Tool = {
  name: "getDeviceAppliancePrefixesDelegated",
  scope: "",
  description: "Return current delegated IPv6 prefixes on an appliance.",
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

export const getDeviceAppliancePrefixesDelegatedVlanAssignmentsTool: Tool = {
  name: "getDeviceAppliancePrefixesDelegatedVlanAssignments",
  scope: "",
  description: "Return prefixes assigned to all IPv6 enabled VLANs on an appliance.",
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

export const getDeviceApplianceRadioSettingsTool: Tool = {
  name: "getDeviceApplianceRadioSettings",
  scope: "",
  description: "Return the radio settings of an appliance",
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

export const updateDeviceApplianceRadioSettingsTool: Tool = {
  name: "updateDeviceApplianceRadioSettings",
  scope: "",
  description: "Update the radio settings of an appliance",
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

export const getDeviceApplianceUplinksSettingsTool: Tool = {
  name: "getDeviceApplianceUplinksSettings",
  scope: "",
  description: "Return the uplink settings for an MX appliance",
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

export const updateDeviceApplianceUplinksSettingsTool: Tool = {
  name: "updateDeviceApplianceUplinksSettings",
  scope: "",
  description: "Update the uplink settings for an MX appliance",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-interfaces": {
        type: "object",
        description: "Interface settings."
      }
    },
    required: ["path-serial","body-interfaces"],
  },
};

export const createDeviceApplianceVmxAuthenticationTokenTool: Tool = {
  name: "createDeviceApplianceVmxAuthenticationToken",
  scope: "",
  description: "Generate a new vMX authentication token",
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

export const getNetworkApplianceClientSecurityEventsTool: Tool = {
  name: "getNetworkApplianceClientSecurityEvents",
  scope: "",
  description: "List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
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
        description: "The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 791 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days."
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
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order."
      }
    },
    required: ["path-networkId","path-clientId"],
  },
};

export const getNetworkApplianceConnectivityMonitoringDestinationsTool: Tool = {
  name: "getNetworkApplianceConnectivityMonitoringDestinations",
  scope: "",
  description: "Return the connectivity testing destinations for an MX network",
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

export const updateNetworkApplianceConnectivityMonitoringDestinationsTool: Tool = {
  name: "updateNetworkApplianceConnectivityMonitoringDestinations",
  scope: "",
  description: "Update the connectivity testing destinations for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-destinations": {
        type: "array",
        description: "The list of connectivity monitoring destinations"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceContentFilteringTool: Tool = {
  name: "getNetworkApplianceContentFiltering",
  scope: "",
  description: "Return the content filtering settings for an MX network",
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

export const updateNetworkApplianceContentFilteringTool: Tool = {
  name: "updateNetworkApplianceContentFiltering",
  scope: "",
  description: "Update the content filtering settings for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-allowedUrlPatterns": {
        type: "array",
        description: "A list of URL patterns that are allowed"
      },
      "body-blockedUrlPatterns": {
        type: "array",
        description: "A list of URL patterns that are blocked"
      },
      "body-blockedUrlCategories": {
        type: "array",
        description: "A list of URL categories to block"
      },
      "body-urlCategoryListSize": {
        type: "string",
        description: "URL category list size which is either 'topSites' or 'fullList'"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceContentFilteringCategoriesTool: Tool = {
  name: "getNetworkApplianceContentFilteringCategories",
  scope: "",
  description: "List all available content filtering categories for an MX network",
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

export const getNetworkApplianceFirewallCellularFirewallRulesTool: Tool = {
  name: "getNetworkApplianceFirewallCellularFirewallRules",
  scope: "",
  description: "Return the cellular firewall rules for an MX network",
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

export const updateNetworkApplianceFirewallCellularFirewallRulesTool: Tool = {
  name: "updateNetworkApplianceFirewallCellularFirewallRules",
  scope: "",
  description: "Update the cellular firewall rules of an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the firewall rules (not including the default rule)"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceFirewallFirewalledServicesTool: Tool = {
  name: "getNetworkApplianceFirewallFirewalledServices",
  scope: "",
  description: "List the appliance services and their accessibility rules",
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

export const getNetworkApplianceFirewallFirewalledServiceTool: Tool = {
  name: "getNetworkApplianceFirewallFirewalledService",
  scope: "",
  description: "Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-service": {
        type: "string",
        description: "Service"
      }
    },
    required: ["path-networkId","path-service"],
  },
};

export const updateNetworkApplianceFirewallFirewalledServiceTool: Tool = {
  name: "updateNetworkApplianceFirewallFirewalledService",
  scope: "",
  description: "Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-service": {
        type: "string",
        description: "Service"
      },
      "body-access": {
        type: "string",
        description: "A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are \"blocked\" (no remote IPs can access the service), \"restricted\" (only allowed IPs can access the service), and \"unrestriced\" (any remote IP can access the service). This field is required"
      },
      "body-allowedIps": {
        type: "array",
        description: "An array of allowed IPs that can access the service. This field is required if \"access\" is set to \"restricted\". Otherwise this field is ignored"
      }
    },
    required: ["path-networkId","path-service","body-access"],
  },
};

export const getNetworkApplianceFirewallInboundCellularFirewallRulesTool: Tool = {
  name: "getNetworkApplianceFirewallInboundCellularFirewallRules",
  scope: "",
  description: "Return the inbound cellular firewall rules for an MX network",
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

export const updateNetworkApplianceFirewallInboundCellularFirewallRulesTool: Tool = {
  name: "updateNetworkApplianceFirewallInboundCellularFirewallRules",
  scope: "",
  description: "Update the inbound cellular firewall rules of an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the firewall rules (not including the default rule)"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceFirewallInboundFirewallRulesTool: Tool = {
  name: "getNetworkApplianceFirewallInboundFirewallRules",
  scope: "",
  description: "Return the inbound firewall rules for an MX network",
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

export const updateNetworkApplianceFirewallInboundFirewallRulesTool: Tool = {
  name: "updateNetworkApplianceFirewallInboundFirewallRules",
  scope: "",
  description: "Update the inbound firewall rules of an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the firewall rules (not including the default rule)"
      },
      "body-syslogDefaultRule": {
        type: "boolean",
        description: "Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceFirewallL3FirewallRulesTool: Tool = {
  name: "getNetworkApplianceFirewallL3FirewallRules",
  scope: "",
  description: "Return the L3 firewall rules for an MX network",
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

export const updateNetworkApplianceFirewallL3FirewallRulesTool: Tool = {
  name: "updateNetworkApplianceFirewallL3FirewallRules",
  scope: "",
  description: "Update the L3 firewall rules of an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the firewall rules (not including the default rule)"
      },
      "body-syslogDefaultRule": {
        type: "boolean",
        description: "Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceFirewallL7FirewallRulesTool: Tool = {
  name: "getNetworkApplianceFirewallL7FirewallRules",
  scope: "",
  description: "List the MX L7 firewall rules for an MX network",
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

export const updateNetworkApplianceFirewallL7FirewallRulesTool: Tool = {
  name: "updateNetworkApplianceFirewallL7FirewallRules",
  scope: "",
  description: "Update the MX L7 firewall rules for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the MX L7 firewall rules"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesTool: Tool = {
  name: "getNetworkApplianceFirewallL7FirewallRulesApplicationCategories",
  scope: "",
  description: "Return the L7 firewall application categories and their associated applications for an MX network",
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

export const updateNetworkApplianceFirewallMulticastForwardingTool: Tool = {
  name: "updateNetworkApplianceFirewallMulticastForwarding",
  scope: "",
  description: "Update static multicast forward rules for a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "Static multicast forwarding rules. Pass an empty array to clear all rules."
      }
    },
    required: ["path-networkId","body-rules"],
  },
};

export const getNetworkApplianceFirewallOneToManyNatRulesTool: Tool = {
  name: "getNetworkApplianceFirewallOneToManyNatRules",
  scope: "",
  description: "Return the 1:Many NAT mapping rules for an MX network",
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

export const updateNetworkApplianceFirewallOneToManyNatRulesTool: Tool = {
  name: "updateNetworkApplianceFirewallOneToManyNatRules",
  scope: "",
  description: "Set the 1:Many NAT mapping rules for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "An array of 1:Many nat rules"
      }
    },
    required: ["path-networkId","body-rules"],
  },
};

export const getNetworkApplianceFirewallOneToOneNatRulesTool: Tool = {
  name: "getNetworkApplianceFirewallOneToOneNatRules",
  scope: "",
  description: "Return the 1:1 NAT mapping rules for an MX network",
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

export const updateNetworkApplianceFirewallOneToOneNatRulesTool: Tool = {
  name: "updateNetworkApplianceFirewallOneToOneNatRules",
  scope: "",
  description: "Set the 1:1 NAT mapping rules for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "An array of 1:1 nat rules"
      }
    },
    required: ["path-networkId","body-rules"],
  },
};

export const getNetworkApplianceFirewallPortForwardingRulesTool: Tool = {
  name: "getNetworkApplianceFirewallPortForwardingRules",
  scope: "",
  description: "Return the port forwarding rules for an MX network",
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

export const updateNetworkApplianceFirewallPortForwardingRulesTool: Tool = {
  name: "updateNetworkApplianceFirewallPortForwardingRules",
  scope: "",
  description: "Update the port forwarding rules for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-rules": {
        type: "array",
        description: "An array of port forwarding params"
      }
    },
    required: ["path-networkId","body-rules"],
  },
};

export const getNetworkApplianceFirewallSettingsTool: Tool = {
  name: "getNetworkApplianceFirewallSettings",
  scope: "",
  description: "Return the firewall settings for this network",
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

export const updateNetworkApplianceFirewallSettingsTool: Tool = {
  name: "updateNetworkApplianceFirewallSettings",
  scope: "",
  description: "Update the firewall settings for this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-spoofingProtection": {
        type: "object",
        description: "Spoofing protection settings"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkAppliancePortsTool: Tool = {
  name: "getNetworkAppliancePorts",
  scope: "",
  description: "List per-port VLAN settings for all ports of a MX.",
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

export const getNetworkAppliancePortTool: Tool = {
  name: "getNetworkAppliancePort",
  scope: "",
  description: "Return per-port VLAN settings for a single MX port.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-portId": {
        type: "string",
        description: "Port ID"
      }
    },
    required: ["path-networkId","path-portId"],
  },
};

export const updateNetworkAppliancePortTool: Tool = {
  name: "updateNetworkAppliancePort",
  scope: "",
  description: "Update the per-port VLAN settings for a single MX port.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-portId": {
        type: "string",
        description: "Port ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "The status of the port"
      },
      "body-dropUntaggedTraffic": {
        type: "boolean",
        description: "Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true."
      },
      "body-type": {
        type: "string",
        description: "The type of the port: 'access' or 'trunk'."
      },
      "body-vlan": {
        type: "integer",
        description: "Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode."
      },
      "body-allowedVlans": {
        type: "string",
        description: "Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port."
      },
      "body-accessPolicy": {
        type: "string",
        description: "The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing."
      },
      "body-peerSgtCapable": {
        type: "boolean",
        description: "If true, Peer SGT is enabled for traffic through this port. Applicable to trunk port only, not access port."
      },
      "body-adaptivePolicyGroupId": {
        type: "string",
        description: "Adaptive policy group ID that all traffic originating from this port is assigned to."
      }
    },
    required: ["path-networkId","path-portId"],
  },
};

export const getNetworkAppliancePrefixesDelegatedStaticsTool: Tool = {
  name: "getNetworkAppliancePrefixesDelegatedStatics",
  scope: "",
  description: "List static delegated prefixes for a network",
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

export const createNetworkAppliancePrefixesDelegatedStaticTool: Tool = {
  name: "createNetworkAppliancePrefixesDelegatedStatic",
  scope: "",
  description: "Add a static delegated prefix from a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-prefix": {
        type: "string",
        description: "A static IPv6 prefix"
      },
      "body-origin": {
        type: "object",
        description: "The origin of the prefix"
      },
      "body-description": {
        type: "string",
        description: "A name or description for the prefix"
      }
    },
    required: ["path-networkId","body-prefix","body-origin"],
  },
};

export const getNetworkAppliancePrefixesDelegatedStaticTool: Tool = {
  name: "getNetworkAppliancePrefixesDelegatedStatic",
  scope: "",
  description: "Return a static delegated prefix from a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-staticDelegatedPrefixId": {
        type: "string",
        description: "Static delegated prefix ID"
      }
    },
    required: ["path-networkId","path-staticDelegatedPrefixId"],
  },
};

export const updateNetworkAppliancePrefixesDelegatedStaticTool: Tool = {
  name: "updateNetworkAppliancePrefixesDelegatedStatic",
  scope: "",
  description: "Update a static delegated prefix from a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-staticDelegatedPrefixId": {
        type: "string",
        description: "Static delegated prefix ID"
      },
      "body-prefix": {
        type: "string",
        description: "A static IPv6 prefix"
      },
      "body-origin": {
        type: "object",
        description: "The origin of the prefix"
      },
      "body-description": {
        type: "string",
        description: "A name or description for the prefix"
      }
    },
    required: ["path-networkId","path-staticDelegatedPrefixId"],
  },
};

export const deleteNetworkAppliancePrefixesDelegatedStaticTool: Tool = {
  name: "deleteNetworkAppliancePrefixesDelegatedStatic",
  scope: "",
  description: "Delete a static delegated prefix from a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-staticDelegatedPrefixId": {
        type: "string",
        description: "Static delegated prefix ID"
      }
    },
    required: ["path-networkId","path-staticDelegatedPrefixId"],
  },
};

export const getNetworkApplianceRfProfilesTool: Tool = {
  name: "getNetworkApplianceRfProfiles",
  scope: "",
  description: "List the RF profiles for this network",
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

export const createNetworkApplianceRfProfileTool: Tool = {
  name: "createNetworkApplianceRfProfile",
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
      "body-twoFourGhzSettings": {
        type: "object",
        description: "Settings related to 2.4Ghz band"
      },
      "body-fiveGhzSettings": {
        type: "object",
        description: "Settings related to 5Ghz band"
      },
      "body-perSsidSettings": {
        type: "object",
        description: "Per-SSID radio settings by number."
      }
    },
    required: ["path-networkId","body-name"],
  },
};

export const updateNetworkApplianceRfProfileTool: Tool = {
  name: "updateNetworkApplianceRfProfile",
  scope: "",
  description: "Updates specified RF profile for this network",
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
      "body-twoFourGhzSettings": {
        type: "object",
        description: "Settings related to 2.4Ghz band"
      },
      "body-fiveGhzSettings": {
        type: "object",
        description: "Settings related to 5Ghz band"
      },
      "body-perSsidSettings": {
        type: "object",
        description: "Per-SSID radio settings by number."
      }
    },
    required: ["path-networkId","path-rfProfileId"],
  },
};

export const deleteNetworkApplianceRfProfileTool: Tool = {
  name: "deleteNetworkApplianceRfProfile",
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

export const getNetworkApplianceRfProfileTool: Tool = {
  name: "getNetworkApplianceRfProfile",
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

export const updateNetworkApplianceSdwanInternetPoliciesTool: Tool = {
  name: "updateNetworkApplianceSdwanInternetPolicies",
  scope: "",
  description: "Update SDWAN internet traffic preferences for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-wanTrafficUplinkPreferences": {
        type: "array",
        description: "policies with respective traffic filters for an MX network"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceSecurityEventsTool: Tool = {
  name: "getNetworkApplianceSecurityEvents",
  scope: "",
  description: "List the security events for a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 365 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days."
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
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceSecurityIntrusionTool: Tool = {
  name: "getNetworkApplianceSecurityIntrusion",
  scope: "",
  description: "Returns all supported intrusion settings for an MX network",
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

export const updateNetworkApplianceSecurityIntrusionTool: Tool = {
  name: "updateNetworkApplianceSecurityIntrusion",
  scope: "",
  description: "Set the supported intrusion settings for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-mode": {
        type: "string",
        description: "Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)"
      },
      "body-idsRulesets": {
        type: "string",
        description: "Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved"
      },
      "body-protectedNetworks": {
        type: "object",
        description: "Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceSecurityMalwareTool: Tool = {
  name: "getNetworkApplianceSecurityMalware",
  scope: "",
  description: "Returns all supported malware settings for an MX network",
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

export const updateNetworkApplianceSecurityMalwareTool: Tool = {
  name: "updateNetworkApplianceSecurityMalware",
  scope: "",
  description: "Set the supported malware settings for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-mode": {
        type: "string",
        description: "Set mode to 'enabled' to enable malware prevention, otherwise 'disabled'"
      },
      "body-allowedUrls": {
        type: "array",
        description: "The urls that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing"
      },
      "body-allowedFiles": {
        type: "array",
        description: "The sha256 digests of files that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing"
      }
    },
    required: ["path-networkId","body-mode"],
  },
};

export const getNetworkApplianceSettingsTool: Tool = {
  name: "getNetworkApplianceSettings",
  scope: "",
  description: "Return the appliance settings for a network",
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

export const updateNetworkApplianceSettingsTool: Tool = {
  name: "updateNetworkApplianceSettings",
  scope: "",
  description: "Update the appliance settings for a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-clientTrackingMethod": {
        type: "string",
        description: "Client tracking method of a network"
      },
      "body-deploymentMode": {
        type: "string",
        description: "Deployment mode of a network"
      },
      "body-dynamicDns": {
        type: "object",
        description: "Dynamic DNS settings for a network"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceSingleLanTool: Tool = {
  name: "getNetworkApplianceSingleLan",
  scope: "",
  description: "Return single LAN configuration",
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

export const updateNetworkApplianceSingleLanTool: Tool = {
  name: "updateNetworkApplianceSingleLan",
  scope: "",
  description: "Update single LAN configuration",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-subnet": {
        type: "string",
        description: "The subnet of the single LAN configuration"
      },
      "body-applianceIp": {
        type: "string",
        description: "The appliance IP address of the single LAN"
      },
      "body-ipv6": {
        type: "object",
        description: "IPv6 configuration on the VLAN"
      },
      "body-mandatoryDhcp": {
        type: "object",
        description: "Mandatory DHCP will enforce that clients connecting to this LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceSsidsTool: Tool = {
  name: "getNetworkApplianceSsids",
  scope: "",
  description: "List the MX SSIDs in a network",
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

export const getNetworkApplianceSsidTool: Tool = {
  name: "getNetworkApplianceSsid",
  scope: "",
  description: "Return a single MX SSID",
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

export const updateNetworkApplianceSsidTool: Tool = {
  name: "updateNetworkApplianceSsid",
  scope: "",
  description: "Update the attributes of an MX SSID",
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
        description: "The name of the SSID."
      },
      "body-enabled": {
        type: "boolean",
        description: "Whether or not the SSID is enabled."
      },
      "body-defaultVlanId": {
        type: "integer",
        description: "The VLAN ID of the VLAN associated to this SSID. This parameter is only valid if the network is in routed mode."
      },
      "body-authMode": {
        type: "string",
        description: "The association control method for the SSID ('open', 'psk', '8021x-meraki' or '8021x-radius')."
      },
      "body-psk": {
        type: "string",
        description: "The passkey for the SSID. This param is only valid if the authMode is 'psk'."
      },
      "body-radiusServers": {
        type: "array",
        description: "The RADIUS 802.1x servers to be used for authentication. This param is only valid if the authMode is '8021x-radius'."
      },
      "body-encryptionMode": {
        type: "string",
        description: "The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'."
      },
      "body-wpaEncryptionMode": {
        type: "string",
        description: "The types of WPA encryption. ('WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only'). This param is only valid if (1) the authMode is 'psk' & the encryptionMode is 'wpa' OR (2) the authMode is '8021x-meraki' OR (3) the authMode is '8021x-radius'"
      },
      "body-visible": {
        type: "boolean",
        description: "Boolean indicating whether the MX should advertise or hide this SSID."
      },
      "body-dhcpEnforcedDeauthentication": {
        type: "object",
        description: "DHCP Enforced Deauthentication enables the disassociation of wireless clients in addition to Mandatory DHCP. This param is only valid on firmware versions >= MX 17.0 where the associated LAN has Mandatory DHCP Enabled "
      },
      "body-dot11w": {
        type: "object",
        description: "The current setting for Protected Management Frames (802.11w)."
      }
    },
    required: ["path-networkId","path-number"],
  },
};

export const getNetworkApplianceStaticRoutesTool: Tool = {
  name: "getNetworkApplianceStaticRoutes",
  scope: "",
  description: "List the static routes for an MX or teleworker network",
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

export const createNetworkApplianceStaticRouteTool: Tool = {
  name: "createNetworkApplianceStaticRoute",
  scope: "",
  description: "Add a static route for an MX or teleworker network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the route"
      },
      "body-subnet": {
        type: "string",
        description: "Subnet of the route"
      },
      "body-gatewayIp": {
        type: "string",
        description: "Gateway IP address (next hop)"
      },
      "body-gatewayVlanId": {
        type: "string",
        description: "Gateway VLAN ID"
      }
    },
    required: ["path-networkId","body-name","body-subnet","body-gatewayIp"],
  },
};

export const getNetworkApplianceStaticRouteTool: Tool = {
  name: "getNetworkApplianceStaticRoute",
  scope: "",
  description: "Return a static route for an MX or teleworker network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-staticRouteId": {
        type: "string",
        description: "Static route ID"
      }
    },
    required: ["path-networkId","path-staticRouteId"],
  },
};

export const updateNetworkApplianceStaticRouteTool: Tool = {
  name: "updateNetworkApplianceStaticRoute",
  scope: "",
  description: "Update a static route for an MX or teleworker network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-staticRouteId": {
        type: "string",
        description: "Static route ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the route"
      },
      "body-subnet": {
        type: "string",
        description: "Subnet of the route"
      },
      "body-gatewayIp": {
        type: "string",
        description: "Gateway IP address (next hop)"
      },
      "body-gatewayVlanId": {
        type: "string",
        description: "Gateway VLAN ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Whether the route should be enabled or not"
      },
      "body-fixedIpAssignments": {
        type: "object",
        description: "Fixed DHCP IP assignments on the route"
      },
      "body-reservedIpRanges": {
        type: "array",
        description: "DHCP reserved IP ranges"
      }
    },
    required: ["path-networkId","path-staticRouteId"],
  },
};

export const deleteNetworkApplianceStaticRouteTool: Tool = {
  name: "deleteNetworkApplianceStaticRoute",
  scope: "",
  description: "Delete a static route from an MX or teleworker network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-staticRouteId": {
        type: "string",
        description: "Static route ID"
      }
    },
    required: ["path-networkId","path-staticRouteId"],
  },
};

export const getNetworkApplianceTrafficShapingTool: Tool = {
  name: "getNetworkApplianceTrafficShaping",
  scope: "",
  description: "Display the traffic shaping settings for an MX network",
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

export const updateNetworkApplianceTrafficShapingTool: Tool = {
  name: "updateNetworkApplianceTrafficShaping",
  scope: "",
  description: "Update the traffic shaping settings for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-globalBandwidthLimits": {
        type: "object",
        description: "Global per-client bandwidth limit"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceTrafficShapingCustomPerformanceClassesTool: Tool = {
  name: "getNetworkApplianceTrafficShapingCustomPerformanceClasses",
  scope: "",
  description: "List all custom performance classes for an MX network",
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

export const createNetworkApplianceTrafficShapingCustomPerformanceClassTool: Tool = {
  name: "createNetworkApplianceTrafficShapingCustomPerformanceClass",
  scope: "",
  description: "Add a custom performance class for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the custom performance class"
      },
      "body-maxLatency": {
        type: "integer",
        description: "Maximum latency in milliseconds"
      },
      "body-maxJitter": {
        type: "integer",
        description: "Maximum jitter in milliseconds"
      },
      "body-maxLossPercentage": {
        type: "integer",
        description: "Maximum percentage of packet loss"
      }
    },
    required: ["path-networkId","body-name"],
  },
};

export const getNetworkApplianceTrafficShapingCustomPerformanceClassTool: Tool = {
  name: "getNetworkApplianceTrafficShapingCustomPerformanceClass",
  scope: "",
  description: "Return a custom performance class for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-customPerformanceClassId": {
        type: "string",
        description: "Custom performance class ID"
      }
    },
    required: ["path-networkId","path-customPerformanceClassId"],
  },
};

export const updateNetworkApplianceTrafficShapingCustomPerformanceClassTool: Tool = {
  name: "updateNetworkApplianceTrafficShapingCustomPerformanceClass",
  scope: "",
  description: "Update a custom performance class for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-customPerformanceClassId": {
        type: "string",
        description: "Custom performance class ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the custom performance class"
      },
      "body-maxLatency": {
        type: "integer",
        description: "Maximum latency in milliseconds"
      },
      "body-maxJitter": {
        type: "integer",
        description: "Maximum jitter in milliseconds"
      },
      "body-maxLossPercentage": {
        type: "integer",
        description: "Maximum percentage of packet loss"
      }
    },
    required: ["path-networkId","path-customPerformanceClassId"],
  },
};

export const deleteNetworkApplianceTrafficShapingCustomPerformanceClassTool: Tool = {
  name: "deleteNetworkApplianceTrafficShapingCustomPerformanceClass",
  scope: "",
  description: "Delete a custom performance class from an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-customPerformanceClassId": {
        type: "string",
        description: "Custom performance class ID"
      }
    },
    required: ["path-networkId","path-customPerformanceClassId"],
  },
};

export const updateNetworkApplianceTrafficShapingRulesTool: Tool = {
  name: "updateNetworkApplianceTrafficShapingRules",
  scope: "",
  description: "Update the traffic shaping settings rules for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
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
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceTrafficShapingRulesTool: Tool = {
  name: "getNetworkApplianceTrafficShapingRules",
  scope: "",
  description: "Display the traffic shaping settings rules for an MX network",
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

export const getNetworkApplianceTrafficShapingUplinkBandwidthTool: Tool = {
  name: "getNetworkApplianceTrafficShapingUplinkBandwidth",
  scope: "",
  description: "Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]",
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

export const updateNetworkApplianceTrafficShapingUplinkBandwidthTool: Tool = {
  name: "updateNetworkApplianceTrafficShapingUplinkBandwidth",
  scope: "",
  description: "Updates the uplink bandwidth settings for your MX network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-bandwidthLimits": {
        type: "object",
        description: "A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceTrafficShapingUplinkSelectionTool: Tool = {
  name: "getNetworkApplianceTrafficShapingUplinkSelection",
  scope: "",
  description: "Show uplink selection settings for an MX network",
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

export const updateNetworkApplianceTrafficShapingUplinkSelectionTool: Tool = {
  name: "updateNetworkApplianceTrafficShapingUplinkSelection",
  scope: "",
  description: "Update uplink selection settings for an MX network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-activeActiveAutoVpnEnabled": {
        type: "boolean",
        description: "Toggle for enabling or disabling active-active AutoVPN"
      },
      "body-defaultUplink": {
        type: "string",
        description: "The default uplink. Must be one of: 'wan1' or 'wan2'"
      },
      "body-loadBalancingEnabled": {
        type: "boolean",
        description: "Toggle for enabling or disabling load balancing"
      },
      "body-failoverAndFailback": {
        type: "object",
        description: "WAN failover and failback behavior"
      },
      "body-wanTrafficUplinkPreferences": {
        type: "array",
        description: "Array of uplink preference rules for WAN traffic"
      },
      "body-vpnTrafficUplinkPreferences": {
        type: "array",
        description: "Array of uplink preference rules for VPN traffic"
      }
    },
    required: ["path-networkId"],
  },
};

export const updateNetworkApplianceTrafficShapingVpnExclusionsTool: Tool = {
  name: "updateNetworkApplianceTrafficShapingVpnExclusions",
  scope: "",
  description: "Update VPN exclusion rules for an MX network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-custom": {
        type: "array",
        description: "Custom VPN exclusion rules. Pass an empty array to clear existing rules."
      },
      "body-majorApplications": {
        type: "array",
        description: "Major Application based VPN exclusion rules. Pass an empty array to clear existing rules."
      }
    },
    required: ["path-networkId"],
  },
};

export const connectNetworkApplianceUmbrellaAccountTool: Tool = {
  name: "connectNetworkApplianceUmbrellaAccount",
  scope: "",
  description: "Connect to Cisco Umbrella account to this network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-apiKey": {
        type: "string",
        description: "API key for the Umbrella account"
      },
      "body-apiSecret": {
        type: "string",
        description: "API secret for the Umbrella account"
      }
    },
    required: ["path-networkId","body-apiKey","body-apiSecret"],
  },
};

export const disconnectNetworkApplianceUmbrellaAccountTool: Tool = {
  name: "disconnectNetworkApplianceUmbrellaAccount",
  scope: "",
  description: "Disconnect Umbrella account from this network",
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

export const disableNetworkApplianceUmbrellaProtectionTool: Tool = {
  name: "disableNetworkApplianceUmbrellaProtection",
  scope: "",
  description: "Disable umbrella protection for an MX network",
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

export const enableNetworkApplianceUmbrellaProtectionTool: Tool = {
  name: "enableNetworkApplianceUmbrellaProtection",
  scope: "",
  description: "Enable umbrella protection for an MX network",
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

export const excludeNetworkApplianceUmbrellaDomainsTool: Tool = {
  name: "excludeNetworkApplianceUmbrellaDomains",
  scope: "",
  description: "Specify one or more domain names to be excluded from being routed to Cisco Umbrella.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-domains": {
        type: "array",
        description: "Array of domain names"
      }
    },
    required: ["path-networkId","body-domains"],
  },
};

export const policiesNetworkApplianceUmbrellaTool: Tool = {
  name: "policiesNetworkApplianceUmbrella",
  scope: "",
  description: "Update umbrella policies applied to MX network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-policyIds": {
        type: "array",
        description: "Array of umbrella policy IDs"
      }
    },
    required: ["path-networkId","body-policyIds"],
  },
};

export const getNetworkApplianceUplinksUsageHistoryTool: Tool = {
  name: "getNetworkApplianceUplinksUsageHistory",
  scope: "",
  description: "Get the sent and received bytes for each uplink of a network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 365 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 10 minutes."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 600, 1800, 3600, 86400. The default is 60."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceVlansTool: Tool = {
  name: "getNetworkApplianceVlans",
  scope: "",
  description: "List the VLANs for an MX network",
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

export const createNetworkApplianceVlanTool: Tool = {
  name: "createNetworkApplianceVlan",
  scope: "",
  description: "Add a VLAN",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-id": {
        type: "string",
        description: "The VLAN ID of the new VLAN (must be between 1 and 4094)"
      },
      "body-name": {
        type: "string",
        description: "The name of the new VLAN"
      },
      "body-subnet": {
        type: "string",
        description: "The subnet of the VLAN"
      },
      "body-applianceIp": {
        type: "string",
        description: "The local IP of the appliance on the VLAN"
      },
      "body-groupPolicyId": {
        type: "string",
        description: "The id of the desired group policy to apply to the VLAN"
      },
      "body-templateVlanType": {
        type: "string",
        description: "Type of subnetting of the VLAN. Applicable only for template network."
      },
      "body-cidr": {
        type: "string",
        description: "CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN."
      },
      "body-mask": {
        type: "integer",
        description: "Mask used for the subnet of all bound to the template networks. Applicable only for template network."
      },
      "body-ipv6": {
        type: "object",
        description: "IPv6 configuration on the VLAN"
      },
      "body-dhcpHandling": {
        type: "string",
        description: "The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'"
      },
      "body-dhcpLeaseTime": {
        type: "string",
        description: "The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'"
      },
      "body-mandatoryDhcp": {
        type: "object",
        description: "Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above"
      },
      "body-dhcpBootOptionsEnabled": {
        type: "boolean",
        description: "Use DHCP boot options specified in other properties"
      },
      "body-dhcpOptions": {
        type: "array",
        description: "The list of DHCP options that will be included in DHCP responses. Each object in the list should have \"code\", \"type\", and \"value\" properties."
      },
      "body-adaptivePolicyGroupId": {
        type: "string",
        description: "Adaptive policy group ID this VLAN is assigned to."
      }
    },
    required: ["path-networkId","body-id","body-name"],
  },
};

export const getNetworkApplianceVlansSettingsTool: Tool = {
  name: "getNetworkApplianceVlansSettings",
  scope: "",
  description: "Returns the enabled status of VLANs for the network",
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

export const updateNetworkApplianceVlansSettingsTool: Tool = {
  name: "updateNetworkApplianceVlansSettings",
  scope: "",
  description: "Enable/Disable VLANs for the given network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-vlansEnabled": {
        type: "boolean",
        description: "Boolean indicating whether to enable (true) or disable (false) VLANs for the network"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkApplianceVlanTool: Tool = {
  name: "getNetworkApplianceVlan",
  scope: "",
  description: "Return a VLAN",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-vlanId": {
        type: "string",
        description: "Vlan ID"
      }
    },
    required: ["path-networkId","path-vlanId"],
  },
};

export const updateNetworkApplianceVlanTool: Tool = {
  name: "updateNetworkApplianceVlan",
  scope: "",
  description: "Update a VLAN",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-vlanId": {
        type: "string",
        description: "Vlan ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the VLAN"
      },
      "body-subnet": {
        type: "string",
        description: "The subnet of the VLAN"
      },
      "body-applianceIp": {
        type: "string",
        description: "The local IP of the appliance on the VLAN"
      },
      "body-groupPolicyId": {
        type: "string",
        description: "The id of the desired group policy to apply to the VLAN"
      },
      "body-vpnNatSubnet": {
        type: "string",
        description: "The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN"
      },
      "body-dhcpHandling": {
        type: "string",
        description: "The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'"
      },
      "body-dhcpRelayServerIps": {
        type: "array",
        description: "The IPs of the DHCP servers that DHCP requests should be relayed to"
      },
      "body-dhcpLeaseTime": {
        type: "string",
        description: "The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'"
      },
      "body-dhcpBootOptionsEnabled": {
        type: "boolean",
        description: "Use DHCP boot options specified in other properties"
      },
      "body-dhcpBootNextServer": {
        type: "string",
        description: "DHCP boot option to direct boot clients to the server to load the boot file from"
      },
      "body-dhcpBootFilename": {
        type: "string",
        description: "DHCP boot option for boot filename"
      },
      "body-fixedIpAssignments": {
        type: "object",
        description: "The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \"ip\" and \"name\" string fields. See the sample request/response for more details."
      },
      "body-reservedIpRanges": {
        type: "array",
        description: "The DHCP reserved IP ranges on the VLAN"
      },
      "body-dnsNameservers": {
        type: "string",
        description: "The DNS nameservers used for DHCP responses, either \"upstream_dns\", \"google_dns\", \"opendns\", or a newline seperated string of IP addresses or domain names"
      },
      "body-dhcpOptions": {
        type: "array",
        description: "The list of DHCP options that will be included in DHCP responses. Each object in the list should have \"code\", \"type\", and \"value\" properties."
      },
      "body-templateVlanType": {
        type: "string",
        description: "Type of subnetting of the VLAN. Applicable only for template network."
      },
      "body-cidr": {
        type: "string",
        description: "CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN."
      },
      "body-mask": {
        type: "integer",
        description: "Mask used for the subnet of all bound to the template networks. Applicable only for template network."
      },
      "body-ipv6": {
        type: "object",
        description: "IPv6 configuration on the VLAN"
      },
      "body-mandatoryDhcp": {
        type: "object",
        description: "Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above"
      },
      "body-adaptivePolicyGroupId": {
        type: "string",
        description: "Adaptive policy group ID that all traffic originating from this VLAN is assigned to."
      }
    },
    required: ["path-networkId","path-vlanId"],
  },
};

export const deleteNetworkApplianceVlanTool: Tool = {
  name: "deleteNetworkApplianceVlan",
  scope: "",
  description: "Delete a VLAN from a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-vlanId": {
        type: "string",
        description: "Vlan ID"
      }
    },
    required: ["path-networkId","path-vlanId"],
  },
};

export const getNetworkApplianceVpnBgpTool: Tool = {
  name: "getNetworkApplianceVpnBgp",
  scope: "",
  description: "Return a Hub BGP Configuration",
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

export const updateNetworkApplianceVpnBgpTool: Tool = {
  name: "updateNetworkApplianceVpnBgp",
  scope: "",
  description: "Update a Hub BGP Configuration",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Boolean value to enable or disable the BGP configuration. When BGP is enabled, the asNumber (ASN) will be autopopulated with the preconfigured ASN at other Hubs or a default value if there is no ASN configured."
      },
      "body-asNumber": {
        type: "integer",
        description: "An Autonomous System Number (ASN) is required if you are to run BGP and peer with another BGP Speaker outside of the Auto VPN domain. This ASN will be applied to the entire Auto VPN domain. The entire 4-byte ASN range is supported. So, the ASN must be an integer between 1 and 4294967295. When absent, this field is not updated. If no value exists then it defaults to 64512."
      },
      "body-ibgpHoldTimer": {
        type: "integer",
        description: "The iBGP holdtimer in seconds. The iBGP holdtimer must be an integer between 12 and 240. When absent, this field is not updated. If no value exists then it defaults to 240."
      },
      "body-neighbors": {
        type: "array",
        description: "List of BGP neighbors. This list replaces the existing set of neighbors. When absent, this field is not updated."
      }
    },
    required: ["path-networkId","body-enabled"],
  },
};

export const getNetworkApplianceVpnSiteToSiteVpnTool: Tool = {
  name: "getNetworkApplianceVpnSiteToSiteVpn",
  scope: "",
  description: "Return the site-to-site VPN settings of a network. Only valid for MX networks.",
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

export const updateNetworkApplianceVpnSiteToSiteVpnTool: Tool = {
  name: "updateNetworkApplianceVpnSiteToSiteVpn",
  scope: "",
  description: "Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-mode": {
        type: "string",
        description: "The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'"
      },
      "body-hubs": {
        type: "array",
        description: "The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required."
      },
      "body-subnets": {
        type: "array",
        description: "The list of subnets and their VPN presence."
      },
      "body-peerSgtCapable": {
        type: "boolean",
        description: "Whether or not Peer SGT is enabled for traffic to this VPN peer."
      },
      "body-subnet": {
        type: "object",
        description: "Configuration of subnet features"
      }
    },
    required: ["path-networkId","body-mode"],
  },
};

export const getNetworkApplianceWarmSpareTool: Tool = {
  name: "getNetworkApplianceWarmSpare",
  scope: "",
  description: "Return MX warm spare settings",
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

export const updateNetworkApplianceWarmSpareTool: Tool = {
  name: "updateNetworkApplianceWarmSpare",
  scope: "",
  description: "Update MX warm spare settings",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Enable warm spare"
      },
      "body-spareSerial": {
        type: "string",
        description: "Serial number of the warm spare appliance"
      },
      "body-uplinkMode": {
        type: "string",
        description: "Uplink mode, either virtual or public"
      },
      "body-virtualIp1": {
        type: "string",
        description: "The WAN 1 shared IP"
      },
      "body-virtualIp2": {
        type: "string",
        description: "The WAN 2 shared IP"
      }
    },
    required: ["path-networkId","body-enabled"],
  },
};

export const swapNetworkApplianceWarmSpareTool: Tool = {
  name: "swapNetworkApplianceWarmSpare",
  scope: "",
  description: "Swap MX primary and warm spare appliances",
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

export const getOrganizationApplianceDnsLocalProfilesTool: Tool = {
  name: "getOrganizationApplianceDnsLocalProfiles",
  scope: "",
  description: "Fetch the local DNS profiles used in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-profileIds": {
        type: "array",
        description: "Optional parameter to filter the results by profile IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationApplianceDnsLocalProfileTool: Tool = {
  name: "createOrganizationApplianceDnsLocalProfile",
  scope: "",
  description: "Create a new local DNS profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of profile"
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const getOrganizationApplianceDnsLocalProfilesAssignmentsTool: Tool = {
  name: "getOrganizationApplianceDnsLocalProfilesAssignments",
  scope: "",
  description: "Fetch the local DNS profile assignments in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-profileIds": {
        type: "array",
        description: "Optional parameter to filter the results by profile IDs"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter the results by network IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreateTool: Tool = {
  name: "bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreate",
  scope: "",
  description: "Assign the local DNS profile to networks in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-items": {
        type: "array",
        description: "List containing the network ID and Profile ID"
      }
    },
    required: ["path-organizationId","body-items"],
  },
};

export const createOrganizationApplianceDnsLocalProfilesAssignmentsBulkDeleteTool: Tool = {
  name: "createOrganizationApplianceDnsLocalProfilesAssignmentsBulkDelete",
  scope: "",
  description: "Unassign the local DNS profile to networks in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-items": {
        type: "array",
        description: "List containing the assignment ID"
      }
    },
    required: ["path-organizationId","body-items"],
  },
};

export const updateOrganizationApplianceDnsLocalProfileTool: Tool = {
  name: "updateOrganizationApplianceDnsLocalProfile",
  scope: "",
  description: "Update a local DNS profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-profileId": {
        type: "string",
        description: "Profile ID"
      },
      "body-name": {
        type: "string",
        description: "Name of profile"
      }
    },
    required: ["path-organizationId","path-profileId","body-name"],
  },
};

export const deleteOrganizationApplianceDnsLocalProfileTool: Tool = {
  name: "deleteOrganizationApplianceDnsLocalProfile",
  scope: "",
  description: "Deletes a local DNS profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-profileId": {
        type: "string",
        description: "Profile ID"
      }
    },
    required: ["path-organizationId","path-profileId"],
  },
};

export const getOrganizationApplianceDnsLocalRecordsTool: Tool = {
  name: "getOrganizationApplianceDnsLocalRecords",
  scope: "",
  description: "Fetch the DNS records used in local DNS profiles",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-profileIds": {
        type: "array",
        description: "Optional parameter to filter the results by profile IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationApplianceDnsLocalRecordTool: Tool = {
  name: "createOrganizationApplianceDnsLocalRecord",
  scope: "",
  description: "Create a new local DNS record",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-hostname": {
        type: "string",
        description: "Hostname for the DNS record"
      },
      "body-address": {
        type: "string",
        description: "IP for the DNS record"
      },
      "body-profile": {
        type: "object",
        description: "The profile the DNS record is associated with"
      }
    },
    required: ["path-organizationId","body-hostname","body-address","body-profile"],
  },
};

export const updateOrganizationApplianceDnsLocalRecordTool: Tool = {
  name: "updateOrganizationApplianceDnsLocalRecord",
  scope: "",
  description: "Updates a local DNS record",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-recordId": {
        type: "string",
        description: "Record ID"
      },
      "body-hostname": {
        type: "string",
        description: "Hostname for the DNS record"
      },
      "body-address": {
        type: "string",
        description: "IP for the DNS record"
      },
      "body-profile": {
        type: "object",
        description: "The profile the DNS record is associated with"
      }
    },
    required: ["path-organizationId","path-recordId"],
  },
};

export const deleteOrganizationApplianceDnsLocalRecordTool: Tool = {
  name: "deleteOrganizationApplianceDnsLocalRecord",
  scope: "",
  description: "Deletes a local DNS record",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-recordId": {
        type: "string",
        description: "Record ID"
      }
    },
    required: ["path-organizationId","path-recordId"],
  },
};

export const getOrganizationApplianceDnsSplitProfilesTool: Tool = {
  name: "getOrganizationApplianceDnsSplitProfiles",
  scope: "",
  description: "Fetch the split DNS profiles used in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-profileIds": {
        type: "array",
        description: "Optional parameter to filter the results by profile IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationApplianceDnsSplitProfileTool: Tool = {
  name: "createOrganizationApplianceDnsSplitProfile",
  scope: "",
  description: "Create a new split DNS profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of profile"
      },
      "body-hostnames": {
        type: "array",
        description: "The hostname patterns to match for redirection. For more information on Split DNS hostname pattern formatting, please consult the Split DNS KB."
      },
      "body-nameservers": {
        type: "object",
        description: "Contains the nameserver information for redirection."
      }
    },
    required: ["path-organizationId","body-name","body-hostnames","body-nameservers"],
  },
};

export const getOrganizationApplianceDnsSplitProfilesAssignmentsTool: Tool = {
  name: "getOrganizationApplianceDnsSplitProfilesAssignments",
  scope: "",
  description: "Fetch the split DNS profile assignments in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-profileIds": {
        type: "array",
        description: "Optional parameter to filter the results by profile IDs"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter the results by network IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationApplianceDnsSplitProfilesAssignmentsBulkCreateTool: Tool = {
  name: "createOrganizationApplianceDnsSplitProfilesAssignmentsBulkCreate",
  scope: "",
  description: "Assign the split DNS profile to networks in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-items": {
        type: "array",
        description: "List containing the network ID and Profile ID"
      }
    },
    required: ["path-organizationId","body-items"],
  },
};

export const createOrganizationApplianceDnsSplitProfilesAssignmentsBulkDeleteTool: Tool = {
  name: "createOrganizationApplianceDnsSplitProfilesAssignmentsBulkDelete",
  scope: "",
  description: "Unassign the split DNS profile to networks in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-items": {
        type: "array",
        description: "List containing the assignment ID"
      }
    },
    required: ["path-organizationId","body-items"],
  },
};

export const updateOrganizationApplianceDnsSplitProfileTool: Tool = {
  name: "updateOrganizationApplianceDnsSplitProfile",
  scope: "",
  description: "Update a split DNS profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-profileId": {
        type: "string",
        description: "Profile ID"
      },
      "body-name": {
        type: "string",
        description: "Name of profile"
      },
      "body-hostnames": {
        type: "array",
        description: "The hostname patterns to match for redirection. For more information on Split DNS hostname pattern formatting, please consult the Split DNS KB."
      },
      "body-nameservers": {
        type: "object",
        description: "Contains the nameserver information for redirection."
      }
    },
    required: ["path-organizationId","path-profileId"],
  },
};

export const deleteOrganizationApplianceDnsSplitProfileTool: Tool = {
  name: "deleteOrganizationApplianceDnsSplitProfile",
  scope: "",
  description: "Deletes a split DNS profile",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-profileId": {
        type: "string",
        description: "Profile ID"
      }
    },
    required: ["path-organizationId","path-profileId"],
  },
};

export const getOrganizationApplianceFirewallMulticastForwardingByNetworkTool: Tool = {
  name: "getOrganizationApplianceFirewallMulticastForwardingByNetwork",
  scope: "",
  description: "List Static Multicasting forwarding settings for MX networks",
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
        description: "Optional parameter to filter the results by network IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApplianceSdwanInternetPoliciesTool: Tool = {
  name: "getOrganizationApplianceSdwanInternetPolicies",
  scope: "",
  description: "Get the SDWAN internet traffic preferences for an MX network",
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

export const getOrganizationApplianceSecurityEventsTool: Tool = {
  name: "getOrganizationApplianceSecurityEvents",
  scope: "",
  description: "List the security events for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 365 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days."
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
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApplianceSecurityIntrusionTool: Tool = {
  name: "getOrganizationApplianceSecurityIntrusion",
  scope: "",
  description: "Returns all supported intrusion settings for an organization",
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

export const updateOrganizationApplianceSecurityIntrusionTool: Tool = {
  name: "updateOrganizationApplianceSecurityIntrusion",
  scope: "",
  description: "Sets supported intrusion settings for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-allowedRules": {
        type: "array",
        description: "Sets a list of specific SNORT signatures to allow"
      }
    },
    required: ["path-organizationId","body-allowedRules"],
  },
};

export const getOrganizationApplianceTrafficShapingVpnExclusionsByNetworkTool: Tool = {
  name: "getOrganizationApplianceTrafficShapingVpnExclusionsByNetwork",
  scope: "",
  description: "Display VPN exclusion rules for MX networks.",
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
        description: "Optional parameter to filter the results by network IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApplianceUplinkStatusesTool: Tool = {
  name: "getOrganizationApplianceUplinkStatuses",
  scope: "",
  description: "List the uplink status of every Meraki MX and Z series appliances in the organization",
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
        description: "A list of network IDs. The returned devices will be filtered to only include these networks."
      },
      "query-serials": {
        type: "array",
        description: "A list of serial numbers. The returned devices will be filtered to only include these serials."
      },
      "query-iccids": {
        type: "array",
        description: "A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApplianceUplinksStatusesOverviewTool: Tool = {
  name: "getOrganizationApplianceUplinksStatusesOverview",
  scope: "",
  description: "Returns an overview of uplink statuses",
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

export const getOrganizationApplianceUplinksUsageByNetworkTool: Tool = {
  name: "getOrganizationApplianceUplinksUsageByNetwork",
  scope: "",
  description: "Get the sent and received bytes for each uplink of all MX and Z networks within an organization. If more than one device was active during the specified timespan, then the sent and received bytes will be aggregated by interface.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 30 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 14 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApplianceVlansTool: Tool = {
  name: "getOrganizationApplianceVlans",
  scope: "",
  description: "List the VLANs for an Organization",
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
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApplianceVpnStatsTool: Tool = {
  name: "getOrganizationApplianceVpnStats",
  scope: "",
  description: "Show VPN history stat for networks in an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 300. Default is 300."
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
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApplianceVpnStatusesTool: Tool = {
  name: "getOrganizationApplianceVpnStatuses",
  scope: "",
  description: "Show VPN status for networks in an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 300. Default is 300."
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

export const getOrganizationApplianceVpnThirdPartyVPNPeersTool: Tool = {
  name: "getOrganizationApplianceVpnThirdPartyVPNPeers",
  scope: "",
  description: "Return the third party VPN peers for an organization",
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

export const updateOrganizationApplianceVpnThirdPartyVPNPeersTool: Tool = {
  name: "updateOrganizationApplianceVpnThirdPartyVPNPeers",
  scope: "",
  description: "Update the third party VPN peers for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-peers": {
        type: "array",
        description: "The list of VPN peers"
      }
    },
    required: ["path-organizationId","body-peers"],
  },
};

export const getOrganizationApplianceVpnVpnFirewallRulesTool: Tool = {
  name: "getOrganizationApplianceVpnVpnFirewallRules",
  scope: "",
  description: "Return the firewall rules for an organization's site-to-site VPN",
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

export const updateOrganizationApplianceVpnVpnFirewallRulesTool: Tool = {
  name: "updateOrganizationApplianceVpnVpnFirewallRules",
  scope: "",
  description: "Update the firewall rules of an organization's site-to-site VPN",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the firewall rules (not including the default rule)"
      },
      "body-syslogDefaultRule": {
        type: "boolean",
        description: "Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)"
      }
    },
    required: ["path-organizationId"],
  },
};

export const applianceTools = [
  getDeviceApplianceDhcpSubnetsTool,
  getDeviceAppliancePerformanceTool,
  getDeviceAppliancePrefixesDelegatedTool,
  getDeviceAppliancePrefixesDelegatedVlanAssignmentsTool,
  getDeviceApplianceRadioSettingsTool,
  updateDeviceApplianceRadioSettingsTool,
  getDeviceApplianceUplinksSettingsTool,
  updateDeviceApplianceUplinksSettingsTool,
  createDeviceApplianceVmxAuthenticationTokenTool,
  getNetworkApplianceClientSecurityEventsTool,
  getNetworkApplianceConnectivityMonitoringDestinationsTool,
  updateNetworkApplianceConnectivityMonitoringDestinationsTool,
  getNetworkApplianceContentFilteringTool,
  updateNetworkApplianceContentFilteringTool,
  getNetworkApplianceContentFilteringCategoriesTool,
  getNetworkApplianceFirewallCellularFirewallRulesTool,
  updateNetworkApplianceFirewallCellularFirewallRulesTool,
  getNetworkApplianceFirewallFirewalledServicesTool,
  getNetworkApplianceFirewallFirewalledServiceTool,
  updateNetworkApplianceFirewallFirewalledServiceTool,
  getNetworkApplianceFirewallInboundCellularFirewallRulesTool,
  updateNetworkApplianceFirewallInboundCellularFirewallRulesTool,
  getNetworkApplianceFirewallInboundFirewallRulesTool,
  updateNetworkApplianceFirewallInboundFirewallRulesTool,
  getNetworkApplianceFirewallL3FirewallRulesTool,
  updateNetworkApplianceFirewallL3FirewallRulesTool,
  getNetworkApplianceFirewallL7FirewallRulesTool,
  updateNetworkApplianceFirewallL7FirewallRulesTool,
  getNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesTool,
  updateNetworkApplianceFirewallMulticastForwardingTool,
  getNetworkApplianceFirewallOneToManyNatRulesTool,
  updateNetworkApplianceFirewallOneToManyNatRulesTool,
  getNetworkApplianceFirewallOneToOneNatRulesTool,
  updateNetworkApplianceFirewallOneToOneNatRulesTool,
  getNetworkApplianceFirewallPortForwardingRulesTool,
  updateNetworkApplianceFirewallPortForwardingRulesTool,
  getNetworkApplianceFirewallSettingsTool,
  updateNetworkApplianceFirewallSettingsTool,
  getNetworkAppliancePortsTool,
  getNetworkAppliancePortTool,
  updateNetworkAppliancePortTool,
  getNetworkAppliancePrefixesDelegatedStaticsTool,
  createNetworkAppliancePrefixesDelegatedStaticTool,
  getNetworkAppliancePrefixesDelegatedStaticTool,
  updateNetworkAppliancePrefixesDelegatedStaticTool,
  deleteNetworkAppliancePrefixesDelegatedStaticTool,
  getNetworkApplianceRfProfilesTool,
  createNetworkApplianceRfProfileTool,
  updateNetworkApplianceRfProfileTool,
  deleteNetworkApplianceRfProfileTool,
  getNetworkApplianceRfProfileTool,
  updateNetworkApplianceSdwanInternetPoliciesTool,
  getNetworkApplianceSecurityEventsTool,
  getNetworkApplianceSecurityIntrusionTool,
  updateNetworkApplianceSecurityIntrusionTool,
  getNetworkApplianceSecurityMalwareTool,
  updateNetworkApplianceSecurityMalwareTool,
  getNetworkApplianceSettingsTool,
  updateNetworkApplianceSettingsTool,
  getNetworkApplianceSingleLanTool,
  updateNetworkApplianceSingleLanTool,
  getNetworkApplianceSsidsTool,
  getNetworkApplianceSsidTool,
  updateNetworkApplianceSsidTool,
  getNetworkApplianceStaticRoutesTool,
  createNetworkApplianceStaticRouteTool,
  getNetworkApplianceStaticRouteTool,
  updateNetworkApplianceStaticRouteTool,
  deleteNetworkApplianceStaticRouteTool,
  getNetworkApplianceTrafficShapingTool,
  updateNetworkApplianceTrafficShapingTool,
  getNetworkApplianceTrafficShapingCustomPerformanceClassesTool,
  createNetworkApplianceTrafficShapingCustomPerformanceClassTool,
  getNetworkApplianceTrafficShapingCustomPerformanceClassTool,
  updateNetworkApplianceTrafficShapingCustomPerformanceClassTool,
  deleteNetworkApplianceTrafficShapingCustomPerformanceClassTool,
  updateNetworkApplianceTrafficShapingRulesTool,
  getNetworkApplianceTrafficShapingRulesTool,
  getNetworkApplianceTrafficShapingUplinkBandwidthTool,
  updateNetworkApplianceTrafficShapingUplinkBandwidthTool,
  getNetworkApplianceTrafficShapingUplinkSelectionTool,
  updateNetworkApplianceTrafficShapingUplinkSelectionTool,
  updateNetworkApplianceTrafficShapingVpnExclusionsTool,
  connectNetworkApplianceUmbrellaAccountTool,
  disconnectNetworkApplianceUmbrellaAccountTool,
  disableNetworkApplianceUmbrellaProtectionTool,
  enableNetworkApplianceUmbrellaProtectionTool,
  excludeNetworkApplianceUmbrellaDomainsTool,
  policiesNetworkApplianceUmbrellaTool,
  getNetworkApplianceUplinksUsageHistoryTool,
  getNetworkApplianceVlansTool,
  createNetworkApplianceVlanTool,
  getNetworkApplianceVlansSettingsTool,
  updateNetworkApplianceVlansSettingsTool,
  getNetworkApplianceVlanTool,
  updateNetworkApplianceVlanTool,
  deleteNetworkApplianceVlanTool,
  getNetworkApplianceVpnBgpTool,
  updateNetworkApplianceVpnBgpTool,
  getNetworkApplianceVpnSiteToSiteVpnTool,
  updateNetworkApplianceVpnSiteToSiteVpnTool,
  getNetworkApplianceWarmSpareTool,
  updateNetworkApplianceWarmSpareTool,
  swapNetworkApplianceWarmSpareTool,
  getOrganizationApplianceDnsLocalProfilesTool,
  createOrganizationApplianceDnsLocalProfileTool,
  getOrganizationApplianceDnsLocalProfilesAssignmentsTool,
  bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreateTool,
  createOrganizationApplianceDnsLocalProfilesAssignmentsBulkDeleteTool,
  updateOrganizationApplianceDnsLocalProfileTool,
  deleteOrganizationApplianceDnsLocalProfileTool,
  getOrganizationApplianceDnsLocalRecordsTool,
  createOrganizationApplianceDnsLocalRecordTool,
  updateOrganizationApplianceDnsLocalRecordTool,
  deleteOrganizationApplianceDnsLocalRecordTool,
  getOrganizationApplianceDnsSplitProfilesTool,
  createOrganizationApplianceDnsSplitProfileTool,
  getOrganizationApplianceDnsSplitProfilesAssignmentsTool,
  createOrganizationApplianceDnsSplitProfilesAssignmentsBulkCreateTool,
  createOrganizationApplianceDnsSplitProfilesAssignmentsBulkDeleteTool,
  updateOrganizationApplianceDnsSplitProfileTool,
  deleteOrganizationApplianceDnsSplitProfileTool,
  getOrganizationApplianceFirewallMulticastForwardingByNetworkTool,
  getOrganizationApplianceSdwanInternetPoliciesTool,
  getOrganizationApplianceSecurityEventsTool,
  getOrganizationApplianceSecurityIntrusionTool,
  updateOrganizationApplianceSecurityIntrusionTool,
  getOrganizationApplianceTrafficShapingVpnExclusionsByNetworkTool,
  getOrganizationApplianceUplinkStatusesTool,
  getOrganizationApplianceUplinksStatusesOverviewTool,
  getOrganizationApplianceUplinksUsageByNetworkTool,
  getOrganizationApplianceVlansTool,
  getOrganizationApplianceVpnStatsTool,
  getOrganizationApplianceVpnStatusesTool,
  getOrganizationApplianceVpnThirdPartyVPNPeersTool,
  updateOrganizationApplianceVpnThirdPartyVPNPeersTool,
  getOrganizationApplianceVpnVpnFirewallRulesTool,
  updateOrganizationApplianceVpnVpnFirewallRulesTool
];