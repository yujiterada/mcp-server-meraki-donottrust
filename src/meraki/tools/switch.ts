import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getDeviceSwitchPortsTool: Tool = {
  name: "getDeviceSwitchPorts",
  scope: "switch",
  description: "List the switch ports for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      }
    },
    required: ["path.serial"],
  },
};

export const cycleDeviceSwitchPortsTool: Tool = {
  name: "cycleDeviceSwitchPorts",
  scope: "switch",
  description: "Cycle a set of switch ports",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          ports: {
            type: "array",
            description: "List of switch ports"
          }
        }
      }
    },
    required: ["path.serial, body.ports"],
  },
};

export const updateDeviceSwitchPortsMirrorTool: Tool = {
  name: "updateDeviceSwitchPortsMirror",
  scope: "switch",
  description: "Update a port mirror",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          serial: {
            type: "string",
            description: "The switch identifier"
          },
          source: {
            type: "object",
            description: "Source ports mirror configuration"
          },
          destination: {
            type: "object",
            description: "Destination port mirror configuration"
          },
          tags: {
            type: "array",
            description: "Port mirror tags"
          },
          role: {
            type: "string",
            description: "Switch role can be source or destination"
          },
          comment: {
            type: "string",
            description: "My pretty comment"
          }
        }
      }
    },
    required: ["path.serial, body.serial, body.source, body.destination"],
  },
};

export const getDeviceSwitchPortsStatusesTool: Tool = {
  name: "getDeviceSwitchPortsStatuses",
  scope: "switch",
  description: "Return the status for all the ports of a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
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
          }
        }
      }
    },
    required: ["path.serial"],
  },
};

export const getDeviceSwitchPortsStatusesPacketsTool: Tool = {
  name: "getDeviceSwitchPortsStatusesPackets",
  scope: "switch",
  description: "Return the packet counters for all the ports of a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data. The maximum lookback period is 1 day from today."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day."
          }
        }
      }
    },
    required: ["path.serial"],
  },
};

export const getDeviceSwitchPortTool: Tool = {
  name: "getDeviceSwitchPort",
  scope: "switch",
  description: "Return a switch port",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          portId: {
            type: "string",
            description: "Port ID"
          }
        }
      }
    },
    required: ["path.serial, path.portId"],
  },
};

export const updateDeviceSwitchPortTool: Tool = {
  name: "updateDeviceSwitchPort",
  scope: "switch",
  description: "Update a switch port",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          portId: {
            type: "string",
            description: "Port ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of the switch port."
          },
          tags: {
            type: "array",
            description: "The list of tags of the switch port."
          },
          enabled: {
            type: "boolean",
            description: "The status of the switch port."
          },
          poeEnabled: {
            type: "boolean",
            description: "The PoE status of the switch port."
          },
          type: {
            type: "string",
            description: "The type of the switch port ('trunk', 'access', 'stack' or 'routed')."
          },
          vlan: {
            type: "integer",
            description: "The VLAN of the switch port. For a trunk port, this is the native VLAN. A null value will clear the value set for trunk ports."
          },
          voiceVlan: {
            type: "integer",
            description: "The voice VLAN of the switch port. Only applicable to access ports."
          },
          allowedVlans: {
            type: "string",
            description: "The VLANs allowed on the switch port. Only applicable to trunk ports."
          },
          isolationEnabled: {
            type: "boolean",
            description: "The isolation status of the switch port."
          },
          rstpEnabled: {
            type: "boolean",
            description: "The rapid spanning tree protocol status."
          },
          stpGuard: {
            type: "string",
            description: "The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard')."
          },
          linkNegotiation: {
            type: "string",
            description: "The link speed for the switch port."
          },
          portScheduleId: {
            type: "string",
            description: "The ID of the port schedule. A value of null will clear the port schedule."
          },
          udld: {
            type: "string",
            description: "The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only."
          },
          accessPolicyType: {
            type: "string",
            description: "The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'."
          },
          accessPolicyNumber: {
            type: "integer",
            description: "The number of a custom access policy to configure on the switch port. Only applicable when 'accessPolicyType' is 'Custom access policy'."
          },
          macAllowList: {
            type: "array",
            description: "Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'."
          },
          macWhitelistLimit: {
            type: "integer",
            description: "The maximum number of MAC addresses for regular MAC allow list. Only applicable when 'accessPolicyType' is 'MAC allow list'.          Note: Config only supported on verions greater than ms18 only for classic switches."
          },
          stickyMacAllowList: {
            type: "array",
            description: "The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'."
          },
          stickyMacAllowListLimit: {
            type: "integer",
            description: "The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'."
          },
          stormControlEnabled: {
            type: "boolean",
            description: "The storm control status of the switch port."
          },
          adaptivePolicyGroupId: {
            type: "string",
            description: "The adaptive policy group ID that will be used to tag traffic through this switch port. This ID must pre-exist during the configuration, else needs to be created using adaptivePolicy/groups API. Cannot be applied to a port on a switch bound to profile."
          },
          peerSgtCapable: {
            type: "boolean",
            description: "If true, Peer SGT is enabled for traffic through this switch port. Applicable to trunk port only, not access port. Cannot be applied to a port on a switch bound to profile."
          },
          flexibleStackingEnabled: {
            type: "boolean",
            description: "For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled."
          },
          daiTrusted: {
            type: "boolean",
            description: "If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic."
          },
          profile: {
            type: "object",
            description: "Profile attributes"
          },
          dot3az: {
            type: "object",
            description: "dot3az settings for the port"
          }
        }
      }
    },
    required: ["path.serial, path.portId"],
  },
};

export const getDeviceSwitchRoutingInterfacesTool: Tool = {
  name: "getDeviceSwitchRoutingInterfaces",
  scope: "switch",
  description: "List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          protocol: {
            type: "string",
            description: "Optional parameter to filter L3 interfaces by protocol."
          }
        }
      }
    },
    required: ["path.serial"],
  },
};

export const createDeviceSwitchRoutingInterfaceTool: Tool = {
  name: "createDeviceSwitchRoutingInterface",
  scope: "switch",
  description: "Create a layer 3 interface for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "A friendly name or description for the interface or VLAN (max length 128 characters)."
          },
          subnet: {
            type: "string",
            description: "The network that this L3 interface is on, in CIDR notation (ex. 10.1.1.0/24)."
          },
          interfaceIp: {
            type: "string",
            description: "The IP address that will be used for Layer 3 routing on this VLAN or subnet. This cannot be the same         as the device management IP."
          },
          multicastRouting: {
            type: "string",
            description: "Enable multicast support if, multicast routing between VLANs is required. Options are:         'disabled', 'enabled' or 'IGMP snooping querier'. Default is 'disabled'."
          },
          vlanId: {
            type: "integer",
            description: "The VLAN this L3 interface is on. VLAN must be between 1 and 4094."
          },
          defaultGateway: {
            type: "string",
            description: "The next hop for any traffic that isn't going to a directly connected subnet or over a static route.         This IP address must exist in a subnet with a L3 interface. Required if this is the first IPv4 interface."
          },
          uplinkV4: {
            type: "boolean",
            description: "When true, this interface is used as static IPv4 uplink."
          },
          uplinkV6: {
            type: "boolean",
            description: "When true, this interface is used as static IPv6 uplink."
          },
          staticV4Dns1: {
            type: "string",
            description: "Primary IPv4 DNS server address"
          },
          staticV4Dns2: {
            type: "string",
            description: "Secondary IPv4 DNS server address"
          },
          ospfSettings: {
            type: "object",
            description: "The OSPF routing settings of the interface."
          },
          ipv6: {
            type: "object",
            description: "The IPv6 settings of the interface."
          }
        }
      }
    },
    required: ["path.serial, body.name"],
  },
};

export const getDeviceSwitchRoutingInterfaceTool: Tool = {
  name: "getDeviceSwitchRoutingInterface",
  scope: "switch",
  description: "Return a layer 3 interface for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      }
    },
    required: ["path.serial, path.interfaceId"],
  },
};

export const updateDeviceSwitchRoutingInterfaceTool: Tool = {
  name: "updateDeviceSwitchRoutingInterface",
  scope: "switch",
  description: "Update a layer 3 interface for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "A friendly name or description for the interface or VLAN (max length 128 characters)."
          },
          subnet: {
            type: "string",
            description: "The network that this L3 interface is on, in CIDR notation (ex. 10.1.1.0/24)."
          },
          interfaceIp: {
            type: "string",
            description: "The IP address that will be used for Layer 3 routing on this VLAN or subnet. This cannot be the same         as the device management IP."
          },
          multicastRouting: {
            type: "string",
            description: "Enable multicast support if, multicast routing between VLANs is required. Options are:         'disabled', 'enabled' or 'IGMP snooping querier'. Default is 'disabled'."
          },
          vlanId: {
            type: "integer",
            description: "The VLAN this L3 interface is on. VLAN must be between 1 and 4094."
          },
          defaultGateway: {
            type: "string",
            description: "The next hop for any traffic that isn't going to a directly connected subnet or over a static route.         This IP address must exist in a subnet with a L3 interface. Required if this is the first IPv4 interface."
          },
          uplinkV4: {
            type: "boolean",
            description: "When true, this interface is used as static IPv4 uplink."
          },
          uplinkV6: {
            type: "boolean",
            description: "When true, this interface is used as static IPv6 uplink."
          },
          staticV4Dns1: {
            type: "string",
            description: "Primary IPv4 DNS server address"
          },
          staticV4Dns2: {
            type: "string",
            description: "Secondary IPv4 DNS server address"
          },
          ospfSettings: {
            type: "object",
            description: "The OSPF routing settings of the interface."
          },
          ipv6: {
            type: "object",
            description: "The IPv6 settings of the interface."
          }
        }
      }
    },
    required: ["path.serial, path.interfaceId"],
  },
};

export const deleteDeviceSwitchRoutingInterfaceTool: Tool = {
  name: "deleteDeviceSwitchRoutingInterface",
  scope: "switch",
  description: "Delete a layer 3 interface from the switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      }
    },
    required: ["path.serial, path.interfaceId"],
  },
};

export const getDeviceSwitchRoutingInterfaceDhcpTool: Tool = {
  name: "getDeviceSwitchRoutingInterfaceDhcp",
  scope: "switch",
  description: "Return a layer 3 interface DHCP configuration for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      }
    },
    required: ["path.serial, path.interfaceId"],
  },
};

export const updateDeviceSwitchRoutingInterfaceDhcpTool: Tool = {
  name: "updateDeviceSwitchRoutingInterfaceDhcp",
  scope: "switch",
  description: "Update a layer 3 interface DHCP configuration for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          dhcpMode: {
            type: "string",
            description: "The DHCP mode options for the switch interface       ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')"
          },
          dhcpRelayServerIps: {
            type: "array",
            description: "The DHCP relay server IPs to which DHCP packets would get relayed for the switch interface"
          },
          dhcpLeaseTime: {
            type: "string",
            description: "The DHCP lease time config for the dhcp server running on switch interface        ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')"
          },
          dnsNameserversOption: {
            type: "string",
            description: "The DHCP name server option for the dhcp server running on the switch interface        ('googlePublicDns', 'openDns' or 'custom')"
          },
          dnsCustomNameservers: {
            type: "array",
            description: "The DHCP name server IPs when DHCP name server option is        'custom'"
          },
          bootOptionsEnabled: {
            type: "boolean",
            description: "Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch        interface"
          },
          bootNextServer: {
            type: "string",
            description: "The PXE boot server IP for the DHCP server running on the switch interface"
          },
          bootFileName: {
            type: "string",
            description: "The PXE boot server filename for the DHCP server running on the switch interface"
          },
          dhcpOptions: {
            type: "array",
            description: "Array of DHCP options consisting of code, type and value for the DHCP server running on the switch interface"
          },
          reservedIpRanges: {
            type: "array",
            description: "Array of DHCP reserved IP assignments for the DHCP server running on the switch interface"
          },
          fixedIpAssignments: {
            type: "array",
            description: "Array of DHCP fixed IP assignments for the DHCP server running on the switch interface"
          }
        }
      }
    },
    required: ["path.serial, path.interfaceId"],
  },
};

export const getDeviceSwitchRoutingStaticRoutesTool: Tool = {
  name: "getDeviceSwitchRoutingStaticRoutes",
  scope: "switch",
  description: "List layer 3 static routes for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      }
    },
    required: ["path.serial"],
  },
};

export const createDeviceSwitchRoutingStaticRouteTool: Tool = {
  name: "createDeviceSwitchRoutingStaticRoute",
  scope: "switch",
  description: "Create a layer 3 static route for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name or description for layer 3 static route"
          },
          subnet: {
            type: "string",
            description: "The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)"
          },
          nextHopIp: {
            type: "string",
            description: "IP address of the next hop device to which the device sends its traffic for the subnet"
          },
          advertiseViaOspfEnabled: {
            type: "boolean",
            description: "Option to advertise static route via OSPF"
          },
          preferOverOspfRoutesEnabled: {
            type: "boolean",
            description: "Option to prefer static route over OSPF routes"
          }
        }
      }
    },
    required: ["path.serial, body.subnet, body.nextHopIp"],
  },
};

export const getDeviceSwitchRoutingStaticRouteTool: Tool = {
  name: "getDeviceSwitchRoutingStaticRoute",
  scope: "switch",
  description: "Return a layer 3 static route for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          staticRouteId: {
            type: "string",
            description: "Static route ID"
          }
        }
      }
    },
    required: ["path.serial, path.staticRouteId"],
  },
};

export const updateDeviceSwitchRoutingStaticRouteTool: Tool = {
  name: "updateDeviceSwitchRoutingStaticRoute",
  scope: "switch",
  description: "Update a layer 3 static route for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          staticRouteId: {
            type: "string",
            description: "Static route ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name or description for layer 3 static route"
          },
          subnet: {
            type: "string",
            description: "The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)"
          },
          nextHopIp: {
            type: "string",
            description: "IP address of the next hop device to which the device sends its traffic for the subnet"
          },
          managementNextHop: {
            type: "string",
            description: "Optional fallback IP address for management traffic"
          },
          advertiseViaOspfEnabled: {
            type: "boolean",
            description: "Option to advertise static route via OSPF"
          },
          preferOverOspfRoutesEnabled: {
            type: "boolean",
            description: "Option to prefer static route over OSPF routes"
          }
        }
      }
    },
    required: ["path.serial, path.staticRouteId"],
  },
};

export const deleteDeviceSwitchRoutingStaticRouteTool: Tool = {
  name: "deleteDeviceSwitchRoutingStaticRoute",
  scope: "switch",
  description: "Delete a layer 3 static route for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          },
          staticRouteId: {
            type: "string",
            description: "Static route ID"
          }
        }
      }
    },
    required: ["path.serial, path.staticRouteId"],
  },
};

export const getDeviceSwitchWarmSpareTool: Tool = {
  name: "getDeviceSwitchWarmSpare",
  scope: "switch",
  description: "Return warm spare configuration for a switch",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      }
    },
    required: ["path.serial"],
  },
};

export const updateDeviceSwitchWarmSpareTool: Tool = {
  name: "updateDeviceSwitchWarmSpare",
  scope: "switch",
  description: "Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          serial: {
            type: "string",
            description: "Serial"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          enabled: {
            type: "boolean",
            description: "Enable or disable warm spare for a switch"
          },
          spareSerial: {
            type: "string",
            description: "Serial number of the warm spare switch"
          }
        }
      }
    },
    required: ["path.serial, body.enabled"],
  },
};

export const getNetworkSwitchAccessControlListsTool: Tool = {
  name: "getNetworkSwitchAccessControlLists",
  scope: "switch",
  description: "Return the access control lists for a MS network",
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

export const updateNetworkSwitchAccessControlListsTool: Tool = {
  name: "updateNetworkSwitchAccessControlLists",
  scope: "switch",
  description: "Update the access control lists for a MS network",
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
          rules: {
            type: "array",
            description: "An ordered array of the access control list rules (not including the default rule). An empty array will clear the rules."
          }
        }
      }
    },
    required: ["path.networkId, body.rules"],
  },
};

export const getNetworkSwitchAccessPoliciesTool: Tool = {
  name: "getNetworkSwitchAccessPolicies",
  scope: "switch",
  description: "List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method",
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

export const createNetworkSwitchAccessPolicyTool: Tool = {
  name: "createNetworkSwitchAccessPolicy",
  scope: "switch",
  description: "Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.",
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
            description: "Name of the access policy(max length 255)"
          },
          radiusServers: {
            type: "array",
            description: "List of RADIUS servers to require connecting devices to authenticate against before granting network access"
          },
          radius: {
            type: "object",
            description: "Object for RADIUS Settings"
          },
          guestPortBouncing: {
            type: "boolean",
            description: "If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers"
          },
          radiusTestingEnabled: {
            type: "boolean",
            description: "If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers"
          },
          radiusCoaSupportEnabled: {
            type: "boolean",
            description: "Change of authentication for RADIUS re-authentication and disconnection"
          },
          radiusAccountingEnabled: {
            type: "boolean",
            description: "Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients"
          },
          radiusAccountingServers: {
            type: "array",
            description: "List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access"
          },
          radiusGroupAttribute: {
            type: "string",
            description: "Acceptable values are `\"\"` for None, or `\"11\"` for Group Policies ACL"
          },
          hostMode: {
            type: "string",
            description: "Choose the Host Mode for the access policy."
          },
          accessPolicyType: {
            type: "string",
            description: "Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'."
          },
          increaseAccessSpeed: {
            type: "boolean",
            description: "Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is 'Hybrid Authentication."
          },
          guestVlanId: {
            type: "integer",
            description: "ID for the guest VLAN allow unauthorized devices access to limited network resources"
          },
          dot1x: {
            type: "object",
            description: "802.1x Settings"
          },
          voiceVlanClients: {
            type: "boolean",
            description: "CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is 'Multi-Domain'."
          },
          urlRedirectWalledGardenEnabled: {
            type: "boolean",
            description: "Enable to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication"
          },
          urlRedirectWalledGardenRanges: {
            type: "array",
            description: "IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication"
          }
        }
      }
    },
    required: ["path.networkId, body.name, body.radiusServers, body.radiusTestingEnabled, body.radiusCoaSupportEnabled, body.radiusAccountingEnabled, body.hostMode, body.urlRedirectWalledGardenEnabled"],
  },
};

export const getNetworkSwitchAccessPolicyTool: Tool = {
  name: "getNetworkSwitchAccessPolicy",
  scope: "switch",
  description: "Return a specific access policy for a switch network",
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
          accessPolicyNumber: {
            type: "string",
            description: "Access policy number"
          }
        }
      }
    },
    required: ["path.networkId, path.accessPolicyNumber"],
  },
};

export const updateNetworkSwitchAccessPolicyTool: Tool = {
  name: "updateNetworkSwitchAccessPolicy",
  scope: "switch",
  description: "Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.",
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
          accessPolicyNumber: {
            type: "string",
            description: "Access policy number"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name of the access policy(max length 255)"
          },
          radiusServers: {
            type: "array",
            description: "List of RADIUS servers to require connecting devices to authenticate against before granting network access"
          },
          radius: {
            type: "object",
            description: "Object for RADIUS Settings"
          },
          guestPortBouncing: {
            type: "boolean",
            description: "If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers"
          },
          radiusTestingEnabled: {
            type: "boolean",
            description: "If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers"
          },
          radiusCoaSupportEnabled: {
            type: "boolean",
            description: "Change of authentication for RADIUS re-authentication and disconnection"
          },
          radiusAccountingEnabled: {
            type: "boolean",
            description: "Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients"
          },
          radiusAccountingServers: {
            type: "array",
            description: "List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access"
          },
          radiusGroupAttribute: {
            type: "string",
            description: "Acceptable values are `\"\"` for None, or `\"11\"` for Group Policies ACL"
          },
          hostMode: {
            type: "string",
            description: "Choose the Host Mode for the access policy."
          },
          accessPolicyType: {
            type: "string",
            description: "Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'."
          },
          increaseAccessSpeed: {
            type: "boolean",
            description: "Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is 'Hybrid Authentication."
          },
          guestVlanId: {
            type: "integer",
            description: "ID for the guest VLAN allow unauthorized devices access to limited network resources"
          },
          dot1x: {
            type: "object",
            description: "802.1x Settings"
          },
          voiceVlanClients: {
            type: "boolean",
            description: "CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is 'Multi-Domain'."
          },
          urlRedirectWalledGardenEnabled: {
            type: "boolean",
            description: "Enable to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication"
          },
          urlRedirectWalledGardenRanges: {
            type: "array",
            description: "IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication"
          }
        }
      }
    },
    required: ["path.networkId, path.accessPolicyNumber"],
  },
};

export const deleteNetworkSwitchAccessPolicyTool: Tool = {
  name: "deleteNetworkSwitchAccessPolicy",
  scope: "switch",
  description: "Delete an access policy for a switch network",
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
          accessPolicyNumber: {
            type: "string",
            description: "Access policy number"
          }
        }
      }
    },
    required: ["path.networkId, path.accessPolicyNumber"],
  },
};

export const getNetworkSwitchAlternateManagementInterfaceTool: Tool = {
  name: "getNetworkSwitchAlternateManagementInterface",
  scope: "switch",
  description: "Return the switch alternate management interface for the network",
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

export const updateNetworkSwitchAlternateManagementInterfaceTool: Tool = {
  name: "updateNetworkSwitchAlternateManagementInterface",
  scope: "switch",
  description: "Update the switch alternate management interface for the network",
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
          enabled: {
            type: "boolean",
            description: "Boolean value to enable or disable AMI configuration. If enabled, VLAN and protocols must be set"
          },
          vlanId: {
            type: "integer",
            description: "Alternate management VLAN, must be between 1 and 4094"
          },
          protocols: {
            type: "array",
            description: "Can be one or more of the following values: 'radius', 'snmp' or 'syslog'"
          },
          switches: {
            type: "array",
            description: "Array of switch serial number and IP assignment. If parameter is present, it cannot have empty body. Note: switches parameter is not applicable for template networks, in other words, do not put 'switches' in the body when updating template networks. Also, an empty 'switches' array will remove all previous assignments"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSwitchDhcpV4ServersSeenTool: Tool = {
  name: "getNetworkSwitchDhcpV4ServersSeen",
  scope: "switch",
  description: "Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)",
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

export const getNetworkSwitchDhcpServerPolicyTool: Tool = {
  name: "getNetworkSwitchDhcpServerPolicy",
  scope: "switch",
  description: "Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively",
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

export const updateNetworkSwitchDhcpServerPolicyTool: Tool = {
  name: "updateNetworkSwitchDhcpServerPolicy",
  scope: "switch",
  description: "Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively",
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
          alerts: {
            type: "object",
            description: "Alert settings for DHCP servers"
          },
          defaultPolicy: {
            type: "string",
            description: "'allow' or 'block' new DHCP servers. Default value is 'allow'."
          },
          allowedServers: {
            type: "array",
            description: "List the MAC addresses of DHCP servers to permit on the network when defaultPolicy is set to block. An empty array will clear the entries."
          },
          blockedServers: {
            type: "array",
            description: "List the MAC addresses of DHCP servers to block on the network when defaultPolicy is set to allow. An empty array will clear the entries."
          },
          arpInspection: {
            type: "object",
            description: "Dynamic ARP Inspection settings"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersTool: Tool = {
  name: "getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers",
  scope: "switch",
  description: "Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as allow listed snoop entries",
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
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerTool: Tool = {
  name: "createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer",
  scope: "switch",
  description: "Add a server to be trusted by Dynamic ARP Inspection on this network",
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
          mac: {
            type: "string",
            description: "The mac address of the trusted server being added"
          },
          vlan: {
            type: "integer",
            description: "The VLAN of the trusted server being added. It must be between 1 and 4094"
          },
          ipv4: {
            type: "object",
            description: "The IPv4 attributes of the trusted server being added"
          }
        }
      }
    },
    required: ["path.networkId, body.mac, body.vlan, body.ipv4"],
  },
};

export const updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerTool: Tool = {
  name: "updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer",
  scope: "switch",
  description: "Update a server that is trusted by Dynamic ARP Inspection on this network",
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
          trustedServerId: {
            type: "string",
            description: "Trusted server ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          mac: {
            type: "string",
            description: "The updated mac address of the trusted server"
          },
          vlan: {
            type: "integer",
            description: "The updated VLAN of the trusted server. It must be between 1 and 4094"
          },
          ipv4: {
            type: "object",
            description: "The updated IPv4 attributes of the trusted server"
          }
        }
      }
    },
    required: ["path.networkId, path.trustedServerId"],
  },
};

export const deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerTool: Tool = {
  name: "deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer",
  scope: "switch",
  description: "Remove a server from being trusted by Dynamic ARP Inspection on this network",
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
          trustedServerId: {
            type: "string",
            description: "Trusted server ID"
          }
        }
      }
    },
    required: ["path.networkId, path.trustedServerId"],
  },
};

export const getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceTool: Tool = {
  name: "getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice",
  scope: "switch",
  description: "Return the devices that have a Dynamic ARP Inspection warning and their warnings",
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
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSwitchDscpToCosMappingsTool: Tool = {
  name: "getNetworkSwitchDscpToCosMappings",
  scope: "switch",
  description: "Return the DSCP to CoS mappings",
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

export const updateNetworkSwitchDscpToCosMappingsTool: Tool = {
  name: "updateNetworkSwitchDscpToCosMappings",
  scope: "switch",
  description: "Update the DSCP to CoS mappings",
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
          mappings: {
            type: "array",
            description: "An array of DSCP to CoS mappings. An empty array will reset the mappings to default."
          }
        }
      }
    },
    required: ["path.networkId, body.mappings"],
  },
};

export const getNetworkSwitchLinkAggregationsTool: Tool = {
  name: "getNetworkSwitchLinkAggregations",
  scope: "switch",
  description: "List link aggregation groups",
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

export const createNetworkSwitchLinkAggregationTool: Tool = {
  name: "createNetworkSwitchLinkAggregation",
  scope: "switch",
  description: "Create a link aggregation group",
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
          switchPorts: {
            type: "array",
            description: "Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported."
          },
          switchProfilePorts: {
            type: "array",
            description: "Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkSwitchLinkAggregationTool: Tool = {
  name: "updateNetworkSwitchLinkAggregation",
  scope: "switch",
  description: "Update a link aggregation group",
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
          linkAggregationId: {
            type: "string",
            description: "Link aggregation ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          switchPorts: {
            type: "array",
            description: "Array of switch or stack ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported."
          },
          switchProfilePorts: {
            type: "array",
            description: "Array of switch profile ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported."
          }
        }
      }
    },
    required: ["path.networkId, path.linkAggregationId"],
  },
};

export const deleteNetworkSwitchLinkAggregationTool: Tool = {
  name: "deleteNetworkSwitchLinkAggregation",
  scope: "switch",
  description: "Split a link aggregation group into separate ports",
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
          linkAggregationId: {
            type: "string",
            description: "Link aggregation ID"
          }
        }
      }
    },
    required: ["path.networkId, path.linkAggregationId"],
  },
};

export const getNetworkSwitchMtuTool: Tool = {
  name: "getNetworkSwitchMtu",
  scope: "switch",
  description: "Return the MTU configuration",
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

export const updateNetworkSwitchMtuTool: Tool = {
  name: "updateNetworkSwitchMtu",
  scope: "switch",
  description: "Update the MTU configuration",
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
          defaultMtuSize: {
            type: "integer",
            description: "MTU size for the entire network. Default value is 9578."
          },
          overrides: {
            type: "array",
            description: "Override MTU size for individual switches or switch templates. An empty array will clear overrides."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSwitchPortSchedulesTool: Tool = {
  name: "getNetworkSwitchPortSchedules",
  scope: "switch",
  description: "List switch port schedules",
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

export const createNetworkSwitchPortScheduleTool: Tool = {
  name: "createNetworkSwitchPortSchedule",
  scope: "switch",
  description: "Add a switch port schedule",
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
            description: "The name for your port schedule. Required"
          },
          portSchedule: {
            type: "object",
            description: "    The schedule for switch port scheduling. Schedules are applied to days of the week.    When it's empty, default schedule with all days of a week are configured.    Any unspecified day in the schedule is added as a default schedule configuration of the day."
          }
        }
      }
    },
    required: ["path.networkId, body.name"],
  },
};

export const deleteNetworkSwitchPortScheduleTool: Tool = {
  name: "deleteNetworkSwitchPortSchedule",
  scope: "switch",
  description: "Delete a switch port schedule",
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
          portScheduleId: {
            type: "string",
            description: "Port schedule ID"
          }
        }
      }
    },
    required: ["path.networkId, path.portScheduleId"],
  },
};

export const updateNetworkSwitchPortScheduleTool: Tool = {
  name: "updateNetworkSwitchPortSchedule",
  scope: "switch",
  description: "Update a switch port schedule",
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
          portScheduleId: {
            type: "string",
            description: "Port schedule ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name for your port schedule."
          },
          portSchedule: {
            type: "object",
            description: "    The schedule for switch port scheduling. Schedules are applied to days of the week.    When it's empty, default schedule with all days of a week are configured.    Any unspecified day in the schedule is added as a default schedule configuration of the day."
          }
        }
      }
    },
    required: ["path.networkId, path.portScheduleId"],
  },
};

export const getNetworkSwitchPortsProfilesTool: Tool = {
  name: "getNetworkSwitchPortsProfiles",
  scope: "switch",
  description: "List the port profiles in a network",
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

export const createNetworkSwitchPortsProfileTool: Tool = {
  name: "createNetworkSwitchPortsProfile",
  scope: "switch",
  description: "Create a port profile in a network",
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
            description: "The name of the profile."
          },
          description: {
            type: "string",
            description: "Text describing the profile."
          },
          tags: {
            type: "array",
            description: "Space-seperated list of tags"
          },
          port: {
            type: "object",
            description: "Configuration settings for port profile"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const updateNetworkSwitchPortsProfileTool: Tool = {
  name: "updateNetworkSwitchPortsProfile",
  scope: "switch",
  description: "Update a port profile in a network",
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
          id: {
            type: "string",
            description: "ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of the profile."
          },
          description: {
            type: "string",
            description: "Text describing the profile."
          },
          tags: {
            type: "array",
            description: "Space-seperated list of tags"
          },
          port: {
            type: "object",
            description: "Configuration settings for port profile"
          }
        }
      }
    },
    required: ["path.networkId, path.id"],
  },
};

export const deleteNetworkSwitchPortsProfileTool: Tool = {
  name: "deleteNetworkSwitchPortsProfile",
  scope: "switch",
  description: "Delete a port profile from a network",
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
          id: {
            type: "string",
            description: "ID"
          }
        }
      }
    },
    required: ["path.networkId, path.id"],
  },
};

export const getNetworkSwitchQosRulesTool: Tool = {
  name: "getNetworkSwitchQosRules",
  scope: "switch",
  description: "List quality of service rules",
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

export const createNetworkSwitchQosRuleTool: Tool = {
  name: "createNetworkSwitchQosRule",
  scope: "switch",
  description: "Add a quality of service rule",
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
          vlan: {
            type: "integer",
            description: "The VLAN of the incoming packet. A null value will match any VLAN."
          },
          protocol: {
            type: "string",
            description: "The protocol of the incoming packet. Default value is \"ANY\""
          },
          srcPort: {
            type: "integer",
            description: "The source port of the incoming packet. Applicable only if protocol is TCP or UDP."
          },
          srcPortRange: {
            type: "string",
            description: "The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP."
          },
          dstPort: {
            type: "integer",
            description: "The destination port of the incoming packet. Applicable only if protocol is TCP or UDP."
          },
          dstPortRange: {
            type: "string",
            description: "The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP."
          },
          dscp: {
            type: "integer",
            description: "DSCP tag for the incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0"
          }
        }
      }
    },
    required: ["path.networkId, body.vlan"],
  },
};

export const getNetworkSwitchQosRulesOrderTool: Tool = {
  name: "getNetworkSwitchQosRulesOrder",
  scope: "switch",
  description: "Return the quality of service rule IDs by order in which they will be processed by the switch",
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

export const updateNetworkSwitchQosRulesOrderTool: Tool = {
  name: "updateNetworkSwitchQosRulesOrder",
  scope: "switch",
  description: "Update the order in which the rules should be processed by the switch",
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
          ruleIds: {
            type: "array",
            description: "A list of quality of service rule IDs arranged in order in which they should be processed by the switch."
          }
        }
      }
    },
    required: ["path.networkId, body.ruleIds"],
  },
};

export const getNetworkSwitchQosRuleTool: Tool = {
  name: "getNetworkSwitchQosRule",
  scope: "switch",
  description: "Return a quality of service rule",
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
          qosRuleId: {
            type: "string",
            description: "Qos rule ID"
          }
        }
      }
    },
    required: ["path.networkId, path.qosRuleId"],
  },
};

export const deleteNetworkSwitchQosRuleTool: Tool = {
  name: "deleteNetworkSwitchQosRule",
  scope: "switch",
  description: "Delete a quality of service rule",
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
          qosRuleId: {
            type: "string",
            description: "Qos rule ID"
          }
        }
      }
    },
    required: ["path.networkId, path.qosRuleId"],
  },
};

export const updateNetworkSwitchQosRuleTool: Tool = {
  name: "updateNetworkSwitchQosRule",
  scope: "switch",
  description: "Update a quality of service rule",
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
          qosRuleId: {
            type: "string",
            description: "Qos rule ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          vlan: {
            type: "integer",
            description: "The VLAN of the incoming packet. A null value will match any VLAN."
          },
          protocol: {
            type: "string",
            description: "The protocol of the incoming packet. Default value is \"ANY\""
          },
          srcPort: {
            type: "integer",
            description: "The source port of the incoming packet. Applicable only if protocol is TCP or UDP."
          },
          srcPortRange: {
            type: "string",
            description: "The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP."
          },
          dstPort: {
            type: "integer",
            description: "The destination port of the incoming packet. Applicable only if protocol is TCP or UDP."
          },
          dstPortRange: {
            type: "string",
            description: "The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP."
          },
          dscp: {
            type: "integer",
            description: "DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0"
          }
        }
      }
    },
    required: ["path.networkId, path.qosRuleId"],
  },
};

export const getNetworkSwitchRoutingMulticastTool: Tool = {
  name: "getNetworkSwitchRoutingMulticast",
  scope: "switch",
  description: "Return multicast settings for a network",
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

export const updateNetworkSwitchRoutingMulticastTool: Tool = {
  name: "updateNetworkSwitchRoutingMulticast",
  scope: "switch",
  description: "Update multicast settings for a network",
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
          defaultSettings: {
            type: "object",
            description: "Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default."
          },
          overrides: {
            type: "array",
            description: "Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSwitchRoutingMulticastRendezvousPointsTool: Tool = {
  name: "getNetworkSwitchRoutingMulticastRendezvousPoints",
  scope: "switch",
  description: "List multicast rendezvous points",
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

export const createNetworkSwitchRoutingMulticastRendezvousPointTool: Tool = {
  name: "createNetworkSwitchRoutingMulticastRendezvousPoint",
  scope: "switch",
  description: "Create a multicast rendezvous point",
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
          interfaceIp: {
            type: "string",
            description: "The IP address of the interface where the RP needs to be created."
          },
          multicastGroup: {
            type: "string",
            description: "'Any', or the IP address of a multicast group"
          }
        }
      }
    },
    required: ["path.networkId, body.interfaceIp, body.multicastGroup"],
  },
};

export const getNetworkSwitchRoutingMulticastRendezvousPointTool: Tool = {
  name: "getNetworkSwitchRoutingMulticastRendezvousPoint",
  scope: "switch",
  description: "Return a multicast rendezvous point",
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
          rendezvousPointId: {
            type: "string",
            description: "Rendezvous point ID"
          }
        }
      }
    },
    required: ["path.networkId, path.rendezvousPointId"],
  },
};

export const deleteNetworkSwitchRoutingMulticastRendezvousPointTool: Tool = {
  name: "deleteNetworkSwitchRoutingMulticastRendezvousPoint",
  scope: "switch",
  description: "Delete a multicast rendezvous point",
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
          rendezvousPointId: {
            type: "string",
            description: "Rendezvous point ID"
          }
        }
      }
    },
    required: ["path.networkId, path.rendezvousPointId"],
  },
};

export const updateNetworkSwitchRoutingMulticastRendezvousPointTool: Tool = {
  name: "updateNetworkSwitchRoutingMulticastRendezvousPoint",
  scope: "switch",
  description: "Update a multicast rendezvous point",
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
          rendezvousPointId: {
            type: "string",
            description: "Rendezvous point ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          interfaceIp: {
            type: "string",
            description: "The IP address of the interface where the RP needs to be created."
          },
          multicastGroup: {
            type: "string",
            description: "'Any', or the IP address of a multicast group"
          }
        }
      }
    },
    required: ["path.networkId, path.rendezvousPointId, body.interfaceIp, body.multicastGroup"],
  },
};

export const getNetworkSwitchRoutingOspfTool: Tool = {
  name: "getNetworkSwitchRoutingOspf",
  scope: "switch",
  description: "Return layer 3 OSPF routing configuration",
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

export const updateNetworkSwitchRoutingOspfTool: Tool = {
  name: "updateNetworkSwitchRoutingOspf",
  scope: "switch",
  description: "Update layer 3 OSPF routing configuration",
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
          enabled: {
            type: "boolean",
            description: "Boolean value to enable or disable OSPF routing. OSPF routing is disabled by default."
          },
          helloTimerInSeconds: {
            type: "integer",
            description: "Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds."
          },
          deadTimerInSeconds: {
            type: "integer",
            description: "Time interval to determine when the peer will be declared inactive/dead. Value must be between 1 and 65535"
          },
          areas: {
            type: "array",
            description: "OSPF areas"
          },
          v3: {
            type: "object",
            description: "OSPF v3 configuration"
          },
          md5AuthenticationEnabled: {
            type: "boolean",
            description: "Boolean value to enable or disable MD5 authentication. MD5 authentication is disabled by default."
          },
          md5AuthenticationKey: {
            type: "object",
            description: "MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSwitchSettingsTool: Tool = {
  name: "getNetworkSwitchSettings",
  scope: "switch",
  description: "Returns the switch network settings",
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

export const updateNetworkSwitchSettingsTool: Tool = {
  name: "updateNetworkSwitchSettings",
  scope: "switch",
  description: "Update switch network settings",
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
          vlan: {
            type: "integer",
            description: "Management VLAN"
          },
          useCombinedPower: {
            type: "boolean",
            description: "The use Combined Power as the default behavior of secondary power supplies on supported devices."
          },
          powerExceptions: {
            type: "array",
            description: "Exceptions on a per switch basis to \"useCombinedPower\""
          },
          uplinkClientSampling: {
            type: "object",
            description: "Uplink client sampling"
          },
          macBlocklist: {
            type: "object",
            description: "MAC blocklist"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSwitchStacksTool: Tool = {
  name: "getNetworkSwitchStacks",
  scope: "switch",
  description: "List the switch stacks in a network",
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

export const createNetworkSwitchStackTool: Tool = {
  name: "createNetworkSwitchStack",
  scope: "switch",
  description: "Create a switch stack",
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
            description: "The name of the new stack"
          },
          serials: {
            type: "array",
            description: "An array of switch serials to be added into the new stack"
          }
        }
      }
    },
    required: ["path.networkId, body.name, body.serials"],
  },
};

export const getNetworkSwitchStackTool: Tool = {
  name: "getNetworkSwitchStack",
  scope: "switch",
  description: "Show a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId"],
  },
};

export const deleteNetworkSwitchStackTool: Tool = {
  name: "deleteNetworkSwitchStack",
  scope: "switch",
  description: "Delete a stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId"],
  },
};

export const addNetworkSwitchStackTool: Tool = {
  name: "addNetworkSwitchStack",
  scope: "switch",
  description: "Add a switch to a stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          serial: {
            type: "string",
            description: "The serial of the switch to be added"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, body.serial"],
  },
};

export const updateNetworkSwitchStackPortsMirrorTool: Tool = {
  name: "updateNetworkSwitchStackPortsMirror",
  scope: "switch",
  description: "Update switch port mirrors for switch stacks",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          source: {
            type: "object",
            description: "Source port details"
          },
          destination: {
            type: "object",
            description: "Destination port Details"
          },
          tags: {
            type: "array",
            description: "Port mirror tags"
          },
          role: {
            type: "string",
            description: "Switch role can be source or destination"
          },
          comment: {
            type: "string",
            description: "My pretty comment"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, body.source, body.destination"],
  },
};

export const removeNetworkSwitchStackTool: Tool = {
  name: "removeNetworkSwitchStack",
  scope: "switch",
  description: "Remove a switch from a stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          serial: {
            type: "string",
            description: "The serial of the switch to be removed"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, body.serial"],
  },
};

export const getNetworkSwitchStackRoutingInterfacesTool: Tool = {
  name: "getNetworkSwitchStackRoutingInterfaces",
  scope: "switch",
  description: "List layer 3 interfaces for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          protocol: {
            type: "string",
            description: "Optional parameter to filter L3 interfaces by protocol."
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId"],
  },
};

export const createNetworkSwitchStackRoutingInterfaceTool: Tool = {
  name: "createNetworkSwitchStackRoutingInterface",
  scope: "switch",
  description: "Create a layer 3 interface for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "A friendly name or description for the interface or VLAN (max length 128 characters)."
          },
          subnet: {
            type: "string",
            description: "The network that this L3 interface is on, in CIDR notation (ex. 10.1.1.0/24)."
          },
          interfaceIp: {
            type: "string",
            description: "The IP address that will be used for Layer 3 routing on this VLAN or subnet. This cannot be the same         as the device management IP."
          },
          multicastRouting: {
            type: "string",
            description: "Enable multicast support if, multicast routing between VLANs is required. Options are:         'disabled', 'enabled' or 'IGMP snooping querier'. Default is 'disabled'."
          },
          vlanId: {
            type: "integer",
            description: "The VLAN this L3 interface is on. VLAN must be between 1 and 4094."
          },
          defaultGateway: {
            type: "string",
            description: "The next hop for any traffic that isn't going to a directly connected subnet or over a static route.         This IP address must exist in a subnet with a L3 interface. Required if this is the first IPv4 interface."
          },
          uplinkV4: {
            type: "boolean",
            description: "When true, this interface is used as static IPv4 uplink."
          },
          uplinkV6: {
            type: "boolean",
            description: "When true, this interface is used as static IPv6 uplink."
          },
          staticV4Dns1: {
            type: "string",
            description: "Primary IPv4 DNS server address"
          },
          staticV4Dns2: {
            type: "string",
            description: "Secondary IPv4 DNS server address"
          },
          ospfSettings: {
            type: "object",
            description: "The OSPF routing settings of the interface."
          },
          ipv6: {
            type: "object",
            description: "The IPv6 settings of the interface."
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, body.name"],
  },
};

export const getNetworkSwitchStackRoutingInterfaceTool: Tool = {
  name: "getNetworkSwitchStackRoutingInterface",
  scope: "switch",
  description: "Return a layer 3 interface from a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, path.interfaceId"],
  },
};

export const updateNetworkSwitchStackRoutingInterfaceTool: Tool = {
  name: "updateNetworkSwitchStackRoutingInterface",
  scope: "switch",
  description: "Update a layer 3 interface for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "A friendly name or description for the interface or VLAN (max length 128 characters)."
          },
          subnet: {
            type: "string",
            description: "The network that this L3 interface is on, in CIDR notation (ex. 10.1.1.0/24)."
          },
          interfaceIp: {
            type: "string",
            description: "The IP address that will be used for Layer 3 routing on this VLAN or subnet. This cannot be the same         as the device management IP."
          },
          multicastRouting: {
            type: "string",
            description: "Enable multicast support if, multicast routing between VLANs is required. Options are:         'disabled', 'enabled' or 'IGMP snooping querier'. Default is 'disabled'."
          },
          vlanId: {
            type: "integer",
            description: "The VLAN this L3 interface is on. VLAN must be between 1 and 4094."
          },
          defaultGateway: {
            type: "string",
            description: "The next hop for any traffic that isn't going to a directly connected subnet or over a static route.         This IP address must exist in a subnet with a L3 interface. Required if this is the first IPv4 interface."
          },
          uplinkV4: {
            type: "boolean",
            description: "When true, this interface is used as static IPv4 uplink."
          },
          uplinkV6: {
            type: "boolean",
            description: "When true, this interface is used as static IPv6 uplink."
          },
          staticV4Dns1: {
            type: "string",
            description: "Primary IPv4 DNS server address"
          },
          staticV4Dns2: {
            type: "string",
            description: "Secondary IPv4 DNS server address"
          },
          ospfSettings: {
            type: "object",
            description: "The OSPF routing settings of the interface."
          },
          ipv6: {
            type: "object",
            description: "The IPv6 settings of the interface."
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, path.interfaceId"],
  },
};

export const deleteNetworkSwitchStackRoutingInterfaceTool: Tool = {
  name: "deleteNetworkSwitchStackRoutingInterface",
  scope: "switch",
  description: "Delete a layer 3 interface from a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, path.interfaceId"],
  },
};

export const getNetworkSwitchStackRoutingInterfaceDhcpTool: Tool = {
  name: "getNetworkSwitchStackRoutingInterfaceDhcp",
  scope: "switch",
  description: "Return a layer 3 interface DHCP configuration for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, path.interfaceId"],
  },
};

export const updateNetworkSwitchStackRoutingInterfaceDhcpTool: Tool = {
  name: "updateNetworkSwitchStackRoutingInterfaceDhcp",
  scope: "switch",
  description: "Update a layer 3 interface DHCP configuration for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          },
          interfaceId: {
            type: "string",
            description: "Interface ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          dhcpMode: {
            type: "string",
            description: "The DHCP mode options for the switch stack interface        ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')"
          },
          dhcpRelayServerIps: {
            type: "array",
            description: "The DHCP relay server IPs to which DHCP packets would get relayed for the switch stack interface"
          },
          dhcpLeaseTime: {
            type: "string",
            description: "The DHCP lease time config for the dhcp server running on switch stack interface        ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')"
          },
          dnsNameserversOption: {
            type: "string",
            description: "The DHCP name server option for the dhcp server running on the switch stack interface        ('googlePublicDns', 'openDns' or 'custom')"
          },
          dnsCustomNameservers: {
            type: "array",
            description: "The DHCP name server IPs when DHCP name server option is '        custom'"
          },
          bootOptionsEnabled: {
            type: "boolean",
            description: "Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch        stack interface"
          },
          bootNextServer: {
            type: "string",
            description: "The PXE boot server IP for the DHCP server running on the switch stack interface"
          },
          bootFileName: {
            type: "string",
            description: "The PXE boot server file name for the DHCP server running on the switch stack interface"
          },
          dhcpOptions: {
            type: "array",
            description: "Array of DHCP options consisting of code, type and value for the DHCP server running on the        switch stack interface"
          },
          reservedIpRanges: {
            type: "array",
            description: "Array of DHCP reserved IP assignments for the DHCP server running on the switch stack interface"
          },
          fixedIpAssignments: {
            type: "array",
            description: "Array of DHCP fixed IP assignments for the DHCP server running on the switch stack interface"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, path.interfaceId"],
  },
};

export const getNetworkSwitchStackRoutingStaticRoutesTool: Tool = {
  name: "getNetworkSwitchStackRoutingStaticRoutes",
  scope: "switch",
  description: "List layer 3 static routes for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId"],
  },
};

export const createNetworkSwitchStackRoutingStaticRouteTool: Tool = {
  name: "createNetworkSwitchStackRoutingStaticRoute",
  scope: "switch",
  description: "Create a layer 3 static route for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name or description for layer 3 static route"
          },
          subnet: {
            type: "string",
            description: "The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)"
          },
          nextHopIp: {
            type: "string",
            description: "IP address of the next hop device to which the device sends its traffic for the subnet"
          },
          advertiseViaOspfEnabled: {
            type: "boolean",
            description: "Option to advertise static route via OSPF"
          },
          preferOverOspfRoutesEnabled: {
            type: "boolean",
            description: "Option to prefer static route over OSPF routes"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, body.subnet, body.nextHopIp"],
  },
};

export const getNetworkSwitchStackRoutingStaticRouteTool: Tool = {
  name: "getNetworkSwitchStackRoutingStaticRoute",
  scope: "switch",
  description: "Return a layer 3 static route for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          },
          staticRouteId: {
            type: "string",
            description: "Static route ID"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, path.staticRouteId"],
  },
};

export const updateNetworkSwitchStackRoutingStaticRouteTool: Tool = {
  name: "updateNetworkSwitchStackRoutingStaticRoute",
  scope: "switch",
  description: "Update a layer 3 static route for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          },
          staticRouteId: {
            type: "string",
            description: "Static route ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name or description for layer 3 static route"
          },
          subnet: {
            type: "string",
            description: "The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)"
          },
          nextHopIp: {
            type: "string",
            description: "IP address of the next hop device to which the device sends its traffic for the subnet"
          },
          managementNextHop: {
            type: "string",
            description: "Optional fallback IP address for management traffic"
          },
          advertiseViaOspfEnabled: {
            type: "boolean",
            description: "Option to advertise static route via OSPF"
          },
          preferOverOspfRoutesEnabled: {
            type: "boolean",
            description: "Option to prefer static route over OSPF routes"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, path.staticRouteId"],
  },
};

export const deleteNetworkSwitchStackRoutingStaticRouteTool: Tool = {
  name: "deleteNetworkSwitchStackRoutingStaticRoute",
  scope: "switch",
  description: "Delete a layer 3 static route for a switch stack",
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
          switchStackId: {
            type: "string",
            description: "Switch stack ID"
          },
          staticRouteId: {
            type: "string",
            description: "Static route ID"
          }
        }
      }
    },
    required: ["path.networkId, path.switchStackId, path.staticRouteId"],
  },
};

export const getNetworkSwitchStormControlTool: Tool = {
  name: "getNetworkSwitchStormControl",
  scope: "switch",
  description: "Return the storm control configuration for a switch network",
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

export const updateNetworkSwitchStormControlTool: Tool = {
  name: "updateNetworkSwitchStormControl",
  scope: "switch",
  description: "Update the storm control configuration for a switch network",
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
          broadcastThreshold: {
            type: "integer",
            description: "Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration."
          },
          multicastThreshold: {
            type: "integer",
            description: "Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration."
          },
          unknownUnicastThreshold: {
            type: "integer",
            description: "Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration."
          },
          treatTheseTrafficTypesAsOneThreshold: {
            type: "array",
            description: "Grouped traffic types"
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getNetworkSwitchStpTool: Tool = {
  name: "getNetworkSwitchStp",
  scope: "switch",
  description: "Returns STP settings",
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

export const updateNetworkSwitchStpTool: Tool = {
  name: "updateNetworkSwitchStp",
  scope: "switch",
  description: "Updates STP settings",
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
          rstpEnabled: {
            type: "boolean",
            description: "The spanning tree protocol status in network"
          },
          stpBridgePriority: {
            type: "array",
            description: "STP bridge priority for switches/stacks or switch templates. An empty array will clear the STP bridge priority settings."
          }
        }
      }
    },
    required: ["path.networkId"],
  },
};

export const getOrganizationConfigTemplatesSwitchProfilesPortsMirrorsBySwitchProfileTool: Tool = {
  name: "getOrganizationConfigTemplatesSwitchProfilesPortsMirrorsBySwitch",
  scope: "switch",
  description: "list the port mirror configurations in an organization by switch profile",
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
          configTemplateIds: {
            type: "array",
            description: "Optional parameter to filter the result set by the included set of config template IDs"
          },
          ids: {
            type: "array",
            description: "A list of switch profile ids. The returned profiles will be filtered to only include these ids."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 100."
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

export const getOrganizationConfigTemplateSwitchProfilesTool: Tool = {
  name: "getOrganizationConfigTemplateSwitchProfiles",
  scope: "switch",
  description: "List the switch templates for your switch template configuration",
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
          configTemplateId: {
            type: "string",
            description: "Config template ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.configTemplateId"],
  },
};

export const getOrganizationConfigTemplateSwitchProfilePortsTool: Tool = {
  name: "getOrganizationConfigTemplateSwitchProfilePorts",
  scope: "switch",
  description: "Return all the ports of a switch template",
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
          configTemplateId: {
            type: "string",
            description: "Config template ID"
          },
          profileId: {
            type: "string",
            description: "Profile ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.configTemplateId, path.profileId"],
  },
};

export const updateOrganizationConfigTemplateSwitchProfilePortsMirrorTool: Tool = {
  name: "updateOrganizationConfigTemplateSwitchProfilePortsMirror",
  scope: "switch",
  description: "Update a port mirror",
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
          configTemplateId: {
            type: "string",
            description: "Config template ID"
          },
          profileId: {
            type: "string",
            description: "Profile ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          source: {
            type: "object",
            description: "Source ports mirror configuration"
          },
          destination: {
            type: "object",
            description: "Destination port mirror configuration"
          },
          tags: {
            type: "array",
            description: "Port mirror tags"
          },
          role: {
            type: "string",
            description: "Switch role can be source or destination"
          },
          comment: {
            type: "string",
            description: "My pretty comment"
          }
        }
      }
    },
    required: ["path.organizationId, path.configTemplateId, path.profileId, body.source, body.destination"],
  },
};

export const getOrganizationConfigTemplateSwitchProfilePortTool: Tool = {
  name: "getOrganizationConfigTemplateSwitchProfilePort",
  scope: "switch",
  description: "Return a switch template port",
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
          configTemplateId: {
            type: "string",
            description: "Config template ID"
          },
          profileId: {
            type: "string",
            description: "Profile ID"
          },
          portId: {
            type: "string",
            description: "Port ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.configTemplateId, path.profileId, path.portId"],
  },
};

export const updateOrganizationConfigTemplateSwitchProfilePortTool: Tool = {
  name: "updateOrganizationConfigTemplateSwitchProfilePort",
  scope: "switch",
  description: "Update a switch template port",
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
          configTemplateId: {
            type: "string",
            description: "Config template ID"
          },
          profileId: {
            type: "string",
            description: "Profile ID"
          },
          portId: {
            type: "string",
            description: "Port ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of the switch template port."
          },
          tags: {
            type: "array",
            description: "The list of tags of the switch template port."
          },
          enabled: {
            type: "boolean",
            description: "The status of the switch template port."
          },
          poeEnabled: {
            type: "boolean",
            description: "The PoE status of the switch template port."
          },
          type: {
            type: "string",
            description: "The type of the switch template port ('trunk', 'access', 'stack' or 'routed')."
          },
          vlan: {
            type: "integer",
            description: "The VLAN of the switch template port. For a trunk port, this is the native VLAN. A null value will clear the value set for trunk ports."
          },
          voiceVlan: {
            type: "integer",
            description: "The voice VLAN of the switch template port. Only applicable to access ports."
          },
          allowedVlans: {
            type: "string",
            description: "The VLANs allowed on the switch template port. Only applicable to trunk ports."
          },
          isolationEnabled: {
            type: "boolean",
            description: "The isolation status of the switch template port."
          },
          rstpEnabled: {
            type: "boolean",
            description: "The rapid spanning tree protocol status."
          },
          stpGuard: {
            type: "string",
            description: "The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard')."
          },
          linkNegotiation: {
            type: "string",
            description: "The link speed for the switch template port."
          },
          portScheduleId: {
            type: "string",
            description: "The ID of the port schedule. A value of null will clear the port schedule."
          },
          udld: {
            type: "string",
            description: "The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only."
          },
          accessPolicyType: {
            type: "string",
            description: "The type of the access policy of the switch template port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'."
          },
          accessPolicyNumber: {
            type: "integer",
            description: "The number of a custom access policy to configure on the switch template port. Only applicable when 'accessPolicyType' is 'Custom access policy'."
          },
          macAllowList: {
            type: "array",
            description: "Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'."
          },
          macWhitelistLimit: {
            type: "integer",
            description: "The maximum number of MAC addresses for regular MAC allow list. Only applicable when 'accessPolicyType' is 'MAC allow list'.          Note: Config only supported on verions greater than ms18 only for classic switches."
          },
          stickyMacAllowList: {
            type: "array",
            description: "The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'."
          },
          stickyMacAllowListLimit: {
            type: "integer",
            description: "The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'."
          },
          stormControlEnabled: {
            type: "boolean",
            description: "The storm control status of the switch template port."
          },
          flexibleStackingEnabled: {
            type: "boolean",
            description: "For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled."
          },
          daiTrusted: {
            type: "boolean",
            description: "If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic."
          },
          profile: {
            type: "object",
            description: "Profile attributes"
          },
          dot3az: {
            type: "object",
            description: "dot3az settings for the port"
          }
        }
      }
    },
    required: ["path.organizationId, path.configTemplateId, path.profileId, path.portId"],
  },
};

export const getOrganizationSummarySwitchPowerHistoryTool: Tool = {
  name: "getOrganizationSummarySwitchPowerHistory",
  scope: "switch",
  description: "Returns the total PoE power draw for all switch ports in the organization over the requested timespan (by default the last 24 hours). The returned array is a newest-first list of intervals. The time between intervals depends on the requested timespan with 20 minute intervals used for timespans up to 1 day, 4 hour intervals used for timespans up to 2 weeks, and 1 day intervals for timespans larger than 2 weeks.",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data."
          },
          t1: {
            type: "string",
            description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 186 days. The default is 1 day."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const cloneOrganizationSwitchDevicesTool: Tool = {
  name: "cloneOrganizationSwitchDevices",
  scope: "switch",
  description: "Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring",
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
          sourceSerial: {
            type: "string",
            description: "Serial number of the source switch (must be on a network not bound to a template)"
          },
          targetSerials: {
            type: "array",
            description: "Array of serial numbers of one or more target switches (must be on a network not bound to a template)"
          }
        }
      }
    },
    required: ["path.organizationId, body.sourceSerial, body.targetSerials"],
  },
};

export const getOrganizationSwitchDevicesSystemQueuesHistoryBySwitchByIntervalTool: Tool = {
  name: "getOrganizationSwitchDevicesSystemQueuesHistoryBySwitchByInterva",
  scope: "switch",
  description: "Return a historical record of packet transmission and loss, broken down by protocol, for insight into switch device health.",
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
            description: "The number of entries per page returned. Acceptable range is 3 - 100. Default is 50."
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
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. If interval is provided, the timespan will be autocalculated."
          },
          interval: {
            type: "integer",
            description: "The time interval in seconds for returned data. The valid intervals are: 300, 1200, 14400, 86400. The default is 1200. Interval is calculated if time params are provided."
          },
          networkIds: {
            type: "array",
            description: "Optional parameter to filter connectivity history by network ID. This filter uses multiple exact matches."
          },
          serials: {
            type: "array",
            description: "Optional parameter to filter connectivity history by switch."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsBySwitchTool: Tool = {
  name: "getOrganizationSwitchPortsBySwitch",
  scope: "switch",
  description: "List the switchports in an organization by switch",
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
            description: "The number of entries per page returned. Acceptable range is 3 - 50. Default is 50."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          extendedParams: {
            type: "boolean",
            description: "Optional flag to return all of the switchport data vs smaller dataset"
          },
          configurationUpdatedAfter: {
            type: "string",
            description: "Optional parameter to filter items to switches where the configuration has been updated after the given timestamp."
          },
          mac: {
            type: "string",
            description: "Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match."
          },
          macs: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided MAC addresses."
          },
          name: {
            type: "string",
            description: "Optional parameter to filter items to switches with names that contain the search term or are an exact match."
          },
          networkIds: {
            type: "array",
            description: "Optional parameter to filter items to switches in one of the provided networks."
          },
          portProfileIds: {
            type: "array",
            description: "Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles."
          },
          serial: {
            type: "string",
            description: "Optional parameter to filter items to switches with serial number that contains the search term or are an exact match."
          },
          serials: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided serials."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsClientsOverviewByDeviceTool: Tool = {
  name: "getOrganizationSwitchPortsClientsOverviewByDevice",
  scope: "switch",
  description: "List the number of clients for all switchports with at least one online client in an organization.",
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
            description: "The number of entries per page returned. Acceptable range is 3 - 20. Default is 20."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          configurationUpdatedAfter: {
            type: "string",
            description: "Optional parameter to filter items to switches where the configuration has been updated after the given timestamp."
          },
          mac: {
            type: "string",
            description: "Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match."
          },
          macs: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided MAC addresses."
          },
          name: {
            type: "string",
            description: "Optional parameter to filter items to switches with names that contain the search term or are an exact match."
          },
          networkIds: {
            type: "array",
            description: "Optional parameter to filter items to switches in one of the provided networks."
          },
          portProfileIds: {
            type: "array",
            description: "Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles."
          },
          serial: {
            type: "string",
            description: "Optional parameter to filter items to switches with serial number that contains the search term or are an exact match."
          },
          serials: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided serials."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsMirrorsBySwitchTool: Tool = {
  name: "getOrganizationSwitchPortsMirrorsBySwitch",
  scope: "switch",
  description: "list the port mirror configurations in an organization by switch",
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
          networkIds: {
            type: "array",
            description: "Optional parameter to filter the result set by the included set of network IDs"
          },
          serials: {
            type: "array",
            description: "A list of serial numbers. The returned devices will be filtered to only include these serials."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 100."
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

export const getOrganizationSwitchPortsOverviewTool: Tool = {
  name: "getOrganizationSwitchPortsOverview",
  scope: "switch",
  description: "Returns the counts of all active ports for the requested timespan, grouped by speed. An active port is a port that at any point during the timeframe is observed to be connected to a responsive device and isn't configured to be disabled. For a port that is observed at multiple speeds during the timeframe, it will be counted at the highest speed observed. The number of inactive ports, and the total number of ports are also provided. Only ports on switches online during the timeframe will be represented and a port is only guaranteed to be present if its switch was online for at least 6 hours of the timeframe.",
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
          t0: {
            type: "string",
            description: "The beginning of the timespan for the data."
          },
          t1: {
            type: "string",
            description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 12 hours and be less than or equal to 186 days. The default is 1 day."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsProfilesTool: Tool = {
  name: "getOrganizationSwitchPortsProfiles",
  scope: "switch",
  description: "List the port profiles in an organization",
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
          networkIds: {
            type: "array",
            description: "Return the port profiles for the specified network(s)"
          },
          formattedStaticAssignments: {
            type: "boolean",
            description: "Returns the list of static switchports that are assgined to the switchport profile"
          },
          searchQuery: {
            type: "string",
            description: "Optional parameter to filter the result set by the search query"
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
    required: ["path.organizationId"],
  },
};

export const createOrganizationSwitchPortsProfileTool: Tool = {
  name: "createOrganizationSwitchPortsProfile",
  scope: "switch",
  description: "Create a port profile in an organization",
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
            description: "The name of the profile."
          },
          description: {
            type: "string",
            description: "Text describing the profile."
          },
          isOrganizationWide: {
            type: "boolean",
            description: "The scope of the profile whether it is organization level or network level"
          },
          networks: {
            type: "object",
            description: "The networks which are included/excluded in the profile"
          },
          networkId: {
            type: "string",
            description: "The network identifier"
          },
          tags: {
            type: "array",
            description: "Space-seperated list of tags"
          },
          port: {
            type: "object",
            description: "Configuration settings for port profile"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsProfilesAutomationsTool: Tool = {
  name: "getOrganizationSwitchPortsProfilesAutomations",
  scope: "switch",
  description: "list the automation port profiles in an organization",
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
          ids: {
            type: "array",
            description: "Optional parameter to filter the result set by the included set of automation IDs"
          },
          networkIds: {
            type: "array",
            description: "Optional parameter to filter the result set by the associated networks."
          },
          isOrganizationWide: {
            type: "string",
            description: "Optional parameter to filter the result set by automations org-wide flag."
          },
          searchQuery: {
            type: "string",
            description: "Optional parameter to filter the result set by the search query"
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
    required: ["path.organizationId"],
  },
};

export const createOrganizationSwitchPortsProfilesAutomationTool: Tool = {
  name: "createOrganizationSwitchPortsProfilesAutomation",
  scope: "switch",
  description: "Create a port profile automation for an organization",
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
            description: "Name of the port profile automation."
          },
          description: {
            type: "string",
            description: "Text describing the port profile automation."
          },
          fallbackProfile: {
            type: "object",
            description: "Configuration settings for port profile"
          },
          rules: {
            type: "array",
            description: "Configuration settings for port profile automation rules"
          },
          assignedSwitchPorts: {
            type: "array",
            description: "assigned switch ports"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const updateOrganizationSwitchPortsProfilesAutomationTool: Tool = {
  name: "updateOrganizationSwitchPortsProfilesAutomation",
  scope: "switch",
  description: "Update a port profile automation in an organization",
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
          id: {
            type: "string",
            description: "ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name of the port profile automation."
          },
          description: {
            type: "string",
            description: "Text describing the port profile automation."
          },
          fallbackProfile: {
            type: "object",
            description: "Configuration settings for port profile"
          },
          rules: {
            type: "array",
            description: "Configuration settings for port profile automation rules"
          },
          assignedSwitchPorts: {
            type: "array",
            description: "assigned switch ports"
          }
        }
      }
    },
    required: ["path.organizationId, path.id"],
  },
};

export const deleteOrganizationSwitchPortsProfilesAutomationTool: Tool = {
  name: "deleteOrganizationSwitchPortsProfilesAutomation",
  scope: "switch",
  description: "Delete an automation port profile from an organization",
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
          id: {
            type: "string",
            description: "ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.id"],
  },
};

export const getOrganizationSwitchPortsProfilesNetworksAssignmentsTool: Tool = {
  name: "getOrganizationSwitchPortsProfilesNetworksAssignments",
  scope: "switch",
  description: "Fetch all Network - Smart Port Profile associations for an organization",
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
            description: "Number of records per page"
          },
          page: {
            type: "integer",
            description: "Page number"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const createOrganizationSwitchPortsProfilesNetworksAssignmentTool: Tool = {
  name: "createOrganizationSwitchPortsProfilesNetworksAssignment",
  scope: "switch",
  description: "Create Network and Smart Ports Profile association for a specific profile",
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
          type: {
            type: "string",
            description: "Type of association"
          },
          profile: {
            type: "object",
            description: "Smart Port Profile object"
          },
          network: {
            type: "object",
            description: "Network object"
          }
        }
      }
    },
    required: ["path.organizationId, body.type, body.profile, body.network"],
  },
};

export const batchOrganizationSwitchPortsProfilesNetworksAssignmentsCreateTool: Tool = {
  name: "batchOrganizationSwitchPortsProfilesNetworksAssignmentsCreate",
  scope: "switch",
  description: "Batch Create Network and Smart Ports Profile associations for a specific profile",
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
            description: "Array of network and profile associations"
          }
        }
      }
    },
    required: ["path.organizationId, body.items"],
  },
};

export const bulkOrganizationSwitchPortsProfilesNetworksAssignmentsDeleteTool: Tool = {
  name: "bulkOrganizationSwitchPortsProfilesNetworksAssignmentsDelete",
  scope: "switch",
  description: "Bulk delete Network and Smart Port Profile associations",
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
            description: "Array of assignments to delete"
          }
        }
      }
    },
    required: ["path.organizationId, body.items"],
  },
};

export const deleteOrganizationSwitchPortsProfilesNetworksAssignmentTool: Tool = {
  name: "deleteOrganizationSwitchPortsProfilesNetworksAssignment",
  scope: "switch",
  description: "Delete Network and Smart Port profile association for a specific profile",
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
          assignmentId: {
            type: "string",
            description: "Assignment ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.assignmentId"],
  },
};

export const getOrganizationSwitchPortsProfilesOverviewByProfileTool: Tool = {
  name: "getOrganizationSwitchPortsProfilesOverviewByProfile",
  scope: "switch",
  description: "List the port profiles in an organization",
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
          networkIds: {
            type: "array",
            description: "Return the port profiles for the specified network(s)"
          },
          formattedStaticAssignments: {
            type: "boolean",
            description: "Returns the list of static switchports that are assgined to the switchport profile"
          },
          searchQuery: {
            type: "string",
            description: "Optional parameter to filter the result set by the search query"
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
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsProfileTool: Tool = {
  name: "getOrganizationSwitchPortsProfile",
  scope: "switch",
  description: "Get detailed information about a port profile",
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
          id: {
            type: "string",
            description: "ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.id"],
  },
};

export const updateOrganizationSwitchPortsProfileTool: Tool = {
  name: "updateOrganizationSwitchPortsProfile",
  scope: "switch",
  description: "Update a port profile in an organization",
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
          id: {
            type: "string",
            description: "ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "The name of the profile."
          },
          description: {
            type: "string",
            description: "Text describing the profile."
          },
          isOrganizationWide: {
            type: "boolean",
            description: "The scope of the profile whether it is organization level or network level"
          },
          networks: {
            type: "object",
            description: "The networks which are included/excluded in the profile"
          },
          networkId: {
            type: "string",
            description: "The network identifier"
          },
          tags: {
            type: "array",
            description: "Space-seperated list of tags"
          },
          port: {
            type: "object",
            description: "Configuration settings for port profile"
          }
        }
      }
    },
    required: ["path.organizationId, path.id"],
  },
};

export const deleteOrganizationSwitchPortsProfileTool: Tool = {
  name: "deleteOrganizationSwitchPortsProfile",
  scope: "switch",
  description: "Delete a port profile from an organization",
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
          id: {
            type: "string",
            description: "ID"
          }
        }
      }
    },
    required: ["path.organizationId, path.id"],
  },
};

export const getOrganizationSwitchPortsStatusesBySwitchTool: Tool = {
  name: "getOrganizationSwitchPortsStatusesBySwitch",
  scope: "switch",
  description: "List the switchports in an organization",
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
            description: "The number of entries per page returned. Acceptable range is 3 - 20. Default is 10."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          configurationUpdatedAfter: {
            type: "string",
            description: "Optional parameter to filter items to switches where the configuration has been updated after the given timestamp."
          },
          mac: {
            type: "string",
            description: "Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match."
          },
          macs: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided MAC addresses."
          },
          name: {
            type: "string",
            description: "Optional parameter to filter items to switches with names that contain the search term or are an exact match."
          },
          networkIds: {
            type: "array",
            description: "Optional parameter to filter items to switches in one of the provided networks."
          },
          portProfileIds: {
            type: "array",
            description: "Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles."
          },
          serial: {
            type: "string",
            description: "Optional parameter to filter items to switches with serial number that contains the search term or are an exact match."
          },
          serials: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided serials."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsTopologyDiscoveryByDeviceTool: Tool = {
  name: "getOrganizationSwitchPortsTopologyDiscoveryByDevice",
  scope: "switch",
  description: "List most recently seen LLDP/CDP discovery and topology information per switch port in an organization.",
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
            description: "The number of entries per page returned. Acceptable range is 3 - 20. Default is 10."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          configurationUpdatedAfter: {
            type: "string",
            description: "Optional parameter to filter items to switches where the configuration has been updated after the given timestamp."
          },
          mac: {
            type: "string",
            description: "Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match."
          },
          macs: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided MAC addresses."
          },
          name: {
            type: "string",
            description: "Optional parameter to filter items to switches with names that contain the search term or are an exact match."
          },
          networkIds: {
            type: "array",
            description: "Optional parameter to filter items to switches in one of the provided networks."
          },
          portProfileIds: {
            type: "array",
            description: "Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles."
          },
          serial: {
            type: "string",
            description: "Optional parameter to filter items to switches with serial number that contains the search term or are an exact match."
          },
          serials: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided serials."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsTransceiversReadingsHistoryBySwitchTool: Tool = {
  name: "getOrganizationSwitchPortsTransceiversReadingsHistoryBySwitch",
  scope: "switch",
  description: "Return time-series digital optical monitoring (DOM) readings for ports on each DOM-enabled switch in an organization, in addition to thresholds for each relevant Small Form Factor Pluggable (SFP) module.",
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
            description: "The number of entries per page returned. Acceptable range is 3 - 100. Default is 50."
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
            description: "The beginning of the timespan for the data. The maximum lookback period is 30 days from today."
          },
          t1: {
            type: "string",
            description: "The end of the timespan for the data. t1 can be a maximum of 30 days after t0."
          },
          timespan: {
            type: "number",
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 30 days. The default is 1 day. If interval is provided, the timespan will be autocalculated."
          },
          interval: {
            type: "integer",
            description: "The time interval in seconds for returned data. The valid intervals are: 300, 1200, 14400, 86400. The default is 1200. Interval is calculated if time params are provided."
          },
          networkIds: {
            type: "array",
            description: "Networks for which information should be gathered."
          },
          serials: {
            type: "array",
            description: "Optional parameter to filter usage by switch."
          },
          portIds: {
            type: "array",
            description: "Optional parameter to filter usage by port ID."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchPortsUsageHistoryByDeviceByIntervalTool: Tool = {
  name: "getOrganizationSwitchPortsUsageHistoryByDeviceByInterval",
  scope: "switch",
  description: "List the historical usage and traffic data of switchports in an organization.",
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
            description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. If interval is provided, the timespan will be autocalculated."
          },
          interval: {
            type: "integer",
            description: "The time interval in seconds for returned data. The valid intervals are: 300, 1200, 14400, 86400. The default is 1200. Interval is calculated if time params are provided."
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 50. Default is 10."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          configurationUpdatedAfter: {
            type: "string",
            description: "Optional parameter to filter items to switches where the configuration has been updated after the given timestamp."
          },
          mac: {
            type: "string",
            description: "Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match."
          },
          macs: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided MAC addresses."
          },
          name: {
            type: "string",
            description: "Optional parameter to filter items to switches with names that contain the search term or are an exact match."
          },
          networkIds: {
            type: "array",
            description: "Optional parameter to filter items to switches in one of the provided networks."
          },
          portProfileIds: {
            type: "array",
            description: "Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles."
          },
          serial: {
            type: "string",
            description: "Optional parameter to filter items to switches with serial number that contains the search term or are an exact match."
          },
          serials: {
            type: "array",
            description: "Optional parameter to filter items to switches that have one of the provided serials."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationSwitchStacksPortsMirrorsByStackTool: Tool = {
  name: "getOrganizationSwitchStacksPortsMirrorsByStack",
  scope: "switch",
  description: "List the port mirror configurations in an organization by switch",
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
          ids: {
            type: "array",
            description: "Return the port mirror configuration for the specified stack(s)"
          },
          networkIds: {
            type: "array",
            description: "Return the port mirror configurations for the specified network(s)"
          },
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 100."
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

export const switchTools = [
  getDeviceSwitchPortsTool,
  cycleDeviceSwitchPortsTool,
  updateDeviceSwitchPortsMirrorTool,
  getDeviceSwitchPortsStatusesTool,
  getDeviceSwitchPortsStatusesPacketsTool,
  getDeviceSwitchPortTool,
  updateDeviceSwitchPortTool,
  getDeviceSwitchRoutingInterfacesTool,
  createDeviceSwitchRoutingInterfaceTool,
  getDeviceSwitchRoutingInterfaceTool,
  updateDeviceSwitchRoutingInterfaceTool,
  deleteDeviceSwitchRoutingInterfaceTool,
  getDeviceSwitchRoutingInterfaceDhcpTool,
  updateDeviceSwitchRoutingInterfaceDhcpTool,
  getDeviceSwitchRoutingStaticRoutesTool,
  createDeviceSwitchRoutingStaticRouteTool,
  getDeviceSwitchRoutingStaticRouteTool,
  updateDeviceSwitchRoutingStaticRouteTool,
  deleteDeviceSwitchRoutingStaticRouteTool,
  getDeviceSwitchWarmSpareTool,
  updateDeviceSwitchWarmSpareTool,
  getNetworkSwitchAccessControlListsTool,
  updateNetworkSwitchAccessControlListsTool,
  getNetworkSwitchAccessPoliciesTool,
  createNetworkSwitchAccessPolicyTool,
  getNetworkSwitchAccessPolicyTool,
  updateNetworkSwitchAccessPolicyTool,
  deleteNetworkSwitchAccessPolicyTool,
  getNetworkSwitchAlternateManagementInterfaceTool,
  updateNetworkSwitchAlternateManagementInterfaceTool,
  getNetworkSwitchDhcpV4ServersSeenTool,
  getNetworkSwitchDhcpServerPolicyTool,
  updateNetworkSwitchDhcpServerPolicyTool,
  getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersTool,
  createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerTool,
  updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerTool,
  deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerTool,
  getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceTool,
  getNetworkSwitchDscpToCosMappingsTool,
  updateNetworkSwitchDscpToCosMappingsTool,
  getNetworkSwitchLinkAggregationsTool,
  createNetworkSwitchLinkAggregationTool,
  updateNetworkSwitchLinkAggregationTool,
  deleteNetworkSwitchLinkAggregationTool,
  getNetworkSwitchMtuTool,
  updateNetworkSwitchMtuTool,
  getNetworkSwitchPortSchedulesTool,
  createNetworkSwitchPortScheduleTool,
  deleteNetworkSwitchPortScheduleTool,
  updateNetworkSwitchPortScheduleTool,
  getNetworkSwitchPortsProfilesTool,
  createNetworkSwitchPortsProfileTool,
  updateNetworkSwitchPortsProfileTool,
  deleteNetworkSwitchPortsProfileTool,
  getNetworkSwitchQosRulesTool,
  createNetworkSwitchQosRuleTool,
  getNetworkSwitchQosRulesOrderTool,
  updateNetworkSwitchQosRulesOrderTool,
  getNetworkSwitchQosRuleTool,
  deleteNetworkSwitchQosRuleTool,
  updateNetworkSwitchQosRuleTool,
  getNetworkSwitchRoutingMulticastTool,
  updateNetworkSwitchRoutingMulticastTool,
  getNetworkSwitchRoutingMulticastRendezvousPointsTool,
  createNetworkSwitchRoutingMulticastRendezvousPointTool,
  getNetworkSwitchRoutingMulticastRendezvousPointTool,
  deleteNetworkSwitchRoutingMulticastRendezvousPointTool,
  updateNetworkSwitchRoutingMulticastRendezvousPointTool,
  getNetworkSwitchRoutingOspfTool,
  updateNetworkSwitchRoutingOspfTool,
  getNetworkSwitchSettingsTool,
  updateNetworkSwitchSettingsTool,
  getNetworkSwitchStacksTool,
  createNetworkSwitchStackTool,
  getNetworkSwitchStackTool,
  deleteNetworkSwitchStackTool,
  addNetworkSwitchStackTool,
  updateNetworkSwitchStackPortsMirrorTool,
  removeNetworkSwitchStackTool,
  getNetworkSwitchStackRoutingInterfacesTool,
  createNetworkSwitchStackRoutingInterfaceTool,
  getNetworkSwitchStackRoutingInterfaceTool,
  updateNetworkSwitchStackRoutingInterfaceTool,
  deleteNetworkSwitchStackRoutingInterfaceTool,
  getNetworkSwitchStackRoutingInterfaceDhcpTool,
  updateNetworkSwitchStackRoutingInterfaceDhcpTool,
  getNetworkSwitchStackRoutingStaticRoutesTool,
  createNetworkSwitchStackRoutingStaticRouteTool,
  getNetworkSwitchStackRoutingStaticRouteTool,
  updateNetworkSwitchStackRoutingStaticRouteTool,
  deleteNetworkSwitchStackRoutingStaticRouteTool,
  getNetworkSwitchStormControlTool,
  updateNetworkSwitchStormControlTool,
  getNetworkSwitchStpTool,
  updateNetworkSwitchStpTool,
  getOrganizationConfigTemplatesSwitchProfilesPortsMirrorsBySwitchProfileTool,
  getOrganizationConfigTemplateSwitchProfilesTool,
  getOrganizationConfigTemplateSwitchProfilePortsTool,
  updateOrganizationConfigTemplateSwitchProfilePortsMirrorTool,
  getOrganizationConfigTemplateSwitchProfilePortTool,
  updateOrganizationConfigTemplateSwitchProfilePortTool,
  getOrganizationSummarySwitchPowerHistoryTool,
  cloneOrganizationSwitchDevicesTool,
  getOrganizationSwitchDevicesSystemQueuesHistoryBySwitchByIntervalTool,
  getOrganizationSwitchPortsBySwitchTool,
  getOrganizationSwitchPortsClientsOverviewByDeviceTool,
  getOrganizationSwitchPortsMirrorsBySwitchTool,
  getOrganizationSwitchPortsOverviewTool,
  getOrganizationSwitchPortsProfilesTool,
  createOrganizationSwitchPortsProfileTool,
  getOrganizationSwitchPortsProfilesAutomationsTool,
  createOrganizationSwitchPortsProfilesAutomationTool,
  updateOrganizationSwitchPortsProfilesAutomationTool,
  deleteOrganizationSwitchPortsProfilesAutomationTool,
  getOrganizationSwitchPortsProfilesNetworksAssignmentsTool,
  createOrganizationSwitchPortsProfilesNetworksAssignmentTool,
  batchOrganizationSwitchPortsProfilesNetworksAssignmentsCreateTool,
  bulkOrganizationSwitchPortsProfilesNetworksAssignmentsDeleteTool,
  deleteOrganizationSwitchPortsProfilesNetworksAssignmentTool,
  getOrganizationSwitchPortsProfilesOverviewByProfileTool,
  getOrganizationSwitchPortsProfileTool,
  updateOrganizationSwitchPortsProfileTool,
  deleteOrganizationSwitchPortsProfileTool,
  getOrganizationSwitchPortsStatusesBySwitchTool,
  getOrganizationSwitchPortsTopologyDiscoveryByDeviceTool,
  getOrganizationSwitchPortsTransceiversReadingsHistoryBySwitchTool,
  getOrganizationSwitchPortsUsageHistoryByDeviceByIntervalTool,
  getOrganizationSwitchStacksPortsMirrorsByStackTool
];