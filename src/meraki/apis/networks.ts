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

export async function _networks(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkAlertsHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/alerts/history`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkAlertsSettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/alerts/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkAlertsSettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/alerts/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/alerts/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bindNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/bind`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/bind`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkBluetoothClients": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/bluetoothClients`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkBluetoothClient": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/bluetoothClients/{bluetoothClientId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClients": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientsApplicationUsage": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/applicationUsage`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientsBandwidthUsageHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/bandwidthUsageHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientsOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "provisionNetworkClients": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/clients/provision`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/clients/provision`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientsUsageHistories": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/usageHistories`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClient": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientPolicy": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}/policy`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkClientPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}/policy`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}/policy`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientSplashAuthorizationStatus": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}/splashAuthorizationStatus`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkClientSplashAuthorizationStatus": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}/splashAuthorizationStatus`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}/splashAuthorizationStatus`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientTrafficHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}/trafficHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientUsageHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/clients/{clientId}/usageHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkDevices": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/devices`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "claimNetworkDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/devices/claim`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/devices/claim`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "vmxNetworkDevicesClaim": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/devices/claim/vmx`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/devices/claim/vmx`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "removeNetworkDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/devices/remove`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/devices/remove`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkEvents": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/events`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkEventsEventTypes": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/events/eventTypes`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkFirmwareUpgrades": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFirmwareUpgrades": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkFirmwareUpgradesRollback": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/rollbacks`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/rollbacks`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkFirmwareUpgradesStagedEvents": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkFirmwareUpgradesStagedEvent": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFirmwareUpgradesStagedEvents": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deferNetworkFirmwareUpgradesStagedEvents": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events/defer`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events/defer`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "rollbacksNetworkFirmwareUpgradesStagedEvents": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events/rollbacks`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/events/rollbacks`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkFirmwareUpgradesStagedGroups": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/groups`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkFirmwareUpgradesStagedGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/groups`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/groups`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkFirmwareUpgradesStagedGroup": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/groups/{groupId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFirmwareUpgradesStagedGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/groups/{groupId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/groups/{groupId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkFirmwareUpgradesStagedGroup": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/groups/{groupId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/groups/{groupId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkFirmwareUpgradesStagedStages": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/stages`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFirmwareUpgradesStagedStages": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/stages`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/firmwareUpgrades/staged/stages`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkFloorPlans": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/floorPlans`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkFloorPlan": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "batchNetworkFloorPlansAutoLocateJobs": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/autoLocate/jobs/batch`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/autoLocate/jobs/batch`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "cancelNetworkFloorPlansAutoLocateJob": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/autoLocate/jobs/{jobId}/cancel`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/autoLocate/jobs/{jobId}/cancel`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "publishNetworkFloorPlansAutoLocateJob": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/autoLocate/jobs/{jobId}/publish`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/autoLocate/jobs/{jobId}/publish`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "recalculateNetworkFloorPlansAutoLocateJob": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/autoLocate/jobs/{jobId}/recalculate`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/autoLocate/jobs/{jobId}/recalculate`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "batchNetworkFloorPlansDevicesUpdate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/devices/batchUpdate`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/floorPlans/devices/batchUpdate`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkFloorPlan": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/floorPlans/{floorPlanId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFloorPlan": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/floorPlans/{floorPlanId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/floorPlans/{floorPlanId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkFloorPlan": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/floorPlans/{floorPlanId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/floorPlans/{floorPlanId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkGroupPolicies": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/groupPolicies`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkGroupPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/groupPolicies`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/groupPolicies`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkGroupPolicy": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/groupPolicies/{groupPolicyId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkGroupPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/groupPolicies/{groupPolicyId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/groupPolicies/{groupPolicyId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkGroupPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/groupPolicies/{groupPolicyId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/groupPolicies/{groupPolicyId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkHealthAlerts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/health/alerts`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkLocationScanning": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/locationScanning`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkLocationScanning": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/locationScanning`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/locationScanning`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkLocationScanningHttpServers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/locationScanning/httpServers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkLocationScanningHttpServers": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/locationScanning/httpServers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/locationScanning/httpServers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkMerakiAuthUsers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/merakiAuthUsers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkMerakiAuthUser": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/merakiAuthUsers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/merakiAuthUsers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkMerakiAuthUser": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/merakiAuthUsers/{merakiAuthUserId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkMerakiAuthUser": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/merakiAuthUsers/{merakiAuthUserId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/merakiAuthUsers/{merakiAuthUserId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkMerakiAuthUser": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/merakiAuthUsers/{merakiAuthUserId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/merakiAuthUsers/{merakiAuthUserId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkMqttBrokers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/mqttBrokers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkMqttBroker": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/mqttBrokers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/mqttBrokers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkMqttBroker": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/mqttBrokers/{mqttBrokerId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkMqttBroker": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/mqttBrokers/{mqttBrokerId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/mqttBrokers/{mqttBrokerId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkMqttBroker": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/mqttBrokers/{mqttBrokerId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/mqttBrokers/{mqttBrokerId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkNetflow": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/netflow`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkNetflow": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/netflow`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/netflow`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkNetworkHealthChannelUtilization": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/networkHealth/channelUtilization`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPiiPiiKeys": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/pii/piiKeys`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPiiRequests": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/pii/requests`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkPiiRequest": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/pii/requests`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/pii/requests`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPiiRequest": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/pii/requests/{requestId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkPiiRequest": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/pii/requests/{requestId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/pii/requests/{requestId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPiiSmDevicesForKey": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/pii/smDevicesForKey`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPiiSmOwnersForKey": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/pii/smOwnersForKey`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPoliciesByClient": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/policies/byClient`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSnmp": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/snmp`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSnmp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/snmp`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/snmp`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSnmpTraps": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/snmp/traps`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/snmp/traps`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSplashLoginAttempts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/splashLoginAttempts`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "splitNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/split`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/split`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSyslogServers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/syslogServers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSyslogServers": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/syslogServers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/syslogServers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkTopologyLinkLayer": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/topology/linkLayer`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkTraffic": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/traffic`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkTrafficAnalysis": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/trafficAnalysis`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkTrafficAnalysis": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/trafficAnalysis`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/trafficAnalysis`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkTrafficShapingApplicationCategories": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/trafficShaping/applicationCategories`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkTrafficShapingDscpTaggingOptions": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/trafficShaping/dscpTaggingOptions`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "unbindNetwork": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/unbind`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/unbind`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkVlanProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/vlanProfiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkVlanProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/vlanProfiles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/vlanProfiles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkVlanProfilesAssignmentsByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/vlanProfiles/assignments/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "reassignNetworkVlanProfilesAssignments": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/vlanProfiles/assignments/reassign`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/vlanProfiles/assignments/reassign`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkVlanProfile": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/vlanProfiles/{iname}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkVlanProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/vlanProfiles/{iname}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/vlanProfiles/{iname}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkVlanProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/vlanProfiles/{iname}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/vlanProfiles/{iname}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWebhooksHttpServers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/webhooks/httpServers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWebhooksHttpServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/webhooks/httpServers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/webhooks/httpServers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWebhooksHttpServer": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/webhooks/httpServers/{httpServerId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWebhooksHttpServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/webhooks/httpServers/{httpServerId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/webhooks/httpServers/{httpServerId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkWebhooksHttpServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/webhooks/httpServers/{httpServerId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/webhooks/httpServers/{httpServerId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWebhooksPayloadTemplates": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/webhooks/payloadTemplates`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWebhooksPayloadTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/webhooks/payloadTemplates`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/webhooks/payloadTemplates`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWebhooksPayloadTemplate": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkWebhooksPayloadTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWebhooksPayloadTemplate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/webhooks/payloadTemplates/{payloadTemplateId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWebhooksWebhookTest": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/webhooks/webhookTests`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/webhooks/webhookTests`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWebhooksWebhookTest": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/webhooks/webhookTests/{webhookTestId}`, { params: queryParams });
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

export const networksEndpoints = [
  "getNetwork","updateNetwork","deleteNetwork","getNetworkAlertsHistory","getNetworkAlertsSettings","updateNetworkAlertsSettings","bindNetwork","getNetworkBluetoothClients","getNetworkBluetoothClient","getNetworkClients","getNetworkClientsApplicationUsage","getNetworkClientsBandwidthUsageHistory","getNetworkClientsOverview","provisionNetworkClients","getNetworkClientsUsageHistories","getNetworkClient","getNetworkClientPolicy","updateNetworkClientPolicy","getNetworkClientSplashAuthorizationStatus","updateNetworkClientSplashAuthorizationStatus","getNetworkClientTrafficHistory","getNetworkClientUsageHistory","getNetworkDevices","claimNetworkDevices","vmxNetworkDevicesClaim","removeNetworkDevices","getNetworkEvents","getNetworkEventsEventTypes","getNetworkFirmwareUpgrades","updateNetworkFirmwareUpgrades","createNetworkFirmwareUpgradesRollback","getNetworkFirmwareUpgradesStagedEvents","createNetworkFirmwareUpgradesStagedEvent","updateNetworkFirmwareUpgradesStagedEvents","deferNetworkFirmwareUpgradesStagedEvents","rollbacksNetworkFirmwareUpgradesStagedEvents","getNetworkFirmwareUpgradesStagedGroups","createNetworkFirmwareUpgradesStagedGroup","getNetworkFirmwareUpgradesStagedGroup","updateNetworkFirmwareUpgradesStagedGroup","deleteNetworkFirmwareUpgradesStagedGroup","getNetworkFirmwareUpgradesStagedStages","updateNetworkFirmwareUpgradesStagedStages","getNetworkFloorPlans","createNetworkFloorPlan","batchNetworkFloorPlansAutoLocateJobs","cancelNetworkFloorPlansAutoLocateJob","publishNetworkFloorPlansAutoLocateJob","recalculateNetworkFloorPlansAutoLocateJob","batchNetworkFloorPlansDevicesUpdate","getNetworkFloorPlan","updateNetworkFloorPlan","deleteNetworkFloorPlan","getNetworkGroupPolicies","createNetworkGroupPolicy","getNetworkGroupPolicy","updateNetworkGroupPolicy","deleteNetworkGroupPolicy","getNetworkHealthAlerts","getNetworkLocationScanning","updateNetworkLocationScanning","getNetworkLocationScanningHttpServers","updateNetworkLocationScanningHttpServers","getNetworkMerakiAuthUsers","createNetworkMerakiAuthUser","getNetworkMerakiAuthUser","deleteNetworkMerakiAuthUser","updateNetworkMerakiAuthUser","getNetworkMqttBrokers","createNetworkMqttBroker","getNetworkMqttBroker","updateNetworkMqttBroker","deleteNetworkMqttBroker","getNetworkNetflow","updateNetworkNetflow","getNetworkNetworkHealthChannelUtilization","getNetworkPiiPiiKeys","getNetworkPiiRequests","createNetworkPiiRequest","getNetworkPiiRequest","deleteNetworkPiiRequest","getNetworkPiiSmDevicesForKey","getNetworkPiiSmOwnersForKey","getNetworkPoliciesByClient","getNetworkSettings","updateNetworkSettings","getNetworkSnmp","updateNetworkSnmp","updateNetworkSnmpTraps","getNetworkSplashLoginAttempts","splitNetwork","getNetworkSyslogServers","updateNetworkSyslogServers","getNetworkTopologyLinkLayer","getNetworkTraffic","getNetworkTrafficAnalysis","updateNetworkTrafficAnalysis","getNetworkTrafficShapingApplicationCategories","getNetworkTrafficShapingDscpTaggingOptions","unbindNetwork","getNetworkVlanProfiles","createNetworkVlanProfile","getNetworkVlanProfilesAssignmentsByDevice","reassignNetworkVlanProfilesAssignments","getNetworkVlanProfile","updateNetworkVlanProfile","deleteNetworkVlanProfile","getNetworkWebhooksHttpServers","createNetworkWebhooksHttpServer","getNetworkWebhooksHttpServer","updateNetworkWebhooksHttpServer","deleteNetworkWebhooksHttpServer","getNetworkWebhooksPayloadTemplates","createNetworkWebhooksPayloadTemplate","getNetworkWebhooksPayloadTemplate","deleteNetworkWebhooksPayloadTemplate","updateNetworkWebhooksPayloadTemplate","createNetworkWebhooksWebhookTest","getNetworkWebhooksWebhookTest"
];
