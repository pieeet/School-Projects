let https = require("https");
let fs = require("fs");

let options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
}

let req = https.request(options, (res) => {

    let responseBody = "";

    console.log("Respone from server started.");
    console.log(`Server Status ${res.statusCode}`);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");

    res.once("data", (chunk) => {

        console.log(chunk);

    });

    res.on("data", (chunk) => {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", () => {
        fs.writeFile("goerge-washington.html", responseBody, (err) => {
            if (err) {
                throw err;
            }
            console.log("file downloaded");
        });
    });

});

req.on("error", (err) => {
    console.log(`problem with request: ${err.message}`);
});

req.end();