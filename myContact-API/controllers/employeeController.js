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
      res.status(404).send("Data Not Found!");
      throw new Error("No employee data found!");
    }
    //console.log(`findOne -- Success-->${data}`);
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
      res.status(400).send("Fields are mandatory!");
      throw new Error("Fields are mandatory!");
    }
  } catch (error) {
    console.log(`findOne --Error-->${employeeDetails}`);
    return error;
  }
});

/**
 * @desc delete employee
 * @route DELETE /api/employee/:id
 * @access public
 */
const deleteEmployee = asyncHandler(async (req, res) => {
  try {
    const deleteEmployeeByIds = await employeeForm.find(req.params.id);
    console.log("=====Request Ids=========", deleteEmployeeByIds);
    // if (deleteEmployeeByIds.isValid(id)) {
    //   if (String(new deleteEmployeeByIds(id)) === id){
    //     console.log("========Valid============",deleteEmployeeByIds);
    //     res.status(200).json("It's valid id");
    //   }else{
    //     console.log("======Invalid==============",deleteEmployeeByIds);
    //     res.status(404).send("It's not a valid ID!");
    //   };
    // } else 
      if (
      !Array.isArray(deleteEmployeeByIds) ||
      !deleteEmployeeByIds.every((id) => ObjectId.isValid(id))
    ) {
      res.status(404).send("Incorrect employee id!");
      throw new Error("Employee id not found");
    } else if (deleteEmployeeByIds >= 2) {
      // Convert deleteEmployeeByIds to ObjectId type
      const employeeIdArray = deleteEmployeeByIds.map((id) => ObjectId(id));
      // Delete multiple records using the array of ObjectIds
      const result = await employeeForm.deleteMany({
        _id: { $in: employeeIdArray },
      });
      console.log("Deleted items:", result.deletedCount);
    } else {
      await employeeForm.deleteOne({ _id: deleteEmployeeByIds._id });
      console.log("one record deleted successfully.....");
      res.status(200).json({ message: "one record deleted successfully....." });
      //res.status(204).json({ message: `Delete employee for ${req.params.id}` });
    }
  } catch (error) {
    console.log(`Error: request failed! ${employeeDetails}`);
    return error;
  }
});

module.exports = { getEmployees, createEmployee, deleteEmployee };
