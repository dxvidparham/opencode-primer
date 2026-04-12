# OpenCode Primer — Audit Report

## Source: Comparison with [claude-howto](https://github.com/luongnv89/claude-howto) + Verification against [opencode.ai/docs](https://opencode.ai/docs)

---

## 1. Structural Comparison: claude-howto vs opencode-primer

### Module Mapping

| #   | claude-howto             | opencode-primer       | Match Quality                                                                                                                                                                         |
| --- | ------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Slash Commands           | Basic Commands & TUI  | PARTIAL — claude-howto covers custom `.claude/commands/` (now skills). opencode-primer covers TUI basics which is reasonable                                                          |
| 02  | Memory (CLAUDE.md)       | File Operations       | NO MATCH — claude-howto teaches persistent memory files. opencode-primer covers read/write/edit tools. OpenCode uses `AGENTS.md` instead of `CLAUDE.md`, plus `.opencode/` config dir |
| 03  | Skills (.claude/skills/) | Search Tools          | NO MATCH — claude-howto teaches Skills framework. opencode-primer covers grep/glob/list tools                                                                                         |
| 04  | Subagents                | Bash Integration      | NO MATCH — claude-howto teaches specialized AI agents. opencode-primer covers bash tool                                                                                               |
| 05  | MCP                      | Question & Todo Tools | NO MATCH — claude-howto teaches MCP here. opencode-primer covers question/todowrite tools                                                                                             |
| 06  | Hooks                    | Web Tools             | NO MATCH — claude-howto teaches event-driven hooks. opencode-primer covers webfetch/websearch                                                                                         |
| 07  | Plugins                  | Skills & Agents       | PARTIAL — opencode-primer does cover skills/agents here                                                                                                                               |
| 08  | Checkpoints              | MCP Servers           | PARTIAL — both repos cover MCP, just different module number                                                                                                                          |
| 09  | Advanced Features        | Advanced Features     | MATCH — both cover advanced topics                                                                                                                                                    |
| 10  | CLI Reference            | OpenWork Integration  | NO MATCH — claude-howto covers CLI. opencode-primer covers a non-existent product                                                                                                     |

### Verdict: Does opencode-primer correctly emulate claude-howto?

**NO.** The repos have fundamentally different module organizations. claude-howto is organized by Claude Code *features* (slash commands, memory, skills, hooks, etc.), while opencode-primer is organized by OpenCode's *built-in tools* (read/write, search, bash, question, webfetch). This is a reasonable *adaptation* rather than emulation — the problem is that **the content within each module is largely incorrect**.

---

## 2. CRITICAL: Fabricated CLI Commands (affects ALL modules)

The single biggest issue: **OpenCode's tools (read, write, edit, bash, grep, glob, list, skill, todowrite, question, webfetch, websearch) are NOT CLI subcommands.** They are internal tools used by the LLM inside the TUI or via `opencode run`.

### What the primer claims (WRONG)

```bash
opencode read test.txt           # ❌ DOES NOT EXIST
opencode bash "pwd"              # ❌ DOES NOT EXIST
opencode glob "**/*.js"          # ❌ DOES NOT EXIST
opencode grep "TODO"             # ❌ DOES NOT EXIST
opencode list "src/"             # ❌ DOES NOT EXIST
opencode search "pattern"        # ❌ DOES NOT EXIST
opencode edit file --old="x" --new="y"  # ❌ DOES NOT EXIST
opencode question "Which framework?"    # ❌ DOES NOT EXIST
opencode todowrite [...]         # ❌ DOES NOT EXIST
opencode "Explain this project"  # ❌ WRONG SYNTAX
opencode --update                # ❌ DOES NOT EXIST
opencode --timeout=60            # ❌ DOES NOT EXIST
```

### What the actual OpenCode CLI supports (per docs)

```bash
opencode                         # Start TUI
opencode run "prompt here"       # Non-interactive mode
opencode run --prompt "prompt"   # With flag
opencode agent list              # List agents
opencode agent create            # Create agent
opencode auth login              # Configure providers
opencode auth list               # List providers
opencode mcp add                 # Add MCP server
opencode mcp list                # List MCP servers
opencode models                  # List models
opencode session list            # List sessions
opencode stats                   # Token usage stats
opencode export [sessionID]      # Export session
opencode import <file>           # Import session
opencode serve                   # Start headless server
opencode web                     # Start web interface
opencode upgrade                 # Update opencode
opencode uninstall               # Uninstall
opencode --version               # Print version
opencode --help                  # Show help
```

### How tools actually work in OpenCode

The tools (read, write, edit, bash, grep, glob, list, etc.) are used by the **LLM inside the TUI**. You interact with them by:

1. Starting OpenCode: `opencode`
2. Typing a prompt in the TUI: "Read the file src/main.ts" or "Run npm test"
3. The LLM decides which tools to invoke automatically
4. Or via non-interactive mode: `opencode run "Search for TODO comments in the codebase"`

To run bash commands from TUI, prefix with `!`:

```
!ls -la        # Run shell command from TUI prompt  
!npm test      # Run npm test from TUI prompt
```

### Files affected

- README.md (main) — ~10 instances
- LEARNING-ROADMAP.md — ~20 instances
- CATALOG.md — ~15 instances
- QUICK-REFERENCE.md — likely many instances
- CONTRIBUTING.md — ~2 instances
- 01-basic-commands/README.md — ~5 instances
- 03-search-tools/README.md — ~30+ instances
- 04-bash-integration/README.md — ~60+ instances
- 05-question-todo/README.md — ~5+ instances
- 06-web-tools/README.md — ~5+ instances
- 07-skills-agents/README.md — ~5+ instances
- 08-mcp-servers/README.md — ~5+ instances
- 09-advanced-features/README.md — unknown

**Estimated total: 150-200+ incorrect CLI commands across the repository.**

---

## 3. CRITICAL: Bash Quoting Error

### In 01-basic-commands/README.md line 120

```bash
echo "Hello, OpenCode!" > test.txt    # ❌ WRONG — ! triggers history expansion in bash
```

**Fix:**

```bash
echo 'Hello, OpenCode!' > test.txt    # ✅ Single quotes prevent history expansion
```

---

## 4. CRITICAL: Wrong opencode invocations

### `opencode "prompt"` should be `opencode run "prompt"`

Per the CLI docs, bare `opencode` starts the TUI. To pass a prompt non-interactively:

```bash
opencode run "Explain this project's structure"   # ✅ Correct
opencode run "Say hello"                          # ✅ Correct
```

### `opencode --update` should be `opencode upgrade`

```bash
opencode upgrade         # ✅ Correct
```

### `opencode --version` is correct ✅

---

## 5. ~~CRITICAL: Module 10 (OpenWork) describes a fabricated product~~ CORRECTED

**OpenWork is a real product** by Different AI — [openworklabs.com](https://openworklabs.com/). It's "the open source alternative to Claude Cowork."

However, the original module content was still inaccurate — it fabricated CLI commands like `openwork login`, `openwork org create`, `openwork team create`, `openwork workspace create`, `openwork review create`, etc. that don't exist.

**Fixed:** Module 10 has been rewritten with accurate information sourced from [openworklabs.com/docs](https://openworklabs.com/docs), covering:

- Desktop app setup and LLM provider connection
- Self-hosted setup with `npm install -g openwork-orchestrator` and `openwork start`
- OpenWork Cloud for teams (skill hubs, shared workspaces, RBAC)
- Skill sharing via links

---

## 6. ~~CRITICAL: Module 09 describes a non-existent JavaScript plugin system~~ CORRECTED

~~The original Module 09 fabricated a plugin system that didn't match the actual API. After initial audit, we incorrectly rewrote it to claim "OpenCode has no plugin/hooks system."~~

**Correction (June 2025):** OpenCode **does** have an extensive plugin ecosystem:

- Local plugins in `.opencode/plugins/` and `~/.config/opencode/plugins/`
- npm plugins via `opencode.json` `"plugin"` array (auto-installed via Bun)
- 30+ event hooks (`tool.execute.before/after`, `session.created`, `session.idle`, `file.edited`, `permission.asked`, etc.)
- TypeScript API: `import type { Plugin } from "@opencode-ai/plugin"`
- Custom tools in `.opencode/tools/` using `tool()` helper from `@opencode-ai/plugin`
- 30+ community plugins (opencode-supermemory, opencode-vibeguard, etc.)

**Module 09 has been rewritten** with accurate plugin documentation based on [opencode.ai/docs/plugins](https://opencode.ai/docs/plugins).

---

## 7. MAJOR: Module 08 (MCP) contains fabricated CLI patterns

The `08-mcp-servers/` module shows commands like:

```bash
List MCP servers              # ❌ not a real command
Connect to MCP server: "filesystem"  # ❌ not how it works
Execute SQL: "SELECT * FROM users"   # ❌ not an opencode command
```

### How MCP actually works in OpenCode

```bash
# CLI
opencode mcp add              # Interactive add
opencode mcp list             # List servers
opencode mcp auth [name]      # OAuth auth

# Configuration in opencode.json
{
  "mcp": {
    "servers": {
      "github": {
        "type": "remote",
        "url": "https://api.githubcopilot.com/mcp/"
      }
    }
  }
}
```

---

## 8. MAJOR: Duplicate Table of Contents in multiple modules

The following modules have 3x duplicate ToC blocks:

- 01-basic-commands/README.md
- 03-search-tools/README.md
- 04-bash-integration/README.md (plus duplicate module content blocks)

---

## 9. MAJOR: Incorrect slash command documentation

### Slash commands that exist in OpenCode TUI

| Command     | Correct | Notes                                                     |
| ----------- | ------- | --------------------------------------------------------- |
| `/help`     | ✅       |                                                           |
| `/undo`     | ✅       | Uses Git internally                                       |
| `/redo`     | ✅       | Uses Git internally                                       |
| `/share`    | ✅       |                                                           |
| `/init`     | ✅       | Creates/updates AGENTS.md                                 |
| `/connect`  | ✅       |                                                           |
| `/compact`  | ✅       | Alias: `/summarize`                                       |
| `/exit`     | ✅       | Aliases: `/quit`, `/q`                                    |
| `/new`      | ✅       | Not mentioned in primer (alias: `/clear`)                 |
| `/sessions` | ✅       | Not mentioned in primer (aliases: `/resume`, `/continue`) |
| `/themes`   | ✅       | Not mentioned                                             |
| `/thinking` | ✅       | Not mentioned                                             |
| `/unshare`  | ✅       | Not mentioned                                             |
| `/editor`   | ✅       | Not mentioned                                             |
| `/models`   | ✅       | Not mentioned                                             |
| `/export`   | ✅       | Not mentioned                                             |
| `/details`  | ✅       | Not mentioned                                             |

### What the primer claims that doesn't exist in OpenCode

- No `/review` command  
- No `/self-assessment` command
- No `/lesson-quiz` command

---

## 10. MINOR: File reference line-range syntax unverified

The primer claims `@file.py:45`, `@file.py:10-30`, `@file.py:30-`, `@file.py:-20` syntax.
OpenCode docs only document basic `@filename` fuzzy search syntax. The line-range syntax like `:10-30` is from Claude Code and may not work in OpenCode. This needs verification.

---

## 11. MINOR: Broken code block in 01-basic-commands/README.md

Around line 199, there's an orphaned code block:

```
# Share conversation (creates shareable link)  
/share

# Initialize project analysis
/init
```

This appears mid-section without proper context, likely leftover from editing.

---

## 12. MINOR: Module 02 (File Operations) is a stub

The module contains only template structure with placeholder content ("Content needs to be filled in").

---

## 13. Backup files need cleanup

Many `.backup.*` and `.tmp*` files exist across modules:

- `README.md.backup.1775852530`
- `README.md.backup.1775852590`
- `README.md.backup.cleanup`
- `README.md.tmp1`, `README.md.tmp2`

**Status:** All 27 backup/temp files deleted.

---

## Fix Status Summary

| Issue                                       | Status                                                                           |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| 1. Structure comparison                     | Documented                                                                       |
| 2. Fabricated CLI commands (~200 instances) | **FIXED** — All modules + examples + QUICK-REFERENCE + TROUBLESHOOTING rewritten |
| 3. Bash quoting error                       | **FIXED** — Module 01                                                            |
| 4. Wrong `opencode` invocations             | **FIXED** — All modules                                                          |
| 5. Module 10 OpenWork accuracy              | **FIXED** — Rewritten with real docs                                             |
| 6. Module 09 fictional plugin system        | **FIXED** — Rewritten with accurate plugin/hooks/custom tools documentation      |
| 7. Module 08 fabricated MCP patterns        | **FIXED** — Rewritten with correct config format + remote/OAuth/per-agent        |
| 8. Duplicate Table of Contents (3x)         | **FIXED** — All modules rewritten with single ToC                                |
| 9. Incorrect slash command docs             | **FIXED** — Module 01                                                            |
| 10. File reference line-range syntax        | Documented (needs verification)                                                  |
| 11. Broken code block in Module 01          | **FIXED** — Module 01                                                            |
| 12. Module 02 stub content                  | **FIXED** — Full content written                                                 |
| 13. Backup file cleanup                     | **FIXED** — All 27 files deleted                                                 |

### Files Fixed

- `README.md` (main) — 15 fabricated commands replaced
- `LEARNING-ROADMAP.md` — 3 exercise sections rewritten
- `CATALOG.md` — Module descriptions, examples, and use-case matrix corrected
- `CONTRIBUTING.md` — Example commands corrected
- `QUICK-REFERENCE.md` — Complete rewrite (removed fake plugin events, fake OpenWork CLI, fake config paths)
- `TROUBLESHOOTING.md` — Complete rewrite (removed fabricated flags, fake paths, fake recovery commands)
- `README-TEMPLATE.md` — Fixed fabricated example commands
- `01-basic-commands/README.md` — 12 fixes (quoting, CLI syntax, duplicate ToC, slash commands)
- `01-basic-commands/examples/quick-start.md` — Complete rewrite (removed fabricated commands)
- `02-file-operations/README.md` — Complete rewrite (was stub)
- `02-file-operations/examples/file-exploration.md` — Complete rewrite (removed fabricated commands)
- `03-search-tools/README.md` — Complete rewrite (removed ~30 fabricated commands)
- `03-search-tools/examples/editing-patterns.md` — Complete rewrite (removed fabricated commands)
- `04-bash-integration/README.md` — Complete rewrite (removed ~60 fabricated commands)
- `05-question-todo/README.md` — Complete rewrite (cleaned up, removed duplicate ToC)
- `06-web-tools/README.md` — Complete rewrite (clarified tools are LLM-internal)
- `07-skills-agents/README.md` — Complete rewrite (accurate agent system: Build/Plan/General/Explore)
- `08-mcp-servers/README.md` — Complete rewrite (real `opencode mcp` CLI)
- `09-advanced-features/README.md` — Complete rewrite (removed fictional plugin system)
- `10-openwork/README.md` — Complete rewrite (accurate OpenWork from openworklabs.com/docs)

---

## Summary: Priority of Fixes

| Priority | Issue                                             | Scope                  | Effort                                 |
| -------- | ------------------------------------------------- | ---------------------- | -------------------------------------- |
| P0       | All `opencode <tool>` CLI commands are fabricated | Every module           | HIGH — requires rewriting all examples |
| P0       | `opencode "prompt"` → `opencode run "prompt"`     | Module 01, Main README | LOW                                    |
| P0       | Echo quoting bug                                  | Module 01              | LOW                                    |
| P0       | Module 10 (OpenWork) is entirely fictional        | Module 10              | HIGH — needs full rewrite              |
| P0       | Module 09 plugin system doesn't exist             | Module 09              | HIGH — needs full rewrite              |
| P1       | Duplicate ToC blocks                              | Modules 01, 03, 04     | LOW                                    |
| P1       | Missing slash commands from docs                  | Module 01              | MEDIUM                                 |
| P1       | Module 08 MCP commands incorrect                  | Module 08              | MEDIUM                                 |
| P2       | Module 02 is a stub                               | Module 02              | HIGH — needs content                   |
| P2       | Backup file cleanup                               | All modules            | LOW                                    |
| P2       | Line-range @ syntax unverified                    | Module 01              | LOW                                    |

---

## Second-Pass Audit (June 2025) — Deep Documentation Crawl

After the initial fix pass, a comprehensive crawl of all 34+ pages at [opencode.ai/docs](https://opencode.ai/docs) revealed additional gaps and errors:

### Errors Found & Fixed

| Issue                                                            | Module          | Fix                                                           |
| ---------------------------------------------------------------- | --------------- | ------------------------------------------------------------- |
| Module 09 FAQ falsely denied plugin system exists                | 09              | Complete rewrite with accurate plugin/hooks/custom tools docs |
| MCP config used wrong format (`"command": "npx", "args": [...]`) | 08              | Fixed to `"command": ["npx", ...]` (array format)             |
| Missing remote MCP servers and OAuth                             | 08              | Added remote servers, OAuth, per-agent MCP management         |
| Wrong config key `"agents"` (should be `"agent"`)                | 07              | Fixed in JSON config examples                                 |
| Missing SKILL.md YAML frontmatter format                         | 07              | Added name/description/license/compatibility/metadata         |
| Missing skill search paths                                       | 07              | Added all 4 search locations                                  |
| Missing custom agents via Markdown                               | 07              | Added `.opencode/agents/` Markdown format                     |
| Missing agent options (temperature, steps, mode, etc.)           | 07              | Added full options table                                      |
| Missing custom commands system                                   | 07              | Added `.opencode/commands/` with template variables           |
| Missing @-mentioning subagents                                   | 07              | Added `@explore`, `@general` syntax                           |
| Missing session sharing feature                                  | 06              | Added Share section with modes                                |
| Missing web interface (`opencode web`)                           | 06              | Added Web Interface section                                   |
| Missing IDE integration                                          | 06              | Added VS Code/Cursor extension section                        |
| Missing granular bash permissions with patterns                  | 04              | Added object syntax with command matching                     |
| Missing per-agent bash permissions                               | 04              | Added per-agent permission overrides                          |
| Wrong env var `EXA_API_KEY` (not needed)                         | QUICK-REFERENCE | Removed                                                       |
| Wrong env var `OPENCODE_LSP=1`                                   | QUICK-REFERENCE | Fixed to `OPENCODE_EXPERIMENTAL_LSP_TOOL=true`                |
| Missing CLI commands (attach, github, acp)                       | QUICK-REFERENCE | Added                                                         |
| Missing plugins/custom tools/commands sections                   | QUICK-REFERENCE | Added                                                         |
| Missing config precedence                                        | QUICK-REFERENCE | Added 7-layer chain                                           |
| Missing granular permissions example                             | QUICK-REFERENCE | Added                                                         |

### Files Updated in Second Pass

- `09-advanced-features/README.md` — Complete rewrite
- `08-mcp-servers/README.md` — Complete rewrite
- `07-skills-agents/README.md` — Complete rewrite
- `06-web-tools/README.md` — Added 3 new sections (Share, Web UI, IDE)
- `04-bash-integration/README.md` — Added granular + per-agent permissions
- `QUICK-REFERENCE.md` — Fixed env vars, added CLI commands, plugins/tools/config sections
- `flaws.md` — Updated to correct false claim about plugins
- `CATALOG.md` — Updated module descriptions
- `LEARNING-ROADMAP.md` — Updated content coverage

### Third Pass: OpenWork Deep Documentation Crawl

Crawled all 19 pages at [openworklabs.com/docs](https://openworklabs.com/docs). Module 10 was reasonable but missing several major features:

| Gap                                                                                         | Status       |
| ------------------------------------------------------------------------------------------- | ------------ |
| Slack integration (xoxb/xapp tokens, Settings → Messaging, manifest template)               | **ADDED**    |
| Task Automation (Settings → Automations, scheduled prompts)                                 | **ADDED**    |
| Browser Automation details (Chrome requirement, DevTools MCP, "don't use existing profile") | **EXPANDED** |
| Importing Skills (3 workflows: share URL, paste to share site, `/skill-creator`)            | **ADDED**    |
| Sharing details (workspace templates vs skill sharing)                                      | **EXPANDED** |
| Custom MCP in desktop (Extensions → Advanced Settings → Add MCP server)                     | **ADDED**    |
| Cloud Skill Hubs workflow (org → team → skill → hub → import)                               | **EXPANDED** |
| Cloud Shared Workspaces (Alpha status, connect options)                                     | **EXPANDED** |
| Cloud LLM Providers (catalog vs custom JSON, Ollama example)                                | **EXPANDED** |
| Cloud RBAC (3 roles, custom roles, teams, practical pattern)                                | **EXPANDED** |
| Team Templates                                                                              | **ADDED**    |
| Custom LLM provider in desktop (workspace opencode.json, Ollama example)                    | **ADDED**    |
| Anthropic manual API key setup (OAuth disabled)                                             | **ADDED**    |
| Unverified "$50/month for 5 seats" pricing claim                                            | **REMOVED**  |
| Unverified "Windows with Enterprise plan" claim                                             | **REMOVED**  |

Files updated:

- `10-openwork/README.md` — Complete rewrite with all 19 doc pages covered
- `CATALOG.md` — Updated Module 10 description
- `QUICK-REFERENCE.md` — Updated OpenWork section with all features

---

*Previously noted:*
README.md at root: Continue to model 1 doesn't work.
