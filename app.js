$(document).ready(function () {
  $(".draggable").draggable({snap: ".row"});
  // $(".draggable-list").draggable({snap: ".row"});
  $(".addContent").click(function(event) {
    /* Act on the event */
      $(".addContent").addClass("hide");
      $("#addnewbtn").addClass("show").removeClass('hide');
  });
  $("#addnewbtn").on('click', function(){
    console.log("added");
  });
});
