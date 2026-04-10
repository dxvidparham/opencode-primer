# 01. Basic Commands & TUI

**Location**: `01-basic-commands/`  
**Level**: Beginner  
**Time**: 30 minutes  
**Focus**: OpenCode's terminal user interface and core interaction patterns

## 📚 Overview

This module introduces you to opencode's primary interface: the Terminal User Interface (TUI). You'll learn how to start opencode, navigate the conversation interface, use slash commands, and understand the basic workflow for AI-assisted coding.

## 🎯 What You'll Learn

- Starting and navigating the opencode TUI
- Using slash commands (`/help`, `/undo`, `/redo`, `/share`)
- File references with `@` symbol
- Plan mode vs Build mode (Tab key toggle)
- Basic conversation flow and context management

## 🚀 Quick Start

### Starting OpenCode

```bash
# Start opencode in your project directory
cd /path/to/your-project
opencode

# Start with a specific prompt
opencode "Explain this project's structure"
```

### Basic TUI Navigation

Once opencode starts, you'll see:
- **Prompt input** at the bottom for typing requests
- **Conversation history** showing your dialogue with the AI
- **Status indicators** showing mode and context

### Essential Slash Commands

```bash
# Get help
/help

# Undo last change
/undo

# Redo undone change
/redo

# Share conversation (creates shareable link)
/share

# Initialize project analysis
/init
```

### File References

Reference files in your conversation using `@`:

```
Look at the authentication code in @src/auth.js
Explain how this function works in @utils/helpers.ts
```

## 📖 Detailed Topics

### 1. The TUI Interface

OpenCode's TUI provides a conversational interface where you work with an AI coding agent:

- **Conversation Flow**: Natural language prompts and responses
- **Context Awareness**: opencode understands your project structure
- **Multi-turn Dialogues**: Continue conversations across multiple exchanges
- **Visual Feedback**: See when opencode is thinking or using tools

### 2. Slash Commands

Slash commands provide quick access to common functions:

| Command | Purpose | Example |
|---------|---------|---------|
| `/help` | Show help and available commands | `/help` |
| `/undo` | Undo the last change opencode made | `/undo` |
| `/redo` | Redo a previously undone change | `/redo` |
| `/share` | Create shareable link to conversation | `/share` |
| `/init` | Analyze project and create AGENTS.md | `/init` |
| `/connect` | Configure LLM providers | `/connect` |
| `/compact` | Reduce context size for long conversations | `/compact` |

### 3. File References with `@`

The `@` symbol lets you reference files in your prompts:

```bash
# Basic file reference
@src/index.js

# Multiple files
@src/utils.js @src/helpers.js

# File with line numbers
@src/file.js:10-20  # Lines 10-20
```

**Examples in conversation:**
- "Explain the authentication logic in `@src/auth.js`"
- "Compare `@config/dev.json` and `@config/prod.json`"
- "Fix the bug in `@src/components/Button.js:45`"

### 4. Plan Mode vs Build Mode

Toggle between modes with the **Tab** key:

- **Plan Mode** (indicator shows "Plan"): opencode suggests implementation plans without making changes
- **Build Mode** (indicator shows "Build"): opencode can execute tools and modify files

**Workflow:**
1. Start in Plan mode (default for complex requests)
2. Review the implementation plan
3. Switch to Build mode with Tab
4. Ask opencode to execute the plan

### 5. Conversation Management

- **Context Window**: opencode maintains conversation history
- **Auto-compact**: Long conversations are automatically summarized
- **Manual compact**: Use `/compact` to reduce context size
- **Session persistence**: Conversations are saved and can be resumed

## 🧪 Hands-on Exercises

### Exercise 1: Explore the Interface

```bash
# 1. Start opencode
cd /path/to/your-project
opencode

# 2. Get help
/help

# 3. Ask about project structure
"What's the overall structure of this project?"

# 4. Try file references
"Show me the main entry point @src/index.js"

# 5. Exit opencode
Press Ctrl+C or type /exit
```

### Exercise 2: Use Basic Commands

```bash
# 1. Start opencode
opencode

# 2. Make a simple request
"Create a simple hello world function in a new file"

# 3. If you don't like the change, undo it
/undo

# 4. Redo if you change your mind
/redo

# 5. Share the conversation
/share
# Copy the link to share with others
```

### Exercise 3: Plan and Build Workflow

```bash
# 1. Start in Plan mode (default for complex requests)
opencode

# 2. Ask for a complex feature
"Add user authentication with JWT tokens"

# 3. Review the plan opencode creates
# (It will list files to create/modify without making changes)

# 4. Switch to Build mode
Press Tab (see indicator change from "Plan" to "Build")

# 5. Execute the plan
"Go ahead and implement the authentication system"
```

### Exercise 4: File References Practice

```bash
# 1. Start in a project with existing code
opencode

# 2. Reference specific files
"Explain how error handling works in @src/utils/error.js"

# 3. Compare files
"Compare the configuration in @config/dev.json and @config/prod.json"

# 4. Reference with line numbers
"Look at the function starting at @src/components/Modal.js:25"

# 5. Multiple file analysis
"Check for consistency between @src/api/users.js and @src/api/posts.js"
```

## 📋 Best Practices

### ✅ Do

- **Start with `/init`** to let opencode analyze your project
- **Use Plan mode** for complex features before implementation
- **Reference files with `@`** for precise context
- **Use `/undo` frequently** to explore different approaches
- **Share conversations** with team members for collaboration
- **Be specific in prompts** for better results

### ❌ Don't

- **Don't assume opencode knows** about files you haven't referenced
- **Don't skip Plan mode** for major changes
- **Don't ignore `/undo`** - it's your safety net
- **Don't use vague prompts** - be as specific as possible
- **Don't forget to configure providers** with `/connect` if needed

## 🔧 Common Use Cases

### 1. Project Onboarding

```bash
# New to a codebase? Let opencode explain it
opencode
"What's the overall architecture of this project?"
"Show me the main components in @src/components/"
"Explain the build process in @package.json"
```

### 2. Code Understanding

```bash
# Understand complex code
"Explain the data flow in @src/redux/store.js"
"How does the caching work in @src/utils/cache.js?"
"What design pattern is used in @src/components/Factory.js?"
```

### 3. Debugging Assistance

```bash
# Get help with debugging
"I'm getting an error in @src/api/server.js:132, can you help?"
"The test @tests/user.test.js is failing, suggest fixes"
"Performance is slow in @src/components/DataGrid.js, optimize it"
```

### 4. Learning and Exploration

```bash
# Learn from existing code
"Show me examples of error handling patterns in this codebase"
"What testing strategies are used in @tests/"
"How is dependency injection implemented here?"
```

## 🚨 Troubleshooting

### OpenCode Won't Start

```bash
# Check installation
opencode --version

# Verify in project directory
pwd
ls -la

# Check for configuration issues
/connect  # Ensure providers are configured
```

### No Response or Freezing

```bash
# Check network connectivity
# Verify API keys are valid
# Try simpler prompts first
# Use /compact if conversation is very long
```

### File References Not Working

```bash
# Ensure file exists
ls -la @src/file.js

# Check file permissions
# Use relative paths from project root
# Try without line numbers first
```

### Slash Commands Not Recognized

```bash
# Check you're in the TUI (not CLI mode)
# Type slowly to avoid typos
# Use /help to see available commands
```

## 📚 Additional Resources

- [OpenCode TUI Documentation](https://opencode.ai/docs/tui)
- [Getting Started Guide](https://opencode.ai/docs/)
- [Slash Commands Reference](https://opencode.ai/docs/commands)
- [File Reference Syntax](https://opencode.ai/docs/tui#file-references)

## 🎓 Next Steps

Once you're comfortable with the TUI interface, proceed to:

1. **[02-file-operations](02-file-operations)**: Learn how opencode reads, edits, and writes files
2. **[03-search-tools](03-search-tools)**: Master codebase navigation with search tools
3. **[04-bash-integration](04-bash-integration)**: Learn how opencode executes shell commands

---

**Ready for more?** Practice by exploring different projects and getting comfortable with the conversational workflow.

[← Back to Learning Roadmap](../LEARNING-ROADMAP.md) | [Next: File Operations →](02-file-operations/README.md)