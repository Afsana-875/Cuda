$(document).ready(function(){

    //sticky

    $(".js-service-section").waypoints(function(direction){
    if(direction=="down"){
      $("nav").addClass("sticky");
      }
    else{
      $("nav").removeClass("sticky");
      }
        });
    // protfollio section mix up
    var mixer=mixitup('.container');
});
    //sticky header
    /*$(".js-service").waypoints(function(direction){
        if(direction=="down"){
      $("nav").addClass("sticky");
      }
        else{
      $("nav").removeClass("sticky");
      }
        });
        */


