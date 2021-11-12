$(document).ready(function(){
    //preload images
    $("#floor-image a").each(function(){
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href")
    });

    //set up event handlers for links
    $("#floor-image a").click(function(evt){
        //swap image
        var imageURL = $(this).attr("href");
        $("#main_image").attr("src",imageURL);

        //swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        //cancel the default action of the link
        evt.preventDefault();
    });

    //move focus to first thumbnail
    $("li:first-child a").focus();

});