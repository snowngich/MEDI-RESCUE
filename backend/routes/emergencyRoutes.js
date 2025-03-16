const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  reportEmergency,
  getEmergencies,
  updateEmergencyStatus,
  deleteEmergency,
} = require("../controllers/emergencyController");

const router = express.Router();

// Report an emergency (protected)
router.post("/", authMiddleware, reportEmergency);

// Get all emergencies (protected)
router.get("/", authMiddleware, getEmergencies);

// Update emergency status (protected)
router.put("/:id", authMiddleware, updateEmergencyStatus);

// Delete an emergency (protected)
router.delete("/:id", authMiddleware, deleteEmergency);

module.exports = router;
