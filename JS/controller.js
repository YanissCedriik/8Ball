//Functions

function generateRandomNumber(){
    return Math.floor(Math.random() * 8);
}

console.log(generateRandomNumber())


function answerUser(){   
    
    document.getElementById('outputAnswer').innerHTML = /*HTML*/`
        <h3>8 Ball says : ${response[generateRandomNumber()]}</h3>
    `
}