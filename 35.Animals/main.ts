import chalk from "chalk";


// Question no # 35  (animals)

console.log(chalk.green("=====35====="));

let pets : string[] = ["cat","dog","rabbit","birds"];
pets.forEach((pet) => {
  console.log(`A ${pet} would make a great pet.`)
})
console.log("Any of these animals would make a great pet!");
