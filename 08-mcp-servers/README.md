<div align="center">

# 🔌 08. MCP Servers

**Connect to external tools and services with Model Context Protocol**

[![Module Level](https://img.shields.io/badge/Level-Intermediate+-darkorange)]()
[![Time Required](https://img.shields.io/badge/Time-60_min-yellow)]()
[![Prerequisites](https://img.shields.io/badge/Prerequisites-Module_07-blue)]()
[![OpenCode Version](https://img.shields.io/badge/OpenCode-1.0+-purple)]()

[⬅️ Previous Module](../07-skills-agents/)] • [🏠 Main Menu](../README.md) • [Next Module ➡️](../09-advanced-features/)

</div>

---

## 📋 Table of Contents

<details>
<summary>Click to expand/collapse</summary>

- [🎯 Overview](#-overview)
- [✅ Prerequisites](#-prerequisites)
- [⚡ Quick Start](#-quick-start)
- [📚 Core Concepts](#-core-concepts)
- [🔧 Examples & Patterns](#-examples--patterns)
- [🏗️ Real-World Workflows](#️-real-world-workflows)
- [🧪 Practice Exercises](#-practice-exercises)
- [❓ Common Questions](#-common-questions)
- [🐛 Troubleshooting](#-troubleshooting)
- [📈 What You've Learned](#-what-youve-learned)
- [🚶 Next Steps](#-next-steps)

</details>

---

---


<details>
<summary>Click to expand/collapse</summary>

- [🎯 Overview](#-overview)
- [✅ Prerequisites](#-prerequisites)
- [⚡ Quick Start](#-quick-start)
- [📚 Core Concepts](#-core-concepts)
- [🔧 Examples & Patterns](#-examples--patterns)
- [🏗️ Real-World Workflows](#️-real-world-workflows)
- [🧪 Practice Exercises](#-practice-exercises)
- [❓ Common Questions](#-common-questions)
- [🐛 Troubleshooting](#-troubleshooting)
- [📈 What You've Learned](#-what-youve-learned)
- [🚶 Next Steps](#-next-steps)

</details>

---
# 08 MCP Servers

The Model Context Protocol (MCP) enables opencode to connect to external services and tools, extending its capabilities through server integrations.

## What is MCP?

MCP (Model Context Protocol) is an open protocol that allows AI applications like opencode to connect to external data sources and tools. MCP servers provide:

- **External data access** (databases, APIs, filesystems)
- **Tool integration** (compilers, linters, deployment tools)
- **Enhanced capabilities** beyond built-in tools
- **Standardized interfaces** for consistent interaction

## MCP Server Types

### 1. File System Servers
```bash
# Access local or remote filesystems
MCP server: "filesystem" - Browse and manipulate files
MCP server: "github" - Access GitHub repositories
MCP server: "s3" - AWS S3 bucket access
```

### 2. Database Servers
```bash
# Connect to databases
MCP server: "postgres" - PostgreSQL database
MCP server: "mysql" - MySQL database  
MCP server: "mongodb" - MongoDB database
MCP server: "redis" - Redis key-value store
```

### 3. Development Tool Servers
```bash
# Integrate development tools
MCP server: "docker" - Container management
MCP server: "kubernetes" - K8s cluster management
MCP server: "terraform" - Infrastructure as code
MCP server: "ansible" - Configuration management
```

### 4. API Integration Servers
```bash
# Connect to external APIs
MCP server: "slack" - Slack workspace
MCP server: "jira" - Jira project management
MCP server: "github-actions" - CI/CD workflows
MCP server: "openai" - AI model APIs
```

## Configuring MCP Servers

### Server Configuration Files

MCP servers are configured in `~/.config/opencode/mcp/servers.json`:

```json
{
  "servers": [
    {
      "name": "filesystem",
      "type": "stdio",
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/home/user/projects"]
    },
    {
      "name": "postgres",
      "type": "stdio", 
      "command": "npx",
      "args": ["@modelcontextprotocol/server-postgres"],
      "env": {
        "PGHOST": "localhost",
        "PGPORT": "5432",
        "PGDATABASE": "mydb",
        "PGUSER": "myuser",
        "PGPASSWORD": "mypassword"
      }
    }
  ]
}
```

### Environment Configuration

Some servers require environment variables:

```bash
# Set environment variables for servers
export GITHUB_TOKEN="your_github_token"
export OPENAI_API_KEY="your_openai_key"
export AWS_ACCESS_KEY_ID="your_aws_key"
export AWS_SECRET_ACCESS_KEY="your_aws_secret"
```

## Using MCP Servers

### Basic Server Interaction

```bash
# List available servers
List MCP servers

# Connect to a server
Connect to MCP server: "filesystem"

# Use server capabilities
List files in directory: "/home/user/projects"
Read file: "/home/user/projects/README.md"
```

### File System Operations

```bash
# Browse files
Navigate to: "/src/components"
List files with pattern: "*.tsx"

# File operations
Read file: "Button.tsx"
Edit file: "Button.tsx" with new content
Create file: "NewComponent.tsx"
Delete file: "OldComponent.tsx"

# Search operations
Find files containing: "useState"
Find files modified in last: "7 days"
```

### Database Operations

```bash
# Connect to database
Connect to MCP server: "postgres"

# Query operations
Execute SQL: "SELECT * FROM users WHERE active = true"
Execute SQL: "INSERT INTO users (name, email) VALUES ('John', 'john@example.com')"
Execute SQL: "UPDATE users SET active = false WHERE last_login < NOW() - INTERVAL '90 days'"

# Schema operations
List tables in database
Describe table: "users"
Create table: "products" with schema
```

### Development Tool Operations

```bash
# Docker operations
Connect to MCP server: "docker"
List containers
Build image: "./Dockerfile"
Run container: "myapp:latest"

# Kubernetes operations  
Connect to MCP server: "kubernetes"
List pods
Deploy application: "./k8s/manifest.yaml"
Get logs: "pod/myapp-12345"

# Terraform operations
Connect to MCP server: "terraform"
Initialize: "./terraform"
Plan changes
Apply configuration
```

## Common MCP Server Patterns

### Pattern 1: Database-Driven Development

```bash
# Develop with live database access
1. Connect to MCP server: "postgres"
2. Query: "SELECT schema_version FROM migrations"
3. Based on schema, generate appropriate models
4. Create API endpoints matching database structure
5. Test endpoints with live data
```

### Pattern 2: File System Automation

```bash
# Automated file operations
1. Connect to MCP server: "filesystem"
2. Search: "Find all .js files using deprecated APIs"
3. Batch update: "Replace deprecated API calls"
4. Verify: "Check no files still use deprecated APIs"
5. Commit: "Update deprecated API usage"
```

### Pattern 3: CI/CD Integration

```bash
# Continuous deployment workflow
1. Connect to MCP server: "github-actions"
2. Trigger workflow: "build-and-deploy"
3. Connect to MCP server: "docker"
4. Monitor build: "Watch container build logs"
5. Connect to MCP server: "kubernetes"
6. Deploy: "Update deployment to new image"
```

### Pattern 4: Monitoring and Debugging

```bash
# Production debugging
1. Connect to MCP server: "kubernetes"
2. Get logs: "pod/production-app-*" with tail: 100
3. Connect to MCP server: "postgres"
4. Query: "SELECT * FROM error_logs ORDER BY timestamp DESC LIMIT 10"
5. Analyze errors and propose fixes
```

## Popular MCP Servers

### Official MCP Servers

1. **Filesystem Server**
   ```bash
   # Installation
   npm install -g @modelcontextprotocol/server-filesystem
   
   # Usage
   Browse: "/path/to/project"
   Search: "*.ts" in "/src"
   ```

2. **PostgreSQL Server**
   ```bash
   # Installation
   npm install -g @modelcontextprotocol/server-postgres
   
   # Usage
   Query: "SELECT * FROM table"
   Execute: "INSERT INTO table VALUES (...)"
   ```

3. **GitHub Server**
   ```bash
   # Installation
   npm install -g @modelcontextprotocol/server-github
   
   # Usage
   List repositories
   Read issues
   Create pull requests
   ```

### Community MCP Servers

1. **SQLite Server** - Lightweight database
2. **Redis Server** - Key-value store
3. **MySQL Server** - Popular database
4. **MongoDB Server** - Document database
5. **Docker Server** - Container management
6. **AWS Server** - AWS service integration
7. **Slack Server** - Team communication
8. **Jira Server** - Project management

## Creating Custom MCP Servers

### Basic Server Structure

```javascript
// server.js - Example custom MCP server
const { Server } = require('@modelcontextprotocol/sdk/server');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio');

class MyCustomServer {
  constructor() {
    this.server = new Server(
      {
        name: 'my-custom-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          resources: {},
          tools: {
            greet: {
              description: 'Greet a user by name',
              inputSchema: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    description: 'Name to greet'
                  }
                },
                required: ['name']
              }
            }
          }
        }
      }
    );

    // Register tool handlers
    this.server.setRequestHandler('tools/call', async (request) => {
      if (request.params.name === 'greet') {
        const name = request.params.arguments?.name || 'World';
        return {
          content: [
            {
              type: 'text',
              text: `Hello, ${name}!`
            }
          ]
        };
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}

// Start the server
const server = new MyCustomServer();
server.run().catch(console.error);
```

### Server Implementation Steps

1. **Define capabilities** - What your server can do
2. **Implement handlers** - Code to execute operations
3. **Handle requests** - Process incoming MCP requests
4. **Return responses** - Format responses according to protocol
5. **Test thoroughly** - Ensure reliability and error handling

## Security Considerations

### Access Control

```bash
# Limit server access
- Use read-only mode for production databases
- Restrict file system access to specific directories
- Use API keys with minimal required permissions
- Implement rate limiting for external APIs
```

### Data Protection

```bash
# Protect sensitive data
- Never hardcode credentials in configuration
- Use environment variables or secret managers
- Encrypt sensitive data in transit and at rest
- Implement audit logging for sensitive operations
```

### Network Security

```bash
# Secure network communications
- Use TLS/SSL for all network connections
- Implement firewall rules to restrict access
- Use VPNs for accessing private resources
- Monitor for unusual access patterns
```

## Performance Optimization

### Connection Pooling

```bash
# Reuse connections
- Maintain persistent connections to databases
- Implement connection pooling for frequent operations
- Cache frequently accessed data
- Batch operations when possible
```

### Resource Management

```bash
# Monitor resource usage
- Limit concurrent server connections
- Implement timeout for long-running operations
- Use pagination for large result sets
- Clean up temporary resources
```

### Caching Strategies

```bash
# Improve performance with caching
- Cache static configuration data
- Implement query result caching
- Use CDN for file access
- Cache API responses when appropriate
```

## Troubleshooting

### Common Issues

1. **Connection Failures**
   ```bash
   # Check server configuration
   Verify MCP server configuration file
   Check network connectivity
   Validate credentials and permissions
   Test server command manually
   ```

2. **Permission Errors**
   ```bash
   # Verify access rights
   Check file system permissions
   Validate database user privileges
   Verify API token scopes
   Test with minimal required permissions
   ```

3. **Performance Problems**
   ```bash
   # Optimize operations
   Check network latency
   Monitor server resource usage
   Implement query optimization
   Use appropriate indexing
   ```

4. **Protocol Errors**
   ```bash
   # Debug MCP protocol issues
   Check server version compatibility
   Verify request/response formatting
   Enable debug logging
   Test with simple operations first
   ```

### Debug Commands

```bash
# Test MCP server connectivity
List available MCP servers
Test connection to server: "filesystem"

# Verify server capabilities
List tools provided by server: "postgres"
Test tool: "execute_sql" with simple query

# Monitor server performance
Time operation: "List files in large directory"
Check memory usage during operations
```

## Examples Directory

See `/examples/` for practical implementations:
- Database migration automation
- File system cleanup scripts
- Deployment automation workflows
- Monitoring and alerting systems
- Custom MCP server implementations

## Next Steps

After mastering MCP servers, proceed to:
- **Module 09**: Advanced features including the plugin system for extending opencode itself
- **Module 10**: OpenWork collaboration platform for team-based development workflows

---


---

## 📄 License & Attribution

This module is part of the [OpenCode Primer](../README.md).

**License:** MIT - See [LICENSE](../LICENSE) for details.

**Last Updated:** April 2026  
**OpenCode Version:** 1.0+ compatible

---

