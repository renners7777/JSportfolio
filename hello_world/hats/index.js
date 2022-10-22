//Select elements
const theGreeting = document.querySelector('#greeting');
const theHats = document.querySelector('#hats');
const theSubtotal = document.querySelector('#subtotal');
const theShipping = document.querySelector('#shipping');
const theGrandTotal = document.querySelector('#grandTotal');
//create some variables that declare our content
const greeting = 'Hello again';
let name = 'Chris';
let message = 'Please check your order'
let welcome = `<h1>${greeting} ${name}, ${message} </h1>`;
//console.log(welcome)
//replace the content
theGreeting.innerHTML = welcome;