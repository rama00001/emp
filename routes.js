const express = require('express');
const router = express();
router.use(express.json())
const employee = require('./employee.controller.js')


router.get('/employeeList',  employee.employeeList);
router.put('/updateEmployee/:id',  employee.updateEmployee);
router.get('/deleteEmployee',  employee.deleteEmployee);
router.get('/employeeList/:id',  employee.findById);
router.post('/createEmployee',  employee.createEmployee);








router.listen(3000, () => {
  console.log('server up and running')
})
