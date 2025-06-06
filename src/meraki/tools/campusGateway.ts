import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const createNetworkCampusGatewayClusterTool: Tool = {
  name: "createNetworkCampusGatewayCluster",
  scope: "campusGateway",
  description: "Create a cluster and add campus gateways to it",
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
            description: "Name of the new cluster"
          },
          uplinks: {
            type: "array",
            description: "Uplink interface settings of the cluster"
          },
          tunnels: {
            type: "array",
            description: "Tunnel interface settings of the cluster: Reuse uplink or specify tunnel interface"
          },
          nameservers: {
            type: "object",
            description: "Nameservers of the cluster"
          },
          portChannels: {
            type: "array",
            description: "Port channel settings of the cluster"
          },
          devices: {
            type: "array",
            description: "Devices to be added to the cluster"
          },
          notes: {
            type: "string",
            description: "Notes about cluster with max size of 511 characters allowed"
          }
        }
      }
    },
    required: ["path.networkId, body.name, body.uplinks, body.tunnels, body.nameservers, body.portChannels"],
  },
};

export const updateNetworkCampusGatewayClusterTool: Tool = {
  name: "updateNetworkCampusGatewayCluster",
  scope: "campusGateway",
  description: "Update a cluster and add/remove campus gateways to/from it",
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
          clusterId: {
            type: "string",
            description: "Cluster ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          name: {
            type: "string",
            description: "Name of the cluster"
          },
          uplinks: {
            type: "array",
            description: "Uplink interface settings of the cluster"
          },
          tunnels: {
            type: "array",
            description: "Tunnel interface settings of the cluster: Reuse uplink or specify tunnel interface"
          },
          nameservers: {
            type: "object",
            description: "Nameservers of the cluster"
          },
          portChannels: {
            type: "array",
            description: "Port channel settings of the cluster"
          },
          devices: {
            type: "array",
            description: "Devices in the cluster"
          },
          notes: {
            type: "string",
            description: "Notes about cluster with max size of 511 characters allowed"
          }
        }
      }
    },
    required: ["path.networkId, path.clusterId"],
  },
};

export const getOrganizationCampusGatewayClustersTool: Tool = {
  name: "getOrganizationCampusGatewayClusters",
  scope: "campusGateway",
  description: "Get the details of campus gateway clusters",
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
            description: "Networks for which information should be gathered."
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const getOrganizationCampusGatewayDevicesUplinksLocalOverridesByDeviceTool: Tool = {
  name: "getOrganizationCampusGatewayDevicesUplinksLocalOverridesByDevice",
  scope: "campusGateway",
  description: "Uplink overrides configured locally on Campus Gateway devices in an organization.",
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
          serials: {
            type: "array",
            description: "A list of serial numbers. The returned devices will be filtered to only include these serials."
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

export const campusGatewayTools = [
  createNetworkCampusGatewayClusterTool,
  updateNetworkCampusGatewayClusterTool,
  getOrganizationCampusGatewayClustersTool,
  getOrganizationCampusGatewayDevicesUplinksLocalOverridesByDeviceTool
];