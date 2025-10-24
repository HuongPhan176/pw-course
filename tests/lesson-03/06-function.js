// Function - task 1
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(-2.5, 4));

// Function - task 2 - option 1
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    };
    if (c < min) {
        min = c;
    };
    return min;
}

console.log(findMin(3, 1, 2));
console.log(findMin(-5, -10, -3));

// Function - task 2 - option 2
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

console.log(findMin(3, 1, 2));
console.log(findMin(-5, -10, -3));

// Function - task 3
function getTopStudents(students, threshold) {
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name)
        }
    };
    return topStudents;
}

const threshold = 8;
const students = [{ name: 'Alice', score: 7.5 }, { name: 'Bray', score: 8 }, { name: 'Cindy', score: 9.5 }, { name: 'Daisy', score: 7 }, { name: 'Wanner', score: 10 }];
console.log(getTopStudents(students, threshold));

// Function - task 4
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}

let principal = 1000;
let rate = 5;
let years = 2;
console.log(calculateInterest(1000, 5, 2));
