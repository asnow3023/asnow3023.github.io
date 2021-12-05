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

        //swaps URL information for each floor
        var link = $(this).find("img").attr("longdesc");
        $("#main_image").attr("longdesc",link);

        //cancel the default action of the link
        evt.preventDefault();
    });

    //move focus to first thumbnail
    $("li:first-child a").focus();

    $("#main_image").click(function(evt){
        window.location.href = $(this).attr("longdesc")+".html";

            //cancel the default action of the link
            evt.preventDefault();
    });

});