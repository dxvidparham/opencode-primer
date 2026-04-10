<div align="center">

# 💻 04. Bash Integration

**Execute shell commands and integrate with terminal workflows**

[![Module Level](https://img.shields.io/badge/Level-Intermediate-orange)]()
[![Time Required](https://img.shields.io/badge/Time-60_min-yellow)]()
[![Prerequisites](https://img.shields.io/badge/Prerequisites-Module_03-blue)]()
[![OpenCode Version](https://img.shields.io/badge/OpenCode-1.0+-purple)]()

[⬅️ Previous Module](../03-search-tools/)] • [🏠 Main Menu](../README.md) • [Next Module ➡️](../05-question-todo/)

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
# 04. Bash Integration

**Location**: `04-bash-integration/`  
**Level**: Intermediate  
**Time**: 1 hour  
**Focus**: Executing shell commands through opencode's `bash` tool

## 📚 Overview

This module covers opencode's `bash` tool, which allows the AI agent to execute shell commands in your project environment. You'll learn how opencode can run terminal commands, how to control permissions, and how to combine bash operations with other tools.

## 🎯 What You'll Learn

- Execute shell commands with the `bash` tool
- Understand permission configurations for bash operations
- Chain commands and handle errors
- Combine bash with file operations and search tools
- Use workdir parameter for directory management

## 🚀 Quick Start

### Basic Bash Commands

```bash
# Run simple commands
opencode bash "pwd"
opencode bash "ls -la"
opencode bash "git status"

# Install dependencies
opencode bash "npm install"
opencode bash "pip install -r requirements.txt"
opencode bash "bundle install"

# Check versions
opencode bash "node --version"
opencode bash "python --version"
opencode bash "docker --version"
```

### Command Chaining

```bash
# Chain commands with &&
opencode bash "cd /tmp && pwd"
opencode bash "npm install && npm run build"
opencode bash "git pull && npm test"

# Multiple commands
opencode bash "mkdir -p logs && touch logs/app.log && chmod 644 logs/app.log"
```

## 📖 Detailed Topics

### 1. The `bash` Tool

The `bash` tool executes shell commands in your project environment:

```bash
# Basic syntax
opencode bash "<command>"

# Examples
opencode bash "ls -la"
opencode bash "git log --oneline -5"
opencode bash "docker-compose up -d"
opencode bash "npm run test:coverage"
```

**Important Considerations:**
- Commands run in your project's context
-
.

### 2. Permission Configuration

Bash tool permissions are controlled in `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "bash": "ask"  // Options: "allow", "deny", "ask"
  }
}
```

**Permission Levels:**
-
.

### 3. Command Safety

```bash
# Safe commands (typically allowed)
opencode bash "pwd"
opencode bash "ls"
opencode bash "git status"
opencode bash "npm run lint"

# Potentially dangerous commands (may require approval)
opencode bash "rm -rf node_modules/"
opencode bash "git reset --hard HEAD"
opencode bash "docker system prune -f"
opencode bash "sudo apt-get update"
```

### 4. Combining with Other Tools

```bash
# Read file then process with bash
opencode read package.json
opencode bash "npm install"

# Search for files then process
for file in $(opencode glob "**/*.test.js"); do
  opencode bash "node $file"
done

# Edit file then test
opencode edit src/index.js --old="localhost" --new="production-server"
opencode bash "npm test"
```

## 🧪 Hands-on Exercises

### Exercise 1: Basic System Operations

```bash
# 1. Check current directory
opencode bash "pwd"

# 2. List files
opencode bash "ls -la"

# 3. Check git status
opencode bash "git status"

# 4. Check system information
opencode bash "uname -a"
opencode bash "df -h"
opencode bash "free -h"
```

### Exercise 2: Dependency Management

```bash
# 1. Install Node.js dependencies
opencode bash "npm install"

# 2. Run tests
opencode bash "npm test"

# 3. Build project
opencode bash "npm run build"

# 4. Clean build artifacts
opencode bash "npm run clean"
```

### Exercise 3: Docker Operations

```bash
# 1. Check Docker status
opencode bash "docker --version"
opencode bash "docker-compose --version"

# 2. Start services
opencode bash "docker-compose up -d"

# 3. Check running containers
opencode bash "docker ps"

# 4. View logs
opencode bash "docker-compose logs --tail=50"
```

### Exercise 4: Development Workflow

```bash
# 1. Full development workflow
opencode bash "git pull"
opencode bash "npm install"
opencode bash "npm run lint"
opencode bash "npm test"
opencode bash "npm run build"

# 2. Database operations
opencode bash "npm run db:migrate"
opencode bash "npm run db:seed"

# 3. Start development server
opencode bash "npm run dev"
```

## 📋 Best Practices

### ✅ Do

- **Configure appropriate permissions** in opencode.json
. **Use command chaining** for related operations
- **Test commands in safe environment** first
. **Monitor command output** for errors
- **Combine with other tools** for complete workflows
- **Use workdir parameter** for directory-specific commands

### ❌ Don't

- **Don't allow unrestricted bash access** in production
. **Don't run destructive commands** without confirmation
- **Don't ignore command output** and error codes
. **Don't use bash for file operations** when edit/write tools exist
- **Don't forget about environment differences** (local vs production)
. **Don't run commands with sensitive data** in output

## 🔧 Common Use Cases

### 1. Development Environment Setup

```bash
#!/bin/bash
# setup-dev.sh

echo "Setting up development environment..."
echo

# Check prerequisites
opencode bash "node --version"
opencode bash "npm --version"
opencode bash "git --version"

# Install dependencies
opencode bash "npm install"

# Setup database
opencode bash "npm run db:create"
opencode bash "npm run db:migrate"
opencode bash "npm run db:seed"

# Run initial tests
opencode bash "npm test"

echo "Development environment ready!"
```

### 2. CI/CD Pipeline Commands

```bash
# Build stage
opencode bash "npm ci"  # Clean install
opencode bash "npm run lint"
opencode bash "npm test"
opencode bash "npm run build"

# Docker build
opencode bash "docker build -t app:latest ."
opencode bash "docker push app:latest"

# Deployment
opencode bash "kubectl apply -f k8s/"
opencode bash "kubectl rollout status deployment/app"
```

### 3. Database Management

```bash
# Database backups
opencode bash "pg_dump -U postgres mydb > backup.sql"
opencode bash "gzip backup.sql"

# Migrations
opencode bash "npm run db:migrate"
opencode bash "npm run db:migrate:status"

# Data operations
opencode bash "npm run db:seed"
opencode bash "npm run db:reset"
```

### 4. System Monitoring

```bash
# Check system health
opencode bash "uptime"
opencode bash "free -h"
opencode bash "df -h"
opencode bash "docker ps"

# Check application status
opencode bash "curl -s http://localhost:3000/health"
opencode bash "npm run status"

# Log monitoring
opencode bash "tail -100 logs/app.log"
opencode bash "grep -i error logs/app.log | head -20"
```

## 🚨 Troubleshooting

### Command Failed or No Output

```bash
# Check command syntax
opencode bash "echo 'test command'"  # Test basic command

# Check permissions
# Review opencode.json permission settings

# Check command in terminal directly
# Compare: opencode bash "ls" vs running "ls" manually

# Check for environment differences
opencode bash "env | grep PATH"
```

### Permission Denied Errors

```bash
# Check file permissions
opencode bash "ls -la /path/to/file"

# Check sudo requirements
# May need to configure opencode to run as appropriate user

# Use alternative commands
# Instead of: opencode bash "sudo apt-get update"
# Try: opencode bash "apt-get update" (if permissions allow)
```

### Long-Running Commands

```bash
# For commands that take time
opencode bash "npm install"  # May take several minutes

# Monitor progress
opencode bash "tail -f npm-debug.log"

# Use background processes when appropriate
opencode bash "npm run dev &"
opencode bash "sleep 5 && curl http://localhost:3000"
```

### Environment Variable Issues

```bash
# Check environment
opencode bash "env | grep NODE"

# Set environment variables
opencode bash "NODE_ENV=production npm run build"

# Use .env files
opencode bash "source .env && npm start"
```

## 📚 Additional Resources

- [OpenCode bash Tool](https://opencode.ai/docs/tools#bash)
- [Permission Configuration](https://opencode.ai/docs/permissions)
- [Security Best Practices](https://opencode.ai/docs/security)

## 🎓 Next Steps

Once you're comfortable with bash integration, proceed to:

1. **[05-question-todo](05-question-todo)**: Create interactive workflows with user input
2. **[06-web-tools](06-web-tools)**: Combine bash with web research tools
3. **[07-skills-agents](07-skills-agents)**: Build specialized agents with bash capabilities

---

**Ready for more?** Practice by creating automation scripts that combine bash commands with opencode's other tools.

[← Back to Learning Roadmap](../LEARNING-ROADMAP.md) | [Previous: Search Tools ←](03-search-tools/README.md) | [Next: Question & Todo Tools →](05-question-todo/README.md)

---


---

## 📄 License & Attribution

This module is part of the [OpenCode Primer](../README.md).

**License:** MIT - See [LICENSE](../LICENSE) for details.

**Last Updated:** April 2026  
**OpenCode Version:** 1.0+ compatible

---

