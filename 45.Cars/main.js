import chalk from "chalk";
// Question no # 45     (cars)
console.log(chalk.green("=====45====="));
function make_car(manufacture, model, ...options) {
    let car = { manufacture, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "corolla", ["color", " Black"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["Sunroof", true]));
