var app = require("./app.js");
var clozecard = require("clozecard");
var inquirer = require("inquirer");

inquirer.prompt([
	{
		name: 'command',
		message: 'What kind of card would you like to create?' 
	},
	{
		name: 'front',
		message: 'What goes on the FRONT of the card?' 
	},
	{
		name: 'back',
		message: 'What goes on the BACK of the card?' 
	}
	]).then(function (answers) {
		// need to make this example similiar week 12 day 2 coder bay activities
		// 2 question which flashcard using then move forward
 
  var clozeCardInfo = new Clozecard(answers.clozeDelete, answers.partial, answers.full);
 
});
