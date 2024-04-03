const mongoose = require("mongoose");

const sterilizationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
  service: {
      type: String,

  },
  animal:{
    type :String,
  }
});

const Sterilization = mongoose.model("STERILIZATION", sterilizationSchema);
module.exports = Sterilization;