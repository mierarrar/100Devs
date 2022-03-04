//Variables -> Data buckets -> Declaration, Assignment

//Easy
let num = 25;
num -= 10;
console.log(num);

//Medium
let inputedVal = document.querySelector('#danceDanceRevolution').value; //is an empty string since there isn't an input 
inputedVal += 25;
alert(inputedVal);

//Hard
const h1Holder = document.querySelector('h1');
h1Holder.addEventListener('click', sum);

function sum() {
    console.log(num + Number(inputedVal))
}
