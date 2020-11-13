'use strict';

/***Function Declarations vs. Expressions.***/


functionDeclaration(); // works cause call can be made before or after declaration
function functionDeclaration( ) {
    console.log( "This is a function Declaration" );
}
functionDeclaration();

// functionExpression(); won't work cause call has to be made after the expression
const functionExpression = function( ) {
    console.log( "This is a function expression." );
}

functionExpression();

// The difference between the two is that function declarations can be called before the declaration
// while the call to the function expressions has to be after the function expression.



/*** Arrow Function. ***/
//A shorter and faster form of a function expression.

//expression
const functionExpression2 = function( msg ){
    return `Msg: ${msg}`;
}

console.log( functionExpression2('This is a function expression.') );

//Arrow function
const arrowFunction = msg => `Msg: ${msg}`;

console.log( arrowFunction('This is an arrow function') );


/*** Basic Array Operations (Methods)
 * push( element )
 * unshift( element )
 * pop()
 * shift()
 * indexOf( element)
 * includes( element)
 * ***/

const friends  = ['John', 'Anton', 'Jorge'];

const newLength = friends.push('Wesley'); // adds element to the back of the list and returns a number
friends.unshift('Michael');

console.log(friends);

const popped = friends.pop(); // removes the last element and returns it
const shifted = friends.shift(); //removes the first element

console.log(friends);
console.log(popped);
console.log(shifted);


/*** Dot vs. Bracket Notation ***/

//Dot notation must have real final property name
//Bracket notation can have computed property name ( exp. can be a string variable that contains property name

/*** Looping Arrays, Breaking and Continuing ***/
//What's the difference between Braking and Continuing








