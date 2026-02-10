import http from 'http';

const server = http.createServer((req,res) => {
    const url = req.url;
    if (url == "/") {
        res.write("Home Page")
    }
    else if (url == "/about") {
        res.write("About Page")
    }
    else if (url == "/contact") {
        res.write("Contact Page")
    }
    else {
        res.write("Error Page")
    }
    res.end();
});

server.listen(4001, () => {
    console.log("Server is running!")
})
