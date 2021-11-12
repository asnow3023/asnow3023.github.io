var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

	var totalCost = 0;

	//add onclick event handler for each image

	//preload images

	$("#menu a").each(function(){
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href")
	});

	$("#menu a").click(function(evt){

		if($(this).attr("alt") == "espresso"){
			$("#order").innerHTML += "$1.95 - Espresso - Delicious espresso, Wanna try it?";
			totalCost += 1.95;
		}
		else if($(this).attr("alt") == "cappuccino"){
			$("#order").innerHTML += "$3.45 - Cappuccino - Delicious Cappuccino!";
			totalCost += 3.45;
		}

		evt.preventDefault();
	});
	$("#total").innerHTML = "$" + totalCost.toFixed(2);
	// for click event add item to order and update total

	// display order and total
	
		
}; // end onload