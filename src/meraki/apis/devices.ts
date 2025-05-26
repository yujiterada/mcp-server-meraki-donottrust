export async function _devices(client: any, params: any): Promise<any> {
  let response = {data: ''};
  switch (params.name) {
    case "getDevice": {
      let path = `/devices/${params.arguments.path.serial}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDevice": {
      let path = `/devices/${params.arguments.path.serial}`;
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
    case "blinkDeviceLeds": {
      let path = `/devices/${params.arguments.path.serial}/blinkLeds`;
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
    case "getDeviceCellularSims": {
      let path = `/devices/${params.arguments.path.serial}/cellular/sims`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceCellularSims": {
      let path = `/devices/${params.arguments.path.serial}/cellular/sims`;
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
    case "getDeviceClients": {
      let path = `/devices/${params.arguments.path.serial}/clients`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsAclHitCount": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/aclHitCount`;
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
    case "getDeviceLiveToolsAclHitCount": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/aclHitCount/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsArpTable": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/arpTable`;
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
    case "getDeviceLiveToolsArpTable": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/arpTable/{arpTableId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsCableTest": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/cableTest`;
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
    case "getDeviceLiveToolsCableTest": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/cableTest/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsCyclePort": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/cyclePort`;
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
    case "getDeviceLiveToolsCyclePort": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/cyclePort/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsDhcpLease": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/dhcpLeases`;
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
    case "getDeviceLiveToolsDhcpLease": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/dhcpLeases/{dhcpLeasesId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsLedsBlink": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/leds/blink`;
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
    case "getDeviceLiveToolsLedsBlink": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/leds/blink/{ledsBlinkId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsMacTable": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/macTable`;
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
    case "getDeviceLiveToolsMacTable": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/macTable/{macTableId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsMulticastRouting": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/multicastRouting`;
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
    case "getDeviceLiveToolsMulticastRouting": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/multicastRouting/{multicastRoutingId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsOspfNeighbor": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/ospfNeighbors`;
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
    case "getDeviceLiveToolsOspfNeighbor": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/ospfNeighbors/{ospfNeighborsId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsPing": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/ping`;
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
    case "getDeviceLiveToolsPing": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/ping/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsPingDevice": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/pingDevice`;
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
    case "getDeviceLiveToolsPingDevice": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/pingDevice/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsRoutingTable": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/routingTable`;
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
    case "getDeviceLiveToolsRoutingTable": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/routingTable/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsSpeedTest": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/speedTest`;
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
    case "getDeviceLiveToolsSpeedTest": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/speedTest/{id}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsThroughputTest": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/throughputTest`;
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
    case "getDeviceLiveToolsThroughputTest": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/throughputTest/{throughputTestId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsTraceRoute": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/traceRoute`;
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
    case "getDeviceLiveToolsTraceRoute": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/traceRoute/{traceRouteId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "createDeviceLiveToolsWakeOnLan": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/wakeOnLan`;
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
    case "getDeviceLiveToolsWakeOnLan": {
      let path = `/devices/${params.arguments.path.serial}/liveTools/wakeOnLan/{wakeOnLanId}`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceLldpCdp": {
      let path = `/devices/${params.arguments.path.serial}/lldpCdp`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceLossAndLatencyHistory": {
      let path = `/devices/${params.arguments.path.serial}/lossAndLatencyHistory`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "getDeviceManagementInterface": {
      let path = `/devices/${params.arguments.path.serial}/managementInterface`;
      response = await client.get(path, { params: params.arguments.query });
      const data = response.data;
      return {
        ok: true,
        data: data,
        response_metadata: { next_cursor: "" },
      };
    }
    case "updateDeviceManagementInterface": {
      let path = `/devices/${params.arguments.path.serial}/managementInterface`;
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
    case "rebootDevice": {
      let path = `/devices/${params.arguments.path.serial}/reboot`;
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
    default:
      throw new Error(`Unknown tool: ${params.name}`);
  }
}

export const devicesEndpoints = [
  "getDevice",
  "updateDevice",
  "blinkDeviceLeds",
  "getDeviceCellularSims",
  "updateDeviceCellularSims",
  "getDeviceClients",
  "createDeviceLiveToolsAclHitCount",
  "getDeviceLiveToolsAclHitCount",
  "createDeviceLiveToolsArpTable",
  "getDeviceLiveToolsArpTable",
  "createDeviceLiveToolsCableTest",
  "getDeviceLiveToolsCableTest",
  "createDeviceLiveToolsCyclePort",
  "getDeviceLiveToolsCyclePort",
  "createDeviceLiveToolsDhcpLease",
  "getDeviceLiveToolsDhcpLease",
  "createDeviceLiveToolsLedsBlink",
  "getDeviceLiveToolsLedsBlink",
  "createDeviceLiveToolsMacTable",
  "getDeviceLiveToolsMacTable",
  "createDeviceLiveToolsMulticastRouting",
  "getDeviceLiveToolsMulticastRouting",
  "createDeviceLiveToolsOspfNeighbor",
  "getDeviceLiveToolsOspfNeighbor",
  "createDeviceLiveToolsPing",
  "getDeviceLiveToolsPing",
  "createDeviceLiveToolsPingDevice",
  "getDeviceLiveToolsPingDevice",
  "createDeviceLiveToolsRoutingTable",
  "getDeviceLiveToolsRoutingTable",
  "createDeviceLiveToolsSpeedTest",
  "getDeviceLiveToolsSpeedTest",
  "createDeviceLiveToolsThroughputTest",
  "getDeviceLiveToolsThroughputTest",
  "createDeviceLiveToolsTraceRoute",
  "getDeviceLiveToolsTraceRoute",
  "createDeviceLiveToolsWakeOnLan",
  "getDeviceLiveToolsWakeOnLan",
  "getDeviceLldpCdp",
  "getDeviceLossAndLatencyHistory",
  "getDeviceManagementInterface",
  "updateDeviceManagementInterface",
  "rebootDevice"
];
