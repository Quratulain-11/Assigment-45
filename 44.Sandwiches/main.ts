import chalk from "chalk";


// Question no # 44 ( sandwiches);

console.log(chalk.green("=====44====="));

function make_burger(...items : string[]){
console.log(`Making a burgur with :  ${items.join(",")}.`)
}
make_burger("ham", "cheese");
make_burger("turkey", "lettuce", "tomato");
make_burger("avocado", "sprouts", "mustard", "mayo");
