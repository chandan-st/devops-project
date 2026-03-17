const http = require("http");

const server = http.createServer((req,res)=>{
res.write("DevOps CI/CD Pipeline Running!");
res.end();
});

server.listen(4000);
