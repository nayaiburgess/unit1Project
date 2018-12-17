//Gather an array for my words

var words = ['bike', 'General Assembly', 'Atlanta', 'Falcons', 'Hawks', 'Coca-Cola', 'Aquarium', 'Zoo', 'Cascade']
currentWord = words[Math.floor(Math.random() * words.length)];
var word = document.createElement("div")
    var guessWord = document.createTextNode(currentWord)
    word.appendChild(guessWord)
    document.getElementById('guessSpace').appendChild(word);

//HOW TO CREATE DASHES
// var answer = []
// for(x = 0; x < words.length; x++)
//     answer[x] = '_';



// PASS IN THE OBJECT 'BUTTON' IN THE FUNCTION
function currentValue(button){
// GRAB THE VALUE OF THE OBJECT
    var currentLetter = button.value
    var x = document.createElement("li")
    var t = document.createTextNode(currentLetter)
    x.appendChild(t)
    document.getElementById('letterspace').appendChild(x);

}

