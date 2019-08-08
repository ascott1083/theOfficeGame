const words = ["michael", "dwight", "jim", "pam", "angela", "andy", "stanley", "kevin", "meredith", "oscar", "phyllis", "toby", "creed", "ryan", "kelly", "darryl"]

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

const michael = document.getElementById("michael");
const dwight = document.getElementById("dwight");
const jim = document.getElementById("jim");
const pam = document.getElementById("pam");
const angela = document.getElementById("angela");
const andy = document.getElementById("andy");
const stanley = document.getElementById("stanley");
const kevin = document.getElementById("kevin");
const meredith = document.getElementById("meridith");
const oscar = document.getElementById("oscar");
const phyllis = document.getElementById("phyllis");
const toby = document.getElementById("toby");
const creed = document.getElementById("creed");
const ryan = document.getElementById("ryan");
const kelly = document.getElementById("kelly");
const darryl = document.getElementById("darryl");




if (randomWord === words[0]) {
    michael.pause();
    dwight.pause();
    jim.pause();
    pam.pause();
    angela.pause();
    andy.pause();
    stanley.pause();
    kevin.pause();
    meredith.pause();
    oscar.pause();
    phyllis.pause();
    toby.pause();
    creed.pause();
    ryan.pause();
    kelly.pause();
    darryl.play();
    document.getElementById("image").src = "/Users/ajscott/Desktop/theOfficeGame/assets/images/darryl.jpg";
}

else if (randomWord === words[1]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Stanley.pause();
    Kevin.pause();
    Meredith.pause();
    Oscar.pause();
    Phyllis.pause();
    Toby.pause();
    Creed.pause();
    Ryan.pause();
    Darryl.pause();
    Kelly.play();
    document.getElementById("image").src = "./assets/images/Kelly.jpg";
}

else if (randomWord === words[2]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Stanley.pause();
    Kevin.pause();
    Meredith.pause();
    Oscar.pause();
    Phyllis.pause();
    Toby.pause();
    Creed.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.play();
    document.getElementById("image").src = "./assets/images/Ryan.jpeg";
}

else if (randomWord === words[3]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Stanley.pause();
    Kevin.pause();
    Meredith.pause();
    Oscar.pause();
    Phyllis.pause();
    Toby.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.play();
    document.getElementById("image").src = "./assets/images/creed.jpg";
}

else if (randomWord === words[4]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Stanley.pause();
    Kevin.pause();
    Meredith.pause();
    Oscar.pause();
    Phyllis.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.play();
    document.getElementById("image").src = "./assets/images/toby.jpg";
}

else if (randomWord === words[5]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Stanley.pause();
    Kevin.pause();
    Meredith.pause();
    Oscar.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.play();
    document.getElementById("image").src = "./assets/images/phyllis.jpg";
}

else if (randomWord === words[6]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Stanley.pause();
    Kevin.pause();
    Meredith.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.play();
    document.getElementById("image").src = "./assets/images/oscar.jpg";
}

else if (randomWord === words[7]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Stanley.pause();
    Kevin.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.play();
    document.getElementById("image").src = "./assets/images/meredith.jpg";
}

else if (randomWord === words[8]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Stanley.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.pause();
    Kevin.play();
    document.getElementById("image").src = "./assets/images/kevin.jpg";
}

else if (randomWord === words[9]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Andy.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.pause();
    Kevin.pause();
    Stanley.play();
    document.getElementById("image").src = "./assets/images/stanley.jpg";
}

else if (randomWord === words[10]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Angela.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.pause();
    Kevin.pause();
    Stanley.pause();
    Andy.play();
    document.getElementById("image").src = "./assets/images/Andy.jpg";
}

else if (randomWord === words[11]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Pam.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.pause();
    Kevin.pause();
    Stanley.pause();
    Andy.pause();
    Angela.play();
    document.getElementById("image").src = "./assets/images/Angela.jpeg";
}

else if (randomWord === words[12]) {
    Michael.pause();
    Dwight.pause();
    J.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.pause();
    Kevin.pause();
    Stanley.pause();
    Andy.pause();
    Angela.pause();
    Pam.play();
    document.getElementById("image").src = "./assets/images/Pam.jpg";
}

else if (randomWord === words[13]) {
    Michael.pause();
    Dwight.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.pause();
    Kevin.pause();
    Stanley.pause();
    Andy.pause();
    Angela.pause();
    Pam.pause();
    J.play();
    document.getElementById("image").src = "./assets/images/Jim.jpg";
}

else if (randomWord === words[14]) {
    Michael.pause();
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.pause();
    Kevin.pause();
    Stanley.pause();
    Andy.pause();
    Angela.pause();
    Pam.pause();
    J.pause();
    Dwight.play();
    document.getElementById("image").src = "./assets/images/Dwight.png";
}

else if (randomWord === words[15]) {
    Darryl.pause();
    Kelly.pause();
    Ryan.pause();
    Creed.pause();
    Toby.pause();
    Phyllis.pause();
    Oscar.pause();
    Meredith.pause();
    Kevin.pause();
    Stanley.pause();
    Andy.pause();
    Angela.pause();
    Pam.pause();
    J.pause();
    Dwight.pause();
    Michael.play();
   document.getElementById("image").src = "./assets/images/Michael.png.";
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
        document.getElementById("image").src = "./assets/images/thats what she said.jpeg"
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
