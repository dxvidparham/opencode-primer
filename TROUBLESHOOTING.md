# OpenCode Troubleshooting Guide

## Common Issues and Solutions

### 1. Tool Execution Problems

#### Issue: Command not working
```
Error: Command failed or tool not responding
```

**Solutions:**
- Check command syntax: `bash --help` for bash commands
- Verify tool name: `read`, `edit`, `write`, etc.
- Ensure proper file paths (absolute or relative)
- Check file permissions with `bash ls -la`

#### Issue: File not found
```
Error: File not found or path does not exist
```

**Solutions:**
- Use `glob` to find the file: `glob **/filename.*`
- Check current directory: `bash pwd`
- Verify file exists: `bash ls -la /path/to/file`
- Use absolute paths: `/home/user/project/file.js`

#### Issue: Permission denied
```
Error: Permission denied when reading/writing files
```

**Solutions:**
- Check permissions: `bash ls -la filename`
- Run with appropriate user permissions
- Use `sudo` if needed (but be cautious)
- Change file permissions: `bash chmod +r filename`

### 2. File Operation Issues

#### Issue: Edit tool not finding text
```
Error: oldString not found in content
```

**Solutions:**
- Verify exact text including whitespace
- Use more surrounding context in `oldString`
- Check for hidden characters or line endings
- Use `grep` to find the text first: `grep "text" file.js`

#### Issue: Multiple matches in edit
```
Error: Found multiple matches for oldString
```

**Solutions:**
- Provide more unique surrounding context
- Use line numbers: `@file.js:15` to locate specific instance
- Edit each occurrence separately if needed
- Use `replaceAll: true` if intentional

#### Issue: Large file operations timing out
```
Error: Operation timeout or slow performance
```

**Solutions:**
- Read specific lines instead of entire file: `read file.js offset:100 limit:50`
- Use `grep` to find relevant sections first
- Process in smaller chunks
- Consider file size and system resources

### 3. Search and Discovery Issues

#### Issue: grep not returning expected results
```
No matches found or incomplete results
```

**Solutions:**
- Check regex pattern syntax
- Use simpler patterns first
- Verify file inclusion patterns
- Check case sensitivity
- Use `glob` to verify files exist

#### Issue: glob pattern too broad/specific
```
Too many or too few files matched
```

**Solutions:**
- Start with simple patterns: `*.js`
- Use more specific patterns: `src/**/*.test.js`
- Combine patterns: `{*.js,*.ts,*.jsx}`
- Check directory context: `glob pattern` vs `glob path pattern`

### 4. Bash Integration Issues

#### Issue: Shell command failing
```
Command returns non-zero exit code
```

**Solutions:**
- Test command directly in terminal first
- Check command syntax and arguments
- Verify dependencies are installed
- Check environment variables
- Use absolute paths for commands

#### Issue: Command output too large
```
Output truncated or tool times out
```

**Solutions:**
- Use output redirection: `command > output.txt`
- Filter results: `command | grep pattern`
- Use pagination: `command | head -50`
- Process in smaller batches

#### Issue: Environment differences
```
Command works in terminal but not in opencode
```

**Solutions:**
- Check PATH environment variable
- Verify current working directory
- Check user permissions and context
- Compare shell environments

### 5. Web Tool Issues

#### Issue: webfetch timeout
```
Timeout fetching URL or slow response
```

**Solutions:**
- Increase timeout: `with timeout: 60`
- Check network connectivity
- Verify URL is accessible
- Try alternative format (text vs markdown)
- Use cached content if available

#### Issue: Invalid or blocked URL
```
Cannot fetch URL or access denied
```

**Solutions:**
- Verify URL syntax and accessibility
- Check for rate limiting
- Respect robots.txt and terms of service
- Use official APIs when available
- Consider CORS restrictions for web apps

#### Issue: Content format problems
```
Fetched content not in expected format
```

**Solutions:**
- Try different formats: `with format: text`
- Clean HTML with preprocessing
- Extract specific sections only
- Use custom parsing if needed

### 6. Interactive Tool Issues

#### Issue: question tool not providing expected options
```
Missing options or unclear choices
```

**Solutions:**
- Use "custom" option to type your own answer
- Ask more specific questions
- Break complex decisions into multiple questions
- Provide context in question description

#### Issue: todowrite not updating properly
```
Todo list not reflecting current status
```

**Solutions:**
- Mark tasks `completed` immediately after finishing
- Only have one task `in_progress` at a time
- Update priorities as tasks evolve
- Cancel tasks that become irrelevant

### 7. Agent and Skill Issues

#### Issue: Agent not starting
```
Explore or general agent fails to launch
```

**Solutions:**
- Verify agent type: `explore` or `general`
- Check prompt clarity and specificity
- Ensure task is appropriate for autonomous handling
- Check system resources (memory, CPU)

#### Issue: Skill not found
```
Cannot load specified skill
```

**Solutions:**
- Verify skill name is correct
- Check if skill is available in your opencode version
- Consider creating custom workflow instead
- Use built-in tools for similar functionality

#### Issue: Agent results incomplete
```
Agent returns partial or unexpected results
```

**Solutions:**
- Increase thoroughness level: `very thorough`
- Provide more detailed prompts
- Break complex tasks into smaller ones
- Verify agent has necessary context

### 8. MCP Server Issues

#### Issue: Cannot connect to MCP server
```
Connection failed or server not responding
```

**Solutions:**
- Verify server configuration in `~/.config/opencode/mcp/`
- Check server process is running
- Validate network connectivity
- Check authentication credentials

#### Issue: Server permission errors
```
Server operations denied due to permissions
```

**Solutions:**
- Verify user permissions for server operations
- Check database user privileges
- Validate API token scopes and permissions
- Test with minimal required permissions

#### Issue: Server performance problems
```
Slow responses or timeouts from server
```

**Solutions:**
- Check server resource usage
- Optimize queries or operations
- Implement caching where appropriate
- Use connection pooling

### 9. OpenWork Issues

#### Issue: Cannot connect to OpenWork
```
OpenWork server unreachable or authentication failed
```

**Solutions:**
- Verify OpenWork server URL
- Check authentication token
- Test network connectivity
- Verify OpenWork service status

#### Issue: Workspace sync problems
```
Changes not syncing or conflicts detected
```

**Solutions:**
- Force resync: `openwork sync --force`
- Resolve conflicts manually
- Check workspace permissions
- Verify network connectivity

#### Issue: Collaboration session issues
```
Cannot join or problems in collaborative sessions
```

**Solutions:**
- Verify session ID is correct
- Check user permissions for workspace
- Ensure all users have compatible opencode versions
- Restart session if persistent issues

### 10. Performance Issues

#### Issue: OpenCode running slowly
```
General performance degradation
```

**Solutions:**
- Check system resources (memory, CPU)
- Limit concurrent operations
- Clear cache if applicable
- Update to latest opencode version
- Check for plugin conflicts

#### Issue: High memory usage
```
Memory consumption growing over time
```

**Solutions:**
- Limit size of operations
- Process large files in chunks
- Restart opencode session periodically
- Monitor with system tools

#### Issue: Network latency
```
Slow network operations affecting performance
```

**Solutions:**
- Use local resources when possible
- Implement caching strategies
- Batch network operations
- Consider offline workflows

### 11. Installation and Setup Issues

#### Issue: OpenCode not installing
```
Installation fails or command not found
```

**Solutions:**
- Verify system requirements
- Check installation method (npm, binary, etc.)
- Verify PATH includes opencode binary
- Check for conflicting installations

#### Issue: Plugin not working
```
Custom plugin fails to load or function
```

**Solutions:**
- Verify plugin directory: `~/.config/opencode/plugins/`
- Check plugin syntax and exports
- Review opencode logs for errors
- Test plugin with minimal configuration

#### Issue: Configuration problems
```
OpenCode not using expected configuration
```

**Solutions:**
- Verify config file location
- Check config file syntax
- Restart opencode after config changes
- Use `--config` flag to specify alternative config

### Debugging Techniques

#### 1. Enable Debug Logging
```bash
# Run opencode with debug output
opencode --debug

# Or set debug environment variable
export OPENCODE_DEBUG=1
opencode
```

#### 2. Check Logs
```bash
# View opencode logs
cat ~/.local/share/opencode/logs/opencode.log

# Check system logs
journalctl -u opencode  # if running as service
```

#### 3. Test Minimal Configuration
```bash
# Run with minimal config
opencode --no-plugins --no-config

# Test individual tools
opencode
> bash echo "test"
> read /tmp/test.txt
```

#### 4. Verify Environment
```bash
# Check opencode version
opencode --version

# Check system information
bash uname -a
bash node --version  # if Node.js based

# Check dependencies
bash which git
bash which docker
```

#### 5. Reproduce Issue
```bash
# Create minimal reproduction
mkdir /tmp/test
cd /tmp/test
echo "test content" > test.txt
opencode
> read test.txt
> edit test.txt (replace "test" with "TEST")
```

### Getting Help

#### 1. Check Documentation
- Official docs: https://opencode.ai/docs
- GitHub repository: https://github.com/anomalyco/opencode
- OpenWork docs: https://openworklabs.com/docs

#### 2. Search Existing Issues
```bash
# Use websearch for similar issues
Search: "opencode [your issue] github issues"
Search: "opencode troubleshooting [specific tool]"
```

#### 3. Community Support
- GitHub Discussions
- Community forums
- Stack Overflow (tag: opencode)

#### 4. Report New Issue
When reporting issues, include:
1. OpenCode version
2. Operating system
3. Steps to reproduce
4. Expected vs actual behavior
5. Error messages/logs

### Prevention Best Practices

#### 1. Regular Maintenance
- Keep opencode updated
- Clean up old sessions/files
- Monitor disk space
- Backup configurations

#### 2. Safe Operations
- Test commands in isolated environment first
- Use version control for important changes
- Implement undo/backup strategies
- Verify destructive operations

#### 3. Performance Monitoring
- Monitor system resources
- Implement logging for critical operations
- Use profiling for performance issues
- Optimize frequent operations

#### 4. Security Practices
- Regular security updates
- Principle of least privilege
- Audit third-party plugins
- Secure sensitive data

### Recovery Procedures

#### 1. File Recovery
```bash
# Check git history
bash git log --oneline
bash git diff HEAD~1

# Restore from backup
bash cp backup/file.js original/file.js

# Use file recovery tools
bash ls -la .git/index
```

#### 2. Session Recovery
```bash
# List recent sessions
opencode --list-sessions

# Restore session
opencode --restore-session session-id

# Export session data
opencode --export-session session-id > recovery.json
```

#### 3. Configuration Recovery
```bash
# Restore from backup config
cp ~/.config/opencode/backup/config.json ~/.config/opencode/config.json

# Reset to defaults
rm ~/.config/opencode/config.json
opencode  # Will create fresh config
```

### Emergency Commands

#### Force Quit
```bash
# If opencode becomes unresponsive
Ctrl+C  # Multiple times if needed

# Kill process
bash pkill -f opencode

# Force kill if needed
bash kill -9 $(pidof opencode)
```

#### Reset State
```bash
# Clear cache
rm -rf ~/.cache/opencode

# Reset sessions
rm -rf ~/.local/share/opencode/sessions

# Fresh start with backup
mv ~/.config/opencode ~/.config/opencode.backup
opencode  # Creates fresh config
```

Remember: Always have backups of important work and test changes in a safe environment before applying to production systems.