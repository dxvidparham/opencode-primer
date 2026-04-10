<div align="center">

# 🌐 06. Web Tools

**Research and data collection with web fetching and searching**

[![Module Level](https://img.shields.io/badge/Level-Intermediate-orange)]()
[![Time Required](https://img.shields.io/badge/Time-45_min-yellow)]()
[![Prerequisites](https://img.shields.io/badge/Prerequisites-Module_05-blue)]()
[![OpenCode Version](https://img.shields.io/badge/OpenCode-1.0+-purple)]()

[⬅️ Previous Module](../05-question-todo/)] • [🏠 Main Menu](../README.md) • [Next Module ➡️](../07-skills-agents/)

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
# 06 Web Tools

The `webfetch` and `websearch` tools allow opencode to retrieve information from the web, enabling research, documentation gathering, and real-time data access.

## webfetch Tool

The `webfetch` tool downloads content from URLs and converts it to various formats for analysis and use within opencode sessions.

### Basic Usage

```bash
# Fetch a webpage as markdown
Fetch https://opencode.ai/docs

# Fetch as plain text  
Fetch https://example.com with format: text

# Fetch HTML content
Fetch https://example.com with format: html
```

### Parameters

```javascript
// Example webfetch structure
{
  url: "https://opencode.ai/docs",
  format: "markdown",  // Options: markdown, text, html
  timeout: 30          // Timeout in seconds (max 120)
}
```

### Format Differences

1. **markdown** (default)
   - Best for documentation, blogs, articles
   - Clean structure, preserves links and formatting
   - Easy to read and process

2. **text**
   - Raw text extraction
   - Removes HTML tags and formatting
   - Useful for data scraping

3. **html**
   - Raw HTML source
   - For custom parsing or analysis
   - Preserves original structure

### Common Use Cases

#### 1. Documentation Research
```bash
# Fetch API documentation
Fetch https://developer.github.com/v3/

# Get library documentation  
Fetch https://reactjs.org/docs/getting-started.html

# Read specification documents
Fetch https://json-schema.org/learn/
```

#### 2. Data Collection
```bash
# Get current data (weather, stocks, etc.)
Fetch https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41

# Download configuration templates
Fetch https://raw.githubusercontent.com/example/configs/main/docker-compose.yml

# Retrieve data sets
Fetch https://data.example.com/dataset.csv
```

#### 3. Content Analysis
```bash
# Compare documentation versions
Fetch https://docs.python.org/3.8/
Fetch https://docs.python.org/3.12/

# Analyze blog content
Fetch https://example.com/blog/2024/best-practices

# Get competitor information
Fetch https://competitor.com/products
```

### Best Practices

1. **Check URL validity** before fetching
2. **Use appropriate format** for your needs
3. **Set reasonable timeout** for large pages
4. **Handle rate limits** on APIs
5. **Respect robots.txt** and terms of service

### Error Handling

```bash
# Timeout handling
Fetch https://slow-api.example.com with timeout: 10

# Invalid URLs will fail gracefully
Fetch https://nonexistent.example.com

# Permission issues
Fetch https://private.example.com/secret-data
```

## websearch Tool

The `websearch` tool performs web searches to find relevant information, resources, and answers.

### Basic Usage

```bash
# Simple search
Search: "opencode tutorial"

# Technical search
Search: "React useState hook examples"

# Problem-solving search
Search: "How to fix 'Module not found' error in Node.js"
```

### Search Patterns

1. **Documentation Searches**
   ```bash
   Search: "Python argparse documentation"
   Search: "Next.js API routes examples"
   Search: "Docker compose file reference"
   ```

2. **Error Resolution**
   ```bash
   Search: "TypeError: Cannot read property of undefined"
   Search: "ERR_SSL_PROTOCOL_ERROR Node.js"
   Search: "HTTP 429 rate limit exceeded"
   ```

3. **Best Practices**
   ```bash
   Search: "JavaScript async await best practices"
   Search: "React component testing patterns"
   Search: "REST API design principles"
   ```

4. **Technology Comparisons**
   ```bash
   Search: "MongoDB vs PostgreSQL comparison 2024"
   Search: "React vs Vue vs Svelte benchmarks"
   Search: "AWS Lambda vs Azure Functions"
   ```

### Integration Examples

#### Example 1: Research-Based Development

```bash
# User: "Create a weather dashboard"

# opencode might:
1. Search: "weather API free tier 2024"
2. Fetch: https://openweathermap.org/api
3. Search: "weather dashboard React components"
4. Fetch: https://github.com/react-weather-components
5. Search: "chart libraries for weather data"
```

#### Example 2: Problem Solving

```bash
# Error encountered: "Uncaught ReferenceError: require is not defined"
1. Search: "require is not defined browser fix"
2. Fetch relevant Stack Overflow answer
3. Search: "ES6 module imports vs CommonJS"
4. Fetch documentation on module systems
5. Apply fix based on findings
```

#### Example 3: Learning New Technology

```bash
# User: "Teach me about GraphQL"

1. Search: "GraphQL tutorial beginners 2024"
2. Fetch: https://graphql.org/learn/
3. Search: "GraphQL vs REST comparison"
4. Fetch: https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/
5. Search: "GraphQL implementation examples"
```

### Search Strategies

1. **Start Broad, Then Narrow**
   ```bash
   # Initial broad search
   Search: "authentication systems"
   
   # Narrow down based on findings
   Search: "JWT authentication Node.js"
   
   # Specific implementation
   Search: "passport-jwt strategy examples"
   ```

2. **Use Specific Keywords**
   ```bash
   # Vague search
   Search: "how to make website faster"
   
   # Specific search
   Search: "website performance optimization lighthouse scores"
   ```

3. **Include Version Numbers**
   ```bash
   # Without version (might be outdated)
   Search: "React hooks tutorial"
   
   # With version (current)
   Search: "React 18 hooks tutorial"
   ```

4. **Check Multiple Sources**
   ```bash
   # Official docs
   Search: "site:reactjs.org useEffect cleanup"
   
   # Community resources
   Search: "useEffect cleanup function examples"
   
   # Video tutorials
   Search: "useEffect cleanup YouTube"
   ```

## Real-world Workflows

### Workflow 1: Building a Feature with Research

```bash
# Task: "Add OAuth authentication"
1. Question: "Which OAuth providers should we support?"
   - Google
   - GitHub
   - Facebook
   - Custom OAuth2 server
2. Based on selection, search for implementation guides
3. Fetch relevant documentation
4. Create implementation todo list
```

### Workflow 2: Debugging Complex Issues

```bash
# Error: "Maximum call stack size exceeded"
1. Search: "maximum call stack size error JavaScript"
2. Identify common causes:
   - Infinite recursion
   - Large data structures
   - Circular dependencies
3. Search: "debug recursion JavaScript Chrome DevTools"
4. Apply debugging techniques
5. Test and verify fixes
```

### Workflow 3: Technology Evaluation

```bash
# Decision: "Choose a database for new project"
1. Search: "database comparison 2024 web applications"
2. Fetch comparison articles
3. Search: "MongoDB vs PostgreSQL vs MySQL benchmarks"
4. Search: "database scaling strategies"
5. Search: "ORM libraries for each database"
6. Make informed decision based on research
```

## Advanced Techniques

### Chaining Web Operations

```bash
# Multi-step research process
1. Search: "best React state management libraries"
2. Fetch top 3 library documentations
3. Search: "Redux vs Zustand vs Recoil comparison"
4. Fetch benchmark results
5. Search: "migration guides between state libraries"
```

### Caching and Reuse

```bash
# Common searches to cache:
Search: "Node.js version compatibility matrix"
Search: "JavaScript ES2024 features"
Search: "CSS Grid vs Flexbox cheatsheet"
Search: "common HTTP status codes"
```

### Rate Limit Management

```bash
# When doing multiple searches/fetches:
1. Space out requests with delays
2. Cache results locally when possible
3. Use search engines that allow API access
4. Respect website terms of service
```

## Security Considerations

1. **URL Validation**
   - Verify URLs before fetching
   - Avoid malicious or suspicious domains
   - Check for HTTPS when dealing with sensitive data

2. **Content Safety**
   - Be cautious with user-generated content URLs
   - Sanitize fetched content when displaying
   - Avoid executing code from fetched sources

3. **API Keys and Secrets**
   - Never hardcode API keys in search queries
   - Use environment variables for sensitive data
   - Rotate credentials regularly

## Performance Tips

1. **Limit Content Size**
   ```bash
   # For large pages, fetch only what you need
   Search for specific sections instead of entire sites
   ```

2. **Parallel Operations**
   ```bash
   # When researching multiple topics
   Search: "React performance optimizations"
   Search: "React bundle size reduction"
   Fetch both sets of results in parallel
   ```

3. **Local Storage**
   ```bash
   # Cache frequently accessed information
   Store API documentation locally
   Keep reference materials in the project
   ```

## Integration with Other Tools

### With question Tool
```bash
# Research before asking questions
1. Search: "popular authentication methods 2024"
2. Fetch results
3. Question: "Based on current trends, which authentication method should we use?"
   Options populated from research
```

### With todowrite Tool
```bash
# Research-based task planning
1. Search: "microservices architecture patterns"
2. Fetch architecture guides
3. Create todo list for implementing patterns
```

### With bash Tool
```bash
# Download and process web content
1. Fetch: https://raw.githubusercontent.com/example/data.json
2. Use bash to parse and analyze data
3. Generate reports or visualizations
```

## Troubleshooting

### Common Issues

1. **Network Timeouts**
   - Increase timeout parameter
   - Check network connectivity
   - Try alternative URLs

2. **Content Format Issues**
   - Try different format (markdown/text/html)
   - Clean HTML with preprocessing
   - Use custom parsers for complex pages

3. **Rate Limiting**
   - Implement delays between requests
   - Use cached results when available
   - Contact API providers for higher limits

4. **Blocked Content**
   - Check robots.txt restrictions
   - Use official APIs when available
   - Respect website terms of service

### Debug Commands

```bash
# Test connectivity
Search: "test connectivity"
Fetch: https://httpbin.org/get

# Verify formatting
Fetch: https://example.com with format: markdown
Fetch: https://example.com with format: text
Fetch: https://example.com with format: html

# Check response times
Search with timeout: 5  # Quick timeout for testing
```

## Examples Directory

See `/examples/` for practical implementations:
- API integration workflows
- Data collection pipelines
- Documentation generators
- Research automation scripts

## Next Steps

After mastering web tools, proceed to:
- **Module 07**: Skills and agents for specialized automation
- **Module 08**: MCP server integration for extended capabilities
- **Module 09**: Advanced features including plugins
- **Module 10**: OpenWork collaboration platform

---


---

## 📄 License & Attribution

This module is part of the [OpenCode Primer](../README.md).

**License:** MIT - See [LICENSE](../LICENSE) for details.

**Last Updated:** April 2026  
**OpenCode Version:** 1.0+ compatible

---

