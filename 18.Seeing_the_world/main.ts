import chalk from "chalk";

// Question no # 18   (seeing the world)

console.log(chalk.green("=====18====="));

let places : string[] = ["Newyork", "canada","Qatar","paris","Dubai"];

console.log("original state = " , places);

console.log("Alphabetical Order = " ,[... places].sort());

console.log("original state = " , places);

console.log("Reverse Order = " ,[...places].reverse());

console.log("original state = " , places);

console.log("Reverse Alphabetical Order = " , [...places].sort().reverse());