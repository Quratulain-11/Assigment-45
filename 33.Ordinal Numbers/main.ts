import chalk from "chalk";

// Question no # 33   (ordinals numbers)

console.log(chalk.green("=====33====="));

let numbers_pos : number[] = [1,2,3,4,5,6,7,8,9,10];

numbers_pos.forEach((number) => {
let suffix = "th";
if(number === 1){
suffix = "st";
}else if(number === 2){
  suffix = "nd;"
}else if (number === 3){
suffix = "rd";
}
console.log(`${number}${suffix}`)
});
