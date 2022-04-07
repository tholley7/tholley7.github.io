$(document).ready(function () {

    // set up event handlers for links
    $("#image_list a").click(function (evt) {
    
        // cancel the default action of the link
        evt.preventDefault();
        
        var imageLink = $(this).attr("href");
        var captionText = $(this).attr("title");
        
        $("#caption").fadeOut(1000, function(){
            $("#caption").text(captionText).fadeIn(1000);
        });
        
        $("#image").fadeOut(1000, function(){
            $("#image").attr("src", imageLink).fadeIn(1000);
        });
        
    }); // end click
    
    // move focus to first thumbnail
    $("li:first-child a").focus();
    $("#image").hide().fadeIn(1000);
    $("#caption").hide().fadeIn(1000);
    
}); // end ready