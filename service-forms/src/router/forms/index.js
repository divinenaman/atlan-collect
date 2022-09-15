const router = require("express").Router();

const formsController = require("../../controllers/forms");

router.get("/", formsController.getFormsController);

module.exports = router;
