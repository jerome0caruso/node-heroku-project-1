const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const TEST = process.env.TEST;
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.TEST)

app.get('/', (req, res) => {
    res.status(200).send('This is the start of my large project' + TEST);
})

app.listen(PORT)