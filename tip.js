// User Input, getting elements by ID used in HTML
var amount = document.getElementById("amount");
var tipPercentage = document.getElementById("tipPercentage");
var persons = document.getElementById("Persons");

// Tip Calculated
var perPersonAmount = document.getElementById("PerPersonAmount");
var perPersonTip = document.getElementById("PerPersonTip");
var calculate = document.getElementById("calculate");

// Using Anonymous function inside the operation performed when click button is clicked upon
calculate.addEventListener("click", function(){
	amount = amount.value;  // bill amount in input box
	amount = parseFloat(amount);

	tipPercentage = tipPercentage.value;  //tip% in input box
	tipPercentage = parseFloat(tipPercentage);

	persons = persons.value;  //number of people sharing the bill
	persons = parseFloat(persons);

//Tip Calculation Formula- Tip= bill amount * tip%>

	var tip = (amount*tipPercentage)/100;
	amount += tip;

//Tip Per Person Formula
	var dividedBill = amount / persons;
	var dividedTip = tip / persons;      

// Fixing the decimal pointer to 2 places, since money $00.00
	dividedTip = dividedTip.toFixed(2);
	dividedBill = dividedBill.toFixed(2);

//Final Calculated Output
	perPersonTip.innerHTML = dividedTip;
	perPersonAmount.innerHTML = dividedBill;

});
