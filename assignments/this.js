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

// Principle 2: Implicit Binding:
// code example for Implicit Binding

const myObj = {
    inspirationQuote: "you can do it!",
    inspirePerson: function(name) {
      console.log(`Hey ${name}, ${this.inspirationQuote}`);
      console.log(this);
    }
  };
  myObj.inspirePerson('Chris');

// Principle 3: New binding
// code example for New Binding

function HolidayGreeting(holiday) {
    this.phrase = 'Happy ';
    this.holiday = holiday;
    this.greet = function() {
      console.log(this.phrase + this.holiday);
      console.log(this);
    };
  }

  const christmas = new HolidayGreeting('Christmas');
  const easter = new HolidayGreeting('Easter');

  christmas.greet();
  easter.greet();

// Principle 4: Explicit binding
// code example for Explicit Binding

const about = {
    first_name: 'Keano',
    last_name: 'Reeves'
    }
  
  const actingRoles = ['John Wick', 'Matrix', 'Speed'];
  
  function imdbIntro(movie1, movie2, movie3){
    return `I'm ${this.first_name} ${this.last_name}, some movies you may have seen me in are ${movie1}, ${movie2}, and ${movie3}.`
  }
  
  console.log(imdbIntro.call(about, ...actingRoles));