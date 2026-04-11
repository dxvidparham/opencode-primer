# Editing Patterns

Common patterns for editing and searching files with OpenCode.

> **Key concept**: `edit`, `write`, `grep`, and `glob` are LLM-internal tools — you don't type them as CLI commands. You describe what you want in natural language and the LLM calls these tools automatically.

## How Editing Works in OpenCode

When you ask OpenCode to edit a file, the LLM uses these internal tools:

| LLM Tool | What It Does               | You might say...                                   |
| -------- | -------------------------- | -------------------------------------------------- |
| `edit`   | Find-and-replace in a file | "Change the port from 3000 to 8080 in config.json" |
| `write`  | Create or overwrite a file | "Create a .gitignore for a Node.js project"        |
| `grep`   | Search file contents       | "Find all files that use the database connection"  |
| `glob`   | Find files by name pattern | "Find all test files in the project"               |

## Example Prompts for Editing

### Simple Edits

```
Change the version in package.json from 1.0.0 to 1.1.0
```

```
Replace all occurrences of "var" with "const" in src/legacy.js
```

```
Add a new "build" script to package.json
```

### Creating Files

```
Create a .env.example file with placeholder values for DATABASE_URL and API_KEY
```

```
Create a Dockerfile for a Node.js 18 application
```

```
Write a basic README.md for this project
```

### Multi-File Edits

```
Update the copyright year from 2023 to 2024 in all source files
```

```
Add "use strict" to the top of every JavaScript file that doesn't have it
```

```
Rename the UserService class to AccountService across all files
```

## Searching Patterns

### Finding Code

```
Search for all TODO and FIXME comments in the codebase
```

```
Find all files that import from the "utils" module
```

```
Which files contain console.log statements?
```

### Finding Files

```
Find all TypeScript test files
```

```
List all configuration files (JSON, YAML, TOML, ENV)
```

```
What files are in the src/components directory?
```

## Shell Equivalents

For when you want to run commands directly:

```bash
# Search file contents
grep -rn 'TODO\|FIXME' --include='*.ts' .

# Find files by pattern
find . -name '*.test.ts' -type f

# Simple text replacement (single file)
sed -i 's/old-text/new-text/g' src/config.ts

# Create a file
cat > .env.example << 'EOF'
DATABASE_URL=postgres://localhost/mydb
API_KEY=your-key-here
EOF

# Find and replace across files
grep -rl 'old-import' --include='*.ts' src/ | xargs sed -i 's/old-import/new-import/g'
```

Inside the TUI, prefix shell commands with `!`:

```
! grep -rn 'TODO' --include='*.ts' src/
```

## Practice Exercises

### Exercise 1: Configuration Updates

1. Open a project with `opencode`
2. Try these prompts:
   - `Read package.json and tell me the current version`
   - `Bump the patch version number in package.json`
   - `Add a "lint" script that runs eslint`

### Exercise 2: Code Cleanup

1. Inside the TUI, ask:
   - `Find all console.log statements in the source code`
   - `Remove the console.log on line 42 of src/api.ts` (use actual file/line)
   - `Replace all console.log calls with a proper logger import`

### Exercise 3: File Creation

1. Inside the TUI, ask:
   - `Create a .gitignore that covers Node.js, Python, and editor files`
   - `Create a docker-compose.yml with a postgres service`
   - `Write a CONTRIBUTING.md based on the project structure`

## Tips

- **Be specific** about what to change: "Change port 3000 to 8080 in src/config.ts" is better than "change the port"
- **Reference files with `@`**: `Update the version in @package.json` helps the LLM find the right file
- **Review before approving**: OpenCode shows you diffs before applying edits — read them carefully
- **Use the Plan agent** (press Tab) if you want to review every bash command and edit before it runs

## Next Steps

- Read the [Module 03 README](../README.md) for detailed concepts
- Continue to [Module 04: Bash Integration](../../04-bash-integration/README.md)
- See the [Quick Reference](../../QUICK-REFERENCE.md) for a command cheat sheet
