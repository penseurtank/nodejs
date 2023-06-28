const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema(
  {
    emp_id:{
      type: String,
      reuire: [true," Enter your employee id!"]
    },
    emp_email: {
      type: String,
      reuire: [true," Enter your email id!"]
    },
    emp_name: {
      type: String,
      reuire: [true," Enter your name!"]
    },
    age: {
      type: Number,
    },
    department: {
      type: String,
    },
    designation: {
      type: String,
    },
    experiance: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
