/**This module provides many functions that you can use
 *  to retrieve information from the underlying operating
 *  system and the computer the program runs on, and interact with it. */

const os = require("os");

const {username} = os.userInfo();
const cpus = os.cpus().length;
const osnetwork = os.networkInterfaces();

console.log(username);
console.log(cpus);
console.log(osnetwork);