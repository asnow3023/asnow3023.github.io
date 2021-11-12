var userName = prompt("Please type in your Name: ");
var userStatus = prompt("How are you doing? ");

var today = new Date();
//gets date, month, and year
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

//gets hour and minutes
var hh = today.getHours();
var mi = today.getMinutes();

//concat date and time accordingly
var date = mm + '/' + dd + '/' + yyyy;
var time = hh + ':' + mi;

//save the name of the company
var company_name = "Joyous Lemur";

var hello =  "Today is " + date + " and the time is: " + time + 
".<br> The " + company_name + " welcomes you, " + userName + 
"!<br> We're glad you are doing " + userStatus;

function printGreeting(){
    return hello;
}

//button 1: chane color to blue
function changeColorBlue(){
    document.body.style.backgroundColor = "lightblue";
}

//button 2: change color to red
function changeColorRed(){
    document.body.style.backgroundColor = "lightcoral"
}

//button 3: change color to green
function changeColorGreen(){
    document.body.style.backgroundColor = "palegreen"
}


//button 4: return font color is done in html

//button 5: change font style
var sansCheck = false;
function changeBodyFontCursive(){
    if(sansCheck == false){
        document.body.style.fontFamily = "cursive, sans-serif"; 
        sansCheck = true;
    }else{
        document.body.style.fontFamily = "arial, sans-serif";
        sansCheck = false;
    }
}


