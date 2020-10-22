// to serve movie data from a movie api
const express = require("express");
const app = express();
// http caller package - find alternative to request
const request = require("request");
const port = 3000;

//to make .ejs files default 
app.set("view engine","ejs");

// routes

// get the search page
app.get("/", function(req, res){
    res.render("search");
})

app.get("/results/:title", function(req, res){
    // get the movie title as a variable to search
    request(`http://www.omdbapi.com/?s=${req.params.title}&apikey=thewdb`, function(error, response, body){
        console.log(typeof req.params.title);
        if(!error && response.statusCode == 200){
            let parsedBody = JSON.parse(body);

            //rendering results in html
            //but also passing the data to the ejs file
            res.render("results", {data: parsedBody, title: req.params.title});
        }
    })
});


app.listen(port, () => {
    console.log("My God always causes me to triumph!");
})