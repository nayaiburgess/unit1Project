//Gather an array for my words

var words = ['BIKE', 'ATLANTA', 'FALCONS', 'HAWKS', 'COLA', 'AQUARIUM', 'ZOO', 'CASCADE']
currentWord = words[Math.floor(Math.random() * words.length)];
guess = currentWord.split("")
console.log(guess)
emptyArray = []
// HOW TO CREATE DASHES
for( y = 0; y < guess.length; y++){
 // THIS CREATED AN ARRAY OF DASHES BASED ON THE WORD LENGTH
 if (guess[y] === " "){
     emptyArray.push(" ")
 } else {
     emptyArray.push("_")
 }
     
}
document.getElementById('guessSpace').innerHTML = emptyArray.join(' ');

 // if (currentLetter == guess[y]){
    //     guess[y] == currentLetter;
    //     console.log(currentLetter);
    // }


// PASS IN THE OBJECT 'BUTTON' IN THE FUNCTION
function currentValue(button){
// GRAB THE VALUE OF THE OBJECT
    var currentLetter = button.value
    //THIS FINDS OUT WHERE IT IS IN THE ARRAY
    let index = guess.indexOf(currentLetter);
    //THIS REPLACES THE DASH OF THE POSITION IN THE ARRAY
    emptyArray[index] = currentLetter;
    // THIS PUTS THE ARRAY IN THE DOM
    document.getElementById('guessSpace').innerHTML = emptyArray.join(' ');

    // if (currentLetter == guess[attempt]){
    //     console.log(guess[attempt]);
    // }
    // else{
    //      alert("not working")
    //      return false;
    // }

    // }       
}
