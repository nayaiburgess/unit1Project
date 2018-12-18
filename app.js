let incorrectAnswer = 1;

//Gather an array for my words
var words = ['RED', 'BLUE', 'ORANGE', 'BLACK', 'BROWN', 'PINK', 'WHITE', 'TAN', 'GRAY','SILVER', 'GOLD']
currentWord = words[Math.floor(Math.random() * words.length)];
// MAKE EACH WORD INTO AN ARRAY
guess = currentWord.split("")
// MAKE AN ARRAY FOR THE DASHES
emptyArray = []
// HOW TO CREATE DASHES
// 'y' is a loop control variable
for( y = 0; y < guess.length; y++){
 // THIS CREATED AN ARRAY OF DASHES BASED ON THE WORD LENGTH
 if (guess[y] === " "){
     emptyArray.push(" ")
 } else {
     emptyArray.push("_")
    } 
}
document.getElementById('guessSpace').innerHTML = emptyArray.join(' ');

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
        //ALERT FOR WIN
        if(emptyArray.join('') === guess.join('')){
            alert("You have won") 
        }
    //ALERT FOR LOSER
    if(currentLetter !== guess[index]){
        if (incorrectAnswer == 1){
            document.getElementById('man').style.visibility = 'visible'
            incorrectAnswer++
            }
        else if(incorrectAnswer == 2){
            document.getElementById('body').style.visibility = 'visible'
            incorrectAnswer++
        }
        else if(incorrectAnswer == 3){
            document.getElementById('leftarm').style.visibility = 'visible'
            incorrectAnswer++
        }
        else if(incorrectAnswer == 4){
            document.getElementById('rightarm').style.visibility = 'visible'
            incorrectAnswer++
        }
        else if(incorrectAnswer == 5){
            document.getElementById('leftleg').style.visibility = 'visible'
            incorrectAnswer++
        }
        else{
            document.getElementById('rightleg').style.visibility = 'visible'
            alert("Game over")
        }
    }}