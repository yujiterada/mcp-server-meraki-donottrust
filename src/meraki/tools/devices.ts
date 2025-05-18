import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getDeviceTool: Tool = {
  name: "getDevice",
  scope: "",
  description: "Return a single device",
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

export const updateDeviceTool: Tool = {
  name: "updateDevice",
  scope: "",
  description: "Update the attributes of a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-name": {
        type: "string",
        description: "The name of a device"
      },
      "body-tags": {
        type: "array",
        description: "The list of tags of a device"
      },
      "body-lat": {
        type: "number",
        description: "The latitude of a device"
      },
      "body-lng": {
        type: "number",
        description: "The longitude of a device"
      },
      "body-address": {
        type: "string",
        description: "The address of a device"
      },
      "body-notes": {
        type: "string",
        description: "The notes for the device. String. Limited to 255 characters."
      },
      "body-moveMapMarker": {
        type: "boolean",
        description: "Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified."
      },
      "body-switchProfileId": {
        type: "string",
        description: "The ID of a switch template to bind to the device (for available switch templates, see the 'Switch Templates' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch template, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template."
      },
      "body-floorPlanId": {
        type: "string",
        description: "The floor plan to associate to this device. null disassociates the device from the floorplan."
      }
    },
    required: ["path-serial"],
  },
};

export const blinkDeviceLedsTool: Tool = {
  name: "blinkDeviceLeds",
  scope: "",
  description: "Blink the LEDs on a device.  This endpoint is deprecrated in favor of \"/devices/{serial}/liveTools/leds/blink\".",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-duration": {
        type: "integer",
        description: "The duration in seconds. Must be between 5 and 120. Default is 20 seconds"
      },
      "body-period": {
        type: "integer",
        description: "The period in milliseconds. Must be between 100 and 1000. Default is 160 milliseconds"
      },
      "body-duty": {
        type: "integer",
        description: "The duty cycle as the percent active. Must be between 10 and 90. Default is 50."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceCellularSimsTool: Tool = {
  name: "getDeviceCellularSims",
  scope: "",
  description: "Return the SIM and APN configurations for a cellular device.",
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

export const updateDeviceCellularSimsTool: Tool = {
  name: "updateDeviceCellularSims",
  scope: "",
  description: "Updates the SIM and APN configurations for a cellular device.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-sims": {
        type: "array",
        description: "List of SIMs. If a SIM was previously configured and not specified in this request, it will remain unchanged."
      },
      "body-simOrdering": {
        type: "array",
        description: "Specifies the ordering of all SIMs for an MG: primary, secondary, and not-in-use (when applicable). It's required for devices with 3 or more SIMs and can be used in place of 'isPrimary' for dual-SIM devices. To indicate eSIM, use 'sim3'. Sim failover will occur only between primary and secondary sim slots."
      },
      "body-simFailover": {
        type: "object",
        description: "SIM Failover settings."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceClientsTool: Tool = {
  name: "getDeviceClients",
  scope: "",
  description: "List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
      }
    },
    required: ["path-serial"],
  },
};

export const createDeviceLiveToolsAclHitCountTool: Tool = {
  name: "createDeviceLiveToolsAclHitCount",
  scope: "",
  description: "Enqueue a job to perform an ACL hit count for the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsAclHitCountTool: Tool = {
  name: "getDeviceLiveToolsAclHitCount",
  scope: "",
  description: "Return an ACL hit count live tool job.",
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

export const createDeviceLiveToolsArpTableTool: Tool = {
  name: "createDeviceLiveToolsArpTable",
  scope: "",
  description: "Enqueue a job to perform a ARP table request for the device. This endpoint currently supports switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsArpTableTool: Tool = {
  name: "getDeviceLiveToolsArpTable",
  scope: "",
  description: "Return an ARP table live tool job.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-arpTableId": {
        type: "string",
        description: "Arp table ID"
      }
    },
    required: ["path-serial","path-arpTableId"],
  },
};

export const createDeviceLiveToolsCableTestTool: Tool = {
  name: "createDeviceLiveToolsCableTest",
  scope: "",
  description: "Enqueue a job to perform a cable test for the device on the specified ports. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-ports": {
        type: "array",
        description: "A list of ports for which to perform the cable test.  For Catalyst switches, IOS interface names are also supported, such as \"GigabitEthernet1/0/8\", \"Gi1/0/8\", or even \"1/0/8\"."
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial","body-ports"],
  },
};

export const getDeviceLiveToolsCableTestTool: Tool = {
  name: "getDeviceLiveToolsCableTest",
  scope: "",
  description: "Return a cable test live tool job.",
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

export const createDeviceLiveToolsCyclePortTool: Tool = {
  name: "createDeviceLiveToolsCyclePort",
  scope: "",
  description: "Enqueue a job to perform a cycle port for the device on the specified ports. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-ports": {
        type: "array",
        description: "A list of ports to cycle. For Catalyst switches, IOS interface names are also supported, such as \"GigabitEthernet1/0/8\", \"Gi1/0/8\", or even \"1/0/8\"."
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial","body-ports"],
  },
};

export const getDeviceLiveToolsCyclePortTool: Tool = {
  name: "getDeviceLiveToolsCyclePort",
  scope: "",
  description: "Return a cycle port live tool job.",
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

export const createDeviceLiveToolsDhcpLeaseTool: Tool = {
  name: "createDeviceLiveToolsDhcpLease",
  scope: "",
  description: "Enqueue a job to perform a DHCP leases request for the device. This endpoint currently supports all devices. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsDhcpLeaseTool: Tool = {
  name: "getDeviceLiveToolsDhcpLease",
  scope: "",
  description: "Return a DHCP leases live tool job.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-dhcpLeasesId": {
        type: "string",
        description: "Dhcp leases ID"
      }
    },
    required: ["path-serial","path-dhcpLeasesId"],
  },
};

export const createDeviceLiveToolsLedsBlinkTool: Tool = {
  name: "createDeviceLiveToolsLedsBlink",
  scope: "",
  description: "Enqueue a job to blink LEDs on a device. This endpoint has a rate limit of one request every 10 seconds.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-duration": {
        type: "integer",
        description: "The duration in seconds to blink LEDs."
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial","body-duration"],
  },
};

export const getDeviceLiveToolsLedsBlinkTool: Tool = {
  name: "getDeviceLiveToolsLedsBlink",
  scope: "",
  description: "Return a blink LEDs job",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-ledsBlinkId": {
        type: "string",
        description: "Leds blink ID"
      }
    },
    required: ["path-serial","path-ledsBlinkId"],
  },
};

export const createDeviceLiveToolsMacTableTool: Tool = {
  name: "createDeviceLiveToolsMacTable",
  scope: "",
  description: "Enqueue a job to request the MAC table from the device. Switches currently support this feature. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsMacTableTool: Tool = {
  name: "getDeviceLiveToolsMacTable",
  scope: "",
  description: "Return a MAC table live tool job.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-macTableId": {
        type: "string",
        description: "Mac table ID"
      }
    },
    required: ["path-serial","path-macTableId"],
  },
};

export const createDeviceLiveToolsMulticastRoutingTool: Tool = {
  name: "createDeviceLiveToolsMulticastRouting",
  scope: "",
  description: "Enqueue a job to perform a Multicast routing request for the device. This endpoint currently supports switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsMulticastRoutingTool: Tool = {
  name: "getDeviceLiveToolsMulticastRouting",
  scope: "",
  description: "Return a Multicast routing live tool job.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-multicastRoutingId": {
        type: "string",
        description: "Multicast routing ID"
      }
    },
    required: ["path-serial","path-multicastRoutingId"],
  },
};

export const createDeviceLiveToolsOspfNeighborTool: Tool = {
  name: "createDeviceLiveToolsOspfNeighbor",
  scope: "",
  description: "Enqueue a job to perform a OSPF neighbors request for the device. This endpoint currently supports switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsOspfNeighborTool: Tool = {
  name: "getDeviceLiveToolsOspfNeighbor",
  scope: "",
  description: "Return an OSPF neighbors live tool job.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-ospfNeighborsId": {
        type: "string",
        description: "Ospf neighbors ID"
      }
    },
    required: ["path-serial","path-ospfNeighborsId"],
  },
};

export const createDeviceLiveToolsPingTool: Tool = {
  name: "createDeviceLiveToolsPing",
  scope: "",
  description: "Enqueue a job to ping a target host from the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-target": {
        type: "string",
        description: "FQDN, IPv4 or IPv6 address"
      },
      "body-count": {
        type: "integer",
        description: "Count parameter to pass to ping. [1..5], default 5"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial","body-target"],
  },
};

export const getDeviceLiveToolsPingTool: Tool = {
  name: "getDeviceLiveToolsPing",
  scope: "",
  description: "Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.",
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

export const createDeviceLiveToolsPingDeviceTool: Tool = {
  name: "createDeviceLiveToolsPingDevice",
  scope: "",
  description: "Enqueue a job to check connectivity status to the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-count": {
        type: "integer",
        description: "Count parameter to pass to ping. [1..5], default 5"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsPingDeviceTool: Tool = {
  name: "getDeviceLiveToolsPingDevice",
  scope: "",
  description: "Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.",
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

export const createDeviceLiveToolsRoutingTableTool: Tool = {
  name: "createDeviceLiveToolsRoutingTable",
  scope: "",
  description: "Enqueue a job to perform a routing table request for the device. Only native Catalyst switches are supported. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsRoutingTableTool: Tool = {
  name: "getDeviceLiveToolsRoutingTable",
  scope: "",
  description: "Return an routing table live tool job.",
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

export const createDeviceLiveToolsSpeedTestTool: Tool = {
  name: "createDeviceLiveToolsSpeedTest",
  scope: "",
  description: "Enqueue a job to execute a speed test from a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-interface": {
        type: "string",
        description: "Optional filter for a specific WAN interface. Valid interfaces are wan1, wan2. Default will return wan1."
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsSpeedTestTool: Tool = {
  name: "getDeviceLiveToolsSpeedTest",
  scope: "",
  description: "Returns a speed test result in megabits per second. If test is not complete, no results are present.",
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

export const createDeviceLiveToolsThroughputTestTool: Tool = {
  name: "createDeviceLiveToolsThroughputTest",
  scope: "",
  description: "Enqueue a job to test a device throughput, the test will run for 10 secs to test throughput. This endpoint has a rate limit of one request every five seconds per device.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial"],
  },
};

export const getDeviceLiveToolsThroughputTestTool: Tool = {
  name: "getDeviceLiveToolsThroughputTest",
  scope: "",
  description: "Return a throughput test job",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-throughputTestId": {
        type: "string",
        description: "Throughput test ID"
      }
    },
    required: ["path-serial","path-throughputTestId"],
  },
};

export const createDeviceLiveToolsTraceRouteTool: Tool = {
  name: "createDeviceLiveToolsTraceRoute",
  scope: "",
  description: "Enqueue a job to run trace route in the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-target": {
        type: "string",
        description: "Destination Host name or address"
      },
      "body-sourceInterface": {
        type: "string",
        description: "Source Interface IP address"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial","body-target","body-sourceInterface"],
  },
};

export const getDeviceLiveToolsTraceRouteTool: Tool = {
  name: "getDeviceLiveToolsTraceRoute",
  scope: "",
  description: "Return a trace route job",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-traceRouteId": {
        type: "string",
        description: "Trace route ID"
      }
    },
    required: ["path-serial","path-traceRouteId"],
  },
};

export const createDeviceLiveToolsWakeOnLanTool: Tool = {
  name: "createDeviceLiveToolsWakeOnLan",
  scope: "",
  description: "Enqueue a job to send a Wake-on-LAN packet from the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-vlanId": {
        type: "integer",
        description: "The target's VLAN (1 to 4094)"
      },
      "body-mac": {
        type: "string",
        description: "The target's MAC address"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-serial","body-vlanId","body-mac"],
  },
};

export const getDeviceLiveToolsWakeOnLanTool: Tool = {
  name: "getDeviceLiveToolsWakeOnLan",
  scope: "",
  description: "Return a Wake-on-LAN job",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-wakeOnLanId": {
        type: "string",
        description: "Wake on lan ID"
      }
    },
    required: ["path-serial","path-wakeOnLanId"],
  },
};

export const getDeviceLldpCdpTool: Tool = {
  name: "getDeviceLldpCdp",
  scope: "",
  description: "List LLDP and CDP information for a device",
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

export const getDeviceLossAndLatencyHistoryTool: Tool = {
  name: "getDeviceLossAndLatencyHistory",
  scope: "",
  description: "Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for MX, MG and Z devices.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 60 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60."
      },
      "query-uplink": {
        type: "string",
        description: "The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, wan3, cellular. The default is wan1."
      },
      "query-ip": {
        type: "string",
        description: "The destination IP used to obtain the requested stats. This is required."
      }
    },
    required: ["path-serial","query-ip"],
  },
};

export const getDeviceManagementInterfaceTool: Tool = {
  name: "getDeviceManagementInterface",
  scope: "",
  description: "Return the management interface settings for a device",
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

export const updateDeviceManagementInterfaceTool: Tool = {
  name: "updateDeviceManagementInterface",
  scope: "",
  description: "Update the management interface settings for a device",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-wan1": {
        type: "object",
        description: "WAN 1 settings"
      },
      "body-wan2": {
        type: "object",
        description: "WAN 2 settings (only for MX devices)"
      }
    },
    required: ["path-serial"],
  },
};

export const rebootDeviceTool: Tool = {
  name: "rebootDevice",
  scope: "",
  description: "Reboot a device. This endpoint has a sustained rate limit of one request every 60 seconds.",
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

export const devicesTools = [
  getDeviceTool,
  updateDeviceTool,
  blinkDeviceLedsTool,
  getDeviceCellularSimsTool,
  updateDeviceCellularSimsTool,
  getDeviceClientsTool,
  createDeviceLiveToolsAclHitCountTool,
  getDeviceLiveToolsAclHitCountTool,
  createDeviceLiveToolsArpTableTool,
  getDeviceLiveToolsArpTableTool,
  createDeviceLiveToolsCableTestTool,
  getDeviceLiveToolsCableTestTool,
  createDeviceLiveToolsCyclePortTool,
  getDeviceLiveToolsCyclePortTool,
  createDeviceLiveToolsDhcpLeaseTool,
  getDeviceLiveToolsDhcpLeaseTool,
  createDeviceLiveToolsLedsBlinkTool,
  getDeviceLiveToolsLedsBlinkTool,
  createDeviceLiveToolsMacTableTool,
  getDeviceLiveToolsMacTableTool,
  createDeviceLiveToolsMulticastRoutingTool,
  getDeviceLiveToolsMulticastRoutingTool,
  createDeviceLiveToolsOspfNeighborTool,
  getDeviceLiveToolsOspfNeighborTool,
  createDeviceLiveToolsPingTool,
  getDeviceLiveToolsPingTool,
  createDeviceLiveToolsPingDeviceTool,
  getDeviceLiveToolsPingDeviceTool,
  createDeviceLiveToolsRoutingTableTool,
  getDeviceLiveToolsRoutingTableTool,
  createDeviceLiveToolsSpeedTestTool,
  getDeviceLiveToolsSpeedTestTool,
  createDeviceLiveToolsThroughputTestTool,
  getDeviceLiveToolsThroughputTestTool,
  createDeviceLiveToolsTraceRouteTool,
  getDeviceLiveToolsTraceRouteTool,
  createDeviceLiveToolsWakeOnLanTool,
  getDeviceLiveToolsWakeOnLanTool,
  getDeviceLldpCdpTool,
  getDeviceLossAndLatencyHistoryTool,
  getDeviceManagementInterfaceTool,
  updateDeviceManagementInterfaceTool,
  rebootDeviceTool
];