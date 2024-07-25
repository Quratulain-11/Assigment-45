import chalk from "chalk";


///Question no # 37 (large sandals)

console.log(chalk.red("\tDAY # 13\t"));

console.log(chalk.green("=====37====="));

function make_sandals(size : number = 6, brand : string = "Tory Burch"){
   console.log(`Making ${size} of  size sandals of brand ${brand}`);
    }
make_sandals()
make_sandals(6)
make_sandals(5,"Vince Camuto");
