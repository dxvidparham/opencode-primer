# Skills & Agents Lab

> 📌 **This is a hands-on companion to [Module 07: Skills & Agents](../README.md).** Use `~/opencode-practice` for the guided path, then transfer to your own projects.

## Objectives

- Create one project skill in `.opencode/skills/`
- Create one custom command in `.opencode/commands/`
- Create one custom agent in `.opencode/agents/`

## Prerequisites

```bash
cd ~/opencode-practice
opencode
```

## Exercises

### Exercise 1: Create a Skill

Prompt:

```
Create a project skill for secure code review in .opencode/skills/
```

Then test with:

```
Use the new skill to review src/utils.js
```

### Exercise 2: Create a Command

Prompt:

```
Create a custom slash command that summarizes this repo and suggests next steps
```

Run the command and verify output consistency.

### Exercise 3: Create a Role-Specific Agent

Prompt:

```
Create a read-only documentation agent under .opencode/agents/
```

Switch to it and verify it does not attempt edits.

### Exercise 4 (Transfer): Repeat in Personal Project

Port one skill and one command into your personal project and adapt wording.

## Verification Checklist

- [ ] `.opencode/skills/` contains a usable skill
- [ ] `.opencode/commands/` contains a working command
- [ ] `.opencode/agents/` contains a role with expected behavior

## Next Steps

- Return to [Module 07 README](../README.md)
- Continue to [Module 08: MCP Servers](../../08-mcp-servers/README.md)
