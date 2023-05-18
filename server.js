const express = require('express'),
      Employee = require('./dbFiles/employee'),
      dbOperation = require('./dbFiles/dbOperation'),
      cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', function(req, res) {
    console.log('Called');
    res.send({result: 'go away'})
})

app.post('/hello', function(req, res) {
    console.log('Called');
    res.send({result: 'HI'})
})

let Pam = new Employee(1002, 'Pam', 'Beasley', 29, 'Female');

//console.log(Pam)
// dbOperation.getEmployees().then(res => {
//     console.log(res.recordset);
// })

// dbOperation.createEmployee(Pam);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
