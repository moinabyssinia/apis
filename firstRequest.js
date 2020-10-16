const request = require('request');
request('http://git.JURUC', function(error, response, body){
    //404 = cannot be found
    //200 = okay, standard report
    if(error){
        console.log("Es gibt ein Problem!");
        console.log(error);
    } else {
        if(response.statusCode == 200){
            console.log("Alles Klar!");
            console.log(body);
        }
    }
})