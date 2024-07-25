import chalk from "chalk";

// Question no # 21   (object)

console.log(chalk.green("=====21====="));

let student_info : {class : string|number; age: number; name:string} = {
name: "Ahmed",
class : "four",
age : 10
};
console.log(`Student Name ${student_info.name} Class ${student_info.class},Age ${student_info.age}`);


