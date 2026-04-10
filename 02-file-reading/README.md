# 02. File Reading

**Location**: `02-file-reading/`  
**Level**: Beginner+  
**Time**: 45 minutes  
**Focus**: Reading files and directories to understand codebase structure

## 📚 Overview

This module teaches you how to use opencode's `read` tool to examine files and directories. You'll learn to navigate codebases, view file contents with precision, and understand project structures.

## 🎯 What You'll Learn

- Read individual files and directories
- Use offset and limit for precise reading
- Navigate complex directory structures
- Handle large files efficiently
- Understand file paths and navigation

## 🚀 Quick Start

### Basic File Reading

```bash
# Read a single file
opencode read /path/to/file.js

# Read a directory
opencode read /path/to/directory/

# Read current directory
opencode read .

# Read parent directory
opencode read ..
```

### Reading with Options

```bash
# Read with line offset (start at line 100)
opencode read large-file.txt --offset=100

# Read with line limit (first 50 lines)
opencode read large-file.txt --limit=50

# Combine offset and limit (lines 100-149)
opencode read large-file.txt --offset=100 --limit=50
```

## 📖 Detailed Topics

### 1. Reading Files

The `read` tool is your primary way to examine file contents:

```bash
# Basic file reading
opencode read README.md
opencode read package.json
opencode read src/index.js

# Reading specific sections
opencode read config.yaml --limit=20  # First 20 lines
opencode read logfile.log --offset=500 --limit=100  # Lines 500-599
```

### 2. Reading Directories

Directories show their contents when read:

```bash
# List directory contents
opencode read .
opencode read src/
opencode read node_modules/

# Navigate directory tree
opencode read ..
opencode read ../sibling-directory/
opencode read ~/projects/
```

**Directory Output Format:**
- Files are listed by name
- Directories have `/` suffix
- Output is sorted alphabetically

### 3. File Path Patterns

```bash
# Absolute paths
opencode read /home/user/project/README.md

# Relative paths
opencode read ./src/utils.js
opencode read ../config/settings.json

# Home directory shorthand
opencode read ~/.bashrc
opencode read ~/projects/my-app/

# Current directory shorthand
opencode read .  # Current directory
opencode read file.txt  # File in current directory
```

### 4. Handling Large Files

```bash
# View file headers (first 100 lines)
opencode read massive-log.csv --limit=100

# Skip to specific section
opencode read massive-log.csv --offset=10000 --limit=50

# Check file endings
TOTAL_LINES=$(wc -l < massive-log.csv)
opencode read massive-log.csv --offset=$((TOTAL_LINES - 100)) --limit=100
```

## 🧪 Hands-on Exercises

### Exercise 1: Basic File Exploration

```bash
# 1. Explore your current project
opencode read .

# 2. Read the README file
opencode read README.md

# 3. Check package.json
opencode read package.json

# 4. Look at source directory
opencode read src/
```

### Exercise 2: Navigation Practice

```bash
# 1. Go up one directory and read
opencode read ..

# 2. Read a sibling directory
opencode read ../other-project/

# 3. Navigate to home directory
opencode read ~/

# 4. Check system files (if permitted)
opencode read /etc/hosts --limit=10
```

### Exercise 3: Precision Reading

```bash
# 1. Read first 10 lines of a file
opencode read some-file.txt --limit=10

# 2. Skip first 50 lines
opencode read some-file.txt --offset=50

# 3. Read lines 100-124
opencode read some-file.txt --offset=100 --limit=25

# 4. Check file endings
opencode read some-file.txt --offset=-50  # Last 50 lines (if supported)
```

### Exercise 4: Codebase Analysis

```bash
# 1. Understand project structure
opencode read .

# 2. Examine source organization
opencode read src/
opencode read src/components/
opencode read src/utils/

# 3. Check configuration files
opencode read package.json
opencode read .gitignore
opencode read .env.example

# 4. Review documentation
opencode read docs/
opencode read CONTRIBUTING.md
```

## 📋 Best Practices

### ✅ Do

- **Start with directory reading** to understand structure
- **Use `--limit` for large files** to avoid overwhelming output
- **Check file existence first** with directory listing
- **Use absolute paths** in scripts for reliability
- **Combine with other tools** for analysis (e.g., `grep` after `read`)

### ❌ Don't

- **Don't read extremely large files** without limits
- **Don't assume file exists** - check directory first
- **Don't use relative paths** in automation without context
- **Don't ignore permissions** - some files may be unreadable
- **Don't read binary files** expecting text content

## 🔧 Common Use Cases

### 1. Code Review Preparation

```bash
# Examine changed files in a PR
opencode read src/components/Button.js
opencode read src/utils/helpers.js
opencode read tests/button.test.js

# Check related documentation
opencode read docs/components/button.md
```

### 2. Debugging

```bash
# Check configuration
opencode read config.json
opencode read .env

# Examine log files
opencode read logs/app.log --limit=50
opencode read logs/error.log --offset=-100  # Last 100 errors

# Review recent changes
opencode read CHANGELOG.md --limit=20
```

### 3. Documentation Reading

```bash
# Read project documentation
opencode read README.md
opencode read docs/getting-started.md
opencode read docs/api-reference.md --offset=100 --limit=50

# Check license and contribution guides
opencode read LICENSE
opencode read CONTRIBUTING.md
opencode read CODE_OF_CONDUCT.md
```

### 4. Configuration Inspection

```bash
# Check build configuration
opencode read package.json
opencode read webpack.config.js
opencode read docker-compose.yml

# Review environment settings
opencode read .env.example
opencode read config/development.json
opencode read config/production.json
```

## 🚨 Troubleshooting

### File Not Found

```bash
# Check if file exists
opencode read . | grep filename

# Verify path
opencode bash "pwd"  # Current directory
opencode read ../  # Parent directory

# Check permissions
opencode bash "ls -la /path/to/file"
```

### Permission Denied

```bash
# Check file permissions
opencode bash "ls -la /path/to/file"

# Try reading as different user (if appropriate)
sudo opencode read /protected/file

# Check if file is readable
opencode bash "test -r /path/to/file && echo 'Readable' || echo 'Not readable'"
```

### Large File Handling

```bash
# For very large files, use limits
opencode read huge-file.log --limit=100

# Or use head/tail via bash
opencode bash "head -100 huge-file.log"
opencode bash "tail -100 huge-file.log"

# Check file size first
opencode bash "ls -lh huge-file.log"
```

### Binary Files

```bash
# Check if file is binary
opencode bash "file /path/to/file"

# For binary files, use appropriate tools
opencode bash "hexdump -C /path/to/binary | head -20"
opencode bash "strings /path/to/binary | head -50"
```

## 📚 Advanced Techniques

### 1. Scripting with Read

```bash
#!/bin/bash
# analyze-project.sh

echo "Project Structure Analysis"
echo "========================="

# Read project root
echo "Root directory:"
opencode read . | head -20

# Count files by type
echo -e "\nFile Counts:"
JS_FILES=$(opencode glob "**/*.js" | wc -l)
TS_FILES=$(opencode glob "**/*.ts" | wc -l)
MD_FILES=$(opencode glob "**/*.md" | wc -l)

echo "JavaScript: $JS_FILES"
echo "TypeScript: $TS_FILES"
echo "Markdown: $MD_FILES"

# Check for large files
echo -e "\nLarge Files (>100KB):"
opencode bash "find . -type f -size +100k -exec ls -lh {} \; | head -10"
```

### 2. Monitoring File Changes

```bash
#!/bin/bash
# monitor-file.sh
FILE="$1"

echo "Monitoring $FILE for changes..."
LAST_CONTENT=""

while true; do
    CURRENT_CONTENT=$(opencode read "$FILE")
    
    if [ "$CURRENT_CONTENT" != "$LAST_CONTENT" ]; then
        echo "[$(date)] File changed"
        echo "Last 5 lines:"
        echo "$CURRENT_CONTENT" | tail -5
        LAST_CONTENT="$CURRENT_CONTENT"
    fi
    
    sleep 5
done
```

### 3. Batch File Processing

```bash
#!/bin/bash
# batch-process.sh

# Process all JavaScript files
for file in $(opencode glob "**/*.js"); do
    echo "Processing $file..."
    
    # Read first few lines
    opencode read "$file" --limit=10 > "summary/$file.summary.txt"
    
    # Count lines
    LINES=$(opencode bash "wc -l < '$file'")
    echo "$file: $LINES lines" >> file-stats.txt
done
```

## 📚 Additional Resources

- [OpenCode Read Tool Documentation](https://opencode.ai/docs/tools/read)
- [File System Navigation Basics](https://opencode.ai/docs/basics/filesystem)
- [Working with Large Files](https://opencode.ai/docs/advanced/large-files)

## 🎓 Next Steps

Once you're comfortable with file reading, proceed to:

1. **[03-file-operations](03-file-operations)**: Learn to edit and write files
2. **[04-search-tools](04-search-tools)**: Find specific files and content efficiently
3. **[05-bash-integration](05-bash-integration)**: Combine file reading with shell commands

---

**Ready for more?** Practice by exploring different projects and getting comfortable with various file types and structures.

[← Back to Learning Roadmap](../LEARNING-ROADMAP.md) | [Previous: Basic Commands ←](01-basic-commands/README.md) | [Next: File Operations →](03-file-operations/README.md)