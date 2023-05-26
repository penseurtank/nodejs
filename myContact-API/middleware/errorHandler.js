const { constants } = require("../constants");

const errorhandler = (err, req, res, next) => {
  
    const statusCode = res.statusCode ? res.statusCode : 500;
 
  switch (statusCode) {
    case constants.VALIDATAION_ERROR:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHRIZED:
      res.json({
        title: "Un-Authrized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constants.SERVER_ERROR:
        res.json({
          title: "Internal Server Error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    default:
        console.log("No Error, All Good...!");
      break;
  }
};

module.exports = errorhandler;
