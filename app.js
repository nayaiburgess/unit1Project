//Gather an array for my words

var words = ['bike', 'General Assembly', 'Atlanta', 'Falcons', 'Hawks', 'Coca-Cola']
//HOW TO CREATE DASHES
// var answer =[]
// for(x = 0; x < words.length; x++)
//     answer[x] = '_';

// PASS IN THE OBJECT BUTTON
function currentValue(button){
// GRAB THE VALUE OF THE OBJECT
var currentLetter = button.value
console.log(currentLetter)
  var x = document.createElement("li")
  var t = document.createTextNode(currentLetter)
  x.appendChild(t)
 document.getElementById('letterspace').appendChild(x);

}

