// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
// The function should not modify the array. It should return the new array. For instance:
// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4)

// alert( filtered )  // 3,1 (matching values)

// alert( arr )      // 5,3,8,1 (not modified)


// let arr = [5, 3, 8, 1, 2, 1, 5, 3];

// function filterRange(arr, a, b) {
//    return arr.filter( item => item >= a && item <= b)
// }

// console.log(filterRange(arr, 1, 4));




// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// For instance:
// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 } 
// let mary = { name: "Mary", age: 28 }

// let users = [ john, pete, mary ]

// let names = /* ... your code */

// alert( names ) // John, Pete, Mary

// let arr = [{ name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 28 }]

// function getName(arr) {
//     return arr.map(obj => obj.name);
// }

// console.log(getName(arr));




// Exercises 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:
// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }

// let arr = [ john, pete, mary ]

// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28

let users = [{ name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 28 }];

function getAverageAge(users) {
    // let userAge = users.map(obj => obj.age);
    // let totalAge = userAge.reduce((a, age) => a += age, 0);
    // return (totalAge / users.length).toFixed(2);

    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return (totalAge / users.length).toFixed(2);
}

console.log(getAverageAge(users));

