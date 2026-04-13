# Question & Todo Workflows

> 📌 **This is a hands-on companion to [Module 05: Question & Todo Tools](../README.md).** Use `~/opencode-practice` for the guided path, then transfer to your own projects.

## Objectives

- Trigger the `question` tool via ambiguous requirements
- Trigger and validate `todowrite` for multi-step work
- Learn to steer execution through clarifying answers

## Prerequisites

```bash
cd ~/opencode-practice
opencode
```

## Exercises

### Exercise 1: Force Clarification

Prompt:

```
Add auth to this project
```

When prompted, answer with a concrete choice (for example: session-based auth + role list).

### Exercise 2: Force Task Planning

Prompt:

```
Refactor utils, improve tests, and update docs
```

Then ask:

```
Show me the todo list before execution
```

### Exercise 3: Mid-Task Replanning

During execution, change scope:

```
Pause and split this into two milestones, then continue milestone 1 only
```

### Exercise 4 (Transfer): Apply in Personal Project

Run the same pattern in your own project and compare task breakdown quality.

## Verification Checklist

- [ ] I can intentionally trigger clarifying questions
- [ ] I can inspect and redirect a generated todo plan
- [ ] I can constrain scope mid-flight without losing context

## Next Steps

- Return to [Module 05 README](../README.md)
- Continue to [Module 06: Web Tools](../../06-web-tools/README.md)
