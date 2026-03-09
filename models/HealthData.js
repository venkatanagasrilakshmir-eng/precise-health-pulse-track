const mongoose = require("mongoose");

const HealthSchema = new mongoose.Schema({
  pulse: {
    type: Number,
    required: true
  },

  bloodPressure: {
    type: String
  },

  oxygenLevel: {
    type: Number
  },

  temperature: {
    type: Number
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("HealthData", HealthSchema);
