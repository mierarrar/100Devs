//Variables -> Data buckets -> Declaration, Assignment

//Easy
let num = 25;
num -= 10;
console.log(num);

//Medium
//let inputedVal = document.querySelector('#danceDanceRevolution').value; 
//inputedVal += 25;
//alert(inputedVal);

//Hard
const h1Holder = document.querySelector('h1');
h1Holder.addEventListener('click', sum);

function sum() {
    let inputedVal = document.querySelector('#danceDanceRevolution').value; 
    console.log(num + Number(inputedVal))
}

//Logical Operators
//Conditional Syntax (if, else if, else)
