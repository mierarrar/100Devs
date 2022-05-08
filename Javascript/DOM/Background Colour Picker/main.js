document.getElementById('red').onclick = makeRed;
document.getElementById('green').onclick = makeGreen;
document.getElementById('blue').onclick = makeBlue;

function makeRed(){
    document.querySelector('body').style.backgroundColor = 'red'
}

function makeGreen(){
    document.querySelector('body').style.backgroundColor = 'green'
}

function makeBlue(){
    document.querySelector('body').style.backgroundColor = 'blue'
}