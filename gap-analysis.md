# Gap Analysis: learn-claude-code → opencode-primer

> Cross-referencing [shareai-lab/learn-claude-code](https://github.com/shareai-lab/learn-claude-code) (19 chapters, 22 docs) against opencode-primer (10 modules, 8 top-level files), validated against [opencode.ai/docs](https://opencode.ai/docs).

---

## Methodology

1. **Source study** — Read all 22 English docs from learn-claude-code (s00–s19 + glossary + teaching-scope).
2. **Target inventory** — Audited every opencode-primer module README and top-level reference file.
3. **Validation** — Every candidate concept was checked against OpenCode's actual documentation (permissions, plugins, agents, config, CLI, GitHub, MCP, skills, commands, rules). Only concepts verifiably supported by OpenCode are proposed.
4. **Filtering** — Concepts that only describe internal agent-harness architecture (loop implementation, dispatch maps, threading models) were excluded. Only user-facing knowledge survived.

## Validation Rules

| Rule | Rationale |
| --- | --- |
| Must map to an OpenCode config key, CLI flag, TUI command, or documented behavior | Prevents speculative content |
| Must teach something a **user** can observe, configure, or do | Excludes internal architecture |
| Must not duplicate content already present in the primer | Prevents bloat |
| Source concept from learn-claude-code must be clearly identified | Ensures traceability |

---

## Findings

### 1. Doom Loop Detection & Recovery

| | |
| --- | --- |
| **Source** | learn-claude-code s07 (Permission System), s11 (Error Recovery) |
| **Affected files** | `04-bash-integration/README.md`, `09-advanced-features/README.md`, `TROUBLESHOOTING.md`, `QUICK-REFERENCE.md` |
| **OpenCode validation** | `doom_loop` permission: triggers when the same tool call repeats 3× with identical input. Default: `"ask"`. Configurable: `"allow"`, `"ask"`, `"deny"`. Documented at [opencode.ai/docs/permissions](https://opencode.ai/docs/permissions). |

**Gap:** The `doom_loop` permission appears in the M09 Available Permissions table but is never explained as a concept. No module teaches users what a doom loop is, how to recognize one, or how to recover. TROUBLESHOOTING.md has no doom loop entry.

**Proposed enrichment:**

- **M04**: Add a callout after the "Command Safety" section explaining doom loop detection for bash specifically.
- **M09**: Expand the `doom_loop` row in the Available Permissions table into a worked example.
- **TROUBLESHOOTING.md**: Add a "Doom Loop" troubleshooting entry with symptoms, detection, and recovery steps.
- **QUICK-REFERENCE.md**: Add `doom_loop` to the Granular Permissions Example.

---

### 2. Context Compaction Mental Model

| | |
| --- | --- |
| **Source** | learn-claude-code s06 (Context Compact) |
| **Affected files** | `09-advanced-features/README.md`, `TROUBLESHOOTING.md` |
| **OpenCode validation** | `compaction.auto` (default `true`), `compaction.prune` (default `true`), `compaction.reserved` (default `10000`). Manual: `/compact`. Plugin hook: `experimental.session.compacting` (can inject context or replace the compaction prompt). Env var: `OPENCODE_DISABLE_AUTOCOMPACT`. Documented at [opencode.ai/docs/config](https://opencode.ai/docs/config) and [opencode.ai/docs/plugins](https://opencode.ai/docs/plugins). |

**Gap:** M09 documents the config options and what compaction preserves/summarizes, but doesn't teach:

- How to **recognize** when you need compaction (symptoms: slower responses, LLM repeating itself, forgetting earlier context)
- **Proactive strategies** (compact after each major milestone, use subagents to keep parent context lean)
- How the `session.compacting` plugin hook lets you inject critical context that survives compaction

**Proposed enrichment:**

- **M09**: Add a "When and How to Compact" subsection with recognition heuristics and proactive strategies.
- **TROUBLESHOOTING.md**: Expand the "Context growth" Known Limitations entry into a full troubleshooting section.

---

### 3. Subagent Context Isolation

| | |
| --- | --- |
| **Source** | learn-claude-code s04 (Subagent) |
| **Affected files** | `07-skills-agents/README.md`, `QUICK-REFERENCE.md` |
| **OpenCode validation** | Subagents create child sessions with independent context. Step limits via `agent.<name>.steps`. Task permissions via `permission.task` with glob patterns. Navigation: Leader+Down → Right/Left → Up. Documented at [opencode.ai/docs/agents](https://opencode.ai/docs/agents). |

**Gap:** M07 describes what subagents do and how to invoke them, but never explains the key mental model: subagents operate in their **own context window**. The parent sends a task, the subagent works in isolation, and only the result flows back. This "disposable scratch pad" concept is the most important architectural detail for deciding when to use a subagent.

**Proposed enrichment:**

- **M07**: Add a "How Subagent Context Works" section with a diagram: parent context → task handoff → subagent context → result return.
- **M07**: Add guidance on when to use `@explore` vs `@general` vs keeping work in the parent.
- **QUICK-REFERENCE.md**: Add a "Subagent Invocation" section with `@explore`, `@general`, thoroughness, and navigation keys.

---

### 4. Error Recovery Playbook

| | |
| --- | --- |
| **Source** | learn-claude-code s11 (Error Recovery) |
| **Affected files** | `09-advanced-features/README.md`, `TROUBLESHOOTING.md` |
| **OpenCode validation** | `/undo` and `/redo` for file changes. `/compact` for context overflow. `/new` for fresh start. `doom_loop` permission for repeated failures. `agent.<name>.steps` forces summarization at limit. Checkpoint system tracks file changes. Documented across [opencode.ai/docs/permissions](https://opencode.ai/docs/permissions), [opencode.ai/docs/agents](https://opencode.ai/docs/agents). |

**Gap:** Individual recovery tools exist across the primer (undo/redo in M09, /compact in M09, /new in TUI section) but there's no unified escalation strategy. When something goes wrong, users have no systematic playbook.

**Proposed enrichment:**

- **TROUBLESHOOTING.md**: Add an "Error Recovery Playbook" section with a prioritized escalation ladder.
- **M09**: Add a cross-reference to the playbook from the Checkpoints section.

---

### 5. Session Planning Strategies

| | |
| --- | --- |
| **Source** | learn-claude-code s03 (TodoWrite / Session Planning) |
| **Affected files** | `05-question-todo/README.md` |
| **OpenCode validation** | `todowrite` tool creates structured task lists. Plan agent provides read-only analysis mode. Documented at [opencode.ai/docs/tools](https://opencode.ai/docs/tools) and [opencode.ai/docs/agents](https://opencode.ai/docs/agents). |

**Gap:** M05 shows the todowrite tool in action but never teaches the front-loading strategy: start a session by stating intent and asking the LLM to create a plan **before** writing any code. The module is reactive (showing what happens when the LLM decides to use the tool) rather than teaching users to proactively structure sessions.

**Proposed enrichment:**

- **M05**: Add a "Session Planning" pattern showing how to front-load sessions with intent. Include re-prompting templates for pulling the LLM back on track ("Check your todo list — what's still pending?").

---

### 6. MCP Security Model

| | |
| --- | --- |
| **Source** | learn-claude-code s19 (MCP & Plugin) |
| **Affected files** | `08-mcp-servers/README.md` |
| **OpenCode validation** | MCP tools pass through the same permission system as built-in tools. Glob patterns: `mcp_*` matches all MCP tools. Local servers execute as child processes with full system access. Documented at [opencode.ai/docs/permissions](https://opencode.ai/docs/permissions) and [opencode.ai/docs/mcp-servers](https://opencode.ai/docs/mcp-servers). |

**Gap:** M08 thoroughly explains how to set up and configure MCP servers but never addresses the security implications: local MCP servers can execute arbitrary code, remote servers receive your data over the network, and a malicious server could exfiltrate code or secrets.

**Proposed enrichment:**

- **M08**: Add a "Security Considerations" section with trust guidance: only install trusted servers, audit npm packages, use read-only permissions for unknown servers, store secrets in env vars not config files, apply permission glob patterns.

---

### 7. GitHub Actions & Autonomous Execution

| | |
| --- | --- |
| **Source** | learn-claude-code s12–s14 (Task System, Background Tasks, Cron), s17 (Autonomous Agents) |
| **Affected files** | `10-openwork/README.md`, `QUICK-REFERENCE.md` |
| **OpenCode validation** | `opencode github install` sets up a GitHub App + workflow. `opencode github run` processes events in CI. Supported events: `issue_comment`, `pull_request_review_comment`, `issues`, `pull_request`, `schedule`, `workflow_dispatch`. `opencode serve` starts a headless API server (port configurable, auth via `OPENCODE_SERVER_PASSWORD`). `opencode run` executes one-shot prompts non-interactively. Documented at [opencode.ai/docs/github](https://opencode.ai/docs/github), [opencode.ai/docs/cli](https://opencode.ai/docs/cli). |

**Gap:** M10 covers OpenWork (desktop app, self-hosted orchestrator, messaging) but entirely omits OpenCode's native GitHub Actions integration and headless execution modes. `opencode github install`, `opencode github run`, `opencode serve`, and `opencode run --attach` are all undocumented in the primer.

**Proposed enrichment:**

- **M10**: Add a "GitHub Actions Integration" section covering installation, supported events, scheduled workflows, and headless execution with `opencode serve` and `opencode run`.
- **QUICK-REFERENCE.md**: Add `opencode serve` and `opencode github` to the CLI commands table or OpenWork section.

---

### 8. Plugin Event Payloads

| | |
| --- | --- |
| **Source** | learn-claude-code s08 (Hook System) |
| **Affected files** | `09-advanced-features/README.md` |
| **OpenCode validation** | 25+ events across 12 categories. `tool.execute.before` receives `input.tool` and `input.args`, can return `{ deny: true, reason: "..." }` or nothing (allow). `tool.execute.after` receives `input` and `output`. `experimental.session.compacting` hook: `output.context.push(...)` injects context, `output.prompt = "..."` replaces the compaction prompt. Documented at [opencode.ai/docs/plugins](https://opencode.ai/docs/plugins). |

**Gap:** M09 lists 30+ events in a table but only shows payloads for `tool.execute.before` (in the .env guard example) and `session.idle` (in the notification example). The compaction hook, permission events, and file events are listed without payload or use-case guidance.

**Proposed enrichment:**

- **M09**: Add payload examples for the 5 most commonly used event hooks: `tool.execute.before`, `tool.execute.after`, `session.compacted`/`compacting`, `file.edited`, `todo.updated`.

---

### 9. Unified Tool Namespace

| | |
| --- | --- |
| **Source** | learn-claude-code s02 (Tool Use), s19 (MCP & Plugin) |
| **Affected files** | `08-mcp-servers/README.md` |
| **OpenCode validation** | MCP tools appear with prefix `mcp_<servername>_<toolname>`. Built-in and MCP tools coexist in a single namespace. The LLM sees one flat list and picks the right tool. Documented at [opencode.ai/docs/mcp-servers](https://opencode.ai/docs/mcp-servers). |

**Gap:** M08 documents the naming convention but never explains the key insight: from the LLM's perspective, built-in tools and MCP tools appear in one unified list. The LLM doesn't "know" it's calling an MCP tool vs. a built-in tool — it just picks the best tool for the job.

**Proposed enrichment:**

- **M08**: Add a note in the "How MCP Works in OpenCode" section explaining the unified namespace from the LLM's perspective.

---

### 10. Skill Token Efficiency

| | |
| --- | --- |
| **Source** | learn-claude-code s05 (Skill Loading) |
| **Affected files** | `07-skills-agents/README.md` |
| **OpenCode validation** | Skills use two-layer loading: names + descriptions are advertised cheaply in the system prompt, full bodies loaded on demand via the `skill` tool. Documented at [opencode.ai/docs/skills](https://opencode.ai/docs/skills). |

**Gap:** M07 explains how skills are loaded (the Mermaid diagram shows the flow) but never explains **why** on-demand loading matters: listing 20 skill names costs ~100 tokens each, while loading all 20 bodies upfront would consume ~2000 tokens each — exhausting context before any real work begins.

**Proposed enrichment:**

- **M07**: Add a brief "Why On-Demand Loading" note in the "How Skills Are Loaded" section explaining the token efficiency rationale.

---

### 11. Bash Output Truncation & Timeout

| | |
| --- | --- |
| **Source** | learn-claude-code s02 (Tool Use) |
| **Affected files** | `04-bash-integration/README.md` |
| **OpenCode validation** | Bash output is truncated before being sent to the LLM (large outputs are cut to prevent context overflow). Timeout configurable via `OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS`. Documented at [opencode.ai/docs/config](https://opencode.ai/docs/config) (environment variables section). |

**Gap:** M04 mentions that "processes that produce no output for an extended period may be terminated" in Troubleshooting but doesn't explain output truncation or the timeout env var.

**Proposed enrichment:**

- **M04**: Add a callout about output truncation (verbose flags like `-v` can be counterproductive) and the timeout env var.

---

### 12. Subagent Invocation in Quick Reference

| | |
| --- | --- |
| **Source** | learn-claude-code s04 (Subagent) |
| **Affected files** | `QUICK-REFERENCE.md` |
| **OpenCode validation** | `@explore <prompt>`, `@general <prompt>`. Explore accepts thoroughness: `"quick"`, `"medium"`, `"very thorough"`. Session navigation: Leader+Down, Right/Left, Up. Documented at [opencode.ai/docs/agents](https://opencode.ai/docs/agents). |

**Gap:** The Agents section of QUICK-REFERENCE.md lists agent types and Tab/Shift+Tab shortcuts but has no mention of `@explore`/`@general` invocation syntax, thoroughness, or session navigation keys.

**Proposed enrichment:**

- **QUICK-REFERENCE.md**: Add subagent invocation syntax, thoroughness options, and navigation keys to the Agents section.

---

## Excluded Concepts

These learn-claude-code concepts were evaluated and deliberately **not** proposed:

| Concept | Source | Reason for exclusion |
| --- | --- | --- |
| Agent loop implementation | s01 | Internal architecture — users don't build loops, they use the TUI |
| Dispatch map / tool routing | s02 | Internal routing mechanism — invisible to users |
| TodoManager / nag injection internals | s03 | Implementation detail — users see todowrite results, not the manager class |
| SkillLoader class | s05 | Internal class — users write SKILL.md files, OpenCode handles loading |
| PermissionManager 4-stage pipeline | s07 | Internal pipeline — users see allow/ask/deny results, not the chain |
| Background threading model | s13 | Internal — users see subagents running in parallel, not daemon threads |
| JSONL message bus / team roster | s15 | Internal — OpenCode doesn't expose inter-agent messaging |
| Team protocols / request_id FSM | s16 | **Not supported** — OpenCode has no inter-agent coordination protocol |
| Auto-claim / idle polling | s17 | Internal mechanics — user sees autonomous execution, not polling |
| Worktree auto-creation for tasks | s18 | **Not fully supported** — OpenCode is worktree-aware but doesn't auto-create per task |
| Cron scheduler internals | s14 | Internal — OpenCode's scheduling is via GitHub Actions, not a built-in cron loop |

---

## Summary Matrix

| # | Gap | Files | Effort | Priority |
| --- | --- | --- | --- | --- |
| 1 | Doom Loop Detection & Recovery | M04, M09, TROUBLESHOOTING, QUICK-REF | Medium | High |
| 2 | Context Compaction Mental Model | M09, TROUBLESHOOTING | Medium | High |
| 3 | Subagent Context Isolation | M07, QUICK-REF | Medium | High |
| 4 | Error Recovery Playbook | M09, TROUBLESHOOTING | Medium | High |
| 5 | Session Planning Strategies | M05 | Small | Medium |
| 6 | MCP Security Model | M08 | Small | High |
| 7 | GitHub Actions & Autonomous Execution | M10, QUICK-REF | Large | Medium |
| 8 | Plugin Event Payloads | M09 | Medium | Medium |
| 9 | Unified Tool Namespace | M08 | Small | Low |
| 10 | Skill Token Efficiency | M07 | Small | Low |
| 11 | Bash Output Truncation & Timeout | M04 | Small | Medium |
| 12 | Subagent Invocation in Quick Reference | QUICK-REF | Small | Medium |
