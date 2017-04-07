console.log("RUNNING RUNNING RUNNING")

var d3 = require("d3") // assign the locally-installed D3 module to a variable called d3 for further invocation. 

var someIntegers = [9, 13, 99, 3]
console.log("THE ARRAY IS:", someIntegers)

var maxNumber = d3.max(someIntegers)
console.log("MAXIMUM NUMBER IN THE ARRAY IS:", maxNumber)
