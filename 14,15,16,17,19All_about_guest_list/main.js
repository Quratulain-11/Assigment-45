import chalk from "chalk";
// Question no # 14  (Guest list) 
console.log(chalk.green("=====14====="));
let Guest_list = ["Sumaima", "Atka", "Unzila", "Urwa", "Hifza"];
for (let name of Guest_list) {
    console.log(`Hey ${name}, I'm inviting you for dinner today At Mohata Palace `);
}
;
// Question no # 15   (changing guest list) 
console.log(chalk.green("=====15====="));
let UnableToattend = "Unzila";
console.log(`${UnableToattend}, can't make it to attend Dinner today`);
// Replace guest 
// let new_Guest : string = "Suwaiba";
// Guest_list[Guest_list.indexOf(UnableToattend)] = new_Guest
console.log(chalk.blue("I have one more dear friend whom I would like to invite. So,the new list is here"));
// we can also use push method for add something in array 
Guest_list.push("Suwaiba");
// New invitations
Guest_list.forEach(guest => {
    console.log(`${guest}, would you like to join me for dinner.`);
});
// Question no # 16   (More guest)
console.log(chalk.green("=====16====="));
console.log(chalk.blue("woho...! i found the big dinner table so, i would like to invite more guest."));
// Adding more guests
Guest_list.unshift("Samira");
Guest_list.splice(Guest_list.length / 2, 0, "Charles Darwin");
Guest_list.push("Kinza");
Guest_list.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Question no # 17   (shrinking guest_list)
console.log(chalk.green("=====17====="));
console.log(chalk.blue("Unfortunately, I can only invite two people for dinner."));
while (Guest_list.length > 2) {
    let removed_guest = Guest_list.pop();
    console.log(`Sorry, "${removed_guest}, ", I can't invite you to dinner.`);
}
Guest_list.forEach(guest => {
    console.log(`Dear ${guest}, Dear you are still invited for dinner`);
});
Guest_list.splice(0, Guest_list.length);
console.log(Guest_list); // Shows an empty list array
// Question no # 19   (Dinner Guest)
console.log(chalk.green("=====19====="));
let guest_list = ["Sumaima", "Atka", "Unzila", "Urwa", "Hifza", "Suwaiba"];
console.log(`I'm inviting ${guest_list} to dinner`);
