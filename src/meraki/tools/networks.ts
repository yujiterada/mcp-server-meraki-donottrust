import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getNetworkTool: Tool = {
  name: "getNetwork",
  scope: "networks",
  description: "Return a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkTool: Tool = {
  name: "updateNetwork",
  scope: "networks",
  description: "Update a network",
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
            description: "The name of the network"
          },
          timeZone: {
            type: "string",
            description: "The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>"
          },
          tags: {
            type: "array",
            description: "A list of tags to be applied to the network"
          },
          enrollmentString: {
            type: "string",
            description: "A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break."
          },
          notes: {
            type: "string",
            description: "Add any notes or additional information about this network here."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const deleteNetworkTool: Tool = {
  name: "deleteNetwork",
  scope: "networks",
  description: "Delete a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkAlertsHistoryTool: Tool = {
  name: "getNetworkAlertsHistory",
  scope: "networks",
  description: "Return the alert history for this network",
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

export const getNetworkAlertsSettingsTool: Tool = {
  name: "getNetworkAlertsSettings",
  scope: "networks",
  description: "Return the alert configuration for this network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkAlertsSettingsTool: Tool = {
  name: "updateNetworkAlertsSettings",
  scope: "networks",
  description: "Update the alert configuration for this network",
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
          defaultDestinations: {
            type: "object",
            description: "The network-wide destinations for all alerts on the network."
          },
          alerts: {
            type: "array",
            description: "Alert-specific configuration for each type. Only alerts that pertain to the network can be updated."
          },
          muting: {
            type: "object",
            description: "Mute alerts under certain conditions"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const bindNetworkTool: Tool = {
  name: "bindNetwork",
  scope: "networks",
  description: "Bind a network to a template.",
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
          configTemplateId: {
            type: "string",
            description: "The ID of the template to which the network should be bound."
          },
          autoBind: {
            type: "boolean",
            description: "Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model."
          }
        }
      }
    },
    required: ["path.networkId, body.configTemplateId"],
  },
};

export const getNetworkBluetoothClientsTool: Tool = {
  name: "getNetworkBluetoothClients",
  scope: "networks",
  description: "List the Bluetooth clients seen by APs in this network",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 7 days from today."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          includeConnectivityHistory: {
            type: "boolean",
            description: "Include the connectivity history for this client"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkBluetoothClientTool: Tool = {
  name: "getNetworkBluetoothClient",
  scope: "networks",
  description: "Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.",
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
          bluetoothClientId: {
            type: "string",
            description: "Bluetooth client ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          includeConnectivityHistory: {
            type: "boolean",
            description: "Include the connectivity history for this client"
          },
          connectivityHistoryTimespan: {
            type: "integer",
            description: "The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used."
          }
        }
      }
    },
    required: ["path.networkId, path.bluetoothClientId"],
  },
};

export const getNetworkClientsTool: Tool = {
  name: "getNetworkClients",
  scope: "networks",
  description: "List the clients that have used this network in the timespan. The data is updated at most once every five minutes.",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 5000. Default is 10."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          statuses: {
            type: "array",
            description: "Filters clients based on status. Can be one of 'Online' or 'Offline'."
          },
          ip: {
            type: "string",
            description: "Filters clients based on a partial or full match for the ip address field."
          },
          ip6: {
            type: "string",
            description: "Filters clients based on a partial or full match for the ip6 address field."
          },
          ip6Local: {
            type: "string",
            description: "Filters clients based on a partial or full match for the ip6Local address field."
          },
          mac: {
            type: "string",
            description: "Filters clients based on a partial or full match for the mac address field."
          },
          os: {
            type: "string",
            description: "Filters clients based on a partial or full match for the os (operating system) field."
          },
          pskGroup: {
            type: "string",
            description: "Filters clients based on partial or full match for the iPSK name field."
          },
          description: {
            type: "string",
            description: "Filters clients based on a partial or full match for the description field."
          },
          vlan: {
            type: "string",
            description: "Filters clients based on the full match for the VLAN field."
          },
          namedVlan: {
            type: "string",
            description: "Filters clients based on the partial or full match for the named VLAN field."
          },
          recentDeviceConnections: {
            type: "array",
            description: "Filters clients based on recent connection type. Can be one of 'Wired' or 'Wireless'."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkClientsApplicationUsageTool: Tool = {
  name: "getNetworkClientsApplicationUsage",
  scope: "networks",
  description: "Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.",
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
          clients: {
            type: "string",
            description: "A list of client keys, MACs or IPs separated by comma."
          },
          ssidNumber: {
            type: "integer",
            description: "An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
          },
          t1: {
            type: "string",
            description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
          }
        }
      }
    },
    required: ["path.networkId, query.clients"],
  },
};

export const getNetworkClientsBandwidthUsageHistoryTool: Tool = {
  name: "getNetworkClientsBandwidthUsageHistory",
  scope: "networks",
  description: "Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 30 days from today."
          },
          t1: {
            type: "string",
            description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
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

export const getNetworkClientsOverviewTool: Tool = {
  name: "getNetworkClientsOverview",
  scope: "networks",
  description: "Return overview statistics for network clients",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
          },
          t1: {
            type: "string",
            description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
          },
          resolution: {
            type: "integer",
            description: "The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2592000. The default is 604800."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const provisionNetworkClientsTool: Tool = {
  name: "provisionNetworkClients",
  scope: "networks",
  description: "Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.",
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
          clients: {
            type: "array",
            description: "The array of clients to provision"
          },
          devicePolicy: {
            type: "string",
            description: "The policy to apply to the specified client. Can be 'Group policy', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required."
          },
          groupPolicyId: {
            type: "string",
            description: "The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to \"Group policy\". Otherwise this is ignored."
          },
          policiesBySecurityAppliance: {
            type: "object",
            description: "An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)"
          },
          policiesBySsid: {
            type: "object",
            description: "An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy"
          }
        }
      }
    },
    required: ["path.networkId, body.clients, body.devicePolicy"],
  },
};

export const getNetworkClientsUsageHistoriesTool: Tool = {
  name: "getNetworkClientsUsageHistories",
  scope: "networks",
  description: "Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.",
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
          clients: {
            type: "string",
            description: "A list of client keys, MACs or IPs separated by comma."
          },
          ssidNumber: {
            type: "integer",
            description: "An SSID number to include. If not specified, events for all SSIDs will be returned."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
          },
          t1: {
            type: "string",
            description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
          }
        }
      }
    },
    required: ["path.networkId, query.clients"],
  },
};

export const getNetworkClientTool: Tool = {
  name: "getNetworkClient",
  scope: "networks",
  description: "Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
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
          clientId: {
            type: "string",
            description: "Client ID"
          }
        }
      }
    },
    required: ["path.networkId, path.clientId"],
  },
};

export const getNetworkClientPolicyTool: Tool = {
  name: "getNetworkClientPolicy",
  scope: "networks",
  description: "Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
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
          clientId: {
            type: "string",
            description: "Client ID"
          }
        }
      }
    },
    required: ["path.networkId, path.clientId"],
  },
};

export const updateNetworkClientPolicyTool: Tool = {
  name: "updateNetworkClientPolicy",
  scope: "networks",
  description: "Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
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
          clientId: {
            type: "string",
            description: "Client ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          devicePolicy: {
            type: "string",
            description: "The policy to assign. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required."
          },
          groupPolicyId: {
            type: "string",
            description: "[Optional] If 'devicePolicy' is set to 'Group policy' this param is used to specify the group policy ID."
          }
        }
      }
    },
    required: ["path.networkId, path.clientId, body.devicePolicy"],
  },
};

export const getNetworkClientSplashAuthorizationStatusTool: Tool = {
  name: "getNetworkClientSplashAuthorizationStatus",
  scope: "networks",
  description: "Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
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
          clientId: {
            type: "string",
            description: "Client ID"
          }
        }
      }
    },
    required: ["path.networkId, path.clientId"],
  },
};

export const updateNetworkClientSplashAuthorizationStatusTool: Tool = {
  name: "updateNetworkClientSplashAuthorizationStatus",
  scope: "networks",
  description: "Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
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
          clientId: {
            type: "string",
            description: "Client ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          ssids: {
            type: "object",
            description: "The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs"
          }
        }
      }
    },
    required: ["path.networkId, path.clientId, body.ssids"],
  },
};

export const getNetworkClientTrafficHistoryTool: Tool = {
  name: "getNetworkClientTrafficHistory",
  scope: "networks",
  description: "Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
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
          clientId: {
            type: "string",
            description: "Client ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000."
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
    required: ["path.networkId, path.clientId"],
  },
};

export const getNetworkClientUsageHistoryTool: Tool = {
  name: "getNetworkClientUsageHistory",
  scope: "networks",
  description: "Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
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
          clientId: {
            type: "string",
            description: "Client ID"
          }
        }
      }
    },
    required: ["path.networkId, path.clientId"],
  },
};

export const getNetworkDevicesTool: Tool = {
  name: "getNetworkDevices",
  scope: "networks",
  description: "List the devices in a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const claimNetworkDevicesTool: Tool = {
  name: "claimNetworkDevices",
  scope: "networks",
  description: "Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed). This operation can be used up to ten times within a single five minute window.",
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
          addAtomically: {
            type: "boolean",
            description: "Whether to claim devices atomically. If true, all devices will be claimed or none will be claimed. Default is true."
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          serials: {
            type: "array",
            description: "A list of serials of devices to claim"
          },
          detailsByDevice: {
            type: "array",
            description: "Optional details for claimed devices (currently only used for Catalyst devices)"
          }
        }
      }
    },
    required: ["path.networkId, body.serials"],
  },
};

export const vmxNetworkDevicesClaimTool: Tool = {
  name: "vmxNetworkDevicesClaim",
  scope: "networks",
  description: "Claim a vMX into a network",
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
          size: {
            type: "string",
            description: "The size of the vMX you claim. It can be one of: small, medium, large, xlarge, 100"
          }
        }
      }
    },
    required: ["path.networkId, body.size"],
  },
};

export const removeNetworkDevicesTool: Tool = {
  name: "removeNetworkDevices",
  scope: "networks",
  description: "Remove a single device",
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
          serial: {
            type: "string",
            description: "The serial of a device"
          }
        }
      }
    },
    required: ["path.networkId, body.serial"],
  },
};

export const getNetworkEventsTool: Tool = {
  name: "getNetworkEvents",
  scope: "networks",
  description: "List the events for the network",
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
          productType: {
            type: "string",
            description: "The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, wirelessController, and secureConnect"
          },
          includedEventTypes: {
            type: "array",
            description: "A list of event types. The returned events will be filtered to only include events with these types."
          },
          excludedEventTypes: {
            type: "array",
            description: "A list of event types. The returned events will be filtered to exclude events with these types."
          },
          deviceMac: {
            type: "string",
            description: "The MAC address of the Meraki device which the list of events will be filtered with"
          },
          deviceSerial: {
            type: "string",
            description: "The serial of the Meraki device which the list of events will be filtered with"
          },
          deviceName: {
            type: "string",
            description: "The name of the Meraki device which the list of events will be filtered with"
          },
          clientIp: {
            type: "string",
            description: "The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks."
          },
          clientMac: {
            type: "string",
            description: "The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks."
          },
          clientName: {
            type: "string",
            description: "The name, or partial name, of the client which the list of events will be filtered with"
          },
          smDeviceMac: {
            type: "string",
            description: "The MAC address of the Systems Manager device which the list of events will be filtered with"
          },
          smDeviceName: {
            type: "string",
            description: "The name of the Systems Manager device which the list of events will be filtered with"
          },
          eventDetails: {
            type: "string",
            description: "The details of the event(Catalyst device only) which the list of events will be filtered with"
          },
          eventSeverity: {
            type: "string",
            description: "The severity of the event(Catalyst device only) which the list of events will be filtered with"
          },
          isCatalyst: {
            type: "boolean",
            description: "Boolean indicating that whether it is a Catalyst device. For Catalyst device, eventDetails and eventSeverity can be used to filter events."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10."
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

export const getNetworkEventsEventTypesTool: Tool = {
  name: "getNetworkEventsEventTypes",
  scope: "networks",
  description: "List the event type to human-readable description",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkFirmwareUpgradesTool: Tool = {
  name: "getNetworkFirmwareUpgrades",
  scope: "networks",
  description: "Get firmware upgrade information for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkFirmwareUpgradesTool: Tool = {
  name: "updateNetworkFirmwareUpgrades",
  scope: "networks",
  description: "Update firmware upgrade information for a network",
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
          upgradeWindow: {
            type: "object",
            description: "Upgrade window for devices in network"
          },
          timezone: {
            type: "string",
            description: "The timezone for the network"
          },
          products: {
            type: "object",
            description: "Contains information about the network to update"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkFirmwareUpgradesRollbackTool: Tool = {
  name: "createNetworkFirmwareUpgradesRollback",
  scope: "networks",
  description: "Rollback a Firmware Upgrade For A Network",
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
          product: {
            type: "string",
            description: "Product type to rollback (if the network is a combined network)"
          },
          time: {
            type: "string",
            description: "Scheduled time for the rollback"
          },
          reasons: {
            type: "array",
            description: "Reasons for the rollback"
          },
          toVersion: {
            type: "object",
            description: "Version to downgrade to (if the network has firmware flexibility)"
          }
        }
      }
    },
    required: ["path.networkId, body.reasons"],
  },
};

export const getNetworkFirmwareUpgradesStagedEventsTool: Tool = {
  name: "getNetworkFirmwareUpgradesStagedEvents",
  scope: "networks",
  description: "Get the Staged Upgrade Event from a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkFirmwareUpgradesStagedEventTool: Tool = {
  name: "createNetworkFirmwareUpgradesStagedEvent",
  scope: "networks",
  description: "Create a Staged Upgrade Event for a network",
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
          products: {
            type: "object",
            description: "Contains firmware upgrade version information"
          },
          stages: {
            type: "array",
            description: "All firmware upgrade stages in the network with their start time."
          }
        }
      }
    },
    required: ["path.networkId, body.stages"],
  },
};

export const updateNetworkFirmwareUpgradesStagedEventsTool: Tool = {
  name: "updateNetworkFirmwareUpgradesStagedEvents",
  scope: "networks",
  description: "Update the Staged Upgrade Event for a network",
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
          stages: {
            type: "array",
            description: "All firmware upgrade stages in the network with their start time."
          }
        }
      }
    },
    required: ["path.networkId, body.stages"],
  },
};

export const deferNetworkFirmwareUpgradesStagedEventsTool: Tool = {
  name: "deferNetworkFirmwareUpgradesStagedEvents",
  scope: "networks",
  description: "Postpone by 1 week all pending staged upgrade stages for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const rollbacksNetworkFirmwareUpgradesStagedEventsTool: Tool = {
  name: "rollbacksNetworkFirmwareUpgradesStagedEvents",
  scope: "networks",
  description: "Rollback a Staged Upgrade Event for a network",
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
          stages: {
            type: "array",
            description: "All completed or in-progress stages in the network with their new start times. All pending stages will be canceled"
          },
          reasons: {
            type: "array",
            description: "The reason for rolling back the staged upgrade"
          }
        }
      }
    },
    required: ["path.networkId, body.stages"],
  },
};

export const getNetworkFirmwareUpgradesStagedGroupsTool: Tool = {
  name: "getNetworkFirmwareUpgradesStagedGroups",
  scope: "networks",
  description: "List of Staged Upgrade Groups in a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkFirmwareUpgradesStagedGroupTool: Tool = {
  name: "createNetworkFirmwareUpgradesStagedGroup",
  scope: "networks",
  description: "Create a Staged Upgrade Group for a network",
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
            description: "Name of the Staged Upgrade Group. Length must be 1 to 255 characters"
          },
          description: {
            type: "string",
            description: "Description of the Staged Upgrade Group. Length must be 1 to 255 characters"
          },
          isDefault: {
            type: "boolean",
            description: "Boolean indicating the default Group. Any device that does not have a group explicitly assigned will upgrade with this group"
          },
          assignedDevices: {
            type: "object",
            description: "The devices and Switch Stacks assigned to the Group"
          }
        }
      }
    },
    required: ["path.networkId, body.name, body.isDefault"],
  },
};

export const getNetworkFirmwareUpgradesStagedGroupTool: Tool = {
  name: "getNetworkFirmwareUpgradesStagedGroup",
  scope: "networks",
  description: "Get a Staged Upgrade Group from a network",
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
          groupId: {
            type: "string",
            description: "Group ID"
          }
        }
      }
    },
    required: ["path.networkId, path.groupId"],
  },
};

export const updateNetworkFirmwareUpgradesStagedGroupTool: Tool = {
  name: "updateNetworkFirmwareUpgradesStagedGroup",
  scope: "networks",
  description: "Update a Staged Upgrade Group for a network",
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
          groupId: {
            type: "string",
            description: "Group ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name of the Staged Upgrade Group. Length must be 1 to 255 characters"
          },
          description: {
            type: "string",
            description: "Description of the Staged Upgrade Group. Length must be 1 to 255 characters"
          },
          isDefault: {
            type: "boolean",
            description: "Boolean indicating the default Group. Any device that does not have a group explicitly assigned will upgrade with this group"
          },
          assignedDevices: {
            type: "object",
            description: "The devices and Switch Stacks assigned to the Group"
          }
        }
      }
    },
    required: ["path.networkId, path.groupId, body.name, body.isDefault"],
  },
};

export const deleteNetworkFirmwareUpgradesStagedGroupTool: Tool = {
  name: "deleteNetworkFirmwareUpgradesStagedGroup",
  scope: "networks",
  description: "Delete a Staged Upgrade Group",
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
          groupId: {
            type: "string",
            description: "Group ID"
          }
        }
      }
    },
    required: ["path.networkId, path.groupId"],
  },
};

export const getNetworkFirmwareUpgradesStagedStagesTool: Tool = {
  name: "getNetworkFirmwareUpgradesStagedStages",
  scope: "networks",
  description: "Order of Staged Upgrade Groups in a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkFirmwareUpgradesStagedStagesTool: Tool = {
  name: "updateNetworkFirmwareUpgradesStagedStages",
  scope: "networks",
  description: "Assign Staged Upgrade Group order in the sequence.",
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
          _json: {
            type: "array",
            description: "Array of Staged Upgrade Groups"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkFloorPlansTool: Tool = {
  name: "getNetworkFloorPlans",
  scope: "networks",
  description: "List the floor plans that belong to your network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkFloorPlanTool: Tool = {
  name: "createNetworkFloorPlan",
  scope: "networks",
  description: "Upload a floor plan",
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
            description: "The name of your floor plan."
          },
          center: {
            type: "object",
            description: "The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair."
          },
          bottomLeftCorner: {
            type: "object",
            description: "The longitude and latitude of the bottom left corner of your floor plan."
          },
          bottomRightCorner: {
            type: "object",
            description: "The longitude and latitude of the bottom right corner of your floor plan."
          },
          topLeftCorner: {
            type: "object",
            description: "The longitude and latitude of the top left corner of your floor plan."
          },
          topRightCorner: {
            type: "object",
            description: "The longitude and latitude of the top right corner of your floor plan."
          },
          floorNumber: {
            type: "number",
            description: "The floor number of the floors within the building"
          },
          imageContents: {
            type: "string",
            description: "The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in."
          }
        }
      }
    },
    required: ["path.networkId, body.name, body.imageContents"],
  },
};

export const batchNetworkFloorPlansAutoLocateJobsTool: Tool = {
  name: "batchNetworkFloorPlansAutoLocateJobs",
  scope: "networks",
  description: "Schedule auto locate jobs for one or more floor plans in a network",
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
          jobs: {
            type: "array",
            description: "The list of auto locate jobs to be scheduled. Up to 100 jobs can be provided in a request."
          }
        }
      }
    },
    required: ["path.networkId, body.jobs"],
  },
};

export const cancelNetworkFloorPlansAutoLocateJobTool: Tool = {
  name: "cancelNetworkFloorPlansAutoLocateJob",
  scope: "networks",
  description: "Cancel a scheduled or running auto locate job",
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
          jobId: {
            type: "string",
            description: "Job ID"
          }
        }
      }
    },
    required: ["path.networkId, path.jobId"],
  },
};

export const publishNetworkFloorPlansAutoLocateJobTool: Tool = {
  name: "publishNetworkFloorPlansAutoLocateJob",
  scope: "networks",
  description: "Update the status of a finished auto locate job to be published, and update device locations",
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
          jobId: {
            type: "string",
            description: "Job ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          devices: {
            type: "array",
            description: "The list of devices to publish positions for"
          }
        }
      }
    },
    required: ["path.networkId, path.jobId"],
  },
};

export const recalculateNetworkFloorPlansAutoLocateJobTool: Tool = {
  name: "recalculateNetworkFloorPlansAutoLocateJob",
  scope: "networks",
  description: "Trigger auto locate recalculation for a job, and optionally set anchors",
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
          jobId: {
            type: "string",
            description: "Job ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          devices: {
            type: "array",
            description: "The list of devices to update anchor positions for"
          }
        }
      }
    },
    required: ["path.networkId, path.jobId"],
  },
};

export const batchNetworkFloorPlansDevicesUpdateTool: Tool = {
  name: "batchNetworkFloorPlansDevicesUpdate",
  scope: "networks",
  description: "Update floorplan assignments for a batch of devices",
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
          assignments: {
            type: "array",
            description: "List of floorplan assignments to update. Up to 100 floor plan assignments can be provided in a request."
          }
        }
      }
    },
    required: ["path.networkId, body.assignments"],
  },
};

export const getNetworkFloorPlanTool: Tool = {
  name: "getNetworkFloorPlan",
  scope: "networks",
  description: "Find a floor plan by ID",
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
          floorPlanId: {
            type: "string",
            description: "Floor plan ID"
          }
        }
      }
    },
    required: ["path.networkId, path.floorPlanId"],
  },
};

export const updateNetworkFloorPlanTool: Tool = {
  name: "updateNetworkFloorPlan",
  scope: "networks",
  description: "Update a floor plan's geolocation and other meta data",
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
          floorPlanId: {
            type: "string",
            description: "Floor plan ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of your floor plan."
          },
          center: {
            type: "object",
            description: "The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair."
          },
          bottomLeftCorner: {
            type: "object",
            description: "The longitude and latitude of the bottom left corner of your floor plan."
          },
          bottomRightCorner: {
            type: "object",
            description: "The longitude and latitude of the bottom right corner of your floor plan."
          },
          topLeftCorner: {
            type: "object",
            description: "The longitude and latitude of the top left corner of your floor plan."
          },
          topRightCorner: {
            type: "object",
            description: "The longitude and latitude of the top right corner of your floor plan."
          },
          floorNumber: {
            type: "number",
            description: "The floor number of the floors within the building"
          },
          imageContents: {
            type: "string",
            description: "The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image."
          }
        }
      }
    },
    required: ["path.networkId, path.floorPlanId"],
  },
};

export const deleteNetworkFloorPlanTool: Tool = {
  name: "deleteNetworkFloorPlan",
  scope: "networks",
  description: "Destroy a floor plan",
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
          floorPlanId: {
            type: "string",
            description: "Floor plan ID"
          }
        }
      }
    },
    required: ["path.networkId, path.floorPlanId"],
  },
};

export const getNetworkGroupPoliciesTool: Tool = {
  name: "getNetworkGroupPolicies",
  scope: "networks",
  description: "List the group policies in a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkGroupPolicyTool: Tool = {
  name: "createNetworkGroupPolicy",
  scope: "networks",
  description: "Create a group policy",
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
            description: "The name for your group policy. Required."
          },
          scheduling: {
            type: "object",
            description: "    The schedule for the group policy. Schedules are applied to days of the week."
          },
          bandwidth: {
            type: "object",
            description: "    The bandwidth settings for clients bound to your group policy."
          },
          firewallAndTrafficShaping: {
            type: "object",
            description: "    The firewall and traffic shaping rules and settings for your policy."
          },
          contentFiltering: {
            type: "object",
            description: "The content filtering settings for your group policy"
          },
          splashAuthSettings: {
            type: "string",
            description: "Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration."
          },
          vlanTagging: {
            type: "object",
            description: "The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration."
          },
          bonjourForwarding: {
            type: "object",
            description: "The Bonjour settings for your group policy. Only valid if your network has a wireless configuration."
          }
        }
      }
    },
    required: ["path.networkId, body.name"],
  },
};

export const getNetworkGroupPolicyTool: Tool = {
  name: "getNetworkGroupPolicy",
  scope: "networks",
  description: "Display a group policy",
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
          groupPolicyId: {
            type: "string",
            description: "Group policy ID"
          }
        }
      }
    },
    required: ["path.networkId, path.groupPolicyId"],
  },
};

export const updateNetworkGroupPolicyTool: Tool = {
  name: "updateNetworkGroupPolicy",
  scope: "networks",
  description: "Update a group policy",
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
          groupPolicyId: {
            type: "string",
            description: "Group policy ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name for your group policy."
          },
          scheduling: {
            type: "object",
            description: "    The schedule for the group policy. Schedules are applied to days of the week."
          },
          bandwidth: {
            type: "object",
            description: "    The bandwidth settings for clients bound to your group policy."
          },
          firewallAndTrafficShaping: {
            type: "object",
            description: "    The firewall and traffic shaping rules and settings for your policy."
          },
          contentFiltering: {
            type: "object",
            description: "The content filtering settings for your group policy"
          },
          splashAuthSettings: {
            type: "string",
            description: "Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration."
          },
          vlanTagging: {
            type: "object",
            description: "The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration."
          },
          bonjourForwarding: {
            type: "object",
            description: "The Bonjour settings for your group policy. Only valid if your network has a wireless configuration."
          }
        }
      }
    },
    required: ["path.networkId, path.groupPolicyId"],
  },
};

export const deleteNetworkGroupPolicyTool: Tool = {
  name: "deleteNetworkGroupPolicy",
  scope: "networks",
  description: "Delete a group policy",
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
          groupPolicyId: {
            type: "string",
            description: "Group policy ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          force: {
            type: "boolean",
            description: "If true, the system deletes the GP even if there are active clients using the GP. After deletion, active clients that were assigned to that Group Policy will be left without any policy applied. Default is false."
          }
        }
      }
    },
    required: ["path.networkId, path.groupPolicyId"],
  },
};

export const getNetworkHealthAlertsTool: Tool = {
  name: "getNetworkHealthAlerts",
  scope: "networks",
  description: "Return all global alerts on this network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkLocationScanningTool: Tool = {
  name: "getNetworkLocationScanning",
  scope: "networks",
  description: "Return scanning API settings",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkLocationScanningTool: Tool = {
  name: "updateNetworkLocationScanning",
  scope: "networks",
  description: "Change scanning API settings",
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
          analyticsEnabled: {
            type: "boolean",
            description: "Collect location and scanning analytics"
          },
          scanningApiEnabled: {
            type: "boolean",
            description: "Enable push API for scanning events, analytics must be enabled"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkLocationScanningHttpServersTool: Tool = {
  name: "getNetworkLocationScanningHttpServers",
  scope: "networks",
  description: "Return list of scanning API receivers",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkLocationScanningHttpServersTool: Tool = {
  name: "updateNetworkLocationScanningHttpServers",
  scope: "networks",
  description: "Set the list of scanning API receivers. Old receivers will be removed",
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
          endpoints: {
            type: "array",
            description: "A set of http server configurations"
          }
        }
      }
    },
    required: ["path.networkId, body.endpoints"],
  },
};

export const getNetworkMerakiAuthUsersTool: Tool = {
  name: "getNetworkMerakiAuthUsers",
  scope: "networks",
  description: "List the authorized users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a MX network)",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkMerakiAuthUserTool: Tool = {
  name: "createNetworkMerakiAuthUser",
  scope: "networks",
  description: "Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)",
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
          email: {
            type: "string",
            description: "Email address of the user"
          },
          name: {
            type: "string",
            description: "Name of the user. Only required If the user is not a Dashboard administrator."
          },
          password: {
            type: "string",
            description: "The password for this user account. Only required If the user is not a Dashboard administrator."
          },
          accountType: {
            type: "string",
            description: "Authorization type for user. Can be 'Guest' or '802.1X' for wireless networks, or 'Client VPN' for MX networks. Defaults to '802.1X'."
          },
          emailPasswordToUser: {
            type: "boolean",
            description: "Whether or not Meraki should email the password to user. Default is false."
          },
          isAdmin: {
            type: "boolean",
            description: "Whether or not the user is a Dashboard administrator."
          },
          authorizations: {
            type: "array",
            description: "Authorization zones and expiration dates for the user."
          }
        }
      }
    },
    required: ["path.networkId, body.email, body.authorizations"],
  },
};

export const getNetworkMerakiAuthUserTool: Tool = {
  name: "getNetworkMerakiAuthUser",
  scope: "networks",
  description: "Return the Meraki Auth splash guest, RADIUS, or client VPN user",
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
          merakiAuthUserId: {
            type: "string",
            description: "Meraki auth user ID"
          }
        }
      }
    },
    required: ["path.networkId, path.merakiAuthUserId"],
  },
};

export const deleteNetworkMerakiAuthUserTool: Tool = {
  name: "deleteNetworkMerakiAuthUser",
  scope: "networks",
  description: "Delete an 802.1X RADIUS user, or deauthorize and optionally delete a splash guest or client VPN user.",
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
          merakiAuthUserId: {
            type: "string",
            description: "Meraki auth user ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          delete: {
            type: "boolean",
            description: "If the ID supplied is for a splash guest or client VPN user, and that user is not authorized for any other networks in the organization, then also delete the user. 802.1X RADIUS users are always deleted regardless of this optional attribute."
          }
        }
      }
    },
    required: ["path.networkId, path.merakiAuthUserId"],
  },
};

export const updateNetworkMerakiAuthUserTool: Tool = {
  name: "updateNetworkMerakiAuthUser",
  scope: "networks",
  description: "Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)",
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
          merakiAuthUserId: {
            type: "string",
            description: "Meraki auth user ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name of the user. Only allowed If the user is not Dashboard administrator."
          },
          password: {
            type: "string",
            description: "The password for this user account. Only allowed If the user is not Dashboard administrator."
          },
          emailPasswordToUser: {
            type: "boolean",
            description: "Whether or not Meraki should email the password to user. Default is false."
          },
          authorizations: {
            type: "array",
            description: "Authorization zones and expiration dates for the user."
          }
        }
      }
    },
    required: ["path.networkId, path.merakiAuthUserId"],
  },
};

export const getNetworkMqttBrokersTool: Tool = {
  name: "getNetworkMqttBrokers",
  scope: "networks",
  description: "List the MQTT brokers for this network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkMqttBrokerTool: Tool = {
  name: "createNetworkMqttBroker",
  scope: "networks",
  description: "Add an MQTT broker",
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
            description: "Name of the MQTT broker."
          },
          host: {
            type: "string",
            description: "Host name/IP address where the MQTT broker runs."
          },
          port: {
            type: "integer",
            description: "Host port though which the MQTT broker can be reached."
          },
          security: {
            type: "object",
            description: "Security settings of the MQTT broker."
          },
          authentication: {
            type: "object",
            description: "Authentication settings of the MQTT broker"
          }
        }
      }
    },
    required: ["path.networkId, body.name, body.host, body.port"],
  },
};

export const getNetworkMqttBrokerTool: Tool = {
  name: "getNetworkMqttBroker",
  scope: "networks",
  description: "Return an MQTT broker",
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
          mqttBrokerId: {
            type: "string",
            description: "Mqtt broker ID"
          }
        }
      }
    },
    required: ["path.networkId, path.mqttBrokerId"],
  },
};

export const updateNetworkMqttBrokerTool: Tool = {
  name: "updateNetworkMqttBroker",
  scope: "networks",
  description: "Update an MQTT broker",
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
          mqttBrokerId: {
            type: "string",
            description: "Mqtt broker ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name of the MQTT broker."
          },
          host: {
            type: "string",
            description: "Host name/IP address where the MQTT broker runs."
          },
          port: {
            type: "integer",
            description: "Host port though which the MQTT broker can be reached."
          },
          security: {
            type: "object",
            description: "Security settings of the MQTT broker."
          },
          authentication: {
            type: "object",
            description: "Authentication settings of the MQTT broker"
          }
        }
      }
    },
    required: ["path.networkId, path.mqttBrokerId"],
  },
};

export const deleteNetworkMqttBrokerTool: Tool = {
  name: "deleteNetworkMqttBroker",
  scope: "networks",
  description: "Delete an MQTT broker",
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
          mqttBrokerId: {
            type: "string",
            description: "Mqtt broker ID"
          }
        }
      }
    },
    required: ["path.networkId, path.mqttBrokerId"],
  },
};

export const getNetworkNetflowTool: Tool = {
  name: "getNetworkNetflow",
  scope: "networks",
  description: "Return the NetFlow traffic reporting settings for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkNetflowTool: Tool = {
  name: "updateNetworkNetflow",
  scope: "networks",
  description: "Update the NetFlow traffic reporting settings for a network",
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
          reportingEnabled: {
            type: "boolean",
            description: "Boolean indicating whether NetFlow traffic reporting is enabled (true) or disabled (false)."
          },
          collectorIp: {
            type: "string",
            description: "The IPv4 address of the NetFlow collector."
          },
          collectorPort: {
            type: "integer",
            description: "The port that the NetFlow collector will be listening on."
          },
          etaEnabled: {
            type: "boolean",
            description: "Boolean indicating whether Encrypted Traffic Analytics is enabled (true) or disabled (false)."
          },
          etaDstPort: {
            type: "integer",
            description: "The port that the Encrypted Traffic Analytics collector will be listening on."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkNetworkHealthChannelUtilizationTool: Tool = {
  name: "getNetworkNetworkHealthChannelUtilization",
  scope: "networks",
  description: "Get the channel utilization over each radio for all APs in a network.",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
          },
          t1: {
            type: "string",
            description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
          },
          resolution: {
            type: "integer",
            description: "The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 100. Default is 10."
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

export const getNetworkPiiPiiKeysTool: Tool = {
  name: "getNetworkPiiPiiKeys",
  scope: "networks",
  description: "List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \"0\" containing the applicable keys.## ALTERNATE PATH```/organizations/{organizationId}/pii/piiKeys```",
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
          username: {
            type: "string",
            description: "The username of a Systems Manager user"
          },
          email: {
            type: "string",
            description: "The email of a network user account or a Systems Manager device"
          },
          mac: {
            type: "string",
            description: "The MAC of a network client device or a Systems Manager device"
          },
          serial: {
            type: "string",
            description: "The serial of a Systems Manager device"
          },
          imei: {
            type: "string",
            description: "The IMEI of a Systems Manager device"
          },
          bluetoothMac: {
            type: "string",
            description: "The MAC of a Bluetooth client"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkPiiRequestsTool: Tool = {
  name: "getNetworkPiiRequests",
  scope: "networks",
  description: "List the PII requests for this network or organization## ALTERNATE PATH```/organizations/{organizationId}/pii/requests```",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkPiiRequestTool: Tool = {
  name: "createNetworkPiiRequest",
  scope: "networks",
  description: "Submit a new delete or restrict processing PII request## ALTERNATE PATH```/organizations/{organizationId}/pii/requests```",
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
          type: {
            type: "string",
            description: "One of \"delete\" or \"restrict processing\""
          },
          datasets: {
            type: "array",
            description: "The datasets related to the provided key that should be deleted. Only applies to \"delete\" requests. The value \"all\" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user)"
          },
          username: {
            type: "string",
            description: "The username of a network log in. Only applies to \"delete\" requests."
          },
          email: {
            type: "string",
            description: "The email of a network user account. Only applies to \"delete\" requests."
          },
          mac: {
            type: "string",
            description: "The MAC of a network client device. Applies to both \"restrict processing\" and \"delete\" requests."
          },
          smDeviceId: {
            type: "string",
            description: "The sm_device_id of a Systems Manager device. The only way to \"restrict processing\" or \"delete\" a Systems Manager device. Must include \"device\" in the dataset for a \"delete\" request to destroy the device."
          },
          smUserId: {
            type: "string",
            description: "The sm_user_id of a Systems Manager user. The only way to \"restrict processing\" or \"delete\" a Systems Manager user. Must include \"user\" in the dataset for a \"delete\" request to destroy the user."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkPiiRequestTool: Tool = {
  name: "getNetworkPiiRequest",
  scope: "networks",
  description: "Return a PII request## ALTERNATE PATH```/organizations/{organizationId}/pii/requests/{requestId}```",
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
          requestId: {
            type: "string",
            description: "Request ID"
          }
        }
      }
    },
    required: ["path.networkId, path.requestId"],
  },
};

export const deleteNetworkPiiRequestTool: Tool = {
  name: "deleteNetworkPiiRequest",
  scope: "networks",
  description: "Delete a restrict processing PII request## ALTERNATE PATH```/organizations/{organizationId}/pii/requests/{requestId}```",
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
          requestId: {
            type: "string",
            description: "Request ID"
          }
        }
      }
    },
    required: ["path.networkId, path.requestId"],
  },
};

export const getNetworkPiiSmDevicesForKeyTool: Tool = {
  name: "getNetworkPiiSmDevicesForKey",
  scope: "networks",
  description: "Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.## ALTERNATE PATH```/organizations/{organizationId}/pii/smDevicesForKey```",
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
          username: {
            type: "string",
            description: "The username of a Systems Manager user"
          },
          email: {
            type: "string",
            description: "The email of a network user account or a Systems Manager device"
          },
          mac: {
            type: "string",
            description: "The MAC of a network client device or a Systems Manager device"
          },
          serial: {
            type: "string",
            description: "The serial of a Systems Manager device"
          },
          imei: {
            type: "string",
            description: "The IMEI of a Systems Manager device"
          },
          bluetoothMac: {
            type: "string",
            description: "The MAC of a Bluetooth client"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkPiiSmOwnersForKeyTool: Tool = {
  name: "getNetworkPiiSmOwnersForKey",
  scope: "networks",
  description: "Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.## ALTERNATE PATH```/organizations/{organizationId}/pii/smOwnersForKey```",
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
          username: {
            type: "string",
            description: "The username of a Systems Manager user"
          },
          email: {
            type: "string",
            description: "The email of a network user account or a Systems Manager device"
          },
          mac: {
            type: "string",
            description: "The MAC of a network client device or a Systems Manager device"
          },
          serial: {
            type: "string",
            description: "The serial of a Systems Manager device"
          },
          imei: {
            type: "string",
            description: "The IMEI of a Systems Manager device"
          },
          bluetoothMac: {
            type: "string",
            description: "The MAC of a Bluetooth client"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkPoliciesByClientTool: Tool = {
  name: "getNetworkPoliciesByClient",
  scope: "networks",
  description: "Get policies for all clients with policies",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSettingsTool: Tool = {
  name: "getNetworkSettings",
  scope: "networks",
  description: "Return the settings for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkSettingsTool: Tool = {
  name: "updateNetworkSettings",
  scope: "networks",
  description: "Update the settings for a network",
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
          localStatusPageEnabled: {
            type: "boolean",
            description: "Enables / disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)"
          },
          remoteStatusPageEnabled: {
            type: "boolean",
            description: "Enables / disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if localStatusPageEnabled is set to true"
          },
          localStatusPage: {
            type: "object",
            description: "A hash of Local Status page(s)' authentication options applied to the Network."
          },
          securePort: {
            type: "object",
            description: "A hash of SecureConnect options applied to the Network."
          },
          fips: {
            type: "object",
            description: "A hash of FIPS options applied to the Network"
          },
          namedVlans: {
            type: "object",
            description: "A hash of Named VLANs options applied to the Network."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSnmpTool: Tool = {
  name: "getNetworkSnmp",
  scope: "networks",
  description: "Return the SNMP settings for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkSnmpTool: Tool = {
  name: "updateNetworkSnmp",
  scope: "networks",
  description: "Update the SNMP settings for a network",
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
          access: {
            type: "string",
            description: "The type of SNMP access. Can be one of 'none' (disabled), 'community' (V1/V2c), or 'users' (V3)."
          },
          communityString: {
            type: "string",
            description: "The SNMP community string. Only relevant if 'access' is set to 'community'."
          },
          users: {
            type: "array",
            description: "The list of SNMP users. Only relevant if 'access' is set to 'users'."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkSnmpTrapsTool: Tool = {
  name: "updateNetworkSnmpTraps",
  scope: "networks",
  description: "Update the SNMP trap configuration for the specified network",
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
          mode: {
            type: "string",
            description: "SNMP trap protocol version"
          },
          receiver: {
            type: "object",
            description: "Stores the port and address"
          },
          v2: {
            type: "object",
            description: "V2 mode"
          },
          v3: {
            type: "object",
            description: "V3 mode"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSplashLoginAttemptsTool: Tool = {
  name: "getNetworkSplashLoginAttempts",
  scope: "networks",
  description: "List the splash login attempts for a network",
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
          ssidNumber: {
            type: "integer",
            description: "Only return the login attempts for the specified SSID"
          },
          loginIdentifier: {
            type: "string",
            description: "The username, email, or phone number used during login"
          },
          timespan: {
            type: "integer",
            description: "The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const splitNetworkTool: Tool = {
  name: "splitNetwork",
  scope: "networks",
  description: "Split a combined network into individual networks for each type of device",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSyslogServersTool: Tool = {
  name: "getNetworkSyslogServers",
  scope: "networks",
  description: "List the syslog servers for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkSyslogServersTool: Tool = {
  name: "updateNetworkSyslogServers",
  scope: "networks",
  description: "Update the syslog servers for a network",
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
          servers: {
            type: "array",
            description: "A list of the syslog servers for this network"
          }
        }
      }
    },
    required: ["path.networkId, body.servers"],
  },
};

export const getNetworkTopologyLinkLayerTool: Tool = {
  name: "getNetworkTopologyLinkLayer",
  scope: "networks",
  description: "List the LLDP and CDP information for all discovered devices and connections in a network. At least one MX or MS device must be in the network in order to build the topology.",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkTrafficTool: Tool = {
  name: "getNetworkTraffic",
  scope: "networks",
  description: "Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 30 days from today."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days."
          },
          deviceType: {
            type: "string",
            description: "Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkTrafficAnalysisTool: Tool = {
  name: "getNetworkTrafficAnalysis",
  scope: "networks",
  description: "Return the traffic analysis settings for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkTrafficAnalysisTool: Tool = {
  name: "updateNetworkTrafficAnalysis",
  scope: "networks",
  description: "Update the traffic analysis settings for a network",
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
          mode: {
            type: "string",
            description: "    The traffic analysis mode for the network. Can be one of 'disabled' (do not collect traffic types),    'basic' (collect generic traffic categories), or 'detailed' (collect destination hostnames)."
          },
          customPieChartItems: {
            type: "array",
            description: "The list of items that make up the custom pie chart for traffic reporting."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkTrafficShapingApplicationCategoriesTool: Tool = {
  name: "getNetworkTrafficShapingApplicationCategories",
  scope: "networks",
  description: "Returns the application categories for traffic shaping rules. Only applicable on networks with a security applicance.",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkTrafficShapingDscpTaggingOptionsTool: Tool = {
  name: "getNetworkTrafficShapingDscpTaggingOptions",
  scope: "networks",
  description: "Returns the available DSCP tagging options for your traffic shaping rules.",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const unbindNetworkTool: Tool = {
  name: "unbindNetwork",
  scope: "networks",
  description: "Unbind a network from a template.",
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
          retainConfigs: {
            type: "boolean",
            description: "Optional boolean to retain all the current configs given by the template."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkVlanProfilesTool: Tool = {
  name: "getNetworkVlanProfiles",
  scope: "networks",
  description: "List VLAN profiles for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkVlanProfileTool: Tool = {
  name: "createNetworkVlanProfile",
  scope: "networks",
  description: "Create a VLAN profile for a network",
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
            description: "Name of the profile, string length must be from 1 to 255 characters"
          },
          vlanNames: {
            type: "array",
            description: "An array of named VLANs"
          },
          vlanGroups: {
            type: "array",
            description: "An array of VLAN groups"
          },
          iname: {
            type: "string",
            description: "IName of the profile"
          }
        }
      }
    },
    required: ["path.networkId, body.name, body.vlanNames, body.vlanGroups, body.iname"],
  },
};

export const getNetworkVlanProfilesAssignmentsByDeviceTool: Tool = {
  name: "getNetworkVlanProfilesAssignmentsByDevice",
  scope: "networks",
  description: "Get the assigned VLAN Profiles for devices in a network",
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
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          serials: {
            type: "array",
            description: "Optional parameter to filter devices by serials. All devices returned belong to serial numbers that are an exact match."
          },
          productTypes: {
            type: "array",
            description: "Optional parameter to filter devices by product types."
          },
          stackIds: {
            type: "array",
            description: "Optional parameter to filter devices by Switch Stack ids."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const reassignNetworkVlanProfilesAssignmentsTool: Tool = {
  name: "reassignNetworkVlanProfilesAssignments",
  scope: "networks",
  description: "Update the assigned VLAN Profile for devices in a network",
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
          vlanProfile: {
            type: "object",
            description: "The VLAN Profile"
          },
          serials: {
            type: "array",
            description: "Array of Device Serials"
          },
          stackIds: {
            type: "array",
            description: "Array of Switch Stack IDs"
          }
        }
      }
    },
    required: ["path.networkId, body.serials, body.stackIds"],
  },
};

export const getNetworkVlanProfileTool: Tool = {
  name: "getNetworkVlanProfile",
  scope: "networks",
  description: "Get an existing VLAN profile of a network",
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
          iname: {
            type: "string",
            description: "Iname"
          }
        }
      }
    },
    required: ["path.networkId, path.iname"],
  },
};

export const updateNetworkVlanProfileTool: Tool = {
  name: "updateNetworkVlanProfile",
  scope: "networks",
  description: "Update an existing VLAN profile of a network",
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
          iname: {
            type: "string",
            description: "Iname"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name of the profile, string length must be from 1 to 255 characters"
          },
          vlanNames: {
            type: "array",
            description: "An array of named VLANs"
          },
          vlanGroups: {
            type: "array",
            description: "An array of VLAN groups"
          }
        }
      }
    },
    required: ["path.networkId, path.iname, body.name, body.vlanNames, body.vlanGroups"],
  },
};

export const deleteNetworkVlanProfileTool: Tool = {
  name: "deleteNetworkVlanProfile",
  scope: "networks",
  description: "Delete a VLAN profile of a network",
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
          iname: {
            type: "string",
            description: "Iname"
          }
        }
      }
    },
    required: ["path.networkId, path.iname"],
  },
};

export const getNetworkWebhooksHttpServersTool: Tool = {
  name: "getNetworkWebhooksHttpServers",
  scope: "networks",
  description: "List the HTTP servers for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkWebhooksHttpServerTool: Tool = {
  name: "createNetworkWebhooksHttpServer",
  scope: "networks",
  description: "Add an HTTP server to a network",
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
            description: "A name for easy reference to the HTTP server"
          },
          url: {
            type: "string",
            description: "The URL of the HTTP server. Once set, cannot be updated."
          },
          sharedSecret: {
            type: "string",
            description: "A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki."
          },
          payloadTemplate: {
            type: "object",
            description: "The payload template to use when posting data to the HTTP server."
          }
        }
      }
    },
    required: ["path.networkId, body.name, body.url"],
  },
};

export const getNetworkWebhooksHttpServerTool: Tool = {
  name: "getNetworkWebhooksHttpServer",
  scope: "networks",
  description: "Return an HTTP server for a network",
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
          httpServerId: {
            type: "string",
            description: "Http server ID"
          }
        }
      }
    },
    required: ["path.networkId, path.httpServerId"],
  },
};

export const updateNetworkWebhooksHttpServerTool: Tool = {
  name: "updateNetworkWebhooksHttpServer",
  scope: "networks",
  description: "Update an HTTP server. To change a URL, create a new HTTP server.",
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
          httpServerId: {
            type: "string",
            description: "Http server ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "A name for easy reference to the HTTP server"
          },
          sharedSecret: {
            type: "string",
            description: "A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki."
          },
          payloadTemplate: {
            type: "object",
            description: "The payload template to use when posting data to the HTTP server."
          }
        }
      }
    },
    required: ["path.networkId, path.httpServerId"],
  },
};

export const deleteNetworkWebhooksHttpServerTool: Tool = {
  name: "deleteNetworkWebhooksHttpServer",
  scope: "networks",
  description: "Delete an HTTP server from a network",
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
          httpServerId: {
            type: "string",
            description: "Http server ID"
          }
        }
      }
    },
    required: ["path.networkId, path.httpServerId"],
  },
};

export const getNetworkWebhooksPayloadTemplatesTool: Tool = {
  name: "getNetworkWebhooksPayloadTemplates",
  scope: "networks",
  description: "List the webhook payload templates for a network",
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
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkWebhooksPayloadTemplateTool: Tool = {
  name: "createNetworkWebhooksPayloadTemplate",
  scope: "networks",
  description: "Create a webhook payload template for a network",
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
            description: "The name of the new template"
          },
          body: {
            type: "string",
            description: "The liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified."
          },
          headers: {
            type: "array",
            description: "The liquid template used with the webhook headers."
          },
          bodyFile: {
            type: "string",
            description: "A Base64 encoded file containing liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified."
          },
          headersFile: {
            type: "string",
            description: "A Base64 encoded file containing the liquid template used with the webhook headers."
          }
        }
      }
    },
    required: ["path.networkId, body.name"],
  },
};

export const getNetworkWebhooksPayloadTemplateTool: Tool = {
  name: "getNetworkWebhooksPayloadTemplate",
  scope: "networks",
  description: "Get the webhook payload template for a network",
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
          payloadTemplateId: {
            type: "string",
            description: "Payload template ID"
          }
        }
      }
    },
    required: ["path.networkId, path.payloadTemplateId"],
  },
};

export const deleteNetworkWebhooksPayloadTemplateTool: Tool = {
  name: "deleteNetworkWebhooksPayloadTemplate",
  scope: "networks",
  description: "Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')",
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
          payloadTemplateId: {
            type: "string",
            description: "Payload template ID"
          }
        }
      }
    },
    required: ["path.networkId, path.payloadTemplateId"],
  },
};

export const updateNetworkWebhooksPayloadTemplateTool: Tool = {
  name: "updateNetworkWebhooksPayloadTemplate",
  scope: "networks",
  description: "Update a webhook payload template for a network",
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
          payloadTemplateId: {
            type: "string",
            description: "Payload template ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of the template"
          },
          body: {
            type: "string",
            description: "The liquid template used for the body of the webhook message."
          },
          headers: {
            type: "array",
            description: "The liquid template used with the webhook headers."
          },
          bodyFile: {
            type: "string",
            description: "A file containing liquid template used for the body of the webhook message."
          },
          headersFile: {
            type: "string",
            description: "A file containing the liquid template used with the webhook headers."
          }
        }
      }
    },
    required: ["path.networkId, path.payloadTemplateId"],
  },
};

export const createNetworkWebhooksWebhookTestTool: Tool = {
  name: "createNetworkWebhooksWebhookTest",
  scope: "networks",
  description: "Send a test webhook for a network",
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
          url: {
            type: "string",
            description: "The URL where the test webhook will be sent"
          },
          sharedSecret: {
            type: "string",
            description: "The shared secret the test webhook will send. Optional. Defaults to an empty string."
          },
          payloadTemplateId: {
            type: "string",
            description: "The ID of the payload template of the test webhook. Defaults to the HTTP server's template ID if one exists for the given URL, or Generic template ID otherwise"
          },
          payloadTemplateName: {
            type: "string",
            description: "The name of the payload template."
          },
          alertTypeId: {
            type: "string",
            description: "The type of alert which the test webhook will send. Optional. Defaults to power_supply_down."
          }
        }
      }
    },
    required: ["path.networkId, body.url"],
  },
};

export const getNetworkWebhooksWebhookTestTool: Tool = {
  name: "getNetworkWebhooksWebhookTest",
  scope: "networks",
  description: "Return the status of a webhook test for a network",
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
          webhookTestId: {
            type: "string",
            description: "Webhook test ID"
          }
        }
      }
    },
    required: ["path.networkId, path.webhookTestId"],
  },
};

export const networksTools = [
  getNetworkTool,
  updateNetworkTool,
  deleteNetworkTool,
  getNetworkAlertsHistoryTool,
  getNetworkAlertsSettingsTool,
  updateNetworkAlertsSettingsTool,
  bindNetworkTool,
  getNetworkBluetoothClientsTool,
  getNetworkBluetoothClientTool,
  getNetworkClientsTool,
  getNetworkClientsApplicationUsageTool,
  getNetworkClientsBandwidthUsageHistoryTool,
  getNetworkClientsOverviewTool,
  provisionNetworkClientsTool,
  getNetworkClientsUsageHistoriesTool,
  getNetworkClientTool,
  getNetworkClientPolicyTool,
  updateNetworkClientPolicyTool,
  getNetworkClientSplashAuthorizationStatusTool,
  updateNetworkClientSplashAuthorizationStatusTool,
  getNetworkClientTrafficHistoryTool,
  getNetworkClientUsageHistoryTool,
  getNetworkDevicesTool,
  claimNetworkDevicesTool,
  vmxNetworkDevicesClaimTool,
  removeNetworkDevicesTool,
  getNetworkEventsTool,
  getNetworkEventsEventTypesTool,
  getNetworkFirmwareUpgradesTool,
  updateNetworkFirmwareUpgradesTool,
  createNetworkFirmwareUpgradesRollbackTool,
  getNetworkFirmwareUpgradesStagedEventsTool,
  createNetworkFirmwareUpgradesStagedEventTool,
  updateNetworkFirmwareUpgradesStagedEventsTool,
  deferNetworkFirmwareUpgradesStagedEventsTool,
  rollbacksNetworkFirmwareUpgradesStagedEventsTool,
  getNetworkFirmwareUpgradesStagedGroupsTool,
  createNetworkFirmwareUpgradesStagedGroupTool,
  getNetworkFirmwareUpgradesStagedGroupTool,
  updateNetworkFirmwareUpgradesStagedGroupTool,
  deleteNetworkFirmwareUpgradesStagedGroupTool,
  getNetworkFirmwareUpgradesStagedStagesTool,
  updateNetworkFirmwareUpgradesStagedStagesTool,
  getNetworkFloorPlansTool,
  createNetworkFloorPlanTool,
  batchNetworkFloorPlansAutoLocateJobsTool,
  cancelNetworkFloorPlansAutoLocateJobTool,
  publishNetworkFloorPlansAutoLocateJobTool,
  recalculateNetworkFloorPlansAutoLocateJobTool,
  batchNetworkFloorPlansDevicesUpdateTool,
  getNetworkFloorPlanTool,
  updateNetworkFloorPlanTool,
  deleteNetworkFloorPlanTool,
  getNetworkGroupPoliciesTool,
  createNetworkGroupPolicyTool,
  getNetworkGroupPolicyTool,
  updateNetworkGroupPolicyTool,
  deleteNetworkGroupPolicyTool,
  getNetworkHealthAlertsTool,
  getNetworkLocationScanningTool,
  updateNetworkLocationScanningTool,
  getNetworkLocationScanningHttpServersTool,
  updateNetworkLocationScanningHttpServersTool,
  getNetworkMerakiAuthUsersTool,
  createNetworkMerakiAuthUserTool,
  getNetworkMerakiAuthUserTool,
  deleteNetworkMerakiAuthUserTool,
  updateNetworkMerakiAuthUserTool,
  getNetworkMqttBrokersTool,
  createNetworkMqttBrokerTool,
  getNetworkMqttBrokerTool,
  updateNetworkMqttBrokerTool,
  deleteNetworkMqttBrokerTool,
  getNetworkNetflowTool,
  updateNetworkNetflowTool,
  getNetworkNetworkHealthChannelUtilizationTool,
  getNetworkPiiPiiKeysTool,
  getNetworkPiiRequestsTool,
  createNetworkPiiRequestTool,
  getNetworkPiiRequestTool,
  deleteNetworkPiiRequestTool,
  getNetworkPiiSmDevicesForKeyTool,
  getNetworkPiiSmOwnersForKeyTool,
  getNetworkPoliciesByClientTool,
  getNetworkSettingsTool,
  updateNetworkSettingsTool,
  getNetworkSnmpTool,
  updateNetworkSnmpTool,
  updateNetworkSnmpTrapsTool,
  getNetworkSplashLoginAttemptsTool,
  splitNetworkTool,
  getNetworkSyslogServersTool,
  updateNetworkSyslogServersTool,
  getNetworkTopologyLinkLayerTool,
  getNetworkTrafficTool,
  getNetworkTrafficAnalysisTool,
  updateNetworkTrafficAnalysisTool,
  getNetworkTrafficShapingApplicationCategoriesTool,
  getNetworkTrafficShapingDscpTaggingOptionsTool,
  unbindNetworkTool,
  getNetworkVlanProfilesTool,
  createNetworkVlanProfileTool,
  getNetworkVlanProfilesAssignmentsByDeviceTool,
  reassignNetworkVlanProfilesAssignmentsTool,
  getNetworkVlanProfileTool,
  updateNetworkVlanProfileTool,
  deleteNetworkVlanProfileTool,
  getNetworkWebhooksHttpServersTool,
  createNetworkWebhooksHttpServerTool,
  getNetworkWebhooksHttpServerTool,
  updateNetworkWebhooksHttpServerTool,
  deleteNetworkWebhooksHttpServerTool,
  getNetworkWebhooksPayloadTemplatesTool,
  createNetworkWebhooksPayloadTemplateTool,
  getNetworkWebhooksPayloadTemplateTool,
  deleteNetworkWebhooksPayloadTemplateTool,
  updateNetworkWebhooksPayloadTemplateTool,
  createNetworkWebhooksWebhookTestTool,
  getNetworkWebhooksWebhookTestTool
];