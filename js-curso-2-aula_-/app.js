let maxNumber = 100;
let attempts = 5;
let randomNumber = generateRandomNumber(maxNumber);
console.log(randomNumber)


function verificarChute(){
    attempts -= 1;
    changeElementValue("h3", `Remaining attempts: ${attempts}`);

    let choosenNumber = document.querySelector("input").value;

    //tips
    isHigherOrLower(choosenNumber, randomNumber);
    
    if (choosenNumber == randomNumber){
        changeElementValue("h1", "You won!");
        changeElementValue("p" ,`Congratulations, you discover the secret number!  (${randomNumber})`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").disabled = true;
    };

    if(attempts == 0){
        changeElementValue("p","No more attemps, you lost." + "\nThe secret number was:" + randomNumber);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").disabled = true;
    }

    cleanInputField();
}

function reset(){
    location.reload();
}

function cleanInputField(){
    choosenNumber = document.querySelector("input");
    choosenNumber.value = "";
}

function changeElementValue(element, content) {
    let elementSelected = document.querySelector(`${element}`);
    elementSelected.innerHTML = `${content}`;
}

function generateRandomNumber(max){
    return Math.floor(Math.random() * max + 1);
}

function isHigherOrLower(choosenNumber, randomNumber){
    if (choosenNumber < randomNumber){
        return changeElementValue("p", "The secret number is bigger than the one you entered.");
    } else if(choosenNumber > randomNumber){
        return changeElementValue("p", "The secret number is smaller than the one you entered.");
    }
}

changeElementValue("h1", "Secret number game");
changeElementValue("p", `Pick a number between 0 and ${maxNumber}.`);
changeElementValue("h3", `Remaining attempts: ${attempts}`);
