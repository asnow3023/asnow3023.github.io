$(document).ready(function () {
    var file = "json_files/facultyList.json";
    $.getJSON(file, function (data) {
        $.each(data.facultymembers, function (i,item) {
            $("#faculty").append("<img src=" + 
                item.image + "></img>" +
                "<h2>"+ item.full_name +"</h2>" +
                "<h3>" + item.department +"</h3>" +
                "<p>" + item.bio +"</p>");
        });
    });
}); // end ready
