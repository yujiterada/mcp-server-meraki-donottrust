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

export async function _appliance(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceApplianceDhcpSubnets": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/appliance/dhcp/subnets`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceAppliancePerformance": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/appliance/performance`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceAppliancePrefixesDelegated": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/appliance/prefixes/delegated`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceAppliancePrefixesDelegatedVlanAssignments": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/appliance/prefixes/delegated/vlanAssignments`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceApplianceRadioSettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/appliance/radio/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceApplianceRadioSettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/appliance/radio/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/appliance/radio/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceApplianceUplinksSettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/devices/${params.arguments["path-serial"]}/appliance/uplinks/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceApplianceUplinksSettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/devices/${params.arguments["path-serial"]}/appliance/uplinks/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/devices/${params.arguments["path-serial"]}/appliance/uplinks/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceApplianceVmxAuthenticationToken": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/devices/${params.arguments["path-serial"]}/appliance/vmx/authenticationToken`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/devices/${params.arguments["path-serial"]}/appliance/vmx/authenticationToken`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceClientSecurityEvents": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/clients/{clientId}/security/events`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceConnectivityMonitoringDestinations": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/connectivityMonitoringDestinations`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceConnectivityMonitoringDestinations": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/connectivityMonitoringDestinations`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/connectivityMonitoringDestinations`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceContentFiltering": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/contentFiltering`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceContentFiltering": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/contentFiltering`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/contentFiltering`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceContentFilteringCategories": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/contentFiltering/categories`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallCellularFirewallRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/cellularFirewallRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallCellularFirewallRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/cellularFirewallRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/cellularFirewallRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallFirewalledServices": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/firewalledServices`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallFirewalledService": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/firewalledServices/{service}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallFirewalledService": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/firewalledServices/{service}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/firewalledServices/{service}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallInboundCellularFirewallRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/inboundCellularFirewallRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallInboundCellularFirewallRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/inboundCellularFirewallRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/inboundCellularFirewallRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallInboundFirewallRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/inboundFirewallRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallInboundFirewallRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/inboundFirewallRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/inboundFirewallRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallL3FirewallRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/l3FirewallRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallL3FirewallRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/l3FirewallRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/l3FirewallRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallL7FirewallRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/l7FirewallRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallL7FirewallRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/l7FirewallRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/l7FirewallRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallL7FirewallRulesApplicationCategories": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/l7FirewallRules/applicationCategories`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallMulticastForwarding": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/multicastForwarding`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/multicastForwarding`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallOneToManyNatRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/oneToManyNatRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallOneToManyNatRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/oneToManyNatRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/oneToManyNatRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallOneToOneNatRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/oneToOneNatRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallOneToOneNatRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/oneToOneNatRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/oneToOneNatRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallPortForwardingRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/portForwardingRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallPortForwardingRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/portForwardingRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/portForwardingRules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallSettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallSettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/firewall/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkAppliancePorts": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/ports`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkAppliancePort": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/ports/{portId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkAppliancePort": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/ports/{portId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/ports/{portId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkAppliancePrefixesDelegatedStatics": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/prefixes/delegated/statics`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkAppliancePrefixesDelegatedStatic": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/prefixes/delegated/statics`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/prefixes/delegated/statics`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkAppliancePrefixesDelegatedStatic": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkAppliancePrefixesDelegatedStatic": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkAppliancePrefixesDelegatedStatic": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceRfProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/rfProfiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkApplianceRfProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/rfProfiles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/rfProfiles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceRfProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/rfProfiles/{rfProfileId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/rfProfiles/{rfProfileId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkApplianceRfProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/rfProfiles/{rfProfileId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/rfProfiles/{rfProfileId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceRfProfile": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/rfProfiles/{rfProfileId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSdwanInternetPolicies": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/sdwan/internetPolicies`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/sdwan/internetPolicies`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSecurityEvents": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/security/events`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSecurityIntrusion": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/security/intrusion`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSecurityIntrusion": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/security/intrusion`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/security/intrusion`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSecurityMalware": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/security/malware`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSecurityMalware": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/security/malware`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/security/malware`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSingleLan": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/singleLan`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSingleLan": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/singleLan`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/singleLan`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSsids": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/ssids`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSsid": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/ssids/{number}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSsid": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/ssids/{number}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/ssids/{number}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceStaticRoutes": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/staticRoutes`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkApplianceStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/staticRoutes`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/staticRoutes`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceStaticRoute": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/staticRoutes/{staticRouteId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/staticRoutes/{staticRouteId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/staticRoutes/{staticRouteId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkApplianceStaticRoute": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/staticRoutes/{staticRouteId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/staticRoutes/{staticRouteId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceTrafficShaping": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShaping": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceTrafficShapingCustomPerformanceClasses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/customPerformanceClasses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkApplianceTrafficShapingCustomPerformanceClass": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/customPerformanceClasses`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/customPerformanceClasses`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceTrafficShapingCustomPerformanceClass": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShapingCustomPerformanceClass": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkApplianceTrafficShapingCustomPerformanceClass": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShapingRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/rules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/rules`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceTrafficShapingRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/rules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceTrafficShapingUplinkBandwidth": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/uplinkBandwidth`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShapingUplinkBandwidth": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/uplinkBandwidth`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/uplinkBandwidth`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceTrafficShapingUplinkSelection": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/uplinkSelection`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShapingUplinkSelection": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/uplinkSelection`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/uplinkSelection`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShapingVpnExclusions": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/vpnExclusions`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/trafficShaping/vpnExclusions`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "connectNetworkApplianceUmbrellaAccount": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/account/connect`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/account/connect`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "disconnectNetworkApplianceUmbrellaAccount": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/account/disconnect`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/account/disconnect`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "disableNetworkApplianceUmbrellaProtection": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/disableProtection`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/disableProtection`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "enableNetworkApplianceUmbrellaProtection": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/enableProtection`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/enableProtection`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "excludeNetworkApplianceUmbrellaDomains": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/excludeDomains`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/excludeDomains`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "policiesNetworkApplianceUmbrella": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/policies`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/umbrella/policies`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceUplinksUsageHistory": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/uplinks/usageHistory`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceVlans": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/vlans`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkApplianceVlan": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/vlans`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/vlans`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceVlansSettings": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/vlans/settings`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceVlansSettings": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/vlans/settings`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/vlans/settings`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceVlan": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/vlans/{vlanId}`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceVlan": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/vlans/{vlanId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/vlans/{vlanId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteNetworkApplianceVlan": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/vlans/{vlanId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/networks/${params.arguments["path-networkId"]}/appliance/vlans/{vlanId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceVpnBgp": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/vpn/bgp`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceVpnBgp": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/vpn/bgp`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/vpn/bgp`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceVpnSiteToSiteVpn": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/vpn/siteToSiteVpn`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceVpnSiteToSiteVpn": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/vpn/siteToSiteVpn`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/vpn/siteToSiteVpn`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceWarmSpare": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/networks/${params.arguments["path-networkId"]}/appliance/warmSpare`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceWarmSpare": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/warmSpare`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/networks/${params.arguments["path-networkId"]}/appliance/warmSpare`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "swapNetworkApplianceWarmSpare": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/warmSpare/swap`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/networks/${params.arguments["path-networkId"]}/appliance/warmSpare/swap`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceDnsLocalProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsLocalProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceDnsLocalProfilesAssignments": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/assignments`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/assignments/bulkCreate`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/assignments/bulkCreate`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsLocalProfilesAssignmentsBulkDelete": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/assignments/bulkDelete`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/assignments/bulkDelete`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceDnsLocalProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/{profileId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/{profileId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationApplianceDnsLocalProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/{profileId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/profiles/{profileId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceDnsLocalRecords": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/records`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsLocalRecord": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/records`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/records`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceDnsLocalRecord": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/records/{recordId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/records/{recordId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationApplianceDnsLocalRecord": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/records/{recordId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/local/records/{recordId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceDnsSplitProfiles": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsSplitProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceDnsSplitProfilesAssignments": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/assignments`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsSplitProfilesAssignmentsBulkCreate": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/assignments/bulkCreate`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/assignments/bulkCreate`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsSplitProfilesAssignmentsBulkDelete": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/assignments/bulkDelete`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.post(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/assignments/bulkDelete`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceDnsSplitProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/{profileId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/{profileId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "deleteOrganizationApplianceDnsSplitProfile": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/{profileId}`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.delete(`/organizations/${params.arguments["path-organizationId"]}/appliance/dns/split/profiles/{profileId}`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceFirewallMulticastForwardingByNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/firewall/multicastForwarding/byNetwork`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceSdwanInternetPolicies": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/sdwan/internetPolicies`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceSecurityEvents": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/security/events`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceSecurityIntrusion": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/security/intrusion`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceSecurityIntrusion": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/security/intrusion`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/security/intrusion`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceTrafficShapingVpnExclusionsByNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/trafficShaping/vpnExclusions/byNetwork`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceUplinkStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/uplink/statuses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceUplinksStatusesOverview": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/uplinks/statuses/overview`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceUplinksUsageByNetwork": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/uplinks/usage/byNetwork`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVlans": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/vlans`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVpnStats": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/vpn/stats`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVpnStatuses": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/vpn/statuses`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVpnThirdPartyVPNPeers": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/vpn/thirdPartyVPNPeers`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceVpnThirdPartyVPNPeers": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/vpn/thirdPartyVPNPeers`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/vpn/thirdPartyVPNPeers`, { params: queryParams });
      }
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVpnVpnFirewallRules": {
      const queryParams = transformQueryParams(params.arguments);
      response = await client.get(`/organizations/${params.arguments["path-organizationId"]}/appliance/vpn/vpnFirewallRules`, { params: queryParams });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceVpnVpnFirewallRules": {
      const hasBody = hasBodyPrefixedKeys(params.arguments);
      const queryParams = transformQueryParams(params.arguments);
      if (hasBody) {
        const transformedBody = transformRequestBody(params.arguments);
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/vpn/vpnFirewallRules`, { params: queryParams, data: transformedBody });
      } else {
        response = await client.put(`/organizations/${params.arguments["path-organizationId"]}/appliance/vpn/vpnFirewallRules`, { params: queryParams });
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

export const applianceEndpoints = [
  "getDeviceApplianceDhcpSubnets","getDeviceAppliancePerformance","getDeviceAppliancePrefixesDelegated","getDeviceAppliancePrefixesDelegatedVlanAssignments","getDeviceApplianceRadioSettings","updateDeviceApplianceRadioSettings","getDeviceApplianceUplinksSettings","updateDeviceApplianceUplinksSettings","createDeviceApplianceVmxAuthenticationToken","getNetworkApplianceClientSecurityEvents","getNetworkApplianceConnectivityMonitoringDestinations","updateNetworkApplianceConnectivityMonitoringDestinations","getNetworkApplianceContentFiltering","updateNetworkApplianceContentFiltering","getNetworkApplianceContentFilteringCategories","getNetworkApplianceFirewallCellularFirewallRules","updateNetworkApplianceFirewallCellularFirewallRules","getNetworkApplianceFirewallFirewalledServices","getNetworkApplianceFirewallFirewalledService","updateNetworkApplianceFirewallFirewalledService","getNetworkApplianceFirewallInboundCellularFirewallRules","updateNetworkApplianceFirewallInboundCellularFirewallRules","getNetworkApplianceFirewallInboundFirewallRules","updateNetworkApplianceFirewallInboundFirewallRules","getNetworkApplianceFirewallL3FirewallRules","updateNetworkApplianceFirewallL3FirewallRules","getNetworkApplianceFirewallL7FirewallRules","updateNetworkApplianceFirewallL7FirewallRules","getNetworkApplianceFirewallL7FirewallRulesApplicationCategories","updateNetworkApplianceFirewallMulticastForwarding","getNetworkApplianceFirewallOneToManyNatRules","updateNetworkApplianceFirewallOneToManyNatRules","getNetworkApplianceFirewallOneToOneNatRules","updateNetworkApplianceFirewallOneToOneNatRules","getNetworkApplianceFirewallPortForwardingRules","updateNetworkApplianceFirewallPortForwardingRules","getNetworkApplianceFirewallSettings","updateNetworkApplianceFirewallSettings","getNetworkAppliancePorts","getNetworkAppliancePort","updateNetworkAppliancePort","getNetworkAppliancePrefixesDelegatedStatics","createNetworkAppliancePrefixesDelegatedStatic","getNetworkAppliancePrefixesDelegatedStatic","updateNetworkAppliancePrefixesDelegatedStatic","deleteNetworkAppliancePrefixesDelegatedStatic","getNetworkApplianceRfProfiles","createNetworkApplianceRfProfile","updateNetworkApplianceRfProfile","deleteNetworkApplianceRfProfile","getNetworkApplianceRfProfile","updateNetworkApplianceSdwanInternetPolicies","getNetworkApplianceSecurityEvents","getNetworkApplianceSecurityIntrusion","updateNetworkApplianceSecurityIntrusion","getNetworkApplianceSecurityMalware","updateNetworkApplianceSecurityMalware","getNetworkApplianceSettings","updateNetworkApplianceSettings","getNetworkApplianceSingleLan","updateNetworkApplianceSingleLan","getNetworkApplianceSsids","getNetworkApplianceSsid","updateNetworkApplianceSsid","getNetworkApplianceStaticRoutes","createNetworkApplianceStaticRoute","getNetworkApplianceStaticRoute","updateNetworkApplianceStaticRoute","deleteNetworkApplianceStaticRoute","getNetworkApplianceTrafficShaping","updateNetworkApplianceTrafficShaping","getNetworkApplianceTrafficShapingCustomPerformanceClasses","createNetworkApplianceTrafficShapingCustomPerformanceClass","getNetworkApplianceTrafficShapingCustomPerformanceClass","updateNetworkApplianceTrafficShapingCustomPerformanceClass","deleteNetworkApplianceTrafficShapingCustomPerformanceClass","updateNetworkApplianceTrafficShapingRules","getNetworkApplianceTrafficShapingRules","getNetworkApplianceTrafficShapingUplinkBandwidth","updateNetworkApplianceTrafficShapingUplinkBandwidth","getNetworkApplianceTrafficShapingUplinkSelection","updateNetworkApplianceTrafficShapingUplinkSelection","updateNetworkApplianceTrafficShapingVpnExclusions","connectNetworkApplianceUmbrellaAccount","disconnectNetworkApplianceUmbrellaAccount","disableNetworkApplianceUmbrellaProtection","enableNetworkApplianceUmbrellaProtection","excludeNetworkApplianceUmbrellaDomains","policiesNetworkApplianceUmbrella","getNetworkApplianceUplinksUsageHistory","getNetworkApplianceVlans","createNetworkApplianceVlan","getNetworkApplianceVlansSettings","updateNetworkApplianceVlansSettings","getNetworkApplianceVlan","updateNetworkApplianceVlan","deleteNetworkApplianceVlan","getNetworkApplianceVpnBgp","updateNetworkApplianceVpnBgp","getNetworkApplianceVpnSiteToSiteVpn","updateNetworkApplianceVpnSiteToSiteVpn","getNetworkApplianceWarmSpare","updateNetworkApplianceWarmSpare","swapNetworkApplianceWarmSpare","getOrganizationApplianceDnsLocalProfiles","createOrganizationApplianceDnsLocalProfile","getOrganizationApplianceDnsLocalProfilesAssignments","bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreate","createOrganizationApplianceDnsLocalProfilesAssignmentsBulkDelete","updateOrganizationApplianceDnsLocalProfile","deleteOrganizationApplianceDnsLocalProfile","getOrganizationApplianceDnsLocalRecords","createOrganizationApplianceDnsLocalRecord","updateOrganizationApplianceDnsLocalRecord","deleteOrganizationApplianceDnsLocalRecord","getOrganizationApplianceDnsSplitProfiles","createOrganizationApplianceDnsSplitProfile","getOrganizationApplianceDnsSplitProfilesAssignments","createOrganizationApplianceDnsSplitProfilesAssignmentsBulkCreate","createOrganizationApplianceDnsSplitProfilesAssignmentsBulkDelete","updateOrganizationApplianceDnsSplitProfile","deleteOrganizationApplianceDnsSplitProfile","getOrganizationApplianceFirewallMulticastForwardingByNetwork","getOrganizationApplianceSdwanInternetPolicies","getOrganizationApplianceSecurityEvents","getOrganizationApplianceSecurityIntrusion","updateOrganizationApplianceSecurityIntrusion","getOrganizationApplianceTrafficShapingVpnExclusionsByNetwork","getOrganizationApplianceUplinkStatuses","getOrganizationApplianceUplinksStatusesOverview","getOrganizationApplianceUplinksUsageByNetwork","getOrganizationApplianceVlans","getOrganizationApplianceVpnStats","getOrganizationApplianceVpnStatuses","getOrganizationApplianceVpnThirdPartyVPNPeers","updateOrganizationApplianceVpnThirdPartyVPNPeers","getOrganizationApplianceVpnVpnFirewallRules","updateOrganizationApplianceVpnVpnFirewallRules"
];
