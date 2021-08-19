/**
 * This is a JS file we'll use to write the code for our learning project.
 * - Caetano
 */

var outputElement = document.getElementById("name-output")

// Let's copy our User object from objectLesson.

var User = {
  firstName: "",
  lastName: "",
  age: 18,
  sayHello: function () {
      console.log("Hello, my name is ", this.firstName, this.lastName, ".")
  }
};

/**
 * 
 * You may ask yourself "How did I get here?" And you may tell yourself "this is not my beautiful code," and you may ask yourself "how do I work this?"
 * But more likely, you only asked "What's an object?"
 * 
 * It's a variable that stores other properties, basically sub variables, and methods, or things you can do with the object. This is useful if we want to handle
 * complex data, or pieces of data that we want to group together.
 * 
 * Let's use our new User object to store our user's name, first and last. First, let's get our new first and last name inputs.
 * 
 */

var fnameInputElement = document.getElementById('fname-input')
var lnameInputElement = document.getElementById('lname-input')

// Now let's add event listeners for them.

fnameInputElement.addEventListener("change", updateUserName)
lnameInputElement.addEventListener("change", updateUserName)

// The function now needs to update both the User.firstName and User.lastName

function updateUserName() {
  User.firstName = fnameInputElement.value;
  User.lastName = lnameInputElement.value;

  outputElement.innerHTML = User.firstName + " " + User.lastName
}

// Go back into that function, and let's make outputElement innerText equal to first and last name. We can "concatenate," or smash strings together in JS
// by just adding them with +. Tip: you can also add " " to add a space between names.