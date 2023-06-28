const express = require("express");
const router = express.Router();
const {
  getInventoryAllData,
  createInventoryData,
  insertManyData,
  getInventoryData,
  updateInventoryData,
  deleteInventoryData,
} = require("../controllers/inventoryController");

router
  .route("/")
  .get(getInventoryAllData)
  //.post(createInventoryData)
  .post(insertManyData);
router
  .route("/:id")
  .get(getInventoryData)
  .put(updateInventoryData)
  .delete(deleteInventoryData);


module.exports = router;
