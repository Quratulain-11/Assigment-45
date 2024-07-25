import chalk from "chalk";

// Question no # 23  (conditional test)

console.log(chalk.green("=====23====="));

console.log(chalk.blue("Conditional Test for true & false condition "));

let car = "subaru";  

console.log(chalk.red("Test # 1"));

console.log(car === "subaru"); // True  

console.log(chalk.red("Test # 2"));
  
console.log(car !== "toyota"); // True  

console.log(chalk.red("Test # 3"));
 
console.log(car === "Subaru"); // False  

console.log(chalk.red("Test # 4"));
  
console.log(car === "subaru" || car !== "toyota"); // True  

console.log(chalk.red("Test # 5"));

console.log(car !== "Subaru"); // True  

console.log(chalk.red("Test # 6"));

console.log(car === "Subaru"); // False  

console.log(chalk.red("Test # 7"));

console.log(car === "toyota"); // False  

console.log(chalk.red("Test # 8"));

console.log(car !== "subaru" && car !== "toyota"); // True  

console.log(chalk.red("Test # 9"));

console.log(car === "ford"); // False  

console.log(chalk.red("Test # 10"));

console.log(car === "subaru"); // True