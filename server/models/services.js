const mongoose = require("mongoose");

const servicesSchema = mongoose.Schema({
  services: {
    type: String,
    required: true,
  }});

const Service = mongoose.model("SERVICE", servicesSchema);
module.exports = Service;
