import chalk from "chalk";

// Question no # 28   (stages of light);
              
console.log(chalk.green("=====28====="));

let age : number = 25;

if(age < 2){
  console.log("The person is a Baby")
}else if (age < 4){
  console.log("The person is a toddler")
}else if(age < 13){
  console.log("The person is a Kid")
}else if(age < 20){
  console.log("The person is a teenager")
}else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
};