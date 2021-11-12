//global variables
var userInput;
var number;
var shapeResult;
var validCheck;

do{
    //prompt the user to input number of sides
    userInput = prompt("The Joyous Lemur would like your number! \n Please enter a number between 0 to 10: ");
    //converts the number to integer
    number = parseInt(userInput);
    //validate if the input is inbetween 0 to 10 and is a numeric value
    validCheck = validateEntry(number);

    
    if(validCheck == true){
        //get shape and alert the user of result
        shapeResult = getShape(number);
        alert("Name of the polygon with number of sides you entered are: " + shapeResult + "!");
    }
    //if user inputs wrong format
    else{
        alert("Entry is not valid!");
    }

}while(validCheck == false);

function getShape(sides){
    //switch to each possible user input from 0 to 10 returns following name of polygon with sides that user input
    switch(sides){
        case 0:
            return "'Does not exist'"
        case 1:
            return "'Henagon'"
        case 2:
            return "'Digon'";
        case 3:
            return "'Trigon'";
        case 4:
            return "'Tetragon'";
        case 5:
            return "'Pentagon'";
        case 6:
            return "'Hexagon'";
        case 7:
            return "'Heptagon'";
        case 8:
            return "'Octagon'";
        case 9:
            return "'Enneagon'";
        case 10:
            return "'Decagon'";
        default:
            alert("Error!");
    }
}

function validateEntry(entry){
    //returns true if number is a "number" type and is inbetween 0 to 10
    if(typeof number == "number" && userInput <= 10 && userInput >= 0){
        //checks if user input is not empty
        if(userInput != ""){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}