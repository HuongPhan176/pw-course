# Playwright automation: lesson 02
## Verson Control System
1. **Definition:** a system to manage versions of an object (file, repositoy,...) that allow user to view the history of changes (when it's changed, what to be changed, who made the change) and also allow user to revert previous changes
2. **Types of Version control system**: Local, Centralize, Distributed. The most popular type is Distributed Version Control System. Git is one of the distributed version control system that is widely used currently.

## Git
### 1. Git vs. Github
| Git | Github|
|-----|-------|
|Git is an local software tool/app | GitHub is a web-based service
| installed locally on a developer's machine | web-based host |
| common line tool | offers a graphical user interface (GUI) via its website |
| a free, open-source distributed version control system | provides hosting for Git repositories |
| having all features of a version control system | having features of version control system and other features (GitHub Actions, GitHub Co-pilot) |

### 2. Git states
- Working directory: new file or changes in an existing file. When new git repository is initialized by `git init` command line, new files and or modifying in existing files under that repo (folder) will be stored in working directory.
- Staging area: all files/changes marked to be included in the next commit snapshot. You explicitly add changes to the staging area using command `git add` to prepare them for committing.
- Repository: commits (versions). Changes in staging area have been permanently saved into the Git repository's history (your local database) as a new commit by command `git commit -m"message"`.

*Note: to add files/changes to staging area, use `git add <file_path>` for 1 file only; use `git add .` for all files; use `git add <folder_path>/*` for all files in a folder*

![Git summary](/tests/lesson-02/git-summary.png)
### 3. Git config
Git config to let Git know who you are.
To set your account's default identity use: global
```
git config --global user.name “<user_name>”
git config --global user.email “<your_email>”
```
To set the identity only in this repository, use: local
```
git config user.name “<user_name>”
git config user.email “<your_email>”
```
*Note: the order of priority for configuration levels is: local > global*

### 4. Git commands
- Git status: to check status of staging area (highlighted in green) and working directory (highlighted in red ).
- Git log: to check list of commits

### 5. Git commit message convention
```
<type>: <short_description>
```
- types: chore (small changes - fix typo, remmove unused file,... ) ; feat (add new feature, new test case); fix (fix an existing test)
- short_description: <= 50 character, prefer written in english

### 6. Git - simple workflow
![simple git workflow](/tests/lesson-02/git-simple-flow.png)

## JavaScript Basic
### 1. Syntax to print message to console
- `console.log()` to output messages, variables or objects to the console.
- to run code in a file, use command: `node <file_path>`
- put // before a code snippet to designate that snippet as a comment which will be ignored during execution. Put /* in the beggining and */ at the end of a code block to comment that block

### 2. Variables and Constants
**Variables:** 
- Variables are containers for storing data whose values can be reassigned during program execution. They are declared using `var` or `let`.
- `var` : This is the older way to declare variables. `var` declarations are function-scoped or globally-scoped, meaning they are accessible throughout the function they are declared in, or globally if declared outside any function. `var` variables can be redeclared and reassigned.
    ```
    var x = 1;
    x = "Hello"; // Reassigned
    var x = "2"; // Redeclared
    ```
    ```
    {
        var a = 10;
    }
    console.log(a); // OK -> print 10 in console
    ```

- `let`: `let` provides block-scoped variables. This means a `let` variable is only accessible within the block (e.g., if statement, for loop, or function) where it is declared. `let` variables can be reassigned but not redeclared within the same scope
    ```
    let y = 1;
    y = "Hello"; // Reassigned
    // let y = 2; // Error: Identifier 'y' has already been declared
    ```
    ```
    {
        let a = 10;
    }
    console.log(a); // Error: b is not defined
    ```

**Constants:**
- Constants are containers for storing data whose values cannot be reassigned after their initial declaration. They are declared using `const`.
    ```
    const PI = 3.14159;
    // PI = 3.14; // Error: Assignment to constant variable.
    ```

### 3. Data Type
- Primitive types:
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
    - BigInt

- Reference types:
    - Object

### 4. JavaScript Basic Operators
**Comparison Operators**
- JavaScript comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison's result.
- Equal to (==): Checks if the values of two operands are equal, performing type coercion if necessary.
    ```
    5 == "5" // true (convert string to number)
    5 == "6" // false (convert string to number)
    true == 1 // true (true convert to 1)
    false == 0 // true (false convert to 0)
    ```
- Strictly equal to (===): Checks if the values and types of two operands are equal, without performing type coercion.
    ```
    5 == "5" // false (different data types)
    5 == 5 // true (same data type, same value)
    true == 1 // false (different data types)
    false == 0 // false (different data types)
    ```
- Not equal to (!=): Checks if the values of two operands are not equal, performing type coercion if necessary.
- Strictly not equal to (!==): Checks if the values or types of two operands are not equal, without performing type coercion.
- Greater than (>): Checks if the left operand's value is greater than the right operand's value.
- Less than (<): Checks if the left operand's value is less than the right operand's value.
- Greater than or equal to (>=): Checks if the left operand's value is greater than or equal to the right operand's value.
- Less than or equal to (<=): Checks if the left operand's value is less than or equal to the right operand's value.

**Logical Operators**
- Logical AND (&&): returns true only if both operands are truthy.
- Logical OR (||): returns true if at least one operand is truthy

*Note: further logical operator: NOT(!) - inverts the boolean value of its single operand. It always returns a boolean value.*

**Unary Operators**
- Unary operators are operators that take only one operand.

- Increment (++): Adds one to its operand. Can be used as a prefix or postfix operator.
    - Prefix (++x): Increments the value first, then uses the new value in the expression
    - Postfix (x++): Uses the current value in the expression, then increments it.
    ```
    let a = 10;
    b = ++a; // a = a + 1 (=11), then assign b = a (=11)

    let c = 10;
    d = c++; // assign d = c (=10), then c = c + 1 (=11)
    ```

- Decrement (--): Subtracts one from its operand. Can also be used as a prefix or postfix operator, with similar behavior to the increment operator.
    - Prefix (--x): Decrements the value first, then uses the new value.
    - Postfix (x--): Uses the current value, then decrements it.

**Arithmetic Operators**
- Arithmetic operators perform arithmetic on numbers (literals or variables): Addition (+) , Subtraction (-) , Multiplication (*) , Division (/) , Modulus/Remainder (%)

*Note: when dividing 0 -> returns result as infinity*

## Markdown
Markdown is a lightweight markup language used for creating formatted text using a plain-text editor. It allows for the addition of formatting elements like headings, bulleted lists, and code blocks to plain text without requiring a formal text editor or the direct use of HTML tags.

[How to write Markdown](https://www.youtube.com/watch?v=RKhnKmsVb_k)

## Conditional Statements - If statement
**Conditional statement**
- if
- if...else
- if...else if...else
- switch...case

**Syntax if conditional statement**
```
if (conditions) {
    //code
}
```
**Example**
```
let a = 12;
if (a > 10) {
  console.log("a greater than 10");
}

if (a < 10) {
  console.log("a less than 10");
}
```

## Loop Statements - For loop
**Loops**
- for (i)
- for (of)
- for (each)
- for (in)
- while
- do...while

**Syntax for (i) loop**
```
for (initialization; condition; increment/decrement) {
  // Code to be executed in each iteration
}
```

**example**
```
// sum from 1 to 10
let sum = 0;
for (let i = 1; i <= 10 ; i++) {
    sum +=i;
}
console.log (sum)
```