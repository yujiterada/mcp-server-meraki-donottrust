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

export async function _switch(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceSwitchPorts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/ports`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "cycleDeviceSwitchPorts": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/devices/${params.arguments["path-serial"]}/switch/ports/cycle`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/devices/${params.arguments["path-serial"]}/switch/ports/cycle`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchPortsMirror": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/ports/mirror`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/ports/mirror`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchPortsStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/ports/statuses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchPortsStatusesPackets": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/ports/statuses/packets`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchPort": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/ports/{portId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchPort": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/ports/{portId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/ports/{portId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchRoutingInterfaces": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceSwitchRoutingInterface": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchRoutingInterface": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces/{interfaceId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchRoutingInterface": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces/{interfaceId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces/{interfaceId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteDeviceSwitchRoutingInterface": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces/{interfaceId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces/{interfaceId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchRoutingInterfaceDhcp": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces/{interfaceId}/dhcp`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchRoutingInterfaceDhcp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces/{interfaceId}/dhcp`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/routing/interfaces/{interfaceId}/dhcp`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchRoutingStaticRoutes": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/routing/staticRoutes`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceSwitchRoutingStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/devices/${params.arguments["path-serial"]}/switch/routing/staticRoutes`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/devices/${params.arguments["path-serial"]}/switch/routing/staticRoutes`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchRoutingStaticRoute": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/routing/staticRoutes/{staticRouteId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchRoutingStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/routing/staticRoutes/{staticRouteId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/routing/staticRoutes/{staticRouteId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteDeviceSwitchRoutingStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/devices/${params.arguments["path-serial"]}/switch/routing/staticRoutes/{staticRouteId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/devices/${params.arguments["path-serial"]}/switch/routing/staticRoutes/{staticRouteId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceSwitchWarmSpare": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/switch/warmSpare`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceSwitchWarmSpare": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/warmSpare`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/switch/warmSpare`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchAccessControlLists": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/accessControlLists`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchAccessControlLists": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/accessControlLists`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/accessControlLists`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchAccessPolicies": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/accessPolicies`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchAccessPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/accessPolicies`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/accessPolicies`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchAccessPolicy": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/accessPolicies/{accessPolicyNumber}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchAccessPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/accessPolicies/{accessPolicyNumber}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/accessPolicies/{accessPolicyNumber}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchAccessPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/accessPolicies/{accessPolicyNumber}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/accessPolicies/{accessPolicyNumber}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchAlternateManagementInterface": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/alternateManagementInterface`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchAlternateManagementInterface": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/alternateManagementInterface`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/alternateManagementInterface`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchDhcpV4ServersSeen": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/dhcp/v4/servers/seen`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchDhcpServerPolicy": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchDhcpServerPolicy": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy/arpInspection/trustedServers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy/arpInspection/trustedServers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy/arpInspection/trustedServers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/dhcpServerPolicy/arpInspection/warnings/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchDscpToCosMappings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/dscpToCosMappings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchDscpToCosMappings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/dscpToCosMappings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/dscpToCosMappings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchLinkAggregations": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/linkAggregations`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchLinkAggregation": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/linkAggregations`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/linkAggregations`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchLinkAggregation": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/linkAggregations/{linkAggregationId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/linkAggregations/{linkAggregationId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchLinkAggregation": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/linkAggregations/{linkAggregationId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/linkAggregations/{linkAggregationId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchMtu": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/mtu`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchMtu": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/mtu`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/mtu`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchPortSchedules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/portSchedules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchPortSchedule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/portSchedules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/portSchedules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchPortSchedule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/portSchedules/{portScheduleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/portSchedules/{portScheduleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchPortSchedule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/portSchedules/{portScheduleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/portSchedules/{portScheduleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchPortsProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/ports/profiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchPortsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/ports/profiles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/ports/profiles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchPortsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/ports/profiles/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/ports/profiles/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchPortsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/ports/profiles/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/ports/profiles/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchQosRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/qosRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchQosRule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/qosRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/qosRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchQosRulesOrder": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/qosRules/order`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchQosRulesOrder": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/qosRules/order`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/qosRules/order`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchQosRule": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/qosRules/{qosRuleId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchQosRule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/qosRules/{qosRuleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/qosRules/{qosRuleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchQosRule": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/qosRules/{qosRuleId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/qosRules/{qosRuleId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchRoutingMulticast": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchRoutingMulticast": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchRoutingMulticastRendezvousPoints": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast/rendezvousPoints`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchRoutingMulticastRendezvousPoint": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast/rendezvousPoints`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast/rendezvousPoints`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchRoutingMulticastRendezvousPoint": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchRoutingMulticastRendezvousPoint": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchRoutingMulticastRendezvousPoint": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchRoutingOspf": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/routing/ospf`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchRoutingOspf": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/routing/ospf`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/routing/ospf`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchSettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchSettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStacks": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stacks`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchStack": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStack": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchStack": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "addNetworkSwitchStack": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/add`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/add`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStackPortsMirror": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/ports/mirror`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/ports/mirror`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "removeNetworkSwitchStack": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/remove`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/remove`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStackRoutingInterfaces": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchStackRoutingInterface": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStackRoutingInterface": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStackRoutingInterface": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchStackRoutingInterface": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStackRoutingInterfaceDhcp": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStackRoutingInterfaceDhcp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStackRoutingStaticRoutes": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/staticRoutes`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkSwitchStackRoutingStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/staticRoutes`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/staticRoutes`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStackRoutingStaticRoute": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStackRoutingStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkSwitchStackRoutingStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStormControl": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stormControl`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStormControl": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stormControl`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stormControl`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkSwitchStp": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/switch/stp`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkSwitchStp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stp`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/switch/stp`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplatesSwitchProfilesPortsMirrorsBySwitch": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/switch/profiles/ports/mirrors/bySwitchProfile`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplateSwitchProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}/switch/profiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplateSwitchProfilePorts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationConfigTemplateSwitchProfilePortsMirror": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/mirror`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/mirror`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationConfigTemplateSwitchProfilePort": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationConfigTemplateSwitchProfilePort": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSummarySwitchPowerHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/summary/switch/power/history`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "cloneOrganizationSwitchDevices": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/devices/clone`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/devices/clone`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchDevicesSystemQueuesHistoryBySwitchByInterva": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/devices/system/queues/history/bySwitch/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsBySwitch": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/bySwitch`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsClientsOverviewByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/clients/overview/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsMirrorsBySwitch": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/mirrors/bySwitch`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSwitchPortsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsProfilesAutomations": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/automations`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSwitchPortsProfilesAutomation": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/automations`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/automations`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSwitchPortsProfilesAutomation": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/automations/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/automations/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSwitchPortsProfilesAutomation": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/automations/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/automations/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsProfilesNetworksAssignments": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationSwitchPortsProfilesNetworksAssignment": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "batchOrganizationSwitchPortsProfilesNetworksAssignmentsCreate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments/batchCreate`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments/batchCreate`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bulkOrganizationSwitchPortsProfilesNetworksAssignmentsDelete": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments/bulkDelete`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments/bulkDelete`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSwitchPortsProfilesNetworksAssignment": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments/{assignmentId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/networks/assignments/{assignmentId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsProfilesOverviewByProfile": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/overview/byProfile`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsProfile": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/{id}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationSwitchPortsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationSwitchPortsProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/{id}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/profiles/{id}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsStatusesBySwitch": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/statuses/bySwitch`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsTopologyDiscoveryByDevice": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/topology/discovery/byDevice`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsTransceiversReadingsHistoryBySwitch": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/transceivers/readings/history/bySwitch`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchPortsUsageHistoryByDeviceByInterval": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/ports/usage/history/byDevice/byInterval`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationSwitchStacksPortsMirrorsByStack": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/switch/stacks/ports/mirrors/byStack`, { params: queryParams });
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
  "getDeviceSwitchPorts","cycleDeviceSwitchPorts","updateDeviceSwitchPortsMirror","getDeviceSwitchPortsStatuses","getDeviceSwitchPortsStatusesPackets","getDeviceSwitchPort","updateDeviceSwitchPort","getDeviceSwitchRoutingInterfaces","createDeviceSwitchRoutingInterface","getDeviceSwitchRoutingInterface","updateDeviceSwitchRoutingInterface","deleteDeviceSwitchRoutingInterface","getDeviceSwitchRoutingInterfaceDhcp","updateDeviceSwitchRoutingInterfaceDhcp","getDeviceSwitchRoutingStaticRoutes","createDeviceSwitchRoutingStaticRoute","getDeviceSwitchRoutingStaticRoute","updateDeviceSwitchRoutingStaticRoute","deleteDeviceSwitchRoutingStaticRoute","getDeviceSwitchWarmSpare","updateDeviceSwitchWarmSpare","getNetworkSwitchAccessControlLists","updateNetworkSwitchAccessControlLists","getNetworkSwitchAccessPolicies","createNetworkSwitchAccessPolicy","getNetworkSwitchAccessPolicy","updateNetworkSwitchAccessPolicy","deleteNetworkSwitchAccessPolicy","getNetworkSwitchAlternateManagementInterface","updateNetworkSwitchAlternateManagementInterface","getNetworkSwitchDhcpV4ServersSeen","getNetworkSwitchDhcpServerPolicy","updateNetworkSwitchDhcpServerPolicy","getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers","createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer","updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer","deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer","getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice","getNetworkSwitchDscpToCosMappings","updateNetworkSwitchDscpToCosMappings","getNetworkSwitchLinkAggregations","createNetworkSwitchLinkAggregation","updateNetworkSwitchLinkAggregation","deleteNetworkSwitchLinkAggregation","getNetworkSwitchMtu","updateNetworkSwitchMtu","getNetworkSwitchPortSchedules","createNetworkSwitchPortSchedule","deleteNetworkSwitchPortSchedule","updateNetworkSwitchPortSchedule","getNetworkSwitchPortsProfiles","createNetworkSwitchPortsProfile","updateNetworkSwitchPortsProfile","deleteNetworkSwitchPortsProfile","getNetworkSwitchQosRules","createNetworkSwitchQosRule","getNetworkSwitchQosRulesOrder","updateNetworkSwitchQosRulesOrder","getNetworkSwitchQosRule","deleteNetworkSwitchQosRule","updateNetworkSwitchQosRule","getNetworkSwitchRoutingMulticast","updateNetworkSwitchRoutingMulticast","getNetworkSwitchRoutingMulticastRendezvousPoints","createNetworkSwitchRoutingMulticastRendezvousPoint","getNetworkSwitchRoutingMulticastRendezvousPoint","deleteNetworkSwitchRoutingMulticastRendezvousPoint","updateNetworkSwitchRoutingMulticastRendezvousPoint","getNetworkSwitchRoutingOspf","updateNetworkSwitchRoutingOspf","getNetworkSwitchSettings","updateNetworkSwitchSettings","getNetworkSwitchStacks","createNetworkSwitchStack","getNetworkSwitchStack","deleteNetworkSwitchStack","addNetworkSwitchStack","updateNetworkSwitchStackPortsMirror","removeNetworkSwitchStack","getNetworkSwitchStackRoutingInterfaces","createNetworkSwitchStackRoutingInterface","getNetworkSwitchStackRoutingInterface","updateNetworkSwitchStackRoutingInterface","deleteNetworkSwitchStackRoutingInterface","getNetworkSwitchStackRoutingInterfaceDhcp","updateNetworkSwitchStackRoutingInterfaceDhcp","getNetworkSwitchStackRoutingStaticRoutes","createNetworkSwitchStackRoutingStaticRoute","getNetworkSwitchStackRoutingStaticRoute","updateNetworkSwitchStackRoutingStaticRoute","deleteNetworkSwitchStackRoutingStaticRoute","getNetworkSwitchStormControl","updateNetworkSwitchStormControl","getNetworkSwitchStp","updateNetworkSwitchStp","getOrganizationConfigTemplatesSwitchProfilesPortsMirrorsBySwitch","getOrganizationConfigTemplateSwitchProfiles","getOrganizationConfigTemplateSwitchProfilePorts","updateOrganizationConfigTemplateSwitchProfilePortsMirror","getOrganizationConfigTemplateSwitchProfilePort","updateOrganizationConfigTemplateSwitchProfilePort","getOrganizationSummarySwitchPowerHistory","cloneOrganizationSwitchDevices","getOrganizationSwitchDevicesSystemQueuesHistoryBySwitchByInterva","getOrganizationSwitchPortsBySwitch","getOrganizationSwitchPortsClientsOverviewByDevice","getOrganizationSwitchPortsMirrorsBySwitch","getOrganizationSwitchPortsOverview","getOrganizationSwitchPortsProfiles","createOrganizationSwitchPortsProfile","getOrganizationSwitchPortsProfilesAutomations","createOrganizationSwitchPortsProfilesAutomation","updateOrganizationSwitchPortsProfilesAutomation","deleteOrganizationSwitchPortsProfilesAutomation","getOrganizationSwitchPortsProfilesNetworksAssignments","createOrganizationSwitchPortsProfilesNetworksAssignment","batchOrganizationSwitchPortsProfilesNetworksAssignmentsCreate","bulkOrganizationSwitchPortsProfilesNetworksAssignmentsDelete","deleteOrganizationSwitchPortsProfilesNetworksAssignment","getOrganizationSwitchPortsProfilesOverviewByProfile","getOrganizationSwitchPortsProfile","updateOrganizationSwitchPortsProfile","deleteOrganizationSwitchPortsProfile","getOrganizationSwitchPortsStatusesBySwitch","getOrganizationSwitchPortsTopologyDiscoveryByDevice","getOrganizationSwitchPortsTransceiversReadingsHistoryBySwitch","getOrganizationSwitchPortsUsageHistoryByDeviceByInterval","getOrganizationSwitchStacksPortsMirrorsByStack"
];
