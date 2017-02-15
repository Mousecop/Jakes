const express = require('express');

const app = express();

app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.send('Hello from Contact Page');
});




app.listen(3000);