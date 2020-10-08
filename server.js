const express = require('express');
const app = express();
//const date = express.date();


app.get('/',(req, res) => {
    res.send('Good morning my dear <3');
});


app.get('/date',(req, res, next) => {
    res.send(Date(2020, 10, 07, 23, 36));
    next();
});

app.listen(3001);