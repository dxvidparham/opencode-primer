# Bash Workflows

> 📌 **This is a hands-on companion to [Module 04: Bash Integration](../README.md).** Use `~/opencode-practice` for the guided path, then transfer to your own projects.

## Objectives

- Use natural-language prompts that trigger the internal `bash` tool
- Practice safe command execution patterns
- Combine command output with follow-up edits and summaries

## Prerequisites

```bash
cd ~/opencode-practice
opencode
```

## Exercises

### Exercise 1: Verify Environment in the Practice Project

In the TUI, run:

```
Show me pwd, Node.js version, and git status
```

Then ask:

```
Explain what each command output means for this project
```

### Exercise 2: Install + Validate Workflow

In the TUI, run:

```
Install dependencies and report whether anything failed
```

Then ask:

```
If install failed, suggest the smallest next debugging step
```

### Exercise 3: Command + Code Loop

In the TUI, run:

```
Run the tests, summarize failures, and propose a minimal fix plan
```

Approve only the plan first, then ask for implementation.

### Exercise 4 (Transfer): Repeat on Your Own Project

Open another project and repeat Exercises 1-3 with project-specific commands.

## Verification Checklist

- [ ] I can trigger `bash` with natural language (without raw CLI syntax knowledge)
- [ ] I can read command output before approving further changes
- [ ] I can run the same workflow on a personal project

## Next Steps

- Return to [Module 04 README](../README.md)
- Continue to [Module 05: Question & Todo Tools](../../05-question-todo/README.md)
