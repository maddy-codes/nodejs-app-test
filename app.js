const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const bodyParser = require('body-parser'); // For parsing JSON and URL-encoded bodies

app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data


app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}`)

});

app.get('/', (req, res) => {
    res.send(path.join(__dirname , 'public','index.html'));
});


app.post('/', (req, res) => {
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    console.log(name, email, phone);
    res.send('Data received');
})

app.get