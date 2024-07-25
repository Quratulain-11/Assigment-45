import chalk from "chalk";

 // Question no # 25   (Alien colors)

 console.log(chalk.green("=====25====="));

 let alien_color = "green";
 if (alien_color == "green") {
   console.log("You just earned 5 points!");
 }
 //  (no output):
 
 alien_color = "red";
 if (alien_color == "green") {
   // No output because the condition is false
 };
 // Question no # 26   (alien color #2) ;

console.log(chalk.green("=====26====="));

// Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien");
} else {
  console.log("You just earned 10 points");
}

// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

  // Question no # 27   (alien color #3);

  console.log(chalk.green("=====27====="));

let alien_color3 : string = "pink";

// green alien versoin
alien_color = "green";
if  (alien_color == "green"){
  console.log("you earned 5 points");
}
else if(alien_color == "yellow"){
  console.log("you earned 10 points");
}
else if(alien_color == "red"){
  console.log("you earned 15 points");
};

// yellow alien version
alien_color = "yellow";
if  (alien_color == "green"){
  console.log("you earned 5 points");
}
else if(alien_color == "yellow"){
  console.log("you earned 10 points");
}
else if(alien_color == "red"){
  console.log("you earned 15 points");
};

// red alien version

alien_color = "red";
if  (alien_color == "green"){
  console.log("you earned 5 points");
}
else if(alien_color == "yellow"){
  console.log("you earned 10 points");
}
else if(alien_color == "red"){
  console.log("you earned 15 points");
}
export {}