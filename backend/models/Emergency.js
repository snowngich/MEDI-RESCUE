const mongoose = require("mongoose");

const EmergencySchema = new mongoose.Schema({
  type: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, default: "Pending" },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Emergency", EmergencySchema);
