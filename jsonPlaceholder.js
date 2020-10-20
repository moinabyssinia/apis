const request = require('request');
request('https://jsonplaceholder.typicode.com/users', function(error, data, result){
    if(!error){
        const parsedJson = JSON.parse(result)
        parsedJson.forEach(element => {
            console.log(element.name, element.phone);
        });
        // console.log(parsedJson[0].address.city);
    }
})