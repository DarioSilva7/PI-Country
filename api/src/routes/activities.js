const { Router } = require("express");
const router = Router();
const { createActivity, getActivities } = require("../controllers/activitiesControllers");

router.get("/", getActivities);
router.post("/", createActivity);

module.exports = router;
