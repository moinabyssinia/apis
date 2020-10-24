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

app.get("/results", function(req, res){
    // get the name of the title from the search ejs file
    // and use that info to search 
    // search is the name value associated with the search 
    const query = req.query.search;
    request(`http://www.omdbapi.com/?s=${query}&apikey=thewdb`, function(error, response, body){
        console.log(typeof req.params.title);
        if(!error && response.statusCode == 200){
            let parsedBody = JSON.parse(body);
            console.log(parsedBody);

            //rendering results in html
            //but also passing the data to the ejs file
            res.render("results", {data: parsedBody, title: req.params.title});
        }
    })
});


app.listen(port, () => {
    console.log("My God always causes me to triumph!");
})