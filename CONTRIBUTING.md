# Contributing to OpenCode How-To Guide

Thank you for your interest in contributing to the OpenCode How-To Guide! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Development Workflow](#development-workflow)
- [Style Guide](#style-guide)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Reporting Issues](#reporting-issues)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

## 📜 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a friendly, safe, and welcoming environment for all.

## 🚀 Getting Started

### Prerequisites

- OpenCode installed and working
- Git installed
- Basic understanding of command-line tools
- Text editor of your choice

### Setting Up Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/opencode-howto-guide.git
   cd opencode-howto-guide
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/opencode-howto-guide.git
   ```
4. **Create a branch** for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🎯 Types of Contributions

We welcome various types of contributions:

### 1. Documentation Improvements
- Fix typos and grammatical errors
- Improve clarity and readability
- Add missing explanations
- Update outdated information

### 2. New Examples
- Add practical examples for existing features
- Create new workflow demonstrations
- Provide real-world use cases
- Add troubleshooting scenarios

### 3. New Modules
- Create tutorials for advanced features
- Add integration guides
- Create cheat sheets or reference materials
- Add best practices guides

### 4. Bug Fixes
- Fix broken examples
- Correct inaccurate information
- Update deprecated commands
- Fix formatting issues

### 5. Translations
- Translate content to other languages
- Add language-specific examples
- Create localized documentation

## 🏗️ Development Workflow

### 1. Planning Your Contribution

Before starting work:
- Check existing issues to avoid duplicates
- Discuss major changes in an issue first
- Ensure your contribution aligns with project goals
- Consider the learning path structure

### 2. Making Changes

1. **Work on your feature branch**
2. **Follow the style guide** (see below)
3. **Test your changes** with OpenCode
4. **Update documentation** as needed
5. **Keep commits focused and descriptive**

### 3. Commit Guidelines

- Use conventional commit messages:
  ```
  feat: add new example for search patterns
  fix: correct typo in basic commands README
  docs: update installation instructions
  style: improve formatting in workflows module
  ```
- Write clear, concise commit messages
- Reference issue numbers when applicable
- Keep commits logically grouped

## 🎨 Style Guide

### Documentation Style

- **Use Markdown** for all documentation
- **Follow existing formatting** patterns
- **Use headers consistently** (## for sections, ### for subsections)
- **Include code examples** in every section
- **Use backticks** for inline code: `` `command` ``
- **Use fenced code blocks** with language specification:
  ````bash
  ```bash
  opencode read file.txt
  ```
  ````

### Example Format

All examples should follow this structure:

```bash
# Description of what the example does
opencode command --option="value" argument

# Expected output (if applicable)
# Output line 1
# Output line 2

# Explanation of the example
# This command does X because Y...
```

### Naming Conventions

- **Directories**: Use lowercase with hyphens: `basic-commands`
- **Files**: Use lowercase with hyphens: `quick-start.md`
- **Variables**: Use descriptive names in examples
- **Commands**: Show both simple and complex versions

## 📁 Project Structure

```
opencode-howto-guide/
├── 01-basic-commands/      # Module 1: Core operations
│   ├── examples/           # Practical examples
│   ├── patterns.md         # Common patterns
│   └── README.md           # Main documentation
├── 02-file-reading/        # Module 2: File reading
├── 03-file-operations/     # Module 3: File editing
├── 04-search-tools/        # Module 4: Search operations
├── 05-bash-integration/    # Module 5: Shell integration
├── 06-task-automation/     # Module 6: Automation basics
├── 07-automation/          # Module 7: Advanced automation
├── 08-advanced-features/   # Module 8: Power user features
├── 09-workflows/           # Module 9: Complete workflows
├── 10-openwork/            # Module 10: OpenWork integration
├── resources/              # Images, logos, templates
├── .gitignore              # Git ignore rules
├── CODE_OF_CONDUCT.md      # Community guidelines
├── CONTRIBUTING.md         # This file
├── LICENSE                 # MIT License
└── README.md              # Main project README
```

### Adding New Content

1. **Determine the appropriate module** for your content
2. **Create necessary directories** within the module
3. **Add examples** in the `examples/` directory
4. **Update the module's README.md**
5. **Update the learning roadmap** if adding new modules

## 🧪 Testing

### Testing Your Contributions

All examples should be tested:

1. **Run commands yourself** to ensure they work
2. **Test edge cases** and error conditions
3. **Verify output** matches expectations
4. **Check cross-platform compatibility** when possible

### Testing Checklist

- [ ] Commands execute without errors
- [ ] Examples produce expected output
- [ ] File paths work correctly
- [ ] Options and arguments are valid
- [ ] No sensitive data in examples
- [ ] All links work correctly

## 🐛 Reporting Issues

When reporting issues, please include:

1. **Clear description** of the problem
2. **Steps to reproduce**
3. **Expected behavior**
4. **Actual behavior**
5. **Environment information** (OS, OpenCode version)
6. **Screenshots or error messages** if applicable

Use the issue templates if available, or follow this format:

```
## Description
[What happened?]

## Steps to Reproduce
1. [First step]
2. [Second step]
3. [Third step]

## Expected Behavior
[What should have happened?]

## Actual Behavior
[What actually happened?]

## Environment
- OS: [e.g., Ubuntu 22.04]
- OpenCode Version: [e.g., 1.2.3]
- Shell: [e.g., bash 5.1.16]

## Additional Context
[Any other information that might help]
```

## 🔀 Pull Request Process

### Before Submitting

1. **Ensure your branch is up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```
2. **Run tests** on your changes
3. **Check formatting** and style guidelines
4. **Update documentation** if needed
5. **Squash commits** if there are many small changes

### PR Description Template

Provide a clear PR description:

```
## Summary
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Other (please describe)

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing Performed
- [ ] Tested commands work
- [ ] Verified examples produce expected output
- [ ] Checked cross-references

## Related Issues
Closes #123, Fixes #456

## Screenshots
[If applicable]
```

### Review Process

1. **Automated checks** will run on your PR
2. **Maintainers will review** your changes
3. **Address feedback** if requested
4. **Once approved**, your PR will be merged

## 👥 Community

### Getting Help

- **Check documentation** first
- **Search existing issues**
- **Ask in discussions** if available
- **Be patient and respectful**

### Recognition

Contributors will be:
- Listed in the contributor's section
- Acknowledged in release notes
- Given credit for their work

### Becoming a Maintainer

Consistent contributors may be invited to become maintainers. This involves:
- Regular contributions over time
- Quality contributions
- Helping other contributors
- Understanding project goals

## 📝 License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).

## 🙏 Thank You!

Your contributions help make OpenCode more accessible to everyone. Thank you for your time and effort!

---

*This CONTRIBUTING.md is adapted from the Claude How-To Guide and other open source projects.*