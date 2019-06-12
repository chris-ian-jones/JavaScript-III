/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: The value of 'this', when in the global scope, will be the window/console Object.
* 2. Implicit Binding: One of the most commonly used applications of 'this'. Whenever a function is called by a preceding dot, the object before that dot is 'this'.
* 3. New binding: Whenever a constructor function is used (Constructors are named starting with a capital letter), 'this' refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit binding: Explicit binding of 'this' occurs when .call(), .apply(), or .bind() are used on a function. We are explicitly passing in a 'this' context to call() or apply(). 
*
* write out a code example of each explanation above
*/

// Principle 1: Window/Global Object Binding
// code example for Window Binding

function giveMotivation(motivationQuote) {
    console.log(this);
    return motivationQuote;
  }
  giveMotivation("You got this!");

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding