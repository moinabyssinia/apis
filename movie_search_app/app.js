// to serve movie data from a movie api
const express = require("express");
const app = express();
// http caller package - find alternative to request
const request = require("request");
const port = 3000;

// routes
app.get("/results", function(req, res){
    request('http://www.omdbapi.com/?s=ethiopia&apikey=thewdb', function(error, response, body){
        if(!error && response.statusCode == 200){
            let parsedBody = JSON.parse(body);
            // console.log(parsedBody);

            //to send parsedBody - take a look at the object first
            res.send(parsedBody['Search'][3]);
        }
    })
});


app.listen(port, () => {
    console.log("My God always causes me to triumph!");
})