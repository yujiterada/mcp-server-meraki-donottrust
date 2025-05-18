import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getAdministeredIdentitiesMeTool: Tool = {
  name: "getAdministeredIdentitiesMe",
  scope: "",
  description: "Returns the identity of the current user.",
  inputSchema: {
    type: "object",
    properties: {
    },
    required: [],
  },
};

export const getAdministeredIdentitiesMeApiKeysTool: Tool = {
  name: "getAdministeredIdentitiesMeApiKeys",
  scope: "",
  description: "List the non-sensitive metadata associated with the API keys that belong to the user",
  inputSchema: {
    type: "object",
    properties: {
    },
    required: [],
  },
};

export const generateAdministeredIdentitiesMeApiKeysTool: Tool = {
  name: "generateAdministeredIdentitiesMeApiKeys",
  scope: "",
  description: "Generates an API key for an identity. For users who have access to more than one organization, the change will take up to five minutes to propagate. If one of the organizations is currently under maintenance, the change may not propagate fully until after the maintenance has been completed.",
  inputSchema: {
    type: "object",
    properties: {
    },
    required: [],
  },
};

export const revokeAdministeredIdentitiesMeApiKeysTool: Tool = {
  name: "revokeAdministeredIdentitiesMeApiKeys",
  scope: "",
  description: "Revokes an identity's API key, using the last four characters of the key. For users who have access to more than one organization, the change will take up to five minutes to propagate. If one of the organizations is currently under maintenance, the change may not propagate fully until after the maintenance has been completed.",
  inputSchema: {
    type: "object",
    properties: {
      "path-suffix": {
        type: "string",
        description: "Suffix"
      }
    },
    required: ["path-suffix"],
  },
};

export const administeredTools = [
  getAdministeredIdentitiesMeTool,
  getAdministeredIdentitiesMeApiKeysTool,
  generateAdministeredIdentitiesMeApiKeysTool,
  revokeAdministeredIdentitiesMeApiKeysTool
];