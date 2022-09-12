const {exec} = require("child_process");
const { stderr } = require("process");

exec('npm --version', (error, stdout, stderr) => {
console.log(`npm version ${stdout.trim()}`);
})

exec('node -v', (error, stdout, stderr) => {
    console.log(`La version de note est ${stdout.trim()}`);
    })