// Includes the FS package for reading and writing packages
var fs = require("fs");
// dependency for inquirer npm package
// var inquirer = require("inquirer");
// constructor function used to create BasicCard objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;  
}



module.exports = BasicCard;


// // creates the printInfo method and applies it to all cards objects
// BasicCard.prototype.printInfo = function() {
//   console.log("Name: " + this.front + "\nPosition: " + this.back);
// };
// // runs inquirer and asks the user a series of questions whose replies are
// // stored within the variable answers inside of the .then statement.
// inquirer.prompt([
//   {
//     name: "name",
//     message: "What is your name?"
//   }, {
//     name: "position",
//     message: "What is your current position?"
//   }
// ]).then(function(answers) {
//    // initializes the variable cardInfor to be an object which will take
//   // in all of the user's answers to the questions above
//   var cardInfo = new BasicCard(answers.name, answers.position);
//  // printInfo method is run to show that the newguy object was successfully created and filled
//   cardInfo.printInfo();
// });






