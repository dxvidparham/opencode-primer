# Copilot Instructions for opencode-primer

This is a **documentation-only** repository — a 10-module learning guide for the [OpenCode](https://opencode.ai) AI coding agent. There is no application code to build, test, or deploy. All content is Markdown.

## Critical Constraint: No Fabricated CLI Commands

The **single most important rule** for this repository: never invent OpenCode CLI commands.

OpenCode's tools (read, write, edit, bash, grep, glob, list, webfetch, websearch, question, todowrite) are **internal tools used by the LLM inside the TUI**. They are NOT CLI subcommands.

### The ONLY valid OpenCode CLI commands

```bash
opencode                           # Start TUI (interactive mode)
opencode run "prompt"              # Non-interactive single prompt
opencode run --prompt "prompt"     # Non-interactive with flag
opencode auth login                # Configure providers
opencode auth list                 # List providers
opencode mcp add                   # Add MCP server
opencode mcp list                  # List MCP servers
opencode upgrade                   # Update OpenCode
```

### NEVER generate commands like these

```bash
opencode read file.txt             # ❌ WRONG
opencode bash "pwd"                # ❌ WRONG
opencode grep "TODO"               # ❌ WRONG
opencode edit file --old="x"       # ❌ WRONG
opencode "prompt"                  # ❌ WRONG (needs `run`)
opencode --update                  # ❌ WRONG (it's `upgrade`)
opencode mcp debug                 # ❌ WRONG (doesn't exist)
opencode mcp auth                  # ❌ WRONG (doesn't exist)
opencode account                   # ❌ WRONG (it's `auth`)
```

## Markdown Style

- Follow `.markdownlint.json` rules (MD013 disabled, inline HTML allowed, etc.)
- Use `##` for major sections, `###` for subsections
- All code examples must have a language specifier in fenced blocks
- Use emoji prefixes for section headers: `📋`, `🚀`, `💡`, `⚠️`, `🐛`, `📂`, etc.
- Inline code for commands, file names, and tool names

## Commit Messages

Use conventional commits:

```text
feat: add new example for search patterns
fix: correct typo in basic commands README
docs: update installation instructions
style: improve formatting in workflows module
```

## Module README Structure

Every module README follows this template:

1. Badges row
2. `## 📋 Table of Contents`
3. `## 🎯 Overview`
4. `## ✅ Prerequisites`
5. Core concept sections
6. `## 🔄 Common Workflows`
7. `## 🏋️ Exercises`
8. `## ❓ FAQ`
9. `## 🐛 Troubleshooting` (where applicable)
10. `## 📝 Knowledge Check`
11. `## ➡️ Next Steps`

## Testing Changes

```bash
markdownlint '**/*.md'                # Lint all markdown
zizmor .github/workflows/             # Audit workflow security
wrkflw validate                       # Validate GitHub Actions
```

## Key Files

- `CONTRIBUTING.md` — full style guide and contribution workflow
- `.markdownlint.json` — markdown lint rules
- `TROUBLESHOOTING.md` — cross-cutting known issues
- `flaws.md` — audit report documenting historical fabricated-command problems
