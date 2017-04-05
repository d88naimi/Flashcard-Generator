// Includes the FS package for reading and writing packages
var fs = require("fs");

var inquirer = require("inquirer");

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  
}


function Clozecard(clozeDelete, partial, full, error) {
  this.clozeDelete = partial;
  this.partial = position;
  this.full = full;
  this. error = function(err) {
  if(err) console.log(err);
  
}

BasicCard.prototype.printInfo = function() {
  console.log("Name: " + this.front + "\nPosition: " + this.back);
};

inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }
]).then(function(answers) {
  // initializes the variable newguy to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newGuy = new BasicCard(answers.name, answers.position);
  // printInfo method is run to show that the newguy object was successfully created and filled
  newGuy.printInfo();
});



// module.exports = BasicCard;

// module.exports = Clozecard;