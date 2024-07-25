import chalk from "chalk";


// Question no # 40  (Album);
console.log(chalk.red("\tDAY # 14\t"));

console.log(chalk.green("=====40====="));

function make_album(title:string ,artist : string , tracks? : number){

  let album = {title , artist ,tracks}
  if (tracks){
    album["tracks"] = tracks
  }
return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
              
