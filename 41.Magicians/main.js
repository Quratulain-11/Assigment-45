import chalk from "chalk";
console.log(chalk.green("=====41====="));
let magician1 = ["chris", "joy", "herry"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magician1);
