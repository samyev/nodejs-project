const express = require('express');
const app = express();
//const date = express.date();


app.get('/',(req, res) => {
    res.send('Good morning my dear <3');
});


app.get('/date',(req, res, next) => {
    res.send("Today's date: (day 08) ~ (month 10) ~ (year 2020)");
    next();
});

app.listen(3001);