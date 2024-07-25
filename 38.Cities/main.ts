import chalk from "chalk";


// Question no # 38  (cities)

console.log(chalk.green("=====38====="));

function describe_cities(cities : string , country : string = "pakistan"){
  console.log(`${cities} city  is in ${country} country!`)
}
describe_cities("lahore");
describe_cities("kpk");
describe_cities("berlin","germany");
