<div align="center">

# ⚙️ 09. Advanced Features

**Power user features including plugins and extensibility**

[![Module Level](https://img.shields.io/badge/Level-Advanced-red)]()
[![Time Required](https://img.shields.io/badge/Time-90_min-yellow)]()
[![Prerequisites](https://img.shields.io/badge/Prerequisites-Module_08-blue)]()
[![OpenCode Version](https://img.shields.io/badge/OpenCode-1.0+-purple)]()

[⬅️ Previous Module](../08-mcp-servers/)] • [🏠 Main Menu](../README.md) • [Next Module ➡️](../10-openwork/)

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
# 09. Advanced Features & Plugins

**Location**: `09-advanced-features/`  
**Level**: Advanced  
**Time**: 2 hours  
**Focus**: Advanced configuration, plugin system, and event-driven automation

## 📚 Overview

This module covers opencode's advanced configuration options, plugin system (the equivalent of Claude Code's hooks), and sophisticated customization capabilities. You'll learn how to extend opencode with custom logic, automate workflows through events, and fine-tune behavior for production use.

## 🎯 What You'll Learn

- Configure permissions and formatters
- Set up and use the plugin system (hooks)
- Create custom event handlers for automation
- Use experimental features like LSP integration
- Manage environment variables and settings

## 🚀 Quick Start

### Permission Configuration

```json
// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "edit": "ask",
    "bash": "allow",
    "webfetch": "deny",
    "websearch": "ask"
  }
}
```

### Basic Plugin Setup

```bash
# Create plugin directory
mkdir -p .opencode/plugins

# Create a simple plugin
cat > .opencode/plugins/format-on-save.js << 'EOF'
export default {
  name: "format-on-save",
  description: "Auto-format code after edits",
  priority: 100,
  
  hooks: {
    async "tool.execute.after"(ctx) {
      if (ctx.tool === "edit" || ctx.tool === "write") {
        // Auto-format the edited file
        await ctx.runFormatter(ctx.filePath);
      }
    }
  }
}
EOF
```

## 📖 Detailed Topics

### 1. Plugin System (Hooks)

OpenCode implements hooks through its plugin system using JavaScript/TypeScript modules placed in:
- `.opencode/plugins/` (project-specific)
- `~/.config/opencode/plugins/` (global)

**Plugin Structure:**
```javascript
// Example plugin: auto-format on edit
export default {
  name: "auto-formatter",
  description: "Automatically format code after edits",
  priority: 100, // Lower numbers run first
  
  hooks: {
    // Run before tool execution
    async "tool.execute.before"(ctx) {
      const { tool, args } = ctx;
      
      // Block .env file reads for security
      if (tool === "read" && args.filePath?.endsWith('.env')) {
        throw new Error("Reading .env files is not allowed");
      }
      
      // Require approval for dangerous bash commands
      if (tool === "bash" && args.command?.includes('rm -rf')) {
        ctx.requireApproval("This command is potentially destructive");
      }
    },
    
    // Run after tool execution
    async "tool.execute.after"(ctx) {
      const { tool, success, error } = ctx;
      
      if (tool === "edit" && success) {
        // Auto-format edited files
        await ctx.runFormatter(ctx.filePath);
      }
      
      if (error) {
        // Log errors to monitoring service
        console.error(`Tool ${tool} failed:`, error);
      }
    },
    
    // Session events
    async "session.created"(ctx) {
      console.log(`New session started: ${ctx.sessionId}`);
    },
    
    async "session.updated"(ctx) {
      // Notify on session status changes
      if (ctx.status === "error") {
        await sendNotification(`Session error: ${ctx.error}`);
      }
    },
    
    // File events
    async "file.edited"(ctx) {
      const { filePath, oldContent, newContent } = ctx;
      console.log(`File edited: ${filePath}`);
      
      // Validate file changes
      if (filePath.endsWith('.json')) {
        try {
          JSON.parse(newContent);
        } catch (e) {
          throw new Error("Invalid JSON after edit");
        }
      }
    },
    
    // Permission events
    async "permission.asked"(ctx) {
      const { tool, reason } = ctx;
      
      // Custom permission logic
      if (tool === "webfetch" && reason.includes("github.com")) {
        return "allow"; // Auto-allow GitHub fetches
      }
      
      return "ask"; // Default to asking user
    }
  }
};
```

**Available Hook Events (30+):**
- `tool.execute.before/after` - Pre/post tool execution
- `tool.execute.failure` - Tool execution failed
- `session.created/updated/destroyed` - Session lifecycle
- `session.error` - Session errors
- `file.edited/created/deleted` - File operations
- `permission.asked` - Permission requests
- `lsp.client.*` - LSP server events
- `command.executed` - Slash command execution
- `agent.*` - Agent-related events
- `mcp.*` - MCP server events

### 2. Plugin Configuration

**Loading Order:**
1. Config-defined plugins (highest priority)
2. Global plugins (`~/.config/opencode/plugins/`)
3. Project plugins (`.opencode/plugins/`)

**Package.json Support:**
```json
{
  "name": "my-opencode-plugin",
  "version": "1.0.0",
  "dependencies": {
    "axios": "^1.0.0",
    "zod": "^3.0.0"
  }
}
```

**SDK Access:**
Plugins have access to opencode's SDK for:
- Logging and debugging
- Running commands
- File system operations
- Configuration access
- Tool execution

### 3. Community Plugins

**opencode-claude-hooks:**
```bash
# Install compatibility plugin
npm install opencode-claude-hooks

# Configuration automatically loads Claude-style hooks
# Provides ~80% compatibility with Claude configs
```

**Example community plugins:**
- `opencode-security` - Security scanning and validation
- `opencode-formatters` - Multi-language code formatting
- `opencode-notifications` - Slack/Discord/email notifications
- `opencode-git` - Git automation and validation
- `opencode-ci` - CI/CD integration

### 4. Custom Tools via Plugins

Plugins can define custom tools with Zod schemas:

```javascript
import { z } from 'zod';

export default {
  name: "custom-tools",
  
  tools: {
    // Custom tool with validation
    calculate: {
      schema: z.object({
        expression: z.string().describe("Mathematical expression"),
        precision: z.number().optional().default(2)
      }),
      
      async execute({ expression, precision }) {
        // Safe evaluation
        const result = safeEval(expression);
        return `Result: ${result.toFixed(precision)}`;
      }
    },
    
    // API integration tool
    fetchWeather: {
      schema: z.object({
        city: z.string(),
        units: z.enum(["metric", "imperial"]).default("metric")
      }),
      
      async execute({ city, units }) {
        const response = await fetch(
          `https://api.weather.com/${city}?units=${units}`
        );
        return response.json();
      }
    }
  },
  
  hooks: {
    // Register custom tools on session start
    async "session.created"(ctx) {
      await ctx.registerTools(this.tools);
    }
  }
};
```

### 5. Advanced Configuration

**Environment Variables:**
```bash
# Enable experimental features
OPENCODE_EXPERIMENTAL=true opencode

# Enable LSP tool
OPENCODE_EXPERIMENTAL_LSP_TOOL=true opencode

# Enable websearch
OPENCODE_ENABLE_EXA=1 opencode

# Server authentication
OPENCODE_SERVER_PASSWORD=secret123
OPENCODE_SERVER_USERNAME=admin
```

**Code Formatters:**
```json
{
  "formatters": {
    "*.js": "prettier --write",
    "*.py": "black",
    "*.rs": "rustfmt",
    "*.go": "gofmt"
  }
}
```

**LSP Server Configuration:**
```json
{
  "lsp": {
    "typescript": {
      "command": "typescript-language-server",
      "args": ["--stdio"],
      "filetypes": ["typescript", "javascript"]
    },
    "python": {
      "command": "pylsp",
      "filetypes": ["python"]
    }
  }
}
```

## 🧪 Hands-on Exercises

### Exercise 1: Security Plugin

```javascript
// .opencode/plugins/security.js
export default {
  name: "security",
  priority: 1000, // High priority - runs first
  
  hooks: {
    async "tool.execute.before"(ctx) {
      const { tool, args } = ctx;
      
      // Block sensitive file operations
      const sensitiveFiles = ['.env', 'config/secrets.', 'private-key'];
      if (tool === "read" || tool === "edit") {
        const filePath = args.filePath || args.path;
        if (sensitiveFiles.some(pattern => filePath?.includes(pattern))) {
          throw new Error(`Access to ${filePath} is restricted for security`);
        }
      }
      
      // Block dangerous bash commands
      if (tool === "bash") {
        const dangerous = ['rm -rf', 'format c:', 'dd if=', ':(){:|:&};:'];
        if (dangerous.some(cmd => args.command?.includes(cmd))) {
          ctx.requireApproval("This command appears dangerous");
        }
      }
    },
    
    async "file.edited"(ctx) {
      // Check for hardcoded secrets
      const secretPatterns = [
        /password\s*=\s*['"][^'"]{8,}['"]/i,
        /api[_-]key\s*=\s*['"][^'"]{10,}['"]/i,
        /token\s*=\s*['"][^'"]{10,}['"]/i
      ];
      
      for (const pattern of secretPatterns) {
        if (pattern.test(ctx.newContent)) {
          console.warn(`Potential secret found in ${ctx.filePath}`);
        }
      }
    }
  }
};
```

### Exercise 2: Auto-Formatter Plugin

```javascript
// .opencode/plugins/auto-format.js
export default {
  name: "auto-format",
  
  hooks: {
    async "tool.execute.after"(ctx) {
      if (!ctx.success) return;
      
      const { tool } = ctx;
      const filePath = ctx.filePath || ctx.args?.filePath;
      
      // Format after edits
      if ((tool === "edit" || tool === "write") && filePath) {
        await this.formatFile(filePath);
      }
    }
  },
  
  methods: {
    async formatFile(filePath) {
      const ext = filePath.split('.').pop();
      
      switch (ext) {
        case 'js':
        case 'jsx':
        case 'ts':
        case 'tsx':
          await this.runCommand(`npx prettier --write "${filePath}"`);
          break;
        case 'py':
          await this.runCommand(`black "${filePath}"`);
          break;
        case 'rs':
          await this.runCommand(`rustfmt "${filePath}"`);
          break;
        // Add more formatters as needed
      }
    },
    
    async runCommand(cmd) {
      // Use opencode's bash tool to run formatter
      try {
        await opencode.bash(cmd);
      } catch (error) {
        console.warn(`Formatter failed: ${error.message}`);
      }
    }
  }
};
```

### Exercise 3: Notification Plugin

```javascript
// .opencode/plugins/notifications.js
import axios from 'axios';

export default {
  name: "notifications",
  
  config: {
    webhookUrl: process.env.SLACK_WEBHOOK_URL,
    notifyOn: ['error', 'session.created', 'file.edited']
  },
  
  hooks: {
    async "session.error"(ctx) {
      if (this.config.notifyOn.includes('error')) {
        await this.sendNotification({
          title: "OpenCode Session Error",
          message: ctx.error.message,
          sessionId: ctx.sessionId
        });
      }
    },
    
    async "session.created"(ctx) {
      if (this.config.notifyOn.includes('session.created')) {
        await this.sendNotification({
          title: "New OpenCode Session",
          message: `Session ${ctx.sessionId} started`,
          level: "info"
        });
      }
    },
    
    async "file.edited"(ctx) {
      if (this.config.notifyOn.includes('file.edited')) {
        await this.sendNotification({
          title: "File Edited",
          message: `${ctx.filePath} was modified`,
          diff: ctx.diff // If available
        });
      }
    }
  },
  
  methods: {
    async sendNotification(data) {
      if (!this.config.webhookUrl) return;
      
      try {
        await axios.post(this.config.webhookUrl, {
          text: `${data.title}: ${data.message}`,
          attachments: data.diff ? [{
            text: "```diff\n" + data.diff + "\n```"
          }] : []
        });
      } catch (error) {
        console.error("Notification failed:", error.message);
      }
    }
  }
};
```

### Exercise 4: Claude Hooks Compatibility

```bash
# Install compatibility layer
npm install opencode-claude-hooks

# Convert Claude config to opencode plugin
npx opencode-claude-hooks convert .claude/settings.json

# Generated plugin will be in .opencode/plugins/claude-compat.js
```

## 📋 Best Practices

### ✅ Do

- **Start with simple plugins** before complex ones
- **Use proper error handling** in all hooks
- **Test plugins in isolation** before deploying
- **Consider plugin priority** for execution order
- **Use environment variables** for configuration
- **Document plugin behavior** with clear descriptions

### ❌ Don't

- **Don't create blocking plugins** that slow down opencode
- **Don't ignore error cases** in event handlers
- **Don't hardcode sensitive data** in plugins
- **Don't create conflicting plugins** with same hooks
- **Don't forget about plugin loading order**
- **Don't skip testing** with different scenarios

## 🔧 Common Use Cases

### 1. Security Enforcement

```javascript
// Block specific patterns
hooks: {
  async "tool.execute.before"(ctx) {
    // Block eval in bash
    if (ctx.tool === "bash" && ctx.args.command?.includes('eval(')) {
      throw new Error("eval() is not allowed for security");
    }
    
    // Block .env reads
    if (ctx.tool === "read" && ctx.args.filePath?.endsWith('.env')) {
      throw new Error(".env files cannot be read directly");
    }
  }
}
```

### 2. Quality Assurance

```javascript
// Enforce coding standards
hooks: {
  async "file.edited"(ctx) {
    // Check for TODO comments in production code
    if (ctx.filePath.includes('src/') && ctx.newContent.includes('TODO')) {
      console.warn(`TODO found in ${ctx.filePath}`);
    }
    
    // Check for console.log in production
    if (!ctx.filePath.includes('test') && ctx.newContent.includes('console.log')) {
      console.warn(`console.log in production code: ${ctx.filePath}`);
    }
  }
}
```

### 3. Workflow Automation

```javascript
// Auto-run tests after changes
hooks: {
  async "tool.execute.after"(ctx) {
    if (ctx.tool === "edit" && ctx.filePath?.includes('src/')) {
      // Run tests related to changed file
      const testFile = ctx.filePath.replace('src/', 'tests/').replace('.js', '.test.js');
      await opencode.bash(`npm test -- ${testFile}`);
    }
  }
}
```

### 4. Team Collaboration

```javascript
// Notify team of changes
hooks: {
  async "session.created"(ctx) {
    const user = process.env.USER || "unknown";
    await this.sendToSlack(`User ${user} started session ${ctx.sessionId}`);
  },
  
  async "file.edited"(ctx) {
    await this.sendToSlack(`File edited: ${ctx.filePath}`, ctx.diff);
  }
}
```

## 🚨 Troubleshooting

### Plugin Not Loading

```bash
# Check plugin directory
ls -la .opencode/plugins/

# Check for syntax errors
node -c .opencode/plugins/my-plugin.js

# Enable debug logging
OPENCODE_LOG_LEVEL=DEBUG opencode
```

### Hook Not Firing

```javascript
// Check event name is correct
// Available events: tool.execute.before, tool.execute.after, file.edited, etc.

// Check priority
// Lower priority numbers run first, ensure your plugin has appropriate priority

// Check for errors in hook
try {
  // Your hook logic
} catch (error) {
  console.error("Hook error:", error);
}
```

### Performance Issues

```javascript
// Optimize heavy operations
hooks: {
  async "tool.execute.before"(ctx) {
    // Use early returns for irrelevant events
    if (ctx.tool !== "edit") return;
    
    // Defer non-critical operations
    setTimeout(() => {
      this.logOperation(ctx);
    }, 0);
    
    // Keep synchronous operations fast
    const shouldBlock = this.checkSecurity(ctx);
    if (shouldBlock) {
      throw new Error("Operation blocked");
    }
  }
}
```

## 📚 Additional Resources

- [OpenCode Plugins Documentation](https://opencode.ai/docs/plugins)
- [Plugin SDK Reference](https://opencode.ai/docs/sdk)
- [Available Hook Events](https://opencode.ai/docs/plugins#events)
- [Community Plugins](https://github.com/anomalyco/opencode-plugins)
- [opencode-claude-hooks](https://github.com/community/opencode-claude-hooks)

## 🎓 Next Steps

Once you're comfortable with advanced features and plugins, proceed to:

1. **[10-openwork](10-openwork)**: Set up team collaboration with OpenWork
2. **Create custom plugins** for your team's specific workflows
3. **Contribute to community plugins** to help others
4. **Explore experimental features** as they become available

---

**Ready to extend opencode?** Start by creating a simple plugin that solves one specific problem in your workflow, then gradually add more features as you become comfortable with the plugin system.

[← Back to Learning Roadmap](../LEARNING-ROADMAP.md) | [Previous: MCP Servers ←](08-mcp-servers/README.md) | [Next: OpenWork Integration →](10-openwork/README.md)

---


---

## 📄 License & Attribution

This module is part of the [OpenCode Primer](../README.md).

**License:** MIT - See [LICENSE](../LICENSE) for details.

**Last Updated:** April 2026  
**OpenCode Version:** 1.0+ compatible

---

