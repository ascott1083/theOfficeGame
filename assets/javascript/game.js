const words = ["michael", "dwight", "jim", "pam", "angela", "andy", "stanley", "kevin", "meredith", "oscar", "phyllis", "toby", "creed", "erin", "ryan", "kelly", "darryl"]

let randomWord = "";
let lettersOfWord = []
let blanks = 0;
let blanksAndCorrect = [];
let wrongGuess = [];


let wins = 0;
let losses = 0;
let guessesRemaining = 9;




function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}



function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}



function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    
    console.log(blanksAndCorrect);
}



function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)


    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        reset()

        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/thats what she said"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}



Game()

document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(guesses);

    complete();

    console.log(guesses);


    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}
