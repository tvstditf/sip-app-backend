const mongoose = require("mongoose");

const TradeAreaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TradeArea", TradeAreaSchema);
