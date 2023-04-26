const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    tradeArea: {
      type: Array,
    },
    sip: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("State", StateSchema);
