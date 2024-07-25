import chalk from "chalk";


// Question no # 30   (hellow admin);

console.log(chalk.green("=====30====="));

let usernames : string[] = ["admin","visiter1", "visitor2","visitor3"]

usernames.forEach((username) => {
  if(username == "admin"){
    console.log("Hello admin, would you like to see a status report?");
  }else{
    console.log(`Hello ${username}, thank you for loggin in again.`);
  }
});
