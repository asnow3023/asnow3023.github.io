$(document).ready(function(){ 
    $("#dialogue").on('click',function(){
        $.ajax({
            type:"GET",
            url:"general_works_dialogue.xml",
            dataType:"xml",
            success: showDialogue
        });
    });

    function showDialogue(xml){
        xml = $(xml).children();

        $("#dialogue").empty();
        xml.each(function(){
            let speaker = $(this).find("name").text();
            let dialogueContent = $(this).find("content").text();

            let html = "<h3>" + speaker + "</h3>" +
                        "<p>" + dialogueContent + "</p>";

            $("#dialogue").append(html);
        });
    }
    $.get("general_works_dialogue.xml", function(){ 
        $(data).find("#dialogue").each( 
            function() { 
                var xmlDoc = $(this); 
                $("#dialogue").append(
                    "<h3>" +  xmlDoc.find("name").text() + "</h3>" +  
                    "<p>" + xmlDoc.find("content").text() + "/p>"); 
        });  
    });
}); 