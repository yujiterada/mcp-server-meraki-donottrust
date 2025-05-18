import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getNetworkInsightApplicationHealthByTimeTool: Tool = {
  name: "getNetworkInsightApplicationHealthByTime",
  scope: "",
  description: "Get application health by time",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-applicationId": {
        type: "string",
        description: "Application ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 7 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours."
      },
      "query-resolution": {
        type: "integer",
        description: "The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 3600, 86400. The default is 300."
      }
    },
    required: ["path-networkId","path-applicationId"],
  },
};

export const getOrganizationInsightApplicationsTool: Tool = {
  name: "getOrganizationInsightApplications",
  scope: "",
  description: "List all Insight tracked applications",
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

export const createOrganizationInsightApplicationTool: Tool = {
  name: "createOrganizationInsightApplication",
  scope: "",
  description: "Add an Insight tracked application",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-counterSetRuleId": {
        type: "integer",
        description: "The id of the counter set rule"
      },
      "body-enableSmartThresholds": {
        type: "boolean",
        description: "Enable Smart Thresholds"
      },
      "body-thresholds": {
        type: "object",
        description: "Thresholds defined by a user for each application"
      }
    },
    required: ["path-organizationId","body-counterSetRuleId"],
  },
};

export const updateOrganizationInsightApplicationTool: Tool = {
  name: "updateOrganizationInsightApplication",
  scope: "",
  description: "Update an Insight tracked application",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-applicationId": {
        type: "string",
        description: "Application ID"
      },
      "body-enableSmartThresholds": {
        type: "boolean",
        description: "Enable Smart Thresholds"
      },
      "body-thresholds": {
        type: "object",
        description: "Thresholds defined by a user for each application"
      }
    },
    required: ["path-organizationId","path-applicationId"],
  },
};

export const deleteOrganizationInsightApplicationTool: Tool = {
  name: "deleteOrganizationInsightApplication",
  scope: "",
  description: "Delete an Insight tracked application",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-applicationId": {
        type: "string",
        description: "Application ID"
      }
    },
    required: ["path-organizationId","path-applicationId"],
  },
};

export const getOrganizationInsightMonitoredMediaServersTool: Tool = {
  name: "getOrganizationInsightMonitoredMediaServers",
  scope: "",
  description: "List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.",
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

export const createOrganizationInsightMonitoredMediaServerTool: Tool = {
  name: "createOrganizationInsightMonitoredMediaServer",
  scope: "",
  description: "Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the VoIP provider"
      },
      "body-address": {
        type: "string",
        description: "The IP address (IPv4 only) or hostname of the media server to monitor"
      },
      "body-bestEffortMonitoringEnabled": {
        type: "boolean",
        description: "Indicates that if the media server doesn't respond to ICMP pings, the nearest hop will be used in its stead."
      }
    },
    required: ["path-organizationId","body-name","body-address"],
  },
};

export const getOrganizationInsightMonitoredMediaServerTool: Tool = {
  name: "getOrganizationInsightMonitoredMediaServer",
  scope: "",
  description: "Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-monitoredMediaServerId": {
        type: "string",
        description: "Monitored media server ID"
      }
    },
    required: ["path-organizationId","path-monitoredMediaServerId"],
  },
};

export const updateOrganizationInsightMonitoredMediaServerTool: Tool = {
  name: "updateOrganizationInsightMonitoredMediaServer",
  scope: "",
  description: "Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-monitoredMediaServerId": {
        type: "string",
        description: "Monitored media server ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the VoIP provider"
      },
      "body-address": {
        type: "string",
        description: "The IP address (IPv4 only) or hostname of the media server to monitor"
      },
      "body-bestEffortMonitoringEnabled": {
        type: "boolean",
        description: "Indicates that if the media server doesn't respond to ICMP pings, the nearest hop will be used in its stead."
      }
    },
    required: ["path-organizationId","path-monitoredMediaServerId"],
  },
};

export const deleteOrganizationInsightMonitoredMediaServerTool: Tool = {
  name: "deleteOrganizationInsightMonitoredMediaServer",
  scope: "",
  description: "Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-monitoredMediaServerId": {
        type: "string",
        description: "Monitored media server ID"
      }
    },
    required: ["path-organizationId","path-monitoredMediaServerId"],
  },
};

export const getOrganizationInsightSpeedTestResultsTool: Tool = {
  name: "getOrganizationInsightSpeedTestResults",
  scope: "",
  description: "List the speed tests for the given devices under this organization. Only valid for organizations with Meraki Insight.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-serials": {
        type: "array",
        description: "A list of serial numbers. The returned results will be filtered to only include these serials."
      },
      "query-timespan": {
        type: "integer",
        description: "Amount of seconds ago to query for results. Only include timespan OR both t0 & t1."
      },
      "query-t0": {
        type: "integer",
        description: "Start time to query for results in epoch seconds. Only include timespan OR both t0 & t1."
      },
      "query-t1": {
        type: "integer",
        description: "End time to query for results in epoch seconds. Only include timespan OR both t0 & t1."
      }
    },
    required: ["path-organizationId","query-serials"],
  },
};

export const getOrganizationInsightWebAppsTool: Tool = {
  name: "getOrganizationInsightWebApps",
  scope: "",
  description: "Lists all default web applications rules with counter set rule ids",
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

export const createOrganizationInsightWebAppTool: Tool = {
  name: "createOrganizationInsightWebApp",
  scope: "",
  description: "Add a custom web application for Insight to be able to track",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the Web Application"
      },
      "body-hostname": {
        type: "string",
        description: "The hostname of Web Application"
      }
    },
    required: ["path-organizationId","body-name","body-hostname"],
  },
};

export const updateOrganizationInsightWebAppTool: Tool = {
  name: "updateOrganizationInsightWebApp",
  scope: "",
  description: "Update a custom web application for Insight to be able to track",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-customCounterSetRuleId": {
        type: "string",
        description: "Custom counter set rule ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the Web Application"
      },
      "body-hostname": {
        type: "string",
        description: "The hostname of Web Application"
      }
    },
    required: ["path-organizationId","path-customCounterSetRuleId"],
  },
};

export const deleteOrganizationInsightWebAppTool: Tool = {
  name: "deleteOrganizationInsightWebApp",
  scope: "",
  description: "Delete a custom web application by counter set rule id.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-customCounterSetRuleId": {
        type: "string",
        description: "Custom counter set rule ID"
      }
    },
    required: ["path-organizationId","path-customCounterSetRuleId"],
  },
};

export const insightTools = [
  getNetworkInsightApplicationHealthByTimeTool,
  getOrganizationInsightApplicationsTool,
  createOrganizationInsightApplicationTool,
  updateOrganizationInsightApplicationTool,
  deleteOrganizationInsightApplicationTool,
  getOrganizationInsightMonitoredMediaServersTool,
  createOrganizationInsightMonitoredMediaServerTool,
  getOrganizationInsightMonitoredMediaServerTool,
  updateOrganizationInsightMonitoredMediaServerTool,
  deleteOrganizationInsightMonitoredMediaServerTool,
  getOrganizationInsightSpeedTestResultsTool,
  getOrganizationInsightWebAppsTool,
  createOrganizationInsightWebAppTool,
  updateOrganizationInsightWebAppTool,
  deleteOrganizationInsightWebAppTool
];