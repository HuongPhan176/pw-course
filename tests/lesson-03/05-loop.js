// Loop - task 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Loop - task 2
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Loop - task 3
let arr = [];
for (let i = 1; i <= 99; i += 2) {
    arr.push(i);
}
console.log(arr);

// Loop - task 4
let userName = 'JayPhan';
for (let i = 1; i <= 10; i++) {
    console.log(`${userName}${i}@example.com`);
}

//Loop - task 5
let annualRevenue = 0;
const monthlyRevenue = [{ month: 1, total: 1000 }, { month: 2, total: 1200 },
{ month: 3, total: 900 }, { month: 4, total: 1100 },
{ month: 5, total: 950 }, { month: 6, total: 1050 },
{ month: 7, total: 1150 }, { month: 8, total: 1300 },
{ month: 9, total: 1250 }, { month: 10, total: 1400 },
{ month: 11, total: 1500 }, { month: 12, total: 1600 }];

for (let i = 0; i < monthlyRevenue.length; i++) {
    annualRevenue += monthlyRevenue[i].total;
}
console.log(annualRevenue);