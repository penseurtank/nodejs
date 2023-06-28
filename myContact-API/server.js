const express = require('express');
const errorhandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/inventoryData", require("./routes/employeeRoutes.js"));
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use(errorhandler);  

app.listen(port, ()=>{
    console.log(`server is running on the port ${port}`);
})

console.log("Welcome to express project...")