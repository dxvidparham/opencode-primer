# Quick Start Examples

These examples demonstrate basic opencode commands to get you started quickly.

## Basic Command Examples

```bash
# Check opencode version
opencode --version

# Get help
opencode --help
opencode read --help

# List available tools
opencode --list-tools
```

## File Operations

```bash
# Read current directory
opencode read .

# Read a specific file
opencode read README.md

# Read with line limit
opencode read large-file.txt --limit=50
```

## Simple Editing

```bash
# Create a test file
opencode write test.txt --content="Hello World"

# Read the file
opencode read test.txt

# Edit the file
opencode edit test.txt --old="Hello" --new="Greetings"

# Verify the change
opencode read test.txt

# Clean up
rm test.txt
```

## Search Examples

```bash
# Find all JavaScript files
opencode glob "**/*.js"

# Search for TODO comments
opencode grep "TODO"

# Search in specific file types
opencode grep "function " --include="*.js"
```

## Bash Integration

```bash
# Basic system commands
opencode bash "pwd"
opencode bash "ls -la"
opencode bash "date"

# With workdir parameter
opencode bash "ls" --workdir="/tmp"
```

## Combined Operations

```bash
# Chain commands
opencode bash "cd /tmp && pwd"

# Use command output
FILES=$(opencode glob "*.md")
echo "Found $(echo "$FILES" | wc -l) markdown files"

# Simple automation
echo "Project overview:" > overview.txt
opencode read . >> overview.txt
echo "JavaScript files:" >> overview.txt
opencode glob "**/*.js" >> overview.txt
```

## Practice Exercises

### Exercise 1: Explore Your Environment

```bash
# 1. Check your current directory
opencode bash "pwd"

# 2. List files in current directory
opencode read .

# 3. Check for configuration files
opencode glob "*config*"
opencode glob "*.json"

# 4. Search for your username
opencode grep "$USER"
```

### Exercise 2: Create and Modify Files

```bash
# 1. Create a practice directory
mkdir -p practice
cd practice

# 2. Create several files
opencode write file1.txt --content="First file"
opencode write file2.txt --content="Second file"
opencode write notes.md --content="# Practice Notes\n\n## Today's tasks"

# 3. List created files
opencode read .

# 4. Edit one file
opencode edit file1.txt --old="First" --new="Primary"

# 5. Search across all files
opencode grep "file"

# 6. Clean up
cd ..
rm -rf practice
```

### Exercise 3: Simple Automation Script

Create a file called `project-info.sh`:

```bash
#!/bin/bash
# project-info.sh - Gather basic project information

echo "=== Project Information ==="
echo ""

echo "1. Directory Structure:"
opencode read . | head -20

echo -e "\n2. File Counts:"
JS_FILES=$(opencode glob "**/*.js" 2>/dev/null | wc -l)
PY_FILES=$(opencode glob "**/*.py" 2>/dev/null | wc -l)
MD_FILES=$(opencode glob "**/*.md" 2>/dev/null | wc -l)

echo "JavaScript files: $JS_FILES"
echo "Python files: $PY_FILES"
echo "Markdown files: $MD_FILES"

echo -e "\n3. TODO items:"
opencode grep "TODO" 2>/dev/null | head -5

echo -e "\n=== End of Report ==="
```

Make it executable and run it:
```bash
chmod +x project-info.sh
./project-info.sh
```

## Next Steps

After trying these examples:

1. Read the [01-basic-commands README](../README.md) for detailed explanations
2. Move on to [02-file-reading](../../02-file-reading/README.md) for more advanced file operations
3. Practice with your own projects to build confidence
4. Create your own examples and scripts

---

**Tip**: Always test commands in a safe environment before using them on important files. Use temporary directories for practice.