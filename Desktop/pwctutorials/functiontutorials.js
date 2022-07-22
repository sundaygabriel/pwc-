function addNum (a,b){
    return a + b;
}

console.log(addNum(3,4));


const square = (n) => {
    return n*n;
}

console.log(square(7));

function subNum (a,b){
    return a - b;
}
console.log(subNum(8,0));

function sqrNum (a){
    return a * a;
}
console.log(sqrNum(2));

function modNum(a,b){
    return a % b
}
console.log(modNum(10,5));

function divNum (a,b){
    return a/b
}

console.log(divNum(9,3));

for (let i = 2; i <= 20; i += 2){
    console.log(i);
}

const someWord = "adamu"
console.log(someWord.split());

const someArray = ["a", "b", "c", "d", "e", "f", "g"]
console.log(someArray.reverse());

function convertStringToArray (a) {
    return a.split("").reverse().join();
}
console.log(convertStringToArray(someWord));

function isPalindrome(a){
    return a.split('').reverse().join("") == a;
}
console.log(isPalindrome('TooT'));

function intToString(a){
    return a + ""
}

console.log(typeof intToString(10));

let numString = "15";
console.log(typeof parseInt(numString));
console.log(parseInt("the"));

function isNumPalindrome(a){
return a.toString() === a.toString().split("").reverse().join("");
}
console.log(isNumPalindrome(11));