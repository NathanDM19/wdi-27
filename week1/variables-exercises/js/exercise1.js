// // The Fortune Teller
// // Why pay a fortune teller when you can just program your fortune yourself?
// //
// // Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

console.log('Fortune Teller');

const numberOfChildren = 8;
const partnersName = 'Craigsy';
const residentialLocation = 'Glasgow';
const jobTitle = 'chimney sweep';

// const fortune = 'You will be a ' + jobTitle +  ' in ' + residentialLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kids.';

const fortune = `You will be a ${ jobTitle } in ${residentialLocation}, and married to ${partnersName} with ${numberOfChildren}.`;

// const fortune = `This string
// is broken
// into multiple lines.`;

console.log( fortune );


// // The Age Calculator
// // Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

console.log('Age Calculator');

const currentYear = 2018;
const birthYear = 1960;

const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;

console.log(`You are either ${ageBeforeBirthday} or ${ageAfterBirthday} years old.`);

/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

*/

console.log('Lifetime Supply Calculator');

const currentAge = 50;
const maximumAge = 60;
const amountPerDay = 5;

const yearsRemaining = maximumAge - currentAge;
const amountPerYear  = amountPerDay * 365.25;

const totalSnacksRequired = yearsRemaining * amountPerYear;

console.log(`You will need ${totalSnacksRequired} to last you until the ripe old age of ${maximumAge}.`);

// The Geometrizer
// Calculate properties of a circle, using the definitions here.
//
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

const radius = 72;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius**2;

console.log(`The circumference is ${circumference}, and the area is ${area}`);

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

console.log('Temperature Converter');

let celsiusTemp = 47;
let fahrenheitTemp = (celsiusTemp * 1.8) + 32;
console.log(`${celsiusTemp}˚c is ${ fahrenheitTemp.toFixed(2) }˚F.`);

fahrenheitTemp = 116.60;
celsiusTemp = (fahrenheitTemp - 32) / 1.8;

console.log(`${fahrenheitTemp}˚F is ${ celsiusTemp.toFixed(2) }˚C.`);
