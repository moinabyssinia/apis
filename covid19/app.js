// getting up-to-date COVID data 
const express = require('express');
const app = express();
const request = require('request');
port = 3000;

//routes
app.get("/", function(req,res){
    request("https://api.covid19api.com/summary", function(error, response, body){
        if(!error && response.statusCode == 200){
            let parsedText = JSON.parse(body);
            const dateInfo = new Date();
            console.log(parsedText.Global);
            res.render("results.ejs", {data: parsedText, date: dateInfo});
        }
    })
})


app.listen(port, () => {
    console.log("who always leads us in truimp in Christ!")
})