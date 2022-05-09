//const chalk = require("chalk");
/* import chalk from 'chalk';
console.log(chalk.blue.bgGray("Welcome to chalk!!"));  */


const validator = require("validator");
const res = validator.isEmail("nadeem@abc.in");
console.log(res);