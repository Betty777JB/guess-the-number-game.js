function checkInput(inputType, inputMsg, inputDefault) {
    let inputCorrect = false;
    while (!inputCorrect) {
        let input = prompt(inputMsg, inputDefault);
        if (input == null) {
            alert("Voer iets in.");
        } else if (input == "") {
            alert("De invoer is ongeldig.");
        } else if (inputType == "num") {
            let inputNum = parseInt(input);
            if (Number.isInteger(inputNum)) {
                inputCorrect = true; // It's an integer
                return inputNum;
            } else {
                alert("De invoer (" + input + ") is geen geheel getal.");
            }
        } else {
            inputCorrect = true; // It's a string
            return input;
        }
    }
}

let start = prompt("Welkom, wil je het spel beginnen?");
if (start == null) {
    // mogelijk niks doen bij een refresh, anders helemaal alle vragen correct beantwoorden
} else {


    let name = checkInput("str", "Wat is jouw naam?", "Default Name");
    alert("Hallo " + name + "!\nHoe is het met jou vandaag!");
    document.getElementById('groet').innerHTML =
        "<p>Hello <i>" + name + "</i>! How are you today?</p>";

    // let name = "";
    //
    // while (name.length < 1) {
    //     name = prompt("Wat is jouw naam?", "Default Name");
    //     if (name == null) {
    //         alert("Voer een naam in.");
    //         name = "";
    //     } else if (name == "") {
    //         alert("Voer een geldige naam in.");
    //     } else {
    //         alert("Hallo " + name + "! Hoe is het met jou vandaag!");
    //         document.getElementById('groet').innerHTML =
    //             "<p>Hello <i>" + name + "</i>! How are you today?</p>";
    //     }
    // }

    let minRange = checkInput("num", "Geeft de range waartussen je wilt raden...\nWat is het minimum?", 1);
    let maxRange = checkInput("num", "Geeft de range waartussen je wilt raden...\nWat is het maximum?", 10);

    // let inputCorrect;
    // let minRange;
    // inputCorrect = false;
    // while (!inputCorrect) {
    //     minRange = parseInt(prompt("Geeft de range waartussen je wilt raden. Wat is het minimum?", 1));
    //     if (Number.isInteger(minRange)) {
    //         inputCorrect = true;
    //     } else {
    //         alert("De invoer is niet juist.");
    //     }
    // }
    // let maxRange;
    // inputCorrect = false;
    // while (!inputCorrect) {
    //     maxRange = parseInt(prompt("Geeft de range waartussen je wilt raden. Wat is het maximum?", 10));
    //     if (Number.isInteger(maxRange)) {
    //         inputCorrect = true;
    //     } else {
    //         alert("De invoer is niet juist.");
    //     }
    // }

    let chosenNumber = Math.round(Math.random() * (maxRange - minRange) + minRange)
    // alert("Shhh... don't tell anyone the number is " + chosenNumber + ".");

    const maxAttempt = 5;
    let attempt = 0;
    let won = false;

    while ((attempt < maxAttempt) && !won) {
        let guess = prompt("Doe een gok.");
        attempt++ // attempt = attempt +1;
        if (guess == chosenNumber) {
            alert("Correct! Je hebt gewonnen!");
            document.getElementsByClassName('titel')[0].style.color = "rgb(0,255,0)";
            won = true;
        } else if (attempt < maxAttempt) {
            alert("Dit is niet correct.\nJe hebt nog " + (maxAttempt - attempt) + " poging(en).");
        } else {
            alert("Helaas, dit is niet correct.\nDit was je laatste poging; je hebt het niet geraden.\nHet getal was: " + chosenNumber + ".");
            document.getElementsByClassName('titel')[0].style.color = "rgb(255,0,0)";
        }
    }
    alert("Dit was het einde van het spel.\nTot de volgende keer, " + name + "!");

    let result;
    if (won) {
        result = "WON!!!"
    } else {
        result = "unfortunately lost..."
    }
    document.getElementById('resultaat').innerHTML =
        "<p>You have " + result + "</p>";
}
