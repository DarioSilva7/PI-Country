const { Router } = require("express");
const router = Router();

const { getCountries, getCountryDetail } = require("../controllers/countriesControllers");

router.get("/", getCountries )

router.get("/:id", getCountryDetail)

module.exports = router;