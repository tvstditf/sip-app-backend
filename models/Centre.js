const mongoose = require("mongoose");

const CentreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
      max: 11,
    },
    contactPerson: {
      type: String,
    },
    address: {
      type: String,
      min: 7,
    },
    tradeArea: {
      type: Array,
    },
    state: {
      type: String,
    },
    bank: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Centre", CentreSchema);
