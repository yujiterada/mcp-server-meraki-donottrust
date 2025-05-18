import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getDeviceCellularGatewayLanTool: Tool = {
  name: "getDeviceCellularGatewayLan",
  scope: "",
  description: "Show the LAN Settings of a MG",
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

export const updateDeviceCellularGatewayLanTool: Tool = {
  name: "updateDeviceCellularGatewayLan",
  scope: "",
  description: "Update the LAN Settings for a single MG.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-reservedIpRanges": {
        type: "array",
        description: "list of all reserved IP ranges for a single MG"
      },
      "body-fixedIpAssignments": {
        type: "array",
        description: "list of all fixed IP assignments for a single MG"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCellularGatewayPortForwardingRulesTool: Tool = {
  name: "getDeviceCellularGatewayPortForwardingRules",
  scope: "",
  description: "Returns the port forwarding rules for a single MG.",
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

export const updateDeviceCellularGatewayPortForwardingRulesTool: Tool = {
  name: "updateDeviceCellularGatewayPortForwardingRules",
  scope: "",
  description: "Updates the port forwarding rules for a single MG.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-rules": {
        type: "array",
        description: "An array of port forwarding params"
      }
    },
    required: ["path-serial"],
  },
};

export const getNetworkCellularGatewayConnectivityMonitoringDestinationsTool: Tool = {
  name: "getNetworkCellularGatewayConnectivityMonitoringDestinations",
  scope: "",
  description: "Return the connectivity testing destinations for an MG network",
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

export const updateNetworkCellularGatewayConnectivityMonitoringDestinationsTool: Tool = {
  name: "updateNetworkCellularGatewayConnectivityMonitoringDestinations",
  scope: "",
  description: "Update the connectivity testing destinations for an MG network",
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

export const getNetworkCellularGatewayDhcpTool: Tool = {
  name: "getNetworkCellularGatewayDhcp",
  scope: "",
  description: "List common DHCP settings of MGs",
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

export const updateNetworkCellularGatewayDhcpTool: Tool = {
  name: "updateNetworkCellularGatewayDhcp",
  scope: "",
  description: "Update common DHCP settings of MGs",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-dhcpLeaseTime": {
        type: "string",
        description: "DHCP Lease time for all MG of the network. Possible values are '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'."
      },
      "body-dnsNameservers": {
        type: "string",
        description: "DNS name servers mode for all MG of the network. Possible values are: 'upstream_dns', 'google_dns', 'opendns', 'custom'."
      },
      "body-dnsCustomNameservers": {
        type: "array",
        description: "list of fixed IPs representing the the DNS Name servers when the mode is 'custom'"
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkCellularGatewaySubnetPoolTool: Tool = {
  name: "getNetworkCellularGatewaySubnetPool",
  scope: "",
  description: "Return the subnet pool and mask configured for MGs in the network.",
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

export const updateNetworkCellularGatewaySubnetPoolTool: Tool = {
  name: "updateNetworkCellularGatewaySubnetPool",
  scope: "",
  description: "Update the subnet pool and mask configuration for MGs in the network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-mask": {
        type: "integer",
        description: "Mask used for the subnet of all MGs in  this network."
      },
      "body-cidr": {
        type: "string",
        description: "CIDR of the pool of subnets. Each MG in this network will automatically pick a subnet from this pool."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkCellularGatewayUplinkTool: Tool = {
  name: "getNetworkCellularGatewayUplink",
  scope: "",
  description: "Returns the uplink settings for your MG network.",
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

export const updateNetworkCellularGatewayUplinkTool: Tool = {
  name: "updateNetworkCellularGatewayUplink",
  scope: "",
  description: "Updates the uplink settings for your MG network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-bandwidthLimits": {
        type: "object",
        description: "The bandwidth settings for the 'cellular' uplink"
      }
    },
    required: ["path-networkId"],
  },
};

export const getOrganizationCellularGatewayEsimsInventoryTool: Tool = {
  name: "getOrganizationCellularGatewayEsimsInventory",
  scope: "",
  description: "The eSIM inventory of a given organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-eids": {
        type: "array",
        description: "Optional parameter to filter the results by EID."
      }
    },
    required: ["path-organizationId"],
  },
};

export const updateOrganizationCellularGatewayEsimsInventoryTool: Tool = {
  name: "updateOrganizationCellularGatewayEsimsInventory",
  scope: "",
  description: "Toggle the status of an eSIM",
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
      "body-status": {
        type: "string",
        description: "Status the eSIM will be updated to"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationCellularGatewayEsimsServiceProvidersTool: Tool = {
  name: "getOrganizationCellularGatewayEsimsServiceProviders",
  scope: "",
  description: "Service providers customers can add accounts for.",
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

export const getOrganizationCellularGatewayEsimsServiceProvidersAccountsTool: Tool = {
  name: "getOrganizationCellularGatewayEsimsServiceProvidersAccounts",
  scope: "",
  description: "Inventory of service provider accounts tied to the organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-accountIds": {
        type: "array",
        description: "Optional parameter to filter the results by service provider account IDs."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationCellularGatewayEsimsServiceProvidersAccountTool: Tool = {
  name: "createOrganizationCellularGatewayEsimsServiceProvidersAccount",
  scope: "",
  description: "Add a service provider account.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-accountId": {
        type: "string",
        description: "Service provider account ID"
      },
      "body-apiKey": {
        type: "string",
        description: "Service provider account API key"
      },
      "body-serviceProvider": {
        type: "object",
        description: "Service Provider information"
      },
      "body-title": {
        type: "string",
        description: "Service provider account name"
      },
      "body-username": {
        type: "string",
        description: "Service provider account username"
      }
    },
    required: ["path-organizationId","body-accountId","body-apiKey","body-serviceProvider","body-title","body-username"],
  },
};

export const getOrganizationCellularGatewayEsimsServiceProvidersAccountsCommunicationPlansTool: Tool = {
  name: "getOrganizationCellularGatewayEsimsServiceProvidersAccountsCommu",
  scope: "",
  description: "The communication plans available for a given provider.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-accountIds": {
        type: "array",
        description: "Account IDs that communication plans will be fetched for"
      }
    },
    required: ["path-organizationId","query-accountIds"],
  },
};

export const getOrganizationCellularGatewayEsimsServiceProvidersAccountsRatePlansTool: Tool = {
  name: "getOrganizationCellularGatewayEsimsServiceProvidersAccountsRateP",
  scope: "",
  description: "The rate plans available for a given provider.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-accountIds": {
        type: "array",
        description: "Account IDs that rate plans will be fetched for"
      }
    },
    required: ["path-organizationId","query-accountIds"],
  },
};

export const updateOrganizationCellularGatewayEsimsServiceProvidersAccountTool: Tool = {
  name: "updateOrganizationCellularGatewayEsimsServiceProvidersAccount",
  scope: "",
  description: "Edit service provider account info stored in Meraki's database.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-accountId": {
        type: "string",
        description: "Account ID"
      },
      "body-title": {
        type: "string",
        description: "Service provider account name used on the Meraki UI"
      },
      "body-apiKey": {
        type: "string",
        description: "Service provider account API key"
      }
    },
    required: ["path-organizationId","path-accountId"],
  },
};

export const deleteOrganizationCellularGatewayEsimsServiceProvidersAccountTool: Tool = {
  name: "deleteOrganizationCellularGatewayEsimsServiceProvidersAccount",
  scope: "",
  description: "Remove a service provider account's integration with the Dashboard.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-accountId": {
        type: "string",
        description: "Account ID"
      }
    },
    required: ["path-organizationId","path-accountId"],
  },
};

export const createOrganizationCellularGatewayEsimsSwapTool: Tool = {
  name: "createOrganizationCellularGatewayEsimsSwap",
  scope: "",
  description: "Swap which profile an eSIM uses.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-swaps": {
        type: "array",
        description: "Each object represents a swap for one eSIM"
      }
    },
    required: ["path-organizationId","body-swaps"],
  },
};

export const updateOrganizationCellularGatewayEsimsSwapTool: Tool = {
  name: "updateOrganizationCellularGatewayEsimsSwap",
  scope: "",
  description: "Get the status of a profile swap.",
  inputSchema: {
    type: "object",
    properties: {
      "path-id": {
        type: "string",
        description: "eSIM EID"
      },
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      }
    },
    required: ["path-id","path-organizationId"],
  },
};

export const getOrganizationCellularGatewayUplinkStatusesTool: Tool = {
  name: "getOrganizationCellularGatewayUplinkStatuses",
  scope: "",
  description: "List the uplink status of every Meraki MG cellular gateway in the organization",
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

export const cellularGatewayTools = [
  getDeviceCellularGatewayLanTool,
  updateDeviceCellularGatewayLanTool,
  getDeviceCellularGatewayPortForwardingRulesTool,
  updateDeviceCellularGatewayPortForwardingRulesTool,
  getNetworkCellularGatewayConnectivityMonitoringDestinationsTool,
  updateNetworkCellularGatewayConnectivityMonitoringDestinationsTool,
  getNetworkCellularGatewayDhcpTool,
  updateNetworkCellularGatewayDhcpTool,
  getNetworkCellularGatewaySubnetPoolTool,
  updateNetworkCellularGatewaySubnetPoolTool,
  getNetworkCellularGatewayUplinkTool,
  updateNetworkCellularGatewayUplinkTool,
  getOrganizationCellularGatewayEsimsInventoryTool,
  updateOrganizationCellularGatewayEsimsInventoryTool,
  getOrganizationCellularGatewayEsimsServiceProvidersTool,
  getOrganizationCellularGatewayEsimsServiceProvidersAccountsTool,
  createOrganizationCellularGatewayEsimsServiceProvidersAccountTool,
  getOrganizationCellularGatewayEsimsServiceProvidersAccountsCommunicationPlansTool,
  getOrganizationCellularGatewayEsimsServiceProvidersAccountsRatePlansTool,
  updateOrganizationCellularGatewayEsimsServiceProvidersAccountTool,
  deleteOrganizationCellularGatewayEsimsServiceProvidersAccountTool,
  createOrganizationCellularGatewayEsimsSwapTool,
  updateOrganizationCellularGatewayEsimsSwapTool,
  getOrganizationCellularGatewayUplinkStatusesTool
];