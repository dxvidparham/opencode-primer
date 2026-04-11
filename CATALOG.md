# 📚 OpenCode Primer Feature Catalog

Complete reference of opencode's built-in tools, modules, and learning resources.

## 📋 Table of Contents

- [Module Overview](#-module-overview)
- [OpenCode Built-in Tools](#️-opencode-built-in-tools)
- [Quick Start Reference](#-quick-start-reference)
- [Complete Module Reference](#-complete-module-reference)
- [Use Case Matrix](#-use-case-matrix)
- [Troubleshooting](#-troubleshooting)
- [Additional Resources](#-additional-resources)

## 📊 Module Overview

| Module                                            | Level         | Time      | Focus                  | Key Tools Covered                      |
| ------------------------------------------------- | ------------- | --------- | ---------------------- | -------------------------------------- |
| **[01. Basic Commands & TUI](01-basic-commands)** | Beginner      | 30 min    | Interface fundamentals | TUI, slash commands, file references   |
| **[02. File Operations](02-file-operations)**     | Beginner+     | 45 min    | File manipulation      | `read`, `edit`, `write`                |
| **[03. Search Tools](03-search-tools)**           | Intermediate  | 45 min    | Codebase navigation    | `glob`, `grep`, `list`                 |
| **[04. Bash Integration](04-bash-integration)**   | Intermediate  | 1 hour    | System operations      | `bash`, granular permissions           |
| **[05. Question & Todo Tools](05-question-todo)** | Intermediate  | 45 min    | Interactive workflows  | `question`, `todowrite`                |
| **[06. Web Tools](06-web-tools)**                 | Intermediate  | 45 min    | Web, sharing, IDE      | `webfetch`, `websearch`, share, web    |
| **[07. Skills & Agents](07-skills-agents)**       | Intermediate+ | 1 hour    | Skills, agents, cmds   | Skills, agents, custom commands        |
| **[08. MCP Servers](08-mcp-servers)**             | Intermediate+ | 1 hour    | External integration   | Local/remote MCP, OAuth, per-agent     |
| **[09. Advanced Features](09-advanced-features)** | Advanced      | 1.5 hours | Plugins & config       | Plugins, custom tools, permissions     |
| **[10. OpenWork Integration](10-openwork)**       | Advanced      | 1 hour    | Team collaboration     | Desktop app, Slack, automations, Cloud |

## 🛠️ OpenCode Built-in Tools

OpenCode provides these core tools that AI agents can use:

### File Operations

- **`read`**: Read file contents and directories
- **`edit`**: Modify existing files with exact string replacement
- **`write`**: Create new files or overwrite existing ones

### Search & Navigation

- **`glob`**: Find files by pattern (e.g., `**/*.js`)
- **`grep`**: Search file contents using regex
- **`list`**: List directory contents with filtering

### System Integration

- **`bash`**: Execute shell commands in project environment

### Interactive Workflows

- **`question`**: Ask users questions during execution
- **`todowrite`**: Manage todo lists for task tracking

### Web & Research

- **`webfetch`**: Fetch web content (requires permissions)
- **`websearch`**: Search the web using Exa AI

### Extensibility

- **`skill`**: Load SKILL.md files for specialized knowledge
- **MCP Servers**: Connect to external tools and services
- **Custom Agents**: Configure agents via AGENTS.md or opencode.json

### Experimental Features

- **`lsp`**: LSP server integration (experimental)
- **`apply_patch`**: Apply patch files to codebase

## 🚀 Quick Start Reference

### Basic Setup (15 minutes)

```bash
# 1. Install opencode
curl -fsSL https://opencode.ai/install | bash

# 2. Start opencode in your project
cd /path/to/your-project
opencode

# 3. Try basic commands in TUI
/help          # See available commands
@src/file.js   # Reference a file in conversation
/undo          # Undo last change
```

### Essential Workflow (1 hour)

```bash
# 1. Explore project structure
# In opencode TUI: "Show me the project structure"

# 2. Read and understand code
# "Explain the authentication code in @src/auth.js"

# 3. Make simple changes
# "Update the port in @config.json from 3000 to 8080"

# 4. Search for patterns
# "Find all TODO comments in the codebase"

# 5. Execute commands
# "Run the tests to make sure everything works"
```

### Development Practice

```bash
# Create practice environment
mkdir -p ~/opencode-practice
cd ~/opencode-practice

# Initialize a sample project
git init
echo '# My Practice Project' > README.md
mkdir -p src tests

# Start learning with opencode
opencode
```

## 📖 Complete Module Reference

### 01. Basic Commands & TUI

**Location**: [01-basic-commands/](01-basic-commands)

**What**: OpenCode's terminal user interface and core interaction patterns

**Key Concepts**:

- Starting and navigating the TUI
- Using slash commands (`/help`, `/undo`, `/redo`, `/share`)
- File references with `@` symbol
- Plan mode vs Build mode (Tab key toggle)
- Conversation flow and context management

**Examples**:

```bash
# Start opencode
opencode

# Get help
/help

# Reference files
Look at the configuration in @config.json

# Share conversation
/share
```

### 02. File Operations

**Location**: [02-file-operations/](02-file-operations)

**What**: Reading, editing, and creating files

**Key Concepts**:

- `read` tool for examining files and directories
- `edit` tool for exact string replacements
- `write` tool for creating new files
- `@` file references for directing the LLM
- File path navigation and permissions

**Examples**:

```bash
# In the TUI, ask the LLM to read, edit, or create files:
# "Show me the contents of package.json"
# "Change the port from 3000 to 8080 in @config.json"
# "Create a new file called utils.js with a helper function"

# Or non-interactively:
opencode run 'Show me the first 10 lines of package.json'
```

### 03. Search Tools

**Location**: [03-search-tools/](03-search-tools)

**What**: Finding files and content in codebases

**Key Concepts**:

- `glob` for file pattern matching
- `grep` for content search with regex
- `list` for directory listing
- Combining search operations
- Ignore patterns and filtering

**Examples**:

```bash
# In the TUI, the LLM uses glob/grep/list tools internally:
# "Find all JavaScript files in the project"
# "Search for TODO and FIXME comments"
# "List the contents of the src/ directory"

# Standard shell equivalents:
find . -name '*.js'
grep -rn 'TODO\|FIXME' --include='*.js' .
ls -la src/
```

### 04. Bash Integration

**Location**: [04-bash-integration/](04-bash-integration)

**What**: Executing shell commands through opencode

**Key Concepts**:

- `bash` tool for system operations
- Command chaining and error handling
- Working directory management
- Permission considerations for dangerous commands

**Examples**:

```bash
# In the TUI, ask the LLM to run commands:
# "Run npm install"
# "Show the git status"
# "Start docker compose in detached mode"

# Or use the ! prefix in TUI for direct execution:
# !npm install
# !git status
```

### 05. Question & Todo Tools

**Location**: [05-question-todo/](05-question-todo)

**What**: Interactive workflows and task management

**Key Concepts**:

- `question` tool for gathering user input
- `todowrite` tool for tracking tasks
- Creating interactive automation
- Managing multi-step workflows

**Examples**:

```bash
# opencode will use question to ask:
# "Which database should we use: PostgreSQL or MySQL?"

# opencode will use todowrite to track:
# - [ ] Set up database schema
# - [ ] Implement API endpoints
# - [ ] Write integration tests
```

### 06. Web Tools

**Location**: [06-web-tools/](06-web-tools)

**What**: Web tools, session sharing, web UI, and IDE integration

**Key Concepts**:

- `webfetch` for retrieving web pages
- `websearch` for searching the web (requires `OPENCODE_ENABLE_EXA=1`)
- Session sharing (`/share`, `/unshare`, auto/manual/disabled modes)
- Web interface (`opencode web`) as alternative to TUI
- IDE extension for VS Code, Cursor, Windsurf, VSCodium

**Examples**:

```bash
# Web search (requires env var)
OPENCODE_ENABLE_EXA=1 opencode

# Share sessions
/share     # Returns opncd.ai/s/<id> URL
/unshare   # Remove shared session

# Start web UI
opencode web
```

### 07. Skills & Agents

**Location**: [07-skills-agents/](07-skills-agents)

**What**: Skills, custom agents, and custom commands

**Key Concepts**:

- `skill` tool for loading SKILL.md files with YAML frontmatter
- Skill search paths (`.opencode/skills/`, `~/.config/opencode/skills/`, `.claude/skills/`)
- Custom agents via Markdown (`.opencode/agents/`) or JSON (`opencode.json`)
- Agent options: temperature, steps, mode, permissions, model, color
- Custom commands (`.opencode/commands/`) with template variables ($ARGUMENTS, $1/$2)
- @-mentioning subagents (`@explore`, `@general`)
- `opencode agent create` interactive wizard

**Examples**:

```bash
# @-mention a subagent
@explore analyze the project structure

# Use a custom command
/review src/auth.ts

# Create a new agent
opencode agent create
```

### 08. MCP Servers

**Location**: [08-mcp-servers/](08-mcp-servers)

**What**: Local and remote MCP server integration

**Key Concepts**:

- Local servers (`"type": "local"`, command array, env vars)
- Remote servers (`"type": "remote"`, URL, headers)
- OAuth authentication (automatic and pre-registered)
- Per-agent MCP management with glob patterns
- `enabled` flag to disable without removing
- MCP tool permissions (glob patterns like `mcp_github_*`)

**Examples**:

```bash
# Add MCP servers
opencode mcp add  # Interactive setup

# List configured servers
opencode mcp list

# OAuth auth
opencode mcp auth
```

### 09. Advanced Features

**Location**: [09-advanced-features/](09-advanced-features)

**What**: Plugins, custom tools, granular permissions, formatters, LSP, and advanced configuration

**Key Concepts**:

- Plugin system with 30+ event hooks and npm/local plugins
- Custom tools (`.opencode/tools/`) with TypeScript and Zod schemas
- Granular permissions with object syntax and glob patterns
- Code formatters (custom commands, extension matching)
- 30+ built-in LSP servers with auto-install
- Config precedence (7 layers from Remote to Managed)
- Variable substitution (`{env:VAR}`, `{file:path}`)
- Snapshots, compaction, file watcher, sharing config

**Examples**:

```json
{
  "plugin": ["opencode-supermemory"],
  "permission": {
    "bash": { "*": "ask", "git *": "allow", "rm *": "deny" }
  }
}
```

### 10. OpenWork Integration

**Location**: [10-openwork/](10-openwork)

**What**: Desktop app, Slack integration, browser automation, task scheduling, and team Cloud

**Key Concepts**:

- OpenWork desktop app (GUI for OpenCode)
- Self-hosted setup with `openwork-orchestrator`
- Skill sharing and importing (share URLs, `/skill-creator`, share.openworklabs.com)
- Browser automation via Chrome DevTools MCP (Computer Use)
- Slack bot integration (xoxb/xapp tokens, Settings → Messaging)
- Task Automation (scheduled prompts via Settings → Automations)
- Custom MCP servers from the desktop UI
- OpenWork Cloud: skill hubs, shared workspaces (Alpha), managed/custom LLM providers, RBAC, team templates

**Examples**:

```bash
# Install the orchestrator for self-hosting
npm install -g openwork-orchestrator

# Start OpenWork in your workspace
openwork start --workspace /path/to/project --approval auto

# Connect from the desktop app using the URL and token
```

## 🎯 Use Case Matrix

| Use Case               | Recommended Tools           | Example Workflow                                           |
| ---------------------- | --------------------------- | ---------------------------------------------------------- |
| **Code Understanding** | `read`, `grep`, `list`      | Ask to read files → Search patterns → Understand structure |
| **Code Modification**  | `edit`, `write`             | Find code → Plan changes → Ask to edit files               |
| **Refactoring**        | `grep`, `edit`              | Search patterns → Batch replace → Verify                   |
| **Debugging**          | `bash`, `grep`, `read`      | Run tests → Search errors → Examine code                   |
| **Research**           | `webfetch`, `websearch`     | Search docs → Fetch content → Apply knowledge              |
| **Sharing**            | `/share`, `opencode export` | Share conversations → Export sessions → Team review        |
| **CI/CD Integration**  | `opencode run`, agents      | Non-interactive prompts → Build → Test → Deploy            |
| **Team Collaboration** | OpenWork, skill sharing     | Desktop app → Share skills/MCPs → Team runs instantly      |

## 🔧 Troubleshooting

### Common Issues

**Issue**: OpenCode won't start  
**Solution**: Check installation and dependencies

```bash
# Verify installation
opencode --version

# Check Node.js version
node --version

# Reinstall if needed
curl -fsSL https://opencode.ai/install | bash
```

**Issue**: Permission denied for tools  
**Solution**: Configure permissions in opencode.json

```json
{
  "permission": {
    "edit": "ask",
    "bash": "allow"
  }
}
```

**Issue**: MCP servers not connecting  
**Solution**: Check server configuration and authentication

```bash
# List MCP servers
opencode mcp list

# Debug connection
opencode mcp debug <server-name>
```

**Issue**: Web tools not working  
**Solution**: Enable websearch and check permissions

```bash
# Enable Exa search
OPENCODE_ENABLE_EXA=1 opencode

# Or configure in opencode.json
{
  "permission": {
    "websearch": "allow"
  }
}
```

### Getting Help

- Use `/help` in the TUI
- Check [OpenCode documentation](https://opencode.ai/docs)
- Join the [OpenCode Discord](https://opencode.ai/discord)
- Search [GitHub issues](https://github.com/anomalyco/opencode/issues)

## 📚 Additional Resources

### Official Documentation

- [OpenCode Documentation](https://opencode.ai/docs)
- [OpenWork Documentation](https://openworklabs.com/docs)
- [MCP Protocol](https://modelcontextprotocol.io)

### Learning Resources

- [OpenCode Tutorials](https://opencode.ai/learn)
- [GitHub Repository](https://github.com/anomalyco/opencode)
- [Example Projects](https://github.com/anomalyco/opencode-examples)

### Community & Support

- [Discord Community](https://opencode.ai/discord)
- [GitHub Discussions](https://github.com/anomalyco/opencode/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/opencode)

### Related Projects

- [OpenCode Examples](https://github.com/anomalyco/opencode-examples)
- [MCP Servers Registry](https://github.com/modelcontextprotocol/servers)
- [OpenWork Orchestrator](https://github.com/different-ai/openwork-orchestrator)

---

**Last Updated**: April 10, 2026  
**OpenCode Version**: Latest  
**OpenWork Integration**: Available  

[← Back to Main README](README.md) | [Learning Roadmap →](LEARNING-ROADMAP.md)
