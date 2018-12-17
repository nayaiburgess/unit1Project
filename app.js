//Gather an array for my words

var words = ['BIKE', 'ATLANTA', 'FALCONS', 'HAWKS', 'COLA', 'AQUARIUM', 'ZOO', 'CASCADE']
currentWord = words[Math.floor(Math.random() * words.length)];
guess = currentWord.split("")
console.log(guess)

// HOW TO CREATE DASHES
for(y = 0; y < guess.length; y++)
    document.getElementById('guessSpace').innerHTML += '  __  ';
    // if (currentLetter == words.includes(guess[x])){
    //     guess[x] == currentLetter;
    //     console.log(currentLetter);
    // }


// PASS IN THE OBJECT 'BUTTON' IN THE FUNCTION
function currentValue(button){
// GRAB THE VALUE OF THE OBJECT
    var currentLetter = button.value
    var x = document.createElement("li")
    var t = document.createTextNode(currentLetter)
    x.appendChild(t);
    console.log(currentLetter);
    if (currentLetter == guess[y]){
        guess[y] == currentLetter;
        console.log(guess[y]);
    }
    else{
    alert("not working")
        
    }

        
}

