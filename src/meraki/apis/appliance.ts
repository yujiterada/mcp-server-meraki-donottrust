export async function _appliance(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDeviceApplianceDhcpSubnets": {
      let path = `/devices/${params.arguments.path.serial}/appliance/dhcp/subnets`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceAppliancePerformance": {
      let path = `/devices/${params.arguments.path.serial}/appliance/performance`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceAppliancePrefixesDelegated": {
      let path = `/devices/${params.arguments.path.serial}/appliance/prefixes/delegated`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceAppliancePrefixesDelegatedVlanAssignments": {
      let path = `/devices/${params.arguments.path.serial}/appliance/prefixes/delegated/vlanAssignments`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceApplianceRadioSettings": {
      let path = `/devices/${params.arguments.path.serial}/appliance/radio/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceApplianceRadioSettings": {
      let path = `/devices/${params.arguments.path.serial}/appliance/radio/settings`;
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
    case "getDeviceApplianceUplinksSettings": {
      let path = `/devices/${params.arguments.path.serial}/appliance/uplinks/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceApplianceUplinksSettings": {
      let path = `/devices/${params.arguments.path.serial}/appliance/uplinks/settings`;
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
    case "createDeviceApplianceVmxAuthenticationToken": {
      let path = `/devices/${params.arguments.path.serial}/appliance/vmx/authenticationToken`;
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
    case "getNetworkApplianceClientSecurityEvents": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/clients/{clientId}/security/events`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceConnectivityMonitoringDestinations": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/connectivityMonitoringDestinations`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceConnectivityMonitoringDestinations": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/connectivityMonitoringDestinations`;
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
    case "getNetworkApplianceContentFiltering": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/contentFiltering`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceContentFiltering": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/contentFiltering`;
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
    case "getNetworkApplianceContentFilteringCategories": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/contentFiltering/categories`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallCellularFirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/cellularFirewallRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallCellularFirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/cellularFirewallRules`;
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
    case "getNetworkApplianceFirewallFirewalledServices": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/firewalledServices`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceFirewallFirewalledService": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/firewalledServices/{service}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallFirewalledService": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/firewalledServices/{service}`;
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
    case "getNetworkApplianceFirewallInboundCellularFirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/inboundCellularFirewallRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallInboundCellularFirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/inboundCellularFirewallRules`;
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
    case "getNetworkApplianceFirewallInboundFirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/inboundFirewallRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallInboundFirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/inboundFirewallRules`;
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
    case "getNetworkApplianceFirewallL3FirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/l3FirewallRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallL3FirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/l3FirewallRules`;
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
    case "getNetworkApplianceFirewallL7FirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/l7FirewallRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallL7FirewallRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/l7FirewallRules`;
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
    case "getNetworkApplianceFirewallL7FirewallRulesApplicationCategories": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/l7FirewallRules/applicationCategories`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallMulticastForwarding": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/multicastForwarding`;
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
    case "getNetworkApplianceFirewallOneToManyNatRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/oneToManyNatRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallOneToManyNatRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/oneToManyNatRules`;
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
    case "getNetworkApplianceFirewallOneToOneNatRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/oneToOneNatRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallOneToOneNatRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/oneToOneNatRules`;
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
    case "getNetworkApplianceFirewallPortForwardingRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/portForwardingRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallPortForwardingRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/portForwardingRules`;
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
    case "getNetworkApplianceFirewallSettings": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceFirewallSettings": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/firewall/settings`;
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
    case "getNetworkAppliancePorts": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/ports`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkAppliancePort": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/ports/{portId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkAppliancePort": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/ports/{portId}`;
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
    case "getNetworkAppliancePrefixesDelegatedStatics": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/prefixes/delegated/statics`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkAppliancePrefixesDelegatedStatic": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/prefixes/delegated/statics`;
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
    case "getNetworkAppliancePrefixesDelegatedStatic": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkAppliancePrefixesDelegatedStatic": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`;
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
    case "deleteNetworkAppliancePrefixesDelegatedStatic": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`;
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
    case "getNetworkApplianceRfProfiles": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/rfProfiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkApplianceRfProfile": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/rfProfiles`;
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
    case "updateNetworkApplianceRfProfile": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/rfProfiles/{rfProfileId}`;
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
    case "deleteNetworkApplianceRfProfile": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/rfProfiles/{rfProfileId}`;
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
    case "getNetworkApplianceRfProfile": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/rfProfiles/{rfProfileId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSdwanInternetPolicies": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/sdwan/internetPolicies`;
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
    case "getNetworkApplianceSecurityEvents": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/security/events`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSecurityIntrusion": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/security/intrusion`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSecurityIntrusion": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/security/intrusion`;
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
    case "getNetworkApplianceSecurityMalware": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/security/malware`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSecurityMalware": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/security/malware`;
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
    case "getNetworkApplianceSettings": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSettings": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/settings`;
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
    case "getNetworkApplianceSingleLan": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/singleLan`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSingleLan": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/singleLan`;
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
    case "getNetworkApplianceSsids": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/ssids`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceSsid": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/ssids/{number}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceSsid": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/ssids/{number}`;
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
    case "getNetworkApplianceStaticRoutes": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/staticRoutes`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkApplianceStaticRoute": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/staticRoutes`;
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
    case "getNetworkApplianceStaticRoute": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/staticRoutes/{staticRouteId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceStaticRoute": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/staticRoutes/{staticRouteId}`;
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
    case "deleteNetworkApplianceStaticRoute": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/staticRoutes/{staticRouteId}`;
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
    case "getNetworkApplianceTrafficShaping": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShaping": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping`;
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
    case "getNetworkApplianceTrafficShapingCustomPerformanceClasses": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/customPerformanceClasses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkApplianceTrafficShapingCustomPerformanceClass": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/customPerformanceClasses`;
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
    case "getNetworkApplianceTrafficShapingCustomPerformanceClass": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShapingCustomPerformanceClass": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}`;
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
    case "deleteNetworkApplianceTrafficShapingCustomPerformanceClass": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}`;
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
    case "updateNetworkApplianceTrafficShapingRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/rules`;
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
    case "getNetworkApplianceTrafficShapingRules": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/rules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceTrafficShapingUplinkBandwidth": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/uplinkBandwidth`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShapingUplinkBandwidth": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/uplinkBandwidth`;
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
    case "getNetworkApplianceTrafficShapingUplinkSelection": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/uplinkSelection`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceTrafficShapingUplinkSelection": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/uplinkSelection`;
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
    case "updateNetworkApplianceTrafficShapingVpnExclusions": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/trafficShaping/vpnExclusions`;
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
    case "connectNetworkApplianceUmbrellaAccount": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/umbrella/account/connect`;
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
    case "disconnectNetworkApplianceUmbrellaAccount": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/umbrella/account/disconnect`;
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
    case "disableNetworkApplianceUmbrellaProtection": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/umbrella/disableProtection`;
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
    case "enableNetworkApplianceUmbrellaProtection": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/umbrella/enableProtection`;
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
    case "excludeNetworkApplianceUmbrellaDomains": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/umbrella/excludeDomains`;
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
    case "policiesNetworkApplianceUmbrella": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/umbrella/policies`;
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
    case "getNetworkApplianceUplinksUsageHistory": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/uplinks/usageHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getNetworkApplianceVlans": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vlans`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createNetworkApplianceVlan": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vlans`;
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
    case "getNetworkApplianceVlansSettings": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vlans/settings`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceVlansSettings": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vlans/settings`;
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
    case "getNetworkApplianceVlan": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vlans/{vlanId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceVlan": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vlans/{vlanId}`;
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
    case "deleteNetworkApplianceVlan": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vlans/{vlanId}`;
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
    case "getNetworkApplianceVpnBgp": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vpn/bgp`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceVpnBgp": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vpn/bgp`;
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
    case "getNetworkApplianceVpnSiteToSiteVpn": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vpn/siteToSiteVpn`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceVpnSiteToSiteVpn": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/vpn/siteToSiteVpn`;
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
    case "getNetworkApplianceWarmSpare": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/warmSpare`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateNetworkApplianceWarmSpare": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/warmSpare`;
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
    case "swapNetworkApplianceWarmSpare": {
      let path = `/networks/${params.arguments.path.networkId}/appliance/warmSpare/swap`;
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
    case "getOrganizationApplianceDnsLocalProfiles": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsLocalProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/profiles`;
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
    case "getOrganizationApplianceDnsLocalProfilesAssignments": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/profiles/assignments`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreate": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/profiles/assignments/bulkCreate`;
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
    case "createOrganizationApplianceDnsLocalProfilesAssignmentsBulkDelete": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/profiles/assignments/bulkDelete`;
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
    case "updateOrganizationApplianceDnsLocalProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/profiles/{profileId}`;
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
    case "deleteOrganizationApplianceDnsLocalProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/profiles/{profileId}`;
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
    case "getOrganizationApplianceDnsLocalRecords": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/records`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsLocalRecord": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/records`;
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
    case "updateOrganizationApplianceDnsLocalRecord": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/records/{recordId}`;
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
    case "deleteOrganizationApplianceDnsLocalRecord": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/local/records/{recordId}`;
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
    case "getOrganizationApplianceDnsSplitProfiles": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/split/profiles`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsSplitProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/split/profiles`;
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
    case "getOrganizationApplianceDnsSplitProfilesAssignments": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/split/profiles/assignments`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createOrganizationApplianceDnsSplitProfilesAssignmentsBulkCreate": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/split/profiles/assignments/bulkCreate`;
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
    case "createOrganizationApplianceDnsSplitProfilesAssignmentsBulkDelete": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/split/profiles/assignments/bulkDelete`;
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
    case "updateOrganizationApplianceDnsSplitProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/split/profiles/{profileId}`;
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
    case "deleteOrganizationApplianceDnsSplitProfile": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/dns/split/profiles/{profileId}`;
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
    case "getOrganizationApplianceFirewallMulticastForwardingByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/firewall/multicastForwarding/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceSdwanInternetPolicies": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/sdwan/internetPolicies`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceSecurityEvents": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/security/events`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceSecurityIntrusion": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/security/intrusion`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceSecurityIntrusion": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/security/intrusion`;
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
    case "getOrganizationApplianceTrafficShapingVpnExclusionsByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/trafficShaping/vpnExclusions/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceUplinkStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/uplink/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceUplinksStatusesOverview": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/uplinks/statuses/overview`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceUplinksUsageByNetwork": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/uplinks/usage/byNetwork`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVlans": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/vlans`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVpnStats": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/vpn/stats`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVpnStatuses": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/vpn/statuses`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getOrganizationApplianceVpnThirdPartyVPNPeers": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/vpn/thirdPartyVPNPeers`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceVpnThirdPartyVPNPeers": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/vpn/thirdPartyVPNPeers`;
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
    case "getOrganizationApplianceVpnVpnFirewallRules": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/vpn/vpnFirewallRules`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateOrganizationApplianceVpnVpnFirewallRules": {
      let path = `/organizations/${params.arguments.path.organizationId}/appliance/vpn/vpnFirewallRules`;
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

export const applianceEndpoints = [
  "getDeviceApplianceDhcpSubnets",
  "getDeviceAppliancePerformance",
  "getDeviceAppliancePrefixesDelegated",
  "getDeviceAppliancePrefixesDelegatedVlanAssignments",
  "getDeviceApplianceRadioSettings",
  "updateDeviceApplianceRadioSettings",
  "getDeviceApplianceUplinksSettings",
  "updateDeviceApplianceUplinksSettings",
  "createDeviceApplianceVmxAuthenticationToken",
  "getNetworkApplianceClientSecurityEvents",
  "getNetworkApplianceConnectivityMonitoringDestinations",
  "updateNetworkApplianceConnectivityMonitoringDestinations",
  "getNetworkApplianceContentFiltering",
  "updateNetworkApplianceContentFiltering",
  "getNetworkApplianceContentFilteringCategories",
  "getNetworkApplianceFirewallCellularFirewallRules",
  "updateNetworkApplianceFirewallCellularFirewallRules",
  "getNetworkApplianceFirewallFirewalledServices",
  "getNetworkApplianceFirewallFirewalledService",
  "updateNetworkApplianceFirewallFirewalledService",
  "getNetworkApplianceFirewallInboundCellularFirewallRules",
  "updateNetworkApplianceFirewallInboundCellularFirewallRules",
  "getNetworkApplianceFirewallInboundFirewallRules",
  "updateNetworkApplianceFirewallInboundFirewallRules",
  "getNetworkApplianceFirewallL3FirewallRules",
  "updateNetworkApplianceFirewallL3FirewallRules",
  "getNetworkApplianceFirewallL7FirewallRules",
  "updateNetworkApplianceFirewallL7FirewallRules",
  "getNetworkApplianceFirewallL7FirewallRulesApplicationCategories",
  "updateNetworkApplianceFirewallMulticastForwarding",
  "getNetworkApplianceFirewallOneToManyNatRules",
  "updateNetworkApplianceFirewallOneToManyNatRules",
  "getNetworkApplianceFirewallOneToOneNatRules",
  "updateNetworkApplianceFirewallOneToOneNatRules",
  "getNetworkApplianceFirewallPortForwardingRules",
  "updateNetworkApplianceFirewallPortForwardingRules",
  "getNetworkApplianceFirewallSettings",
  "updateNetworkApplianceFirewallSettings",
  "getNetworkAppliancePorts",
  "getNetworkAppliancePort",
  "updateNetworkAppliancePort",
  "getNetworkAppliancePrefixesDelegatedStatics",
  "createNetworkAppliancePrefixesDelegatedStatic",
  "getNetworkAppliancePrefixesDelegatedStatic",
  "updateNetworkAppliancePrefixesDelegatedStatic",
  "deleteNetworkAppliancePrefixesDelegatedStatic",
  "getNetworkApplianceRfProfiles",
  "createNetworkApplianceRfProfile",
  "updateNetworkApplianceRfProfile",
  "deleteNetworkApplianceRfProfile",
  "getNetworkApplianceRfProfile",
  "updateNetworkApplianceSdwanInternetPolicies",
  "getNetworkApplianceSecurityEvents",
  "getNetworkApplianceSecurityIntrusion",
  "updateNetworkApplianceSecurityIntrusion",
  "getNetworkApplianceSecurityMalware",
  "updateNetworkApplianceSecurityMalware",
  "getNetworkApplianceSettings",
  "updateNetworkApplianceSettings",
  "getNetworkApplianceSingleLan",
  "updateNetworkApplianceSingleLan",
  "getNetworkApplianceSsids",
  "getNetworkApplianceSsid",
  "updateNetworkApplianceSsid",
  "getNetworkApplianceStaticRoutes",
  "createNetworkApplianceStaticRoute",
  "getNetworkApplianceStaticRoute",
  "updateNetworkApplianceStaticRoute",
  "deleteNetworkApplianceStaticRoute",
  "getNetworkApplianceTrafficShaping",
  "updateNetworkApplianceTrafficShaping",
  "getNetworkApplianceTrafficShapingCustomPerformanceClasses",
  "createNetworkApplianceTrafficShapingCustomPerformanceClass",
  "getNetworkApplianceTrafficShapingCustomPerformanceClass",
  "updateNetworkApplianceTrafficShapingCustomPerformanceClass",
  "deleteNetworkApplianceTrafficShapingCustomPerformanceClass",
  "updateNetworkApplianceTrafficShapingRules",
  "getNetworkApplianceTrafficShapingRules",
  "getNetworkApplianceTrafficShapingUplinkBandwidth",
  "updateNetworkApplianceTrafficShapingUplinkBandwidth",
  "getNetworkApplianceTrafficShapingUplinkSelection",
  "updateNetworkApplianceTrafficShapingUplinkSelection",
  "updateNetworkApplianceTrafficShapingVpnExclusions",
  "connectNetworkApplianceUmbrellaAccount",
  "disconnectNetworkApplianceUmbrellaAccount",
  "disableNetworkApplianceUmbrellaProtection",
  "enableNetworkApplianceUmbrellaProtection",
  "excludeNetworkApplianceUmbrellaDomains",
  "policiesNetworkApplianceUmbrella",
  "getNetworkApplianceUplinksUsageHistory",
  "getNetworkApplianceVlans",
  "createNetworkApplianceVlan",
  "getNetworkApplianceVlansSettings",
  "updateNetworkApplianceVlansSettings",
  "getNetworkApplianceVlan",
  "updateNetworkApplianceVlan",
  "deleteNetworkApplianceVlan",
  "getNetworkApplianceVpnBgp",
  "updateNetworkApplianceVpnBgp",
  "getNetworkApplianceVpnSiteToSiteVpn",
  "updateNetworkApplianceVpnSiteToSiteVpn",
  "getNetworkApplianceWarmSpare",
  "updateNetworkApplianceWarmSpare",
  "swapNetworkApplianceWarmSpare",
  "getOrganizationApplianceDnsLocalProfiles",
  "createOrganizationApplianceDnsLocalProfile",
  "getOrganizationApplianceDnsLocalProfilesAssignments",
  "bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreate",
  "createOrganizationApplianceDnsLocalProfilesAssignmentsBulkDelete",
  "updateOrganizationApplianceDnsLocalProfile",
  "deleteOrganizationApplianceDnsLocalProfile",
  "getOrganizationApplianceDnsLocalRecords",
  "createOrganizationApplianceDnsLocalRecord",
  "updateOrganizationApplianceDnsLocalRecord",
  "deleteOrganizationApplianceDnsLocalRecord",
  "getOrganizationApplianceDnsSplitProfiles",
  "createOrganizationApplianceDnsSplitProfile",
  "getOrganizationApplianceDnsSplitProfilesAssignments",
  "createOrganizationApplianceDnsSplitProfilesAssignmentsBulkCreate",
  "createOrganizationApplianceDnsSplitProfilesAssignmentsBulkDelete",
  "updateOrganizationApplianceDnsSplitProfile",
  "deleteOrganizationApplianceDnsSplitProfile",
  "getOrganizationApplianceFirewallMulticastForwardingByNetwork",
  "getOrganizationApplianceSdwanInternetPolicies",
  "getOrganizationApplianceSecurityEvents",
  "getOrganizationApplianceSecurityIntrusion",
  "updateOrganizationApplianceSecurityIntrusion",
  "getOrganizationApplianceTrafficShapingVpnExclusionsByNetwork",
  "getOrganizationApplianceUplinkStatuses",
  "getOrganizationApplianceUplinksStatusesOverview",
  "getOrganizationApplianceUplinksUsageByNetwork",
  "getOrganizationApplianceVlans",
  "getOrganizationApplianceVpnStats",
  "getOrganizationApplianceVpnStatuses",
  "getOrganizationApplianceVpnThirdPartyVPNPeers",
  "updateOrganizationApplianceVpnThirdPartyVPNPeers",
  "getOrganizationApplianceVpnVpnFirewallRules",
  "updateOrganizationApplianceVpnVpnFirewallRules"
];
