export async function _wireless(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "updateDeviceWirelessAlternateManagementInterfaceIpv6": {
      let path = `/devices/${params.arguments.path.serial}/wireless/alternateManagementInterface/ipv6`;
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
    case "getDeviceWirelessBluetoothSettings": {
      let path = `/devices/${params.arguments.path.serial}/wireless/bluetooth/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceWirelessBluetoothSettings": {
      let path = `/devices/${params.arguments.path.serial}/wireless/bluetooth/settings`;
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
    case "getDeviceWirelessConnectionStats": {
      let path = `/devices/${params.arguments.path.serial}/wireless/connectionStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceWirelessElectronicShelfLabel": {
      let path = `/devices/${params.arguments.path.serial}/wireless/electronicShelfLabel`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceWirelessElectronicShelfLabel": {
      let path = `/devices/${params.arguments.path.serial}/wireless/electronicShelfLabel`;
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
    case "getDeviceWirelessHealthScores": {
      let path = `/devices/${params.arguments.path.serial}/wireless/healthScores`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceWirelessLatencyStats": {
      let path = `/devices/${params.arguments.path.serial}/wireless/latencyStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceWirelessRadioAfcPosition": {
      let path = `/devices/${params.arguments.path.serial}/wireless/radio/afc/position`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceWirelessRadioAfcPosition": {
      let path = `/devices/${params.arguments.path.serial}/wireless/radio/afc/position`;
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
    case "getDeviceWirelessRadioAfcPowerLimits": {
      let path = `/devices/${params.arguments.path.serial}/wireless/radio/afc/powerLimits`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceWirelessRadioSettings": {
      let path = `/devices/${params.arguments.path.serial}/wireless/radio/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceWirelessRadioSettings": {
      let path = `/devices/${params.arguments.path.serial}/wireless/radio/settings`;
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
    case "getDeviceWirelessStatus": {
      let path = `/devices/${params.arguments.path.serial}/wireless/status`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceWirelessZigbeeEnrollment": {
      let path = `/devices/${params.arguments.path.serial}/wireless/zigbee/enrollments`;
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
    case "getDeviceWirelessZigbeeEnrollment": {
      let path = `/devices/${params.arguments.path.serial}/wireless/zigbee/enrollments/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessAirMarshal": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/airMarshal`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWirelessAirMarshalRule": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/airMarshal/rules`;
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
    case "updateNetworkWirelessAirMarshalRule": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/airMarshal/rules/{ruleId}`;
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
    case "deleteNetworkWirelessAirMarshalRule": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/airMarshal/rules/{ruleId}`;
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
    case "updateNetworkWirelessAirMarshalSettings": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/airMarshal/settings`;
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
    case "getNetworkWirelessAlternateManagementInterface": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/alternateManagementInterface`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessAlternateManagementInterface": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/alternateManagementInterface`;
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
    case "getNetworkWirelessBilling": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/billing`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessBilling": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/billing`;
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
    case "getNetworkWirelessBluetoothSettings": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/bluetooth/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessBluetoothSettings": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/bluetooth/settings`;
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
    case "getNetworkWirelessChannelUtilizationHistory": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/channelUtilizationHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientCountHistory": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clientCountHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientsConnectionStats": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/connectionStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientsHealthScores": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/healthScores`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientsLatencyStats": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/latencyStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientsOnboardingHistory": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/onboardingHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientConnectionStats": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/{clientId}/connectionStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientConnectivityEvents": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/{clientId}/connectivityEvents`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientHealthScores": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/{clientId}/healthScores`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientLatencyHistory": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/{clientId}/latencyHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessClientLatencyStats": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/clients/{clientId}/latencyStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessConnectionStats": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/connectionStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessDataRateHistory": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/dataRateHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessDevicesConnectionStats": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/devices/connectionStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessDevicesHealthScores": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/devices/healthScores`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessDevicesLatencyStats": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/devices/latencyStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessElectronicShelfLabel": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/electronicShelfLabel`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessElectronicShelfLabel": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/electronicShelfLabel`;
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
    case "getNetworkWirelessElectronicShelfLabelConfiguredDevices": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/electronicShelfLabel/configuredDevices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessEthernetPortsProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ethernet/ports/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWirelessEthernetPortsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ethernet/ports/profiles`;
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
    case "assignNetworkWirelessEthernetPortsProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ethernet/ports/profiles/assign`;
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
    case "setNetworkWirelessEthernetPortsProfilesDefault": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ethernet/ports/profiles/setDefault`;
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
    case "getNetworkWirelessEthernetPortsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ethernet/ports/profiles/{profileId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessEthernetPortsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ethernet/ports/profiles/{profileId}`;
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
    case "deleteNetworkWirelessEthernetPortsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ethernet/ports/profiles/{profileId}`;
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
    case "getNetworkWirelessFailedConnections": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/failedConnections`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessLatencyHistory": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/latencyHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessLatencyStats": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/latencyStats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessLocationScanning": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/location/scanning`;
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
    case "getNetworkWirelessMeshStatuses": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/meshStatuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessOpportunisticPcap": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/opportunisticPcap`;
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
    case "updateNetworkWirelessRadioAutoRf": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/radio/autoRf`;
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
    case "getNetworkWirelessRfProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/rfProfiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWirelessRfProfile": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/rfProfiles`;
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
    case "updateNetworkWirelessRfProfile": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/rfProfiles/{rfProfileId}`;
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
    case "deleteNetworkWirelessRfProfile": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/rfProfiles/{rfProfileId}`;
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
    case "getNetworkWirelessRfProfile": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/rfProfiles/{rfProfileId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessSettings": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSettings": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/settings`;
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
    case "getNetworkWirelessSignalQualityHistory": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/signalQualityHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessSsids": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessSsid": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsid": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}`;
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
    case "getNetworkWirelessSsidBonjourForwarding": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/bonjourForwarding`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidBonjourForwarding": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/bonjourForwarding`;
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
    case "getNetworkWirelessSsidDeviceTypeGroupPolicies": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidDeviceTypeGroupPolicies": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies`;
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
    case "getNetworkWirelessSsidEapOverride": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/eapOverride`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidEapOverride": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/eapOverride`;
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
    case "getNetworkWirelessSsidFirewallL3FirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/firewall/l3FirewallRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidFirewallL3FirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/firewall/l3FirewallRules`;
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
    case "getNetworkWirelessSsidFirewallL7FirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/firewall/l7FirewallRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidFirewallL7FirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/firewall/l7FirewallRules`;
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
    case "getNetworkWirelessSsidHotspot20": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/hotspot20`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidHotspot20": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/hotspot20`;
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
    case "getNetworkWirelessSsidIdentityPsks": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/identityPsks`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkWirelessSsidIdentityPsk": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/identityPsks`;
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
    case "getNetworkWirelessSsidIdentityPsk": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidIdentityPsk": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}`;
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
    case "deleteNetworkWirelessSsidIdentityPsk": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}`;
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
    case "getNetworkWirelessSsidSchedules": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/schedules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidSchedules": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/schedules`;
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
    case "getNetworkWirelessSsidSplashSettings": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/splash/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidSplashSettings": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/splash/settings`;
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
    case "updateNetworkWirelessSsidTrafficShapingRules": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/trafficShaping/rules`;
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
    case "getNetworkWirelessSsidTrafficShapingRules": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/trafficShaping/rules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkWirelessSsidVpn": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/vpn`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessSsidVpn": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/ssids/{number}/vpn`;
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
    case "getNetworkWirelessUsageHistory": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/usageHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkWirelessZigbee": {
      let path = `/networks/${params.arguments.path.networkId}/wireless/zigbee`;
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
    case "getOrganizationWirelessAirMarshalRules": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/airMarshal/rules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessAirMarshalSettingsByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/airMarshal/settings/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessCertificatesOpenRoamingCertificateAuthori": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/certificates/openRoaming/certificateAuthority`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessClientsOverviewByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/clients/overview/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesChannelUtilizationByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/channelUtilization/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesChannelUtilizationByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/channelUtilization/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesChannelUtilizationHistoryByDeviceB": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/channelUtilization/history/byDevice/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesChannelUtilizationHistoryByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/channelUtilization/history/byNetwork/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesEthernetStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/ethernet/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesLatencyByClient": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/latency/byClient`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesLatencyByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/latency/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesLatencyByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/latency/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesPacketLossByClient": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/packetLoss/byClient`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesPacketLossByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/packetLoss/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesPacketLossByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/packetLoss/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesPowerModeHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/power/mode/history`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesRadsecCertificatesAuthorities": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/radsec/certificates/authorities`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationWirelessDevicesRadsecCertificatesAuthorities": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/radsec/certificates/authorities`;
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
    case "createOrganizationWirelessDevicesRadsecCertificatesAuthority": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/radsec/certificates/authorities`;
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
    case "getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrls": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/radsec/certificates/authorities/crls`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrlsD": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/radsec/certificates/authorities/crls/deltas`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesSignalQualityByClient": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/signalQuality/byClient`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesSignalQualityByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/signalQuality/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesSignalQualityByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/signalQuality/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesSystemCpuLoadHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/system/cpu/load/history`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessDevicesWirelessControllersByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/devices/wirelessControllers/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessLocationScanningByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/location/scanning/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessLocationScanningReceivers": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/location/scanning/receivers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationWirelessLocationScanningReceiver": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/location/scanning/receivers`;
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
    case "updateOrganizationWirelessLocationScanningReceiver": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/location/scanning/receivers/{receiverId}`;
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
    case "deleteOrganizationWirelessLocationScanningReceiver": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/location/scanning/receivers/{receiverId}`;
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
    case "getOrganizationWirelessOpportunisticPcapByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/opportunisticPcap/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "byOrganizationWirelessOpportunisticPcapLicenseNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/opportunisticPcap/license/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessRadioAfcPositionByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/radio/afc/position/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessRadioAfcPowerLimitsByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/radio/afc/powerLimits/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessRadioAutoRfByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/radio/autoRf/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessRadioAutoRfChannelsPlanningActivities": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/radio/autoRf/channels/planning/activities`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "recalculateOrganizationWirelessRadioAutoRfChannels": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/radio/autoRf/channels/recalculate`;
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
    case "getOrganizationWirelessRfProfilesAssignmentsByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/rfProfiles/assignments/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessSsidsFirewallIsolationAllowlistEntries": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/ssids/firewall/isolation/allowlist/entries`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationWirelessSsidsFirewallIsolationAllowlistEntry": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/ssids/firewall/isolation/allowlist/entries`;
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
    case "deleteOrganizationWirelessSsidsFirewallIsolationAllowlistEntry": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/ssids/firewall/isolation/allowlist/entries/{entryId}`;
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
    case "updateOrganizationWirelessSsidsFirewallIsolationAllowlistEntry": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/ssids/firewall/isolation/allowlist/entries/{entryId}`;
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
    case "getOrganizationWirelessSsidsStatusesByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/ssids/statuses/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessZigbeeByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/zigbee/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessZigbeeDevices": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/zigbee/devices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationWirelessZigbeeDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/zigbee/devices/{id}`;
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
    case "createOrganizationWirelessZigbeeDisenrollment": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/zigbee/disenrollments`;
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
    case "getOrganizationWirelessZigbeeDisenrollment": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/zigbee/disenrollments/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationWirelessZigbeeDoorLocks": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/zigbee/doorLocks`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationWirelessZigbeeDoorLock": {
      let path = `/organizations/${params.arguments.path.organizationId}/wireless/zigbee/doorLocks/{id}`;
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
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
}

export const wirelessEndpoints = [
  "updateDeviceWirelessAlternateManagementInterfaceIpv6",
  "getDeviceWirelessBluetoothSettings",
  "updateDeviceWirelessBluetoothSettings",
  "getDeviceWirelessConnectionStats",
  "getDeviceWirelessElectronicShelfLabel",
  "updateDeviceWirelessElectronicShelfLabel",
  "getDeviceWirelessHealthScores",
  "getDeviceWirelessLatencyStats",
  "getDeviceWirelessRadioAfcPosition",
  "updateDeviceWirelessRadioAfcPosition",
  "getDeviceWirelessRadioAfcPowerLimits",
  "getDeviceWirelessRadioSettings",
  "updateDeviceWirelessRadioSettings",
  "getDeviceWirelessStatus",
  "createDeviceWirelessZigbeeEnrollment",
  "getDeviceWirelessZigbeeEnrollment",
  "getNetworkWirelessAirMarshal",
  "createNetworkWirelessAirMarshalRule",
  "updateNetworkWirelessAirMarshalRule",
  "deleteNetworkWirelessAirMarshalRule",
  "updateNetworkWirelessAirMarshalSettings",
  "getNetworkWirelessAlternateManagementInterface",
  "updateNetworkWirelessAlternateManagementInterface",
  "getNetworkWirelessBilling",
  "updateNetworkWirelessBilling",
  "getNetworkWirelessBluetoothSettings",
  "updateNetworkWirelessBluetoothSettings",
  "getNetworkWirelessChannelUtilizationHistory",
  "getNetworkWirelessClientCountHistory",
  "getNetworkWirelessClientsConnectionStats",
  "getNetworkWirelessClientsHealthScores",
  "getNetworkWirelessClientsLatencyStats",
  "getNetworkWirelessClientsOnboardingHistory",
  "getNetworkWirelessClientConnectionStats",
  "getNetworkWirelessClientConnectivityEvents",
  "getNetworkWirelessClientHealthScores",
  "getNetworkWirelessClientLatencyHistory",
  "getNetworkWirelessClientLatencyStats",
  "getNetworkWirelessConnectionStats",
  "getNetworkWirelessDataRateHistory",
  "getNetworkWirelessDevicesConnectionStats",
  "getNetworkWirelessDevicesHealthScores",
  "getNetworkWirelessDevicesLatencyStats",
  "getNetworkWirelessElectronicShelfLabel",
  "updateNetworkWirelessElectronicShelfLabel",
  "getNetworkWirelessElectronicShelfLabelConfiguredDevices",
  "getNetworkWirelessEthernetPortsProfiles",
  "createNetworkWirelessEthernetPortsProfile",
  "assignNetworkWirelessEthernetPortsProfiles",
  "setNetworkWirelessEthernetPortsProfilesDefault",
  "getNetworkWirelessEthernetPortsProfile",
  "updateNetworkWirelessEthernetPortsProfile",
  "deleteNetworkWirelessEthernetPortsProfile",
  "getNetworkWirelessFailedConnections",
  "getNetworkWirelessLatencyHistory",
  "getNetworkWirelessLatencyStats",
  "updateNetworkWirelessLocationScanning",
  "getNetworkWirelessMeshStatuses",
  "updateNetworkWirelessOpportunisticPcap",
  "updateNetworkWirelessRadioAutoRf",
  "getNetworkWirelessRfProfiles",
  "createNetworkWirelessRfProfile",
  "updateNetworkWirelessRfProfile",
  "deleteNetworkWirelessRfProfile",
  "getNetworkWirelessRfProfile",
  "getNetworkWirelessSettings",
  "updateNetworkWirelessSettings",
  "getNetworkWirelessSignalQualityHistory",
  "getNetworkWirelessSsids",
  "getNetworkWirelessSsid",
  "updateNetworkWirelessSsid",
  "getNetworkWirelessSsidBonjourForwarding",
  "updateNetworkWirelessSsidBonjourForwarding",
  "getNetworkWirelessSsidDeviceTypeGroupPolicies",
  "updateNetworkWirelessSsidDeviceTypeGroupPolicies",
  "getNetworkWirelessSsidEapOverride",
  "updateNetworkWirelessSsidEapOverride",
  "getNetworkWirelessSsidFirewallL3FirewallRules",
  "updateNetworkWirelessSsidFirewallL3FirewallRules",
  "getNetworkWirelessSsidFirewallL7FirewallRules",
  "updateNetworkWirelessSsidFirewallL7FirewallRules",
  "getNetworkWirelessSsidHotspot20",
  "updateNetworkWirelessSsidHotspot20",
  "getNetworkWirelessSsidIdentityPsks",
  "createNetworkWirelessSsidIdentityPsk",
  "getNetworkWirelessSsidIdentityPsk",
  "updateNetworkWirelessSsidIdentityPsk",
  "deleteNetworkWirelessSsidIdentityPsk",
  "getNetworkWirelessSsidSchedules",
  "updateNetworkWirelessSsidSchedules",
  "getNetworkWirelessSsidSplashSettings",
  "updateNetworkWirelessSsidSplashSettings",
  "updateNetworkWirelessSsidTrafficShapingRules",
  "getNetworkWirelessSsidTrafficShapingRules",
  "getNetworkWirelessSsidVpn",
  "updateNetworkWirelessSsidVpn",
  "getNetworkWirelessUsageHistory",
  "updateNetworkWirelessZigbee",
  "getOrganizationWirelessAirMarshalRules",
  "getOrganizationWirelessAirMarshalSettingsByNetwork",
  "getOrganizationWirelessCertificatesOpenRoamingCertificateAuthori",
  "getOrganizationWirelessClientsOverviewByDevice",
  "getOrganizationWirelessDevicesChannelUtilizationByDevice",
  "getOrganizationWirelessDevicesChannelUtilizationByNetwork",
  "getOrganizationWirelessDevicesChannelUtilizationHistoryByDeviceB",
  "getOrganizationWirelessDevicesChannelUtilizationHistoryByNetwork",
  "getOrganizationWirelessDevicesEthernetStatuses",
  "getOrganizationWirelessDevicesLatencyByClient",
  "getOrganizationWirelessDevicesLatencyByDevice",
  "getOrganizationWirelessDevicesLatencyByNetwork",
  "getOrganizationWirelessDevicesPacketLossByClient",
  "getOrganizationWirelessDevicesPacketLossByDevice",
  "getOrganizationWirelessDevicesPacketLossByNetwork",
  "getOrganizationWirelessDevicesPowerModeHistory",
  "getOrganizationWirelessDevicesRadsecCertificatesAuthorities",
  "updateOrganizationWirelessDevicesRadsecCertificatesAuthorities",
  "createOrganizationWirelessDevicesRadsecCertificatesAuthority",
  "getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrls",
  "getOrganizationWirelessDevicesRadsecCertificatesAuthoritiesCrlsD",
  "getOrganizationWirelessDevicesSignalQualityByClient",
  "getOrganizationWirelessDevicesSignalQualityByDevice",
  "getOrganizationWirelessDevicesSignalQualityByNetwork",
  "getOrganizationWirelessDevicesSystemCpuLoadHistory",
  "getOrganizationWirelessDevicesWirelessControllersByDevice",
  "getOrganizationWirelessLocationScanningByNetwork",
  "getOrganizationWirelessLocationScanningReceivers",
  "createOrganizationWirelessLocationScanningReceiver",
  "updateOrganizationWirelessLocationScanningReceiver",
  "deleteOrganizationWirelessLocationScanningReceiver",
  "getOrganizationWirelessOpportunisticPcapByNetwork",
  "byOrganizationWirelessOpportunisticPcapLicenseNetwork",
  "getOrganizationWirelessRadioAfcPositionByDevice",
  "getOrganizationWirelessRadioAfcPowerLimitsByDevice",
  "getOrganizationWirelessRadioAutoRfByNetwork",
  "getOrganizationWirelessRadioAutoRfChannelsPlanningActivities",
  "recalculateOrganizationWirelessRadioAutoRfChannels",
  "getOrganizationWirelessRfProfilesAssignmentsByDevice",
  "getOrganizationWirelessSsidsFirewallIsolationAllowlistEntries",
  "createOrganizationWirelessSsidsFirewallIsolationAllowlistEntry",
  "deleteOrganizationWirelessSsidsFirewallIsolationAllowlistEntry",
  "updateOrganizationWirelessSsidsFirewallIsolationAllowlistEntry",
  "getOrganizationWirelessSsidsStatusesByDevice",
  "getOrganizationWirelessZigbeeByNetwork",
  "getOrganizationWirelessZigbeeDevices",
  "updateOrganizationWirelessZigbeeDevice",
  "createOrganizationWirelessZigbeeDisenrollment",
  "getOrganizationWirelessZigbeeDisenrollment",
  "getOrganizationWirelessZigbeeDoorLocks",
  "updateOrganizationWirelessZigbeeDoorLock"
];
