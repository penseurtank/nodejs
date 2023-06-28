const asyncHandler = require("express-async-handler");
const inventoryForm = require("../model/inventoryModel");

/**
 * @desc Get all inventoryData
 * @route GET /api/inventoryData
 * @access public
 */
const getInventoryAllData = asyncHandler(async (req, res) => {
  const inventory = await inventoryForm.find();
  res.status(200).json(inventory);
});

/**
 * @desc Create new inventoryData
 * @route POST /api/inventoryData
 * @access public
 */
const createInventoryData = asyncHandler(async (req, res) => {
  console.log("The request body is:",req.body);
  const { item, quantity, carrier, price } = req.body;
  if (!item || !quantity || !carrier || !price) {
    res.status(400);
    throw new Error(" Fields are mandatory!");
  }
  const createInventoryData = await inventoryForm.create({
    item,
    quantity,
    carrier,
    price,
  });
  res.status(201).json(createInventoryData);
});

/**
 * @desc Insert multiple records in inventoryData
 * @route POST /api/inventoryData
 * @access public
 */
const insertManyData = asyncHandler(async (req, res) => {
  const newRecords = req.body;
  console.log("==============",newRecords)
  try
  {
    const insertInventoryManyData = await inventoryForm.insertMany(newRecords);
    if (!insertInventoryManyData) {
      res.status(404);
      throw new Error("Records not inserted!");
    }
    res.status(201).json(insertInventoryManyData);
  }
  catch(e)
  {
    console.log(e);
    res.status(404).send(e.message);
    // throw new Error("Records not inserted!", e);
  }
});

/**
 * @desc Get inventoryData
 * @route GET /api/inventoryData/:id
 * @access public
 */
const getInventoryData = asyncHandler(async (req, res) => {
  const findInventoryDataById = await inventoryForm.findById(req.params.id);
  if (!findInventoryDataById) {
    res.status(404);
    throw new Error("Items not found");
  }
  res.status(200).json(findInventoryDataById);
});

/**
 * @desc Update inventoryData
 * @route PUT /api/inventoryData/:id
 * @access public
 */

const updateInventoryData = asyncHandler(async (req, res) => {
  const updateInventoryDataById = await inventoryForm.findById(req.params.id);
  if (!updateInventoryDataById) {
    res.status(404);
    throw new Error("Item not found");
  }
  const updatedInventoryDataById = await inventoryForm.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
  res.status(200).json(updatedInventoryDataById);
});

/**
 * @desc Delete inventoryData
 * @route DELETE /api/inventoryData/:id
 * @access public
 */

const deleteInventoryData = asyncHandler(async (req, res) => {
  const deleteInventoryDataById = await inventoryForm.findById(req.params.id);
  if (!deleteInventoryDataById) {
    res.status(404);
    throw new Error("Item not found");
  }
  await inventoryForm.deleteOne({ _id: deleteInventoryDataById._id });
  console.log("one record deleted successfully.....");
  res.status(200).json(deleteInventoryDataById);
});

module.exports = {
  getInventoryAllData,
  createInventoryData,
  insertManyData,
  getInventoryData,
  updateInventoryData,
  deleteInventoryData,
};
