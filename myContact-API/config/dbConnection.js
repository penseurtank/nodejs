const mongoose = require("mongoose");

const connectDB = async () => {
  // const DB = process.env.DATABASE.replace(
  //   "<PASSWORD>",
  //   process.env.DATABASE_PASSWORD
  // );
  // mongoose
  //   .connect(DB, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //     useUnifiedTopology: true,
  //   })
  //   .then((connect) => {
  //     console.log(connect.connections);
  //     console.log("Database Connection Sucessfull!");
  //   });
  try {
    // console.log("Cloud-DB URL---------------",process.env.CONNECTION_URL)
    const connect = await mongoose.connect(process.env.DATABASE_LOCAL);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name,
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
