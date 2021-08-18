/**
 * This is a JS file we'll use to write the code for our learning project.
 * - Caetano
 */

// To update the "World" in Hello World to show your name, we will need to:
// * Store name as a variable, a piece of data JavaScript can do stuff to
// * Get the value of name from the input element
// * Slap that name into the header element

// First, let's create a "userName" variable. Set it equal to "World".

var userName = "World";

/** To get the value of the input element, we first have to get the input element from the HTML document as a variable.
  * document is a built-in object in JS that allows our JS code to interact with the HTML itself.
  * 
  * document.getElementById() tells the HTML document to give our JS code an element as an object.
  * To do this, just make a new variable called inputElement and set it equal to document.getElementById()
  * Inside of the ( ) put the html id of the element you want to get in quotation marks.
  */

var inputElement = document.getElementById('name-input')

// Next, let's get the element in the header that we want to use to print userName. It's id is "name-output"

var outputElement = document.getElementById("name-output")

// Let's get the value of our input and set userName equal to it!

userName = inputElement.value

// Now let's check our work: Let's console.log() our userName variable. Put userName inside the ( ) without quotes.

console.log("We are getting the value of the input!")
console.log(userName)

// Notice an issue? We're setting userName equal to the value of inputElement, but that only happens one time. Let's fix that.
// To do this, we use events and functions. "Events" are various signals from the browser that you can use to get things to happen, such as clicking, typing, or changing values.
// Functions are segments of code that we can make happen at any time. First, let's make our function. Then we'll trigger it by an event.
// Functions are declared by: function [FUNCTION_NAME]() { ** Whatever we're doing ** }
// The parantheses store "parameters," whatever variables we need to give to the function so that it can do what we want. For example, the parameter of getElementById()
// is the id of the element that we're trying to get.

function updateUserName() {
  userName = inputElement.value
}

// Let's set up the event to trigger that function. There are lots of events that we could use, including clicks on elements. But there's also an event triggered anytime you change
// An input value. To do it, we're going to add an "event listener." On the inputElement variable, use .addEventListener(), and we're going to use 2 parameters. To give multiple
// parameters, we use a comma to separate them. The first parameter for addEventListener() is the event we want the element to listen for, and the second is the function
// we want it to trigger.

inputElement.addEventListener("change", updateUserName)

// Lastly, try setting the "innerText" property of your outputElement equal to userName inside your updateUserName() function.

/**
 * !!!BONUS!!!
 * 
 * You may ask yourself "How did I get here?" And you may tell yourself "this is not my beautiful code," and you may ask yourself "how do I work this?"
 * But more likely, you only asked "What's an object?"
 * 
 * It's a variable that stores other properties, basically sub variables, and methods, or things you can do with the object. This is useful if we want to handle
 * complex data, or pieces of data that we want to group together.
 * 
 * We'll go over making our own later.
 */

