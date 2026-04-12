# OpenCode Primer — Agent Guidance

## Project Overview

A **documentation-only** repository: 10 structured learning modules for the [OpenCode](https://opencode.ai) AI coding agent. No application code. All content is Markdown with a few JSON/YAML config files.

**Repository:** `dxvidparham/opencode-primer`
**License:** MIT
**Primary language:** Markdown

## File Structure

```text
opencode-primer/
├── 01-basic-commands/          # Module 1: TUI basics, slash commands
│   ├── README.md
│   └── examples/
├── 02-file-operations/         # Module 2: Read, write, edit tools
│   ├── README.md
│   └── examples/
├── 03-search-tools/            # Module 3: Grep, glob, list tools
│   ├── README.md
│   └── examples/
├── 04-bash-integration/        # Module 4: Bash tool, shell commands
│   └── README.md
├── 05-question-todo/           # Module 5: Question & todowrite tools
│   └── README.md
├── 06-web-tools/               # Module 6: Webfetch, websearch tools
│   └── README.md
├── 07-skills-agents/           # Module 7: Custom skills & agents
│   └── README.md
├── 08-mcp-servers/             # Module 8: MCP server integration
│   └── README.md
├── 09-advanced-features/       # Module 9: Multi-file, context mgmt
│   └── README.md
├── 10-openwork/                # Module 10: OpenWork integration
│   └── README.md
├── resources/logos/             # Brand assets (SVG/PNG)
├── .github/                    # CI workflows, templates, Copilot config
├── .markdownlint.json          # Markdown lint rules
├── .gitattributes              # Mergiraf merge driver, LF enforcement
├── AGENTS.md                   # This file
├── CATALOG.md                  # Tool catalog & Mermaid diagram
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md             # Style guide & contribution workflow
├── flaws.md                    # Audit: historical fabricated-command issues
├── LEARNING-ROADMAP.md         # Suggested learning paths
├── LICENSE                     # MIT
├── QUICK-REFERENCE.md          # Cheat sheet
├── README.md                   # Main guide with module index
├── README-TEMPLATE.md          # Template for new modules
├── SKILLS-CHECKLIST.md         # Self-assessment checkboxes
└── TROUBLESHOOTING.md          # Cross-cutting known issues
```

## CRITICAL: No Fabricated CLI Commands

**This is the single most important constraint for any agent working on this codebase.**

OpenCode's internal tools (read, write, edit, bash, grep, glob, list, webfetch, websearch, question, todowrite) are **LLM-invoked tools inside the TUI**. They are NOT CLI subcommands and must NEVER be presented as such.

### Valid OpenCode CLI commands (exhaustive list)

```bash
opencode                           # Launch the TUI
opencode run "prompt"              # Non-interactive mode
opencode run --prompt "prompt"     # Non-interactive with flag
opencode auth login                # Configure AI providers
opencode auth list                 # List configured providers
opencode mcp add                   # Add an MCP server
opencode mcp list                  # List MCP servers
opencode upgrade                   # Update OpenCode to latest
```

### NEVER write commands like these

```bash
opencode read file.txt             # ❌ NOT a CLI command
opencode bash "pwd"                # ❌ NOT a CLI command
opencode grep "pattern"            # ❌ NOT a CLI command
opencode edit file --old="x"       # ❌ NOT a CLI command
opencode "prompt"                  # ❌ Missing `run` subcommand
opencode --update                  # ❌ It's `upgrade`, not `--update`
opencode mcp debug                 # ❌ Does not exist
opencode mcp auth                  # ❌ Does not exist
opencode account                   # ❌ It's `auth`, not `account`
```

See `flaws.md` for the full audit of previously fabricated commands.

## Markdown Style Rules

1. **Lint config:** `.markdownlint.json` — MD013 (line length) disabled, inline HTML allowed
2. **Headers:** `##` for major sections, `###` for subsections
3. **Code blocks:** Always use fenced blocks with a language specifier (`` ```bash ``, `` ```json ``, etc.)
4. **Emoji section markers:** `📋` TOC, `🚀` Getting Started, `🎯` Overview, `✅` Prerequisites, `💡` Tips, `⚠️` Warnings, `🐛` Troubleshooting, `📂` Companions, `❓` FAQ, `📝` Knowledge Check, `➡️` Next Steps
5. **Inline code:** Use backticks for commands, file names, tool names, config keys

## Module README Template

Every module README follows this structure (in order):

1. Badges row (difficulty, time, tools)
2. `## 📋 Table of Contents`
3. `## 🎯 Overview`
4. `## ✅ Prerequisites`
5. Core concept sections (numbered: Concept 1, Concept 2, ...)
6. `## 🔄 Common Workflows`
7. `## 🏋️ Exercises`
8. `## ❓ FAQ`
9. `## 🐛 Troubleshooting` (where applicable)
10. `## 📝 Knowledge Check`
11. `## ➡️ Next Steps`

## Commit Messages

Use conventional commits as defined in `CONTRIBUTING.md`:

```text
feat: add new example for search patterns
fix: correct outdated command in module 04
docs: update troubleshooting entries
style: improve formatting in workflows module
ci: update markdownlint action to v20
```

## Development Commands

```bash
# Lint all markdown files
markdownlint '**/*.md'

# Audit GitHub Actions workflows for security issues
zizmor .github/workflows/

# Validate GitHub Actions workflow syntax
wrkflw validate

# Run GitHub Actions workflows locally (emulation mode, no Docker needed)
wrkflw run --runtime emulation .github/workflows/lint.yml
```

## Dependencies & Tools

| Tool | Purpose | Install |
|---|---|---|
| **markdownlint-cli2** | Markdown linting | `npm install -g markdownlint-cli2` |
| **zizmor** | GitHub Actions security audit | `pipx install zizmor` |
| **wrkflw** | Local GH Actions validation/execution | `cargo install wrkflw` |
| **mergiraf** | Structured merge driver (YAML/JSON/JS/TS) | `cargo install mergiraf` |

## Key References

- `CONTRIBUTING.md` — Full style guide and contribution workflow
- `TROUBLESHOOTING.md` — Cross-cutting known issues and limitations table
- `flaws.md` — Audit report documenting the fabricated-command problem
- `.markdownlint.json` — Markdown lint configuration
- `.github/copilot-instructions.md` — GitHub Copilot-specific instructions (mirrors this file)
