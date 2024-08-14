const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is Required"],
    },
    type: {
      type: String,
      required: [true, "Type is Required"],
    },
    category: {
      type: String,
      required: [true, "Category is Required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
    date: {
      type: Date,
      required: [true, "Date is Required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;
