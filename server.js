const http = require("http");
require('dotenv').config();

//const port = 5000;
const port = process.env.PORT || 5000;
//requete : req et response : res
// const server = http.createServer((req, res) => {
// res.statusCode = 200
// res.setHeader('Content-Type', 'text/html')
// res.end('<h1>Welcome to node.js server</h1>')
// });

// server.listen(port, ()=>{
//     console.log(`Server lancé à l'adresse http://127.0.0.1:${port}`)
// })

const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({
        data:'Hello World !'
    }))
});

server.listen(port);