const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8090;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, function () {
    console.log(`Running on http://${HOST}:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.post('/receive', (req, res) => {
    console.log("request body is>>>", req.body);
    res.send("success");
});
