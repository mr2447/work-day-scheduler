//save button to localStorage text for every hour
$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    // store key-value pair: Key= ex.hour-9, value= textarea value
    localStorage.setItem(hour, text)
})


var thisHour = moment().format("H");
var hourNine = $("#hour-nine").text().trim();
function auditTask () {
    if (thisHour.isAfter(hourNine)) {
    
        console.log("its after")
    }
}

//render text from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));


