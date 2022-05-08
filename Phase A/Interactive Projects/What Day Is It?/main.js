document.getElementById('check').addEventListener('click', result)

function result(){
    const day = document.querySelector('#day').value
    if (day == 'Sunday' || day == 'Saturday'){
        document.querySelector('#answer').innerText = "It's the Weekend!"
    } else if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' ||day == 'Friday'){
        document.querySelector('#answer').innerText = "Oh nu, week day!"
    } else {
        alert("Please enter a day of the week!")
    }
}