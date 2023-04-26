const router = require("express").Router();
const SIP = require("../models/SIP");
const {
  verifyTokenAndDeskOfficer,
  verifyTokenAndAdmin,
  verifyTokenAndAO,
} = require("../utils/verifyToken");

//Update SIP
router.put("/:id", verifyTokenAndDeskOfficer, async (req, res) => {
  try {
    const SIP = await SIP.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(SIP);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete SIP
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await SIP.findByIdAndDelete(req.params.id);
    res.status(200).json("Centre Information has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get SIP
router.get("/find/:id", verifyTokenAndAO, async (req, res) => {
  try {
    const sip = await SIP.findById(req.params.id);
    res.status(200).json(sip);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all SIPs
router.get("/", async (req, res) => {
  try {
    const SIPs = await SIP.find({
      ...req.query,
    });

    if (SIPs.length === 0) {
      return res
        .status(400)
        .json({ message: "SIP cannot be found or does not exist" });
    }
    res.status(200).json(SIPs);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Create a SIP
router.post("/", verifyTokenAndAO, async (req, res) => {
  try {
    const newSIP = new SIP(req.body);

    const SIP = await newSIP.save();

    console.log(SIP);

    res.status(200).json(SIP);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
