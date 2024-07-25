import chalk from "chalk";


// Question no # 32   (checking username);

console.log(chalk.green("=====31====="));

let current_user : string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users:string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach((newuser) => {
  if(
    current_user.some(
      (currentuser) => currentuser.toLowerCase() === newuser.toLowerCase()
    )
  ){
    console.log(`${newuser} will need to enter a new username.`);
  }
  else {
    console.log(`${newuser} is available.`);
  }
  });
