import chalk from "chalk";
//Question no # 42 ( great-Magicians);
console.log(chalk.green("=====42====="));
let magician2 = ["chris", "joy", "herry"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magician2);
show_magicians(magician2);
