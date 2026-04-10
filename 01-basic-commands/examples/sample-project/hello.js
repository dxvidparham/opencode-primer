// Sample JavaScript file for testing basic opencode commands
console.log("Hello, OpenCode!");
console.log("This is a sample file for learning opencode.");

function greet(name) {
  return `Hello, ${name}! Welcome to OpenCode.`;
}

const users = ["Alice", "Bob", "Charlie"];

users.forEach(user => {
  console.log(greet(user));
});

// Some additional code for testing commands
const data = {
  version: "1.0.0",
  author: "OpenCode User",
  features: ["TUI", "Plan Mode", "Build Mode", "Plugins"]
};

console.log(JSON.stringify(data, null, 2));