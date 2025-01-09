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
$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title")

//! can change text of the h1
// $("h1").text("Goodbye");

//! this will change the text of the button to <em>Heyy</em> instead of italicizing it
// $("button").text("<em>Heyy</em>");

//! this changes the inner text of the button and italicizes it
// $("button").html("<em>Heyy</em>");

//* if we console log a img that doenst have the imgage in the folder or isnt linked properly
//* it will show it that its not working in the console
// console.log($("img").attr("src"))

$("a").attr("href", "https://www.yahoo.com");
$("a").html("search");

//! easy way to add a click eventlistener to the h1 and ability to change its color
$("button").click(() => {
  $("h1").css("color", "Purple");
});

//! this does the same as ABOVE but way less shorter
// for (let i = 0; i < 10; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", ()=> {
//         document.querySelector("h1").style.color = "purple"
//     })
// }

//! detects what key is pressed in the input field
$("input").keydown((e) => {
  //* Changes the text of the h1 to what key is pressed
  $("h1").text(e.key);
});

// $("h1").on("mouseover", ()=> {
//     $("h1").css("color", "purple")
// })

// Can use the w3schools.com to find out more about jQuery
$("button").on("click", () => {
  //   $("h1").slideToggle();
  //   $("h1").fadeToggle();
  //   $("h1").animate({ margin: "80px"});
  //   $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
