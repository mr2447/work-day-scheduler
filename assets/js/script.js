//declare a "toDo" cariable that holds the parsed to-do items retrieved from localStorage
//if there is nothing in localStorag, set the list to an empty array
var toDo = JSON.parse(localStorage.getItem('to-do')) || [];

//Render out to-do to the page
function renderToDos (toDo) {
    //Iterates over the 'toDo'
    for (var i = 0; i < toDo.length; i++) {
        var hour9 = $("<textarera>")
    }
}
