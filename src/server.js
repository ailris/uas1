const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Made by Christine Wielia 2101160001 Teknologi Informasi with Node JS ");
});

app.listen(3000, function () {
    console.log("app listening on port 3000");
});