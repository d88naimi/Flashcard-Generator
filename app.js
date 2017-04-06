// Includes the FS package for reading and writing packages
var fs = require("fs");
// dependency for inquirer npm package
var inquirer = require("inquirer");
// constructor function used to create BasicCard objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;  
}
// creates the printInfo method and applies it to all cards objects
BasicCard.prototype.printInfo = function() {
  console.log("Name: " + this.front + "\nPosition: " + this.back);
};
// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }
]).then(function(answers) {
   // initializes the variable cardInfor to be an object which will take
  // in all of the user's answers to the questions above
  var cardInfo = new BasicCard(answers.name, answers.position);
 // printInfo method is run to show that the newguy object was successfully created and filled
  cardInfo.printInfo();
});


function Clozecard(clozeDelete, partial, full, error) {
  this.clozeDelete = clozeDelete;
  this.partial = partial;
  this.full = full;
  this. error = function(err) {
  if(err) console.log(err);
  
}

Clozecard.prototype.printInfo = function() {
  console.log("Name: " + this.clozeDelete + "\nPosition: " + this.partial + "\nAge: " +
  this.full);
};

inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }, {
    name: "age",
    message: "How old are you?"
  }, {
    name: "language",
    message: "What is your favorite programming language?"
  }
]).then(function(answers) {
 
  var clozeCardInfo = new Programmer(answers.name, answers.position, answers.age, answers.language);
 
});

// module.exports = BasicCard;

// module.exports = Clozecard;