//  const args = process.argv
//      .slice(2)
//      .map(arg => arg.split('='))
//      .reduce((args, [value, key]) => {
//          args[value] = key;
//          return args;
//      }, {});

// console.log(args.nom)

//console.log(process.argv.slice(2)[0].split('=')[1]);

const minimist = require("minimist");
const argNew = minimist(process.argv.slice(2));
console.log(argNew.name);
console.log(argNew.prenom);