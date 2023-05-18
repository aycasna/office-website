const config = require('./dbConfig'),
      sql = require('mssql');

const getEmployees = async() => {
    try{
        let pool = await sql.connect(config);
        let employees = pool.request().query("SELECT * from Employees")
        console.log(employees);
        return employees;
    }
    catch(error){
        console.log(error);
    }
}

const createEmployee = async(Employee) => {
    try{
        let pool = await sql.connect(config);
        let employees = pool.request()
        .query(`INSERT INTO Employees VALUES
        (${Employee.EmployeeID}, '${Employee.FirstName}', '${Employee.LastName}', ${Employee.Age}, '${Employee.Gender}')
        `)
        return employees;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    createEmployee,
    getEmployees
}