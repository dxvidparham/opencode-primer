# OpenCode Quick Reference

## Core Commands & TUI

| Command | Description | Example |
|---------|-------------|---------|
| `@file` | Reference file in conversation | `@src/main.js:15` |
| `Tab` | Toggle Plan/Build mode | Press Tab key |
| `↑/↓` | Navigate command history | Arrow keys |
| `Ctrl+R` | Search command history | Type then press |
| `Ctrl+C` | Cancel current operation | Interrupt command |

## File Operations

| Tool | Description | Example |
|------|-------------|---------|
| `read` | Read file content | `read /path/to/file` |
| `edit` | Edit file content | `edit file.js` (find and replace) |
| `write` | Create/write file | `write newfile.js` with content |
| `glob` | Find files by pattern | `glob **/*.js` |
| `grep` | Search file contents | `grep "function" *.js` |
| `list` | Advanced file listing | `list --pattern="*.ts"` |

## Shell Integration

| Command | Description | Example |
|---------|-------------|---------|
| `bash` | Run shell command | `bash ls -la` |
| `npm` | Node.js package manager | `bash npm install` |
| `git` | Version control | `bash git status` |
| `docker` | Container management | `bash docker ps` |
| Environment | Current directory | `/home/user/project` |

## Interactive Tools

| Tool | Description | Example |
|------|-------------|---------|
| `question` | Ask user questions | Multiple choice options |
| `todowrite` | Manage task lists | Todo items with status |
| Custom | Type your own answer | Free text input |

## Web Tools

| Tool | Description | Example |
|------|-------------|---------|
| `webfetch` | Fetch URL content | `Fetch https://example.com` |
| `websearch` | Search the web | `Search "opencode tutorial"` |
| Formats | markdown/text/html | `with format: markdown` |
| Timeout | Max seconds | `with timeout: 30` |

## Automation & Agents

| Tool | Description | Example |
|------|-------------|---------|
| `skill` | Load specialized workflow | `Load skill: "code-reviewer"` |
| `task` | Launch autonomous agent | `Launch explore agent` |
| `explore` | Codebase exploration | `thoroughness: "very thorough"` |
| `general` | Complex task execution | Multi-step implementation |

## MCP Servers

| Server Type | Description | Example |
|-------------|-------------|---------|
| Filesystem | Browse/manage files | `Connect to MCP server: "filesystem"` |
| Database | Query databases | `Connect to MCP server: "postgres"` |
| Docker | Container management | `Connect to MCP server: "docker"` |
| GitHub | Repository access | `Connect to MCP server: "github"` |

## OpenWork (Team Collaboration)

| Command | Description | Example |
|---------|-------------|---------|
| `openwork` | OpenWork CLI | `openwork workspace create` |
| `--workspace` | Specify workspace | `opencode --workspace "api-gateway"` |
| `--collaborate` | Start session | `opencode --collaborate` |
| `--join-session` | Join existing | `opencode --join-session "id-123"` |

## Common Workflows

### 1. File Editing
```
1. read file.js
2. edit file.js (replace old with new)
3. bash git diff (check changes)
4. bash git commit -m "message"
```

### 2. Code Search
```
1. glob **/*.ts
2. grep "interface User" *.ts
3. read matching-file.ts:10
4. edit based on findings
```

### 3. Web Research
```
1. Search "React hooks tutorial"
2. Fetch relevant URL
3. Extract key information
4. Apply to current task
```

### 4. Task Management
```
1. todowrite (create task list)
2. question (gather requirements)
3. Execute tasks (mark in_progress/completed)
4. Update todo list
```

### 5. Database Operations
```
1. Connect to MCP server: "postgres"
2. Execute SQL: "SELECT * FROM users"
3. Analyze results
4. Update schema or data
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Tab` | Toggle Plan/Build mode |
| `Ctrl+Space` | Auto-complete |
| `Ctrl+R` | Search history |
| `Ctrl+C` | Cancel/Interrupt |
| `↑/↓` | Navigate history |
| `Ctrl+L` | Clear screen |

## File Reference Syntax

| Format | Meaning | Example |
|--------|---------|---------|
| `@file` | Reference file | `@package.json` |
| `@file:line` | Specific line | `@src/main.js:15` |
| `@file:start-end` | Line range | `@file.js:10-20` |
| `@dir/` | Directory | `@src/components/` |

## Error Handling

| Situation | Action |
|-----------|--------|
| Command failed | Check syntax and permissions |
| File not found | Verify path with `glob` |
| Permission denied | Check file permissions |
| Network error | Verify connectivity |
| Timeout | Increase timeout or retry |

## Configuration Files

| File | Location | Purpose |
|------|----------|---------|
| opencode config | `~/.config/opencode/` | User preferences |
| MCP servers | `~/.config/opencode/mcp/` | Server configurations |
| Plugins | `~/.config/opencode/plugins/` | Custom extensions |
| OpenWork | `~/.config/openwork/` | Team workspace config |

## Plugin System Events

| Event | Trigger | Use Case |
|-------|---------|----------|
| `tool.execute.before` | Before tool runs | Validate inputs |
| `tool.execute.after` | After tool runs | Log results |
| `session.created` | New session | Initialize context |
| `file.edited` | File modified | Auto-format/lint |
| `permission.asked` | Permission request | Custom auth logic |

## Common Patterns

### Pattern Matching
```bash
# Find React components
glob **/*.{jsx,tsx}

# Find test files
glob **/*.{test,spec}.{js,ts}

# Find configuration files
glob **/*.{json,yml,yaml,env}
```

### Content Search
```bash
# Find function definitions
grep "function\\s+\\w+" *.js

# Find TODO comments
grep "TODO|FIXME|HACK" **/*

# Find error handling
grep "try\\s*{|catch\\s*(" **/*.js
```

### Batch Operations
```bash
# Multiple file reads
read file1.js && read file2.js && read file3.js

# Parallel searches
grep "pattern1" **/*.js & grep "pattern2" **/*.ts

# Chained edits
edit file.js (replace A with B) && edit file.js (replace C with D)
```

## Performance Tips

1. **Use glob before grep** - Limit search scope
2. **Read specific lines** - Not entire large files
3. **Cache results** - Reuse previous searches
4. **Parallel operations** - When independent
5. **Limit output** - Use grep filters

## Security Best Practices

1. **Validate URLs** before fetching
2. **Sanitize inputs** to tools
3. **Check permissions** for file operations
4. **Use env vars** for secrets
5. **Audit plugin code** before installing

## Getting Help

- **Official docs**: https://opencode.ai/docs
- **OpenWork docs**: https://openworklabs.com/docs
- **Community**: GitHub issues and discussions
- **/help command**: Get CLI help

## Version Information

This quick reference is for opencode version 1.0+ and OpenWork integration.
Check `opencode --version` for your specific version.