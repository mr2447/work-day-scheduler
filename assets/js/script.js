$("#add-9").on("click", function (event) {
    event.preventDefault();

    //Get the hour-9 value from the textarea and store it as a variable using .val() and .trim()
    var hour9Task = $("#hour-9").val().trim();
    console.log(hour9Task);
})