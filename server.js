const express = require('express'),
      dbOperation = require('./dbFiles/dbOperation'),
      cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async(req, res) => {
    const result = await dbOperation.getEmployees(req.body.name);
    res.send(result.recordset)
});

app.post('/hello', async(req, res) => {
    await dbOperation.createEmployee(req.body);
    const result = await dbOperation.getEmployees(req.body.FirstName);
    res.send(result.recordset)
});

dbOperation.getEmployees().then(res => {
    console.log(res.recordset);
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
