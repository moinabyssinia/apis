// to serve movie data from a movie api
const express = require("express");
const app = express();
// http caller package - find alternative to request
const request = require("request");
const port = 3000;

app.set("view engine","ejs");



// routes
app.get("/results", function(req, res){
    request('http://www.omdbapi.com/?s=uncle+tom&apikey=thewdb', function(error, response, body){
        if(!error && response.statusCode == 200){
            let parsedBody = JSON.parse(body);
            // console.log(parsedBody);

            //rendering results in html
            res.render("results", {data: parsedBody});
        }
    })
});


app.listen(port, () => {
    console.log("My God always causes me to triumph!");
})