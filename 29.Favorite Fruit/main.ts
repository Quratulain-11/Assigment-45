import chalk from "chalk";

// Question no # 29  (fav_fruit);

console.log(chalk.green("=====29====="));

let fav_fruit : string[] = ["Apple","Mango","Banana","Cheery"]
if(fav_fruit.includes("Apple")) {
  console.log("you really like Apple!")
}
if (fav_fruit.includes ("Mango")){
  console.log("you really like Mango!")
}
if (fav_fruit.includes("Banana")){
  console.log("you really like Banana!")
}
if (fav_fruit.includes("Cheery")){
  console.log("you really like Cheery!")
};