$(document).ready(function () {
    $("#nav_list li").click(function () {
        var title = $(this).children("a").attr("title");
        var file = "json_files/" +title + ".json";
        $.getJSON(file, function(data) {
            $.each(data.speakers, function(i, item){
                    $("main h1").html(item.title);
                    $("main h2").html(item.month);
                    $("main h3").html(item.speaker);
                    $("main img").attr("src", item.image);
                    $("main p").html(item.text);
            });
        });
    });
}); // end ready
