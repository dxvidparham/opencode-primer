# File Editing Patterns

Common patterns and examples for editing files with opencode's edit and write tools.

## Basic Editing Patterns

### Simple Text Replacement

```bash
# Replace single occurrence
opencode edit document.txt --old="old text" --new="new text"

# Replace all occurrences
opencode edit script.js --old="var " --new="const " --replaceAll

# Replace with multiline text
opencode edit config.yml \
  --old="database: localhost" \
  --new=$'database:\n  host: localhost\n  port: 5432'
```

### Configuration Updates

```bash
# Update version number
opencode edit package.json \
  --old='"version": "1.0.0"' \
  --new='"version": "1.1.0"'

# Change port configuration
opencode edit config.json \
  --old='"port": 3000' \
  --new='"port": 8080'

# Add new configuration section
opencode edit settings.yaml \
  --old="logging:\n  level: info" \
  --new=$'logging:\n  level: info\n  file: /var/log/app.log'
```

## File Creation Patterns

### Creating Configuration Files

```bash
# Create .env file
opencode write .env --content=$'# Environment Variables\nAPI_KEY=your_key_here\nDATABASE_URL=postgres://localhost/db\nDEBUG=true'

# Create package.json
opencode write package.json --content='{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  }
}'

# Create Dockerfile
opencode write Dockerfile --content=$'FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nCMD ["node", "index.js"]'
```

### Creating Documentation

```bash
# Create README
opencode write README.md --content=$'# Project Name\n\n## Overview\nBrief description of the project.\n\n## Installation\n```bash\nnpm install\n```\n\n## Usage\n```bash\nnpm start\n```\n\n## License\nMIT'

# Create API documentation
opencode write API.md --content=$'# API Reference\n\n## Endpoints\n\n### GET /api/users\nReturns list of users.\n\n### POST /api/users\nCreates a new user.'

# Create changelog
opencode write CHANGELOG.md --content=$'# Changelog\n\n## [1.0.0] - 2024-01-01\n### Added\n- Initial release\n- Basic functionality'
```

## Advanced Editing Techniques

### Batch File Processing

```bash
#!/bin/bash
# update-copyright.sh

NEW_YEAR="2024"

echo "Updating copyright year to $NEW_YEAR..."

# Update in JavaScript/TypeScript files
for file in $(opencode glob "**/*.{js,ts}"); do
    if opencode grep "Copyright.*2023" --path="$file" >/dev/null; then
        echo "Updating $file"
        opencode edit "$file" --old="Copyright.*2023" --new="Copyright $NEW_YEAR" --replaceAll
    fi
done

# Update in Python files
for file in $(opencode glob "**/*.py"); do
    if opencode grep "# Copyright.*2023" --path="$file" >/dev/null; then
        echo "Updating $file"
        opencode edit "$file" --old="# Copyright.*2023" --new="# Copyright $NEW_YEAR" --replaceAll
    fi
done

echo "Copyright update complete!"
```

### Template-based Generation

```bash
#!/bin/bash
# create-component.sh
COMPONENT_NAME="$1"

if [ -z "$COMPONENT_NAME" ]; then
    echo "Usage: $0 <component-name>"
    exit 1
fi

# Template for React component
COMPONENT_TEMPLATE=$'import React from "react";\n\ntype [NAME]Props = {\n  // Add props here\n};\n\nexport const [NAME]: React.FC<[NAME]Props> = (props) => {\n  return (\n    <div className="[NAME]-container">\n      <h1>[NAME] Component</h1>\n      {/* Add component content */}\n    </div>\n  );\n};'

# Replace template variables
CONTENT="${COMPONENT_TEMPLATE//\[NAME\]/$COMPONENT_NAME}"

# Create component file
opencode write "src/components/${COMPONENT_NAME}.tsx" --content="$CONTENT"

# Create test file
TEST_TEMPLATE=$'import { render, screen } from "@testing-library/react";\nimport { [NAME] } from "./[NAME]";\n\ndescribe("[NAME]", () => {\n  it("renders correctly", () => {\n    render(<[NAME] />);\n    expect(screen.getByText("[NAME] Component")).toBeInTheDocument();\n  });\n});'

TEST_CONTENT="${TEST_TEMPLATE//\[NAME\]/$COMPONENT_NAME}"
opencode write "src/components/${COMPONENT_NAME}.test.tsx" --content="$TEST_CONTENT"

echo "Created component: $COMPONENT_NAME"
```

### Conditional Editing

```bash
#!/bin/bash
# safe-config-update.sh
CONFIG_FILE="$1"
KEY="$2"
VALUE="$3"

if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: Config file $CONFIG_FILE not found"
    exit 1
fi

# Check if key exists
if opencode grep "\"$KEY\":" --path="$CONFIG_FILE" >/dev/null; then
    # Update existing key
    echo "Updating existing key: $KEY"
    opencode edit "$CONFIG_FILE" --old="\"$KEY\":.*" --new="\"$KEY\": \"$VALUE\","
else
    # Add new key before the closing brace
    echo "Adding new key: $KEY"
    opencode edit "$CONFIG_FILE" --old="\n}" --new=$',\n  "'"$KEY"'": "'"$VALUE"'"\n}'
fi

echo "Config updated successfully"
```

## Real-World Examples

### Example 1: Environment Setup Script

```bash
#!/bin/bash
# setup-environment.sh

echo "Setting up development environment..."

# Create directory structure
mkdir -p {src,public,tests,docs,scripts}

# Create basic files
opencode write .gitignore --content=$'# Dependencies\nnode_modules/\n\n# Environment\n.env\n\n# Build outputs\ndist/\nbuild/\n\n# Logs\n*.log\n'

opencode write .env.example --content=$'# Copy this to .env and update values\nAPI_URL=http://localhost:3000\nDATABASE_URL=postgres://user:pass@localhost/db\nDEBUG=true\nSECRET_KEY=change_this_in_production'

opencode write package.json --content='{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My application",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest",
    "lint": "eslint src/",
    "build": "webpack"
  }
}'

opencode write README.md --content=$'# My Application\n\n## Setup\n1. Copy .env.example to .env\n2. Update environment variables\n3. Run `npm install`\n4. Run `npm start`\n\n## Development\n- `npm run dev` for development with hot reload\n- `npm test` to run tests\n- `npm run lint` to check code style'

echo "Environment setup complete!"
```

### Example 2: Migration Script

```bash
#!/bin/bash
# migrate-legacy-code.sh

echo "Migrating legacy code to modern standards..."

# 1. Update var to const/let
echo "1. Updating variable declarations..."
for file in $(opencode glob "**/*.js"); do
    # First pass: var to const for variables not reassigned
    # This is simplified - real migration would be more sophisticated
    opencode edit "$file" --old="var " --new="const " --replaceAll
done

# 2. Update function syntax
echo "2. Updating function syntax..."
for file in $(opencode glob "**/*.js"); do
    # Convert function() to arrow functions where appropriate
    # Note: This is a simplified example
    opencode edit "$file" --old="function(" --new="= (" --replaceAll
    opencode edit "$file" --old=") {" --new=") => {" --replaceAll
done

# 3. Update imports/exports
echo "3. Updating module syntax..."
for file in $(opencode glob "**/*.js"); do
    # Convert CommonJS to ES6 modules
    opencode edit "$file" --old="module.exports = " --new="export default " --replaceAll
    opencode edit "$file" --old="exports." --new="export " --replaceAll
    opencode edit "$file" --old="require('" --new="import " --replaceAll
done

echo "Migration complete! Review changes before committing."
```

### Example 3: Code Quality Enforcer

```bash
#!/bin/bash
# enforce-code-standards.sh

echo "Enforcing code standards..."

# Process all JavaScript/TypeScript files
for file in $(opencode glob "**/*.{js,ts,jsx,tsx}"); do
    echo "Processing $file"
    
    # 1. Remove trailing whitespace
    opencode edit "$file" --old="[[:space:]]+\n" --new="\n" --replaceAll
    
    # 2. Ensure consistent line endings
    opencode bash "dos2unix -q \"$file\" 2>/dev/null"
    
    # 3. Add missing semicolons (simplified)
    opencode edit "$file" --old=$'\n}\n' --new=$';\n}\n' --replaceAll
    
    # 4. Ensure newline at end of file
    LAST_CHAR=$(tail -c1 "$file")
    if [ "$LAST_CHAR" != "" ]; then
        opencode edit "$file" --old="$" --new="\n"
    fi
done

# Process all markdown files
for file in $(opencode glob "**/*.md"); do
    echo "Processing $file"
    
    # Ensure consistent heading spacing
    opencode edit "$file" --old="# " --new="# " --replaceAll
    opencode edit "$file" --old="## " --new="## " --replaceAll
    
    # Remove multiple blank lines
    opencode edit "$file" --old="\n\n\n" --new="\n\n" --replaceAll
done

echo "Code standards enforced!"
```

## Error Handling Patterns

### Safe Editing with Backup

```bash
#!/bin/bash
# safe-edit.sh
FILE="$1"
OLD_TEXT="$2"
NEW_TEXT="$3"

if [ $# -ne 3 ]; then
    echo "Usage: $0 <file> <old-text> <new-text>"
    exit 1
fi

if [ ! -f "$FILE" ]; then
    echo "Error: File $FILE not found"
    exit 1
fi

# Create backup
BACKUP="${FILE}.backup.$(date +%s)"
cp "$FILE" "$BACKUP"
echo "Backup created: $BACKUP"

# Check if old text exists
if ! opencode grep --quiet "$OLD_TEXT" --path="$FILE"; then
    echo "Warning: Text '$OLD_TEXT' not found in $FILE"
    echo "No changes made. Backup preserved."
    exit 0
fi

# Perform edit
echo "Editing $FILE..."
if opencode edit "$FILE" --old="$OLD_TEXT" --new="$NEW_TEXT"; then
    echo "Edit successful!"
    
    # Verify the change
    if opencode grep --quiet "$NEW_TEXT" --path="$FILE"; then
        echo "Verification: New text found in file"
        # Optional: Remove backup after verification
        # rm "$BACKUP"
    else
        echo "Warning: New text not found after edit. Backup preserved."
    fi
else
    echo "Error: Edit failed. Restoring from backup..."
    cp "$BACKUP" "$FILE"
    echo "File restored from backup"
fi
```

### Batch Processing with Error Recovery

```bash
#!/bin/bash
# batch-process-with-recovery.sh

ERROR_LOG="edit-errors.log"
SUCCESS_COUNT=0
ERROR_COUNT=0

echo "Starting batch processing..." > "$ERROR_LOG"

# Process files
for file in $(opencode glob "**/*.txt"); do
    echo "Processing $file..."
    
    # Try to edit
    if opencode edit "$file" --old="old" --new="new" --replaceAll 2>/dev/null; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        echo "  Success"
    else
        ERROR_COUNT=$((ERROR_COUNT + 1))
        echo "  ERROR: Failed to edit $file" >> "$ERROR_LOG"
        echo "  Failed"
    fi
done

echo "Batch processing complete!"
echo "Success: $SUCCESS_COUNT files"
echo "Errors: $ERROR_COUNT files (see $ERROR_LOG)"
```

## Best Practices

### ✅ Do
- **Always create backups** before editing
- **Test edits on copies** first
- **Use exact string matching** to avoid unintended changes
- **Validate file formats** (JSON, YAML) after editing
- **Use version control** for important changes

### ❌ Don't
- **Don't edit files in production** without testing
- **Don't use vague patterns** that might match unintended text
- **Don't ignore case sensitivity** unless intended
- **Don't edit binary files** with text tools
- **Don't make changes without understanding** the full context

## Tips and Tricks

1. **Preview changes**:
   ```bash
   # Show what would be changed
   opencode grep "pattern" --path="file.txt"
   # Count occurrences
   opencode grep -c "pattern" --path="file.txt"
   ```

2. **Use dry runs** (if available):
   ```bash
   # Check what would be changed without actually changing
   # opencode edit --dry-run file.txt --old="a" --new="b"
   ```

3. **Batch operations**:
   ```bash
   # Edit all files matching pattern
   for file in $(opencode glob "**/*.js"); do
       opencode edit "$file" --old="// TODO" --new="// DONE"
   done
   ```

## Next Steps

After mastering file operations:
1. Practice with your own projects
2. Create reusable scripts for common tasks
3. Move on to [Search Tools](../../04-search-tools/README.md) for finding content
4. Combine with [Bash Integration](../../05-bash-integration/README.md) for automation
5. Explore [Task Automation](../../06-task-automation/README.md) for workflow creation