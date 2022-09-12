//lire le contenu d'un fichier json

// const fs = require("fs");

// const path = require("path");

// const fileName = path.join(__dirname, "sample.json");

// fs.readFile(fileName, (err, contenue) => {
//   console.log(String(contenue));
// });


//lister des fichiers dans le repertoire
const {readdir} = require("fs");
readdir('.', (error, files)=>console.log(files));