const mongoose = require("mongoose");

const SIPSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SIP", SIPSchema);
