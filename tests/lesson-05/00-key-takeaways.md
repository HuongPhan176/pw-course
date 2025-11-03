# Playwright automation: lesson 05
## I/ Functions advance
### 1. Function expression
A function expression in JavaScript is a way to define a function as part of an expression, typically by assigning it to a variable or passing it as an argument to another function.

```
// Function Declaration (khai báo hàm)
function add(a, b) {
    return a + b;
}

// Function Expression (biểu thức hàm)
const add = function(a, b) {
    return a + b;
};

// same syntax to call the function
console.log(add(2, 3)); // 5
```
### 2. Lamda function (Arrow function)
A lambda expression also known as arrow-function is a function without a name defined using the arrow => syntax
```
// Function Declaration (khai báo hàm)
function add(a, b) {
    return a + b;
}

// Function Expression (biểu thức hàm)
const add = function(a, b) {
    return a + b;
};

//Arrow function (Lamda)
const add = (a,b) => {
    return a + b;
};
```

**Implicit Return**: For single-expression arrow functions, the return keyword can be omitted, and the expression's result is implicitly returned.
```
const add = (a, b) => a + b;
```

If the function body requires multiple statements, curly braces `{}` are needed, and an explicit `return` is required.
```
const calculate = (a,b) => {
    const sum = a + b;
    return sum * 2;
};
```

Note:
```
// No argument => must have empty parentheses
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();

// One argument => parentheses is optional
const double = x => x * 2;
const triple = (x) => x * 3;

// Two or more than two arguments => must have parentheses
const multiply = (x, y) => x * y;
```

### 3. Anonymous function
An anonymous function is simply a function that does not have a name. Anonymous function is used to be arguments of other functions (callback) or as an immediately invoked function execution.

```
// 1. Assigned for a variable
const anonymousFunc = function() {
    console.log("I'm anonymous but stored in a variable!");
};
anonymousFunc();

const greet = function( str ) {
	console.log("Welcome to ", str);
};  
greet("GeeksforGeeks!");
```
```
// 2. used as callback
setTimeout(function() {
    console.log("Anonymous callback!");
}, 1000);

const arrs = [1, 2, 3, 4];
arrs.map(arr => arr *2) //Lamda function as callback
```
## II/ DOM
### 1.Definition
DOM stands for Document Object Model that represents the structure of an HTML or XML document as a tree of objects.

In the context of HTML and the Document and Object Model (DOM), elements are typically definied by tags. Most of html elements consist of start tag, content and end tag.

```
\\ Syntaxt of an html element
<tagname >Your Contents... </tagname>

<option>United States</option>
```

- Some of specific elements that do not have an end tag are known as self-closing tags. E.g: `<img src="image.jpg" alt="Image description"/>` or `<br/>`, `<hr/>`
- Html elements can have attributes that provide additional information. Attributes are always specified in the start tag and usually come in name/value pairs like: name="value"

### 2. Common HTML tags
#### 2.1. Document structure tags
- `<!DOCTYPE html>`: Declares the document type and version of HTML being used.
- `<html>`: The root element of an HTML page, enclosing all other HTML elements.
- `<head>`: Contains metadata about the HTML document, such as the page title, character set, and links to external stylesheets.
- `<title>`: Defines the title of the HTML document, displayed in the browser tab or window title bar.
- `<body>`: Contains the visible content of the HTML document, including text, images, and other elements.
- `<div>`: A block-level container used to group other HTML elements for styling or scripting purposes.
- `<span>`: An inline container used to group inline-level elements for styling or scripting.
- `<header>`, `<footer>`, `<nav>`, `<section>`: semantic tags

#### 2.2. Text content tags
- `<h1>` to `<h6>` : Defines headings
- `<p>`: Defines a paragraph
- `<a>`: Defines a hyperlink
- `<img>`: Defines an image
- `<ul>`, `<ol>`, `<li>`: Defines a list

#### 2.3. Form tags
- `<form>`: Defines an HTML form for user input.
- `<input>`: Defines an input control (text, password, checkbox, radio, etc.)
- `<button>`: Defines a clickable button
- `<select>` and `<option>`: Defines a drop-down list and option in a drop-down list
- `<textarea>`: Defines a multiline input control (text area)

## III/ Selector - XPath selector
Three selectors that is normally using in playwright to interact with html elements:
- XPath
- CSS selector
- Playwright selector

There are two main types of XPath: absolute and relative.

**Absolute XPath**
- An absolute XPath provides the full and complete path to an element, starting from the root node of the document
- It begins with a single forward slash (/), indicating the root element (typically html).
- It specifies each nested element in the hierarchy leading to the target element.
- Example: `/html/body/div[2]/ul/li[3]/a`

**Relative XPath**
- A relative XPath starts from any node within the document and does not require the full path from the root.
- It begins with a double forward slash (//), indicating that the search can begin anywhere in the document.
- It typically uses attributes, element names, and other criteria to locate the target element more flexibly.
- Example: `//a[@id='login'] or //div[contains(text(), 'Welcome')]`

## IV/ Playwright basic syntax
### 1.Test and Steps
**Test**
- Basic keyword to declare a test case.
- Need to import test from library playwright/test by code line `import { test } from '@playwright/test';` at the beginning of all test case files.
- Syntax: 
```
test('<test_name>', async ({ page }) => {
    // code blocks
});
```
**Step**
- Keyword to delcare steps of a test case
- Syntax:
```
await test.step('<step_name>', async () => {
    // code blocks
});
```

```
test('<test_name>', async ({ page }) => {
    await test.step('<step_name>', async () => {
        // Code blocks
    });
});
```

### 2. Actions
**Navigate**
- Syntax: `await page.goto('<page_url>');`

**Locate**
- Syntax: `await page.locator('<selector>');`

**Click**
- Single Click Syntax: `.click();`
- Double Click Syntax: `.dblclick();`
- Right Click Syntax: `.click({button: 'right'});`
- Click while holding down a key: `.click({modifiers: ['Shift'],});`

**Input**
- Paste whole content: `.fill('<text>');`
- Enter character by character: `.pressSequentiall('<text>', {delay: 100,});`

**Radio/Checkbox**
- Check whether it is checked, return true/false value: `.isChecked();`
- Check/Uncheck: `.check()`
- Set value for checkbox: `.setChecked(false);` or `.setChecked(true);`

**Select**
- Single selection dropdown: `.selectOption('<option_value>');` or `.selectOption({ label: '<option_label>'});` or `.selectOption({ index: <option_index>});`
- Multiple selection dropdown: `.selectOption(['<option_1>','<option_2>','<option_3>']);`

**Upload file**
- Syntax: `.setInputFiles("<file_path>");`

**Hover**
- Syntax: `.hover();`

** Tex() and Contains() function in selector
-  `text()` to locate element that having a precise match of the entire text string within an element
- `contains()` to locate an element by matching part of its attribute or text content with a specific string. E.g.`//div[contains(text(), ‘I am Alex’)]` or `//button[contains(@class, 'secondary')]`

**Example**
```
import { test, expect } from '@playwright/test';

test('Register success', async ({ page }) => {
    await test.step("Navigate to register page", async () => {
        await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    });
    await test.step("Input valid data for all fields", async () => {
        await page.locator("//input[@id = 'username']").fill("Jay Phan");
        await page.locator("//input[@id = 'email']").pressSequentially('jayphanvn@gmail.com', {
            delay: 100
        });
        let isChecked = page.locator("//input[@id = 'female']").isChecked();
        console.log(isChecked);

        await page.locator("//input[@id = 'female']").check(); //radio
        await page.locator("//input[@id = 'reading']").check(); //checkbox
        await page.locator("//input[@id = 'traveling']").setChecked(true);
        await page.locator("//input[@id = 'reading']").setChecked(false);

        // multiple selection
        await page.locator("//select[@id = 'interests']").selectOption(['science', 'music', 'sports']);

        // single selection matching the value or label
        await page.locator("//select[@id = 'country']").selectOption('canada');
        // single selection matching the label:
        // await page.locator("//select[@id='country']").selectOption({label: 'Canada'});
        // single selection following the index:
        // await page.locator("//select[@id='country']").selectOption({ index: 1});

        await page.locator("//input[@id = 'profile']").setInputFiles("tests/lesson-03/01-lythuyet-git.txt");
    });

    await test.step("Click register button", async () => {
        await page.locator("//button[@type = 'submit']").click();
    });
});
```

**Handle confirmation dialog**
By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

```
import { test, expect } from '@playwright/test';
test('Delete task in to-do list success', async ({ page }) => {
    await test.step("Navigate to To-Do List page", async () => {
        await page.goto('https://material.playwrightvn.com');
        await page.click("//a[@href='03-xpath-todo-list.html']");
    });
    await test.step("Create new task", async () => {
        await page.locator("//input[@id='new-task']").fill("task 1");
        await page.locator("//button[@id='add-task']").click();
    });

    //click delete button => confirmation dialog appears => click ok button in the dialog
    await test.step("Delete created task", async () => {
        await page.locator("//button[text()= 'Delete']").click();
    });
});



