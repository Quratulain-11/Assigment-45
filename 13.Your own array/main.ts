import chalk from "chalk";

// Question no # 13   (Your own Array)  

console.log(chalk.green("=====13====="));


let vehicles : string[] = ["Honda","Wagons","tesla car"];

vehicles.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});
        