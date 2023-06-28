const asyncHandler = require("express-async-handler");
const employeeForm = require("../model/employeeModel");

/**
 * @desc Get all employees
 * @route GET /api/employee
 * @access public
 */

const getEmployees = asyncHandler(async (req, res) => {
  try {
    const data = await employeeForm.find();
    if (!data) {
      throw new Error("No employee data found!");
    }
    console.log(`findOne -- Success-->${data}`);
    res.status(200).json(data);
    return data;
  } catch (error) {
    console.log(`findOne --Error-->${data}`);
    return error;
  }
});

/**
 * @desc create new employee
 * @route POST /api/employee
 * @access public
 */
const createEmployee = asyncHandler(async (req, res) => {
  try {
    const { emp_id, emp_email, emp_name } = req.body;
    let body = req.body;
    if (
      emp_id &&
      emp_email &&
      emp_name &&
      emp_id !== "" &&
      emp_email !== "" &&
      emp_name !== ""
    ) {
      let item = {
        emp_id: emp_id,
        emp_email: emp_email,
        emp_name: emp_name,
      };

      body && body.age && (item["age"] = body.age);
      body && body.department && (item["department"] = body.department);
      body && body.designation && (item["designation"] = body.designation);
      body && body.experiance && (item["experiance"] = body.experiance);

      // age,
      // department,
      // designation,
      // experiance,

      const createEmployees = await employeeForm.create(item);
      res.status(201).json(createEmployees);
    } else {
      console.log("........:)", req.body);
      res.status(400).send("Fields are mandatory!")
      throw new Error("Fields are mandatory!");
    }
  } catch (error) {s
    console.log(`findOne --Error-->${employeeDetails}`);
    return error;
  }
});

module.exports = { getEmployees, createEmployee };
