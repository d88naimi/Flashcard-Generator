// Includes the FS package for reading and writing packages
var fs = require("fs");
// // dependency for inquirer npm package
// var inquirer = require("inquirer");

var ClozeCard = function(text, cloze){
  if (text.indexOf(cloze) === -1){
    throw "error check text"
  }
  this.partialText = text.replace(cloze, "...");
  this.fullText = text;
  this.cloze = cloze;
};

module.exports = ClozeCard;


// module.exports = Clozecard;


// look up how to error 


// this. error = function(err) {
//   if(err) console.log(err);




// Clozecard.prototype.printInfo = function() {
//   console.log("Name: " + this.clozeDelete + "\nPosition: " + this.partial + "\nAge: " +
//   this.full);
// };



