<div align="center">

# 🚀 01. Basic Commands & TUI

**Master OpenCode's terminal interface and core interaction patterns**

[![Module Level](https://img.shields.io/badge/Level-Beginner-green)]()
[![Time Required](https://img.shields.io/badge/Time-30_min-yellow)]()
[![Prerequisites](https://img.shields.io/badge/Prerequisites-None-blue)]()
[![OpenCode Version](https://img.shields.io/badge/OpenCode-1.0+-purple)]()

[🏠 Main Menu](../README.md) • [Next Module ➡️](../02-file-operations/)

</div>

---

## 📋 Table of Contents

<details>
<summary>Click to expand/collapse</summary>

- [🎯 Overview](#-overview)
- [✅ Prerequisites](#-prerequisites)
- [⚡ Quick Start](#-quick-start)
- [📚 Core Concepts](#-core-concepts)
- [🔧 Examples & Patterns](#-examples--patterns)
- [🏗️ Real-World Workflows](#️-real-world-workflows)
- [🧪 Practice Exercises](#-practice-exercises)
- [❓ Common Questions](#-common-questions)
- [🐛 Troubleshooting](#-troubleshooting)
- [📈 What You've Learned](#-what-youve-learned)
- [🚶 Next Steps](#-next-steps)

</details>

---

## 🎯 Overview

> **Key Terms You'll See Throughout This Guide:**
>
> - **LLM** (Large Language Model) — The AI that powers OpenCode. When we say "the LLM does X," we mean OpenCode's AI agent.
> - **TUI** (Terminal User Interface) — The interactive chat-like screen you see when you run `opencode`.
> - **CLI** (Command Line Interface) — Running one-off commands like `opencode run "do something"`.
> - **`opencode.json`** — The configuration file for your project (like `package.json` for Node.js).

### 📝 What This Module Covers

| Topic                 | Description                         | Why It Matters                           |
| --------------------- | ----------------------------------- | ---------------------------------------- |
| **TUI Navigation**    | Terminal User Interface basics      | Foundation for all opencode interactions |
| **Slash Commands**    | `/help`, `/undo`, `/redo`, `/share` | Essential productivity shortcuts         |
| **File References**   | `@filename` syntax                  | Context management for AI assistance     |
| **Plan/Build Agents** | Tab key to cycle agents             | Different thinking vs execution agents   |
| **Conversation Flow** | Effective AI dialogue patterns      | Maximize coding assistance value         |

### 🎓 Learning Objectives

By the end of this module, you'll be able to:

- ✅ **Start and navigate** the opencode TUI confidently
- ✅ **Use essential slash commands** for productivity
- ✅ **Reference files** with `@` symbol for context
- ✅ **Switch between Plan and Build agents** effectively
- ✅ **Manage conversation flow** for optimal AI assistance

## ✅ Prerequisites

### 🔍 Check Your Setup

```bash
# Verify OpenCode installation
which opencode
# Should output: /path/to/opencode

# Check version
opencode --version
# Should output: opencode 1.0+

# Test basic functionality
echo 'Hello, OpenCode!' > test.txt
cat test.txt
rm test.txt
```

### 📚 Required Knowledge

- [ ] Basic terminal/command line familiarity (`cd`, `ls`, `mkdir` — if unfamiliar, see [Terminal Basics for Beginners](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line))
- [ ] Understanding of file system navigation (folders/directories, paths like `~/Documents`)
- [ ] No previous opencode experience required

### 🛠️ Required Tools

- [ ] OpenCode 1.0+ installed (see below)
- [ ] Terminal/Command Line access
- [ ] A project directory to work in
- [ ] Example files from `/examples/` folder

### 📦 Installation Methods

```bash
# curl (Linux/macOS)
curl -fsSL https://opencode.ai/install | bash

# npm
npm i -g opencode-ai@latest

# Homebrew (macOS/Linux)
brew install anomalyco/tap/opencode

# Arch Linux
pacman -S opencode  # or: paru -S opencode

# Windows (Scoop)
scoop install opencode

# Windows (Chocolatey)
choco install opencode

# Nix
nix profile install nixpkgs#opencode-ai

# mise
mise use -g opencode-ai
```

**Desktop App (BETA):** OpenCode also offers a native desktop app for macOS, Windows, and Linux. Download from the [releases page](https://github.com/anomalyco/opencode/releases) or [opencode.ai/download](https://opencode.ai/download).

---

## ⚡ Quick Start

### 🚀 Set Up a Practice Project

Before starting, create a small project to practice with:

```bash
mkdir -p ~/opencode-practice/src
cd ~/opencode-practice

# Create sample files to work with
echo '{"name": "practice-app", "version": "1.0.0"}' > package.json
echo 'console.log("Hello from OpenCode!");' > src/index.js
echo '# Practice App' > README.md
echo 'export function add(a, b) { return a + b; }' > src/utils.js
```

### 🚀 Your First OpenCode Session

```bash
# Navigate to your practice project
cd ~/opencode-practice

# Start the TUI (interactive mode)
opencode

# Or start TUI in a specific directory without cd:
opencode ~/opencode-practice
```

Or use CLI mode for one-off prompts:

```bash
# Ask a question without entering the TUI
opencode run "Explain this project's structure"
```

### 🖥️ TUI Interface Overview

Once opencode starts, you'll see a full-screen terminal interface (built with SolidJS and [opentui](https://github.com/sst/opentui)). The layout from top to bottom:

- **Conversation area** (main area) — Shows the OpenCode ASCII logo on a fresh start; fills with your messages and AI responses during a session
- **Input box** (center) — Where you type prompts, slash commands, or `@` file references
- **Status line** (below input) — Shows the current agent (`Build`/`Plan`), model name (e.g. `DeepSeek V3.2`), and provider (e.g. `OpenRouter`)
- **Keyboard hints** (below status) — Shows `tab agents` and `ctrl+p commands`
- **Footer** (bottom edge) — Working directory on the left, OpenCode version on the right

> **What you'll actually see:** The TUI fills your entire terminal window. It's not a simple text box — it's a full interactive interface with scrolling, syntax highlighting, and live tool execution output. The layout may differ slightly between versions.

### ✅ Verification

Test that everything works with your practice project:

```bash
# 1. Non-interactive test
cd ~/opencode-practice
opencode run "What files are in this project?"
```

**Expected:** You should see a response listing `package.json`, `README.md`, `src/index.js`, and `src/utils.js`.

```bash
# 2. Interactive test
opencode
# Type: /help
# You should see a list of available slash commands
# Type: /exit to quit
```

**Expected:** `/help` shows a popup or list with commands like `/undo`, `/redo`, `/share`, `/compact`, etc.

---

### Slash Commands

Common slash commands (type these in the TUI prompt):

```
# Show available commands and help
/help

# Undo/redo last change (uses Git internally)
/undo
/redo

# Share conversation (creates shareable link)
/share

# Initialize project analysis (creates AGENTS.md)
/init

# Compact conversation context
/compact

# Start new session
/new

# List/switch sessions
/sessions

# Exit OpenCode
/exit
```

### File References

Reference files in your conversation using `@`:

```
Look at the authentication code in @src/auth.js
Explain how this function works in @utils/helpers.ts
```

## 📚 Core Concepts

### 🧠 Concept 1: The TUI Interface

The TUI layout was covered in [Quick Start](#️-tui-interface-overview). Here's what you need to know about working in it day-to-day:

**Key Features:**

- **Natural Language Prompts** - Type requests in plain English
- **Context Awareness** - OpenCode understands your project structure
- **Visual Feedback** - See when OpenCode is thinking or using tools
- **Multi-turn Dialogues** - Continue conversations across multiple exchanges

**When to use it:**

- Starting any OpenCode session
- Complex tasks requiring back-and-forth discussion
- When you need to review plans before execution

### 🧠 Concept 2: Slash Commands

Slash commands were listed in [Quick Start](#slash-commands). Here’s the complete reference with keybinds:

**Complete Slash Command Reference:**

| Command     | Purpose                         | Keybind    | When to Use                           |
| ----------- | ------------------------------- | ---------- | ------------------------------------- |
| `/help`     | Show help dialog                | `ctrl+x h` | When learning or forgetting commands  |
| `/undo`     | Undo last change (uses Git)     | `ctrl+x u` | Made a mistake or want to revert      |
| `/redo`     | Redo undone change              | `ctrl+x r` | Changed your mind about undo          |
| `/share`    | Create shareable link           | `ctrl+x s` | Sharing work with team or community   |
| `/init`     | Create/update AGENTS.md         | `ctrl+x i` | Starting work on a new project        |
| `/connect`  | Configure LLM provider          | —          | Setting up different AI providers     |
| `/compact`  | Reduce context                  | `ctrl+x c` | Long conversations getting slow       |
| `/new`      | Start new session               | `ctrl+x n` | Starting a fresh conversation         |
| `/sessions` | List/switch sessions            | `ctrl+x l` | Resuming previous work                |
| `/exit`     | Exit OpenCode                   | `ctrl+x q` | Done working (aliases: `/quit`, `/q`) |
| `/themes`   | Change color theme              | `ctrl+x t` | Customizing appearance                |
| `/models`   | List available models           | `ctrl+x m` | Switching AI models                   |
| `/editor`   | Open external editor            | `ctrl+x e` | Composing long prompts                |
| `/export`   | Export conversation to Markdown | `ctrl+x x` | Saving conversation to file           |
| `/details`  | Toggle tool execution details   | `ctrl+x d` | Debugging tool calls                  |
| `/thinking` | Toggle reasoning visibility     | —          | Seeing model's thought process        |

**Additional Keyboard Shortcuts (no slash command equivalent):**

| Keybind    | Action                      |
| ---------- | --------------------------- |
| `ctrl+x g` | Show session timeline       |
| `ctrl+x b` | Toggle sidebar              |
| `ctrl+x a` | List agents                 |
| `f2`       | Cycle recently used models  |
| `ctrl+t`   | Cycle model variants        |
| `ctrl+r`   | Rename current session      |
| `ctrl+x h` | Toggle tips/hint visibility |

**When to use them:**

- Quick actions without typing full prompts
- Navigation and control within the TUI
- Session management and sharing

### 🧠 Concept 3: File References with `@`

The `@` symbol triggers a **fuzzy file search** within your project. When you type `@src/main.js`, OpenCode reads that file and injects its contents into the conversation context — so the LLM can see the exact current code.

- You can reference multiple files: `@a.ts @b.ts @c.ts`
- Directories work too: `@src/` includes a listing of files in that directory
- File content costs tokens — large files use more of the context window

See examples in [Quick Start → File References](#file-references).

### 🧠 Concept 4: Plan Agent vs Build Agent

Two built-in agents you cycle between with the **Tab** key. (The TUI shows `tab agents` at the bottom as a reminder.) Press **Shift+Tab** to cycle in reverse.

| Aspect           | Build Agent (Default)      | Plan Agent                            |
| ---------------- | -------------------------- | ------------------------------------- |
| **Purpose**      | Execution & implementation | Strategy & planning                   |
| **File Changes** | Can read/write/edit files  | Edit tools denied (read-only + plans) |
| **Tool Usage**   | Full tool access           | Edit/write/patch/multiedit all denied |
| **When to Use**  | Implementing, testing      | Brainstorming, planning               |

**Recommended Workflow:** Start in Plan for complex requests → review the plan → switch to Build → execute → review results. See [Exercise 2](#-exercise-2-plan-vs-build-agents) to try it hands-on.

### 🧠 Concept 5: Conversation Management

OpenCode maintains context across exchanges within a session, but the context window is finite.

**Key Features:**

- **Context Window** - Remembers previous exchanges (limited by token count)
- **Auto-compaction** - Long conversations automatically summarized
- **Manual Control** - Use `/compact` to reduce context size manually
- **Session Persistence** - Conversations saved between sessions

**Best Practices:**

1. **Be specific early** - Provide context in initial request
2. **Use @ references** - Keep context focused on relevant files
3. **Compact when needed** - Use `/compact` if conversation gets slow
4. **Start fresh if stuck** - Sometimes `/new` is better than a marathon session

---

## 🔧 Examples & Patterns

### 📖 Example 1: Project Exploration

In the TUI, type these prompts and observe what happens:

```
You: What's the overall structure of this project?
→ OpenCode uses glob and list tools to scan directories, then summarizes.

You: Show me @src/index.js
→ OpenCode reads the file and displays its contents.

You: What dependencies are in @package.json?
→ OpenCode reads package.json and lists each dependency.
```

---

## 🏗️ Real-World Workflows

### 🔄 Workflow 1: Exploring an Unfamiliar Codebase

```
1. "What's the overall architecture of this project?"
2. "Show me the main entry point @src/index.js"
3. "What are the key dependencies in @package.json?"
4. "How is error handling done? Look in @src/"
5. "Create a summary of the project architecture"
```

**When to use:** Starting on a new codebase, onboarding, code review.

---

## 🧪 Practice Exercises

> **All exercises use the practice project.** If you haven't set it up, scroll up to [Set Up a Practice Project](#-set-up-a-practice-project).

### 🎯 Exercise 1: Explore Your Project

**Task:** Use the TUI to explore the practice project.

```
1. cd ~/opencode-practice && opencode
2. Type: What files are in this project?
3. Type: Show me @package.json
4. Type: /help
5. Type: /exit
```

**Expected results:**

- Step 2: Lists `package.json`, `README.md`, and files in `src/`
- Step 3: Shows the JSON contents of package.json
- Step 4: Shows available slash commands

### 🎯 Exercise 2: Plan vs Build Agents

**Task:** Experience the difference between Plan and Build agents.

```
1. cd ~/opencode-practice && opencode
2. Type: Add a function called multiply to @src/utils.js
   (Build agent — OpenCode edits the file directly)
3. Type: /undo
   (Reverts the change)
4. Press Tab to switch to Plan agent
5. Type: Add a function called divide to @src/utils.js
   (Plan agent — OpenCode shows you what it would do)
6. Press Tab to switch back to Build agent
```

**Expected results:**

- Step 2: OpenCode adds the `multiply` function to `src/utils.js` and shows you the change
- Step 3: The change is reverted (file goes back to original)
- Step 5: OpenCode describes the plan but cannot edit files (edit tools are denied)

### 🎯 Exercise 3: File References

**Task:** Practice `@` file references.

```
1. Type: Explain what @src/index.js does
2. Type: Compare @src/index.js and @src/utils.js
3. Type: What dependencies are in @package.json?
```

**Expected results:**

- Step 1: OpenCode reads and explains the console.log statement
- Step 2: OpenCode compares the two files side by side
- Step 3: OpenCode reads package.json and lists dependencies (none in our simple project)

---

## ❓ Common Questions

<details>
<summary><strong>FAQ for Basic Commands & TUI</strong></summary>

### 🤔 What's the difference between CLI and TUI?

**CLI (Command Line Interface):** You run non-interactive prompts like `opencode run "Explain this code"` directly in terminal.  
**TUI (Terminal User Interface):** Interactive session started with just `opencode`, allowing conversational interaction.  
**Use CLI for:** Quick one-off prompts, scripting, automation (via `opencode run`).  
**Use TUI for:** Complex tasks, planning, multi-step workflows, using slash commands.

### 🤔 When should I use the Plan agent vs the Build agent?

**Plan agent:** For brainstorming, design discussions, complex planning. Edit tools are denied — OpenCode can only read and plan, not modify files. Plans can be saved to `.opencode/plans/`.  
**Build agent:** For implementation, testing, file operations. OpenCode can execute tools freely.  
**Rule of thumb:** Start in Plan for anything complex, switch to Build when ready to implement.

### 🤔 How do file references with @ actually work?

OpenCode reads the referenced files and includes them in the context for the AI. This helps it understand specific code you're asking about. The AI can see the file contents but won't modify them unless you're using the Build agent and explicitly ask for changes.

### 🤔 Can I use OpenCode without internet?

**Partial functionality:** Basic file operations and already-downloaded models work offline.  
**Full AI features:** Require internet connection for cloud-based AI models.  
**Check your provider:** Look at the status line in the TUI — it shows your model and provider (e.g. `DeepSeek V3.2 OpenRouter`). Cloud providers like OpenRouter require internet; local providers like Ollama do not.

### 🤔 How do I exit OpenCode TUI?

- **Ctrl+C** - Clears input or interrupts response
- **Ctrl+X then Q** - Exit via keybind (leader key + q)
- **/exit** or **/quit** or **/q** - Slash command to exit
- **Close terminal** - Last resort
  Your conversation is automatically saved and can be resumed with `/sessions`.

</details>

---

## 🐛 Troubleshooting

<details>
<summary><strong>Common issues and solutions</strong></summary>

### 🚫 Error: "OpenCode not found" or "command not found"

**Cause:** OpenCode not in PATH or not installed properly.
**Solution:**

```bash
# Check installation
which opencode

# If not found, add to PATH
echo 'export PATH=$PATH:/path/to/opencode' >> ~/.bashrc
source ~/.bashrc

# Or reinstall
# Follow installation instructions from opencode.ai
```

### 🚫 Error: TUI won't start or freezes

**Cause:** Terminal compatibility issues, network problems, or configuration errors.
**Solution:**

```bash
# 1. Check terminal compatibility
echo $TERM  # Should be xterm-256color or similar

# 2. Try different terminal
# Use iTerm2, Kitty, or Alacritty instead of basic terminal

# 3. Check network
curl -s https://opencode.ai > /dev/null && echo "Network OK"

# 4. Reset configuration
rm -rf ~/.config/opencode/sessions
```

### 🚫 Error: "@file.js not found" or file references not working

**Cause:** Wrong file path, permissions, or relative path confusion.
**Solution:**

```bash
# 1. Verify file exists
ls -la @src/file.js

# 2. Check working directory
pwd  # Should be project root

# 3. Use absolute path for testing
opencode run "Show me @src/file.js"

# 4. Check permissions
ls -la src/file.js
```

### 🚫 Error: Slash commands not working

**Cause:** Typing too fast, not in TUI mode, or version mismatch.
**Solution:**

- **Slow down typing** - Some terminals buffer input
- **Verify TUI mode** - You should see `>` prompt
- **Check version** - `opencode --version`
- **Use /help** - To see available commands

### 🔧 General Debugging Tips

1. **Start simple** - Test with `opencode run "Say hello"` first
2. **Check logs** - Look for error messages in terminal
3. **Update regularly** - `opencode upgrade`
4. **Clear cache** - `rm -rf ~/.cache/opencode`
5. **Try fresh session** - New terminal, new OpenCode session

</details>

---

## 📈 What You've Learned

### 🎓 Knowledge Check

Test your understanding:

**1. What key do you press to cycle between agents?**

- A) Ctrl+P
- B) Spacebar
- C) Tab
- D) Enter

<details>
<summary>Show answer</summary>

**C) Tab** — Press Tab to cycle forward through primary agents, Shift+Tab to go backward.

</details>

**2. How do you reference a specific file in a prompt?**

- A) #filename
- B) @filename
- C) $filename
- D) %filename

<details>
<summary>Show answer</summary>

**B) @filename** — The `@` symbol triggers a fuzzy file search within your project.

</details>

**3. Which agent allows OpenCode to make file changes freely?**

- A) Plan agent
- B) Build agent
- C) Both agents
- D) Neither agent

<details>
<summary>Show answer</summary>

**B) Build agent** — Build has full tool access. Plan denies all edit tools.

</details>

**4. What does `/undo` do?**

- A) Undoes your last typed command
- B) Undoes OpenCode's last change
- C) Clears the conversation
- D) Exits OpenCode

<details>
<summary>Show answer</summary>

**B) Undoes OpenCode's last change** — Reverts the most recent file modification using Git internally.

</details>

### ✅ Skills Acquired

After completing this module you should be able to:

- ✅ Start, navigate, and exit the TUI
- ✅ Use `/help`, `/undo`, `/redo`, and other slash commands
- ✅ Reference files with `@` and understand how context is injected
- ✅ Switch between Plan and Build agents with Tab
- ✅ Maintain effective multi-turn conversations

---

## 🚶 Next Steps

### 📚 Continue Learning

- **Next Module:** [02 - File Operations](../02-file-operations/) - Learn how OpenCode reads, edits, and writes files
- **Official TUI Docs:** [opencode.ai/docs/tui](https://opencode.ai/docs/tui) - Full TUI reference
- **Keybinds Reference:** [opencode.ai/docs/keybinds](https://opencode.ai/docs/keybinds) - All keyboard shortcuts

### 🔧 Apply to Your Projects

**Beginner Project:** Explore your current project with OpenCode. Document key files and architecture.
**Intermediate Project:** Plan a small feature using the Plan agent, then implement with the Build agent.
**Advanced Project:** Create a complete project exploration workflow combining all TUI features.

---

[⬆ Back to top](#-01-basic-commands--tui)

---

## 📄 License & Attribution

This module is part of the [OpenCode Primer](../README.md).

**License:** MIT - See [LICENSE](../LICENSE) for details.

**Last Updated:** April 2026  
**OpenCode Version:** 1.0+ compatible
