// Object - task 1
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};
console.log(car.year);

// Object - task 2
const person = {
    name: 'Jay',
    address: {
        street: '123 Dong Loc St',
        city: 'HaTinh',
        country: 'Vietnam'
    }
};
console.log(person.address.street);

// Object - task 3
const student = {
    name: 'Alice',
    grades: {
        math: 90,
        english: 85
    }
};
console.log(student["grades"]["math"]);

// Object - task 4
const settings = {
    volume: 75,
    brightness: 50
};
settings.volume = 80;
console.log(settings);

// Object - task 5
let bike = {};
bike.color = 'red';
console.log(bike);

// Object - task 6
let employee = {
    name: 'Bob',
    age: 30
};
delete employee.age;
console.log(employee);

// Object - task 7
const school = {
    classA: ['An', 'Binh', 'Chau'],
    classB: ['Dao', 'Huong', 'Giang']
};
for (let i = 0; i < school.classA.length; i++) {
    console.log(school.classA[i]);
};

for (let i = 0; i < school.classB.length; i++) {
    console.log(school.classB[i]);
};