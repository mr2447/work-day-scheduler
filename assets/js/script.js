//Display current Day
var currentDay = document.querySelector("#current-day")
var timeNow = moment().format("dddd, MMMM Do YYYY")
currentDay.textContent(timeNow)

//save button to localStorage text for every hour
$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    // store key-value pair: Key= ex.hour-9, value= textarea value
    localStorage.setItem(hour, text)
})

setInterval (function() {
//compare hour 9
var thisHour = parseInt(moment().format("H"));
var hourNine = parseInt($("#hour-nine").text().trim());
if (hourNine === thisHour) {
    $("#hourNine").addClass("p-3 mb-2 text-white present");
} else if (hourNine > thisHour){
    $("#hourNine").addClass("p-3 mb-2 text-dark future");
} else {
    $("#hourNine").addClass("p-3 mb-2 text-white past");
}

//compare hour 10
var hourTen = parseInt($("#hour-ten").text().trim());
if (hourTen === thisHour) {
    $("#hourTen").addClass("p-3 mb-2 text-white present");
} else if (hourTen > thisHour){
    $("#hourTen").addClass("p-3 mb-2 text-dark future");
} else {
    $("#hourTen").addClass("p-3 mb-2 text-white past");
}

//compare hour 11
var hourEleven = parseInt($("#hour-eleven").text().trim());
if (hourEleven === thisHour) {
    $("#hourEleven").addClass("p-3 mb-2 text-white present");   
} else if (hourEleven > thisHour){
    $("#hourEleven").addClass("p-3 mb-2 text-dark future");   
} else {
    $("#hourEleven").addClass("p-3 mb-2 text-white past");
}
//compare hour 12
var hourTwelve = parseInt($("#hour-twelve").text().trim());
if (hourTwelve === thisHour) {
    $("#hourTwelve").addClass("p-3 mb-2 text-white present");   
} else if (hourTwelve > thisHour){
    $("#hourTwelve").addClass("p-3 mb-2 text-dark future");   
} else {
    $("#hourTwelve").addClass("p-3 mb-2 text-white past");
}

//compare hour 13
var hourThirteen = parseInt($("#hour-thirteen").text().trim());
if (hourThirteen === thisHour) {
    $("#hourThirteen").addClass("p-3 mb-2 text-white present");   
} else if (hourThirteen > thisHour){
    $("#hourThirteen").addClass("p-3 mb-2 text-dark future");   
} else {
    $("#hourThirteen").addClass("p-3 mb-2 text-white past");
}

//compare hour 14
var hourFourteen = parseInt($("#hour-fourteen").text().trim());
if (hourFourteen === thisHour) {
    $("#hourFourteen").addClass("p-3 mb-2 text-white present");   
} else if (hourFourteen > thisHour){
    $("#hourFourteen").addClass("p-3 mb-2 text-dark future");   
} else {
    $("#hourFourteen").addClass("p-3 mb-2 text-white past");
}

//compare hour 15
var hourFifteen = parseInt($("#hour-fifteen").text().trim());
if (hourFifteen === thisHour) {
    $("#hourFifteen").addClass("p-3 mb-2 text-white present");   
} else if (hourFifteen > thisHour){
    $("#hourFifteen").addClass("p-3 mb-2 text-dark future");   
} else {
    $("#hourFifteen").addClass("p-3 mb-2 text-white past");
}

//compare hour 16
var hourSixteen = parseInt($("#hour-sixteen").text().trim());
if (hourSixteen === thisHour) {
    $("#hourSixteen").addClass("p-3 mb-2 text-white present");   
} else if (hourSixteen > thisHour){
    $("#hourSixteen").addClass("p-3 mb-2 text-dark future");   
} else {
    $("#hourSixteen").addClass("p-3 mb-2 text-white past");
}

//compare hour 17
var hourSeventeen = parseInt($("#hour-seventeen").text().trim());
if (hourSeventeen === thisHour) {
    $("#hourSeventeen").addClass("p-3 mb-2 text-white present");   
} else if (hourSeventeen > thisHour){
    $("#hourSeventeen").addClass("p-3 mb-2 text-dark future");   
} else {
    $("#hourSeventeen").addClass("p-3 mb-2 text-white past");
}
}, 1000);

//render text from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


