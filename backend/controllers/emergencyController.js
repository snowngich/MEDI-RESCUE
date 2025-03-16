const Emergency = require("../models/Emergency");

// Report a new emergency
exports.reportEmergency = async (req, res) => {
  const { type, location } = req.body;

  try {
    const emergency = new Emergency({
      type,
      location,
      reportedBy: req.user.id, // User ID from token
    });

    await emergency.save();
    res.status(201).json({ message: "Emergency reported successfully", emergency });
  } catch (error) {
    console.error("Error reporting emergency:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all emergencies
exports.getEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find().populate("reportedBy", "name email");
    res.status(200).json(emergencies);
  } catch (error) {
    console.error("Error fetching emergencies:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Update emergency status
exports.updateEmergencyStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    let emergency = await Emergency.findById(id);
    if (!emergency) {
      return res.status(404).json({ message: "Emergency not found" });
    }

    emergency.status = status;
    await emergency.save();
    res.json({ message: "Emergency status updated", emergency });
  } catch (error) {
    console.error("Error updating emergency status:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an emergency
exports.deleteEmergency = async (req, res) => {
  const { id } = req.params;

  try {
    let emergency = await Emergency.findById(id);
    if (!emergency) {
      return res.status(404).json({ message: "Emergency not found" });
    }

    await emergency.deleteOne();
    res.json({ message: "Emergency deleted successfully" });
  } catch (error) {
    console.error("Error deleting emergency:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
