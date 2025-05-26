export async function _sensor(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceSensorCommands": {
      let path = `/devices/${params.arguments.path.serial}/sensor/commands`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceSensorCommand": {
      let path = `/devices/${params.arguments.path.serial}/sensor/commands`;
      if (params.arguments.body) {
        response = await client.post(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.post(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSensorCommand": {
      let path = `/devices/${params.arguments.path.serial}/sensor/commands/{commandId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSensorRelationships": {
      let path = `/devices/${params.arguments.path.serial}/sensor/relationships`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSensorRelationships": {
      let path = `/devices/${params.arguments.path.serial}/sensor/relationships`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorAlertsCurrentOverviewByMetric": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/alerts/current/overview/byMetric`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorAlertsOverviewByMetric": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/alerts/overview/byMetric`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorAlertsProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/alerts/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSensorAlertsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/alerts/profiles`;
      if (params.arguments.body) {
        response = await client.post(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.post(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorAlertsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/alerts/profiles/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSensorAlertsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/alerts/profiles/{id}`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSensorAlertsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/alerts/profiles/{id}`;
      if (params.arguments.body) {
        response = await client.delete(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.delete(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorMqttBrokers": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/mqttBrokers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorMqttBroker": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/mqttBrokers/{mqttBrokerId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSensorMqttBroker": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/mqttBrokers/{mqttBrokerId}`;
      if (params.arguments.body) {
        response = await client.put(path, params.arguments.body, { params: params.arguments.query });
      } else {
        response = await client.put(path, { params: params.arguments.query });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorRelationships": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/relationships`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorSchedules": {
      let path = `/networks/${params.arguments.path.networkId}/sensor/schedules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSensorAlerts": {
      let path = `/organizations/${params.arguments.path.organizationId}/sensor/alerts`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSensorReadingsHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/sensor/readings/history`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSensorReadingsHistoryByInterval": {
      let path = `/organizations/${params.arguments.path.organizationId}/sensor/readings/history/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSensorReadingsLatest": {
      let path = `/organizations/${params.arguments.path.organizationId}/sensor/readings/latest`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
}

export const sensorEndpoints = [
  "getDeviceSensorCommands",
  "createDeviceSensorCommand",
  "getDeviceSensorCommand",
  "getDeviceSensorRelationships",
  "updateDeviceSensorRelationships",
  "getNetworkSensorAlertsCurrentOverviewByMetric",
  "getNetworkSensorAlertsOverviewByMetric",
  "getNetworkSensorAlertsProfiles",
  "createNetworkSensorAlertsProfile",
  "getNetworkSensorAlertsProfile",
  "updateNetworkSensorAlertsProfile",
  "deleteNetworkSensorAlertsProfile",
  "getNetworkSensorMqttBrokers",
  "getNetworkSensorMqttBroker",
  "updateNetworkSensorMqttBroker",
  "getNetworkSensorRelationships",
  "getNetworkSensorSchedules",
  "getOrganizationSensorAlerts",
  "getOrganizationSensorReadingsHistory",
  "getOrganizationSensorReadingsHistoryByInterval",
  "getOrganizationSensorReadingsLatest"
];
