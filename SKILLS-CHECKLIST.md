# ✅ OpenCode Skills Proficiency Checklist

Use this checklist to track your progress through the primer. Each item maps back to a specific module so you can revisit any gaps. The list is **exhaustive** — completing every item is not required, but it gives you a clear picture of what you've mastered.

---

## Module 01 — Basic Commands & TUI

- [ ] Install OpenCode and verify with `opencode --version` (M01)
- [ ] Launch the TUI with `opencode` in a project directory (M01)
- [ ] Send a prompt and read the LLM response (M01)
- [ ] Switch between Plan and Build agents with Tab (M01)
- [ ] Use `/clear`, `/compact`, `/model`, and `/help` slash commands (M01)
- [ ] Reference a file with `@filename` in a prompt (M01)
- [ ] Run a one-shot command with `opencode run "<prompt>"` (M01)
- [ ] Create a minimal `opencode.json` configuration file (M01)

## Module 02 — File Operations

- [ ] Ask the LLM to read a file and explain its contents (M02)
- [ ] Ask the LLM to edit a specific function in an existing file (M02)
- [ ] Ask the LLM to create a new file from scratch (M02)
- [ ] Use `@file` to give the LLM targeted context for edits (M02)
- [ ] Undo a file change with `/undo` (M02)
- [ ] Run a non-interactive file edit via `opencode run` (M02)

## Module 03 — Search Tools

- [ ] Ask the LLM to find files by name pattern (triggers `glob`) (M03)
- [ ] Ask the LLM to search file contents by regex (triggers `grep`) (M03)
- [ ] Ask the LLM to do a semantic code search (triggers `codesearch`) (M03)
- [ ] Ask the LLM to list directory contents (triggers `list`) (M03)
- [ ] Chain a search result directly into an editing workflow (M03)

## Module 04 — Bash Integration

- [ ] Ask the LLM to run a shell command (triggers `bash`) (M04)
- [ ] Configure `bash` permission to `"ask"` in `opencode.json` (M04)
- [ ] Create a `bash` allowlist for specific commands (M04)
- [ ] Use the `!` prefix to run a command directly in the TUI (M04)
- [ ] Ask the LLM to run tests and fix failures in a single conversation (M04)

## Module 05 — Question & Todo Tools

- [ ] Observe the LLM using the `question` tool to ask for clarification (M05)
- [ ] Ask the LLM to break a task into tracked steps (triggers `todowrite`) (M05)
- [ ] Provide enough upfront context to reduce unnecessary questions (M05)

## Module 06 — Web Tools

- [ ] Configure the `webfetch` permission in `opencode.json` (M06)
- [ ] Ask the LLM to fetch and summarize a URL (M06)
- [ ] Enable Exa web search with `OPENCODE_ENABLE_EXA=1` (M06)
- [ ] Share a session via `/share` (M06)
- [ ] Understand how IDE integrations (VS Code, Cursor) connect to OpenCode (M06)

## Module 07 — Skills & Agents

- [ ] Describe the role of each built-in agent (Plan, Build, Explore) (M07)
- [ ] Create a skill file at `.opencode/skills/<name>/SKILL.md` (M07)
- [ ] Write valid YAML frontmatter with `name` and `description` (M07)
- [ ] Define a custom agent with restricted tool access (M07)
- [ ] Create a custom slash command in `.opencode/commands/` (M07)

## Module 08 — MCP Servers

- [ ] Explain what MCP (Model Context Protocol) is (M08)
- [ ] Configure a local (stdio) MCP server in `opencode.json` (M08)
- [ ] Connect a remote MCP server with SSE transport (M08)
- [ ] Restrict an MCP server to a specific agent using the `tools` map (M08)
- [ ] Set tool-level permissions for MCP tools (M08)

## Module 09 — Advanced Features

- [ ] Register a custom tool plugin in `opencode.json` (M09)
- [ ] Configure granular permissions (allow/ask/deny) for specific tools (M09)
- [ ] Set up a formatter to auto-format files after LLM edits (M09)
- [ ] Use `/undo` and `/redo` to navigate session checkpoints (M09)
- [ ] Configure environment variables to customize OpenCode behavior (M09)

## Module 10 — OpenWork Integration

- [ ] Install and launch the OpenWork desktop app (M10)
- [ ] Connect an LLM provider (Anthropic, OpenAI, etc.) in the desktop app (M10)
- [ ] Deploy a self-hosted instance with `openwork start` (M10)
- [ ] Connect the desktop app to a remote instance (M10)
- [ ] Import a shared skill from a `share.openworklabs.com` link (M10)
- [ ] Set up a Slack or Telegram bot via `opencode-router` (M10)
- [ ] Enable browser automation via Chrome DevTools MCP (M10)

---

## Progress Summary

Count the boxes you've checked above to gauge your overall proficiency:

| Checked | Level                                                                     |
| ------- | ------------------------------------------------------------------------- |
| 0–15    | **Beginner** — Focus on Modules 01–04                                     |
| 16–35   | **Intermediate** — You're productive; explore Modules 05–08               |
| 36–50   | **Advanced** — You know the tool well; tackle Modules 09–10               |
| 51+     | **Expert** — Consider contributing to the primer or building custom tools |

---

[⬅️ Back to Main README](README.md) • [📚 Learning Roadmap](LEARNING-ROADMAP.md) • [⚡ Quick Reference](QUICK-REFERENCE.md)
