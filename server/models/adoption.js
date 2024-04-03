const mongoose = require("mongoose");

const adoptionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  type: {
    petparent: {
      type: String,
      possibleValues: ["yes", "no", "was"],
    },
  },
  interestedanimal :{
    type :Number,
    required :true ,
   },
});

const Adoption = mongoose.model("ADOPTION", adoptionSchema);
module.exports = Adoption;
