function displayContent() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var emailAddress = document.getElementById("email").value;
    var content = document.getElementById("content").value;

    //let responseNode = createTextNode(response);
    description = "Thank you for your submission!<br> You entered the following:<br>" +
        "Name: " + firstName + " " + lastName +
        "<br>Email: " + emailAddress +
        "<br>Description: " + content +
        "<br><br>Thank you again for your submission. We will be contacting you soon regarding your submission.<br><br><br>";
        console.log(description);
    document.getElementById("rescontent").innerHTML = description;
}