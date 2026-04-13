# Web Tool Workflows

> 📌 **This is a hands-on companion to [Module 06: Web Tools](../README.md).** Use `~/opencode-practice` for the guided path, then transfer to your own projects.

## Objectives

- Use `webfetch` to gather docs and summarize them
- Use `websearch` (when enabled) to compare external sources
- Turn web research into concrete local actions

## Prerequisites

```bash
cd ~/opencode-practice
opencode
```

If needed, enable web search:

```bash
OPENCODE_ENABLE_EXA=1 opencode
```

## Exercises

### Exercise 1: Fetch and Summarize Official Docs

Prompt:

```
Fetch https://opencode.ai/docs and summarize the top 5 things a new user should configure
```

### Exercise 2: Compare Guidance from Multiple Sources

Prompt:

```
Search for best practices for MCP security and compare 3 sources
```

Then ask:

```
Turn that into a checklist for this repository
```

### Exercise 3: Research to Action

Prompt:

```
Based on fetched docs, propose one small config improvement for this workspace and explain risk
```

### Exercise 4 (Transfer): Personal Project Research Loop

Repeat Exercises 1-3 for your own stack documentation.

## Verification Checklist

- [ ] I can fetch and summarize authoritative sources
- [ ] I can compare multiple sources critically
- [ ] I can turn research into a local, actionable change request

## Next Steps

- Return to [Module 06 README](../README.md)
- Continue to [Module 07: Skills & Agents](../../07-skills-agents/README.md)
