const router = require("express").Router();

const formsController = require("../forms");

// forms
router.route("/forms", formsController.getFormsController);

module.exports = router;
