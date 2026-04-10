<div align="center">

# 🤖 07. Skills & Agents

**Specialized automation with skills and autonomous agents**

[![Module Level](https://img.shields.io/badge/Level-Intermediate+-darkorange)]()
[![Time Required](https://img.shields.io/badge/Time-60_min-yellow)]()
[![Prerequisites](https://img.shields.io/badge/Prerequisites-Module_06-blue)]()
[![OpenCode Version](https://img.shields.io/badge/OpenCode-1.0+-purple)]()

[⬅️ Previous Module](../06-web-tools/)] • [🏠 Main Menu](../README.md) • [Next Module ➡️](../08-mcp-servers/)

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
# 07 Skills & Agents

The `skill` and `task` tools provide specialized workflows and autonomous agents for handling complex, multi-step tasks in opencode.

## skill Tool

The `skill` tool loads specialized instructions and workflows for specific tasks, providing domain-specific guidance and best practices.

### Available Skills

OpenCode comes with built-in skills for common development tasks. Load a skill when your task matches its description:

```bash
# Example skill usage
Load skill: "code-reviewer"
Load skill: "api-generator"
Load skill: "test-writer"
```

### Skill Structure

Skills typically include:
- **Specialized instructions** for specific task types
- **Domain knowledge** and best practices
- **Workflow templates** for common patterns
- **Quality checks** and validation steps
- **Integration patterns** with other tools

### When to Use Skills

1. **Code Review Tasks**
   ```bash
   # When user asks for code review
   Load skill: "code-reviewer"
   ```

2. **API Development**
   ```bash
   # When creating REST/GraphQL APIs
   Load skill: "api-generator"
   ```

3. **Testing Tasks**
   ```bash
   # When writing tests
   Load skill: "test-writer"
   ```

4. **Documentation Tasks**
   ```bash
   # When creating documentation
   Load skill: "docs-generator"
   ```

### Custom Skills

You can create custom skills by defining specialized workflows:

```javascript
// Example custom skill structure
{
  name: "frontend-component",
  description: "Creates React components with best practices",
  instructions: [
    "Create component with proper TypeScript interfaces",
    "Add PropTypes or TypeScript types",
    "Include unit tests",
    "Add Storybook stories",
    "Follow accessibility guidelines"
  ],
  templates: {
    component: "templates/component.tsx",
    test: "templates/component.test.tsx",
    story: "templates/component.stories.tsx"
  }
}
```

## task Tool

The `task` tool launches autonomous agents to handle complex, multi-step tasks independently.

### Agent Types

OpenCode provides two main agent types:

1. **explore** - Fast agent specialized for exploring codebases
2. **general** - General-purpose agent for complex research and execution

### explore Agent

Use the `explore` agent for codebase exploration tasks:

```bash
# Basic exploration
Launch explore agent with prompt: "Find all API endpoints in the codebase"

# With thoroughness level
Launch explore agent with prompt: "Analyze the authentication system" and thoroughness: "very thorough"

# File pattern searches
Launch explore agent with prompt: "Find all React components using hooks"
```

#### Thoroughness Levels

1. **quick** - Basic searches, file pattern matching
2. **medium** - Moderate exploration, content analysis
3. **very thorough** - Comprehensive analysis across multiple locations

#### Common explore Tasks

```bash
# Architecture discovery
"Map out the project architecture and dependencies"

# Code analysis
"Find all database queries and identify optimization opportunities"

# Pattern identification
"Identify all error handling patterns in the codebase"

# Documentation generation
"Generate API documentation from source code comments"
```

### general Agent

Use the `general` agent for complex, multi-step tasks:

```bash
# Complex research tasks
Launch general agent with prompt: "Research best practices for microservices communication patterns"

# Multi-step implementation
Launch general agent with prompt: "Implement user authentication with JWT tokens"

# Problem investigation
Launch general agent with prompt: "Debug why the application crashes on startup"
```

#### general Agent Capabilities

- **Parallel execution** of multiple operations
- **Complex research** with web tools
- **Multi-step workflows** with conditional logic
- **Code generation** and implementation
- **Testing and validation** of solutions

### Agent Invocation Patterns

#### Pattern 1: Autonomous Task Completion

```bash
# User: "Create a complete user registration system"
Launch general agent with prompt: "Create user registration with email verification, password reset, and profile management"
```

#### Pattern 2: Research + Implementation

```bash
# User: "Add GraphQL to our REST API"
1. Launch explore agent: "Analyze current API structure"
2. Launch general agent: "Research GraphQL best practices and implementation patterns"
3. Launch general agent: "Implement GraphQL layer alongside existing REST API"
```

#### Pattern 3: Parallel Exploration

```bash
# Complex analysis
Launch explore agent with prompt: "Find security vulnerabilities" and thoroughness: "very thorough"
Launch explore agent with prompt: "Identify performance bottlenecks" and thoroughness: "very thorough"
# Both agents run in parallel
```

## Integration Examples

### Example 1: Feature Development Pipeline

```bash
# User: "Add payment processing to our e-commerce site"
1. Load skill: "payment-integration"
2. Launch explore agent: "Analyze current checkout flow"
3. Launch general agent: "Research Stripe vs PayPal integration"
4. Question: "Which payment provider should we use?"
5. Launch general agent: "Implement chosen payment provider"
6. Load skill: "test-writer" to create integration tests
```

### Example 2: Code Quality Audit

```bash
# User: "Audit our codebase for quality issues"
1. Load skill: "code-reviewer"
2. Launch explore agent: "Find code smells and anti-patterns"
3. Launch explore agent: "Analyze test coverage and quality"
4. Launch general agent: "Generate comprehensive audit report"
5. Create todo list for fixing identified issues
```

### Example 3: Technology Migration

```bash
# User: "Migrate from JavaScript to TypeScript"
1. Launch explore agent: "Analyze current JavaScript codebase"
2. Load skill: "typescript-migration"
3. Launch general agent: "Create migration plan and timeline"
4. Launch general agent: "Implement TypeScript configuration"
5. Launch explore agent: "Convert files incrementally"
```

## Agent Communication

### Providing Context

When launching agents, provide sufficient context:

```bash
# Good: Specific with context
Launch general agent with prompt: "In the /src/api directory, refactor the user authentication endpoints to use async/await instead of callbacks"

# Bad: Too vague
Launch general agent with prompt: "Fix the authentication"
```

### Setting Expectations

```bash
# Specify what you want returned
Launch explore agent with prompt: "Find all API endpoints and return them as a structured list"

# Define completion criteria
Launch general agent with prompt: "Fix the login bug and verify the fix works before returning"
```

### Handling Results

Agents return their findings and actions. You can:

1. **Review results** and ask follow-up questions
2. **Integrate findings** into your current session
3. **Launch additional agents** based on discoveries
4. **Create todo lists** from agent recommendations

## Best Practices

### For skill Tool:
- **Load skills early** in relevant tasks
- **Follow skill instructions** precisely
- **Combine skills** for complex workflows
- **Verify skill applicability** to current task

### For task Tool:
- **Choose appropriate agent** type for the task
- **Set thoroughness level** based on need
- **Provide clear, detailed prompts**
- **Specify expected outputs**
- **Use parallel agents** when tasks are independent

### Agent Management:
- **Limit concurrent agents** to avoid resource issues
- **Monitor agent progress** through their outputs
- **Combine agent findings** with manual verification
- **Use agents for exploration**, not trivial tasks

## Common Patterns

### Pattern 1: Explore → General → Implement
```bash
1. Explore: Understand the codebase/problem
2. General: Research solutions/approaches  
3. Implement: Apply findings to create solution
```

### Pattern 2: Skill → Agent → Validation
```bash
1. Skill: Load domain-specific guidance
2. Agent: Execute complex parts of task
3. Validation: Verify results meet standards
```

### Pattern 3: Parallel Discovery
```bash
# Launch multiple explore agents simultaneously
Agent 1: Analyze architecture
Agent 2: Review security
Agent 3: Check performance
# Combine findings for comprehensive analysis
```

## Troubleshooting

### Common Issues

1. **Agent Not Starting**
   - Verify agent type is correct (explore/general)
   - Check prompt is clear and actionable
   - Ensure task is appropriate for autonomous handling

2. **Incomplete Results**
   - Increase thoroughness level
   - Provide more specific prompts
   - Break complex tasks into smaller ones

3. **Resource Constraints**
   - Limit number of concurrent agents
   - Use quick thoroughness for simple tasks
   - Monitor system resources

4. **Skill Not Found**
   - Verify skill name is correct
   - Check if skill is available in current opencode version
   - Consider creating custom workflow instead

### Debug Commands

```bash
# Test agent functionality
Launch explore agent with prompt: "List files in current directory" and thoroughness: "quick"

# Verify skill loading
Load skill: "test"  # Should fail if skill doesn't exist

# Check agent response times
Launch general agent with prompt: "Simple test task" and monitor performance
```

## Performance Optimization

1. **Agent Selection**
   - Use `explore` for code analysis
   - Use `general` for implementation
   - Match agent to task complexity

2. **Prompt Optimization**
   - Be specific about desired outcomes
   - Include relevant file paths and context
   - Set clear completion criteria

3. **Resource Management**
   - Launch agents for non-trivial tasks only
   - Use appropriate thoroughness levels
   - Monitor and limit concurrent agents

## Examples Directory

See `/examples/` for practical implementations:
- Code review automation workflows
- API generation pipelines
- Test suite creation systems
- Documentation generation from code
- Security audit automation

## Next Steps

After mastering skills and agents, proceed to:
- **Module 08**: MCP server integration for extended capabilities
- **Module 09**: Advanced features including the plugin system
- **Module 10**: OpenWork collaboration platform for team workflows

---


---

## 📄 License & Attribution

This module is part of the [OpenCode Primer](../README.md).

**License:** MIT - See [LICENSE](../LICENSE) for details.

**Last Updated:** April 2026  
**OpenCode Version:** 1.0+ compatible

---

