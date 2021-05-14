const express = require("express");
const activityController = require("./activityController");

const router = express.Router();

router.get("/activities", activityController.getAllActivities);

module.exports = router;
