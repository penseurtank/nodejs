const mongoose = require("mongoose");
const inventorySchema = mongoose.Schema(
  {
    item: {
      type: String,
      required: [true, "Please add the item name!"],
    },
    quantity: {
      type: String,
      required: [true, "Please add the item quantity!"],
    },
    carrier: {
      type: String,
      required: [true, "Please add the carrier name!"],
    },
    price: {
      type: String,
      required: [true, "Please add the item price!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Inventory", inventorySchema);
