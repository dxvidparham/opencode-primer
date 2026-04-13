# Quick Start Examples

> 📌 **This is a hands-on companion to [Module 01: Basic Commands & TUI](../README.md).** Start with the module README for concepts, or work through these exercises alongside it.

These examples demonstrate how to get started with OpenCode quickly.

## Installation

```bash
# Install OpenCode
curl -fsSL https://opencode.ai/install | bash

# Verify installation
opencode --version

# Get help
opencode --help
```

## Launching the TUI

```bash
# Start OpenCode in the current directory
opencode

# Run a one-shot prompt without entering the TUI
opencode run 'What files are in this project?'
```

## First Conversation

Once inside the TUI, you type natural language. OpenCode's LLM reads files, runs commands, and edits code on your behalf.

**Example prompts to try:**

```
Read the README.md and summarize it
```

```
List all JavaScript files in this project
```

```
What does the main function do in src/main.ts?
```

## Slash Commands

Type these commands in the TUI prompt (starting with `/`). Most also have keyboard shortcuts via the `ctrl+x` leader key.

**Complete Slash Command Reference:**

| Command     | Purpose                         | Keybind    | When to Use                           |
| ----------- | ------------------------------- | ---------- | ------------------------------------- |
| `/help`     | Show help dialog                | `ctrl+x h` | When learning or forgetting commands  |
| `/undo`     | Undo last change (uses Git)     | `ctrl+x u` | Made a mistake or want to revert      |
| `/redo`     | Redo undone change              | `ctrl+x r` | Changed your mind about undo          |
| `/share`    | Create shareable link           | `ctrl+x s` | Sharing work with team or community   |
| `/init`     | Create/update AGENTS.md         | `ctrl+x i` | Starting work on a new project        |
| `/connect`  | Configure LLM provider          | —          | Setting up different AI providers     |
| `/compact`  | Reduce context                  | `ctrl+x c` | Long conversations getting slow       |
| `/new`      | Start new session               | `ctrl+x n` | Starting a fresh conversation         |
| `/sessions` | List/switch sessions            | `ctrl+x l` | Resuming previous work                |
| `/exit`     | Exit OpenCode                   | `ctrl+x q` | Done working (aliases: `/quit`, `/q`) |
| `/themes`   | Change color theme              | `ctrl+x t` | Customizing appearance                |
| `/models`   | List available models           | `ctrl+x m` | Switching AI models                   |
| `/editor`   | Open external editor            | `ctrl+x e` | Composing long prompts                |
| `/export`   | Export conversation to Markdown | `ctrl+x x` | Saving conversation to file           |
| `/details`  | Toggle tool execution details   | `ctrl+x d` | Debugging tool calls                  |
| `/thinking` | Toggle reasoning visibility     | —          | Seeing model's thought process        |

## File References

Use `@` to reference files in your prompts:

```
Explain @src/main.ts
```

```
Compare @config/dev.json and @config/prod.json
```

## Switching Agents

| Key         | Action                                              |
| ----------- | --------------------------------------------------- |
| `Tab`       | Cycle forward through primary agents (Build → Plan) |
| `Shift+Tab` | Cycle backward through primary agents               |

- **Build** (default): Full access to all tools — reads, writes, runs commands
- **Plan**: Restricted mode — bash and edit require your approval before executing

## One-Shot CLI Examples

```bash
# Ask a question without entering the TUI
opencode run 'Explain what this project does'

# Pipe input and ask about it
cat error.log | opencode run 'What caused this error?'

# Use single quotes to avoid shell interpretation
opencode run 'Create a .gitignore for a Node.js project'
```

## Practice Exercises

### Exercise 1: Explore Your Project

1. Open a terminal in any project directory
2. Run `opencode`
3. Try these prompts:
   - `What files are in this project?`
   - `Read package.json and explain the dependencies`
   - `Find all TODO comments in the codebase`

### Exercise 2: Make an Edit

1. Inside the TUI, ask:
   - `Add a comment at the top of README.md explaining this project`
2. OpenCode will show you the proposed edit
3. Approve or reject the change

### Exercise 3: Use One-Shot Mode

```bash
# From your terminal (not inside the TUI)
opencode run 'List all files larger than 1MB in this directory'
opencode run 'What Node.js version does this project require?'
```

## Next Steps

- Return to the [Module 01 README](../README.md) for core concepts (agents, slash commands, file references, conversation management)
- Continue to [Module 02: File Operations](../../02-file-operations/README.md)
- See the [Quick Reference](../../QUICK-REFERENCE.md) for a command cheat sheet

---

**Tip**: Always use single quotes around prompts in `opencode run` to prevent your shell from interpreting special characters.
