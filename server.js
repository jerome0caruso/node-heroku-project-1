const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const TEST = process.env.TEST;
const dotenv = require('dotenv');
dotenv.config();

const jsonParser = bodyParser.json();
app.use(cors());
app.use(express.static("public"));

app.get('/', (req, res) =>
    res.status(200).send("The server is up and running")
)

app.post('/', jsonParser, (req, res) => {
    const rData = req.body.data + ' Welcome'
    res.status(200).json({rData})
})

app.listen(PORT);