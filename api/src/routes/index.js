const { Router } = require("express");
// Importar todos los routers;
const countriesRouter = require("./countries");
const activityRouter = require("./activities");

const router = Router();
// Configurar los routers

router.use("/countries", countriesRouter);
router.use("/activity", activityRouter);

module.exports = router;
