import chalk from "chalk";
// Question no # 43 ( unchanged-Magicians);
console.log(chalk.red("\tDAY # 15\t"));
console.log(chalk.green("=====43====="));
let magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Creates a new modified array
let greatMagicians = make_great(magicians.slice());
console.log(chalk.blue("Original magicians:"));
show_magicians(magicians); // Shows original names
console.log(chalk.blue("Great magicians:"));
show_magicians(greatMagicians); // Shows modified names
