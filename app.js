// Includes the FS package for reading and writing packages
var fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
fs.readFile("...insert.....txt", "utf8", function(err, data) {