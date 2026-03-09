const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema({
  pulse: {
    type: Number,
    required: true
  },

  bloodPressure: {
    type: String,
    default: "Not Provided"
  },

  oxygenLevel: {
    type: Number,
    default: 0
  },

  temperature: {
    type: Number,
    default: 0
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("HealthData", healthSchema);
