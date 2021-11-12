let names =[];
let salary =[];

function addSalary(){
    let employee = document.getElementById("employee").value;
    let newSalary = document.getElementById("userSalary").value;

    if(newSalary < 0 || newSalary == ""){
        alert("Please input a valid number");
        resetInput();
        return;
    }

    names.push(employee);
    salary.push(newSalary);

    resetInput();

    console.log(salary[0]);
}

function resetInput(){
    document.getElementById("userSalary").value = "";
}

function displayResults(){
    var total = 0;
    let average = 0;
    let largest = 0;
    let outcome = "";
    let current = 0;

    /* Find Average and Largest value*/
    for(let i = 0; i < salary.length; i++){
        current = parseInt(salary[i]);
        total += current;
        console.log(total);
        if(largest < current){
            largest = current;
        }
    }

    average = total / (salary.length);

    console.log(average);
    outcome = "Average is: $" +  average.toFixed(2) + "...and the largest salary is: $" + largest.toFixed(2);

    document.getElementById("results_paragraph").innerHTML = outcome;
} 

function displaySalary(){
    let table = document.getElementById("results_table");
    totalRows = table.rows.length;

    if(totalRows == salary.length){
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = names[salary.length-1];
        cell2.innerHTML = salary[salary.length-1];

    }else if(totalRows < salary.length){
        for(let i = salary.length-(salary.length - totalRows) - 1; i <= salary.length - totalRows + 1; i++){
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            
            cell1.innerHTML = names[i];
            cell2.innerHTML = salary[i];
        }
    }
}