//Hour 9 code:
var nineContent = localStorage.getItem("hourNine") || "";

function renderNine(nineContent) {
    $("#hourNine").val(nineContent);
}

$("#addNine").on("click", function (event) {
    event.preventDefault();
    
    //Get the hour-9 value from the textarea and store it as a variable using .val() and .trim()
    var hour9Task = $("#hourNine").val().trim();
    localStorage.setItem("hourNine", hour9Task);
    
})

renderNine(nineContent);

var thisHour = moment().format("H");

var hourNine = $("#hour-nine").text().trim();
console.log(hourNine);
console.log(thisHour);
if (hourNine === thisHour) {
    $("#hourNine").addClass("p-3 mb-2 bg-success text-white");
    console.log("its 9 and this is green")
} else if (hourNine > thisHour){
    $("#hourNine").addClass("p-3 mb-2 bg-transparent text-dark");
    console.log ("its in the future and this is colorless")
} else {
    $("#hourNine").addClass("p-3 mb-2 bg-danger text-white");
    console.log ("its in the past and this is red")
}

//Hour 10
var tenContent = localStorage.getItem("hourTen") || "";

function renderTen(tenContent) {
    $("#hourTen").val(tenContent);
}

$("#addTen").on("click", function (event) {
    event.preventDefault();
    
    //Get the hour-9 value from the textarea and store it as a variable using .val() and .trim()
    var hour10Task = $("#hourTen").val().trim();
    localStorage.setItem("hourTen", hour10Task);
    
})

renderTen(tenContent);



var hourTen = $("#hour-ten").text().trim();
console.log(hourTen);
console.log(thisHour);
if (hourTen === thisHour) {
    $("#hourTen").addClass("p-3 mb-2 bg-success text-white");
    console.log("its 10 and this is green")
} else if (hourNine > thisHour){
    $("#hourTen").addClass("p-3 mb-2 bg-transparent text-dark");
    console.log ("its in the future and this is colorless")
} else {
    $("#hourTen").addClass("p-3 mb-2 bg-danger text-white");
    console.log ("its in the past and this is red")
}

//hour 11
