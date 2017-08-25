var main = function () {

  "use strict";
  $('form').submit(function (event) {
    var $input = $(event.target).find('input');
    var comment = $input.val();
    
    if (comment != ""){
      var html = $('<li>').text(comment);
      html.prependTo('#comments');
      $input.val("");
    }
    return false; //this tells the browswer don't do anything else when submit is clicked
  });
  
}

$(document).ready(main);