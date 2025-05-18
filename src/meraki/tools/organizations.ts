import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getOrganizationsTool: Tool = {
  name: "getOrganizations",
  scope: "",
  description: "List the organizations that the user has privileges on",
  inputSchema: {
    type: "object",
    properties: {
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 9000. Default is 9000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: [],
  },
};

export const createOrganizationTool: Tool = {
  name: "createOrganization",
  scope: "",
  description: "Create a new organization",
  inputSchema: {
    type: "object",
    properties: {
      "body-name": {
        type: "string",
        description: "The name of the organization"
      },
      "body-management": {
        type: "object",
        description: "Information about the organization's management system"
      }
    },
    required: ["body-name"],
  },
};

export const getOrganizationTool: Tool = {
  name: "getOrganization",
  scope: "",
  description: "Return an organization",
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

export const updateOrganizationTool: Tool = {
  name: "updateOrganization",
  scope: "",
  description: "Update an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the organization"
      },
      "body-management": {
        type: "object",
        description: "Information about the organization's management system"
      },
      "body-api": {
        type: "object",
        description: "API-specific settings"
      }
    },
    required: ["path-organizationId"],
  },
};

export const deleteOrganizationTool: Tool = {
  name: "deleteOrganization",
  scope: "",
  description: "Delete an organization",
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

export const createOrganizationActionBatchTool: Tool = {
  name: "createOrganizationActionBatch",
  scope: "",
  description: "Create an action batch",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-confirmed": {
        type: "boolean",
        description: "Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false."
      },
      "body-synchronous": {
        type: "boolean",
        description: "Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false."
      },
      "body-actions": {
        type: "array",
        description: "A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)"
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-organizationId","body-actions"],
  },
};

export const getOrganizationActionBatchesTool: Tool = {
  name: "getOrganizationActionBatches",
  scope: "",
  description: "Return the list of action batches in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-status": {
        type: "string",
        description: "Filter batches by status. Valid types are pending, completed, and failed."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationActionBatchTool: Tool = {
  name: "getOrganizationActionBatch",
  scope: "",
  description: "Return an action batch",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-actionBatchId": {
        type: "string",
        description: "Action batch ID"
      }
    },
    required: ["path-organizationId","path-actionBatchId"],
  },
};

export const deleteOrganizationActionBatchTool: Tool = {
  name: "deleteOrganizationActionBatch",
  scope: "",
  description: "Delete an action batch",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-actionBatchId": {
        type: "string",
        description: "Action batch ID"
      }
    },
    required: ["path-organizationId","path-actionBatchId"],
  },
};

export const updateOrganizationActionBatchTool: Tool = {
  name: "updateOrganizationActionBatch",
  scope: "",
  description: "Update an action batch",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-actionBatchId": {
        type: "string",
        description: "Action batch ID"
      },
      "body-confirmed": {
        type: "boolean",
        description: "A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true."
      },
      "body-synchronous": {
        type: "boolean",
        description: "Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch."
      }
    },
    required: ["path-organizationId","path-actionBatchId"],
  },
};

export const getOrganizationAdaptivePolicyAclsTool: Tool = {
  name: "getOrganizationAdaptivePolicyAcls",
  scope: "",
  description: "List adaptive policy ACLs in a organization",
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

export const createOrganizationAdaptivePolicyAclTool: Tool = {
  name: "createOrganizationAdaptivePolicyAcl",
  scope: "",
  description: "Creates new adaptive policy ACL",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the adaptive policy ACL"
      },
      "body-description": {
        type: "string",
        description: "Description of the adaptive policy ACL"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the adaptive policy ACL rules."
      },
      "body-ipVersion": {
        type: "string",
        description: "IP version of adpative policy ACL. One of: 'any', 'ipv4' or 'ipv6'"
      }
    },
    required: ["path-organizationId","body-name","body-rules","body-ipVersion"],
  },
};

export const getOrganizationAdaptivePolicyAclTool: Tool = {
  name: "getOrganizationAdaptivePolicyAcl",
  scope: "",
  description: "Returns the adaptive policy ACL information",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-aclId": {
        type: "string",
        description: "Acl ID"
      }
    },
    required: ["path-organizationId","path-aclId"],
  },
};

export const updateOrganizationAdaptivePolicyAclTool: Tool = {
  name: "updateOrganizationAdaptivePolicyAcl",
  scope: "",
  description: "Updates an adaptive policy ACL",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-aclId": {
        type: "string",
        description: "Acl ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the adaptive policy ACL"
      },
      "body-description": {
        type: "string",
        description: "Description of the adaptive policy ACL"
      },
      "body-rules": {
        type: "array",
        description: "An ordered array of the adaptive policy ACL rules. An empty array will clear the rules."
      },
      "body-ipVersion": {
        type: "string",
        description: "IP version of adpative policy ACL. One of: 'any', 'ipv4' or 'ipv6'"
      }
    },
    required: ["path-organizationId","path-aclId"],
  },
};

export const deleteOrganizationAdaptivePolicyAclTool: Tool = {
  name: "deleteOrganizationAdaptivePolicyAcl",
  scope: "",
  description: "Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-aclId": {
        type: "string",
        description: "Acl ID"
      }
    },
    required: ["path-organizationId","path-aclId"],
  },
};

export const getOrganizationAdaptivePolicyGroupsTool: Tool = {
  name: "getOrganizationAdaptivePolicyGroups",
  scope: "",
  description: "List adaptive policy groups in a organization",
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

export const createOrganizationAdaptivePolicyGroupTool: Tool = {
  name: "createOrganizationAdaptivePolicyGroup",
  scope: "",
  description: "Creates a new adaptive policy group",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the group"
      },
      "body-sgt": {
        type: "integer",
        description: "SGT value of the group"
      },
      "body-description": {
        type: "string",
        description: "Description of the group (default: \"\")"
      },
      "body-policyObjects": {
        type: "array",
        description: "The policy objects that belong to this group; traffic from addresses specified by these policy objects will be tagged with this group's SGT value if no other tagging scheme is being used (each requires one unique attribute) (default: [])"
      }
    },
    required: ["path-organizationId","body-name","body-sgt"],
  },
};

export const getOrganizationAdaptivePolicyGroupTool: Tool = {
  name: "getOrganizationAdaptivePolicyGroup",
  scope: "",
  description: "Returns an adaptive policy group",
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

export const updateOrganizationAdaptivePolicyGroupTool: Tool = {
  name: "updateOrganizationAdaptivePolicyGroup",
  scope: "",
  description: "Updates an adaptive policy group. If updating \"Infrastructure\", only the SGT is allowed. Cannot update \"Unknown\".",
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
        description: "Name of the group"
      },
      "body-sgt": {
        type: "integer",
        description: "SGT value of the group"
      },
      "body-description": {
        type: "string",
        description: "Description of the group"
      },
      "body-policyObjects": {
        type: "array",
        description: "The policy objects that belong to this group; traffic from addresses specified by these policy objects will be tagged with this group's SGT value if no other tagging scheme is being used (each requires one unique attribute)"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const deleteOrganizationAdaptivePolicyGroupTool: Tool = {
  name: "deleteOrganizationAdaptivePolicyGroup",
  scope: "",
  description: "Deletes the specified adaptive policy group and any associated policies and references",
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

export const getOrganizationAdaptivePolicyOverviewTool: Tool = {
  name: "getOrganizationAdaptivePolicyOverview",
  scope: "",
  description: "Returns adaptive policy aggregate statistics for an organization",
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

export const getOrganizationAdaptivePolicyPoliciesTool: Tool = {
  name: "getOrganizationAdaptivePolicyPolicies",
  scope: "",
  description: "List adaptive policies in an organization",
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

export const createOrganizationAdaptivePolicyPolicyTool: Tool = {
  name: "createOrganizationAdaptivePolicyPolicy",
  scope: "",
  description: "Add an Adaptive Policy",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-sourceGroup": {
        type: "object",
        description: "The source adaptive policy group (requires one unique attribute)"
      },
      "body-destinationGroup": {
        type: "object",
        description: "The destination adaptive policy group (requires one unique attribute)"
      },
      "body-acls": {
        type: "array",
        description: "An ordered array of adaptive policy ACLs (each requires one unique attribute) that apply to this policy (default: [])"
      },
      "body-lastEntryRule": {
        type: "string",
        description: "The rule to apply if there is no matching ACL (default: \"default\")"
      }
    },
    required: ["path-organizationId","body-sourceGroup","body-destinationGroup"],
  },
};

export const getOrganizationAdaptivePolicyPolicyTool: Tool = {
  name: "getOrganizationAdaptivePolicyPolicy",
  scope: "",
  description: "Return an adaptive policy",
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

export const updateOrganizationAdaptivePolicyPolicyTool: Tool = {
  name: "updateOrganizationAdaptivePolicyPolicy",
  scope: "",
  description: "Update an Adaptive Policy",
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
      "body-sourceGroup": {
        type: "object",
        description: "The source adaptive policy group (requires one unique attribute)"
      },
      "body-destinationGroup": {
        type: "object",
        description: "The destination adaptive policy group (requires one unique attribute)"
      },
      "body-acls": {
        type: "array",
        description: "An ordered array of adaptive policy ACLs (each requires one unique attribute) that apply to this policy"
      },
      "body-lastEntryRule": {
        type: "string",
        description: "The rule to apply if there is no matching ACL"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const deleteOrganizationAdaptivePolicyPolicyTool: Tool = {
  name: "deleteOrganizationAdaptivePolicyPolicy",
  scope: "",
  description: "Delete an Adaptive Policy",
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

export const getOrganizationAdaptivePolicySettingsTool: Tool = {
  name: "getOrganizationAdaptivePolicySettings",
  scope: "",
  description: "Returns global adaptive policy settings in an organization",
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

export const updateOrganizationAdaptivePolicySettingsTool: Tool = {
  name: "updateOrganizationAdaptivePolicySettings",
  scope: "",
  description: "Update global adaptive policy settings",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-enabledNetworks": {
        type: "array",
        description: "List of network IDs with adaptive policy enabled"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationAdminsTool: Tool = {
  name: "getOrganizationAdmins",
  scope: "",
  description: "List the dashboard administrators in this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter the result set by the included set of network IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationAdminTool: Tool = {
  name: "createOrganizationAdmin",
  scope: "",
  description: "Create a new dashboard administrator",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-email": {
        type: "string",
        description: "The email of the dashboard administrator. This attribute can not be updated."
      },
      "body-name": {
        type: "string",
        description: "The name of the dashboard administrator"
      },
      "body-orgAccess": {
        type: "string",
        description: "The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'"
      },
      "body-tags": {
        type: "array",
        description: "The list of tags that the dashboard administrator has privileges on"
      },
      "body-networks": {
        type: "array",
        description: "The list of networks that the dashboard administrator has privileges on"
      },
      "body-authenticationMethod": {
        type: "string",
        description: "No longer used as of Cisco SecureX end-of-life. Can be one of 'Email'. The default is Email authentication."
      }
    },
    required: ["path-organizationId","body-email","body-name","body-orgAccess"],
  },
};

export const updateOrganizationAdminTool: Tool = {
  name: "updateOrganizationAdmin",
  scope: "",
  description: "Update an administrator",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-adminId": {
        type: "string",
        description: "Admin ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the dashboard administrator"
      },
      "body-orgAccess": {
        type: "string",
        description: "The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'"
      },
      "body-tags": {
        type: "array",
        description: "The list of tags that the dashboard administrator has privileges on"
      },
      "body-networks": {
        type: "array",
        description: "The list of networks that the dashboard administrator has privileges on"
      }
    },
    required: ["path-organizationId","path-adminId"],
  },
};

export const deleteOrganizationAdminTool: Tool = {
  name: "deleteOrganizationAdmin",
  scope: "",
  description: "Revoke all access for a dashboard administrator within this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-adminId": {
        type: "string",
        description: "Admin ID"
      }
    },
    required: ["path-organizationId","path-adminId"],
  },
};

export const getOrganizationAlertsProfilesTool: Tool = {
  name: "getOrganizationAlertsProfiles",
  scope: "",
  description: "List all organization-wide alert configurations",
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

export const createOrganizationAlertsProfileTool: Tool = {
  name: "createOrganizationAlertsProfile",
  scope: "",
  description: "Create an organization-wide alert configuration",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-type": {
        type: "string",
        description: "The alert type"
      },
      "body-alertCondition": {
        type: "object",
        description: "The conditions that determine if the alert triggers"
      },
      "body-recipients": {
        type: "object",
        description: "List of recipients that will recieve the alert."
      },
      "body-networkTags": {
        type: "array",
        description: "Networks with these tags will be monitored for the alert"
      },
      "body-description": {
        type: "string",
        description: "User supplied description of the alert"
      }
    },
    required: ["path-organizationId","body-type","body-alertCondition","body-recipients","body-networkTags"],
  },
};

export const updateOrganizationAlertsProfileTool: Tool = {
  name: "updateOrganizationAlertsProfile",
  scope: "",
  description: "Update an organization-wide alert config",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-alertConfigId": {
        type: "string",
        description: "Alert config ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Is the alert config enabled"
      },
      "body-type": {
        type: "string",
        description: "The alert type"
      },
      "body-alertCondition": {
        type: "object",
        description: "The conditions that determine if the alert triggers"
      },
      "body-recipients": {
        type: "object",
        description: "List of recipients that will recieve the alert."
      },
      "body-networkTags": {
        type: "array",
        description: "Networks with these tags will be monitored for the alert"
      },
      "body-description": {
        type: "string",
        description: "User supplied description of the alert"
      }
    },
    required: ["path-organizationId","path-alertConfigId"],
  },
};

export const deleteOrganizationAlertsProfileTool: Tool = {
  name: "deleteOrganizationAlertsProfile",
  scope: "",
  description: "Removes an organization-wide alert config",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-alertConfigId": {
        type: "string",
        description: "Alert config ID"
      }
    },
    required: ["path-organizationId","path-alertConfigId"],
  },
};

export const getOrganizationApiRequestsTool: Tool = {
  name: "getOrganizationApiRequests",
  scope: "",
  description: "List the API requests made by an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-adminId": {
        type: "string",
        description: "Filter the results by the ID of the admin who made the API requests"
      },
      "query-path": {
        type: "string",
        description: "Filter the results by the path of the API requests"
      },
      "query-method": {
        type: "string",
        description: "Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')"
      },
      "query-responseCode": {
        type: "integer",
        description: "Filter the results by the response code of the API requests"
      },
      "query-sourceIp": {
        type: "string",
        description: "Filter the results by the IP address of the originating API request"
      },
      "query-userAgent": {
        type: "string",
        description: "Filter the results by the user agent string of the API request"
      },
      "query-version": {
        type: "integer",
        description: "Filter the results by the API version of the API request"
      },
      "query-operationIds": {
        type: "array",
        description: "Filter the results by one or more operation IDs for the API request"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApiRequestsOverviewTool: Tool = {
  name: "getOrganizationApiRequestsOverview",
  scope: "",
  description: "Return an aggregated overview of API requests data",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationApiRequestsOverviewResponseCodesByIntervalTool: Tool = {
  name: "getOrganizationApiRequestsOverviewResponseCodesByInterval",
  scope: "",
  description: "Tracks organizations' API requests by response code across a given time period",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
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
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. If interval is provided, the timespan will be autocalculated."
      },
      "query-interval": {
        type: "integer",
        description: "The time interval in seconds for returned data. The valid intervals are: 120, 3600, 14400, 21600. The default is 21600. Interval is calculated if time params are provided."
      },
      "query-version": {
        type: "integer",
        description: "Filter by API version of the endpoint. Allowable values are: [0, 1]"
      },
      "query-operationIds": {
        type: "array",
        description: "Filter by operation ID of the endpoint"
      },
      "query-sourceIps": {
        type: "array",
        description: "Filter by source IP that made the API request"
      },
      "query-adminIds": {
        type: "array",
        description: "Filter by admin ID of user that made the API request"
      },
      "query-userAgent": {
        type: "string",
        description: "Filter by user agent string for API request. This will filter by a complete or partial match."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationAssuranceAlertsTool: Tool = {
  name: "getOrganizationAssuranceAlerts",
  scope: "",
  description: "Return all health alerts for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 4 - 300. Default is 30."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of entries. Order options are 'ascending' and 'descending'. Default is 'ascending'."
      },
      "query-networkId": {
        type: "string",
        description: "Optional parameter to filter alerts by network ids."
      },
      "query-severity": {
        type: "string",
        description: "Optional parameter to filter by severity type."
      },
      "query-types": {
        type: "array",
        description: "Optional parameter to filter by alert type."
      },
      "query-tsStart": {
        type: "string",
        description: "Optional parameter to filter by starting timestamp"
      },
      "query-tsEnd": {
        type: "string",
        description: "Optional parameter to filter by end timestamp"
      },
      "query-category": {
        type: "string",
        description: "Optional parameter to filter by category."
      },
      "query-sortBy": {
        type: "string",
        description: "Optional parameter to set column to sort by."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter by primary device serial"
      },
      "query-deviceTypes": {
        type: "array",
        description: "Optional parameter to filter by device types"
      },
      "query-deviceTags": {
        type: "array",
        description: "Optional parameter to filter by device tags"
      },
      "query-active": {
        type: "boolean",
        description: "Optional parameter to filter by active alerts defaults to true"
      },
      "query-dismissed": {
        type: "boolean",
        description: "Optional parameter to filter by dismissed alerts defaults to false"
      },
      "query-resolved": {
        type: "boolean",
        description: "Optional parameter to filter by resolved alerts defaults to false"
      },
      "query-suppressAlertsForOfflineNodes": {
        type: "boolean",
        description: "When set to true the api will only return connectivity alerts for a given device if that device is in an offline state. This only applies to devices. This is ignored when resolved is true. Example:  If a Switch has a VLan Mismatch and is Unreachable. only the Unreachable alert will be returned. Defaults to false."
      }
    },
    required: ["path-organizationId"],
  },
};

export const dismissOrganizationAssuranceAlertsTool: Tool = {
  name: "dismissOrganizationAssuranceAlerts",
  scope: "",
  description: "Dismiss health alerts",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-alertIds": {
        type: "array",
        description: "Array of alert IDs to dismiss"
      }
    },
    required: ["path-organizationId","body-alertIds"],
  },
};

export const getOrganizationAssuranceAlertsOverviewTool: Tool = {
  name: "getOrganizationAssuranceAlertsOverview",
  scope: "",
  description: "Return overview of active health alerts for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkId": {
        type: "string",
        description: "Optional parameter to filter alerts overview by network ids."
      },
      "query-severity": {
        type: "string",
        description: "Optional parameter to filter alerts overview by severity type."
      },
      "query-types": {
        type: "array",
        description: "Optional parameter to filter by alert type."
      },
      "query-tsStart": {
        type: "string",
        description: "Optional parameter to filter by starting timestamp"
      },
      "query-tsEnd": {
        type: "string",
        description: "Optional parameter to filter by end timestamp"
      },
      "query-category": {
        type: "string",
        description: "Optional parameter to filter by category."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter by primary device serial"
      },
      "query-deviceTypes": {
        type: "array",
        description: "Optional parameter to filter by device types"
      },
      "query-deviceTags": {
        type: "array",
        description: "Optional parameter to filter by device tags"
      },
      "query-active": {
        type: "boolean",
        description: "Optional parameter to filter by active alerts defaults to true"
      },
      "query-dismissed": {
        type: "boolean",
        description: "Optional parameter to filter by dismissed alerts defaults to false"
      },
      "query-resolved": {
        type: "boolean",
        description: "Optional parameter to filter by resolved alerts defaults to false"
      },
      "query-suppressAlertsForOfflineNodes": {
        type: "boolean",
        description: "When set to true the api will only return connectivity alerts for a given device if that device is in an offline state. This only applies to devices. This is ignored when resolved is true. Example:  If a Switch has a VLan Mismatch and is Unreachable. only the Unreachable alert will be returned. Defaults to false."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationAssuranceAlertsOverviewByNetworkTool: Tool = {
  name: "getOrganizationAssuranceAlertsOverviewByNetwork",
  scope: "",
  description: "Return a Summary of Alerts grouped by network and severity",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of entries. Order options are 'ascending' and 'descending'. Default is 'ascending'."
      },
      "query-networkId": {
        type: "string",
        description: "Optional parameter to filter alerts overview by network id."
      },
      "query-severity": {
        type: "string",
        description: "Optional parameter to filter alerts overview by severity type."
      },
      "query-types": {
        type: "array",
        description: "Optional parameter to filter by alert type."
      },
      "query-tsStart": {
        type: "string",
        description: "Optional parameter to filter by starting timestamp"
      },
      "query-tsEnd": {
        type: "string",
        description: "Optional parameter to filter by end timestamp"
      },
      "query-category": {
        type: "string",
        description: "Optional parameter to filter by category."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter by primary device serial"
      },
      "query-deviceTypes": {
        type: "array",
        description: "Optional parameter to filter by device types"
      },
      "query-deviceTags": {
        type: "array",
        description: "Optional parameter to filter by device tags"
      },
      "query-active": {
        type: "boolean",
        description: "Optional parameter to filter by active alerts defaults to true"
      },
      "query-dismissed": {
        type: "boolean",
        description: "Optional parameter to filter by dismissed alerts defaults to false"
      },
      "query-resolved": {
        type: "boolean",
        description: "Optional parameter to filter by resolved alerts defaults to false"
      },
      "query-suppressAlertsForOfflineNodes": {
        type: "boolean",
        description: "When set to true the api will only return connectivity alerts for a given device if that device is in an offline state. This only applies to devices. This is ignored when resolved is true. Example:  If a Switch has a VLan Mismatch and is Unreachable. only the Unreachable alert will be returned. Defaults to false."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationAssuranceAlertsOverviewByTypeTool: Tool = {
  name: "getOrganizationAssuranceAlertsOverviewByType",
  scope: "",
  description: "Return a Summary of Alerts grouped by type and severity",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of entries. Order options are 'ascending' and 'descending'. Default is 'ascending'."
      },
      "query-networkId": {
        type: "string",
        description: "Optional parameter to filter alerts overview by network ids."
      },
      "query-severity": {
        type: "string",
        description: "Optional parameter to filter alerts overview by severity type."
      },
      "query-types": {
        type: "array",
        description: "Optional parameter to filter by alert type."
      },
      "query-tsStart": {
        type: "string",
        description: "Optional parameter to filter by starting timestamp"
      },
      "query-tsEnd": {
        type: "string",
        description: "Optional parameter to filter by end timestamp"
      },
      "query-category": {
        type: "string",
        description: "Optional parameter to filter by category."
      },
      "query-sortBy": {
        type: "string",
        description: "Optional parameter to set column to sort by."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter by primary device serial"
      },
      "query-deviceTypes": {
        type: "array",
        description: "Optional parameter to filter by device types"
      },
      "query-deviceTags": {
        type: "array",
        description: "Optional parameter to filter by device tags"
      },
      "query-active": {
        type: "boolean",
        description: "Optional parameter to filter by active alerts defaults to true"
      },
      "query-dismissed": {
        type: "boolean",
        description: "Optional parameter to filter by dismissed alerts defaults to false"
      },
      "query-resolved": {
        type: "boolean",
        description: "Optional parameter to filter by resolved alerts defaults to false"
      },
      "query-suppressAlertsForOfflineNodes": {
        type: "boolean",
        description: "When set to true the api will only return connectivity alerts for a given device if that device is in an offline state. This only applies to devices. This is ignored when resolved is true. Example:  If a Switch has a VLan Mismatch and is Unreachable. only the Unreachable alert will be returned. Defaults to false."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationAssuranceAlertsOverviewHistoricalTool: Tool = {
  name: "getOrganizationAssuranceAlertsOverviewHistorical",
  scope: "",
  description: "Returns historical health alert overviews",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-segmentDuration": {
        type: "integer",
        description: "Amount of time in seconds for each segment in the returned dataset"
      },
      "query-networkId": {
        type: "string",
        description: "Optional parameter to filter alerts overview by network ids."
      },
      "query-severity": {
        type: "string",
        description: "Optional parameter to filter alerts overview by severity type."
      },
      "query-types": {
        type: "array",
        description: "Optional parameter to filter by alert type."
      },
      "query-tsStart": {
        type: "string",
        description: "Parameter to define starting timestamp of historical totals"
      },
      "query-tsEnd": {
        type: "string",
        description: "Optional parameter to filter by end timestamp defaults to the current time"
      },
      "query-category": {
        type: "string",
        description: "Optional parameter to filter by category."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter by primary device serial"
      },
      "query-deviceTypes": {
        type: "array",
        description: "Optional parameter to filter by device types"
      }
    },
    required: ["path-organizationId","query-segmentDuration","query-tsStart"],
  },
};

export const restoreOrganizationAssuranceAlertsTool: Tool = {
  name: "restoreOrganizationAssuranceAlerts",
  scope: "",
  description: "Restore health alerts from dismissed",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-alertIds": {
        type: "array",
        description: "Array of alert IDs to restore"
      }
    },
    required: ["path-organizationId","body-alertIds"],
  },
};

export const getOrganizationAssuranceAlertTool: Tool = {
  name: "getOrganizationAssuranceAlert",
  scope: "",
  description: "Return a singular Health Alert by its id",
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

export const getOrganizationAssuranceProductAnnouncementsTool: Tool = {
  name: "getOrganizationAssuranceProductAnnouncements",
  scope: "",
  description: "Gets relevant product announcements for a user",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 365 days and 6 hours. The default is 90 days."
      },
      "query-onlyRelevant": {
        type: "boolean",
        description: "Limits product announcements that are considered relevant to this user when true"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationAuthRadiusServersTool: Tool = {
  name: "getOrganizationAuthRadiusServers",
  scope: "",
  description: "List the organization-wide RADIUS servers in the organization",
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

export const createOrganizationAuthRadiusServerTool: Tool = {
  name: "createOrganizationAuthRadiusServer",
  scope: "",
  description: "Add an organization-wide RADIUS server",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the RADIUS server"
      },
      "body-address": {
        type: "string",
        description: "The IP address or FQDN of the RADIUS server"
      },
      "body-modes": {
        type: "array",
        description: "Available server modes"
      },
      "body-secret": {
        type: "string",
        description: "Shared secret of the RADIUS server"
      }
    },
    required: ["path-organizationId","body-address","body-secret"],
  },
};

export const getOrganizationAuthRadiusServersAssignmentsTool: Tool = {
  name: "getOrganizationAuthRadiusServersAssignments",
  scope: "",
  description: "Return list of network and policies that organization-wide RADIUS servers are bing used",
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

export const getOrganizationAuthRadiusServerTool: Tool = {
  name: "getOrganizationAuthRadiusServer",
  scope: "",
  description: "Return an organization-wide RADIUS server",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-serverId": {
        type: "string",
        description: "Server ID"
      }
    },
    required: ["path-organizationId","path-serverId"],
  },
};

export const updateOrganizationAuthRadiusServerTool: Tool = {
  name: "updateOrganizationAuthRadiusServer",
  scope: "",
  description: "Update an organization-wide RADIUS server",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-serverId": {
        type: "string",
        description: "Server ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the RADIUS server"
      },
      "body-address": {
        type: "string",
        description: "The IP address or FQDN of the RADIUS server"
      },
      "body-modes": {
        type: "array",
        description: "Available server modes"
      },
      "body-secret": {
        type: "string",
        description: "Shared secret of the RADIUS server"
      }
    },
    required: ["path-organizationId","path-serverId"],
  },
};

export const deleteOrganizationAuthRadiusServerTool: Tool = {
  name: "deleteOrganizationAuthRadiusServer",
  scope: "",
  description: "Delete an organization-wide RADIUS server from a organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-serverId": {
        type: "string",
        description: "Server ID"
      }
    },
    required: ["path-organizationId","path-serverId"],
  },
};

export const getOrganizationBrandingPoliciesTool: Tool = {
  name: "getOrganizationBrandingPolicies",
  scope: "",
  description: "List the branding policies of an organization",
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

export const createOrganizationBrandingPolicyTool: Tool = {
  name: "createOrganizationBrandingPolicy",
  scope: "",
  description: "Add a new branding policy to an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the Dashboard branding policy."
      },
      "body-enabled": {
        type: "boolean",
        description: "Boolean indicating whether this policy is enabled."
      },
      "body-adminSettings": {
        type: "object",
        description: "Settings for describing which kinds of admins this policy applies to."
      },
      "body-helpSettings": {
        type: "object",
        description: "      Settings for describing the modifications to various Help page features. Each property in this object accepts one of      'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show      the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on      Dashboard; see the documentation for each property to see the allowed values. Each property defaults to 'default or inherit' when not provided."
      },
      "body-customLogo": {
        type: "object",
        description: "Properties describing the custom logo attached to the branding policy."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationBrandingPoliciesPrioritiesTool: Tool = {
  name: "getOrganizationBrandingPoliciesPriorities",
  scope: "",
  description: "Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).",
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

export const updateOrganizationBrandingPoliciesPrioritiesTool: Tool = {
  name: "updateOrganizationBrandingPoliciesPriorities",
  scope: "",
  description: "Update the priority ordering of an organization's branding policies.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-brandingPolicyIds": {
        type: "array",
        description: "      An ordered list of branding policy IDs that determines the priority order of how to apply the policies"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationBrandingPolicyTool: Tool = {
  name: "getOrganizationBrandingPolicy",
  scope: "",
  description: "Return a branding policy",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-brandingPolicyId": {
        type: "string",
        description: "Branding policy ID"
      }
    },
    required: ["path-organizationId","path-brandingPolicyId"],
  },
};

export const updateOrganizationBrandingPolicyTool: Tool = {
  name: "updateOrganizationBrandingPolicy",
  scope: "",
  description: "Update a branding policy",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-brandingPolicyId": {
        type: "string",
        description: "Branding policy ID"
      },
      "body-name": {
        type: "string",
        description: "Name of the Dashboard branding policy."
      },
      "body-enabled": {
        type: "boolean",
        description: "Boolean indicating whether this policy is enabled."
      },
      "body-adminSettings": {
        type: "object",
        description: "Settings for describing which kinds of admins this policy applies to."
      },
      "body-helpSettings": {
        type: "object",
        description: "      Settings for describing the modifications to various Help page features. Each property in this object accepts one of      'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show      the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on      Dashboard; see the documentation for each property to see the allowed values."
      },
      "body-customLogo": {
        type: "object",
        description: "Properties describing the custom logo attached to the branding policy."
      }
    },
    required: ["path-organizationId","path-brandingPolicyId"],
  },
};

export const deleteOrganizationBrandingPolicyTool: Tool = {
  name: "deleteOrganizationBrandingPolicy",
  scope: "",
  description: "Delete a branding policy",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-brandingPolicyId": {
        type: "string",
        description: "Branding policy ID"
      }
    },
    required: ["path-organizationId","path-brandingPolicyId"],
  },
};

export const getOrganizationCertificatesTool: Tool = {
  name: "getOrganizationCertificates",
  scope: "",
  description: "Gets all or specific certificates for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-certificateIds": {
        type: "array",
        description: "List of ids for specific certificate retrieval"
      },
      "query-certManagedBy": {
        type: "array",
        description: "List of cert managed by types"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationCertificatesImportTool: Tool = {
  name: "createOrganizationCertificatesImport",
  scope: "",
  description: "Import certificate for this organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-managedBy": {
        type: "string",
        description: "Certificate managed by type [system_manager, mr, encrypted_syslog]"
      },
      "body-contents": {
        type: "string",
        description: "Certificate content in Base64 encoded string format"
      },
      "body-description": {
        type: "string",
        description: "Certificate description"
      }
    },
    required: ["path-organizationId","body-managedBy","body-contents","body-description"],
  },
};

export const deleteOrganizationCertificateTool: Tool = {
  name: "deleteOrganizationCertificate",
  scope: "",
  description: "Delete a certificate for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-certificateId": {
        type: "string",
        description: "Certificate ID"
      }
    },
    required: ["path-organizationId","path-certificateId"],
  },
};

export const updateOrganizationCertificateTool: Tool = {
  name: "updateOrganizationCertificate",
  scope: "",
  description: "Update a certificate's description for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-certificateId": {
        type: "string",
        description: "Certificate ID"
      },
      "body-description": {
        type: "string",
        description: "Description of a certificate that already exist in your org"
      }
    },
    required: ["path-organizationId","path-certificateId"],
  },
};

export const getOrganizationCertificateContentsTool: Tool = {
  name: "getOrganizationCertificateContents",
  scope: "",
  description: "Download the trusted certificate by certificate id.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-certificateId": {
        type: "string",
        description: "Certificate ID"
      },
      "query-chainId": {
        type: "string",
        description: "chainId that represent which certificate chain is being requested"
      }
    },
    required: ["path-organizationId","path-certificateId"],
  },
};

export const claimIntoOrganizationTool: Tool = {
  name: "claimIntoOrganization",
  scope: "",
  description: "Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. This operation can be used up to ten times within a single five minute window.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-orders": {
        type: "array",
        description: "The numbers of the orders that should be claimed"
      },
      "body-serials": {
        type: "array",
        description: "The serials of the devices that should be claimed"
      },
      "body-licenses": {
        type: "array",
        description: "The licenses that should be claimed"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationClientsBandwidthUsageHistoryTool: Tool = {
  name: "getOrganizationClientsBandwidthUsageHistory",
  scope: "",
  description: "Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationClientsOverviewTool: Tool = {
  name: "getOrganizationClientsOverview",
  scope: "",
  description: "Return summary information around client data usage (in kb) across the given organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationClientsSearchTool: Tool = {
  name: "getOrganizationClientsSearch",
  scope: "",
  description: "Return the client details in an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 5. Default is 5."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-mac": {
        type: "string",
        description: "The MAC address of the client. Required."
      }
    },
    required: ["path-organizationId","query-mac"],
  },
};

export const cloneOrganizationTool: Tool = {
  name: "cloneOrganization",
  scope: "",
  description: "Create a new organization by cloning the addressed organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new organization"
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const getOrganizationCloudConnectivityRequirementsTool: Tool = {
  name: "getOrganizationCloudConnectivityRequirements",
  scope: "",
  description: "List of source/destination traffic rules",
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

export const getOrganizationConfigTemplatesTool: Tool = {
  name: "getOrganizationConfigTemplates",
  scope: "",
  description: "List the configuration templates for this organization",
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

export const createOrganizationConfigTemplateTool: Tool = {
  name: "createOrganizationConfigTemplate",
  scope: "",
  description: "Create a new configuration template",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the configuration template"
      },
      "body-timeZone": {
        type: "string",
        description: "The timezone of the configuration template. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article</a>. Not applicable if copying from existing network or template"
      },
      "body-copyFromNetworkId": {
        type: "string",
        description: "The ID of the network or config template to copy configuration from"
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const getOrganizationConfigTemplateTool: Tool = {
  name: "getOrganizationConfigTemplate",
  scope: "",
  description: "Return a single configuration template",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-configTemplateId": {
        type: "string",
        description: "Config template ID"
      }
    },
    required: ["path-organizationId","path-configTemplateId"],
  },
};

export const updateOrganizationConfigTemplateTool: Tool = {
  name: "updateOrganizationConfigTemplate",
  scope: "",
  description: "Update a configuration template",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-configTemplateId": {
        type: "string",
        description: "Config template ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the configuration template"
      },
      "body-timeZone": {
        type: "string",
        description: "The timezone of the configuration template. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>"
      }
    },
    required: ["path-organizationId","path-configTemplateId"],
  },
};

export const deleteOrganizationConfigTemplateTool: Tool = {
  name: "deleteOrganizationConfigTemplate",
  scope: "",
  description: "Remove a configuration template",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-configTemplateId": {
        type: "string",
        description: "Config template ID"
      }
    },
    required: ["path-organizationId","path-configTemplateId"],
  },
};

export const getOrganizationConfigurationChangesTool: Tool = {
  name: "getOrganizationConfigurationChanges",
  scope: "",
  description: "View the Change Log for your organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 365 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 365 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkId": {
        type: "string",
        description: "Filters on the given network"
      },
      "query-adminId": {
        type: "string",
        description: "Filters on the given Admin"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesTool: Tool = {
  name: "getOrganizationDevices",
  scope: "",
  description: "List the devices in an organization that have been assigned to a network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-configurationUpdatedAfter": {
        type: "string",
        description: "Filter results by whether or not the device's configuration has been updated after the given timestamp"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter devices by network."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor, wirelessController, and secureConnect."
      },
      "query-tags": {
        type: "array",
        description: "Optional parameter to filter devices by tags."
      },
      "query-tagsFilterType": {
        type: "string",
        description: "Optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      },
      "query-name": {
        type: "string",
        description: "Optional parameter to filter devices by name. All returned devices will have a name that contains the search term or is an exact match."
      },
      "query-mac": {
        type: "string",
        description: "Optional parameter to filter devices by MAC address. All returned devices will have a MAC address that contains the search term or is an exact match."
      },
      "query-serial": {
        type: "string",
        description: "Optional parameter to filter devices by serial number. All returned devices will have a serial number that contains the search term or is an exact match."
      },
      "query-model": {
        type: "string",
        description: "Optional parameter to filter devices by model. All returned devices will have a model that contains the search term or is an exact match."
      },
      "query-macs": {
        type: "array",
        description: "Optional parameter to filter devices by one or more MAC addresses. All returned devices will have a MAC address that is an exact match."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter devices by one or more serial numbers. All returned devices will have a serial number that is an exact match."
      },
      "query-sensorMetrics": {
        type: "array",
        description: "Optional parameter to filter devices by the metrics that they provide. Only applies to sensor devices."
      },
      "query-sensorAlertProfileIds": {
        type: "array",
        description: "Optional parameter to filter devices by the alert profiles that are bound to them. Only applies to sensor devices."
      },
      "query-models": {
        type: "array",
        description: "Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesAvailabilitiesTool: Tool = {
  name: "getOrganizationDevicesAvailabilities",
  scope: "",
  description: "List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. Valid types are wireless, appliance, switch, camera, cellularGateway, sensor, wirelessController, and campusGateway"
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches."
      },
      "query-tags": {
        type: "array",
        description: "An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches."
      },
      "query-tagsFilterType": {
        type: "string",
        description: "An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      },
      "query-statuses": {
        type: "array",
        description: "Optional parameter to filter device availabilities by device status. This filter uses multiple exact matches."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesAvailabilitiesChangeHistoryTool: Tool = {
  name: "getOrganizationDevicesAvailabilitiesChangeHistory",
  scope: "",
  description: "List the availability history information for devices in an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
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
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by device serial numbers"
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by device product types"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by network IDs"
      },
      "query-statuses": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by device statuses"
      },
      "query-categories": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by categories of status, reboot, or upgrade"
      },
      "query-networkTags": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by network tags. The filtering is case-sensitive. If tags are included, 'networkTagsFilterType' should also be included (see below)."
      },
      "query-networkTagsFilterType": {
        type: "string",
        description: "An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      },
      "query-deviceTags": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by device tags. The filtering is case-sensitive. If tags are included, 'deviceTagsFilterType' should also be included (see below)."
      },
      "query-deviceTagsFilterType": {
        type: "string",
        description: "An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesBootsHistoryTool: Tool = {
  name: "getOrganizationDevicesBootsHistory",
  scope: "",
  description: "Returns the history of device boots in reverse chronological order (most recent first). Currently supported for MS devices only.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 730 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 730 days."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device by device serial numbers. This filter uses multiple exact matches."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor, wirelessController, and secureConnect."
      },
      "query-mostRecentPerDevice": {
        type: "boolean",
        description: "If true, only the most recent boot for each device is returned."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of entries. Order options are 'ascending' and 'descending'. Default is 'descending'."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationDevicesControllerMigrationTool: Tool = {
  name: "createOrganizationDevicesControllerMigration",
  scope: "",
  description: "Migrate devices to another controller or management mode",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-serials": {
        type: "array",
        description: "A list of Meraki Serials to migrate"
      },
      "body-target": {
        type: "string",
        description: "The controller or management mode to which the devices will be migrated"
      }
    },
    required: ["path-organizationId","body-serials","body-target"],
  },
};

export const getOrganizationDevicesControllerMigrationsTool: Tool = {
  name: "getOrganizationDevicesControllerMigrations",
  scope: "",
  description: "Retrieve device migration statuses in an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-serials": {
        type: "array",
        description: "A list of Meraki Serials for which to retrieve migrations"
      },
      "query-networkIds": {
        type: "array",
        description: "Filter device migrations by network IDs"
      },
      "query-target": {
        type: "string",
        description: "Filter device migrations by target destination"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId"],
  },
};

export const bulkUpdateOrganizationDevicesDetailsTool: Tool = {
  name: "bulkUpdateOrganizationDevicesDetails",
  scope: "",
  description: "Updating device details (currently only used for Catalyst devices)",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-serials": {
        type: "array",
        description: "A list of serials of devices to update"
      },
      "body-details": {
        type: "array",
        description: "An array of details"
      }
    },
    required: ["path-organizationId","body-serials","body-details"],
  },
};

export const getOrganizationDevicesOverviewByModelTool: Tool = {
  name: "getOrganizationDevicesOverviewByModel",
  scope: "",
  description: "Lists the count for each device model",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-models": {
        type: "array",
        description: "Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter devices by networkId."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter device by device product types. This filter uses multiple exact matches."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesPacketCaptureCapturesTool: Tool = {
  name: "getOrganizationDevicesPacketCaptureCaptures",
  scope: "",
  description: "List Packet Captures",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-captureIds": {
        type: "array",
        description: "Return the packet captures of the specified capture ids"
      },
      "query-networkIds": {
        type: "array",
        description: "Return the packet captures of the specified network(s)"
      },
      "query-serials": {
        type: "array",
        description: "Return the packet captures of the specified device(s)"
      },
      "query-process": {
        type: "array",
        description: "Return the packet captures of the specified process"
      },
      "query-captureStatus": {
        type: "array",
        description: "Return the packet captures of the specified capture status"
      },
      "query-name": {
        type: "array",
        description: "Return the packet captures matching the specified name"
      },
      "query-clientMac": {
        type: "array",
        description: "Return the packet captures matching the specified client macs"
      },
      "query-notes": {
        type: "string",
        description: "Return the packet captures matching the specified notes"
      },
      "query-deviceName": {
        type: "string",
        description: "Return the packet captures matching the specified device name"
      },
      "query-adminName": {
        type: "string",
        description: "Return the packet captures matching the admin name"
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
      "query-sortOrder": {
        type: "string",
        description: "Sorted order of entries. Order options are 'ascending' and 'descending'. Default is 'descending'."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationDevicesPacketCaptureCaptureTool: Tool = {
  name: "createOrganizationDevicesPacketCaptureCapture",
  scope: "",
  description: "Perform a packet capture on a device and store in Meraki Cloud. Only a single switch may be chosen per request, while multiple access points are allowed at once.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-serials": {
        type: "array",
        description: "The serial(s) of the device(s)"
      },
      "body-name": {
        type: "string",
        description: "Name of packet capture file"
      },
      "body-outputType": {
        type: "string",
        description: "Output type of packet capture file. Possible values: text, pcap, cloudshark, or upload_to_cloud"
      },
      "body-destination": {
        type: "string",
        description: "Destination of packet capture file. Possible values: [upload_to_cloud]"
      },
      "body-ports": {
        type: "string",
        description: "Ports of packet capture file, comma-separated"
      },
      "body-notes": {
        type: "string",
        description: "Reason for taking the packet capture"
      },
      "body-duration": {
        type: "integer",
        description: "Duration in seconds of packet capture"
      },
      "body-filterExpression": {
        type: "string",
        description: "Filter expression for packet capture"
      },
      "body-interface": {
        type: "string",
        description: "Interface of the device"
      }
    },
    required: ["path-organizationId","body-serials","body-name"],
  },
};

export const bulkOrganizationDevicesPacketCaptureCapturesCreateTool: Tool = {
  name: "bulkOrganizationDevicesPacketCaptureCapturesCreate",
  scope: "",
  description: "Perform a packet capture on multiple devices and store in Meraki Cloud.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-devices": {
        type: "array",
        description: "Device details (maximum of 20 devices allowed)"
      },
      "body-notes": {
        type: "string",
        description: "Reason for capture"
      },
      "body-duration": {
        type: "integer",
        description: "Duration of the capture in seconds"
      },
      "body-filterExpression": {
        type: "string",
        description: "Filter expression for the capture"
      },
      "body-name": {
        type: "string",
        description: "Name of packet capture file"
      }
    },
    required: ["path-organizationId","body-devices","body-name"],
  },
};

export const bulkOrganizationDevicesPacketCaptureCapturesDeleteTool: Tool = {
  name: "bulkOrganizationDevicesPacketCaptureCapturesDelete",
  scope: "",
  description: "BulkDelete packet captures from cloud",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-captureIds": {
        type: "array",
        description: "Delete the packet captures of the specified capture ids"
      }
    },
    required: ["path-organizationId","body-captureIds"],
  },
};

export const deleteOrganizationDevicesPacketCaptureCaptureTool: Tool = {
  name: "deleteOrganizationDevicesPacketCaptureCapture",
  scope: "",
  description: "Delete a single packet capture from cloud using captureId",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-captureId": {
        type: "string",
        description: "Capture ID"
      }
    },
    required: ["path-organizationId","path-captureId"],
  },
};

export const generateOrganizationDevicesPacketCaptureCaptureDownloadUrlTool: Tool = {
  name: "generateOrganizationDevicesPacketCaptureCaptureDownloadUrl",
  scope: "",
  description: "Get presigned download URL for given packet capture id",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-captureId": {
        type: "string",
        description: "Capture ID"
      }
    },
    required: ["path-organizationId","path-captureId"],
  },
};

export const stopOrganizationDevicesPacketCaptureCaptureTool: Tool = {
  name: "stopOrganizationDevicesPacketCaptureCapture",
  scope: "",
  description: "Stop a specific packet capture (not supported for Catalyst devices)",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-captureId": {
        type: "string",
        description: "Capture ID"
      },
      "body-serials": {
        type: "array",
        description: "The serial(s) of the device(s) to stop the capture on"
      }
    },
    required: ["path-organizationId","path-captureId","body-serials"],
  },
};

export const getOrganizationDevicesPacketCaptureSchedulesTool: Tool = {
  name: "getOrganizationDevicesPacketCaptureSchedules",
  scope: "",
  description: "List the Packet Capture Schedules",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-scheduleIds": {
        type: "array",
        description: "Return the packet captures schedules of the specified packet capture schedule ids"
      },
      "query-networkIds": {
        type: "array",
        description: "Return the scheduled packet captures of the specified network(s)"
      },
      "query-deviceIds": {
        type: "array",
        description: "Return the scheduled packet captures of the specified device(s)"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationDevicesPacketCaptureScheduleTool: Tool = {
  name: "createOrganizationDevicesPacketCaptureSchedule",
  scope: "",
  description: "Create a schedule for packet capture",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-devices": {
        type: "array",
        description: "device details"
      },
      "body-name": {
        type: "string",
        description: "Name of the packet capture file"
      },
      "body-notes": {
        type: "string",
        description: "Reason for capture"
      },
      "body-duration": {
        type: "integer",
        description: "Duration of the capture in seconds"
      },
      "body-filterExpression": {
        type: "string",
        description: "Filter expression for the capture"
      },
      "body-enabled": {
        type: "boolean",
        description: "Enable or disable the schedule"
      },
      "body-schedule": {
        type: "object",
        description: "Schedule details"
      }
    },
    required: ["path-organizationId","body-devices"],
  },
};

export const bulkOrganizationDevicesPacketCaptureSchedulesDeleteTool: Tool = {
  name: "bulkOrganizationDevicesPacketCaptureSchedulesDelete",
  scope: "",
  description: "Delete packet capture schedules",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-scheduleIds": {
        type: "array",
        description: "Delete the packet capture schedules of the specified schedule ids"
      }
    },
    required: ["path-organizationId","body-scheduleIds"],
  },
};

export const reorderOrganizationDevicesPacketCaptureSchedulesTool: Tool = {
  name: "reorderOrganizationDevicesPacketCaptureSchedules",
  scope: "",
  description: "Bulk update priorities of pcap schedules",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-order": {
        type: "array",
        description: "Array of schedule IDs and their priorities to reorder."
      }
    },
    required: ["path-organizationId","body-order"],
  },
};

export const updateOrganizationDevicesPacketCaptureScheduleTool: Tool = {
  name: "updateOrganizationDevicesPacketCaptureSchedule",
  scope: "",
  description: "Update a schedule for packet capture",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-scheduleId": {
        type: "string",
        description: "Schedule ID"
      },
      "body-devices": {
        type: "array",
        description: "device details"
      },
      "body-name": {
        type: "string",
        description: "Name of the packet capture file"
      },
      "body-notes": {
        type: "string",
        description: "Reason for capture"
      },
      "body-duration": {
        type: "integer",
        description: "Duration of the capture in seconds"
      },
      "body-filterExpression": {
        type: "string",
        description: "Filter expression for the capture"
      },
      "body-enabled": {
        type: "boolean",
        description: "Enable or disable the schedule"
      },
      "body-schedule": {
        type: "object",
        description: "Schedule details"
      }
    },
    required: ["path-organizationId","path-scheduleId","body-devices"],
  },
};

export const deleteOrganizationDevicesPacketCaptureScheduleTool: Tool = {
  name: "deleteOrganizationDevicesPacketCaptureSchedule",
  scope: "",
  description: "Delete schedule from cloud",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-scheduleId": {
        type: "string",
        description: "Schedule ID"
      },
      "body-scheduleId": {
        type: "string",
        description: "Delete the capture schedules of the specified capture schedule id"
      }
    },
    required: ["path-organizationId","path-scheduleId","body-scheduleId"],
  },
};

export const tasksOrganizationDevicesPacketCaptureTool: Tool = {
  name: "tasksOrganizationDevicesPacketCapture",
  scope: "",
  description: "Enqueues a task for a specific packet capture. This endpoint has a sustained rate limit of one request every 60 seconds.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-packetId": {
        type: "string",
        description: "Packet ID"
      },
      "body-networkId": {
        type: "string",
        description: "Optional parameter to validate authorization by network access"
      },
      "body-task": {
        type: "string",
        description: "Type of task to enqueue. It can be one of: [\"analysis\", \"chain_of_thought\", \"summary\", \"highlighting\", \"title\"]"
      }
    },
    required: ["path-organizationId","path-packetId","body-task"],
  },
};

export const getOrganizationDevicesPacketCaptureTaskTool: Tool = {
  name: "getOrganizationDevicesPacketCaptureTask",
  scope: "",
  description: "Retrieves packet capture analysis result for a specific packet capture task.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-packetId": {
        type: "string",
        description: "Packet ID"
      },
      "path-id": {
        type: "string",
        description: "ID"
      },
      "query-networkId": {
        type: "string",
        description: "Optional parameter to validate authorization by network access"
      }
    },
    required: ["path-organizationId","path-packetId","path-id"],
  },
};

export const getOrganizationDevicesPowerModulesStatusesByDeviceTool: Tool = {
  name: "getOrganizationDevicesPowerModulesStatusesByDevice",
  scope: "",
  description: "List the most recent status information for power modules in rackmount MX and MS devices that support them. The data returned by this endpoint is updated every 5 minutes.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches."
      },
      "query-tags": {
        type: "array",
        description: "An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches."
      },
      "query-tagsFilterType": {
        type: "string",
        description: "An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesProvisioningStatusesTool: Tool = {
  name: "getOrganizationDevicesProvisioningStatuses",
  scope: "",
  description: "List the provisioning statuses information for devices in an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter device by network ID. This filter uses multiple exact matches."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter device by device product types. This filter uses multiple exact matches."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device by device serial numbers. This filter uses multiple exact matches."
      },
      "query-status": {
        type: "string",
        description: "An optional parameter to filter devices by the provisioning status. Accepted statuses: unprovisioned, incomplete, complete."
      },
      "query-tags": {
        type: "array",
        description: "An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches."
      },
      "query-tagsFilterType": {
        type: "string",
        description: "An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesStatusesTool: Tool = {
  name: "getOrganizationDevicesStatuses",
  scope: "",
  description: "List the status of every Meraki device in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter devices by network ids."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter devices by serials."
      },
      "query-statuses": {
        type: "array",
        description: "Optional parameter to filter devices by statuses. Valid statuses are [\"online\", \"alerting\", \"offline\", \"dormant\"]."
      },
      "query-productTypes": {
        type: "array",
        description: "An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor, wirelessController, and secureConnect."
      },
      "query-models": {
        type: "array",
        description: "Optional parameter to filter devices by models."
      },
      "query-tags": {
        type: "array",
        description: "An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below)."
      },
      "query-tagsFilterType": {
        type: "string",
        description: "An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      },
      "query-configurationUpdatedAfter": {
        type: "string",
        description: "Optional parameter to filter results by whether or not the device's configuration has been updated after the given timestamp"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesStatusesOverviewTool: Tool = {
  name: "getOrganizationDevicesStatusesOverview",
  scope: "",
  description: "Return an overview of current device statuses",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-productTypes": {
        type: "array",
        description: "An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor, wirelessController, and secureConnect."
      },
      "query-networkIds": {
        type: "array",
        description: "An optional parameter to filter device statuses by network."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesSyslogServersRolesByNetworkTool: Tool = {
  name: "getOrganizationDevicesSyslogServersRolesByNetwork",
  scope: "",
  description: "Returns roles that can be assigned to a syslog server for a given network.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 30. Default is 10."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "IDs of the networks for which to fetch valid syslog server roles"
      }
    },
    required: ["path-organizationId","query-networkIds"],
  },
};

export const getOrganizationDevicesSystemMemoryUsageHistoryByIntervalTool: Tool = {
  name: "getOrganizationDevicesSystemMemoryUsageHistoryByInterval",
  scope: "",
  description: "Return the memory utilization history in kB for devices in the organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 20. Default is 10."
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
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 2 hours. If interval is provided, the timespan will be autocalculated."
      },
      "query-interval": {
        type: "integer",
        description: "The time interval in seconds for returned data. The valid intervals are: 300, 1200, 3600, 14400. The default is 300. Interval is calculated if time params are provided."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter the result set by the included set of network IDs"
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device availabilities history by device serial numbers"
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor, wirelessController, and secureConnect."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesUplinksAddressesByDeviceTool: Tool = {
  name: "getOrganizationDevicesUplinksAddressesByDevice",
  scope: "",
  description: "List the current uplink addresses for devices in an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter device uplinks by network ID. This filter uses multiple exact matches."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter device uplinks by device product types. This filter uses multiple exact matches."
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches."
      },
      "query-tags": {
        type: "array",
        description: "An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches."
      },
      "query-tagsFilterType": {
        type: "string",
        description: "An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationDevicesUplinksLossAndLatencyTool: Tool = {
  name: "getOrganizationDevicesUplinksLossAndLatency",
  scope: "",
  description: "Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 60 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes."
      },
      "query-uplink": {
        type: "string",
        description: "Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, wan3, cellular. Default will return all uplinks."
      },
      "query-ip": {
        type: "string",
        description: "Optional filter for a specific destination IP. Default will return all destination IPs."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationEarlyAccessFeaturesTool: Tool = {
  name: "getOrganizationEarlyAccessFeatures",
  scope: "",
  description: "List the available early access features for organization",
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

export const getOrganizationEarlyAccessFeaturesOptInsTool: Tool = {
  name: "getOrganizationEarlyAccessFeaturesOptIns",
  scope: "",
  description: "List the early access feature opt-ins for an organization",
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

export const createOrganizationEarlyAccessFeaturesOptInTool: Tool = {
  name: "createOrganizationEarlyAccessFeaturesOptIn",
  scope: "",
  description: "Create a new early access feature opt-in for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-shortName": {
        type: "string",
        description: "Short name of the early access feature"
      },
      "body-limitScopeToNetworks": {
        type: "array",
        description: "A list of network IDs to apply the opt-in to"
      }
    },
    required: ["path-organizationId","body-shortName"],
  },
};

export const getOrganizationEarlyAccessFeaturesOptInTool: Tool = {
  name: "getOrganizationEarlyAccessFeaturesOptIn",
  scope: "",
  description: "Show an early access feature opt-in for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-optInId": {
        type: "string",
        description: "Opt in ID"
      }
    },
    required: ["path-organizationId","path-optInId"],
  },
};

export const updateOrganizationEarlyAccessFeaturesOptInTool: Tool = {
  name: "updateOrganizationEarlyAccessFeaturesOptIn",
  scope: "",
  description: "Update an early access feature opt-in for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-optInId": {
        type: "string",
        description: "Opt in ID"
      },
      "body-limitScopeToNetworks": {
        type: "array",
        description: "A list of network IDs to apply the opt-in to"
      }
    },
    required: ["path-organizationId","path-optInId"],
  },
};

export const deleteOrganizationEarlyAccessFeaturesOptInTool: Tool = {
  name: "deleteOrganizationEarlyAccessFeaturesOptIn",
  scope: "",
  description: "Delete an early access feature opt-in",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-optInId": {
        type: "string",
        description: "Opt in ID"
      }
    },
    required: ["path-organizationId","path-optInId"],
  },
};

export const updateOrganizationExtensionsSdwanmanagerInterconnectTool: Tool = {
  name: "updateOrganizationExtensionsSdwanmanagerInterconnect",
  scope: "",
  description: "Update name and status of an Interconnect",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-interconnectId": {
        type: "string",
        description: "Interconnect ID"
      },
      "body-name": {
        type: "string",
        description: "Interconnect name"
      },
      "body-status": {
        type: "string",
        description: "Interconnect status"
      }
    },
    required: ["path-organizationId","path-interconnectId","body-name","body-status"],
  },
};

export const getOrganizationExtensionsThousandEyesNetworksTool: Tool = {
  name: "getOrganizationExtensionsThousandEyesNetworks",
  scope: "",
  description: "List the ThousandEyes agent configurations under this organization. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.",
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

export const createOrganizationExtensionsThousandEyesNetworkTool: Tool = {
  name: "createOrganizationExtensionsThousandEyesNetwork",
  scope: "",
  description: "Add a ThousandEyes agent for this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Whether or not the ThousandEyes agent is enabled for the network."
      },
      "body-networkId": {
        type: "string",
        description: "Network that will have the ThousandEyes agent installed on."
      },
      "body-tests": {
        type: "array",
        description: "An array of tests to be created"
      }
    },
    required: ["path-organizationId","body-enabled","body-networkId"],
  },
};

export const getOrganizationExtensionsThousandEyesNetworksSupportedTool: Tool = {
  name: "getOrganizationExtensionsThousandEyesNetworksSupported",
  scope: "",
  description: "List all the networks eligible for ThousandEyes agent activation under this organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-agentInstalled": {
        type: "boolean",
        description: "Set to true to get only networks with installed ThousandEyes agent; set to false to get networks without agents."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationExtensionsThousandEyesNetworkTool: Tool = {
  name: "getOrganizationExtensionsThousandEyesNetwork",
  scope: "",
  description: "List the ThousandEyes agent configuration under this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-networkId": {
        type: "string",
        description: "Network ID"
      }
    },
    required: ["path-organizationId","path-networkId"],
  },
};

export const updateOrganizationExtensionsThousandEyesNetworkTool: Tool = {
  name: "updateOrganizationExtensionsThousandEyesNetwork",
  scope: "",
  description: "Update a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-networkId": {
        type: "string",
        description: "Network ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Whether or not the ThousandEyes agent is enabled for the network."
      }
    },
    required: ["path-organizationId","path-networkId","body-enabled"],
  },
};

export const deleteOrganizationExtensionsThousandEyesNetworkTool: Tool = {
  name: "deleteOrganizationExtensionsThousandEyesNetwork",
  scope: "",
  description: "Delete a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-networkId": {
        type: "string",
        description: "Network ID"
      }
    },
    required: ["path-organizationId","path-networkId"],
  },
};

export const createOrganizationExtensionsThousandEyesTestTool: Tool = {
  name: "createOrganizationExtensionsThousandEyesTest",
  scope: "",
  description: "Create a ThousandEyes test based on a provided test template. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-tests": {
        type: "array",
        description: "An array of tests to be created"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationFirmwareUpgradesTool: Tool = {
  name: "getOrganizationFirmwareUpgrades",
  scope: "",
  description: "Get firmware upgrade information for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
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
        type: "array",
        description: "Optional parameter to filter the upgrade by status."
      },
      "query-productTypes": {
        type: "array",
        description: "Optional parameter to filter the upgrade by product type."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationFirmwareUpgradesByDeviceTool: Tool = {
  name: "getOrganizationFirmwareUpgradesByDevice",
  scope: "",
  description: "Get firmware upgrade status for the filtered devices. This endpoint currently only supports Meraki switches.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter by network"
      },
      "query-serials": {
        type: "array",
        description: "Optional parameter to filter by serial number.  All returned devices will have a serial number that is an exact match."
      },
      "query-macs": {
        type: "array",
        description: "Optional parameter to filter by one or more MAC addresses belonging to devices. All devices returned belong to MAC addresses that are an exact match."
      },
      "query-firmwareUpgradeBatchIds": {
        type: "array",
        description: "Optional parameter to filter by firmware upgrade batch ids."
      },
      "query-upgradeStatuses": {
        type: "array",
        description: "Optional parameter to filter by firmware upgrade statuses."
      },
      "query-currentUpgradesOnly": {
        type: "boolean",
        description: "Optional parameter to filter to only current or pending upgrade statuses"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationFloorPlansAutoLocateDevicesTool: Tool = {
  name: "getOrganizationFloorPlansAutoLocateDevices",
  scope: "",
  description: "List auto locate details for each device in your organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 10000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter devices by one or more network IDs"
      },
      "query-floorPlanIds": {
        type: "array",
        description: "Optional parameter to filter devices by one or more floorplan IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationFloorPlansAutoLocateStatusesTool: Tool = {
  name: "getOrganizationFloorPlansAutoLocateStatuses",
  scope: "",
  description: "List the status of auto locate for each floorplan in your organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 10000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter floorplans by one or more network IDs"
      },
      "query-floorPlanIds": {
        type: "array",
        description: "Optional parameter to filter floorplans by one or more floorplan IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationIntegrationsXdrNetworksTool: Tool = {
  name: "getOrganizationIntegrationsXdrNetworks",
  scope: "",
  description: "Returns the networks in the organization that have XDR enabled",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "Optional parameter to filter the results by network IDs"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 100. Default is 20."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId"],
  },
};

export const disableOrganizationIntegrationsXdrNetworksTool: Tool = {
  name: "disableOrganizationIntegrationsXdrNetworks",
  scope: "",
  description: "Disable XDR on networks",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-networks": {
        type: "array",
        description: "List containing the network ID and the product type to disable XDR on"
      }
    },
    required: ["path-organizationId","body-networks"],
  },
};

export const enableOrganizationIntegrationsXdrNetworksTool: Tool = {
  name: "enableOrganizationIntegrationsXdrNetworks",
  scope: "",
  description: "Enable XDR on networks",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-networks": {
        type: "array",
        description: "List containing the network ID and the product type to enable XDR on"
      }
    },
    required: ["path-organizationId","body-networks"],
  },
};

export const claimIntoOrganizationInventoryTool: Tool = {
  name: "claimIntoOrganizationInventory",
  scope: "",
  description: "Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. This operation can be used up to ten times within a single five minute window.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-orders": {
        type: "array",
        description: "The numbers of the orders that should be claimed"
      },
      "body-serials": {
        type: "array",
        description: "The serials of the devices that should be claimed"
      },
      "body-licenses": {
        type: "array",
        description: "The licenses that should be claimed"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationInventoryDevicesTool: Tool = {
  name: "getOrganizationInventoryDevices",
  scope: "",
  description: "Return the device inventory for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-usedState": {
        type: "string",
        description: "Filter results by used or unused inventory. Accepted values are 'used' or 'unused'."
      },
      "query-search": {
        type: "string",
        description: "Search for devices in inventory based on serial number, mac address, or model."
      },
      "query-macs": {
        type: "array",
        description: "Search for devices in inventory based on mac addresses."
      },
      "query-networkIds": {
        type: "array",
        description: "Search for devices in inventory based on network ids. Use explicit 'null' value to get available devices only."
      },
      "query-serials": {
        type: "array",
        description: "Search for devices in inventory based on serials."
      },
      "query-models": {
        type: "array",
        description: "Search for devices in inventory based on model."
      },
      "query-orderNumbers": {
        type: "array",
        description: "Search for devices in inventory based on order numbers."
      },
      "query-tags": {
        type: "array",
        description: "Filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below)."
      },
      "query-tagsFilterType": {
        type: "string",
        description: "To use with 'tags' parameter, to filter devices which contain ANY or ALL given tags. Accepted values are 'withAnyTags' or 'withAllTags', default is 'withAnyTags'."
      },
      "query-productTypes": {
        type: "array",
        description: "Filter devices by product type. Accepted values are appliance, camera, cellularGateway, secureConnect, sensor, switch, systemsManager, wireless, and wirelessController."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationInventoryDevicesSwapsBulkTool: Tool = {
  name: "createOrganizationInventoryDevicesSwapsBulk",
  scope: "",
  description: "Swap the devices identified by devices.old with a devices.new, then perform the :afterAction on the devices.old.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-swaps": {
        type: "array",
        description: "List of replacments to perform"
      }
    },
    required: ["path-organizationId","body-swaps"],
  },
};

export const getOrganizationInventoryDevicesSwapsBulkTool: Tool = {
  name: "getOrganizationInventoryDevicesSwapsBulk",
  scope: "",
  description: "List of device swaps for a given request ID ({id}).",
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

export const getOrganizationInventoryDeviceTool: Tool = {
  name: "getOrganizationInventoryDevice",
  scope: "",
  description: "Return a single device from the inventory of an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-serial": {
        type: "string",
        description: "Serial"
      }
    },
    required: ["path-organizationId","path-serial"],
  },
};

export const createOrganizationInventoryOnboardingCloudMonitoringExportEventTool: Tool = {
  name: "createOrganizationInventoryOnboardingCloudMonitoringExportEvent",
  scope: "",
  description: "Imports event logs related to the onboarding app into elastisearch",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-logEvent": {
        type: "string",
        description: "The type of log event this is recording, e.g. download or opening a banner"
      },
      "body-timestamp": {
        type: "integer",
        description: "A JavaScript UTC datetime stamp for when the even occurred"
      },
      "body-targetOS": {
        type: "string",
        description: "The name of the onboarding distro being downloaded"
      },
      "body-request": {
        type: "string",
        description: "Used to describe if this event was the result of a redirect. E.g. a query param if an info banner is being used"
      }
    },
    required: ["path-organizationId","body-logEvent","body-timestamp"],
  },
};

export const createOrganizationInventoryOnboardingCloudMonitoringImportTool: Tool = {
  name: "createOrganizationInventoryOnboardingCloudMonitoringImport",
  scope: "",
  description: "Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-devices": {
        type: "array",
        description: "A set of device imports to commit"
      }
    },
    required: ["path-organizationId","body-devices"],
  },
};

export const getOrganizationInventoryOnboardingCloudMonitoringImportsTool: Tool = {
  name: "getOrganizationInventoryOnboardingCloudMonitoringImports",
  scope: "",
  description: "Check the status of a committed Import operation",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-importIds": {
        type: "array",
        description: "import ids from an imports"
      }
    },
    required: ["path-organizationId","query-importIds"],
  },
};

export const getOrganizationInventoryOnboardingCloudMonitoringNetworksTool: Tool = {
  name: "getOrganizationInventoryOnboardingCloudMonitoringNetworks",
  scope: "",
  description: "Returns list of networks eligible for adding cloud monitored device",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-deviceType": {
        type: "string",
        description: "Device Type switch or wireless controller"
      },
      "query-search": {
        type: "string",
        description: "Optional parameter to search on network name"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId","query-deviceType"],
  },
};

export const createOrganizationInventoryOnboardingCloudMonitoringPrepareTool: Tool = {
  name: "createOrganizationInventoryOnboardingCloudMonitoringPrepare",
  scope: "",
  description: "Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-devices": {
        type: "array",
        description: "A set of devices to import (or update)"
      },
      "body-options": {
        type: "object",
        description: "Additional options for the import"
      }
    },
    required: ["path-organizationId","body-devices"],
  },
};

export const claimOrganizationInventoryOrdersTool: Tool = {
  name: "claimOrganizationInventoryOrders",
  scope: "",
  description: "Claim an order by the secure unique order claim number, the order claim id",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-claimId": {
        type: "string",
        description: "The unique order claim id"
      },
      "body-subscriptions": {
        type: "array",
        description: "The individual subscriptions to claim"
      }
    },
    required: ["path-organizationId","body-claimId"],
  },
};

export const previewOrganizationInventoryOrdersTool: Tool = {
  name: "previewOrganizationInventoryOrders",
  scope: "",
  description: "Preview the results and status of an order claim by the secure order id",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-claimId": {
        type: "string",
        description: "The unique order claim id"
      }
    },
    required: ["path-organizationId","body-claimId"],
  },
};

export const releaseFromOrganizationInventoryTool: Tool = {
  name: "releaseFromOrganizationInventory",
  scope: "",
  description: "Release a list of claimed devices from an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-serials": {
        type: "array",
        description: "Serials of the devices that should be released"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationLicensesTool: Tool = {
  name: "getOrganizationLicenses",
  scope: "",
  description: "List the licenses for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-deviceSerial": {
        type: "string",
        description: "Filter the licenses to those assigned to a particular device. Returned in the same order that they are queued to the device."
      },
      "query-networkId": {
        type: "string",
        description: "Filter the licenses to those assigned in a particular network"
      },
      "query-state": {
        type: "string",
        description: "Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive'"
      }
    },
    required: ["path-organizationId"],
  },
};

export const assignOrganizationLicensesSeatsTool: Tool = {
  name: "assignOrganizationLicensesSeats",
  scope: "",
  description: "Assign SM seats to a network. This will increase the managed SM device limit of the network",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-licenseId": {
        type: "string",
        description: "The ID of the SM license to assign seats from"
      },
      "body-networkId": {
        type: "string",
        description: "The ID of the SM network to assign the seats to"
      },
      "body-seatCount": {
        type: "integer",
        description: "The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license"
      }
    },
    required: ["path-organizationId","body-licenseId","body-networkId","body-seatCount"],
  },
};

export const moveOrganizationLicensesTool: Tool = {
  name: "moveOrganizationLicenses",
  scope: "",
  description: "Move licenses to another organization. This will also move any devices that the licenses are assigned to",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-destOrganizationId": {
        type: "string",
        description: "The ID of the organization to move the licenses to"
      },
      "body-licenseIds": {
        type: "array",
        description: "A list of IDs of licenses to move to the new organization"
      }
    },
    required: ["path-organizationId","body-destOrganizationId","body-licenseIds"],
  },
};

export const moveOrganizationLicensesSeatsTool: Tool = {
  name: "moveOrganizationLicensesSeats",
  scope: "",
  description: "Move SM seats to another organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-destOrganizationId": {
        type: "string",
        description: "The ID of the organization to move the SM seats to"
      },
      "body-licenseId": {
        type: "string",
        description: "The ID of the SM license to move the seats from"
      },
      "body-seatCount": {
        type: "integer",
        description: "The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license"
      }
    },
    required: ["path-organizationId","body-destOrganizationId","body-licenseId","body-seatCount"],
  },
};

export const getOrganizationLicensesOverviewTool: Tool = {
  name: "getOrganizationLicensesOverview",
  scope: "",
  description: "Return an overview of the license state for an organization",
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

export const renewOrganizationLicensesSeatsTool: Tool = {
  name: "renewOrganizationLicensesSeats",
  scope: "",
  description: "Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-licenseIdToRenew": {
        type: "string",
        description: "The ID of the SM license to renew. This license must already be assigned to an SM network"
      },
      "body-unusedLicenseId": {
        type: "string",
        description: "The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'"
      }
    },
    required: ["path-organizationId","body-licenseIdToRenew","body-unusedLicenseId"],
  },
};

export const getOrganizationLicenseTool: Tool = {
  name: "getOrganizationLicense",
  scope: "",
  description: "Display a license",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-licenseId": {
        type: "string",
        description: "License ID"
      }
    },
    required: ["path-organizationId","path-licenseId"],
  },
};

export const updateOrganizationLicenseTool: Tool = {
  name: "updateOrganizationLicense",
  scope: "",
  description: "Update a license",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-licenseId": {
        type: "string",
        description: "License ID"
      },
      "body-deviceSerial": {
        type: "string",
        description: "The serial number of the device to assign this license to. Set this to  null to unassign the license. If a different license is already active on the device, this parameter will control queueing/dequeuing this license."
      }
    },
    required: ["path-organizationId","path-licenseId"],
  },
};

export const getOrganizationLoginSecurityTool: Tool = {
  name: "getOrganizationLoginSecurity",
  scope: "",
  description: "Returns the login security settings for an organization.",
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

export const updateOrganizationLoginSecurityTool: Tool = {
  name: "updateOrganizationLoginSecurity",
  scope: "",
  description: "Update the login security settings for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-enforcePasswordExpiration": {
        type: "boolean",
        description: "Boolean indicating whether users are forced to change their password every X number of days."
      },
      "body-passwordExpirationDays": {
        type: "integer",
        description: "Number of days after which users will be forced to change their password."
      },
      "body-enforceDifferentPasswords": {
        type: "boolean",
        description: "Boolean indicating whether users, when setting a new password, are forced to choose a new password that is different from any past passwords."
      },
      "body-numDifferentPasswords": {
        type: "integer",
        description: "Number of recent passwords that new password must be distinct from."
      },
      "body-enforceStrongPasswords": {
        type: "boolean",
        description: "Deprecated. Values of 'false' are always ignored."
      },
      "body-minimumPasswordLength": {
        type: "integer",
        description: "Minimum number of characters required in admins' passwords."
      },
      "body-enforceAccountLockout": {
        type: "boolean",
        description: "Boolean indicating whether users' Dashboard accounts will be locked out after a specified number of consecutive failed login attempts."
      },
      "body-accountLockoutAttempts": {
        type: "integer",
        description: "Number of consecutive failed login attempts after which users' accounts will be locked."
      },
      "body-enforceIdleTimeout": {
        type: "boolean",
        description: "Boolean indicating whether users will be logged out after being idle for the specified number of minutes."
      },
      "body-idleTimeoutMinutes": {
        type: "integer",
        description: "Number of minutes users can remain idle before being logged out of their accounts."
      },
      "body-enforceTwoFactorAuth": {
        type: "boolean",
        description: "Boolean indicating whether users in this organization will be required to use an extra verification code when logging in to Dashboard. This code will be sent to their mobile phone via SMS, or can be generated by the authenticator application."
      },
      "body-enforceLoginIpRanges": {
        type: "boolean",
        description: "Boolean indicating whether organization will restrict access to Dashboard (including the API) from certain IP addresses."
      },
      "body-loginIpRanges": {
        type: "array",
        description: "List of acceptable IP ranges. Entries can be single IP addresses, IP address ranges, and CIDR subnets."
      },
      "body-apiAuthentication": {
        type: "object",
        description: "Details for indicating whether organization will restrict access to API (but not Dashboard) to certain IP addresses."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationNetworksTool: Tool = {
  name: "getOrganizationNetworks",
  scope: "",
  description: "List the networks that the user has privileges on in an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-configTemplateId": {
        type: "string",
        description: "An optional parameter that is the ID of a config template. Will return all networks bound to that template."
      },
      "query-isBoundToConfigTemplate": {
        type: "boolean",
        description: "An optional parameter to filter config template bound networks. If configTemplateId is set, this cannot be false."
      },
      "query-tags": {
        type: "array",
        description: "An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below)."
      },
      "query-tagsFilterType": {
        type: "string",
        description: "An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected."
      },
      "query-productTypes": {
        type: "array",
        description: "An optional parameter to filter networks by product type. Results will have at least one of the included product types."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationNetworkTool: Tool = {
  name: "createOrganizationNetwork",
  scope: "",
  description: "Create a network",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new network"
      },
      "body-productTypes": {
        type: "array",
        description: "The product type(s) of the new network. If more than one type is included, the network will be a combined network."
      },
      "body-tags": {
        type: "array",
        description: "A list of tags to be applied to the network"
      },
      "body-timeZone": {
        type: "string",
        description: "The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>"
      },
      "body-copyFromNetworkId": {
        type: "string",
        description: "The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly."
      },
      "body-notes": {
        type: "string",
        description: "Add any notes or additional information about this network here."
      }
    },
    required: ["path-organizationId","body-name","body-productTypes"],
  },
};

export const combineOrganizationNetworksTool: Tool = {
  name: "combineOrganizationNetworks",
  scope: "",
  description: "Combine multiple networks into a single network",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the combined network"
      },
      "body-networkIds": {
        type: "array",
        description: "A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network"
      },
      "body-enrollmentString": {
        type: "string",
        description: "A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted."
      }
    },
    required: ["path-organizationId","body-name","body-networkIds"],
  },
};

export const createNetworkMoveTool: Tool = {
  name: "createNetworkMove",
  scope: "",
  description: "Move networks from one organization to another. Note that as this is an Early Access feature it may result in unexpected behavior and is best tested with non-critical networks. For more information and caveats around network move limitations see <a href=\"https://documentation.meraki.com/General_Administration/Organizations_and_Networks/Network_Portability\">Network Portability</a>",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-target": {
        type: "string",
        description: "ID of the organization to which the network is moving."
      },
      "body-networkId": {
        type: "string",
        description: "Network ID of the network to move."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getNetworkMovesTool: Tool = {
  name: "getNetworkMoves",
  scope: "",
  description: "Return a list of network move operations in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkMoveId": {
        type: "string",
        description: "A network move operation id to include. If not specified, all network moves will be returned."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getNetworkMoveTool: Tool = {
  name: "getNetworkMove",
  scope: "",
  description: "Return details on the specified network move operation",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-networkMoveId": {
        type: "string",
        description: "Network move ID"
      }
    },
    required: ["path-organizationId","path-networkMoveId"],
  },
};

export const getOrganizationOpenapiSpecTool: Tool = {
  name: "getOrganizationOpenapiSpec",
  scope: "",
  description: "Return the OpenAPI Specification of the organization's API documentation in JSON",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-version": {
        type: "integer",
        description: "OpenAPI Specification version to return. Default is 2"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationPoliciesAssignmentsByClientTool: Tool = {
  name: "getOrganizationPoliciesAssignmentsByClient",
  scope: "",
  description: "Get policies for all clients with policies",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50."
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
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
      },
      "query-includeUndetectedClients": {
        type: "boolean",
        description: "Include provisioned clients that have not associated to the network."
      },
      "query-networkIds": {
        type: "array",
        description: "Network Ids"
      }
    },
    required: ["path-organizationId","query-networkIds"],
  },
};

export const getOrganizationPolicyObjectsTool: Tool = {
  name: "getOrganizationPolicyObjects",
  scope: "",
  description: "Lists Policy Objects belonging to the organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 10 - 5000. Default is 5000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationPolicyObjectTool: Tool = {
  name: "createOrganizationPolicyObject",
  scope: "",
  description: "Creates a new Policy Object.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "Name of a policy object, unique within the organization (alphanumeric, space, dash, or underscore characters only)"
      },
      "body-category": {
        type: "string",
        description: "Category of a policy object (one of: adaptivePolicy, network)"
      },
      "body-type": {
        type: "string",
        description: "Type of a policy object (one of: adaptivePolicyIpv4Cidr, cidr, fqdn, ipAndMask)"
      },
      "body-cidr": {
        type: "string",
        description: "CIDR Value of a policy object (e.g. 10.11.12.1/24\")"
      },
      "body-fqdn": {
        type: "string",
        description: "Fully qualified domain name of policy object (e.g. \"example.com\")"
      },
      "body-mask": {
        type: "string",
        description: "Mask of a policy object (e.g. \"255.255.0.0\")"
      },
      "body-ip": {
        type: "string",
        description: "IP Address of a policy object (e.g. \"1.2.3.4\")"
      },
      "body-groupIds": {
        type: "array",
        description: "The IDs of policy object groups the policy object belongs to"
      }
    },
    required: ["path-organizationId","body-name","body-category","body-type"],
  },
};

export const getOrganizationPolicyObjectsGroupsTool: Tool = {
  name: "getOrganizationPolicyObjectsGroups",
  scope: "",
  description: "Lists Policy Object Groups belonging to the organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 10 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationPolicyObjectsGroupTool: Tool = {
  name: "createOrganizationPolicyObjectsGroup",
  scope: "",
  description: "Creates a new Policy Object Group.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "A name for the group of network addresses, unique within the organization (alphanumeric, space, dash, or underscore characters only)"
      },
      "body-category": {
        type: "string",
        description: "Category of a policy object group (one of: NetworkObjectGroup, GeoLocationGroup, PortObjectGroup, ApplicationGroup)"
      },
      "body-objectIds": {
        type: "array",
        description: "A list of Policy Object ID's that this NetworkObjectGroup should be associated to (note: these ID's will replace the existing associated Policy Objects)"
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const getOrganizationPolicyObjectsGroupTool: Tool = {
  name: "getOrganizationPolicyObjectsGroup",
  scope: "",
  description: "Shows details of a Policy Object Group.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-policyObjectGroupId": {
        type: "string",
        description: "Policy object group ID"
      }
    },
    required: ["path-organizationId","path-policyObjectGroupId"],
  },
};

export const updateOrganizationPolicyObjectsGroupTool: Tool = {
  name: "updateOrganizationPolicyObjectsGroup",
  scope: "",
  description: "Updates a Policy Object Group.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-policyObjectGroupId": {
        type: "string",
        description: "Policy object group ID"
      },
      "body-name": {
        type: "string",
        description: "A name for the group of network addresses, unique within the organization (alphanumeric, space, dash, or underscore characters only)"
      },
      "body-objectIds": {
        type: "array",
        description: "A list of Policy Object ID's that this NetworkObjectGroup should be associated to (note: these ID's will replace the existing associated Policy Objects)"
      }
    },
    required: ["path-organizationId","path-policyObjectGroupId"],
  },
};

export const deleteOrganizationPolicyObjectsGroupTool: Tool = {
  name: "deleteOrganizationPolicyObjectsGroup",
  scope: "",
  description: "Deletes a Policy Object Group.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-policyObjectGroupId": {
        type: "string",
        description: "Policy object group ID"
      }
    },
    required: ["path-organizationId","path-policyObjectGroupId"],
  },
};

export const getOrganizationPolicyObjectTool: Tool = {
  name: "getOrganizationPolicyObject",
  scope: "",
  description: "Shows details of a Policy Object.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-policyObjectId": {
        type: "string",
        description: "Policy object ID"
      }
    },
    required: ["path-organizationId","path-policyObjectId"],
  },
};

export const updateOrganizationPolicyObjectTool: Tool = {
  name: "updateOrganizationPolicyObject",
  scope: "",
  description: "Updates a Policy Object.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-policyObjectId": {
        type: "string",
        description: "Policy object ID"
      },
      "body-name": {
        type: "string",
        description: "Name of a policy object, unique within the organization (alphanumeric, space, dash, or underscore characters only)"
      },
      "body-cidr": {
        type: "string",
        description: "CIDR Value of a policy object (e.g. 10.11.12.1/24\")"
      },
      "body-fqdn": {
        type: "string",
        description: "Fully qualified domain name of policy object (e.g. \"example.com\")"
      },
      "body-mask": {
        type: "string",
        description: "Mask of a policy object (e.g. \"255.255.0.0\")"
      },
      "body-ip": {
        type: "string",
        description: "IP Address of a policy object (e.g. \"1.2.3.4\")"
      },
      "body-groupIds": {
        type: "array",
        description: "The IDs of policy object groups the policy object belongs to"
      }
    },
    required: ["path-organizationId","path-policyObjectId"],
  },
};

export const deleteOrganizationPolicyObjectTool: Tool = {
  name: "deleteOrganizationPolicyObject",
  scope: "",
  description: "Deletes a Policy Object.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-policyObjectId": {
        type: "string",
        description: "Policy object ID"
      }
    },
    required: ["path-organizationId","path-policyObjectId"],
  },
};

export const getOrganizationSamlTool: Tool = {
  name: "getOrganizationSaml",
  scope: "",
  description: "Returns the SAML SSO enabled settings for an organization.",
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

export const updateOrganizationSamlTool: Tool = {
  name: "updateOrganizationSaml",
  scope: "",
  description: "Updates the SAML SSO enabled settings for an organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-enabled": {
        type: "boolean",
        description: "Boolean for updating SAML SSO enabled settings."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSamlIdpsTool: Tool = {
  name: "getOrganizationSamlIdps",
  scope: "",
  description: "List the SAML IdPs in your organization.",
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

export const createOrganizationSamlIdpTool: Tool = {
  name: "createOrganizationSamlIdp",
  scope: "",
  description: "Create a SAML IdP for your organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-x509certSha1Fingerprint": {
        type: "string",
        description: "Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation."
      },
      "body-sloLogoutUrl": {
        type: "string",
        description: "Dashboard will redirect users to this URL when they sign out."
      }
    },
    required: ["path-organizationId","body-x509certSha1Fingerprint"],
  },
};

export const updateOrganizationSamlIdpTool: Tool = {
  name: "updateOrganizationSamlIdp",
  scope: "",
  description: "Update a SAML IdP in your organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-idpId": {
        type: "string",
        description: "Idp ID"
      },
      "body-x509certSha1Fingerprint": {
        type: "string",
        description: "Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation."
      },
      "body-sloLogoutUrl": {
        type: "string",
        description: "Dashboard will redirect users to this URL when they sign out."
      }
    },
    required: ["path-organizationId","path-idpId"],
  },
};

export const getOrganizationSamlIdpTool: Tool = {
  name: "getOrganizationSamlIdp",
  scope: "",
  description: "Get a SAML IdP from your organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-idpId": {
        type: "string",
        description: "Idp ID"
      }
    },
    required: ["path-organizationId","path-idpId"],
  },
};

export const deleteOrganizationSamlIdpTool: Tool = {
  name: "deleteOrganizationSamlIdp",
  scope: "",
  description: "Remove a SAML IdP in your organization.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-idpId": {
        type: "string",
        description: "Idp ID"
      }
    },
    required: ["path-organizationId","path-idpId"],
  },
};

export const getOrganizationSamlRolesTool: Tool = {
  name: "getOrganizationSamlRoles",
  scope: "",
  description: "List the SAML roles for this organization",
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

export const createOrganizationSamlRoleTool: Tool = {
  name: "createOrganizationSamlRole",
  scope: "",
  description: "Create a SAML role",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-role": {
        type: "string",
        description: "The role of the SAML administrator"
      },
      "body-orgAccess": {
        type: "string",
        description: "The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'"
      },
      "body-tags": {
        type: "array",
        description: "The list of tags that the SAML administrator has privileges on"
      },
      "body-networks": {
        type: "array",
        description: "The list of networks that the SAML administrator has privileges on"
      }
    },
    required: ["path-organizationId","body-role","body-orgAccess"],
  },
};

export const getOrganizationSamlRoleTool: Tool = {
  name: "getOrganizationSamlRole",
  scope: "",
  description: "Return a SAML role",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-samlRoleId": {
        type: "string",
        description: "Saml role ID"
      }
    },
    required: ["path-organizationId","path-samlRoleId"],
  },
};

export const updateOrganizationSamlRoleTool: Tool = {
  name: "updateOrganizationSamlRole",
  scope: "",
  description: "Update a SAML role",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-samlRoleId": {
        type: "string",
        description: "Saml role ID"
      },
      "body-role": {
        type: "string",
        description: "The role of the SAML administrator"
      },
      "body-orgAccess": {
        type: "string",
        description: "The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'"
      },
      "body-tags": {
        type: "array",
        description: "The list of tags that the SAML administrator has privileges on"
      },
      "body-networks": {
        type: "array",
        description: "The list of networks that the SAML administrator has privileges on"
      }
    },
    required: ["path-organizationId","path-samlRoleId"],
  },
};

export const deleteOrganizationSamlRoleTool: Tool = {
  name: "deleteOrganizationSamlRole",
  scope: "",
  description: "Remove a SAML role",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-samlRoleId": {
        type: "string",
        description: "Saml role ID"
      }
    },
    required: ["path-organizationId","path-samlRoleId"],
  },
};

export const getOrganizationSaseConnectivityEnrollableNetworksTool: Tool = {
  name: "getOrganizationSaseConnectivityEnrollableNetworks",
  scope: "",
  description: "List of MX networks or templates that can be enrolled into Secure Access",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 5."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId"],
  },
};

export const deleteOrganizationSaseConnectivitySitesBulkDetachTool: Tool = {
  name: "deleteOrganizationSaseConnectivitySitesBulkDetach",
  scope: "",
  description: "Detach sites in this organization from Secure Access. This will remove the sites from Secure Access.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-merakiEnrollments": {
        type: "array",
        description: "List of Secure Access sites to be detached."
      },
      "body-callback": {
        type: "object",
        description: "Details for the callback. Please include either an httpServerId OR url and sharedSecret"
      }
    },
    required: ["path-organizationId"],
  },
};

export const createOrganizationSaseConnectivitySitesBulkEnrollTool: Tool = {
  name: "createOrganizationSaseConnectivitySitesBulkEnroll",
  scope: "",
  description: "Enroll sites in this organization to Secure Access. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-merakiEnrollments": {
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

export const getOrganizationSaseConnectivitySiteTool: Tool = {
  name: "getOrganizationSaseConnectivitySite",
  scope: "",
  description: "Get details of a site in this organization",
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
      "query-id": {
        type: "string",
        description: "Network ID of the site to fetch details for"
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const getOrganizationSnmpTool: Tool = {
  name: "getOrganizationSnmp",
  scope: "",
  description: "Return the SNMP settings for an organization",
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

export const updateOrganizationSnmpTool: Tool = {
  name: "updateOrganizationSnmp",
  scope: "",
  description: "Update the SNMP settings for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-v2cEnabled": {
        type: "boolean",
        description: "Boolean indicating whether SNMP version 2c is enabled for the organization."
      },
      "body-v3Enabled": {
        type: "boolean",
        description: "Boolean indicating whether SNMP version 3 is enabled for the organization."
      },
      "body-v3AuthMode": {
        type: "string",
        description: "The SNMP version 3 authentication mode. Can be either 'MD5' or 'SHA'."
      },
      "body-v3AuthPass": {
        type: "string",
        description: "The SNMP version 3 authentication password. Must be at least 8 characters if specified."
      },
      "body-v3PrivMode": {
        type: "string",
        description: "The SNMP version 3 privacy mode. Can be either 'DES' or 'AES128'."
      },
      "body-v3PrivPass": {
        type: "string",
        description: "The SNMP version 3 privacy password. Must be at least 8 characters if specified."
      },
      "body-peerIps": {
        type: "array",
        description: "The list of IPv4 addresses that are allowed to access the SNMP server."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSnmpTrapsByNetworkTool: Tool = {
  name: "getOrganizationSnmpTrapsByNetwork",
  scope: "",
  description: "Retrieve the SNMP trap configuration for the networks in an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkIds": {
        type: "array",
        description: "An optional parameter to filter SNMP trap configs by network IDs"
      }
    },
    required: ["path-organizationId"],
  },
};

export const deleteOrganizationSpacesIntegrationRemoveTool: Tool = {
  name: "deleteOrganizationSpacesIntegrationRemove",
  scope: "",
  description: "Remove the Spaces integration from Meraki",
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

export const createOrganizationSpacesIntegrationRemoveTool: Tool = {
  name: "createOrganizationSpacesIntegrationRemove",
  scope: "",
  description: "Remove the Spaces integration from Meraki",
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

export const getOrganizationSplashAssetTool: Tool = {
  name: "getOrganizationSplashAsset",
  scope: "",
  description: "Get a Splash Theme Asset",
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

export const deleteOrganizationSplashAssetTool: Tool = {
  name: "deleteOrganizationSplashAsset",
  scope: "",
  description: "Delete a Splash Theme Asset",
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

export const getOrganizationSplashThemesTool: Tool = {
  name: "getOrganizationSplashThemes",
  scope: "",
  description: "List Splash Themes",
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

export const createOrganizationSplashThemeTool: Tool = {
  name: "createOrganizationSplashTheme",
  scope: "",
  description: "Create a Splash Theme",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "theme name"
      },
      "body-baseTheme": {
        type: "string",
        description: "base theme id "
      }
    },
    required: ["path-organizationId"],
  },
};

export const deleteOrganizationSplashThemeTool: Tool = {
  name: "deleteOrganizationSplashTheme",
  scope: "",
  description: "Delete a Splash Theme",
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

export const createOrganizationSplashThemeAssetTool: Tool = {
  name: "createOrganizationSplashThemeAsset",
  scope: "",
  description: "Create a Splash Theme Asset",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-themeIdentifier": {
        type: "string",
        description: "Theme identifier"
      },
      "body-name": {
        type: "string",
        description: "File name. Will overwrite files with same name."
      },
      "body-content": {
        type: "string",
        description: "a file containing the asset content"
      }
    },
    required: ["path-organizationId","path-themeIdentifier"],
  },
};

export const getOrganizationSummaryTopAppliancesByUtilizationTool: Tool = {
  name: "getOrganizationSummaryTopAppliancesByUtilization",
  scope: "",
  description: "Return the top 10 appliances sorted by utilization over given time range.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 25 minutes and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopApplicationsByUsageTool: Tool = {
  name: "getOrganizationSummaryTopApplicationsByUsage",
  scope: "",
  description: "Return the top applications sorted by data usage over given time range. Default unit is megabytes.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-device": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 25 minutes and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopApplicationsCategoriesByUsageTool: Tool = {
  name: "getOrganizationSummaryTopApplicationsCategoriesByUsage",
  scope: "",
  description: "Return the top application categories sorted by data usage over given time range. Default unit is megabytes.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 25 minutes and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopClientsByUsageTool: Tool = {
  name: "getOrganizationSummaryTopClientsByUsage",
  scope: "",
  description: "Return metrics for organization's top 10 clients by data usage (in mb) over given time range.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 8 hours and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopClientsManufacturersByUsageTool: Tool = {
  name: "getOrganizationSummaryTopClientsManufacturersByUsage",
  scope: "",
  description: "Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopDevicesByUsageTool: Tool = {
  name: "getOrganizationSummaryTopDevicesByUsage",
  scope: "",
  description: "Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 8 hours and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopDevicesModelsByUsageTool: Tool = {
  name: "getOrganizationSummaryTopDevicesModelsByUsage",
  scope: "",
  description: "Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 8 hours and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopNetworksByStatusTool: Tool = {
  name: "getOrganizationSummaryTopNetworksByStatus",
  scope: "",
  description: "List the client and status overview information for the networks in an organization. Usage is measured in kilobytes and from the last seven days.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 5000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopSsidsByUsageTool: Tool = {
  name: "getOrganizationSummaryTopSsidsByUsage",
  scope: "",
  description: "Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 8 hours and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSummaryTopSwitchesByEnergyUsageTool: Tool = {
  name: "getOrganizationSummaryTopSwitchesByEnergyUsage",
  scope: "",
  description: "Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-networkTag": {
        type: "string",
        description: "Match result to an exact network tag"
      },
      "query-deviceTag": {
        type: "string",
        description: "Match result to an exact device tag"
      },
      "query-networkId": {
        type: "string",
        description: "Match result to an exact network id"
      },
      "query-quantity": {
        type: "integer",
        description: "Set number of desired results to return. Default is 10."
      },
      "query-ssidName": {
        type: "string",
        description: "Filter results by ssid name"
      },
      "query-usageUplink": {
        type: "string",
        description: "Filter results by usage uplink"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 186 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be greater than or equal to 25 minutes and be less than or equal to 186 days. The default is 1 day."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationSupportSalesRepresentativesTool: Tool = {
  name: "getOrganizationSupportSalesRepresentatives",
  scope: "",
  description: "Returns the organization's sales representatives",
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

export const getOrganizationUplinksStatusesTool: Tool = {
  name: "getOrganizationUplinksStatuses",
  scope: "",
  description: "List the uplink status of every Meraki MX, MG and Z series devices in the organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-networkIds": {
        type: "array",
        description: "A list of network IDs. The returned devices will be filtered to only include these networks."
      },
      "query-serials": {
        type: "array",
        description: "A list of serial numbers. The returned devices will be filtered to only include these serials."
      },
      "query-iccids": {
        type: "array",
        description: "A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs."
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWebhooksAlertTypesTool: Tool = {
  name: "getOrganizationWebhooksAlertTypes",
  scope: "",
  description: "Return a list of alert types to be used with managing webhook alerts",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-productType": {
        type: "string",
        description: "Filter sample alerts to a specific product type"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWebhooksCallbacksStatusTool: Tool = {
  name: "getOrganizationWebhooksCallbacksStatus",
  scope: "",
  description: "Return the status of an API callback",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-callbackId": {
        type: "string",
        description: "Callback ID"
      }
    },
    required: ["path-organizationId","path-callbackId"],
  },
};

export const getOrganizationWebhooksHttpServersTool: Tool = {
  name: "getOrganizationWebhooksHttpServers",
  scope: "",
  description: "List the HTTP servers for this organization",
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

export const createOrganizationWebhooksHttpServerTool: Tool = {
  name: "createOrganizationWebhooksHttpServer",
  scope: "",
  description: "Add an HTTP server to an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "A name for easy reference to the HTTP server"
      },
      "body-url": {
        type: "string",
        description: "The URL of the HTTP server"
      },
      "body-sharedSecret": {
        type: "string",
        description: "A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki."
      },
      "body-payloadTemplate": {
        type: "object",
        description: "The payload template to use when posting data to the HTTP server."
      }
    },
    required: ["path-organizationId","body-name","body-url"],
  },
};

export const getOrganizationWebhooksHttpServerTool: Tool = {
  name: "getOrganizationWebhooksHttpServer",
  scope: "",
  description: "Return an HTTP server for an organization",
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

export const updateOrganizationWebhooksHttpServerTool: Tool = {
  name: "updateOrganizationWebhooksHttpServer",
  scope: "",
  description: "Update an HTTP server for an organization",
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
        description: "A name for easy reference to the HTTP server"
      },
      "body-url": {
        type: "string",
        description: "The URL of the HTTP server"
      },
      "body-sharedSecret": {
        type: "string",
        description: "A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki."
      },
      "body-payloadTemplate": {
        type: "object",
        description: "The payload template to use when posting data to the HTTP server."
      }
    },
    required: ["path-organizationId","path-id"],
  },
};

export const deleteOrganizationWebhooksHttpServerTool: Tool = {
  name: "deleteOrganizationWebhooksHttpServer",
  scope: "",
  description: "Delete an HTTP server from an organization",
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

export const getOrganizationWebhooksLogsTool: Tool = {
  name: "getOrganizationWebhooksLogs",
  scope: "",
  description: "Return the log of webhook POSTs sent",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "query-t0": {
        type: "string",
        description: "The beginning of the timespan for the data. The maximum lookback period is 90 days from today."
      },
      "query-t1": {
        type: "string",
        description: "The end of the timespan for the data. t1 can be a maximum of 31 days after t0."
      },
      "query-timespan": {
        type: "number",
        description: "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day."
      },
      "query-perPage": {
        type: "integer",
        description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50."
      },
      "query-startingAfter": {
        type: "string",
        description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-endingBefore": {
        type: "string",
        description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
      },
      "query-url": {
        type: "string",
        description: "The URL the webhook was sent to"
      }
    },
    required: ["path-organizationId"],
  },
};

export const getOrganizationWebhooksPayloadTemplatesTool: Tool = {
  name: "getOrganizationWebhooksPayloadTemplates",
  scope: "",
  description: "List the webhook payload templates for an organization",
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

export const createOrganizationWebhooksPayloadTemplateTool: Tool = {
  name: "createOrganizationWebhooksPayloadTemplate",
  scope: "",
  description: "Create a webhook payload template for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the new template"
      },
      "body-body": {
        type: "string",
        description: "The liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified."
      },
      "body-headers": {
        type: "array",
        description: "The liquid template used with the webhook headers."
      },
      "body-bodyFile": {
        type: "string",
        description: "A file containing liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified."
      },
      "body-headersFile": {
        type: "string",
        description: "A file containing the liquid template used with the webhook headers."
      },
      "body-sharing": {
        type: "object",
        description: "Information on which entities have access to the template"
      }
    },
    required: ["path-organizationId","body-name"],
  },
};

export const getOrganizationWebhooksPayloadTemplateTool: Tool = {
  name: "getOrganizationWebhooksPayloadTemplate",
  scope: "",
  description: "Get the webhook payload template for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-payloadTemplateId": {
        type: "string",
        description: "Payload template ID"
      }
    },
    required: ["path-organizationId","path-payloadTemplateId"],
  },
};

export const deleteOrganizationWebhooksPayloadTemplateTool: Tool = {
  name: "deleteOrganizationWebhooksPayloadTemplate",
  scope: "",
  description: "Destroy a webhook payload template for an organization. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-payloadTemplateId": {
        type: "string",
        description: "Payload template ID"
      }
    },
    required: ["path-organizationId","path-payloadTemplateId"],
  },
};

export const updateOrganizationWebhooksPayloadTemplateTool: Tool = {
  name: "updateOrganizationWebhooksPayloadTemplate",
  scope: "",
  description: "Update a webhook payload template for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-payloadTemplateId": {
        type: "string",
        description: "Payload template ID"
      },
      "body-name": {
        type: "string",
        description: "The name of the template"
      },
      "body-body": {
        type: "string",
        description: "The liquid template used for the body of the webhook message."
      },
      "body-headers": {
        type: "array",
        description: "The liquid template used with the webhook headers."
      },
      "body-bodyFile": {
        type: "string",
        description: "A file containing liquid template used for the body of the webhook message."
      },
      "body-headersFile": {
        type: "string",
        description: "A file containing the liquid template used with the webhook headers."
      },
      "body-sharing": {
        type: "object",
        description: "Information on which entities have access to the template"
      }
    },
    required: ["path-organizationId","path-payloadTemplateId"],
  },
};

export const createOrganizationWebhooksWebhookTestTool: Tool = {
  name: "createOrganizationWebhooksWebhookTest",
  scope: "",
  description: "Send a test webhook for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "body-url": {
        type: "string",
        description: "The URL where the test webhook will be sent"
      },
      "body-sharedSecret": {
        type: "string",
        description: "The shared secret the test webhook will send. Optional. Defaults to an empty string."
      },
      "body-payloadTemplateId": {
        type: "string",
        description: "The ID of the payload template of the test webhook. Defaults to the HTTP server's template ID if one exists for the given URL, or Generic template ID otherwise"
      },
      "body-payloadTemplateName": {
        type: "string",
        description: "The name of the payload template."
      },
      "body-alertTypeId": {
        type: "string",
        description: "The type of alert which the test webhook will send. Optional. Defaults to insight_app_outage_start."
      }
    },
    required: ["path-organizationId","body-url"],
  },
};

export const getOrganizationWebhooksWebhookTestTool: Tool = {
  name: "getOrganizationWebhooksWebhookTest",
  scope: "",
  description: "Return the status of a webhook test for an organization",
  inputSchema: {
    type: "object",
    properties: {
      "path-organizationId": {
        type: "string",
        description: "Organization ID"
      },
      "path-webhookTestId": {
        type: "string",
        description: "Webhook test ID"
      }
    },
    required: ["path-organizationId","path-webhookTestId"],
  },
};

export const organizationsTools = [
  getOrganizationsTool,
  createOrganizationTool,
  getOrganizationTool,
  updateOrganizationTool,
  deleteOrganizationTool,
  createOrganizationActionBatchTool,
  getOrganizationActionBatchesTool,
  getOrganizationActionBatchTool,
  deleteOrganizationActionBatchTool,
  updateOrganizationActionBatchTool,
  getOrganizationAdaptivePolicyAclsTool,
  createOrganizationAdaptivePolicyAclTool,
  getOrganizationAdaptivePolicyAclTool,
  updateOrganizationAdaptivePolicyAclTool,
  deleteOrganizationAdaptivePolicyAclTool,
  getOrganizationAdaptivePolicyGroupsTool,
  createOrganizationAdaptivePolicyGroupTool,
  getOrganizationAdaptivePolicyGroupTool,
  updateOrganizationAdaptivePolicyGroupTool,
  deleteOrganizationAdaptivePolicyGroupTool,
  getOrganizationAdaptivePolicyOverviewTool,
  getOrganizationAdaptivePolicyPoliciesTool,
  createOrganizationAdaptivePolicyPolicyTool,
  getOrganizationAdaptivePolicyPolicyTool,
  updateOrganizationAdaptivePolicyPolicyTool,
  deleteOrganizationAdaptivePolicyPolicyTool,
  getOrganizationAdaptivePolicySettingsTool,
  updateOrganizationAdaptivePolicySettingsTool,
  getOrganizationAdminsTool,
  createOrganizationAdminTool,
  updateOrganizationAdminTool,
  deleteOrganizationAdminTool,
  getOrganizationAlertsProfilesTool,
  createOrganizationAlertsProfileTool,
  updateOrganizationAlertsProfileTool,
  deleteOrganizationAlertsProfileTool,
  getOrganizationApiRequestsTool,
  getOrganizationApiRequestsOverviewTool,
  getOrganizationApiRequestsOverviewResponseCodesByIntervalTool,
  getOrganizationAssuranceAlertsTool,
  dismissOrganizationAssuranceAlertsTool,
  getOrganizationAssuranceAlertsOverviewTool,
  getOrganizationAssuranceAlertsOverviewByNetworkTool,
  getOrganizationAssuranceAlertsOverviewByTypeTool,
  getOrganizationAssuranceAlertsOverviewHistoricalTool,
  restoreOrganizationAssuranceAlertsTool,
  getOrganizationAssuranceAlertTool,
  getOrganizationAssuranceProductAnnouncementsTool,
  getOrganizationAuthRadiusServersTool,
  createOrganizationAuthRadiusServerTool,
  getOrganizationAuthRadiusServersAssignmentsTool,
  getOrganizationAuthRadiusServerTool,
  updateOrganizationAuthRadiusServerTool,
  deleteOrganizationAuthRadiusServerTool,
  getOrganizationBrandingPoliciesTool,
  createOrganizationBrandingPolicyTool,
  getOrganizationBrandingPoliciesPrioritiesTool,
  updateOrganizationBrandingPoliciesPrioritiesTool,
  getOrganizationBrandingPolicyTool,
  updateOrganizationBrandingPolicyTool,
  deleteOrganizationBrandingPolicyTool,
  getOrganizationCertificatesTool,
  createOrganizationCertificatesImportTool,
  deleteOrganizationCertificateTool,
  updateOrganizationCertificateTool,
  getOrganizationCertificateContentsTool,
  claimIntoOrganizationTool,
  getOrganizationClientsBandwidthUsageHistoryTool,
  getOrganizationClientsOverviewTool,
  getOrganizationClientsSearchTool,
  cloneOrganizationTool,
  getOrganizationCloudConnectivityRequirementsTool,
  getOrganizationConfigTemplatesTool,
  createOrganizationConfigTemplateTool,
  getOrganizationConfigTemplateTool,
  updateOrganizationConfigTemplateTool,
  deleteOrganizationConfigTemplateTool,
  getOrganizationConfigurationChangesTool,
  getOrganizationDevicesTool,
  getOrganizationDevicesAvailabilitiesTool,
  getOrganizationDevicesAvailabilitiesChangeHistoryTool,
  getOrganizationDevicesBootsHistoryTool,
  createOrganizationDevicesControllerMigrationTool,
  getOrganizationDevicesControllerMigrationsTool,
  bulkUpdateOrganizationDevicesDetailsTool,
  getOrganizationDevicesOverviewByModelTool,
  getOrganizationDevicesPacketCaptureCapturesTool,
  createOrganizationDevicesPacketCaptureCaptureTool,
  bulkOrganizationDevicesPacketCaptureCapturesCreateTool,
  bulkOrganizationDevicesPacketCaptureCapturesDeleteTool,
  deleteOrganizationDevicesPacketCaptureCaptureTool,
  generateOrganizationDevicesPacketCaptureCaptureDownloadUrlTool,
  stopOrganizationDevicesPacketCaptureCaptureTool,
  getOrganizationDevicesPacketCaptureSchedulesTool,
  createOrganizationDevicesPacketCaptureScheduleTool,
  bulkOrganizationDevicesPacketCaptureSchedulesDeleteTool,
  reorderOrganizationDevicesPacketCaptureSchedulesTool,
  updateOrganizationDevicesPacketCaptureScheduleTool,
  deleteOrganizationDevicesPacketCaptureScheduleTool,
  tasksOrganizationDevicesPacketCaptureTool,
  getOrganizationDevicesPacketCaptureTaskTool,
  getOrganizationDevicesPowerModulesStatusesByDeviceTool,
  getOrganizationDevicesProvisioningStatusesTool,
  getOrganizationDevicesStatusesTool,
  getOrganizationDevicesStatusesOverviewTool,
  getOrganizationDevicesSyslogServersRolesByNetworkTool,
  getOrganizationDevicesSystemMemoryUsageHistoryByIntervalTool,
  getOrganizationDevicesUplinksAddressesByDeviceTool,
  getOrganizationDevicesUplinksLossAndLatencyTool,
  getOrganizationEarlyAccessFeaturesTool,
  getOrganizationEarlyAccessFeaturesOptInsTool,
  createOrganizationEarlyAccessFeaturesOptInTool,
  getOrganizationEarlyAccessFeaturesOptInTool,
  updateOrganizationEarlyAccessFeaturesOptInTool,
  deleteOrganizationEarlyAccessFeaturesOptInTool,
  updateOrganizationExtensionsSdwanmanagerInterconnectTool,
  getOrganizationExtensionsThousandEyesNetworksTool,
  createOrganizationExtensionsThousandEyesNetworkTool,
  getOrganizationExtensionsThousandEyesNetworksSupportedTool,
  getOrganizationExtensionsThousandEyesNetworkTool,
  updateOrganizationExtensionsThousandEyesNetworkTool,
  deleteOrganizationExtensionsThousandEyesNetworkTool,
  createOrganizationExtensionsThousandEyesTestTool,
  getOrganizationFirmwareUpgradesTool,
  getOrganizationFirmwareUpgradesByDeviceTool,
  getOrganizationFloorPlansAutoLocateDevicesTool,
  getOrganizationFloorPlansAutoLocateStatusesTool,
  getOrganizationIntegrationsXdrNetworksTool,
  disableOrganizationIntegrationsXdrNetworksTool,
  enableOrganizationIntegrationsXdrNetworksTool,
  claimIntoOrganizationInventoryTool,
  getOrganizationInventoryDevicesTool,
  createOrganizationInventoryDevicesSwapsBulkTool,
  getOrganizationInventoryDevicesSwapsBulkTool,
  getOrganizationInventoryDeviceTool,
  createOrganizationInventoryOnboardingCloudMonitoringExportEventTool,
  createOrganizationInventoryOnboardingCloudMonitoringImportTool,
  getOrganizationInventoryOnboardingCloudMonitoringImportsTool,
  getOrganizationInventoryOnboardingCloudMonitoringNetworksTool,
  createOrganizationInventoryOnboardingCloudMonitoringPrepareTool,
  claimOrganizationInventoryOrdersTool,
  previewOrganizationInventoryOrdersTool,
  releaseFromOrganizationInventoryTool,
  getOrganizationLicensesTool,
  assignOrganizationLicensesSeatsTool,
  moveOrganizationLicensesTool,
  moveOrganizationLicensesSeatsTool,
  getOrganizationLicensesOverviewTool,
  renewOrganizationLicensesSeatsTool,
  getOrganizationLicenseTool,
  updateOrganizationLicenseTool,
  getOrganizationLoginSecurityTool,
  updateOrganizationLoginSecurityTool,
  getOrganizationNetworksTool,
  createOrganizationNetworkTool,
  combineOrganizationNetworksTool,
  createNetworkMoveTool,
  getNetworkMovesTool,
  getNetworkMoveTool,
  getOrganizationOpenapiSpecTool,
  getOrganizationPoliciesAssignmentsByClientTool,
  getOrganizationPolicyObjectsTool,
  createOrganizationPolicyObjectTool,
  getOrganizationPolicyObjectsGroupsTool,
  createOrganizationPolicyObjectsGroupTool,
  getOrganizationPolicyObjectsGroupTool,
  updateOrganizationPolicyObjectsGroupTool,
  deleteOrganizationPolicyObjectsGroupTool,
  getOrganizationPolicyObjectTool,
  updateOrganizationPolicyObjectTool,
  deleteOrganizationPolicyObjectTool,
  getOrganizationSamlTool,
  updateOrganizationSamlTool,
  getOrganizationSamlIdpsTool,
  createOrganizationSamlIdpTool,
  updateOrganizationSamlIdpTool,
  getOrganizationSamlIdpTool,
  deleteOrganizationSamlIdpTool,
  getOrganizationSamlRolesTool,
  createOrganizationSamlRoleTool,
  getOrganizationSamlRoleTool,
  updateOrganizationSamlRoleTool,
  deleteOrganizationSamlRoleTool,
  getOrganizationSaseConnectivityEnrollableNetworksTool,
  deleteOrganizationSaseConnectivitySitesBulkDetachTool,
  createOrganizationSaseConnectivitySitesBulkEnrollTool,
  getOrganizationSaseConnectivitySiteTool,
  getOrganizationSnmpTool,
  updateOrganizationSnmpTool,
  getOrganizationSnmpTrapsByNetworkTool,
  deleteOrganizationSpacesIntegrationRemoveTool,
  createOrganizationSpacesIntegrationRemoveTool,
  getOrganizationSplashAssetTool,
  deleteOrganizationSplashAssetTool,
  getOrganizationSplashThemesTool,
  createOrganizationSplashThemeTool,
  deleteOrganizationSplashThemeTool,
  createOrganizationSplashThemeAssetTool,
  getOrganizationSummaryTopAppliancesByUtilizationTool,
  getOrganizationSummaryTopApplicationsByUsageTool,
  getOrganizationSummaryTopApplicationsCategoriesByUsageTool,
  getOrganizationSummaryTopClientsByUsageTool,
  getOrganizationSummaryTopClientsManufacturersByUsageTool,
  getOrganizationSummaryTopDevicesByUsageTool,
  getOrganizationSummaryTopDevicesModelsByUsageTool,
  getOrganizationSummaryTopNetworksByStatusTool,
  getOrganizationSummaryTopSsidsByUsageTool,
  getOrganizationSummaryTopSwitchesByEnergyUsageTool,
  getOrganizationSupportSalesRepresentativesTool,
  getOrganizationUplinksStatusesTool,
  getOrganizationWebhooksAlertTypesTool,
  getOrganizationWebhooksCallbacksStatusTool,
  getOrganizationWebhooksHttpServersTool,
  createOrganizationWebhooksHttpServerTool,
  getOrganizationWebhooksHttpServerTool,
  updateOrganizationWebhooksHttpServerTool,
  deleteOrganizationWebhooksHttpServerTool,
  getOrganizationWebhooksLogsTool,
  getOrganizationWebhooksPayloadTemplatesTool,
  createOrganizationWebhooksPayloadTemplateTool,
  getOrganizationWebhooksPayloadTemplateTool,
  deleteOrganizationWebhooksPayloadTemplateTool,
  updateOrganizationWebhooksPayloadTemplateTool,
  createOrganizationWebhooksWebhookTestTool,
  getOrganizationWebhooksWebhookTestTool
];