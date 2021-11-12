$(document).ready(function () {

        //preload images
        $("#image_list a").each(function () {
                var swappedImage = new Image();
                swappedImage.src = $(this).attr("href");
        });

        //set up event handlers for links
        $("#image_list a").click(function (evt) {
                //swap image
                var imageURL = $(this).attr("href");
                $("#image").fadeOut( 3000 , function(){
                        $("#image").attr("src", imageURL).fadeIn(3000);
                });

                //swap caption
                var caption = $(this).attr("title");
                $("#caption").fadeOut( 3000 , function(){
                        $("#caption").text(caption).fadeIn(3000);
                        $("#caption").animate({
                                fontSize:"2.0em",
                                },3000);
                        
                });


                //cancel the default action of the link
                evt.preventDefault();
        });
        //move focus to first thumbnail
        $("li:first-child a").focus();
});