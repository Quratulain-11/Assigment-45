import chalk from "chalk";

// Question no # 10   (Adding comments)

console.log(chalk.green("=====10====="));

// Declare a variable 'myname' of type string and assign it the value "Mishal".
let myname : string = "Mishal";           

// Declare a variable 'my_comment' of type string and use a template literal to create a string
// that includes the value of 'myname' followed by the phrase " This is my Nickname".
let my_comment : string = (`${myname} This is my Nickname`);      

//Output the value of 'my_comment' to the console.
console.log(my_comment);
