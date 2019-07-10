function resetSignDataOne() {
	welcome = '';
	sign = '';
	computeSign();
	setSign();
}

function resetSignDataTwo(event) {
	var signData = ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal'];
	
	for (var i=0; i<signData.length; i++) {
		setTextContentById(signData[i], '');
		
	}
	event.preventDefault(); 
}

// Create variables for the welcome message
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome;
var sign = '[not initialized]';
var tiles = '[not initialized]';
var subTotal = '[not initialized]';
var shipping = '[not initialized]';
var grandTotal = '[not initialized]';

function computeSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = 'Howdy '; 
	name = 'Molly';
	message = ', please check your order:';
	sign = 'Montague House';
	welcome = greeting + name + message;
	computeSign(); 
}

function setTextContentById(getId, setMsg) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setMsg;
}

function setSign() {
	setTextContentById('greeting', welcome);
	setTextContentById('userSign', sign);
	setTextContentById('tiles', tiles);
	setTextContentById('subTotal', '$' + subTotal);
	setTextContentById('shipping', '$' + shipping);
	setTextContentById('grandTotal', '$' + grandTotal);
} 

initiateVars(); 
setSign(); 

// reset sign
var el = document.getElementById('resetButton');

el.addEventListener('click', resetSignDataTwo, false);