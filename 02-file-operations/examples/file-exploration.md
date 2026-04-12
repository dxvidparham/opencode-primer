# File Exploration Examples

> 📌 **This is a hands-on companion to [Module 02: File Operations](../README.md).** Start with the module README for concepts, or work through these exercises alongside it.

Learn how OpenCode helps you navigate and understand codebases.

> **Key concept**: `read`, `glob`, `grep`, and `list` are LLM-internal tools — you don't type them as CLI commands. Instead, you describe what you want in natural language and the LLM calls these tools automatically.

## How File Exploration Works in OpenCode

When you ask OpenCode to explore files, the LLM uses internal tools on your behalf:

| LLM Tool | What It Does                     | You might say...            |
| -------- | -------------------------------- | --------------------------- |
| `read`   | Reads file or directory contents | "Show me src/main.ts"       |
| `glob`   | Finds files matching a pattern   | "Find all TypeScript files" |
| `list`   | Lists directory contents         | "What's in the src folder?" |
| `grep`   | Searches file contents           | "Search for TODO comments"  |

You can also reference files directly with `@`:

```
Explain @src/main.ts
```

```
What's different between @config/dev.json and @config/prod.json?
```

## Example Prompts for File Exploration

### Understanding Project Structure

```
What files and folders are in this project?
```

```
Show me the directory tree for src/
```

```
Find all configuration files (JSON, YAML, TOML)
```

### Reading Files

```
Read README.md and summarize it
```

```
Show me the first 50 lines of src/server.ts
```

```
What does the main function in @src/index.js do?
```

### Searching Across Files

```
Find all files that import the "database" module
```

```
Search for TODO or FIXME comments in the codebase
```

```
Which files reference the UserService class?
```

## Shell Equivalents

If you prefer running commands directly (outside OpenCode), here are the shell equivalents:

```bash
# List directory contents
ls -la src/

# Find files by pattern
find . -name '*.ts' -type f

# Search file contents
grep -rn 'TODO\|FIXME' --include='*.ts' .

# Read a file
cat src/main.ts

# Read first N lines
head -50 src/main.ts

# Read specific line range
sed -n '10,20p' src/main.ts
```

Inside the TUI, you can also run shell commands directly by prefixing with `!`:

```
! find . -name '*.ts' | head -20
```

## Practice Exercises

### Exercise 1: Project Structure Analysis

1. Open a terminal in any project directory
2. Run `opencode`
3. Ask these prompts in sequence:
   - `What files are in this project? Give me an overview.`
   - `Show me all TypeScript files in the project`
   - `Read package.json and list the dependencies`

### Exercise 2: Code Investigation

1. Inside the TUI, try:
   - `Find all files that contain "export default"`
   - `Search for any hardcoded URLs in the source code`
   - `Which files are longer than 200 lines?`

### Exercise 3: Configuration Review

1. Inside the TUI, try:
   - `Find all .env, .json, and .yaml config files`
   - `Read each configuration file and summarize what it configures`
   - `Are there any secrets or API keys committed to the repo?`

## Tips

- **Use `@` references** when you know the exact file: `Explain @src/auth.ts`
- **Be specific** about what you want: "Show me the error handling in @src/api.ts" works better than "show me the file"
- **Ask for summaries** of large files: "Summarize @src/database.ts — focus on the public API"
- **Chain requests**: "Find all test files, then tell me which modules lack test coverage"

## Next Steps

- Return to the [Module 02 README](../README.md) for core concepts (read/edit/write tools, permissions, undo/redo)
- Continue to [Module 03: Search Tools](../../03-search-tools/README.md)
- See the [Quick Reference](../../QUICK-REFERENCE.md) for a command cheat sheet
