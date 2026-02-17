import http from 'http';
import os from "os"

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if (url == "/" && method=="GET") {
        res.write("Home Page")
    }
    else if (url == "/system" && method=="GET") {
        res.write("System")
    }
    else if (url == "/contact" && method=="GET") {
        res.write("Contact Page")
    }
    else if (url == "/createuser" && method=="POST") {
        res.write("Create user")
    }    
    else if (url.startsWith("/users/") && method=="GET") {
        res.write("List of users")
    }
    else {
        res.statusCode = 404;
        res.write("Error Page")
    }
    res.end();
});
server.listen(4001, () => {
    console.log("Server is running successfully!")
})
