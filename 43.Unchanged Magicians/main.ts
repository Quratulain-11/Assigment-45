import chalk from "chalk";


// Question no # 43 ( unchanged-Magicians);

console.log(chalk.green("=====43====="));


let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
  let greatMagicians : string[] = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
});
return greatMagicians;
}

function show_magicians(magicians: string[]) {
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
