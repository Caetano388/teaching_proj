// Let's create a user object

var User = {
    firstName: "",
    lastName: "",
    age: 18,
    sayHello: function () {
        console.log("Hello, my name is ", this.firstName, this.lastName, ".")
    }
};

// Let's use our User to make a specific "instance" of one.
var Kenzie = User;

// To update the information inside an object, you give the name of the object and then add .[PROPERTY NAME]
Kenzie.age = 23;
Kenzie.firstName = "McKenzie";
Kenzie.lastName = "Morgan";

// Now we can have Kenzie greet us with her own information:

Kenzie.sayHello();