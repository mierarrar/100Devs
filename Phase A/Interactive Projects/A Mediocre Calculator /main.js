let total = 0;

document.getElementById('zero').addEventListener('click', makeZero)
document.getElementById('plusThree').addEventListener('click', addThree)
document.getElementById('plusNine').addEventListener('click', addNine)
document.getElementById('minusTwo').addEventListener('click', subtractTwo)

function makeZero(){
    total = 0;
    document.querySelector('#resultHere').innerText = total
}

function addThree(){
    total = total + 3;
    document.querySelector('#resultHere').innerText = total
}

function addNine(){
    total = total + 9;
    document.querySelector('#resultHere').innerText = total
}

function subtractTwo(){
    total = total - 2;
    document.querySelector('#resultHere').innerText = total
}