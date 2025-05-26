export async function _switch(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceSwitchPorts": {
      let path = `/devices/${params.arguments.path.serial}/switch/ports`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "cycleDeviceSwitchPorts": {
      let path = `/devices/${params.arguments.path.serial}/switch/ports/cycle`;
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
    case "updateDeviceSwitchPortsMirror": {
      let path = `/devices/${params.arguments.path.serial}/switch/ports/mirror`;
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
    case "getDeviceSwitchPortsStatuses": {
      let path = `/devices/${params.arguments.path.serial}/switch/ports/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchPortsStatusesPackets": {
      let path = `/devices/${params.arguments.path.serial}/switch/ports/statuses/packets`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchPort": {
      let path = `/devices/${params.arguments.path.serial}/switch/ports/{portId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchPort": {
      let path = `/devices/${params.arguments.path.serial}/switch/ports/{portId}`;
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
    case "getDeviceSwitchRoutingInterfaces": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/interfaces`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceSwitchRoutingInterface": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/interfaces`;
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
    case "getDeviceSwitchRoutingInterface": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/interfaces/{interfaceId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchRoutingInterface": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/interfaces/{interfaceId}`;
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
    case "deleteDeviceSwitchRoutingInterface": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/interfaces/{interfaceId}`;
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
    case "getDeviceSwitchRoutingInterfaceDhcp": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/interfaces/{interfaceId}/dhcp`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchRoutingInterfaceDhcp": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/interfaces/{interfaceId}/dhcp`;
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
    case "getDeviceSwitchRoutingStaticRoutes": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/staticRoutes`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceSwitchRoutingStaticRoute": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/staticRoutes`;
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
    case "getDeviceSwitchRoutingStaticRoute": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/staticRoutes/{staticRouteId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchRoutingStaticRoute": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/staticRoutes/{staticRouteId}`;
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
    case "deleteDeviceSwitchRoutingStaticRoute": {
      let path = `/devices/${params.arguments.path.serial}/switch/routing/staticRoutes/{staticRouteId}`;
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
    case "getDeviceSwitchWarmSpare": {
      let path = `/devices/${params.arguments.path.serial}/switch/warmSpare`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchWarmSpare": {
      let path = `/devices/${params.arguments.path.serial}/switch/warmSpare`;
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
    case "getNetworkSwitchAccessControlLists": {
      let path = `/networks/${params.arguments.path.networkId}/switch/accessControlLists`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchAccessControlLists": {
      let path = `/networks/${params.arguments.path.networkId}/switch/accessControlLists`;
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
    case "getNetworkSwitchAccessPolicies": {
      let path = `/networks/${params.arguments.path.networkId}/switch/accessPolicies`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchAccessPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/switch/accessPolicies`;
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
    case "getNetworkSwitchAccessPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/switch/accessPolicies/{accessPolicyNumber}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchAccessPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/switch/accessPolicies/{accessPolicyNumber}`;
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
    case "deleteNetworkSwitchAccessPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/switch/accessPolicies/{accessPolicyNumber}`;
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
    case "getNetworkSwitchAlternateManagementInterface": {
      let path = `/networks/${params.arguments.path.networkId}/switch/alternateManagementInterface`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchAlternateManagementInterface": {
      let path = `/networks/${params.arguments.path.networkId}/switch/alternateManagementInterface`;
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
    case "getNetworkSwitchDhcpV4ServersSeen": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dhcp/v4/servers/seen`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchDhcpServerPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dhcpServerPolicy`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchDhcpServerPolicy": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dhcpServerPolicy`;
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
    case "getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers`;
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
    case "updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId}`;
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
    case "deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId}`;
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
    case "getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dhcpServerPolicy/arpInspection/warnings/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchDscpToCosMappings": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dscpToCosMappings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchDscpToCosMappings": {
      let path = `/networks/${params.arguments.path.networkId}/switch/dscpToCosMappings`;
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
    case "getNetworkSwitchLinkAggregations": {
      let path = `/networks/${params.arguments.path.networkId}/switch/linkAggregations`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchLinkAggregation": {
      let path = `/networks/${params.arguments.path.networkId}/switch/linkAggregations`;
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
    case "updateNetworkSwitchLinkAggregation": {
      let path = `/networks/${params.arguments.path.networkId}/switch/linkAggregations/{linkAggregationId}`;
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
    case "deleteNetworkSwitchLinkAggregation": {
      let path = `/networks/${params.arguments.path.networkId}/switch/linkAggregations/{linkAggregationId}`;
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
    case "getNetworkSwitchMtu": {
      let path = `/networks/${params.arguments.path.networkId}/switch/mtu`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchMtu": {
      let path = `/networks/${params.arguments.path.networkId}/switch/mtu`;
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
    case "getNetworkSwitchPortSchedules": {
      let path = `/networks/${params.arguments.path.networkId}/switch/portSchedules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchPortSchedule": {
      let path = `/networks/${params.arguments.path.networkId}/switch/portSchedules`;
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
    case "deleteNetworkSwitchPortSchedule": {
      let path = `/networks/${params.arguments.path.networkId}/switch/portSchedules/{portScheduleId}`;
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
    case "updateNetworkSwitchPortSchedule": {
      let path = `/networks/${params.arguments.path.networkId}/switch/portSchedules/{portScheduleId}`;
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
    case "getNetworkSwitchPortsProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/switch/ports/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchPortsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/switch/ports/profiles`;
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
    case "updateNetworkSwitchPortsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/switch/ports/profiles/{id}`;
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
    case "deleteNetworkSwitchPortsProfile": {
      let path = `/networks/${params.arguments.path.networkId}/switch/ports/profiles/{id}`;
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
    case "getNetworkSwitchQosRules": {
      let path = `/networks/${params.arguments.path.networkId}/switch/qosRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchQosRule": {
      let path = `/networks/${params.arguments.path.networkId}/switch/qosRules`;
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
    case "getNetworkSwitchQosRulesOrder": {
      let path = `/networks/${params.arguments.path.networkId}/switch/qosRules/order`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchQosRulesOrder": {
      let path = `/networks/${params.arguments.path.networkId}/switch/qosRules/order`;
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
    case "getNetworkSwitchQosRule": {
      let path = `/networks/${params.arguments.path.networkId}/switch/qosRules/{qosRuleId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchQosRule": {
      let path = `/networks/${params.arguments.path.networkId}/switch/qosRules/{qosRuleId}`;
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
    case "updateNetworkSwitchQosRule": {
      let path = `/networks/${params.arguments.path.networkId}/switch/qosRules/{qosRuleId}`;
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
    case "getNetworkSwitchRoutingMulticast": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/multicast`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchRoutingMulticast": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/multicast`;
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
    case "getNetworkSwitchRoutingMulticastRendezvousPoints": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/multicast/rendezvousPoints`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchRoutingMulticastRendezvousPoint": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/multicast/rendezvousPoints`;
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
    case "getNetworkSwitchRoutingMulticastRendezvousPoint": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchRoutingMulticastRendezvousPoint": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`;
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
    case "updateNetworkSwitchRoutingMulticastRendezvousPoint": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`;
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
    case "getNetworkSwitchRoutingOspf": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/ospf`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchRoutingOspf": {
      let path = `/networks/${params.arguments.path.networkId}/switch/routing/ospf`;
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
    case "getNetworkSwitchSettings": {
      let path = `/networks/${params.arguments.path.networkId}/switch/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchSettings": {
      let path = `/networks/${params.arguments.path.networkId}/switch/settings`;
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
    case "getNetworkSwitchStacks": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchStack": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks`;
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
    case "getNetworkSwitchStack": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchStack": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}`;
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
    case "addNetworkSwitchStack": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/add`;
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
    case "updateNetworkSwitchStackPortsMirror": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/ports/mirror`;
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
    case "removeNetworkSwitchStack": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/remove`;
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
    case "getNetworkSwitchStackRoutingInterfaces": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/interfaces`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchStackRoutingInterface": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/interfaces`;
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
    case "getNetworkSwitchStackRoutingInterface": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStackRoutingInterface": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`;
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
    case "deleteNetworkSwitchStackRoutingInterface": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`;
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
    case "getNetworkSwitchStackRoutingInterfaceDhcp": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStackRoutingInterfaceDhcp": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp`;
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
    case "getNetworkSwitchStackRoutingStaticRoutes": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/staticRoutes`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchStackRoutingStaticRoute": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/staticRoutes`;
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
    case "getNetworkSwitchStackRoutingStaticRoute": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStackRoutingStaticRoute": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}`;
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
    case "deleteNetworkSwitchStackRoutingStaticRoute": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}`;
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
    case "getNetworkSwitchStormControl": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stormControl`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStormControl": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stormControl`;
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
    case "getNetworkSwitchStp": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stp`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStp": {
      let path = `/networks/${params.arguments.path.networkId}/switch/stp`;
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
    case "getOrganizationConfigTemplatesSwitchProfilesPortsMirrorsBySwitch": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/switch/profiles/ports/mirrors/bySwitchProfile`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplateSwitchProfiles": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/{configTemplateId}/switch/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplateSwitchProfilePorts": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationConfigTemplateSwitchProfilePortsMirror": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/mirror`;
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
    case "getOrganizationConfigTemplateSwitchProfilePort": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationConfigTemplateSwitchProfilePort": {
      let path = `/organizations/${params.arguments.path.organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}`;
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
    case "getOrganizationSummarySwitchPowerHistory": {
      let path = `/organizations/${params.arguments.path.organizationId}/summary/switch/power/history`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "cloneOrganizationSwitchDevices": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/devices/clone`;
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
    case "getOrganizationSwitchDevicesSystemQueuesHistoryBySwitchByInterva": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/devices/system/queues/history/bySwitch/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsBySwitch": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/bySwitch`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsClientsOverviewByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/clients/overview/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsMirrorsBySwitch": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/mirrors/bySwitch`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsOverview": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsProfiles": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSwitchPortsProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles`;
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
    case "getOrganizationSwitchPortsProfilesAutomations": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/automations`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSwitchPortsProfilesAutomation": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/automations`;
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
    case "updateOrganizationSwitchPortsProfilesAutomation": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/automations/{id}`;
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
    case "deleteOrganizationSwitchPortsProfilesAutomation": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/automations/{id}`;
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
    case "getOrganizationSwitchPortsProfilesNetworksAssignments": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/networks/assignments`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSwitchPortsProfilesNetworksAssignment": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/networks/assignments`;
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
    case "batchOrganizationSwitchPortsProfilesNetworksAssignmentsCreate": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/networks/assignments/batchCreate`;
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
    case "bulkOrganizationSwitchPortsProfilesNetworksAssignmentsDelete": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/networks/assignments/bulkDelete`;
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
    case "deleteOrganizationSwitchPortsProfilesNetworksAssignment": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/networks/assignments/{assignmentId}`;
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
    case "getOrganizationSwitchPortsProfilesOverviewByProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/overview/byProfile`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSwitchPortsProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/{id}`;
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
    case "deleteOrganizationSwitchPortsProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/profiles/{id}`;
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
    case "getOrganizationSwitchPortsStatusesBySwitch": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/statuses/bySwitch`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsTopologyDiscoveryByDevice": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/topology/discovery/byDevice`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsTransceiversReadingsHistoryBySwitch": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/transceivers/readings/history/bySwitch`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsUsageHistoryByDeviceByInterval": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/ports/usage/history/byDevice/byInterval`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchStacksPortsMirrorsByStack": {
      let path = `/organizations/${params.arguments.path.organizationId}/switch/stacks/ports/mirrors/byStack`;
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

export const switchEndpoints = [
  "getDeviceSwitchPorts",
  "cycleDeviceSwitchPorts",
  "updateDeviceSwitchPortsMirror",
  "getDeviceSwitchPortsStatuses",
  "getDeviceSwitchPortsStatusesPackets",
  "getDeviceSwitchPort",
  "updateDeviceSwitchPort",
  "getDeviceSwitchRoutingInterfaces",
  "createDeviceSwitchRoutingInterface",
  "getDeviceSwitchRoutingInterface",
  "updateDeviceSwitchRoutingInterface",
  "deleteDeviceSwitchRoutingInterface",
  "getDeviceSwitchRoutingInterfaceDhcp",
  "updateDeviceSwitchRoutingInterfaceDhcp",
  "getDeviceSwitchRoutingStaticRoutes",
  "createDeviceSwitchRoutingStaticRoute",
  "getDeviceSwitchRoutingStaticRoute",
  "updateDeviceSwitchRoutingStaticRoute",
  "deleteDeviceSwitchRoutingStaticRoute",
  "getDeviceSwitchWarmSpare",
  "updateDeviceSwitchWarmSpare",
  "getNetworkSwitchAccessControlLists",
  "updateNetworkSwitchAccessControlLists",
  "getNetworkSwitchAccessPolicies",
  "createNetworkSwitchAccessPolicy",
  "getNetworkSwitchAccessPolicy",
  "updateNetworkSwitchAccessPolicy",
  "deleteNetworkSwitchAccessPolicy",
  "getNetworkSwitchAlternateManagementInterface",
  "updateNetworkSwitchAlternateManagementInterface",
  "getNetworkSwitchDhcpV4ServersSeen",
  "getNetworkSwitchDhcpServerPolicy",
  "updateNetworkSwitchDhcpServerPolicy",
  "getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers",
  "createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer",
  "updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer",
  "deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer",
  "getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice",
  "getNetworkSwitchDscpToCosMappings",
  "updateNetworkSwitchDscpToCosMappings",
  "getNetworkSwitchLinkAggregations",
  "createNetworkSwitchLinkAggregation",
  "updateNetworkSwitchLinkAggregation",
  "deleteNetworkSwitchLinkAggregation",
  "getNetworkSwitchMtu",
  "updateNetworkSwitchMtu",
  "getNetworkSwitchPortSchedules",
  "createNetworkSwitchPortSchedule",
  "deleteNetworkSwitchPortSchedule",
  "updateNetworkSwitchPortSchedule",
  "getNetworkSwitchPortsProfiles",
  "createNetworkSwitchPortsProfile",
  "updateNetworkSwitchPortsProfile",
  "deleteNetworkSwitchPortsProfile",
  "getNetworkSwitchQosRules",
  "createNetworkSwitchQosRule",
  "getNetworkSwitchQosRulesOrder",
  "updateNetworkSwitchQosRulesOrder",
  "getNetworkSwitchQosRule",
  "deleteNetworkSwitchQosRule",
  "updateNetworkSwitchQosRule",
  "getNetworkSwitchRoutingMulticast",
  "updateNetworkSwitchRoutingMulticast",
  "getNetworkSwitchRoutingMulticastRendezvousPoints",
  "createNetworkSwitchRoutingMulticastRendezvousPoint",
  "getNetworkSwitchRoutingMulticastRendezvousPoint",
  "deleteNetworkSwitchRoutingMulticastRendezvousPoint",
  "updateNetworkSwitchRoutingMulticastRendezvousPoint",
  "getNetworkSwitchRoutingOspf",
  "updateNetworkSwitchRoutingOspf",
  "getNetworkSwitchSettings",
  "updateNetworkSwitchSettings",
  "getNetworkSwitchStacks",
  "createNetworkSwitchStack",
  "getNetworkSwitchStack",
  "deleteNetworkSwitchStack",
  "addNetworkSwitchStack",
  "updateNetworkSwitchStackPortsMirror",
  "removeNetworkSwitchStack",
  "getNetworkSwitchStackRoutingInterfaces",
  "createNetworkSwitchStackRoutingInterface",
  "getNetworkSwitchStackRoutingInterface",
  "updateNetworkSwitchStackRoutingInterface",
  "deleteNetworkSwitchStackRoutingInterface",
  "getNetworkSwitchStackRoutingInterfaceDhcp",
  "updateNetworkSwitchStackRoutingInterfaceDhcp",
  "getNetworkSwitchStackRoutingStaticRoutes",
  "createNetworkSwitchStackRoutingStaticRoute",
  "getNetworkSwitchStackRoutingStaticRoute",
  "updateNetworkSwitchStackRoutingStaticRoute",
  "deleteNetworkSwitchStackRoutingStaticRoute",
  "getNetworkSwitchStormControl",
  "updateNetworkSwitchStormControl",
  "getNetworkSwitchStp",
  "updateNetworkSwitchStp",
  "getOrganizationConfigTemplatesSwitchProfilesPortsMirrorsBySwitch",
  "getOrganizationConfigTemplateSwitchProfiles",
  "getOrganizationConfigTemplateSwitchProfilePorts",
  "updateOrganizationConfigTemplateSwitchProfilePortsMirror",
  "getOrganizationConfigTemplateSwitchProfilePort",
  "updateOrganizationConfigTemplateSwitchProfilePort",
  "getOrganizationSummarySwitchPowerHistory",
  "cloneOrganizationSwitchDevices",
  "getOrganizationSwitchDevicesSystemQueuesHistoryBySwitchByInterva",
  "getOrganizationSwitchPortsBySwitch",
  "getOrganizationSwitchPortsClientsOverviewByDevice",
  "getOrganizationSwitchPortsMirrorsBySwitch",
  "getOrganizationSwitchPortsOverview",
  "getOrganizationSwitchPortsProfiles",
  "createOrganizationSwitchPortsProfile",
  "getOrganizationSwitchPortsProfilesAutomations",
  "createOrganizationSwitchPortsProfilesAutomation",
  "updateOrganizationSwitchPortsProfilesAutomation",
  "deleteOrganizationSwitchPortsProfilesAutomation",
  "getOrganizationSwitchPortsProfilesNetworksAssignments",
  "createOrganizationSwitchPortsProfilesNetworksAssignment",
  "batchOrganizationSwitchPortsProfilesNetworksAssignmentsCreate",
  "bulkOrganizationSwitchPortsProfilesNetworksAssignmentsDelete",
  "deleteOrganizationSwitchPortsProfilesNetworksAssignment",
  "getOrganizationSwitchPortsProfilesOverviewByProfile",
  "getOrganizationSwitchPortsProfile",
  "updateOrganizationSwitchPortsProfile",
  "deleteOrganizationSwitchPortsProfile",
  "getOrganizationSwitchPortsStatusesBySwitch",
  "getOrganizationSwitchPortsTopologyDiscoveryByDevice",
  "getOrganizationSwitchPortsTransceiversReadingsHistoryBySwitch",
  "getOrganizationSwitchPortsUsageHistoryByDeviceByInterval",
  "getOrganizationSwitchStacksPortsMirrorsByStack"
];
