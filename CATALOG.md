# 📚 OpenCode How-To Guide Feature Catalog

Complete reference of all features, modules, and installation commands available in this guide.

## 📋 Table of Contents

- [Module Overview](#module-overview)
- [Quick Installation Reference](#quick-installation-reference)
- [Complete Feature Reference](#complete-feature-reference)
- [Use Case Matrix](#use-case-matrix)
- [Troubleshooting](#troubleshooting)
- [Additional Resources](#additional-resources)

## 📊 Module Overview

| Module | Level | Time | Focus | Key Features |
|--------|-------|------|-------|--------------|
| **[01. Basic Commands](01-basic-commands)** | Beginner | 30 min | Core operations | Command structure, help system, tool overview |
| **[02. File Reading](02-file-reading)** | Beginner+ | 45 min | Codebase examination | File/directory reading, offset/limit, navigation |
| **[03. File Operations](03-file-operations)** | Beginner+ | 45 min | File modification | Editing, writing, replaceAll, template creation |
| **[04. Search Tools](04-search-tools)** | Intermediate | 30 min | Content discovery | Glob patterns, grep searches, combined operations |
| **[05. Bash Integration](05-bash-integration)** | Intermediate | 1 hour | System operations | Shell commands, workdir, chaining, automation |
| **[06. Task Automation](06-task-automation)** | Intermediate | 1 hour | Workflow basics | Script creation, error handling, common patterns |
| **[07. Automation](07-automation)** | Intermediate+ | 1 hour | Advanced workflows | Complex scripts, integration, error recovery |
| **[08. Advanced Features](08-advanced-features)** | Intermediate+ | 1.5 hours | Power user tools | Optimization, patterns, expert techniques |
| **[09. Workflows](09-workflows)** | Advanced | 2-3 hours | Complete solutions | Real-world examples, templates, best practices |
| **[10. OpenWork Integration](10-openwork)** | Advanced | 2 hours | Platform features | Team collaboration, CI/CD, production workflows |

## 🚀 Quick Installation Reference

### Basic Setup (15 minutes)

```bash
# 1. Clone the guide
git clone https://github.com/your-username/opencode-howto-guide.git
cd opencode-howto-guide

# 2. Explore basic commands
cat 01-basic-commands/README.md

# 3. Try file operations
cp 03-file-operations/examples/*.sh .

# 4. Learn search patterns
cat 04-search-tools/patterns.md
```

### Full Setup (1 hour)

```bash
# Basic commands foundation
cp 01-basic-commands/examples/*.md .

# File operations mastery
cp 03-file-operations/patterns.md .

# Search expertise
cp 04-search-tools/patterns.md .

# Automation scripts
cp 06-task-automation/scripts/*.sh .
chmod +x *.sh

# Weekend project: Complete all modules
# Follow the learning path for guided setup
```

### Development Environment

```bash
# Create practice directory
mkdir -p ~/opencode-practice
cd ~/opencode-practice

# Copy templates
cp -r /path/to/opencode-howto-guide/templates/* .

# Set up test files
./setup-test-environment.sh

# Begin learning
./start-learning-path.sh
```

## 📖 Complete Feature Reference

### 01. Basic Commands

**Location**: [01-basic-commands/](01-basic-commands)

**What**: Core opencode operations and command structure

**Key Concepts**:
- Command syntax and structure
- Tool overview and selection
- Help system usage
- Common options and flags

**Examples**:
```bash
# Check version
opencode --version

# Get help
opencode --help
opencode read --help

# List available tools
opencode --list-tools
```

**Installation**: No installation needed - study the examples

### 02. File Reading

**Location**: [02-file-reading/](02-file-reading)

**What**: Read files and directories to understand codebase structure

**Key Concepts**:
- File and directory reading
- Offset and limit parameters
- Path navigation
- Large file handling

**Examples**:
```bash
# Read file
opencode read file.txt

# Read directory
opencode read src/

# Read with limits
opencode read large.log --offset=100 --limit=50
```

**Installation**: Study patterns and apply to your projects

### 03. File Operations

**Location**: [03-file-operations/](03-file-operations)

**What**: Edit existing files and create new files

**Key Concepts**:
- String replacement editing
- replaceAll for batch operations
- File creation with content
- Template generation

**Examples**:
```bash
# Edit file
opencode edit config.json --old="3000" --new="8080"

# Batch replace
opencode edit src/*.js --old="var " --new="const " --replaceAll

# Create file
opencode write notes.md --content="# Notes\n\nContent here"
```

**Installation**: Copy templates and modify for your use cases

### 04. Search Tools

**Location**: [04-search-tools/](04-search-tools)

**What**: Find files by pattern and search file contents

**Key Concepts**:
- Glob patterns for file finding
- Grep for content searching
- Combined search operations
- Pattern matching techniques

**Examples**:
```bash
# Find files
opencode glob "**/*.js"
opencode glob "src/**/*.{js,ts}"

# Search content
opencode grep "TODO|FIXME"
opencode grep "function " --include="*.js"

# Combined
files=$(opencode glob "**/*.py")
for f in $files; do opencode grep "import " --path="$f"; done
```

**Installation**: Study patterns and create custom search scripts

### 05. Bash Integration

**Location**: [05-bash-integration/](05-bash-integration)

**What**: Execute shell commands and combine with opencode operations

**Key Concepts**:
- Shell command execution
- Workdir parameter usage
- Command chaining
- System integration

**Examples**:
```bash
# Basic commands
opencode bash "ls -la"
opencode bash "git status"

# With workdir
opencode bash "pwd" --workdir="/tmp"

# Chained commands
opencode bash "cd /tmp && pwd"
```

**Installation**: Create automation scripts for your workflow

### 06. Task Automation

**Location**: [06-task-automation/](06-task-automation)

**What**: Automate repetitive tasks with scripts

**Key Concepts**:
- Script creation
- Error handling
- User input processing
- Common automation patterns

**Examples**:
```bash
#!/bin/bash
# automate-code-review.sh
echo "Starting code review..."
opencode grep "TODO|FIXME" --include="*.{js,ts,py}"
opencode bash "npm test"
echo "Review complete!"
```

**Installation**: Copy scripts and customize for your projects

### 07. Automation

**Location**: [07-automation/](07-automation)

**What**: Advanced automation workflows and integration

**Key Concepts**:
- Complex script design
- Multiple tool integration
- Error recovery
- Production-ready automation

**Examples**:
```bash
#!/bin/bash
# deploy-workflow.sh
ENV=$1
echo "Deploying to $ENV..."
opencode bash "npm run build"
opencode bash "npm test"
opencode bash "npm run deploy:$ENV"
opencode bash "curl -s https://app.com/health"
```

**Installation**: Use as templates for your deployment and CI/CD workflows

### 08. Advanced Features

**Location**: [08-advanced-features/](08-advanced-features)

**What**: Power user techniques and optimization

**Key Concepts**:
- Performance optimization
- Advanced patterns
- Expert techniques
- Best practices

**Examples**:
```bash
# Parallel processing
for file in $(opencode glob "**/*.js"); do
  (opencode edit "$file" --old="old" --new="new" --replaceAll) &
done
wait

# Complex transformations
opencode read data.json | jq '.items[] | select(.active)' | opencode write active-items.json --content=-
```

**Installation**: Study and apply advanced patterns to your workflow

### 09. Workflows

**Location**: [09-workflows/](09-workflows)

**What**: Complete workflow examples for real-world scenarios

**Key Concepts**:
- End-to-end workflows
- Production templates
- Team collaboration
- Best practice integration

**Examples**:
- Code review workflow
- Deployment pipeline
- Documentation generation
- Testing automation
- Security scanning

**Installation**: Use as starting points for your team's workflows

### 10. OpenWork Integration

**Location**: [10-openwork/](10-openwork)

**What**: OpenWork platform features and team collaboration

**Key Concepts**:
- Team workflow integration
- CI/CD pipeline setup
- Production deployment
- Collaboration tools

**Examples**:
```bash
#!/bin/bash
# team-deployment.sh
PR=$1
echo "Processing PR $PR..."
# Integration with OpenWork APIs
# Team notification
# Automated testing
# Deployment coordination
```

**Installation**: Integrate with your team's OpenWork setup

## 🎯 Use Case Matrix

| Use Case | Recommended Modules | Example Workflow |
|----------|-------------------|------------------|
| **Code Review** | 04, 06, 09 | Search → Analysis → Report |
| **Refactoring** | 03, 04, 07 | Find → Replace → Verify |
| **CI/CD** | 05, 07, 10 | Build → Test → Deploy → Verify |
| **Documentation** | 02, 03, 06 | Read → Generate → Format |
| **Debugging** | 02, 04, 05 | Examine → Search → Test |
| **Migration** | 03, 04, 07 | Find patterns → Update → Validate |
| **Team Onboarding** | 01, 02, 09 | Basics → Examples → Workflows |

## 🔧 Troubleshooting

### Common Issues and Solutions

**Issue**: Command not found  
**Solution**: Check installation and PATH
```bash
which opencode
echo $PATH
```

**Issue**: Permission denied  
**Solution**: Check file permissions
```bash
opencode bash "ls -la /path/to/file"
opencode bash "test -w /path/to/file && echo 'Writable'"
```

**Issue**: String not found in edit  
**Solution**: Verify exact string
```bash
opencode grep "exact text" --path="file.txt"
opencode read file.txt | cat -A  # Show invisible characters
```

**Issue**: Large file handling  
**Solution**: Use limits and offsets
```bash
opencode read huge.log --limit=100
opencode bash "head -100 huge.log"
```

**Issue**: Search not finding files  
**Solution**: Check patterns and paths
```bash
opencode glob "*"  # Test basic pattern
opencode bash "find . -name \"*.js\""  # Compare with find
```

## 📚 Additional Resources

### Official Documentation

- [OpenCode Documentation](https://opencode.ai/docs)
- [OpenWork Platform](https://openwork.ai/docs)
- [Command Line Basics](https://opencode.ai/docs/basics)

### Learning Resources

- [Interactive Tutorials](https://opencode.ai/learn)
- [Video Guides](https://opencode.ai/videos)
- [Community Examples](https://github.com/anomalyco/opencode-examples)

### Community

- [GitHub Discussions](https://github.com/anomalyco/opencode/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/opencode)
- [Community Forum](https://community.openwork.ai)

### Related Projects

- [OpenCode Examples](https://github.com/anomalyco/opencode-examples)
- [OpenWork Integrations](https://github.com/anomalyco/openwork-integrations)
- [Automation Templates](https://github.com/anomalyco/automation-templates)

## 🎓 Learning Path Recommendations

### Quick Start (1 hour)

1. **01-basic-commands** (15 min) - Core concepts
2. **02-file-reading** (15 min) - File examination
3. **03-file-operations** (15 min) - Basic editing
4. **04-search-tools** (15 min) - Finding content

### Intermediate (3 hours)

1. **05-bash-integration** (45 min) - Shell commands
2. **06-task-automation** (45 min) - Script basics
3. **07-automation** (45 min) - Workflow creation
4. **08-advanced-features** (45 min) - Optimization

### Advanced (4 hours)

1. **09-workflows** (2 hours) - Real-world examples
2. **10-openwork** (2 hours) - Platform integration

### Complete Mastery (10-12 hours)

Follow the [Learning Roadmap](LEARNING-ROADMAP.md) for the complete guided path from beginner to expert.

---

**Last Updated**: April 10, 2026  
**OpenCode Version**: Latest  
**OpenWork Integration**: Available  

[← Back to Main README](README.md) | [Learning Roadmap →](LEARNING-ROADMAP.md)