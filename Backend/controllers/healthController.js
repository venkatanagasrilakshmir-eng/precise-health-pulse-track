const HealthData = require("../models/HealthData");

exports.addHealthData = async (req, res) => {
  try {
    const { pulse, bloodPressure, oxygenLevel, temperature } = req.body;

    const health = new HealthData({
      pulse,
      bloodPressure,
      oxygenLevel,
      temperature
    });

    await health.save();

    res.status(201).json({
      message: "Health Data Saved",
      data: health
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


exports.getHealthHistory = async (req, res) => {
  try {

    const data = await HealthData.find().sort({ date: -1 });

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


exports.updateHealthData = async (req, res) => {

  try {

    const id = req.params.id;

    const updated = await HealthData.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


exports.deleteHealthData = async (req, res) => {

  try {

    const id = req.params.id;

    await HealthData.findByIdAndDelete(id);

    res.json({
      message: "Record Deleted"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};
