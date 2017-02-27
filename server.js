var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
    console.log("I received a GET request");

    // Dummy data
    person1 = {
        name: 'Claire',
        email: 'claire@example.com',
        number: '(111) 111-1111'
    };

    person2 = {
        name: 'George',
        email: 'george@gmail.com',
        number: '(111) 222-2222'
    };

    person3 = {
        name: 'Bill',
        email: 'bill@example.com',
        number: '(111) 333-3333'
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");
