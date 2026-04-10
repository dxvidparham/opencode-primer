<div align="center">

# ❓ 05. Question & Todo Tools

**Interactive workflows and task management with OpenCode**

[![Module Level](https://img.shields.io/badge/Level-Intermediate-orange)]()
[![Time Required](https://img.shields.io/badge/Time-45_min-yellow)]()
[![Prerequisites](https://img.shields.io/badge/Prerequisites-Module_04-blue)]()
[![OpenCode Version](https://img.shields.io/badge/OpenCode-1.0+-purple)]()

[⬅️ Previous Module](../04-bash-integration/)] • [🏠 Main Menu](../README.md) • [Next Module ➡️](../06-web-tools/)

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

---


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
# 05 Question & Todo Tools

The `question` and `todowrite` tools enable interactive workflows and task management within opencode sessions.

## question Tool

The `question` tool allows opencode to ask users for input, gather preferences, make decisions, and clarify ambiguous instructions.

### Basic Usage

```bash
# Ask a simple question
What is your preferred color theme? (dark/light)

# Ask with options
Which database would you like to use?
- PostgreSQL (Recommended) - Production-ready, full-featured
- SQLite - Lightweight, embedded database
- MySQL - Widely used, high performance

# Multiple selection
Which features would you like to implement?
- User authentication
- File uploads
- Email notifications
- API rate limiting
- Real-time updates
```

### Question Parameters

```javascript
// Example question structure
{
  question: "Which framework would you like to use?",
  header: "Framework Choice",
  options: [
    {
      label: "React",
      description: "Component-based UI library"
    },
    {
      label: "Vue",
      description: "Progressive JavaScript framework"
    },
    {
      label: "Svelte",
      description: "Compiler-based framework"
    }
  ],
  multiple: false  // Allow only single selection
}
```

### Common Use Cases

1. **Decision Making**
   ```bash
   # Architecture decisions
   Should we use REST or GraphQL for the API?
   
   # Technology choices  
   Which testing framework should we use?
   
   # Configuration options
   What should the default port be?
   ```

2. **Requirement Gathering**
   ```bash
   # Feature selection
   Which user roles should the system support?
   
   # Priority setting
   Which bugs should we fix first?
   
   # User preferences
   What layout style do you prefer?
   ```

3. **Clarification Requests**
   ```bash
   # Ambiguous instructions
   Did you mean to update all files or just the main file?
   
   # Missing information
   What should the API endpoint be named?
   
   # Edge cases
   How should we handle empty input?
   ```

## todowrite Tool

The `todowrite` tool creates and manages structured task lists to track progress during complex coding sessions.

### Basic Todo List

```javascript
// Example todo list structure
[
  {
    content: "Implement user authentication system",
    status: "pending",
    priority: "high"
  },
  {
    content: "Create database schema",
    status: "in_progress", 
    priority: "high"
  },
  {
    content: "Write API documentation",
    status: "pending",
    priority: "medium"
  }
]
```

### When to Use Todo Lists

1. **Complex Multistep Tasks** (3+ distinct steps)
   ```bash
   # Adding a new feature
   1. Create component files
   2. Implement business logic
   3. Add tests
   4. Update documentation
   ```

2. **Multiple User Requests**
   ```bash
   # User provides multiple items
   "Fix the login bug, add dark mode, and optimize images"
   ```

3. **Non-trivial Operations**
   ```bash
   # Refactoring tasks
   1. Identify code smells
   2. Extract functions
   3. Update tests
   4. Verify functionality
   ```

### Task Management Best Practices

```javascript
// Status values
"pending"     // Task not yet started
"in_progress" // Currently working on (ONLY ONE at a time)
"completed"   // Task finished successfully  
"cancelled"   // Task no longer needed

// Priority levels
"high"    // Critical functionality, blocking issues
"medium"  // Important features, improvements
"low"     // Nice-to-have, polish tasks
```

### Real-world Examples

#### Example 1: Feature Implementation

**User Request:** "Add user profile editing functionality"

**Todo List Created:**
```javascript
[
  {
    content: "Create profile edit form component",
    status: "pending",
    priority: "high"
  },
  {
    content: "Implement backend update endpoint",
    status: "pending", 
    priority: "high"
  },
  {
    content: "Add form validation",
    status: "pending",
    priority: "medium"
  },
  {
    content: "Write tests for profile updates",
    status: "pending",
    priority: "medium"
  },
  {
    content: "Update user documentation",
    status: "pending",
    priority: "low"
  }
]
```

#### Example 2: Bug Fix Workflow

**User Request:** "Fix the file upload issue"

**Interactive Workflow:**
1. **Question:** "What specific issue are you seeing with file uploads?"
2. **Options:** 
   - "Uploads fail with large files"
   - "Progress bar doesn't update" 
   - "Files are corrupted after upload"
   - "Permission errors"
3. **Todo List Created** based on selected issue

## Integration Examples

### Combining question and todowrite

```bash
# Start a complex task
"I want to add a shopping cart to the e-commerce site"

# opencode might respond:
# 1. Ask questions to gather requirements
#    - Should the cart persist across sessions?
#    - What payment methods should be supported?
#    - Do we need cart sharing features?
#
# 2. Create todo list based on answers
#    [
#      {content: "Create Cart model", status: "pending", priority: "high"},
#      {content: "Implement add/remove items", status: "pending", priority: "high"},
#      {content: "Add persistence layer", status: "pending", priority: "medium"},
#      {content: "Create cart UI component", status: "pending", priority: "medium"}
#    ]
```

### Progressive Todo Management

```bash
# Initial todo list
[
  {content: "Research authentication libraries", status: "in_progress", priority: "high"}
]

# After research is complete
[
  {content: "Research authentication libraries", status: "completed", priority: "high"},
  {content: "Implement JWT authentication", status: "in_progress", priority: "high"}
]

# As work progresses
[
  {content: "Research authentication libraries", status: "completed", priority: "high"},
  {content: "Implement JWT authentication", status: "completed", priority: "high"},
  {content: "Add login/logout UI", status: "in_progress", priority: "medium"},
  {content: "Write authentication tests", status: "pending", priority: "medium"}
]
```

## Best Practices

### For question tool:
- **Be specific** with questions to avoid ambiguity
- **Limit options** to 3-7 choices for clarity
- **Use descriptions** to explain each option
- **Set default** when appropriate
- **Group related** options together

### For todowrite tool:
- **Break down** large tasks into specific, actionable items
- **Update status** immediately after completing tasks
- **Only one** `in_progress` task at a time
- **Cancel** tasks that become irrelevant
- **Use priorities** to guide workflow

### When NOT to use these tools:
- Single, straightforward commands
- Trivial operations (reading one file)
- Purely informational requests
- Already clear instructions

## Common Patterns

### Pattern 1: Decision → Todo Pipeline
```bash
1. User: "Improve the search functionality"
2. Question: "What type of improvements are needed?"
   - Faster response time
   - Better relevance scoring
   - Advanced filtering options
   - Autocomplete suggestions
3. Todo List: Created based on selected improvements
```

### Pattern 2: Progressive Elaboration
```bash
1. User: "Create a dashboard"
2. Question: "What metrics should the dashboard show?"
3. Answer: "User signups, active users, revenue"
4. Question: "What visualization types?"
5. Answer: "Line charts, bar charts, summary cards"
6. Todo List: Created with specific chart implementations
```

### Pattern 3: Priority-based Workflow
```bash
1. User: "We have several issues to fix"
2. Question: "Which issue is most critical?"
   - Database connection drops (HIGH PRIORITY)
   - Slow page load times (MEDIUM PRIORITY) 
   - Minor UI glitches (LOW PRIORITY)
3. Todo List: Created starting with highest priority
```

## Troubleshooting

### Common Issues

1. **Too many questions**
   - Solution: Group related decisions together
   - Example: Instead of separate questions for framework, database, and auth, ask "What tech stack should we use?" with combined options

2. **Vague todo items**
   - Solution: Make tasks specific and measurable
   - Bad: "Improve performance"
   - Good: "Reduce page load time from 3s to 1s by optimizing images"

3. **Todo list not updated**
   - Solution: Always mark tasks `completed` immediately after finishing
   - This shows progress and helps with context switching

4. **Infinite questions loop**
   - Solution: Set reasonable limits and provide "custom" option
   - Allow users to type their own answer when needed

## Examples Directory

See `/examples/` for practical implementations of question and todo workflows in different scenarios:
- Feature development pipelines
- Bug fix tracking systems
- Refactoring task management
- Multi-project coordination

## Next Steps

After mastering the question and todowrite tools, proceed to:
- **Module 06**: Web tools (webfetch and websearch)
- **Module 07**: Skills and agents for specialized tasks
- **Module 08**: MCP server integration for extended capabilities

---


---

## 📄 License & Attribution

This module is part of the [OpenCode Primer](../README.md).

**License:** MIT - See [LICENSE](../LICENSE) for details.

**Last Updated:** April 2026  
**OpenCode Version:** 1.0+ compatible

---

