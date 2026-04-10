# 01. Basic Commands

**Location**: `01-basic-commands/`  
**Level**: Beginner  
**Time**: 30 minutes  
**Focus**: Core opencode operations and fundamentals

## 📚 Overview

This module covers the fundamental commands and concepts you need to start using opencode effectively. You'll learn how to interact with the opencode CLI, understand basic syntax, and perform essential operations.

## 🎯 What You'll Learn

- Core opencode command structure
- Basic tool usage patterns
- Common flags and options
- Getting help and documentation
- Essential workflows for beginners

## 🚀 Quick Start

### Basic Command Structure

```bash
# General format
opencode <tool> [options] [arguments]

# Examples
opencode read /path/to/file
opencode edit file.txt --old="text" --new="replacement"
opencode bash "ls -la"
```

### Getting Help

```bash
# View available tools
opencode --help

# Get help for specific tool
opencode read --help
opencode edit --help
opencode bash --help
```

### Common Operations

```bash
# Check opencode version
opencode --version

# List available tools
opencode --list-tools

# View configuration
opencode --config
```

## 📖 Detailed Topics

### 1. Command Syntax

OpenCode follows a consistent command structure:

```
opencode <tool> [--option=value] [arguments]
```

**Key Components:**
- `tool`: The operation to perform (read, edit, write, glob, grep, bash)
- `options`: Modify tool behavior (--offset, --limit, --include, etc.)
- `arguments`: Inputs specific to the tool (file paths, patterns, commands)

### 2. Tool Overview

| Tool | Purpose | Basic Example |
|------|---------|---------------|
| `read` | Read files/directories | `opencode read file.txt` |
| `edit` | Edit existing files | `opencode edit file.txt --old="a" --new="b"` |
| `write` | Write new files | `opencode write new.txt --content="text"` |
| `glob` | Find files by pattern | `opencode glob "**/*.js"` |
| `grep` | Search file contents | `opencode grep "TODO"` |
| `bash` | Execute shell commands | `opencode bash "ls -la"` |

### 3. Common Options

**Global Options (work with most tools):**
- `--help`: Show help for the tool
- `--version`: Show opencode version
- `--verbose` or `-v`: Show detailed output
- `--quiet` or `-q`: Reduce output noise

**Tool-Specific Options:**
- `read`: `--offset`, `--limit`
- `edit`: `--replaceAll`
- `grep`: `--include`, `--path`
- `bash`: `--workdir`, `--timeout`

## 🧪 Hands-on Exercises

### Exercise 1: Explore Basic Commands

```bash
# 1. Check your opencode version
opencode --version

# 2. List available tools
opencode --list-tools

# 3. Get help for the read tool
opencode read --help

# 4. Try reading the current directory
opencode read .
```

### Exercise 2: Understand Tool Syntax

```bash
# 1. Read a file with options
opencode read README.md --limit=10

# 2. Search for patterns
opencode grep "function" --include="*.js"

# 3. Execute a simple bash command
opencode bash "pwd"

# 4. Find files by pattern
opencode glob "*.md"
```

### Exercise 3: Combine Commands

```bash
# 1. Chain commands with &&
opencode bash "cd /tmp && pwd"

# 2. Use command substitution
FILES=$(opencode glob "**/*.js")
echo "Found $(echo "$FILES" | wc -l) JavaScript files"

# 3. Pipe output between commands
opencode read large-file.txt --limit=50 | head -20
```

## 📋 Best Practices

### ✅ Do

- **Start with `--help`** when learning a new tool
- **Use descriptive arguments** that make commands self-documenting
- **Test commands in safe environment** before running on important files
- **Chain commands logically** using `&&` for dependent operations
- **Use command substitution** to capture output for further processing

### ❌ Don't

- **Don't run destructive commands** without backups
- **Don't ignore error messages** - they provide valuable information
- **Don't use complex one-liners** when separate commands are clearer
- **Don't hardcode sensitive information** in commands
- **Don't skip testing** on non-critical files first

## 🔧 Common Use Cases

### 1. Project Exploration

```bash
# Explore a new codebase
opencode read .  # Root directory
opencode read src/  # Source code
opencode glob "**/*.js"  # Find JavaScript files
opencode grep "TODO\|FIXME"  # Find todos
```

### 2. Quick File Operations

```bash
# View file contents
opencode read config.json

# Make simple edits
opencode edit script.sh --old="localhost" --new="production-server"

# Create new files
opencode write notes.md --content="# Meeting Notes\n\n## Agenda\n1. Item one"
```

### 3. System Information

```bash
# Check system status
opencode bash "uname -a"
opencode bash "df -h"
opencode bash "free -h"

# Process information
opencode bash "ps aux | grep node"
opencode bash "top -b -n 1 | head -20"
```

## 🚨 Troubleshooting

### Command Not Found

```bash
# Check if opencode is installed
which opencode

# Check installation
opencode --version

# Verify PATH includes opencode
echo $PATH | grep opencode
```

### Permission Issues

```bash
# Check file permissions
opencode bash "ls -la /path/to/file"

# Run with appropriate permissions
sudo opencode read /protected/file  # If needed
```

### Syntax Errors

```bash
# Check command syntax
opencode --help

# Simplify complex commands
# Instead of: opencode read file | grep pattern | head -10
# Try: opencode grep "pattern" --path="file" | head -10
```

## 📚 Additional Resources

- [OpenCode Official Documentation](https://opencode.ai/docs)
- [Command Line Basics](https://opencode.ai/docs/basics)
- [Tool Reference](https://opencode.ai/docs/tools)

## 🎓 Next Steps

Once you're comfortable with basic commands, proceed to:

1. **[02-file-reading](02-file-reading)**: Learn to read files and directories effectively
2. **[03-file-operations](03-file-operations)**: Master file editing and creation
3. **[04-search-tools](04-search-tools)**: Find files and content efficiently

---

**Ready for more?** Take the Basic Commands Quiz to test your understanding before moving on to the next module.

[← Back to Learning Roadmap](../LEARNING-ROADMAP.md) | [Next: File Reading →](02-file-reading/README.md)