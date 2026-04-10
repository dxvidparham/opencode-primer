<div align="center">

# 🔍 03. Search Tools

**Find files and content in codebases with OpenCode's search tools**

[![Module Level](https://img.shields.io/badge/Level-Intermediate-orange)]()
[![Time Required](https://img.shields.io/badge/Time-45_min-yellow)]()
[![Prerequisites](https://img.shields.io/badge/Prerequisites-Module_02-blue)]()
[![OpenCode Version](https://img.shields.io/badge/OpenCode-1.0+-purple)]()

[⬅️ Previous Module](../02-file-operations/)] • [🏠 Main Menu](../README.md) • [Next Module ➡️](../04-bash-integration/)

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

## 🎯 Overview


### 📝 What This Module Covers

| Topic | Description | Why It Matters |
|-------|-------------|----------------|
| **glob** | Find files by pattern | Navigate large codebases efficiently |
| **grep** | Search file contents | Find specific code, functions, patterns |
| **list** | Directory listing | Understand project structure |
| **Combined Searches** | Chain search operations | Complex queries across files and content |
| **Search Patterns** | Regex and wildcards | Flexible, powerful searching |

### 🎓 Learning Objectives

By the end of this module, you'll be able to:

- ✅ **Find files efficiently** using `glob` patterns
- ✅ **Search file contents** with `grep` and regex
- ✅ **Navigate directories** using `list` tool
- ✅ **Combine search operations** for complex queries
- ✅ **Apply search patterns** to real development tasks
- List directory contents with `list`
- Combine search operations for complex queries
- Use include/exclude patterns and filtering options

## 🚀 Quick Start

### Finding Files with `glob`

```bash
# Find all JavaScript files
opencode glob "**/*.js"

# Find TypeScript files in src directory
opencode glob "src/**/*.ts"

# Find multiple file types
opencode glob "**/*.{js,ts,jsx,tsx}"

# Find files with specific names
opencode glob "**/package.json"
opencode glob "**/README.md"
```

### Searching Content with `grep`

```bash
# Search for TODO comments
opencode grep "TODO|FIXME"

# Search for function definitions
opencode grep "function " --include="*.js"

# Search for imports
opencode grep "import " --include="*.{js,ts}"

# Case-insensitive search
opencode grep -i "error" --include="*.log"
```

### Listing Directories with `list`

```bash
# List current directory
opencode list "."

# List with filtering
opencode list "src/" --include="*.js"
opencode list "tests/" --exclude="*.snap"

# List with pattern
opencode list "docs/" --pattern="*.md"
```

## 📖 Detailed Topics

### 1. The `glob` Tool

The `glob` tool finds files using pattern matching:

**Basic Patterns:**
```bash
# Single asterisk matches within directory
opencode glob "*.js"           # JS files in current directory
opencode glob "src/*.js"       # JS files in src directory

# Double asterisk matches across directories
opencode glob "**/*.js"        # JS files anywhere in project
opencode glob "src/**/*.js"     # JS files anywhere under src

# Character sets and alternatives
opencode glob "**/*.{js,ts}"          # JS or TS files
opencode glob "**/*.{md,mdx,txt}"     # Documentation files
opencode glob "test/*.{test,spec}.js" # Test files
```

**Advanced Patterns:**
```bash
# Exclude patterns
opencode glob "**/*.js" --exclude="node_modules/**"

# Multiple patterns
opencode glob "src/**/*.js" "tests/**/*.js"

# Combining with other tools
FILES=$(opencode glob "**/*.js")
for file in $FILES; do
  opencode read "$file" --limit=5
done
```

### 2. The `grep` Tool

The `grep` tool searches file contents using regular expressions:

**Basic Search:**
```bash
# Simple text search
opencode grep "TODO"
opencode grep "FIXME"
opencode grep "console.log"

# Regex patterns
opencode grep "function.*\("            # Function definitions
opencode grep "const.*=.*=>"            # Arrow functions
opencode grep "export.*default.*from"  # Default exports
opencode grep "^#.*" --include="*.md"   # Markdown headers
```

**Options and Filters:**
```bash
# Case-insensitive
opencode grep -i "error"

# File type filtering
opencode grep "import " --include="*.{js,ts}"
opencode grep "class " --include="*.py"
opencode grep "# " --include="*.{md,mdx,txt}"

# Path filtering
opencode grep "config" --path="src/"
opencode grep "test" --path="tests/"

# Line numbers
opencode grep -n "TODO" --include="*.js"
```

**Complex Patterns:**
```bash
# Multiple patterns
opencode grep "TODO|FIXME|BUG|HACK"

# Word boundaries
opencode grep "\bvar\b" --include="*.js"  # Exact word "var"

# Character classes
opencode grep "error[0-9]"                # error1, error2, etc.
opencode grep "[A-Z][a-z]+Error"          # Capitalized Error names
```

### 3. The `list` Tool

The `list` tool shows directory contents with filtering:

```bash
# Basic listing
opencode list "."
opencode list "src/"
opencode list "node_modules/"

# With filtering
opencode list "src/" --include="*.js"
opencode list "tests/" --exclude="*.snap"
opencode list "docs/" --pattern="*.md"

# Recursive listing
opencode list "src/" --recursive
opencode list "." --recursive --include="*.json"
```

### 4. Combining Search Tools

```bash
# Find then search
for file in $(opencode glob "**/*.js"); do
  opencode grep "TODO" --path="$file"
done

# Search across found files
JS_FILES=$(opencode glob "**/*.js")
opencode grep "function " --path="$JS_FILES"

# Complex workflow: Find todos in source files
for file in $(opencode glob "src/**/*.{js,ts}"); do
  if opencode grep -q "TODO" --path="$file"; then
    echo "TODO found in $file:"
    opencode grep -n "TODO" --path="$file"
  fi
done
```

## 🧪 Hands-on Exercises

### Exercise 1: Project Exploration

```bash
# 1. Find all source files
opencode glob "src/**/*.{js,ts,jsx,tsx}"

# 2. Find configuration files
opencode glob "**/*.{json,yaml,yml,toml}"

# 3. Find documentation
opencode glob "**/*.{md,mdx,txt}"

# 4. Find test files
opencode glob "**/*.{test,spec}.{js,ts}"
```

### Exercise 2: Code Analysis

```bash
# 1. Find TODO items
opencode grep "TODO" --include="*.{js,ts}"

# 2. Find function definitions
opencode grep "function " --include="*.js"
opencode grep "const.*=.*=>" --include="*.js"

# 3. Find imports/exports
opencode grep "import " --include="*.{js,ts}"
opencode grep "export " --include="*.{js,ts}"

# 4. Find error handling
opencode grep -i "error\|exception\|catch\|throw" --include="*.{js,ts,py}"
```

### Exercise 3: Security and Quality Checks

```bash
# 1. Find potential secrets
opencode grep "password\|secret\|key\|token\|api[_-]key" --include="*.{js,ts,py,json,yml,yaml}"

# 2. Find debug statements
opencode grep "console\.log\|debugger\|alert" --include="*.js"

# 3. Find hardcoded values
opencode grep "\"localhost\|127\.0\.0\.1\|0\.0\.0\.0\"" --include="*.{js,ts,py}"

# 4. Find deprecated patterns
opencode grep "var \|\.bind(\|jQuery\|\.live(\|\.delegate(" --include="*.js"
```

### Exercise 4: Refactoring Preparation

```bash
# 1. Find all occurrences of old name
opencode grep "oldFunctionName\|oldVariableName\|OldClassName" --include="*.{js,ts}"

# 2. List files containing the old name
for file in $(opencode glob "**/*.{js,ts}"); do
  if opencode grep -q "oldFunctionName" --path="$file"; then
    echo "$file contains oldFunctionName"
    opencode grep -n "oldFunctionName" --path="$file"
  fi
done

# 3. Check for dependencies
opencode grep "from.*oldModule\|require.*oldModule" --include="*.{js,ts}"
```

## 📋 Best Practices

### ✅ Do

- **Use specific patterns** to reduce false positives
- **Combine `glob` and `grep`** for targeted searches
- **Use `--include`/`--exclude`** to filter by file type
- **Check regex patterns** with simple tests first
.
### ❌ Don't

-, **Don't use overly broad patterns** like `.*` without filtering
-, **Don't search binary files** with text tools
-, **Don't ignore `.gitignore`** - it affects search results
-, **Don't run destructive operations** without confirming matches
-, **Don't forget about permissions** when accessing protected files

## 🔧 Common Use Cases

### 1. Code Review Preparation

```bash
#!/bin/bash
# prepare-review.sh

echo "=== Code Review Preparation ==="
echo

# Find todos
echo "1. TODO/FIXME items:"
opencode grep "TODO|FIXME" --include="*.{js,ts,py}" | head -20
echo

# Find console logs
echo "2. Console logs in source files:"
opencode grep "console\." --include="src/**/*.js" | head -10
echo

# Find error handling
echo "3. Error handling patterns:"
opencode grep -i "catch\|throw\|error" --include="src/**/*.js" | head -10
echo

# Find hardcoded values
echo "4. Potentially hardcoded values:"
opencode grep "\"localhost\|127\.0\.0\.1\|test\|example\"" --include="src/**/*.js" | head -10
```

### 2. Migration Scanning

```bash
#!/bin/bash
# migration-scan.sh

OLD_PATTERN="$1"
NEW_PATTERN="$2"

echo "Scanning for migration from $OLD_PATTERN to $NEW_PATTERN"
echo "======================================================"
echo

# Count occurrences
COUNT=$(opencode grep -c "$OLD_PATTERN" --include="*.{js,ts}")
echo "Found $COUNT occurrences of '$OLD_PATTERN'"
echo

# Show locations
echo "File locations:"
opencode grep -l "$OLD_PATTERN" --include="*.{js,ts}"
echo

# Show context
echo "Sample occurrences with context:"
opencode grep -n "$OLD_PATTERN" --include="*.{js,ts}" | head -20
```

### 3. Security Audit

```bash
#!/bin/bash
# security-scan.sh

echo "=== Security Scan ==="
echo

# Search for potential secrets
echo "1. Potential secrets:"
PATTERNS=("password" "secret" "key" "token" "api[_-]key" "auth" "credential")
for pattern in "${PATTERNS[@]}"; do
  echo "  Searching for: $pattern"
  opencode grep -i "$pattern" --include="*.{js,ts,py,json,yml,yaml}" 2>/dev/null | head -3
done
echo

# Search for debug statements
echo "2. Debug statements in production code:"
opencode grep "console\.log\|debugger" --include="src/**/*.js" 2>/dev/null | head -10
echo

# Search for eval and unsafe patterns
echo "3. Potentially unsafe patterns:"
opencode grep "eval(\|Function(\|innerHTML\|innerText\|outerHTML" --include="*.js" 2>/dev/null | head -10
```

### 4. Documentation Generation

```bash
#!/bin/bash
# generate-api-docs.sh

echo "Generating API documentation..."
echo

# Find all function definitions
echo "# Function Definitions" > API-DOCS.md
opencode grep "function " --include="src/**/*.js" >> API-DOCS.md
echo >> API-DOCS.md

# Find all class definitions
echo "# Class Definitions" >> API-DOCS.md
opencode grep "class " --include="src/**/*.js" >> API-DOCS.md
echo >> API-DOCS.md

# Find all export statements
echo "# Exports" >> API-DOCS.md
opencode grep "export " --include="src/**/*.js" >> API-DOCS.md

echo "Documentation generated: API-DOCS.md"
```

## 🚨 Troubleshooting

### Search Too Slow or No Results

```bash
# Check search scope
opencode glob "*"  # Test basic pattern

# Check ignore patterns
opencode bash "cat .gitignore"  # Check what's ignored

# Use more specific patterns
# Instead of: opencode grep "a"
# Try: opencode grep "function a" --include="*.js"

# Limit search depth
opencode grep "pattern" --path="src/"  # Limit to src directory
```

### Regex Not Working as Expected

```bash
# Test regex with simple file
echo "test pattern" > test.txt
opencode grep "pattern" --path="test.txt"

# Check regex syntax
# Use \ for special characters: \. for literal dot, \| for OR
# Use ^ for start of line, $ for end of line
# Use [] for character classes, () for groups

# Use literal string search first
opencode grep -F "exact.text" --include="*.js"
```

### Too Many Results

```bash
# Add file type filters
opencode grep "pattern" --include="*.js"

# Add path restrictions
opencode grep "pattern" --path="src/"

# Use more specific patterns
opencode grep "function specificName(" --include="*.js"

# Use line count to estimate
opencode grep -c "pattern" --include="*.js"
```

### Permission Issues

```bash
# Check file permissions
opencode bash "ls -la /path/to/search"

# Try with appropriate permissions
sudo opencode grep "pattern" --path="/protected/path"  # If needed and safe

# Search in accessible directories first
opencode grep "pattern" --path="$HOME"
```

## 📚 Additional Resources

? [OpenCode grep Tool](https://opencode.ai/docs/tools#grep)
? [OpenCode glob Tool](https://opencode.ai/docs/tools#glob)
? [Regular Expressions Guide](https://opencode.ai/docs/tools#regex-patterns)
? [Search Performance Tips](https://opencode.ai/docs/tools#performance)

## 🎓 Next Steps

Once you're comfortable with search tools, proceed to:

1. **[04-bash-integration](04-bash-integration)**: Combine search results with shell commands
2. **[05-question-todo](05-question-todo)**: Create interactive search workflows
3. **[07-skills-agents](07-skills-agents)**: Build specialized search agents

---

**Ready for more?** Practice by creating search scripts for your specific project needs and coding standards.

[← Back to Learning Roadmap](../LEARNING-ROADMAP.md) | [Previous: File Operations ←](02-file-operations/README.md) | [Next: Bash Integration →](04-bash-integration/README.md)
---


---

## 📄 License & Attribution

This module is part of the [OpenCode Primer](../README.md).

**License:** MIT - See [LICENSE](../LICENSE) for details.

**Last Updated:** April 2026  
**OpenCode Version:** 1.0+ compatible

---

