function hasBodyPrefixedKeys(obj: any) {
  // Check if obj is null or not an object
  if (!obj || typeof obj !== 'object') {
    return false;
  }
  // Get all keys of the object
  const keys = Object.keys(obj);
  // Check if any key starts with "body-"
  return keys.some(key => key.startsWith('body-'));
}

function transformRequestBody(obj: any) {
  const transformedObject: any = {};
  // Loop through all keys in the original object
  Object.keys(obj).forEach(key => {
    // Check if the key starts with "body-"
    if (key.startsWith('body-')) {
      // Create a new key without the "body-" prefix
      const newKey = key.substring(5); // Remove first 5 characters ("body-")
      // Copy the value to the new key
      transformedObject[newKey] = obj[key];
    } else {
      // If the key doesn't start with "body-", keep it as is
      transformedObject[key] = obj[key];
    }
  });
  return transformedObject;
}

function transformQueryParams(obj: any) {
  const transformedObject: any = {};
  Object.keys(obj).forEach(key => {
    // Check if the key starts with "query-"
    if (key.startsWith('query-')) {
      // Create a new key without the "query-" prefix
      const newKey = key.substring(6); // Remove first 6 characters ("query-")
      // Copy the value to the new key
      transformedObject[newKey] = obj[key];
    }
  });
  return transformedObject;
}

export async function _sensor(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceSensorCommands": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/sensor/commands`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceSensorCommand": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/devices/${params.arguments["path-serial"]}/sensor/commands`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/devices/${params.arguments["path-serial"]}/sensor/commands`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSensorCommand": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/sensor/commands/{commandId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSensorRelationships": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/sensor/relationships`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSensorRelationships": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/sensor/relationships`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/sensor/relationships`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorAlertsCurrentOverviewByMetric": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/current/overview/byMetric`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorAlertsOverviewByMetric": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/overview/byMetric`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorAlertsProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/profiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSensorAlertsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/profiles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/profiles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorAlertsProfile": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/profiles/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSensorAlertsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/profiles/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/profiles/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSensorAlertsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/profiles/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/sensor/alerts/profiles/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorMqttBrokers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sensor/mqttBrokers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorMqttBroker": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sensor/mqttBrokers/{mqttBrokerId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSensorMqttBroker": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/sensor/mqttBrokers/{mqttBrokerId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/sensor/mqttBrokers/{mqttBrokerId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorRelationships": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sensor/relationships`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSensorSchedules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/sensor/schedules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSensorAlerts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sensor/alerts`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSensorReadingsHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sensor/readings/history`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSensorReadingsHistoryByInterval": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sensor/readings/history/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSensorReadingsLatest": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/sensor/readings/latest`, { params: queryParams });
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
  "getDeviceSensorCommands","createDeviceSensorCommand","getDeviceSensorCommand","getDeviceSensorRelationships","updateDeviceSensorRelationships","getNetworkSensorAlertsCurrentOverviewByMetric","getNetworkSensorAlertsOverviewByMetric","getNetworkSensorAlertsProfiles","createNetworkSensorAlertsProfile","getNetworkSensorAlertsProfile","updateNetworkSensorAlertsProfile","deleteNetworkSensorAlertsProfile","getNetworkSensorMqttBrokers","getNetworkSensorMqttBroker","updateNetworkSensorMqttBroker","getNetworkSensorRelationships","getNetworkSensorSchedules","getOrganizationSensorAlerts","getOrganizationSensorReadingsHistory","getOrganizationSensorReadingsHistoryByInterval","getOrganizationSensorReadingsLatest"
];
