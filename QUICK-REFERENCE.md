# OpenCode Quick Reference

## CLI Commands

| Command                      | Description                             |
| ---------------------------- | --------------------------------------- |
| `opencode`                   | Launch the TUI in the current directory |
| `opencode <directory>`       | Launch the TUI in a specific directory  |
| `opencode run 'prompt'`      | Run a one-shot prompt without the TUI   |
| `opencode agent list`        | List available agents                   |
| `opencode agent create`      | Create a custom agent                   |
| `opencode account login`     | Authenticate with a provider            |
| `opencode account list`      | List authenticated providers            |
| `opencode account logout`    | Log out of a provider                   |
| `opencode mcp add <name>`    | Add an MCP server                       |
| `opencode mcp list`          | List configured MCP servers             |
| `opencode mcp auth`          | Authenticate an MCP server              |
| `opencode mcp debug`         | Debug MCP server connection             |
| `opencode mcp logout`        | Remove MCP server auth                  |
| `opencode models [provider]` | List available models                   |
| `opencode providers`         | List configured providers               |
| `opencode session list`      | List previous sessions                  |
| `opencode stats`             | Show usage statistics                   |
| `opencode export [id]`       | Export a session                        |
| `opencode import <file>`     | Import a session                        |
| `opencode serve`             | Start headless API server (port 4096)   |
| `opencode web`               | Start server + open web interface       |
| `opencode attach`            | Attach TUI to a running server          |
| `opencode pr`                | Pull request operations                 |
| `opencode github install`    | Install GitHub integration              |
| `opencode github run`        | Run GitHub Actions locally              |
| `opencode generate`          | Generate config or scaffold files       |
| `opencode db`                | Database management commands            |
| `opencode acp`               | Start ACP server for IDE integration    |
| `opencode upgrade [target]`  | Upgrade OpenCode                        |
| `opencode uninstall`         | Uninstall OpenCode                      |
| `opencode --version`         | Show version                            |
| `opencode --help`            | Show help                               |

## TUI Slash Commands

| Command     | Shortcut | Description                   |
| ----------- | -------- | ----------------------------- |
| `/help`     | Ctrl+X H | Show available commands       |
| `/undo`     | Ctrl+X U | Undo last file change         |
| `/redo`     | Ctrl+X R | Redo last undone change       |
| `/share`    | Ctrl+X S | Share current session         |
| `/init`     | Ctrl+X I | Initialize project config     |
| `/connect`  |          | Connect to an MCP server      |
| `/compact`  | Ctrl+X C | Summarize and compact context |
| `/new`      | Ctrl+X N | Start a new session           |
| `/sessions` | Ctrl+X L | List previous sessions        |
| `/exit`     | Ctrl+X Q | Quit OpenCode                 |
| `/themes`   | Ctrl+X T | Change color theme            |
| `/models`   | Ctrl+X M | Switch LLM model              |
| `/editor`   | Ctrl+X E | Open external editor          |
| `/export`   | Ctrl+X X | Export current session        |
| `/details`  | Ctrl+X D | Toggle detail view            |
| `/thinking` |          | Toggle thinking display       |
| `/unshare`  |          | Unshare current session       |

## Additional Keyboard Shortcuts

| Keybind         | Action                      |
| --------------- | --------------------------- |
| `Tab`           | Cycle agents (Build ↔ Plan) |
| `Shift+Tab`     | Cycle agents (reverse)      |
| `Ctrl+X G`      | Show session timeline       |
| `Ctrl+X B`      | Toggle sidebar              |
| `Ctrl+X A`      | List agents                 |
| `F2`            | Cycle recently used models  |
| `Ctrl+T`        | Cycle model variants        |
| `Ctrl+R`        | Rename session              |
| `Ctrl+X H`      | Toggle tips/hints           |
| `Escape`        | Interrupt current request   |
| `Ctrl+C`        | Clear input                 |

## Agents

| Agent       | Type              | Description                                  |
| ----------- | ----------------- | -------------------------------------------- |
| **Build**   | Primary (default) | Full access to all tools                     |
| **Plan**    | Primary           | Edit tools denied — read-only + plan files   |
| **General** | Subagent          | Full tools (except todo), spawned by primary |
| **Explore** | Subagent          | Read-only (read, search, bash, web), spawned for research |

- `Tab` — Cycle forward through primary agents (Build ↔ Plan)
- `Shift+Tab` — Cycle backward

## LLM-Internal Tools

> These are NOT CLI commands. The LLM calls them automatically when you ask it to do things.

| Tool          | Purpose                                    |
| ------------- | ------------------------------------------ |
| `bash`        | Run shell commands                         |
| `read`        | Read file or directory contents            |
| `edit`        | Find-and-replace in files                  |
| `multiedit`   | Edit multiple files in one operation       |
| `write`       | Create or overwrite files                  |
| `apply_patch` | Apply a unified diff                       |
| `glob`        | Find files by name pattern                 |
| `grep`        | Search file contents                       |
| `codesearch`  | Semantic code search across codebase       |
| `list`        | List directory entries                     |
| `webfetch`    | Fetch a URL's content                      |
| `websearch`   | Search the web (requires Exa)              |
| `question`    | Ask the user a question                    |
| `todowrite`   | Manage a task list                         |
| `task`        | Spawn subagent tasks for parallel work     |
| `skill`       | Load a SKILL.md workflow                   |
| `plan_enter`  | Switch to Plan agent (from Build)          |
| `plan_exit`   | Switch to Build agent (from Plan)          |
| `lsp`         | Language server queries (experimental)     |

## File References

Use `@` in prompts to reference files:

| Format            | Example              |
| ----------------- | -------------------- |
| `@file`           | `@package.json`      |
| `@file:line`      | `@src/main.js:15`    |
| `@file:start-end` | `@src/main.js:10-20` |
| `@directory/`     | `@src/components/`   |

## Configuration

| File                   | Purpose                                          |
| ---------------------- | ------------------------------------------------ |
| `.opencode/`           | Project config directory                         |
| `opencode.json`        | Main configuration file (JSONC comments allowed) |
| `AGENTS.md`            | Project-level instructions for the LLM           |
| `.opencode/tui.json`   | TUI appearance settings                          |
| `.opencode/commands/`  | Custom slash commands                            |
| `.opencode/agents/`    | Custom agent definitions                         |
| `.opencode/skills/`    | Project-specific skills                          |
| `.opencode/plugins/`   | Project-specific plugins                         |
| `.opencode/tools/`     | Custom tools (TypeScript/JS)                     |
| `.opencode/plans/`     | Plan files written by the Plan agent             |

## Key Environment Variables

| Variable                              | Purpose                          |
| ------------------------------------- | -------------------------------- |
| `OPENCODE_ENABLE_EXA=1`               | Enable web search via Exa        |
| `OPENCODE_EXPERIMENTAL_LSP_TOOL=true` | Enable experimental LSP tool     |
| `OPENCODE_CONFIG`                     | Path to custom config file       |
| `OPENCODE_CONFIG_CONTENT`             | Inline JSON config content       |
| `OPENCODE_SERVER_PASSWORD`            | Password for serve/web auth      |
| `OPENCODE_DISABLE_CLAUDE_CODE=1`      | Disable reading CLAUDE.md files  |
| `OPENCODE_EXPERIMENTAL=1`             | Enable all experimental features |

## Plugins & Custom Tools

| Location                         | Purpose                          |
| -------------------------------- | -------------------------------- |
| `.opencode/plugins/`             | Project-specific plugins         |
| `~/.config/opencode/plugins/`    | Global plugins                   |
| `opencode.json` `"plugin"` array | npm plugins (auto-installed)     |
| `.opencode/tools/`               | Custom tools (TypeScript/JS)     |
| `~/.config/opencode/tools/`      | Global custom tools              |
| `.opencode/commands/`            | Custom slash commands (Markdown) |
| `~/.config/opencode/commands/`   | Global custom commands           |

## Config Precedence (later overrides earlier)

1. Remote (`.well-known/opencode`)
2. Global (`~/.config/opencode/opencode.json`)
3. Custom (`OPENCODE_CONFIG` env var)
4. Project (`opencode.json`)
5. `.opencode/` directories
6. Inline (`OPENCODE_CONFIG_CONTENT` env var)
7. Managed (`/etc/opencode/`)

## Granular Permissions Example

```json
{
  "permission": {
    "bash": { "*": "ask", "git *": "allow", "rm *": "deny" },
    "edit": { "*": "allow", "*.env": "deny" }
  }
}
```

## Common Workflows

### 1. Explore and Edit

```
1. Ask: "What files are in this project?"
2. Ask: "Explain @src/main.ts"
3. Ask: "Change the port from 3000 to 8080 in @src/config.ts"
4. Ask: "Run the tests"
```

### 2. Code Search

```
1. Ask: "Find all TypeScript files"
2. Ask: "Search for TODO comments across the codebase"
3. Ask: "Show me the file with the UserService class"
4. Ask: "Refactor the error handling in that file"
```

### 3. One-Shot from Terminal

```bash
opencode run 'Explain what this project does'
opencode run 'Find and fix any TypeScript errors'
cat error.log | opencode run 'What caused this error?'
```

### 4. MCP Server Setup

```bash
opencode mcp add github
opencode mcp list
# Then in TUI: /connect
```

## OpenWork Integration

| Feature                                | How To                |
| -------------------------------------- | --------------------- |
| `npm install -g openwork-orchestrator` | Install self-hosted   |
| `openwork start --workspace /path`     | Start orchestrator    |
| `openwork start --approval auto`       | Auto-approve mode     |
| Settings > Connect Provider            | Add LLM keys          |
| Settings > Extensions > Control Chrome | Browser automation    |
| Settings > Messaging                   | Slack bot tokens      |
| Settings > Automations                 | Scheduled prompts     |
| Settings > Cloud                       | Team features         |
| `/skill-creator`                       | Create skills in chat |
| share.openworklabs.com                 | Share/import skills   |

See [openworklabs.com/docs](https://openworklabs.com/docs/get-started) for full documentation.

## Getting Help

- **Official docs**: <https://opencode.ai/docs>
- **OpenWork docs**: <https://openworklabs.com/docs>
- **`/help`**: Inside the TUI
- **`opencode --help`**: On the command line
