// Check off specific to-do by clicking
// need to add .on('click') so it applies to any new elements on page
// set it to parent since the UL is already there when page loads, and reads any new li's
$("ul").on("click", "li", function() {
  // // if li is gray
  // if ($(this).css("color") === "rgb(128, 128, 128)") {
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   });
  // }
  // //else
  // else {
  //   // $(this).css("color", "gray");
  //   // $(this).css("text-decoration", "line-through");
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through"
  //   });
  // }
  //refactor with css class
  $(this).toggleClass("completed");
});

// Click on X to delete to-do
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    // function in order to remove AFTER the fadeOut is completed
    .fadeOut(500, function() {
      $(this).remove();
    });
  // avoids the click event to bubble to parent click events
  event.stopPropagation();
});

// Add to-go
$("input[type='text']").keypress(function(event) {
  // 13 is the code for enter key
  if (event.which === 13) {
    // grabbing to-do text from input
    let todoText = $(this).val();
    $(this).val("");
    // create new li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
