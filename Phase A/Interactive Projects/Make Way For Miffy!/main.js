const orange = document.querySelector('#orangeShirtPic')
const thought = document.querySelector('#deepInThoughtPic')
const pup = document.querySelector('#puppyPic')


document.getElementById('orangeShirt').addEventListener('click', addOrangeShirt)
document.getElementById('deepInThought').addEventListener('click', addDeepInThought)
document.getElementById('puppy').addEventListener('click', addPuppy)


function addOrangeShirt(){
    thought.classList.add('hidden')
    pup.classList.add('hidden')
    orange.classList.toggle('hidden')
}

function addDeepInThought(){
    orange.classList.add('hidden')
    pup.classList.add('hidden')
    thought.classList.toggle('hidden')
}

function addPuppy(){
    orange.classList.add('hidden')
    thought.classList.add('hidden')
    pup.classList.toggle('hidden')
}