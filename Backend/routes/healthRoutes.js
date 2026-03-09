const express = require("express");
const router = express.Router();

const {
  addHealthData,
  getHealthHistory,
  updateHealthData,
  deleteHealthData
} = require("../controllers/healthController");


router.post("/add", addHealthData);

router.get("/history", getHealthHistory);

router.put("/update/:id", updateHealthData);

router.delete("/delete/:id", deleteHealthData);

module.exports = router;
