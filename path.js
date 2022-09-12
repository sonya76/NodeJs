const path = require("path");

// affichage du nom du repertoire
console.log(
path.dirname('C:\\Concepteurs dev\\web\\react\\reactMedhi\\nodejs\\path.js')
);
const nomRep = path.dirname('C:\\Concepteurs dev\\web\\react\\reactMedhi\\nodejs\\path.js')
console.log(nomRep);
// affichage du nom du fichier
console.log(
    path.basename('C:\\Concepteurs dev\\web\\react\\reactMedhi\\nodejs\\path.js')
    );

 const nomFichier=path.basename('C:\\Concepteurs dev\\web\\react\\reactMedhi\\nodejs\\path.js'); 
        console.log(nomFichier);
// affichage de l'extension du fichier
console.log(
    path.extname('C:\\Concepteurs dev\\web\\react\\reactMedhi\\nodejs\\path.js')
    );
console.log(__filename);