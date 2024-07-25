import chalk from "chalk";

// Question no # 12   (Greetings)  

console.log(chalk.green("=====12====="));

let friend_names1: string[] = ["Gill", "Bob", "Ruchy"];


for (let name of friend_names1) {
    console.log(`Hey ${name}, are you free today?`);
}
