//Loops - for

function savage21(){
    for (let i = 1; i <= 21; i++){
        console.log('21');
        document.querySelector('#savageSays').innerText += '21';
    }
}
//savage21();

document.querySelector('#help').addEventListener('click', stopSnacking);
function stopSnacking(){
    let numOfSnacks = Number(document.querySelector('input').value);
    document.querySelector('#stops').innerText = ""; //empties the stops before each input
    for (let i = 1; i <= numOfSnacks; i++){
        document.querySelector('#stops').innerText += ' STOP!';
    }
}
//stopSnacking();

//Loops - while
//Loops - do while

