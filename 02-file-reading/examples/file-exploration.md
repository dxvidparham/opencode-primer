# File Exploration Examples

Learn to navigate and examine files and directories using opencode's read tool.

## Basic Directory Navigation

```bash
# Read current directory
opencode read .

# Read parent directory
opencode read ..

# Read home directory
opencode read ~/

# Read specific directory
opencode read /tmp
opencode read /etc  # May require permissions
```

## File Reading Techniques

### Reading Entire Files

```bash
# Read small files completely
opencode read README.md
opencode read package.json
opencode read .gitignore

# Read configuration files
opencode read config.json
opencode read .env.example
opencode read docker-compose.yml
```

### Reading Specific Sections

```bash
# Read first 10 lines
opencode read large-file.log --limit=10

# Skip first 100 lines, read next 50
opencode read large-file.log --offset=100 --limit=50

# Read last section of file (approximate)
# First get total lines
TOTAL_LINES=$(wc -l < large-file.log)
# Read last 100 lines
opencode read large-file.log --offset=$((TOTAL_LINES - 100))
```

### Binary and Special Files

```bash
# Check if file is text or binary
opencode bash "file /path/to/file"

# Read binary files as text (may show garbage)
opencode read /bin/ls --limit=20

# Read symbolic links
opencode read /path/to/symlink

# Read device files (carefully)
# opencode read /dev/null  # May not work as expected
```

## Practical Exercises

### Exercise 1: Project Structure Analysis

```bash
#!/bin/bash
# analyze-structure.sh

echo "Project Structure Analysis"
echo "=========================="

# 1. Root directory
echo "1. Root Directory Contents:"
opencode read . | head -20

# 2. Source directory (if exists)
if [ -d "src" ]; then
    echo -e "\n2. Source Directory:"
    opencode read src/ | head -15
fi

# 3. Configuration files
echo -e "\n3. Configuration Files:"
for config in package.json .gitignore .env.example docker-compose.yml; do
    if [ -f "$config" ]; then
        echo "=== $config ==="
        opencode read "$config" --limit=5
        echo
    fi
done

# 4. Documentation
echo -e "\n4. Documentation Files:"
opencode glob "*.md" | while read file; do
    echo "=== $(basename "$file") ==="
    opencode read "$file" --limit=3
    echo
done
```

### Exercise 2: Log File Monitoring

```bash
#!/bin/bash
# monitor-log.sh
LOG_FILE="$1"

if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file $LOG_FILE not found"
    exit 1
fi

echo "Monitoring $LOG_FILE for changes..."
echo "Press Ctrl+C to stop"
echo

LAST_SIZE=0

while true; do
    CURRENT_SIZE=$(wc -c < "$LOG_FILE")
    
    if [ "$CURRENT_SIZE" -gt "$LAST_SIZE" ]; then
        echo "[$(date)] New log entries:"
        # Read new content
        opencode read "$LOG_FILE" --offset=$((LAST_SIZE > 0 ? LAST_SIZE : 0))
        LAST_SIZE="$CURRENT_SIZE"
    fi
    
    sleep 5
done
```

### Exercise 3: Configuration Comparison

```bash
#!/bin/bash
# compare-configs.sh

echo "Configuration Comparison"
echo "========================"

# Compare development and production configs
if [ -f "config/development.json" ] && [ -f "config/production.json" ]; then
    echo "Development config (first 10 lines):"
    opencode read config/development.json --limit=10
    echo
    
    echo "Production config (first 10 lines):"
    opencode read config/production.json --limit=10
    echo
    
    echo "Key differences in database config:"
    DEV_DB=$(opencode read config/development.json | grep -i "database")
    PROD_DB=$(opencode read config/production.json | grep -i "database")
    
    echo "Development: $DEV_DB"
    echo "Production:  $PROD_DB"
fi

# Check for environment files
echo -e "\nEnvironment Files:"
for env_file in .env .env.local .env.example; do
    if [ -f "$env_file" ]; then
        echo "=== $env_file ==="
        opencode read "$env_file" | grep -v "^#" | head -5
        echo
    fi
done
```

## Real-World Examples

### Example 1: Code Review Helper

```bash
#!/bin/bash
# review-helper.sh
FILE="$1"

if [ ! -f "$FILE" ]; then
    echo "Usage: $0 <file-to-review>"
    exit 1
fi

echo "Code Review Helper for $FILE"
echo "============================="

# 1. File overview
echo "1. File Information:"
echo "   Size: $(wc -c < "$FILE") bytes"
echo "   Lines: $(wc -l < "$FILE")"
echo "   Type: $(file "$FILE")"
echo

# 2. File structure (first 20 lines)
echo "2. File Structure (first 20 lines):"
opencode read "$FILE" --limit=20
echo

# 3. Look for potential issues
echo "3. Potential Issues:"
echo "   a) TODO/FIXME comments:"
opencode grep "TODO\|FIXME" --path="$FILE"
echo
echo "   b) Console logs (if JavaScript):"
if [[ "$FILE" == *.js ]] || [[ "$FILE" == *.ts ]]; then
    opencode grep "console\." --path="$FILE"
fi
echo
echo "   c) Long lines (>100 chars):"
opencode bash "awk 'length > 100' \"$FILE\" | head -5"
```

### Example 2: Project Documentation Generator

```bash
#!/bin/bash
# generate-docs.sh

echo "Generating Project Documentation"
echo "================================"

DOC_FILE="PROJECT-OVERVIEW.md"

# Start documentation
opencode write "$DOC_FILE" --content="# Project Overview\n\nGenerated on $(date)\n\n"

# Add directory structure
echo "## Directory Structure" >> "$DOC_FILE"
echo '```' >> "$DOC_FILE"
opencode read . >> "$DOC_FILE"
echo '```' >> "$DOC_FILE"
echo >> "$DOC_FILE"

# Add README summary
if [ -f "README.md" ]; then
    echo "## README Summary" >> "$DOC_FILE"
    opencode read README.md --limit=20 >> "$DOC_FILE"
    echo >> "$DOC_FILE"
fi

# List source files
echo "## Source Files" >> "$DOC_FILE"
for ext in js ts py java go; do
    COUNT=$(opencode glob "**/*.$ext" 2>/dev/null | wc -l)
    if [ "$COUNT" -gt 0 ]; then
        echo "- $ext files: $COUNT" >> "$DOC_FILE"
    fi
done

echo "Documentation generated: $DOC_FILE"
```

### Example 3: Security Check

```bash
#!/bin/bash
# security-check.sh

echo "Security Check"
echo "=============="

# Check for sensitive files
SENSITIVE_FILES=(
    ".env"
    "config.json"
    "secrets.yml"
    "private-key.pem"
)

echo "1. Checking for sensitive files:"
for file in "${SENSITIVE_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "   WARNING: $file found"
        echo "   First line:"
        opencode read "$file" --limit=1
        echo
    fi
done

# Check file permissions
echo "2. Checking file permissions:"
opencode bash "find . -type f -perm /o=rwx -ls 2>/dev/null | head -10"

# Look for hardcoded secrets patterns
echo -e "\n3. Checking for potential secrets:"
PATTERNS=(
    "password"
    "secret"
    "key"
    "token"
    "api[_-]key"
)

for pattern in "${PATTERNS[@]}"; do
    echo "   Searching for: $pattern"
    opencode grep -i "$pattern" --include="*.{js,py,json,yml,yaml}" 2>/dev/null | head -3
done
```

## Best Practices

### ✅ Do
- **Use `--limit` for large files** to avoid overwhelming output
- **Check file existence** before reading
- **Use absolute paths** in scripts
- **Handle binary files** appropriately
- **Clean up temporary files** after reading

### ❌ Don't
- **Don't read extremely large files** without limits
- **Don't assume text encoding** (UTF-8 vs ASCII vs binary)
- **Don't ignore permissions** errors
- **Don't read sensitive files** in shared environments
- **Don't modify files** while reading them

## Tips and Tricks

1. **Combine with other tools**:
   ```bash
   # Count lines in all Python files
   for file in $(opencode glob "**/*.py"); do
       echo "$file: $(wc -l < "$file") lines"
   done
   ```

2. **Monitor file changes**:
   ```bash
   # Watch for changes in a directory
   while true; do
       opencode read /path/to/watch/ | md5sum
       sleep 10
   done
   ```

3. **Extract specific information**:
   ```bash
   # Get all function names from JavaScript files
   opencode grep "function " --include="*.js" | cut -d' ' -f2 | cut -d'(' -f1
   ```

## Next Steps

After mastering file reading:
1. Practice with different file types (JSON, YAML, CSV, logs)
2. Create scripts for your specific use cases
3. Move on to [File Operations](../../03-file-operations/README.md) to learn editing
4. Combine reading with [Search Tools](../../04-search-tools/README.md) for powerful workflows