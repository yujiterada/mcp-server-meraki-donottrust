import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getOrganizationSecureConnectPrivateApplicationGroupsTool: Tool = {
  name: "getOrganizationSecureConnectPrivateApplicationGroups",
  scope: "",
  description: "Provides a list of private application groups for an Organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-nameIncludes": {
        type: "string",
        description: "Optional parameter to search the application group list by group name, case is ignored"
      },
      "query-applicationGroupIds": {
        type: "array",
        description: "List of application group ids attached to fetch"
      },
      "query-sortBy": {
        type: "string",
        description: "Optional parameter to specify the field used to sort objects."
      },
      "query-sortOrder": {
        type: "string",
        description: "Optional parameter to specify the sort order. Default value is asc."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationSecureConnectPrivateApplicationGroupTool: Tool = {
  name: "createOrganizationSecureConnectPrivateApplicationGroup",
  scope: "",
  description: "Creates a group of private applications to apply to policy. A maximum of 300 private application groups are allowed for an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Application Group Name. This is required and cannot have any special characters other than spaces and hyphens"
      },
      "body-description": {
        type: "string",
        description: "Optional short description for application group"
      },
      "body-applicationIds": {
        type: "array",
        description: "List of application ids attached to this Private Application Group"
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const updateOrganizationSecureConnectPrivateApplicationGroupTool: Tool = {
  name: "updateOrganizationSecureConnectPrivateApplicationGroup",
  scope: "",
  description: "Update an application group in an Organization. Updates are allowed on Group Name and Group Description. Applications can be added or removed. Group type and Policy cannot be changed.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-name": {
        type: "string",
        description: "Application Group Name. This is required and cannot have any special characters other than spaces and hyphens"
      },
      "body-description": {
        type: "string",
        description: "Optional short description for application group"
      },
      "body-applicationIds": {
        type: "array",
        description: "List of application ids attached to this Private Application Group"
      }
    },
    required: ["path-organizationId","path-id","body-name"],
  },
};

export const deleteOrganizationSecureConnectPrivateApplicationGroupTool: Tool = {
  name: "deleteOrganizationSecureConnectPrivateApplicationGroup",
  scope: "",
  description: "Deletes private application group from an Organization. Detaches application from groups before deleting",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-force": {
        type: "boolean",
        description: "Boolean flag to force delete application group, even if application group is in use by one or more rules."
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationSecureConnectPrivateApplicationGroupTool: Tool = {
  name: "getOrganizationSecureConnectPrivateApplicationGroup",
  scope: "",
  description: "Return the details of a specific private application group",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationSecureConnectPrivateApplicationsTool: Tool = {
  name: "getOrganizationSecureConnectPrivateApplications",
  scope: "",
  description: "Provides a list of private applications for an Organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-nameIncludes": {
        type: "string",
        description: "Optional parameter to filter the private applications list by application and associated application group names, case is ignored"
      },
      "query-applicationGroupIds": {
        type: "array",
        description: "Optional parameter for filtering the list of private applications belonging to the application group identified by the given IDs."
      },
      "query-appTypes": {
        type: "array",
        description: "Optional parameter for filtering the list of private applications by applications that contain at least one destination with the specified accessType value."
      },
      "query-sortBy": {
        type: "string",
        description: "Optional parameter to specify the field used to sort objects."
      },
      "query-sortOrder": {
        type: "string",
        description: "Optional parameter to specify the sort order. Default value is asc."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationSecureConnectPrivateApplicationTool: Tool = {
  name: "createOrganizationSecureConnectPrivateApplication",
  scope: "",
  description: "Adds a new private application to the Organization. A maximum of 300 private applications are allowed for an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of Application. This is required and should be unique across all applications for a given organization. Name cannot have any special characters other than spaces and hyphens."
      },
      "body-description": {
        type: "string",
        description: "Optional Text description for Application"
      },
      "body-destinations": {
        type: "array",
        description: "List of IP address destinations."
      },
      "body-appProtocol": {
        type: "string",
        description: "Protocol for communication between proxy to private application. Applicable for Browser Based Access only."
      },
      "body-sni": {
        type: "string",
        description: "Optional SNI. Applicable for Browser Based Access only. SNI should be a valid domain."
      },
      "body-externalFQDN": {
        type: "string",
        description: "Cisco or Customer Managed URL for Application. Applicable for Browser Based Access only. This field is system generated based on the application name and organization ID and overrides user input in payload. This value must be unique across all applications for a given organization."
      },
      "body-sslVerificationEnabled": {
        type: "boolean",
        description: "Enable Upstream SSL verification for the internally hosted URL by the customer. Applicable for Browser Based Access only. Default is true."
      },
      "body-applicationGroupIds": {
        type: "array",
        description: "List of application group ids attached to this Private Application"
      }
    },
    required: ["path-organizationId","body-name","body-destinations"],
  },
};

export const updateOrganizationSecureConnectPrivateApplicationTool: Tool = {
  name: "updateOrganizationSecureConnectPrivateApplication",
  scope: "",
  description: "Updates a specific private application. Updates can be made to Name, Description, Destinations, App Protocol, SNI and SSL verification. Application groups can be added or removed.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-name": {
        type: "string",
        description: "Name of Application. This is required and should be unique across all applications for a given organization. Name cannot have any special characters other than spaces and hyphens."
      },
      "body-description": {
        type: "string",
        description: "Optional Text description for Application"
      },
      "body-destinations": {
        type: "array",
        description: "List of IP address destinations."
      },
      "body-appProtocol": {
        type: "string",
        description: "Protocol for communication between proxy to private application. Applicable for Browser Based Access only."
      },
      "body-sni": {
        type: "string",
        description: "Optional SNI. Applicable for Browser Based Access only. SNI should be a valid domain."
      },
      "body-externalFQDN": {
        type: "string",
        description: "Cisco or Customer Managed URL for Application. Applicable for Browser Based Access only. This field is system generated based on the application name and organization ID and overrides user input in payload. This value must be unique across all applications for a given organization."
      },
      "body-sslVerificationEnabled": {
        type: "boolean",
        description: "Enable Upstream SSL verification for the internally hosted URL by the customer. Applicable for Browser Based Access only. Default is true."
      },
      "body-applicationGroupIds": {
        type: "array",
        description: "List of application group ids attached to this Private Application"
      }
    },
    required: ["path-organizationId","path-id","body-name","body-destinations"],
  },
};

export const deleteOrganizationSecureConnectPrivateApplicationTool: Tool = {
  name: "deleteOrganizationSecureConnectPrivateApplication",
  scope: "",
  description: "Deletes a specific private application. Delink the application from any application groups before deleting the app. Cascade delete application group if this is the only application in the group.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-force": {
        type: "boolean",
        description: "Boolean flag to force delete application, even if application is in use by one or more rules."
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationSecureConnectPrivateApplicationTool: Tool = {
  name: "getOrganizationSecureConnectPrivateApplication",
  scope: "",
  description: "Return the details of a specific private application",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationSecureConnectPrivateResourceGroupsTool: Tool = {
  name: "getOrganizationSecureConnectPrivateResourceGroups",
  scope: "",
  description: "Provides a list of the private resource groups in an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationSecureConnectPrivateResourceGroupTool: Tool = {
  name: "createOrganizationSecureConnectPrivateResourceGroup",
  scope: "",
  description: "Adds a new private resource group to an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of group. This is required and should be unique across all groups for a given organization. Name cannot have any special characters other than spaces and hyphens."
      },
      "body-description": {
        type: "string",
        description: "Optional text description for a group."
      },
      "body-resourceIds": {
        type: "array",
        description: "List of resource ids assigned to this group."
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const updateOrganizationSecureConnectPrivateResourceGroupTool: Tool = {
  name: "updateOrganizationSecureConnectPrivateResourceGroup",
  scope: "",
  description: "Updates a specific private resource group.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-name": {
        type: "string",
        description: "Name of group. This is required and should be unique across all groups for a given organization. Name cannot have any special characters other than spaces and hyphens."
      },
      "body-description": {
        type: "string",
        description: "Optional text description for a group."
      },
      "body-resourceIds": {
        type: "array",
        description: "List of resource ids assigned to this group."
      }
    },
    required: ["path-organizationId","path-id","body-name"],
  },
};

export const deleteOrganizationSecureConnectPrivateResourceGroupTool: Tool = {
  name: "deleteOrganizationSecureConnectPrivateResourceGroup",
  scope: "",
  description: "Deletes a specific private resource group.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationSecureConnectPrivateResourcesTool: Tool = {
  name: "getOrganizationSecureConnectPrivateResources",
  scope: "",
  description: "Provides a list of private resources for an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "string",
        description: "Number of resources to return for a paginated response."
      },
      "query-startingAfter": {
        type: "string",
        description: "The name of the resource to start after for a paginated response. Use '' for the first page."
      },
      "query-endingBefore": {
        type: "string",
        description: "The name of the resource to end before for a paginated response. Use '' for the final page."
      },
      "query-sortBy": {
        type: "string",
        description: "Parameter to specify the field used to sort objects, by default, resources are returned by name asc."
      },
      "query-sortOrder": {
        type: "string",
        description: "Parameter to specify the direction used to sort objects, by default, resources are returned by name asc."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationSecureConnectPrivateResourceTool: Tool = {
  name: "createOrganizationSecureConnectPrivateResource",
  scope: "",
  description: "Adds a new private resource to the organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of resource. This is required and should be unique across all resources for a given organization. Name cannot have any special characters other than spaces and hyphens."
      },
      "body-description": {
        type: "string",
        description: "Optional text description for a resource."
      },
      "body-accessTypes": {
        type: "array",
        description: "List of access types."
      },
      "body-resourceAddresses": {
        type: "array",
        description: "List of resource addresses Protocols must be unique in this list."
      },
      "body-resourceGroupIds": {
        type: "array",
        description: "List of resource group ids attached to this resource."
      }
    },
    required: ["path-organizationId","body-name","body-accessTypes","body-resourceAddresses"],
  },
};

export const updateOrganizationSecureConnectPrivateResourceTool: Tool = {
  name: "updateOrganizationSecureConnectPrivateResource",
  scope: "",
  description: "Updates a specific private resource.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "body-name": {
        type: "string",
        description: "Name of resource. This is required and should be unique across all resources for a given organization.Name cannot have any special characters other than spaces and hyphens."
      },
      "body-description": {
        type: "string",
        description: "Optional text description for resource."
      },
      "body-accessTypes": {
        type: "array",
        description: "List of access types."
      },
      "body-resourceAddresses": {
        type: "array",
        description: "List of resource addresses Protocols must be unique in this list."
      },
      "body-resourceGroupIds": {
        type: "array",
        description: "List of resource group ids attached to this resource."
      }
    },
    required: ["path-organizationId","path-id","body-name","body-accessTypes","body-resourceAddresses"],
  },
};

export const deleteOrganizationSecureConnectPrivateResourceTool: Tool = {
  name: "deleteOrganizationSecureConnectPrivateResource",
  scope: "",
  description: "Deletes a specific private resource. If this is the last resource in a resource group you must remove it from that resource group before deleting.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationSecureConnectPublicApplicationsTool: Tool = {
  name: "getOrganizationSecureConnectPublicApplications",
  scope: "",
  description: "Provides a list of public applications for an Organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 100. Default is 10."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-nameIncludes": {
        type: "string",
        description: "Optional parameter to filter the public applications list by application name, case is ignored"
      },
      "query-risks": {
        type: "array",
        description: "List of risk levels to filter by"
      },
      "query-categories": {
        type: "array",
        description: "List of categories to filter by"
      },
      "query-appTypes": {
        type: "array",
        description: "List of app types to filter by"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
      },
      "query-sortBy": {
        type: "string",
        description: "Optional parameter to specify the field used to sort objects, by default, applications are returned by lastDetected desc"
      },
      "query-sortOrder": {
        type: "string",
        description: "Optional parameter to specify the sort order. Default value is desc."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSecureConnectRegionsTool: Tool = {
  name: "getOrganizationSecureConnectRegions",
  scope: "",
  description: "List deployed cloud hubs and regions in this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-regionType": {
        type: "string",
        description: "Filter results by region type"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSecureConnectRemoteAccessLogTool: Tool = {
  name: "getOrganizationSecureConnectRemoteAccessLog",
  scope: "",
  description: "List the latest 5000 events logged by remote access.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 5000. Default is 50."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 31 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
      },
      "query-identityids": {
        type: "string",
        description: "An identity ID or comma-delimited list of identity ID."
      },
      "query-identitytypes": {
        type: "string",
        description: "An identity type or comma-delimited list of identity type."
      },
      "query-connectionevent": {
        type: "string",
        description: "Specify the type of connection event."
      },
      "query-anyconnectversions": {
        type: "string",
        description: "Specify a comma-separated list of AnyConnect Roaming Security module      versions to filter the data."
      },
      "query-osversions": {
        type: "string",
        description: "Specify a comma-separated list of OS versions to filter the data."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSecureConnectRemoteAccessLogsExportsTool: Tool = {
  name: "getOrganizationSecureConnectRemoteAccessLogsExports",
  scope: "",
  description: "Provides a list of remote access logs exports for an Organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-status": {
        type: "string",
        description: "Filter exports by status."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationSecureConnectRemoteAccessLogsExportTool: Tool = {
  name: "createOrganizationSecureConnectRemoteAccessLogsExport",
  scope: "",
  description: "Creates a export for a provided timestamp interval.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-from": {
        type: "integer",
        description: "The start of the interval, must be within the past 30 days."
      },
      "body-to": {
        type: "integer",
        description: "The end of the interval, must not exceed the current date."
      }
    },
    required: ["path-organizationId","body-from","body-to"],
  },
};

export const getOrganizationSecureConnectRemoteAccessLogsExportsDownloadTool: Tool = {
  name: "getOrganizationSecureConnectRemoteAccessLogsExportsDownload",
  scope: "",
  description: "Redirects to the download link of the completed export.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-id": {
        type: "string",
        description: "Export ID."
      },
      "query-fileType": {
        type: "string",
        description: "Export download file type."
      }
    },
    required: ["path-organizationId","query-id","query-fileType"],
  },
};

export const getOrganizationSecureConnectRemoteAccessLogsExportTool: Tool = {
  name: "getOrganizationSecureConnectRemoteAccessLogsExport",
  scope: "",
  description: "Return the details of a specific remote access logs export",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationSecureConnectSitesTool: Tool = {
  name: "getOrganizationSecureConnectSites",
  scope: "",
  description: "List sites in this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-search": {
        type: "string",
        description: "If provided, filters results by search string"
      },
      "query-enrolledState": {
        type: "string",
        description: "Filter results by sites that have already been enrolled or can be enrolled. Acceptable values are 'enrolled' or 'enrollable"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationSecureConnectSiteTool: Tool = {
  name: "createOrganizationSecureConnectSite",
  scope: "",
  description: "Enroll sites in this organization to Secure Connect. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-enrollments": {
        type: "array",
        description: "List of Meraki SD-WAN sites with the associated regions to be enrolled."
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-organizationId"],
  },
};

export const deleteOrganizationSecureConnectSitesTool: Tool = {
  name: "deleteOrganizationSecureConnectSites",
  scope: "",
  description: "Detach given sites from Secure Connect",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-sites": {
        type: "array",
        description: "List of site IDs to detach"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-organizationId"],
  },
};

export const secureConnectTools = [
  getOrganizationSecureConnectPrivateApplicationGroupsTool,
  createOrganizationSecureConnectPrivateApplicationGroupTool,
  updateOrganizationSecureConnectPrivateApplicationGroupTool,
  deleteOrganizationSecureConnectPrivateApplicationGroupTool,
  getOrganizationSecureConnectPrivateApplicationGroupTool,
  getOrganizationSecureConnectPrivateApplicationsTool,
  createOrganizationSecureConnectPrivateApplicationTool,
  updateOrganizationSecureConnectPrivateApplicationTool,
  deleteOrganizationSecureConnectPrivateApplicationTool,
  getOrganizationSecureConnectPrivateApplicationTool,
  getOrganizationSecureConnectPrivateResourceGroupsTool,
  createOrganizationSecureConnectPrivateResourceGroupTool,
  updateOrganizationSecureConnectPrivateResourceGroupTool,
  deleteOrganizationSecureConnectPrivateResourceGroupTool,
  getOrganizationSecureConnectPrivateResourcesTool,
  createOrganizationSecureConnectPrivateResourceTool,
  updateOrganizationSecureConnectPrivateResourceTool,
  deleteOrganizationSecureConnectPrivateResourceTool,
  getOrganizationSecureConnectPublicApplicationsTool,
  getOrganizationSecureConnectRegionsTool,
  getOrganizationSecureConnectRemoteAccessLogTool,
  getOrganizationSecureConnectRemoteAccessLogsExportsTool,
  createOrganizationSecureConnectRemoteAccessLogsExportTool,
  getOrganizationSecureConnectRemoteAccessLogsExportsDownloadTool,
  getOrganizationSecureConnectRemoteAccessLogsExportTool,
  getOrganizationSecureConnectSitesTool,
  createOrganizationSecureConnectSiteTool,
  deleteOrganizationSecureConnectSitesTool
];