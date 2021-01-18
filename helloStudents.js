'use strict'

// 1. Read the JSON file into a variable called students

let students = require('./students.json')
console.log(students);

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

students.forEach(function(student) {
    console.log(`Hello ${student.firstName} ${student.lastName}`);
    
})

console.log('\n');
// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

console.log(students.filter(s=>{
    return s.lastName.charAt(0)==='D';
}).length);

console.log(students.filter(s=>{
    return s.lastName.charAt(0)==='D';
}).map(s=>s.firstName+' '+s.lastName).join('\n'));



