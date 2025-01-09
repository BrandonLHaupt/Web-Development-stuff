// ! This allows the HTML to load before it runs the code inside of the ready
// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

//* This shows the rgb value in the console
//! console.log($("h1").css("color"));
//* This shows the font-size value in the console
//! console.log($("h1").css("font-size"));

//* document.querySelectorAll("button")
//! this does exactly the same thing as the above
$("button");


//! can add mutliple classes by adding a space after each class name
$("h1").addClass("big-title margin-50")
// $("h1").removeClass("big-title")