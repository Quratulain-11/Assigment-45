import chalk from "chalk";
// Question no # 24  (conditional test)

console.log(chalk.green("=====24====="));
console.log(chalk.red("Test # 1"));    // equal

let fruit = "apple";
console.log(fruit === "apple"); // true
console.log(fruit === "Apple"); // false

console.log(chalk.red("Test # 2"));    // lowercase

let fruit2 = "Apple";
console.log(fruit.toLowerCase() === "apple"); // true

console.log(chalk.red("Test # 3"));     // numerics series

console.log(10 > 5 );   //true
console.log(2 < 1 );   //false 

console.log(chalk.red("Test # 4"));   // and \ or

console.log(true && false);
console.log(true || false);

console.log(chalk.red("Test # 5"));

let cosmetics : string[] = ["liner","highlighter","eyeshadow palate"];
console.log("is liner in that array???");
console.log(cosmetics.includes("liner"));

console.log(chalk.red("Test # 5"));

console.log("Is 'lashes' not in fruits?");
console.log(!cosmetics.includes("lashes")); // True
              
console.log(chalk.red("\tDAY # 9\t"));
