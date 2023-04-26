const router = require("express").Router();
const State = require("../models/State");
const {
  verifyTokenAndDeskOfficer,
  verifyTokenAndAdmin,
  verifyTokenAndAO,
} = require("../utils/verifyToken");

//Update State
router.put("/:id", verifyTokenAndDeskOfficer, async (req, res) => {
  try {
    const state = await State.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(state);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete State
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await State.findByIdAndDelete(req.params.id);
    res.status(200).json("Centre Information has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get State
router.get("/find/:id", verifyTokenAndAO, async (req, res) => {
  try {
    const states = await State.findById(req.params.id);
    res.status(200).json(states);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all States
router.get("/", async (req, res) => {
  try {
    const States = await State.find({
      ...req.query,
    });

    if (States.length === 0) {
      return res
        .status(204)
        .json({ message: "State cannot be found or does not exist" });
    }
    res.status(200).json(States);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Create a State
router.post("/", verifyTokenAndAO, async (req, res) => {
  try {
    const newState = new State(req.body);
    const state = await newState.save();
    console.log(State);

    res.status(200).json(state);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
