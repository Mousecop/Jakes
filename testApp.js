const express = require('express');

const app = express();

app.use(express.static('assests'));


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/contact', (req, res) => {
    res.send('Hello from Contact Page');
});




app.listen(3000);