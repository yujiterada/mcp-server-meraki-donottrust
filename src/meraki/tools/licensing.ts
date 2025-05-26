import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getAdministeredLicensingSubscriptionEntitlementsTool: Tool = {
  name: "getAdministeredLicensingSubscriptionEntitlements",
  scope: "licensing",
  description: "Retrieve the list of purchasable entitlements",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          skus: {
            type: "array",
            description: "Filter to entitlements with the specified SKUs"
          }
        }
      }
    },
    required: [""],
  },
};

export const batchAdministeredLicensingSubscriptionNetworksFeatureTiersUpdateTool: Tool = {
  name: "batchAdministeredLicensingSubscriptionNetworksFeatureTiersUpdate",
  scope: "licensing",
  description: "Batch change networks to their desired feature tier for specified product types",
  inputSchema: {
    type: "object",
    properties: {
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          items: {
            type: "array",
            description: "List of networks and corresponding product types to update. Maximum 500 networks"
          },
          isAtomic: {
            type: "boolean",
            description: "Flag to determine if the operation should act atomically"
          }
        }
      }
    },
    required: [""],
  },
};

export const getAdministeredLicensingSubscriptionSubscriptionsTool: Tool = {
  name: "getAdministeredLicensingSubscriptionSubscriptions",
  scope: "licensing",
  description: "List available subscriptions",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          subscriptionIds: {
            type: "array",
            description: "List of subscription ids to fetch"
          },
          organizationIds: {
            type: "array",
            description: "Organizations to get associated subscriptions for"
          },
          startDate: {
            type: "string",
            description: "Filter subscriptions by start date, ISO 8601 format. To filter with a range of dates, use 'startDate[<option>]=?' in the request. Accepted options include lt, gt, lte, gte."
          },
          endDate: {
            type: "string",
            description: "Filter subscriptions by end date, ISO 8601 format. To filter with a range of dates, use 'endDate[<option>]=?' in the request. Accepted options include lt, gt, lte, gte."
          },
          statuses: {
            type: "array",
            description: "List of statuses that returned subscriptions can have"
          },
          productTypes: {
            type: "array",
            description: "List of product types that returned subscriptions need to have entitlements for."
          },
          skus: {
            type: "array",
            description: "List of SKUs that returned subscriptions need to have entitlements for."
          },
          name: {
            type: "string",
            description: "Search for subscription name"
          }
        }
      }
    },
    required: ["query.organizationIds"],
  },
};

export const claimAdministeredLicensingSubscriptionSubscriptionsTool: Tool = {
  name: "claimAdministeredLicensingSubscriptionSubscriptions",
  scope: "licensing",
  description: "Claim a subscription into an organization.",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          validate: {
            type: "boolean",
            description: "Check if the provided claim key is valid and can be claimed into the organization."
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          claimKey: {
            type: "string",
            description: "The subscription's claim key"
          },
          organizationId: {
            type: "string",
            description: "The id of the organization claiming the subscription"
          },
          name: {
            type: "string",
            description: "Friendly name to identify the subscription"
          },
          description: {
            type: "string",
            description: "Extra details or notes about the subscription"
          }
        }
      }
    },
    required: ["body.claimKey, body.organizationId"],
  },
};

export const validateAdministeredLicensingSubscriptionSubscriptionsClaimKeyTool: Tool = {
  name: "validateAdministeredLicensingSubscriptionSubscriptionsClaimKey",
  scope: "licensing",
  description: "Find a subscription by claim key. Returns 400 if the key has already been claimed.",
  inputSchema: {
    type: "object",
    properties: {
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          claimKey: {
            type: "string",
            description: "The subscription's claim key"
          }
        }
      }
    },
    required: ["body.claimKey"],
  },
};

export const getAdministeredLicensingSubscriptionSubscriptionsComplianceStatusesTool: Tool = {
  name: "getAdministeredLicensingSubscriptionSubscriptionsComplianceStatu",
  scope: "licensing",
  description: "Get compliance status for requested subscriptions",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          organizationIds: {
            type: "array",
            description: "Organizations to get subscription compliance information for"
          },
          subscriptionIds: {
            type: "array",
            description: "Subscription ids"
          }
        }
      }
    },
    required: ["query.organizationIds"],
  },
};

export const bindAdministeredLicensingSubscriptionSubscriptionTool: Tool = {
  name: "bindAdministeredLicensingSubscriptionSubscription",
  scope: "licensing",
  description: "Bind networks to a subscription",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          subscriptionId: {
            type: "string",
            description: "Subscription ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          validate: {
            type: "boolean",
            description: "Check if the provided networks can be bound to the subscription. Returns any licensing problems and does not commit the results."
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          networkIds: {
            type: "array",
            description: "List of network ids to bind to the subscription"
          }
        }
      }
    },
    required: ["path.subscriptionId"],
  },
};

export const getOrganizationLicensingCotermLicensesTool: Tool = {
  name: "getOrganizationLicensingCotermLicenses",
  scope: "licensing",
  description: "List the licenses in a coterm organization",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      },
      query: {
        type: "object",
        description: "query parameters",
        properties: {
          perPage: {
            type: "integer",
            description: "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."
          },
          startingAfter: {
            type: "string",
            description: "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          endingBefore: {
            type: "string",
            description: "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it."
          },
          invalidated: {
            type: "boolean",
            description: "Filter for licenses that are invalidated"
          },
          expired: {
            type: "boolean",
            description: "Filter for licenses that are expired"
          }
        }
      }
    },
    required: ["path.organizationId"],
  },
};

export const moveOrganizationLicensingCotermLicensesTool: Tool = {
  name: "moveOrganizationLicensingCotermLicenses",
  scope: "licensing",
  description: "Moves a license to a different organization (coterm only)",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "object",
        description: "path parameters",
        properties: {
          organizationId: {
            type: "string",
            description: "Organization ID"
          }
        }
      },
      body: {
        type: "object",
        description: "body parameters",
        properties: {
          destination: {
            type: "object",
            description: "Destination data for the license move"
          },
          licenses: {
            type: "array",
            description: "The list of licenses to move"
          }
        }
      }
    },
    required: ["path.organizationId, body.destination, body.licenses"],
  },
};

export const licensingTools = [
  getAdministeredLicensingSubscriptionEntitlementsTool,
  batchAdministeredLicensingSubscriptionNetworksFeatureTiersUpdateTool,
  getAdministeredLicensingSubscriptionSubscriptionsTool,
  claimAdministeredLicensingSubscriptionSubscriptionsTool,
  validateAdministeredLicensingSubscriptionSubscriptionsClaimKeyTool,
  getAdministeredLicensingSubscriptionSubscriptionsComplianceStatusesTool,
  bindAdministeredLicensingSubscriptionSubscriptionTool,
  getOrganizationLicensingCotermLicensesTool,
  moveOrganizationLicensingCotermLicensesTool
];