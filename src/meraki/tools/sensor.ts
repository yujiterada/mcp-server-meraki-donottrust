import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getDeviceSensorCommandsTool: Tool = {
  name: "getDeviceSensorCommands",
  scope: "",
  description: "Returns a historical log of all commands",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "query-operations": {
        type: "array",
        description: "Optional parameter to filter commands by operation. Allowed values are disableDownstreamPower, enableDownstreamPower, cycleDownstreamPower, and refreshData."
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
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of entries. Order options are 'ascending' and 'descending'. Default is 'descending'."
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
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 30 days. The default is 30 days."
      }
    },
    required: ["path-serial"],
  },
};

export const createDeviceSensorCommandTool: Tool = {
  name: "createDeviceSensorCommand",
  scope: "",
  description: "Sends a command to a sensor",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-arguments": {
        type: "array",
        description: "Additional options to provide to commands run on the sensor, each with a corresponding 'name' and 'value'."
      },
      "body-operation": {
        type: "string",
        description: "Operation to run on the sensor. 'enableDownstreamPower', 'disableDownstreamPower', and 'cycleDownstreamPower' turn power on/off to the device that is connected downstream of an MT40 power monitor. 'refreshData' causes an MT15 or MT40 device to upload its latest readings so that they are immediately available in the Dashboard API."
      }
    },
    required: ["path-serial","body-operation"],
  },
};

export const getDeviceSensorCommandTool: Tool = {
  name: "getDeviceSensorCommand",
  scope: "",
  description: "Returns information about the command's execution, including the status",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "path-commandId": {
        type: "string",
        description: "Command ID"
      }
    },
    required: ["path-serial","path-commandId"],
  },
};

export const getDeviceSensorRelationshipsTool: Tool = {
  name: "getDeviceSensorRelationships",
  scope: "",
  description: "List the sensor roles for a given sensor or camera device.",
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

export const updateDeviceSensorRelationshipsTool: Tool = {
  name: "updateDeviceSensorRelationships",
  scope: "",
  description: "Assign one or more sensor roles to a given sensor or camera device.",
  inputSchema: {
    type: "object",
    properties: {
      "path-serial": {
        type: "string",
        description: "Serial"
      },
      "body-livestream": {
        type: "object",
        description: "A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers."
      }
    },
    required: ["path-serial"],
  },
};

export const getNetworkSensorAlertsCurrentOverviewByMetricTool: Tool = {
  name: "getNetworkSensorAlertsCurrentOverviewByMetric",
  scope: "",
  description: "Return an overview of currently alerting sensors by metric",
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

export const getNetworkSensorAlertsOverviewByMetricTool: Tool = {
  name: "getNetworkSensorAlertsOverviewByMetric",
  scope: "",
  description: "Return an overview of alert occurrences over a timespan, by metric",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 731 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 366 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 366 days. The default is 7 days. If interval is provided, the timespan will be autocalculated."
      },
      "query-interval": {
        type: "integer",
        description: "The time interval in seconds for returned data. The valid intervals are: 900, 3600, 86400, 604800, 2592000. The default is 604800. Interval is calculated if time params are provided."
      }
    },
    required: ["path-networkId"],
  },
};

export const getNetworkSensorAlertsProfilesTool: Tool = {
  name: "getNetworkSensorAlertsProfiles",
  scope: "",
  description: "Lists all sensor alert profiles for a network.",
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

export const createNetworkSensorAlertsProfileTool: Tool = {
  name: "createNetworkSensorAlertsProfile",
  scope: "",
  description: "Creates a sensor alert profile for a network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the sensor alert profile."
      },
      "body-schedule": {
        type: "object",
        description: "The sensor schedule to use with the alert profile."
      },
      "body-conditions": {
        type: "array",
        description: "List of conditions that will cause the profile to send an alert."
      },
      "body-recipients": {
        type: "object",
        description: "List of recipients that will receive the alert."
      },
      "body-serials": {
        type: "array",
        description: "List of device serials assigned to this sensor alert profile."
      },
      "body-includeSensorUrl": {
        type: "boolean",
        description: "Include dashboard link to sensor in messages (default: true)."
      },
      "body-message": {
        type: "string",
        description: "A custom message that will appear in email and text message alerts."
      }
    },
    required: ["path-networkId","body-name","body-conditions"],
  },
};

export const getNetworkSensorAlertsProfileTool: Tool = {
  name: "getNetworkSensorAlertsProfile",
  scope: "",
  description: "Show details of a sensor alert profile for a network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-networkId","path-id"],
  },
};

export const updateNetworkSensorAlertsProfileTool: Tool = {
  name: "updateNetworkSensorAlertsProfile",
  scope: "",
  description: "Updates a sensor alert profile for a network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the sensor alert profile."
      },
      "body-schedule": {
        type: "object",
        description: "The sensor schedule to use with the alert profile."
      },
      "body-conditions": {
        type: "array",
        description: "List of conditions that will cause the profile to send an alert."
      },
      "body-recipients": {
        type: "object",
        description: "List of recipients that will receive the alert."
      },
      "body-serials": {
        type: "array",
        description: "List of device serials assigned to this sensor alert profile."
      },
      "body-includeSensorUrl": {
        type: "boolean",
        description: "Include dashboard link to sensor in messages (default: true)."
      },
      "body-message": {
        type: "string",
        description: "A custom message that will appear in email and text message alerts."
      }
    },
    required: ["path-networkId","path-id"],
  },
};

export const deleteNetworkSensorAlertsProfileTool: Tool = {
  name: "deleteNetworkSensorAlertsProfile",
  scope: "",
  description: "Deletes a sensor alert profile from a network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-networkId","path-id"],
  },
};

export const getNetworkSensorMqttBrokersTool: Tool = {
  name: "getNetworkSensorMqttBrokers",
  scope: "",
  description: "List the sensor settings of all MQTT brokers for this network. To get the brokers themselves, use /networks/{networkId}/mqttBrokers.",
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

export const getNetworkSensorMqttBrokerTool: Tool = {
  name: "getNetworkSensorMqttBroker",
  scope: "",
  description: "Return the sensor settings of an MQTT broker. To get the broker itself, use /networks/{networkId}/mqttBrokers/{mqttBrokerId}.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-mqttBrokerId": {
        type: "string",
        description: "Mqtt broker ID"
      }
    },
    required: ["path-networkId","path-mqttBrokerId"],
  },
};

export const updateNetworkSensorMqttBrokerTool: Tool = {
  name: "updateNetworkSensorMqttBroker",
  scope: "",
  description: "Update the sensor settings of an MQTT broker. To update the broker itself, use /networks/{networkId}/mqttBrokers/{mqttBrokerId}.",
  inputSchema: {
    type: "object",
    properties: {
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "path-mqttBrokerId": {
        type: "string",
        description: "Mqtt broker ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Set to true to enable MQTT broker for sensor network"
      }
    },
    required: ["path-networkId","path-mqttBrokerId","body-enabled"],
  },
};

export const getNetworkSensorRelationshipsTool: Tool = {
  name: "getNetworkSensorRelationships",
  scope: "",
  description: "List the sensor roles for devices in a given network",
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

export const getNetworkSensorSchedulesTool: Tool = {
  name: "getNetworkSensorSchedules",
  scope: "",
  description: "Returns a list of all sensor schedules.",
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

export const getOrganizationSensorAlertsTool: Tool = {
  name: "getOrganizationSensorAlerts",
  scope: "",
  description: "Return a list of sensor alert events",
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
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 365 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 365 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days."
      },
      "query-sensorSerial": {
        type: "string",
        description: "Filters alerts to those triggered by this sensor."
      },
      "query-networkIds": {
        type: "array",
        description: "Filters alerts by network. For now, this must be a single network ID."
      },
      "query-triggerMetric": {
        type: "string",
        description: "Filters alerts to those triggered by this metric."
      }
    },
    required: ["path-organizationId","query-networkIds"],
  },
};

export const getOrganizationSensorReadingsHistoryTool: Tool = {
  name: "getOrganizationSensorReadingsHistory",
  scope: "",
  description: "Return all reported readings from sensors in a given timespan, sorted by timestamp",
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
        description: "The beginning of the timespan for the data. The maximum lookback period is 365 days and 6 hours from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 7 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter readings by network."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter readings by sensor."
      },
      "query-metrics": {
        type: "array",
        description: "Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSensorReadingsHistoryByIntervalTool: Tool = {
  name: "getOrganizationSensorReadingsHistoryByInterval",
  scope: "",
  description: "Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order",
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
        description: "The beginning of the timespan for the data. The maximum lookback period is 730 days and 12 hours from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 730 days and 12 hours after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 730 days and 12 hours. The default is 7 days. If interval is provided, the timespan will be autocalculated."
      },
      "query-interval": {
        type: "integer",
        description: "The time interval in seconds for returned data. The valid intervals are: 15, 120, 300, 900, 3600, 14400, 86400, 604800. The default is 86400. Interval is calculated if time params are provided."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter readings by network."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter readings by sensor."
      },
      "query-metrics": {
        type: "array",
        description: "Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved."
      },
      "query-models": {
        type: "array",
        description: "Optional parameter to filter readings by one or more models."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSensorReadingsLatestTool: Tool = {
  name: "getOrganizationSensorReadingsLatest",
  scope: "",
  description: "Return the latest available reading for each metric from each sensor, sorted by sensor serial",
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
        description: "Optional parameter to filter readings by network."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter readings by sensor."
      },
      "query-metrics": {
        type: "array",
        description: "Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved."
      }
    },
    required: ["path-organizationId"],
  },
};

export const sensorTools = [
  getDeviceSensorCommandsTool,
  createDeviceSensorCommandTool,
  getDeviceSensorCommandTool,
  getDeviceSensorRelationshipsTool,
  updateDeviceSensorRelationshipsTool,
  getNetworkSensorAlertsCurrentOverviewByMetricTool,
  getNetworkSensorAlertsOverviewByMetricTool,
  getNetworkSensorAlertsProfilesTool,
  createNetworkSensorAlertsProfileTool,
  getNetworkSensorAlertsProfileTool,
  updateNetworkSensorAlertsProfileTool,
  deleteNetworkSensorAlertsProfileTool,
  getNetworkSensorMqttBrokersTool,
  getNetworkSensorMqttBrokerTool,
  updateNetworkSensorMqttBrokerTool,
  getNetworkSensorRelationshipsTool,
  getNetworkSensorSchedulesTool,
  getOrganizationSensorAlertsTool,
  getOrganizationSensorReadingsHistoryTool,
  getOrganizationSensorReadingsHistoryByIntervalTool,
  getOrganizationSensorReadingsLatestTool
];