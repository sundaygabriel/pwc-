//data types
let name = "john"; //string
let age = 20;  //age
let z = null;  //null
let y = undefined; //undefined
let isMarried = true; //boolean
let favColor = ["white", "blue", "green", "yellow", "black"]; //array

const number = [23, 34, 45];


//strings
//let x = "hello world"  
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.length);

//concatenation
m = "i am ";
n = "i go to pwc bootcamp ";
p = "i love to learn javascript";

console.log(m + name + " and " + p);

console.log(`${m} ${name} and ${p} `);

console.warn("This is a warning");

console.error("this is an error");

let fruits = ["apple", "pawpaw", 'banana'];
console.log(fruits);

fruits.push("orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits[1] = "blueberries";
console.log(fruits);

fruits.unshift();
console.log(fruits);

const person = {
firstName: "Ekene",
age:30,
hobbies: ["music", "movies", "sports"],
address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA"
}

}

console.log(person.age);

//loops
for (let i = 12; i < 20; i++) {
    console.log(`number is ${i} `);
}

let i = 12;
while (i<20) {
i++;
console.log(`number is ${12}`);
}

const x = 20;
if (x == 20) {
    console.log(`x is 20 `)
}


console.log(age);

console.log(name);

console.log(typeof y);

console.log(typeof isMarried);