var nineContent = localStorage.getItem("hourNine") || "";

function renderNine(nineContent) {
    var toDoItem = $('<textarea>');
    console.log(toDoItem);
    toDoItem.text(nineContent);
}

$("#addNine").on("click", function (event) {
    event.preventDefault();
   
    //Get the hour-9 value from the textarea and store it as a variable using .val() and .trim()
    var hour9Task = $("#hourNine").val().trim();
    localStorage.setItem("hourNine", hour9Task);
    renderNine(nineContent);
})
