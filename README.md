# Meraki MCP Server DONOTTRUST

This Model Context Protocol (MCP) server enables interaction with the Meraki Dashboard API for LLMs, allowing for seamless integration of Meraki network management capabilities within an AI assistant's conversational interface.

## Warning

Do not use if your organization prohibits you or you do not feel comfortable sending data to an AI assistant. This tool will send sensitive information such as serial numbers, hostnames, MAC addresses, and other information obtained through Meraki Dashboard APIs.

## Environment

- node v23.7.0
- npm v10.9.2
- Meraki Dashboard API key
- Claude Desktop App

## Building the MCP

1. Clone this repository:
```bash
git clone git@github.com:yujiterada/mcp-server-meraki-donottrust.git
cd mcp-server-meraki-donottrust
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.sample .env
```

4. Edit the `.env` file:
   - Set your `MERAKI_DASHBOARD_API_KEY` from your Meraki Dashboard
   - Configure API endpoint scopes by setting the following variables to `true` or `false`:
      - `ADMINISTERED_API_ENABLED`
      - `APPLIANCE_API_ENABLED`
      - `CAMERA_API_ENABLED`
      - `CAMPUS_GATEWAY_API_ENABLED`
      - `CELLULAR_GATEWAY_API_ENABLED`
      - `DEVICES_API_ENABLED`
      - `INSIGHT_API_ENABLED`
      - `LICENSING_API_ENABLED`
      - `NETWORKS_API_ENABLED`
      - `ORGANIZATIONS_API_ENABLED`
      - `SECURE_CONNECT_API_ENABLED`
      - `SENSOR_API_ENABLED`
      - `SM_API_ENABLED`
      - `SWITCH_API_ENABLED`
      - `WIRELESS_API_ENABLED`
      - `WIRELESS_CONTROLLER_API_ENABLED`

   Note: It's recommended to enable only the API endpoint scopes you need, as enabling all scopes might exceed Claude's context limits. Chat length is vrey limited on free version of Claude and therefore, the user will need to enable/disable spefici API endpoints from Claude app.

5. Build the project:
```bash
npm run build
```

## Adding MCP to Claude Desktop App

1. Open Claude Desktop App
2. Go to Settings
3. Navigate to the MCP section
4. Click "Developer" on the left hand side
5. Click "Edit Config"
6. Create/Edit a file entering the following details:

   macOS
   ```
   {
       "mcpServers": {
           "meraki": {
               "command": "node",
               "args": [
                   "--env-file=/path/to/mcp-server-meraki/.env",
                   "/path/to/mcp-server-meraki/build/index.js"
               ]
           }
       }
   }
   ```
   Windows
   ```
   {
      "mcpServers": {
          "meraki": {
               "command": "C:\\path\\to\\node.exe",
               "args": [
                  "--env-file=C:\\path\\to\\mcp-server-meraki-donottrust\\.env",
                  "C:\\path\\to\\mcp-server-meraki-donottrust\\build\\index.js"
               ]
          }
      }
   }
   ```
7. Restart app

## Future Development

The following improvements are planned for future development:

1. **TypeScript Integration**
   - Add TypeScript interfaces for all API responses
   - Implement Zod schemas for runtime type validation
   - Improve type safety across the codebase

2. **Dynamic API Scope**
   - Explore implementing Meraki Dashboard API scopes as Tools
   - Allow users to select which APIs to use directly from Claude's interface
   - Eliminate the need for .env file modifications and rebuilds

3. **Security Enhancements**
   - Implement encryption for sensitive information
   - Add secure decoding mechanisms within the MCP
   - Enhance API key management and security

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License