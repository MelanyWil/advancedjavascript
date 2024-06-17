/*******************************************/
/****** ADVANCED JAVASCRIPT, PART ONE ******/
/************* by Carrie Jones *************/
/*******************************************/

/*  
  This is the STARTER code. 
	Feel free to fork it to your own account and practice!

	Solution:
		https://replit.com/@CarolineRose/AdvancedJavaScript-Part1

  Find more examples and practice problems here: 
 		https://carolista.github.io/student-resources/
*/

/*
	Up until now, you've learned the basics of JavaScript and can create complete programs with what you already know. But to succeed in a professional setting, it will be important to continue building on those skills.

	Part 1 includes a review of primitive vs reference types and an introduction to the spread operator, rest operator, and destructuring.
*/


/** PRIMITIVE TYPES VS REFERENCE TYPES **/

// Primitive types, such as strings and numbers, can be copied directly. The original can be reassigned to a new value, but the first copy retains the original value.
let string1 = "This is a Loki.";
let string2 = string1;
string1 = "This is a gator Loki.";

console.log(string2); // "This is a Loki."
console.log(string1); // "This is a gator Loki."

let number1 = 412;
let number2 = number1;
number1 = 1204;

console.log(number1);
console.log(number2);

// Reference types, such as arrays and objects, cannot be copied directly. Instead, assigning one to a new variable name merely makes it point to the original. If the original's value changes, the new variable will produce that updated value, not the original value.
let array1 = [1, 2, 3];
let array2 = array1;
array1.push(4);

console.log(array2); // [1, 2, 3, 4]

let object1 = {
	name: "Sylvie",
	variant: "Loki"
};
let object2 = object1;
object1.name = "Gator Loki";

console.log(object2.name); // "Gator Loki"


/** SPREAD OPERATOR **/

// You will find it handy to use the spread operator in some cases where you need to manipulate some or all of the contents of an array or object. 

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];

// You can merge the contents of two arrays
let newArray = [...arrayOne, ...arrayTwo];

// And add one or more values to an existing array
let newerArray = [...newArray, 7, 8, 9];

console.log(arrayOne);
console.log(arrayTwo);
console.log(newArray);
console.log(newerArray);

// You can use this approach to create a new object from an old object without the second one being a pointer to the first one. You can also build on an object without having to add its properties one by one, then add more properties to the new object at the same time.
let objectOne = {
	name: "Sylvie",
	origin: "Asgard",
	variantType: "Loki",
}
let objectTwo = {
	...objectOne,
	specialty: "enchantment",
	fightingStyle: "Atomic Blonde",
}

console.log(objectOne);
console.log(objectTwo);

// TRY IT! Create single structures from the structures below using the spread operator.

let planetsA = ["Earth", "Lamentis", "Vormir"];
let planetsB = ["Xandar", "Titan"]

// TODO: Use the spread operator to create and print a single array with all five planets.


let laufey = {
	race: "Frost Giant",
	planet: "Jotunheim",
	position: "king",
}

// TODO: Use the spread operator to create a new object that contains the info from laufey but also contains the key/value pair, son: "Loki"



/** DESTRUCTURING **/

// For both arrays and objects, you can pull values out and assign them to individual variable names pretty easily with destructuring.

// EXAMPLE: Let's say you have multiple elements in an array
let names = ["Loki Laufeyson", "Sylvie Laufeydottir"];

// Here's how you give each element its own variable
let [ loki, sylvie ] = names;

console.log(loki);
console.log(sylvie);

// EXAMPLE: This time we'll do it with an object
let mobius = {
	fullName: "Mobius Mobius Mobius",
	employer: "TVA",
	unfulfilledDream: "jet ski",
}

// Now you can access each property with variables
let { fullName, employer, unfulfilledDream } = mobius;

console.log(fullName);
console.log(employer);
console.log(unfulfilledDream);

// You can also skip some of the elements or properties if you want. Note that with arrays you must use extra commas to represent the skipped items, but that's not necessary with objects.
let hunters = ["B-15", "C-20", "U-92"];

let [ b15, , u92 ] = hunters;

console.log(b15);
console.log(u92);

let setting = {
	location: "Roxxcart",
	year: "2050",
	event: "storm",
}

let { location, event } = setting;

console.log(location);
console.log(event);

// TRY IT! Use destructuring to assign elements or properties to individual variable names.

// TODO: Create variables called company and adjective and then print the sentence "(company) is just plain (adjective)." using the two variables.
let info = ["Roxxcon", "evil"];


// TODO: Create variables called hunterB15, throg, and classicLoki and then print each on separate lines. 
let actors = {
	loki: "Tom Hiddleston",
	sylvie: "Sophia Di Marino",
	throg: "Chris Hemsworth",
	classicLoki: "Richard E. Grant",
	presidentLoki: "Tom Hiddleston",
	mobius: "Owen Wilson",
	hunterB15: "Wunmi Mosaku",
};