// To run this script, use:
// node mcp-server-meraki-donottrust/utils/generator.js

import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH = "../src/meraki";

const SCOPES = [
  "organizations",
  "networks",
  "devices",
  "appliance",
  "camera",
  "cellularGateway",
  "insight",
  "sm",
  "switch",
  "wireless",
  "sensor",
  "administered",
  "licensing",
  "secureConnect",
  "wirelessController",
  "campusGateway"
];

// ==== TOOLS ====
const pathTree = {}
try {
  // Read the EJS template
  const toolsTemplatePath = path.join(__dirname, './generator/template/tools/tools.ejs');
  const toolsTemplate = fs.readFileSync(toolsTemplatePath, 'utf8');
  const apiTemplatePath = path.join(__dirname, './generator/template/apis/apis.ejs');
  const apiTemplate = fs.readFileSync(apiTemplatePath, 'utf8');

  // Read the API specification JSON
  const apiSpecPath = path.join(__dirname, 'api.json');
  const apiSpec = JSON.parse(fs.readFileSync(apiSpecPath, 'utf8'));

  // Create directories for the output if they don't exist
  const generatedDir = path.join(__dirname, 'generated');
  const apisDir = path.join(PATH, 'apis');
  const toolsDir = path.join(PATH, 'tools');

  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir);
  }
  if (!fs.existsSync(apisDir)) {
    fs.mkdirSync(apisDir);
  }
  if (!fs.existsSync(toolsDir)) {
    fs.mkdirSync(toolsDir);
  }

  // Group operations by scope
  const scopeOperations = {};

  // Iterate through paths in the API spec
  for (const [pathUrl, pathData] of Object.entries(apiSpec.paths)) {
    // Iterate through HTTP methods for each path
    for (const [method, methodData] of Object.entries(pathData)) {
      // Check if tags exist and the first tag is in our SCOPES array
      if (methodData.tags && methodData.tags.length > 0 && SCOPES.includes(methodData.tags[0])) {
        const scope = methodData.tags[0];

        // Initialize the array for this scope if it doesn't exist
        if (!scopeOperations[scope]) {
          scopeOperations[scope] = [];
          pathTree[scope] = [];
        }

        // Handle parameters
        const parameters = [];
        const required = [];
        if (methodData.parameters) {
          methodData.parameters.forEach(param => {
            if (param.schema) {
              Object.keys(param.schema.properties).forEach(property => {
                parameters.push({
                  name: `${param.in}-${property}`,
                  type: param.schema.properties[property].type,
                  description: param.schema.properties[property].description
                });
              });
              if (param.schema.required) {
                param.schema.required.forEach(req => required.push(`"${param.in}-${req}"`))
              }
            } else {
              if (param.required) {
                required.push(`"${param.in}-${param.name}"`)
              }
              parameters.push({
                name: `${param.in}-${param.name}`,
                type: param.type,
                description: param.description
              });
            }
          });
        }

        if (methodData.operationId.length > 64) {
          console.log(methodData.operationId.slice(0, 64))
        }

        // Add this operation to the scope's array
        scopeOperations[scope].push({
          operationId: methodData.operationId,
          name: methodData.operationId.length > 64 ? methodData.operationId.slice(0, 64) : methodData.operationId,
          description: methodData.description || methodData.summary || '',
          method: method.toUpperCase(),
          path: pathUrl.replace('{', '${params.arguments["path-').replace('}', '"]}'),
          parameters: parameters,
          required: required
        });
        pathTree[scope].push(methodData.operationId);
      }
    }
  }

  // Generate a file for each scope
  for (const [scope, operations] of Object.entries(scopeOperations)) {
    const baseFilename = scope;

    // Generate Tools file
    const toolsFilename = `${baseFilename}.ts`;
    const toolsOutputPath = path.join(toolsDir, toolsFilename);
    const toolsRendered = ejs.render(toolsTemplate, { scope: scope, data: operations });
    fs.writeFileSync(toolsOutputPath, toolsRendered);
    console.log(`Generated ${toolsOutputPath} with ${operations.length} operations`);

    //Generate APIs file
    const apisFilename = `${baseFilename}.ts`;
    const apisOutputPath = path.join(apisDir, apisFilename);
    const apisRendered = ejs.render(apiTemplate, { scope: scope, data: operations });
    fs.writeFileSync(apisOutputPath, apisRendered);
    console.log(`Generated ${apisOutputPath} with ${operations.length} operations`);
  }
} catch (error) {
  console.error('Error generating tools:', error);
}

//=== tools/index.ejs ===
try {
  // Read the EJS template
  const templatePath = path.join(__dirname, './generator/template/tools/index.ejs');
  const template = fs.readFileSync(templatePath, 'utf8');
  // Render the template with the tools data
  const renderedContent = ejs.render(template, { pathTree });

  // Write the rendered content to index.ts
  const outputPath = path.join(__dirname, `${PATH}/tools/index.ts`);
  fs.writeFileSync(outputPath, renderedContent, 'utf8');

  console.log('Tool generation completed successfully');
} catch (error) {
  console.error('Error generating tools:', error);
}

//=== apis/index.ejs ===
try {
  // Read the EJS template
  const templatePath = path.join(__dirname, './generator/template/apis/index.ejs');
  const template = fs.readFileSync(templatePath, 'utf8');
  // Render the template with the tools data
  const renderedContent = ejs.render(template, { scopes: SCOPES });

  // Write the rendered content to index.ts
  const outputPath = path.join(__dirname, `${PATH}/apis/index.ts`);
  fs.writeFileSync(outputPath, renderedContent, 'utf8');

  console.log('APIs generation completed successfully');
} catch (error) {
  console.error('Error generating APIs:', error);
}