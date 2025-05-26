export async function _networks(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getNetwork": {
      let path = `/networks/${params.arguments.path.networkId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetwork": {
      let path = `/networks/${params.arguments.path.networkId}`;
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
    case "deleteNetwork": {
      let path = `/networks/${params.arguments.path.networkId}`;
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
    case "getNetworkAlertsHistory": {
      let path = `/networks/${params.arguments.path.networkId}/alerts/history`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkAlertsSettings": {
      let path = `/networks/${params.arguments.path.networkId}/alerts/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkAlertsSettings": {
      let path = `/networks/${params.arguments.path.networkId}/alerts/settings`;
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
    case "bindNetwork": {
      let path = `/networks/${params.arguments.path.networkId}/bind`;
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
    case "getNetworkBluetoothClients": {
      let path = `/networks/${params.arguments.path.networkId}/bluetoothClients`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkBluetoothClient": {
      let path = `/networks/${params.arguments.path.networkId}/bluetoothClients/{bluetoothClientId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClients": {
      let path = `/networks/${params.arguments.path.networkId}/clients`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientsApplicationUsage": {
      let path = `/networks/${params.arguments.path.networkId}/clients/applicationUsage`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientsBandwidthUsageHistory": {
      let path = `/networks/${params.arguments.path.networkId}/clients/bandwidthUsageHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientsOverview": {
      let path = `/networks/${params.arguments.path.networkId}/clients/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "provisionNetworkClients": {
      let path = `/networks/${params.arguments.path.networkId}/clients/provision`;
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
    case "getNetworkClientsUsageHistories": {
      let path = `/networks/${params.arguments.path.networkId}/clients/usageHistories`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClient": {
      let path = `/networks/${params.arguments.path.networkId}/clients/{clientId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/clients/{clientId}/policy`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkClientPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/clients/{clientId}/policy`;
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
    case "getNetworkClientSplashAuthorizationStatus": {
      let path = `/networks/${params.arguments.path.networkId}/clients/{clientId}/splashAuthorizationStatus`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkClientSplashAuthorizationStatus": {
      let path = `/networks/${params.arguments.path.networkId}/clients/{clientId}/splashAuthorizationStatus`;
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
    case "getNetworkClientTrafficHistory": {
      let path = `/networks/${params.arguments.path.networkId}/clients/{clientId}/trafficHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkClientUsageHistory": {
      let path = `/networks/${params.arguments.path.networkId}/clients/{clientId}/usageHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkDevices": {
      let path = `/networks/${params.arguments.path.networkId}/devices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "claimNetworkDevices": {
      let path = `/networks/${params.arguments.path.networkId}/devices/claim`;
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
    case "vmxNetworkDevicesClaim": {
      let path = `/networks/${params.arguments.path.networkId}/devices/claim/vmx`;
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
    case "removeNetworkDevices": {
      let path = `/networks/${params.arguments.path.networkId}/devices/remove`;
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
    case "getNetworkEvents": {
      let path = `/networks/${params.arguments.path.networkId}/events`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkEventsEventTypes": {
      let path = `/networks/${params.arguments.path.networkId}/events/eventTypes`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkFirmwareUpgrades": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFirmwareUpgrades": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades`;
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
    case "createNetworkFirmwareUpgradesRollback": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/rollbacks`;
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
    case "getNetworkFirmwareUpgradesStagedEvents": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/events`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkFirmwareUpgradesStagedEvent": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/events`;
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
    case "updateNetworkFirmwareUpgradesStagedEvents": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/events`;
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
    case "deferNetworkFirmwareUpgradesStagedEvents": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/events/defer`;
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
    case "rollbacksNetworkFirmwareUpgradesStagedEvents": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/events/rollbacks`;
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
    case "getNetworkFirmwareUpgradesStagedGroups": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/groups`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkFirmwareUpgradesStagedGroup": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/groups`;
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
    case "getNetworkFirmwareUpgradesStagedGroup": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/groups/{groupId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFirmwareUpgradesStagedGroup": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/groups/{groupId}`;
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
    case "deleteNetworkFirmwareUpgradesStagedGroup": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/groups/{groupId}`;
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
    case "getNetworkFirmwareUpgradesStagedStages": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/stages`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFirmwareUpgradesStagedStages": {
      let path = `/networks/${params.arguments.path.networkId}/firmwareUpgrades/staged/stages`;
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
    case "getNetworkFloorPlans": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkFloorPlan": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans`;
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
    case "batchNetworkFloorPlansAutoLocateJobs": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans/autoLocate/jobs/batch`;
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
    case "cancelNetworkFloorPlansAutoLocateJob": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans/autoLocate/jobs/{jobId}/cancel`;
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
    case "publishNetworkFloorPlansAutoLocateJob": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans/autoLocate/jobs/{jobId}/publish`;
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
    case "recalculateNetworkFloorPlansAutoLocateJob": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans/autoLocate/jobs/{jobId}/recalculate`;
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
    case "batchNetworkFloorPlansDevicesUpdate": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans/devices/batchUpdate`;
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
    case "getNetworkFloorPlan": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans/{floorPlanId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkFloorPlan": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans/{floorPlanId}`;
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
    case "deleteNetworkFloorPlan": {
      let path = `/networks/${params.arguments.path.networkId}/floorPlans/{floorPlanId}`;
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
    case "getNetworkGroupPolicies": {
      let path = `/networks/${params.arguments.path.networkId}/groupPolicies`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkGroupPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/groupPolicies`;
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
    case "getNetworkGroupPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/groupPolicies/{groupPolicyId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkGroupPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/groupPolicies/{groupPolicyId}`;
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
    case "deleteNetworkGroupPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/groupPolicies/{groupPolicyId}`;
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
    case "getNetworkHealthAlerts": {
      let path = `/networks/${params.arguments.path.networkId}/health/alerts`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkLocationScanning": {
      let path = `/networks/${params.arguments.path.networkId}/locationScanning`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkLocationScanning": {
      let path = `/networks/${params.arguments.path.networkId}/locationScanning`;
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
    case "getNetworkLocationScanningHttpServers": {
      let path = `/networks/${params.arguments.path.networkId}/locationScanning/httpServers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkLocationScanningHttpServers": {
      let path = `/networks/${params.arguments.path.networkId}/locationScanning/httpServers`;
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
    case "getNetworkMerakiAuthUsers": {
      let path = `/networks/${params.arguments.path.networkId}/merakiAuthUsers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkMerakiAuthUser": {
      let path = `/networks/${params.arguments.path.networkId}/merakiAuthUsers`;
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
    case "getNetworkMerakiAuthUser": {
      let path = `/networks/${params.arguments.path.networkId}/merakiAuthUsers/{merakiAuthUserId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkMerakiAuthUser": {
      let path = `/networks/${params.arguments.path.networkId}/merakiAuthUsers/{merakiAuthUserId}`;
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
    case "updateNetworkMerakiAuthUser": {
      let path = `/networks/${params.arguments.path.networkId}/merakiAuthUsers/{merakiAuthUserId}`;
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
    case "getNetworkMqttBrokers": {
      let path = `/networks/${params.arguments.path.networkId}/mqttBrokers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkMqttBroker": {
      let path = `/networks/${params.arguments.path.networkId}/mqttBrokers`;
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
    case "getNetworkMqttBroker": {
      let path = `/networks/${params.arguments.path.networkId}/mqttBrokers/{mqttBrokerId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkMqttBroker": {
      let path = `/networks/${params.arguments.path.networkId}/mqttBrokers/{mqttBrokerId}`;
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
    case "deleteNetworkMqttBroker": {
      let path = `/networks/${params.arguments.path.networkId}/mqttBrokers/{mqttBrokerId}`;
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
    case "getNetworkNetflow": {
      let path = `/networks/${params.arguments.path.networkId}/netflow`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkNetflow": {
      let path = `/networks/${params.arguments.path.networkId}/netflow`;
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
    case "getNetworkNetworkHealthChannelUtilization": {
      let path = `/networks/${params.arguments.path.networkId}/networkHealth/channelUtilization`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPiiPiiKeys": {
      let path = `/networks/${params.arguments.path.networkId}/pii/piiKeys`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPiiRequests": {
      let path = `/networks/${params.arguments.path.networkId}/pii/requests`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkPiiRequest": {
      let path = `/networks/${params.arguments.path.networkId}/pii/requests`;
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
    case "getNetworkPiiRequest": {
      let path = `/networks/${params.arguments.path.networkId}/pii/requests/{requestId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkPiiRequest": {
      let path = `/networks/${params.arguments.path.networkId}/pii/requests/{requestId}`;
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
    case "getNetworkPiiSmDevicesForKey": {
      let path = `/networks/${params.arguments.path.networkId}/pii/smDevicesForKey`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPiiSmOwnersForKey": {
      let path = `/networks/${params.arguments.path.networkId}/pii/smOwnersForKey`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkPoliciesByClient": {
      let path = `/networks/${params.arguments.path.networkId}/policies/byClient`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSettings": {
      let path = `/networks/${params.arguments.path.networkId}/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSettings": {
      let path = `/networks/${params.arguments.path.networkId}/settings`;
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
    case "getNetworkSnmp": {
      let path = `/networks/${params.arguments.path.networkId}/snmp`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSnmp": {
      let path = `/networks/${params.arguments.path.networkId}/snmp`;
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
    case "updateNetworkSnmpTraps": {
      let path = `/networks/${params.arguments.path.networkId}/snmp/traps`;
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
    case "getNetworkSplashLoginAttempts": {
      let path = `/networks/${params.arguments.path.networkId}/splashLoginAttempts`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "splitNetwork": {
      let path = `/networks/${params.arguments.path.networkId}/split`;
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
    case "getNetworkSyslogServers": {
      let path = `/networks/${params.arguments.path.networkId}/syslogServers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSyslogServers": {
      let path = `/networks/${params.arguments.path.networkId}/syslogServers`;
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
    case "getNetworkTopologyLinkLayer": {
      let path = `/networks/${params.arguments.path.networkId}/topology/linkLayer`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkTraffic": {
      let path = `/networks/${params.arguments.path.networkId}/traffic`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkTrafficAnalysis": {
      let path = `/networks/${params.arguments.path.networkId}/trafficAnalysis`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkTrafficAnalysis": {
      let path = `/networks/${params.arguments.path.networkId}/trafficAnalysis`;
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
    case "getNetworkTrafficShapingApplicationCategories": {
      let path = `/networks/${params.arguments.path.networkId}/trafficShaping/applicationCategories`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkTrafficShapingDscpTaggingOptions": {
      let path = `/networks/${params.arguments.path.networkId}/trafficShaping/dscpTaggingOptions`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "unbindNetwork": {
      let path = `/networks/${params.arguments.path.networkId}/unbind`;
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
    case "getNetworkVlanProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/vlanProfiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkVlanProfile": {
      let path = `/networks/${params.arguments.path.networkId}/vlanProfiles`;
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
    case "getNetworkVlanProfilesAssignmentsByDevice": {
      let path = `/networks/${params.arguments.path.networkId}/vlanProfiles/assignments/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "reassignNetworkVlanProfilesAssignments": {
      let path = `/networks/${params.arguments.path.networkId}/vlanProfiles/assignments/reassign`;
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
    case "getNetworkVlanProfile": {
      let path = `/networks/${params.arguments.path.networkId}/vlanProfiles/{iname}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkVlanProfile": {
      let path = `/networks/${params.arguments.path.networkId}/vlanProfiles/{iname}`;
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
    case "deleteNetworkVlanProfile": {
      let path = `/networks/${params.arguments.path.networkId}/vlanProfiles/{iname}`;
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
    case "getNetworkWebhooksHttpServers": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/httpServers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWebhooksHttpServer": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/httpServers`;
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
    case "getNetworkWebhooksHttpServer": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/httpServers/{httpServerId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWebhooksHttpServer": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/httpServers/{httpServerId}`;
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
    case "deleteNetworkWebhooksHttpServer": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/httpServers/{httpServerId}`;
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
    case "getNetworkWebhooksPayloadTemplates": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/payloadTemplates`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWebhooksPayloadTemplate": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/payloadTemplates`;
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
    case "getNetworkWebhooksPayloadTemplate": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/payloadTemplates/{payloadTemplateId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkWebhooksPayloadTemplate": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/payloadTemplates/{payloadTemplateId}`;
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
    case "updateNetworkWebhooksPayloadTemplate": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/payloadTemplates/{payloadTemplateId}`;
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
    case "createNetworkWebhooksWebhookTest": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/webhookTests`;
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
    case "getNetworkWebhooksWebhookTest": {
      let path = `/networks/${params.arguments.path.networkId}/webhooks/webhookTests/{webhookTestId}`;
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

export const networksEndpoints = [
  "getNetwork",
  "updateNetwork",
  "deleteNetwork",
  "getNetworkAlertsHistory",
  "getNetworkAlertsSettings",
  "updateNetworkAlertsSettings",
  "bindNetwork",
  "getNetworkBluetoothClients",
  "getNetworkBluetoothClient",
  "getNetworkClients",
  "getNetworkClientsApplicationUsage",
  "getNetworkClientsBandwidthUsageHistory",
  "getNetworkClientsOverview",
  "provisionNetworkClients",
  "getNetworkClientsUsageHistories",
  "getNetworkClient",
  "getNetworkClientPolicy",
  "updateNetworkClientPolicy",
  "getNetworkClientSplashAuthorizationStatus",
  "updateNetworkClientSplashAuthorizationStatus",
  "getNetworkClientTrafficHistory",
  "getNetworkClientUsageHistory",
  "getNetworkDevices",
  "claimNetworkDevices",
  "vmxNetworkDevicesClaim",
  "removeNetworkDevices",
  "getNetworkEvents",
  "getNetworkEventsEventTypes",
  "getNetworkFirmwareUpgrades",
  "updateNetworkFirmwareUpgrades",
  "createNetworkFirmwareUpgradesRollback",
  "getNetworkFirmwareUpgradesStagedEvents",
  "createNetworkFirmwareUpgradesStagedEvent",
  "updateNetworkFirmwareUpgradesStagedEvents",
  "deferNetworkFirmwareUpgradesStagedEvents",
  "rollbacksNetworkFirmwareUpgradesStagedEvents",
  "getNetworkFirmwareUpgradesStagedGroups",
  "createNetworkFirmwareUpgradesStagedGroup",
  "getNetworkFirmwareUpgradesStagedGroup",
  "updateNetworkFirmwareUpgradesStagedGroup",
  "deleteNetworkFirmwareUpgradesStagedGroup",
  "getNetworkFirmwareUpgradesStagedStages",
  "updateNetworkFirmwareUpgradesStagedStages",
  "getNetworkFloorPlans",
  "createNetworkFloorPlan",
  "batchNetworkFloorPlansAutoLocateJobs",
  "cancelNetworkFloorPlansAutoLocateJob",
  "publishNetworkFloorPlansAutoLocateJob",
  "recalculateNetworkFloorPlansAutoLocateJob",
  "batchNetworkFloorPlansDevicesUpdate",
  "getNetworkFloorPlan",
  "updateNetworkFloorPlan",
  "deleteNetworkFloorPlan",
  "getNetworkGroupPolicies",
  "createNetworkGroupPolicy",
  "getNetworkGroupPolicy",
  "updateNetworkGroupPolicy",
  "deleteNetworkGroupPolicy",
  "getNetworkHealthAlerts",
  "getNetworkLocationScanning",
  "updateNetworkLocationScanning",
  "getNetworkLocationScanningHttpServers",
  "updateNetworkLocationScanningHttpServers",
  "getNetworkMerakiAuthUsers",
  "createNetworkMerakiAuthUser",
  "getNetworkMerakiAuthUser",
  "deleteNetworkMerakiAuthUser",
  "updateNetworkMerakiAuthUser",
  "getNetworkMqttBrokers",
  "createNetworkMqttBroker",
  "getNetworkMqttBroker",
  "updateNetworkMqttBroker",
  "deleteNetworkMqttBroker",
  "getNetworkNetflow",
  "updateNetworkNetflow",
  "getNetworkNetworkHealthChannelUtilization",
  "getNetworkPiiPiiKeys",
  "getNetworkPiiRequests",
  "createNetworkPiiRequest",
  "getNetworkPiiRequest",
  "deleteNetworkPiiRequest",
  "getNetworkPiiSmDevicesForKey",
  "getNetworkPiiSmOwnersForKey",
  "getNetworkPoliciesByClient",
  "getNetworkSettings",
  "updateNetworkSettings",
  "getNetworkSnmp",
  "updateNetworkSnmp",
  "updateNetworkSnmpTraps",
  "getNetworkSplashLoginAttempts",
  "splitNetwork",
  "getNetworkSyslogServers",
  "updateNetworkSyslogServers",
  "getNetworkTopologyLinkLayer",
  "getNetworkTraffic",
  "getNetworkTrafficAnalysis",
  "updateNetworkTrafficAnalysis",
  "getNetworkTrafficShapingApplicationCategories",
  "getNetworkTrafficShapingDscpTaggingOptions",
  "unbindNetwork",
  "getNetworkVlanProfiles",
  "createNetworkVlanProfile",
  "getNetworkVlanProfilesAssignmentsByDevice",
  "reassignNetworkVlanProfilesAssignments",
  "getNetworkVlanProfile",
  "updateNetworkVlanProfile",
  "deleteNetworkVlanProfile",
  "getNetworkWebhooksHttpServers",
  "createNetworkWebhooksHttpServer",
  "getNetworkWebhooksHttpServer",
  "updateNetworkWebhooksHttpServer",
  "deleteNetworkWebhooksHttpServer",
  "getNetworkWebhooksPayloadTemplates",
  "createNetworkWebhooksPayloadTemplate",
  "getNetworkWebhooksPayloadTemplate",
  "deleteNetworkWebhooksPayloadTemplate",
  "updateNetworkWebhooksPayloadTemplate",
  "createNetworkWebhooksWebhookTest",
  "getNetworkWebhooksWebhookTest"
];
