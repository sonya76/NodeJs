console.log("Node.js");
// console.log("coucou");
// //process.exit(0);
// //
// process.exit();
// //process.exitCode = 1;

const repl = require("repl");
const local = repl.start("$ ");
local.on("exit", () => {
    console.log("Sortie de la console !");
    process.exit();
})