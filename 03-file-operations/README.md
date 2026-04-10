# 03. File Operations

**Location**: `03-file-operations/`  
**Level**: Beginner+  
**Time**: 45 minutes  
**Focus**: Editing existing files and creating new files with opencode

## 📚 Overview

This module covers opencode's `edit` and `write` tools for modifying and creating files. You'll learn to make precise changes, handle batch operations, and create new files with proper content.

## 🎯 What You'll Learn

- Edit existing files with string replacement
- Use `replaceAll` for batch modifications
- Write new files with structured content
- Handle edge cases and special characters
- Create configuration and documentation files

## 🚀 Quick Start

### Basic File Editing

```bash
# Single replacement
opencode edit file.txt --old="old text" --new="new text"

# Multiple replacements (replace all occurrences)
opencode edit file.js --old="var " --new="const " --replaceAll

# Create new file
opencode write new-file.md --content="# Title\n\nContent here"
```

### Safe Editing Practices

```bash
# Always backup before editing
cp file.txt file.txt.backup

# Test edit on copy first
opencode edit file.txt.copy --old="test" --new="TEST"

# Use dry-run if available
# (Check tool documentation for --dry-run option)
```

## 📖 Detailed Topics

### 1. The `edit` Tool

The `edit` tool performs exact string replacements in files:

```bash
# Basic syntax
opencode edit <file> --old="<text to replace>" --new="<replacement text>"

# Examples
opencode edit config.json --old='"port": 3000' --new='"port": 8080'
opencode edit README.md --old="old project" --new="new project"
opencode edit script.sh --old="#!/bin/bash" --new="#!/usr/bin/env bash"
```

### 2. Using `replaceAll`

For replacing all occurrences of a pattern:

```bash
# Replace all occurrences in file
opencode edit file.js --old="function " --new="const " --replaceAll

# Update all variable names
opencode edit utils.js --old="oldVarName" --new="newVarName" --replaceAll

# Fix typos everywhere
opencode edit document.md --old="recieve" --new="receive" --replaceAll
```

### 3. The `write` Tool

Create new files with specified content:

```bash
# Basic syntax
opencode write <file> --content="<file content>"

# Examples
opencode write config.yaml --content="version: 1.0\nenvironment: development"
opencode write notes.txt --content="Meeting notes:\n- Point 1\n- Point 2"
opencode write .env --content="API_KEY=your_key\nDATABASE_URL=postgres://..."
```

### 4. Handling Special Characters

```bash
# Newlines in content
opencode write multi-line.txt --content=$'Line 1\nLine 2\nLine 3'

# Quotes and special characters
opencode write config.json --content='{"name": "project", "version": "1.0.0"}'

# Escape sequences
opencode write escape-demo.txt --content="Tab:\t\tHere\nNewline:\nHere"
```

## 🧪 Hands-on Exercises

### Exercise 1: Basic File Modifications

```bash
# 1. Create a test file
opencode write test.txt --content="Hello World\nThis is a test file."

# 2. Read it to verify
opencode read test.txt

# 3. Edit a single line
opencode edit test.txt --old="Hello World" --new="Greetings World"

# 4. Verify the change
opencode read test.txt
```

### Exercise 2: Multiple Replacements

```bash
# 1. Create a file with repeated text
opencode write repeat.txt --content=$'apple\nbanana\napple\ncherry\napple'

# 2. Replace all "apple" with "orange"
opencode edit repeat.txt --old="apple" --new="orange" --replaceAll

# 3. Verify all were replaced
opencode read repeat.txt

# 4. Try partial matches
opencode edit repeat.txt --old="an" --new="XX" --replaceAll
opencode read repeat.txt
```

### Exercise 3: Configuration File Management

```bash
# 1. Create a configuration file
opencode write app.config.json --content='{
  "name": "My App",
  "version": "1.0.0",
  "port": 3000,
  "debug": true
}'

# 2. Update configuration values
opencode edit app.config.json --old='"port": 3000' --new='"port": 8080'
opencode edit app.config.json --old='"debug": true' --new='"debug": false'

# 3. Add new configuration section
opencode edit app.config.json \
  --old='"debug": false\n}' \
  --new='"debug": false,\n  "database": "postgres://localhost/mydb"\n}'

# 4. Verify final configuration
opencode read app.config.json
```

### Exercise 4: Code Refactoring

```bash
# 1. Create a simple JavaScript file
opencode write old-code.js --content=$'function oldName() {\n  console.log("old");\n}\n\nvar x = oldName();'

# 2. Rename function
opencode edit old-code.js --old="function oldName" --new="function newName"

# 3. Update function calls
opencode edit old-code.js --old="oldName()" --new="newName()"

# 4. Change var to const
opencode edit old-code.js --old="var " --new="const " --replaceAll

# 5. Verify refactored code
opencode read old-code.js
```

## 📋 Best Practices

### ✅ Do

- **Always backup files** before editing
- **Test edits on copies** first when possible
- **Use exact matching strings** to avoid unintended changes
- **Check file permissions** before writing
- **Use version control** for important changes
- **Validate JSON/XML/YAML** after editing

### ❌ Don't

- **Don't edit files in production** without testing
- **Don't use vague patterns** that might match unintended text
- **Don't ignore case sensitivity** in replacements
- **Don't edit binary files** with text tools
- **Don't make changes without understanding** the full context

## 🔧 Common Use Cases

### 1. Configuration Updates

```bash
# Update environment variables
opencode edit .env --old="DATABASE_URL=dev-db" --new="DATABASE_URL=prod-db"

# Change application settings
opencode edit config.json \
  --old='"logLevel": "debug"' \
  --new='"logLevel": "info"'

# Update version numbers
opencode edit package.json \
  --old='"version": "1.0.0"' \
  --new='"version": "1.1.0"'
```

### 2. Code Refactoring

```bash
# Rename variables
opencode edit src/utils.js --old="oldFunctionName" --new="newFunctionName" --replaceAll

# Update imports
opencode edit src/index.js --old="import { old } from './old'" --new="import { new } from './new'"

# Change coding standards
opencode edit src/**/*.js --old="function(" --new="function (" --replaceAll
```

### 3. Documentation Updates

```bash
# Update README
opencode edit README.md \
  --old="## Old Feature" \
  --new="## New Feature\n\nDescription of the new feature."

# Fix typos in documentation
opencode edit docs/*.md --old="seperate" --new="separate" --replaceAll

# Update copyright years
opencode edit LICENSE --old="Copyright 2023" --new="Copyright 2024"
```

### 4. Template File Creation

```bash
# Create new component template
opencode write Component.jsx --content=$'import React from "react";\n\nexport default function Component() {\n  return (\n    <div>\n      {/* Your code here */}\n    </div>\n  );\n}'

# Create configuration template
opencode write .env.example --content=$'# Environment Variables\nAPI_KEY=your_api_key_here\nDATABASE_URL=postgres://user:pass@localhost/db\nDEBUG=true'

# Create documentation template
opencode write docs/template.md --content=$'# [Title]\n\n## Overview\n\n## Usage\n\n## Examples\n\n## API Reference'
```

## 🚨 Troubleshooting

### Edit Failed - String Not Found

```bash
# Check if string exists
opencode grep "text to find" --path="file.txt"

# Verify exact string (including whitespace)
opencode read file.txt | cat -A  # Show invisible characters

# Check case sensitivity
opencode grep -i "text" --path="file.txt"  # Case-insensitive search
```

### Multiple Matches Warning

```bash
# When --replaceAll is not specified and multiple matches exist
# Solution 1: Use --replaceAll
opencode edit file.txt --old="text" --new="replacement" --replaceAll

# Solution 2: Be more specific with old string
opencode edit file.txt --old="unique context text unique" --new="replacement"

# Solution 3: Edit specific occurrence by line
LINE=$(opencode grep -n "text" --path="file.txt" | head -1 | cut -d: -f1)
# Then edit that specific line (more advanced technique)
```

### Permission Denied

```bash
# Check file permissions
opencode bash "ls -la file.txt"

# Check if file is writable
opencode bash "test -w file.txt && echo 'Writable' || echo 'Not writable'"

# Try with appropriate permissions
sudo opencode edit /protected/file.txt --old="a" --new="b"  # If needed
```

### File Encoding Issues

```bash
# Check file encoding
opencode bash "file file.txt"

# For non-UTF8 files, convert first
opencode bash "iconv -f ISO-8859-1 -t UTF-8 file.txt > file-utf8.txt"

# Edit the converted file
opencode edit file-utf8.txt --old="text" --new="replacement"
```

## 📚 Advanced Techniques

### 1. Batch File Operations

```bash
#!/bin/bash
# update-version.sh
NEW_VERSION="2.0.0"

# Update package.json
opencode edit package.json --old='"version": "1.0.0"' --new="\"version\": \"$NEW_VERSION\""

# Update Dockerfile
opencode edit Dockerfile --old="v1.0.0" --new="v$NEW_VERSION"

# Update documentation
opencode edit README.md --old="Version 1.0.0" --new="Version $NEW_VERSION"

echo "Updated to version $NEW_VERSION"
```

### 2. Template-based File Generation

```bash
#!/bin/bash
# create-component.sh
COMPONENT_NAME="$1"

# Create component file from template
TEMPLATE=$'import React from "react";\n\nexport default function [NAME]() {\n  return (\n    <div className="[NAME]-container">\n      <h1>[NAME] Component</h1>\n    </div>\n  );\n}'

CONTENT="${TEMPLATE//\[NAME\]/$COMPONENT_NAME}"
opencode write "src/components/${COMPONENT_NAME}.jsx" --content="$CONTENT"

echo "Created component: $COMPONENT_NAME"
```

### 3. Conditional Editing

```bash
#!/bin/bash
# safe-update.sh
FILE="$1"
OLD_TEXT="$2"
NEW_TEXT="$3"

# Check if old text exists
if opencode grep --quiet "$OLD_TEXT" --path="$FILE"; then
    echo "Updating $FILE..."
    opencode edit "$FILE" --old="$OLD_TEXT" --new="$NEW_TEXT"
    echo "Update complete."
else
    echo "Text not found in $FILE. No changes made."
fi
```

### 4. Complex Pattern Replacement

```bash
#!/bin/bash
# normalize-whitespace.sh

# For each file, normalize whitespace
for file in $(opencode glob "**/*.{js,ts,jsx,tsx}"); do
    # Replace multiple spaces with single space
    opencode edit "$file" --old="  " --new=" " --replaceAll
    
    # Fix trailing whitespace
    opencode edit "$file" --old=" \n" --new="\n" --replaceAll
    
    # Ensure newline at end of file
    LAST_CHAR=$(opencode bash "tail -c1 '$file'")
    if [ "$LAST_CHAR" != "" ]; then
        opencode edit "$file" --old="$" --new="\n"
    fi
done
```

## 📚 Additional Resources

- [OpenCode Edit Tool Documentation](https://opencode.ai/docs/tools/edit)
- [OpenCode Write Tool Documentation](https://opencode.ai/docs/tools/write)
- [Text Processing Best Practices](https://opencode.ai/docs/best-practices/text-processing)

## 🎓 Next Steps

Once you're comfortable with file operations, proceed to:

1. **[04-search-tools](04-search-tools)**: Learn to find files and content efficiently
2. **[05-bash-integration](05-bash-integration)**: Combine file operations with shell commands
3. **[06-task-automation](06-task-automation)**: Automate repetitive file operations

---

**Ready for more?** Practice by creating scripts that automate common file editing tasks in your projects.

[← Back to Learning Roadmap](../LEARNING-ROADMAP.md) | [Previous: File Reading ←](02-file-reading/README.md) | [Next: Search Tools →](04-search-tools/README.md)