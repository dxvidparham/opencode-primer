# 📚 OpenCode Primer Learning Roadmap

**New to opencode?** This guide helps you master opencode's AI coding agent capabilities at your own pace. Whether you're a complete beginner or an experienced developer, start with the self-assessment quiz below to find the right path for you.

---

## 🧭 Find Your Level

Not everyone starts from the same place. Take this quick self-assessment to find the right entry point.

**Answer these questions honestly:**

- I can run opencode and use the TUI interface
- I have used file tools (read, edit, write) to work with code
- I have used search tools (glob, grep, list) to find files and content
- I have used bash tool to execute shell commands
- I have used question and todowrite tools for interactive workflows
- I have used web tools (webfetch, websearch) for research
- I have configured skills or custom agents
- I have integrated MCP servers for external tool access

**Your Level:**

| Checks | Level | Start At | Time to Complete |
|--------|-------|----------|------------------|
| 0-2 | **Level 1: Beginner** — Getting Started | [Milestone 1A](#milestone-1a-basic-commands--file-reading) | ~2 hours |
| 3-5 | **Level 2: Intermediate** — Building Workflows | [Milestone 2A](#milestone-2a-file-operations--search-tools) | ~3 hours |
| 6-8 | **Level 3: Advanced** — Power User & Automation | [Milestone 3A](#milestone-3a-automation--workflows) | ~4 hours |

> **Tip**: If you're unsure, start one level lower. It's better to review familiar material quickly than to miss foundational concepts.

---

## 🎯 Learning Philosophy

The folders in this repository are numbered in **recommended learning order** based on three key principles:

1. **Dependencies** - Foundational concepts come first
2. **Complexity** - Easier features before advanced ones
3. **Frequency of Use** - Most common features taught early

This approach ensures you build a solid foundation while gaining immediate productivity benefits.

---

## 🗺️ Your Learning Path

```mermaid
graph TD
    Q["🧭 Self-Assessment Quiz<br/>Find Your Level"] --> L1
    Q --> L2
    Q --> L3

    subgraph L1["🟢 Level 1: Beginner — Getting Started"]
        direction LR
        A["1A: Basic Commands & TUI<br/>Core Interface"] --> B["1B: File Operations<br/>Code Editing"]
    end

    subgraph L2["🔵 Level 2: Intermediate — Tool Mastery"]
        direction LR
        C["2A: Search Tools<br/>Code Navigation"] --> D["2B: Bash & Interactive Tools<br/>Workflow Integration"]
    end

    subgraph L3["🔴 Level 3: Advanced — Extending OpenCode"]
        direction LR
        E["3A: Skills & MCP Servers<br/>Custom Capabilities"] --> F["3B: Advanced Integration<br/>OpenWork & Production"]
    end

    L1 --> L2
    L2 --> L3

    style Q fill:#6A1B9A,color:#fff,stroke:#9C27B0,stroke-width:2px
    style A fill:#2E7D32,color:#fff
    style B fill:#2E7D32,color:#fff
    style C fill:#1565C0,color:#fff
    style D fill:#F57C00,color:#fff
    style E fill:#C62828,color:#fff
    style F fill:#B71C1C,color:#fff
```

**Color Legend:**

- 💜 Purple: Self-Assessment Quiz
- 🟢 Green: Level 1 — Beginner path
- 🔵 Blue / 🟡 Gold: Level 2 — Intermediate path
- 🔴 Red: Level 3 — Advanced path

---

## 📊 Complete Roadmap Table

| Step | Module | Complexity | Time | Level | Tools Covered | Why Learn This | Key Benefits |
|------|--------|------------|------|-------|---------------|----------------|--------------|
| **1** | [Basic Commands & TUI](01-basic-commands) | ⭐ Beginner | 30 min | Level 1 | TUI interface, `/` commands | Core opencode usage | Understand interface fundamentals |
| **2** | [File Operations](02-file-operations) | ⭐ Beginner+ | 45 min | Level 1 | `read`, `edit`, `write` | Work with code files | Read, edit, and create files |
| **3** | [Search Tools](03-search-tools) | ⭐⭐ Intermediate | 45 min | Level 2 | `glob`, `grep`, `list` | Navigate codebases | Find files and content efficiently |
| **4** | [Bash Integration](04-bash-integration) | ⭐⭐ Intermediate | 1 hour | Level 2 | `bash` | System operations | Execute shell commands |
| **5** | [Question & Todo Tools](05-question-todo) | ⭐⭐ Intermediate | 45 min | Level 2 | `question`, `todowrite` | Interactive workflows | Gather input and track tasks |
| **6** | [Web Tools](06-web-tools) | ⭐⭐ Intermediate | 45 min | Level 2 | `webfetch`, `websearch` | Research capabilities | Fetch web content and search online |
| **7** | [Skills & Agents](07-skills-agents) | ⭐⭐⭐ Intermediate+ | 1 hour | Level 3 | `skill`, agent configuration | Custom capabilities | Create reusable skills and agents |
| **8** | [MCP Servers](08-mcp-servers) | ⭐⭐⭐ Intermediate+ | 1 hour | Level 3 | MCP integration | External tool access | Connect to databases, APIs, services |
| **9** | [Advanced Features](09-advanced-features) | ⭐⭐⭐⭐ Advanced | 1.5 hours | Level 3 | Permissions, formatters, LSP | Power user configuration | Fine-tune opencode behavior |
| **10** | [OpenWork Integration](10-openwork) | ⭐⭐⭐⭐ Advanced | 1 hour | Level 3 | OpenWork platform | Team collaboration | Remote workspaces and shared agents |

**Total Learning Time**: ~8-10 hours (or jump to your level and save time)

---

## 🟢 Level 1: Beginner — Getting Started

**For**: Users with 0-2 quiz checks  
**Time**: ~1.5 hours  
**Focus**: TUI interface and basic file operations  
**Outcome**: Comfortable using opencode for daily coding tasks

### Milestone 1A: Basic Commands & TUI

**Topics**: TUI Interface + Basic Commands  
**Time**: 30 min  
**Complexity**: ⭐ Beginner  
**Goal**: Understand opencode's interface and core workflow

#### What You'll Achieve

✅ Start and navigate the TUI interface  
✅ Use slash commands (`/help`, `/undo`, `/redo`)  
✅ Understand the conversation flow  
✅ Use file references with `@` symbol

#### Hands-on Exercises

```bash
# Exercise 1: Start opencode TUI
opencode

# Exercise 2: Get help
/help

# Exercise 3: Reference files in conversation
Look at the authentication code in @src/auth.js

# Exercise 4: Use undo/redo
/undo
/redo
```

#### Success Criteria

- Can start and exit opencode TUI
- Know how to get help within the interface
- Understand how to reference files with `@`
- Can undo and redo changes

#### Next Steps

Once comfortable, read:
- [01-basic-commands/README.md](01-basic-commands/README.md)

---

### Milestone 1B: File Operations

**Topics**: File Reading and Editing  
**Time**: 1 hour  
**Complexity**: ⭐ Beginner+  
**Goal**: Learn to read, edit, and create files using opencode tools

#### What You'll Achieve

✅ Read files and directories with the `read` tool  
✅ Edit existing files with exact string replacement  
✅ Create new files with the `write` tool  
✅ Understand opencode's file operation patterns

#### Hands-on Exercises

```bash
# Exercise 1: Read files and directories
opencode read .
opencode read package.json
opencode read src/ --limit=20

# Exercise 2: Edit a file
opencode edit config.json --old='"port": 3000' --new='"port": 8080'

# Exercise 3: Batch edit with replaceAll
opencode edit src/*.js --old="var " --new="const " --replaceAll

# Exercise 4: Create a new file
opencode write new-component.jsx --content='import React from "react";\n\nexport default function Component() {\n  return <div>Hello</div>;\n}'
```

#### Success Criteria

- Can read project structure and file contents
- Successfully edit configuration and code files
- Create new files with proper content
- Understand when to use `read`, `edit`, and `write` tools

#### Next Steps

- Read: [02-file-operations/README.md](02-file-operations/README.md)
- **Ready for Level 2!** Proceed to [Milestone 2A](#milestone-2a-search-tools)

---

## 🔵 Level 2: Intermediate — Tool Mastery

**For**: Users with 3-5 quiz checks  
**Time**: ~3.5 hours  
**Focus**: Search, system operations, and interactive tools  
**Outcome**: Efficient codebase navigation and workflow integration

### Prerequisites Check

Before starting Level 2, make sure you're comfortable with these Level 1 concepts:

- Can use opencode TUI and basic commands ([01-basic-commands/](01-basic-commands))
- Can read, edit, and write files ([02-file-operations/](02-file-operations))

> **Gaps?** Review the linked tutorials above before continuing.

---

### Milestone 2A: Search Tools

**Topics**: Search Tools (glob, grep, list)  
**Time**: 45 min  
**Complexity**: ⭐⭐ Intermediate  
**Goal**: Efficiently navigate and search codebases

#### What You'll Achieve

✅ Find files by pattern with `glob`  
✅ Search file contents with `grep`  
✅ List directory contents with `list`  
✅ Combine search operations for complex queries

#### Hands-on Exercises

```bash
# Exercise 1: Find files by pattern
opencode glob "**/*.js"
opencode glob "src/**/*.{ts,tsx}"
opencode glob "*.{md,mdx}"

# Exercise 2: Search file contents
opencode grep "TODO|FIXME"
opencode grep "function " --include="*.js"
opencode grep "error" --path="src/utils/"

# Exercise 3: List directory contents
opencode list "."
opencode list "src/" --include="*.js"
opencode list "tests/" --exclude="*.snap"

# Exercise 4: Combine search operations
# Find TypeScript files containing interfaces
for file in $(opencode glob "**/*.ts"); do
  opencode grep "interface " --path="$file"
done
```

#### Success Criteria

- Can find files using glob patterns
- Can search file contents with grep
- Understand the difference between `glob`, `grep`, and `list`
- Can combine tools for complex queries

#### Next Steps

- Create custom search patterns for your projects
- Read: [03-search-tools/README.md](03-search-tools/README.md)

---

### Milestone 2B: Bash & Interactive Tools

**Topics**: Bash, Question, and Todo Tools  
**Time**: 2 hours  
**Complexity**: ⭐⭐ Intermediate  
**Goal**: Execute system operations and create interactive workflows

#### What You'll Achieve

✅ Run shell commands with `bash` tool  
✅ Ask users questions with `question` tool  
✅ Track tasks with `todowrite` tool  
✅ Create interactive automation workflows

#### Hands-on Exercises

```bash
# Exercise 1: Execute shell commands
opencode bash "npm install"
opencode bash "git status"
opencode bash "docker-compose up -d"

# Exercise 2: Ask user questions
# (This would be used in a conversation with opencode)
# opencode will use the question tool to ask:
# "Which environment should we deploy to: development or production?"

# Exercise 3: Track tasks with todo lists
# opencode will use todowrite to create task lists like:
# - [ ] Set up database connection
# - [ ] Implement authentication
# - [ ] Write tests

# Exercise 4: Combined workflow example
# 1. Check system status
opencode bash "node --version && npm --version"
# 2. Ask for deployment confirmation
# (opencode would use question tool here)
# 3. Execute deployment
opencode bash "npm run build && npm run deploy"
# 4. Track deployment tasks
# (opencode would use todowrite to update task list)
```

#### Success Criteria

- Can execute shell commands for common development tasks
- Understand how opencode uses `question` for interactive workflows
- Know how `todowrite` helps track complex tasks
- Can combine multiple tools in workflows

#### Next Steps

- Create interactive scripts for your deployment process
- Read: [04-bash-integration/README.md](04-bash-integration/README.md)
- Read: [05-question-todo/README.md](05-question-todo/README.md)
- **Ready for Level 3!** Proceed to [Milestone 3A](#milestone-3a-skills--mcp-servers)

---

## 🔴 Level 3: Advanced — Extending OpenCode

**For**: Users with \(|$\|\|>5 quiz checks  
**Time**: ~4 hours  
**Focus**: Custom skills, MCP integration, and advanced configuration  
**Outcome**: Power user who can extend opencode with custom capabilities

### Prerequisites Check

Before starting Level 3, make sure you're comfortable with these Level 2 concepts:

- Can use search tools effectively ([03-search-tools/](03-search-tools))
- Can execute bash commands and use interactive tools ([04-bash-integration/](04-bash-integration), [05-question-todo/](05-question-todo))

> **Gaps?** Review the linked tutorials above before continuing.

---

### Milestone 3A: Skills & MCP Servers

**Topics**: Skills, Agents, and MCP Integration  
**Time**: engages hours  
**Complexity**: ⭐⭐⭐ Intermediate+  
**Goal**: Extend opencode with custom capabilities and external tools

#### What You'll Achieve

✅ Create and use skills with `skill` tool  
✅ Configure custom agents  
✅ Integrate MCP servers for external tool access  
✅ Use web tools for research (`webfetch`, `websearch`)

#### Hands-on Exercises

```bash
# Exercise 1: Use the skill tool
# opencode will load a SKILL.md file to add specialized knowledge
# Example skill: code-review-skill.md with review guidelines

# Exercise 2: Configure custom agents
# Create AGENTS.md file with agent configurations:
# - Code review agent with specific permissions
# - Security scanning agent with read-only access
# - Deployment agent with bash permissions

# Exercise 3: Integrate MCP servers
opencode mcp add  # Add GitHub MCP server
opencode mcp add  # Add database MCP server
# Now opencode can query GitHub issues or database records

# Exercise 4: Use web tools
# opencode can fetch documentation with webfetch
# opencode can search for solutions with websearch
```

#### Success Criteria

- Understand how skills extend opencode's knowledge
- Can configure agents for specific tasks
- Know how to add MCP servers for external tool access
- Can use web tools for research and documentation

#### Next Steps

- Create skills for your team's coding standards
- Configure agents for different development tasks
- Read: [07-skills-agents/README.md](07-skills-agents/README.md)
- Read: [08-mcp-servers/README.md](08-mcp-servers/README.md)

---

### Milestone 3B: Advanced Integration

**Topics**: Advanced Features and OpenWork Integration  
**Time**: 2.5 hours  
**Complexity**: ⭐⭐⭐⭐ Advanced  
**Goal**: Master advanced configuration and team collaboration

#### What You'll Achieve

✅ Configure permissions and formatters  
✅ Use experimental features like LSP integration  
✅ Set up OpenWork for remote collaboration  
✅ Implement production-ready workflows

#### Hands-on Exercises

```bash
# Exercise 1: Configure permissions
# Create opencode.json with tool permissions:
# - Allow read, grep, glob for all agents
# - Require approval for edit and bash
# - Deny webfetch for security

# Exercise 2: Configure code formatters
# Set up Prettier, Black, or other formatters
# opencode will auto-format code after edits

# Exercise 3: Set up OpenWork remote workspace
openwork start --workspace /path/to/project --approval auto
# Connect from desktop app with URL and token

# Exercise 4: Production workflow example
# 1. Use plan mode (Tab key) to design feature
# 2. Switch to build mode and implement
# 3. Use permissions to control tool access
# 4. Share conversation with team (/share)
```

#### Success Criteria

- Can configure tool permissions for security
- Understand how to set up code formatters
- Know how to use OpenWork for remote collaboration
- Can create production-ready workflows with proper controls

#### Next Steps

- Configure opencode for your team's security requirements
- Set up OpenWork for collaborative development
- Read: [09-advanced-features/README.md](09-advanced-features/README.md)
- Read: [10-openwork/README.md](10-openwork/README.md)

---

## 🧪 Test Your Knowledge

This repository includes quizzes you can use to evaluate your understanding:

| Quiz | Purpose |
|------|---------|
| **Basic Commands Quiz** | Test your understanding of core opencode operations |
| **File Operations Quiz** | Evaluate your file editing and writing skills |
| **Search Tools Quiz** | Test your ability to find files and content |
| **Automation Quiz** | Evaluate your workflow creation skills |

**Examples:**
- Take the Basic Commands Quiz after completing Level 1
- Take the Automation Quiz after completing Level 3
- Use quizzes to identify gaps in your knowledge

---

## ⚡ Quick Start Paths

### If You Only Have 15 Minutes

**Goal**: Get your first win with opencode

1. Run `opencode` to start the TUI
2. Try asking: "Explain the authentication code in @src/auth.js" (if you have such file)
3. Use `/help` to see available commands
4. Try `/undo` and `/redo` to understand the workflow

**Outcome**: You'll understand opencode's conversational interface

### If You Have 1 Hour

**Goal**: Set up essential productivity

1. **TUI basics** (15 min): Learn interface navigation
2. **File operations** (15 min): Read, edit, and create files
3. **Search tools** (15 min): Find files and code with glob and grep
4. **Bash commands** (15 min): Execute shell commands through opencode

**Outcome**: Basic productivity with core opencode tools

### If You Have a Weekend

**Goal**: Become proficient with opencode

**Saturday Morning** (3 hours):
- Complete Milestone 1A: Basic Commands & TUI
- Complete Milestone 1B: File Operations
- Complete Milestone 2A: Search Tools

**Saturday Afternoon** (3 hours):
- Complete Milestone 2B: Bash & Interactive Tools
- Complete Milestone 3A: Skills & MCP Servers

**Sunday** (3 hours):
- Complete Milestone 3B: Advanced Integration
- Configure opencode for your specific workflow
- Create custom skills or agents for your team

**Outcome**: You'll be an opencode power user ready to extend it with custom capabilities

---

## 💡 Learning Tips

### ✅ Do

- **Take the quiz first** to find your starting point
- **Complete hands-on exercises** for each milestone
- **Start simple** and add complexity gradually
- **Test each feature** before moving to the next
- **Take notes** on what works for your workflow
- **Refer back** to earlier concepts as you learn advanced topics
- **Experiment safely** with backups
- **Share knowledge** with your team

### ❌ Don't

- **Skip the prerequisites check** when jumping to a higher level
- **Try to learn everything at once** - it's overwhelming
- **Copy configurations without understanding them** - you won't know how to debug
- **Forget to test** - always verify features work
- **Rush through milestones** - take time to understand
- **Ignore the documentation** - each README has valuable details
- **Work in isolation** - discuss with teammates

---

## 📈 Progress Tracking

Use these checklists to track your progress by level.

### 🟢 Level 1: Beginner

- [ ] Completed [01-basic-commands](01-basic-commands)
- [ ] Completed [02-file-operations](02-file-operations)
- [ ] Can use opencode TUI interface
- [ ] Can read, edit, and write files
- [ ] **Milestone 1A achieved**
- [ ] Understand file reference with `@` symbol
- [ ] Can use `/undo` and `/redo`
- [ ] **Milestone 1B achieved**

### 🔵 Level 2: Intermediate

- [ ] Completed [03-search-tools](03-search-tools)
- [ ] Completed [04-bash-integration](04-bash-integration)
- [ ] Completed [05-question-todo](05-question-todo)
- [ ] Can find files with glob and grep
- [ ] Can execute shell commands
- [ ] **Milestone 2A achieved**
- [ ] Understand interactive tools (question, todowrite)
- [ ] Can use web tools (webfetch, websearch)
- [ ] **Milestone 2B achieved**

### 🔴 Level 3: Advanced

- [ ] Completed [07-skills-agents](07-skills-agents)
- [ ] Completed [08-mcp-servers](08-mcp-servers)
- [ ] Can create and use skills
- [ ] Can configure custom agents
- [ ] **Milestone 3A achieved**
- [ ] Completed [09-advanced-features](09-advanced-features)
- [ ] Completed [10-openwork](10-openwork)
- [ ] Can configure permissions and formatters
- [ ] Can set up OpenWork for collaboration
- [ ] **Milestone 3B achieved**

---

## 🆘 Common Learning Challenges

### Challenge 1: "Too many concepts at once"

**Solution**: Focus on one milestone at a time. Complete all exercises before moving forward.

### Challenge 2: "Don't know which feature to use when"

**Solution**: Refer to the [Feature Comparison](README.md#feature-comparison) in the main README.

### Challenge 3: "Command not working"

**Solution**: Check syntax, file paths, and permissions. Test with simpler examples first.

### Challenge 4: "Concepts seem to overlap"

**Solution**: Review the [Feature Comparison](README.md#feature-comparison) table to understand differences.

### Challenge 5: "Hard to remember everything"

**Solution**: Create your own cheat sheet. Practice with real projects.

### Challenge 6: "I'm experienced but not sure where to start"

**Solution**: Take the [Self-Assessment Quiz](#-find-your-level) above. Skip to your level and use the prerequisites check to identify any gaps.

---

## 🎯 What's Next After Completion?

Once you've completed all milestones:

1. **Create team documentation** - Document your team's opencode setup
2. **Build custom workflows** - Package your team's common tasks
3. **Integrate with existing tools** - Connect opencode with your current workflow
4. **Create training materials** - Help teammates learn
5. **Contribute examples** - Share with the community
6. **Optimize workflows** - Continuously improve based on usage
7. **Stay updated** - Follow opencode releases and new features

---

## 📚 Additional Resources

### Official Documentation

- [OpenCode Documentation](https://opencode.ai/docs)
- [OpenWork Platform Documentation](https://openwork.ai/docs)

### Community

- [OpenCode GitHub](https://github.com/anomalyco/opencode)
- [OpenWork Community](https://community.openwork.ai)

---

## 💬 Feedback & Support

- **Found an issue?** Create an issue in the repository
- **Have a suggestion?** Submit a pull request
- **Need help?** Check the documentation or ask the community

---

**Last Updated**: April 10, 2026  
**Maintained by**: OpenCode Guide Contributors  
**License**: Educational purposes, free to use and adapt

---

[← Back to Main README](README.md)