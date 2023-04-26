const router = require("express").Router();
const TradeArea = require("../models/TradeArea");
const {
  verifyTokenAndDeskOfficer,
  verifyTokenAndAdmin,
  verifyTokenAndAO,
} = require("../utils/verifyToken");

//Update TradeArea
router.put("/:id", verifyTokenAndDeskOfficer, async (req, res) => {
  try {
    const TradeArea = await TradeArea.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(TradeArea);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete TradeArea
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await TradeArea.findByIdAndDelete(req.params.id);
    res.status(200).json("Centre Information has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get TradeArea
router.get("/find/:id", verifyTokenAndAO, async (req, res) => {
  try {
    const tradeArea = await TradeArea.findById(req.params.id);
    res.status(200).json(tradeArea);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all TradeAreas
router.get("/", async (req, res) => {
  try {
    const TradeAreas = await TradeArea.find({
      ...req.query,
    });

    if (TradeAreas.length === 0) {
      return res
        .status(400)
        .json({ message: "TradeArea cannot be found or does not exist" });
    }
    res.status(200).json(TradeAreas);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Create a TradeArea
router.post("/", verifyTokenAndAO, async (req, res) => {
  try {
    const newTradeArea = new TradeArea(req.body);

    const tradeArea = await newTradeArea.save();

    console.log(tradeArea);

    res.status(200).json(tradeArea);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
