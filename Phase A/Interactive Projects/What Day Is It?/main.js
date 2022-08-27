document.getElementById('check').addEventListener('click', result)

function result(){
    const day = document.querySelector('#day').value.toLowerCase()
    if (day == 'sunday' || day == 'saturday'){
        document.querySelector('#answer').innerText = "It's the weekend!"
    } else if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' ||day == 'Friday'){
        document.querySelector('#answer').innerText = "Oh nu, week day!"
    } else {
        alert("Please enter a day of the week!")
    }
}