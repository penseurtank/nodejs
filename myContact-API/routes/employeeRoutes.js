const express = require("express");
const router = express.Router();
const {
  getEmployees,
  createEmployee,
  insertEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController")
router
  .route("/")
  .get(getEmployees)
  //.post(insertEmployee)
  .post(createEmployee);
router
  .route("/:id")
//   .get(getEmployee)
//   .put(updateEmployee)
   .delete(deleteEmployee);


module.exports = router;
