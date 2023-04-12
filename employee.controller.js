const db = require('./db.js').connection

const createEmployee = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let designation = req.body.designation;
    let phone = req.body.phone;
    let addres = req.body.addres;
    let state =  req.body.state;
    let city =req.body.city;


    const query = `INSERT INTO employees(name,email,designation,phone,addres,state,city) VALUES (?,?,?,?,?,?,?)`;
    db.query(query, [name, email, designation, phone, addres, state,city], function (err, data) {
        if (err) {
            res.json({ err });
        }
        else {
            res.json(data);
        }
    })
}

const employeeList = (req, res) => {
    const query = "select * from employees"
    db.query(query, (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json(result);
        }
    })

}

const updateEmployee = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let designation = req.body.designation;
    let phone = req.body.phone;
    let addres = req.body.addres;
    let state =  req.body.state;
    let city =req.body.city;

    const query = "update users set name=?,email=?,designation=?,phone=?, addres=?,state=?,city=?, where id=? "
    db.query(query, [name, email, designation, phone, addres, state,city,id], (error, result) => {
        if (error) {
            res.json({ error });
        }
        else {
            res.json({ message: "successfully updated" });
        }
    })
}


const deleteEmployee = (req, res) => {
    const id = req.body.id;
    const query = "DELETE FROM employees WHERE id= ?";
    db.query(query, [id], (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json({ message: "deleted successfully" });
        }
    })
}

const findById = (req, res) => {
    const id = req.params.id;
    const query = "select * from employees where id = ?"
    db.query(query, [id], (error, result) => {
        if (error) {
            res.json({ error });
        }
        else {
            res.json(result);
        }
    })

}

module.exports.employeeList = employeeList;
module.exports.updateEmployee = updateEmployee;
module.exports.deleteEmployee = deleteEmployee;
module.exports.findById = findById;
module.exports.createEmployee = createEmployee;
