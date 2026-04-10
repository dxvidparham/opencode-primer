// Main TypeScript file for file operations examples
import { Calculator } from './calculator';
import { User } from './models';

export class App {
  private calculator: Calculator;
  private users: User[];

  constructor() {
    this.calculator = new Calculator();
    this.users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ];
  }

  run() {
    console.log('=== OpenCode File Operations Example ===');
    
    // Test calculator operations
    console.log('Calculator Tests:');
    console.log(`5 + 3 = ${this.calculator.add(5, 3)}`);
    console.log(`10 - 4 = ${this.calculator.subtract(10, 4)}`);
    console.log(`6 * 7 = ${this.calculator.multiply(6, 7)}`);
    console.log(`15 / 3 = ${this.calculator.divide(15, 3)}`);
    
    // Test user operations
    console.log('\nUser Operations:');
    this.users.forEach(user => {
      console.log(`User: ${user.name} (${user.email})`);
    });
    
    // This line has an error for testing purposes
    const undefinedVariable = someUndefinedFunction();
  }
}

// Initialize and run the app
const app = new App();
app.run();