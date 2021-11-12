var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    document.getElementById("update").onclick = function(){
        updateCalorie();
    };

    document.getElementById("average").onclick = function(){
        showAverageCalories();
    };

    document.getElementById("show_max").onmouseover = function(){
        showMax();
    };

    function updateCalorie(){
        if(document.querySelector('input[name="day"]:checked')== null){
            alert("Please select a day");
        } 
        var day = document.querySelector('input[name="day"]:checked').value;
        var userCalorie = document.getElementById("calorie").value;
        var position = 0;
        switch(day){
            case "Monday":
                position = 0;
                calories[position] += parseInt(userCalorie);
                break;
            case "Tuesday":
                position = 1;
                calories[position] += parseInt(userCalorie);
                break;
            case "Wednesday":
                position = 2;
                calories[position] += parseInt(userCalorie);
                break;
            case "Thursday":
                position = 3;
                calories[position] += parseInt(userCalorie);
                break;
            case "Friday":
                position = 4;
                calories[position] += parseInt(userCalorie);
                break;
            case "Saturday":
                position = 5;
                calories[position] += parseInt(userCalorie);
                break;
            case "Sunday":
                position = 6;
                calories[position] += parseInt(userCalorie);
                break;
        }
        if(isNaN(userCalorie) == true || userCalorie == null || userCalorie == ''){
            alert("Enter a valid number");
            document.getElementById("calorie").value ='';
        }else{
            var calorieDetails = calories[0];
            for(var i = 1; i < days.length; i++){
                calorieDetails += ", ";
                calorieDetails += calories[i];
            }
            alert("Your updated calories details are: \n" + calorieDetails);
            document.getElementById("calorie").value ='';
        }
    }
    function showAverageCalories(){
        var averageResult = 0;
        for(var i = 0; i < days.length; i++){
            averageResult += calories[i];
        }
        averageResult /= 7;
        document.getElementById("showcalorie").value = averageResult.toFixed(2);
        document.getElementById("showcalorie").style.color = "green";
        document.getElementById("showcalorie").style.border = "white";
        document.getElementById("showcalorie").style.backgroundColor = "white";

    }
    function showMax(){
        var max = calories[0];
        var maxDay = 0;
        for(var i = 1; i < calories.length; i++){
            if(calories[i] > max){
                max = calories[i];
                maxDay = i;
            }
        }
        var result = "Your maximum consumed calorie is " + max + " on " + days[maxDay];
        document.getElementById("showMax").innerHTML = result;
    }

};
