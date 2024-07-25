import chalk from "chalk";


// Question no # 39  (watch brand);

console.log(chalk.green("=====39====="));

function watch_brand(size : string ,brands : string ){
  return`${size} , ${brands}`
}
console.log(watch_brand("samll","Apple"));
console.log(watch_brand("medium","fossil"));
console.log(watch_brand("large","Tissot"));