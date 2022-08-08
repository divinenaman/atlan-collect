const formsController = require("../../controllers/forms/public");

const createMemberRoutes = (r) => {
  r.get("/:formId/view", formsController.view);
  r.post("/:formId/submit", formsController.submit);
};

module.exports = createMemberRoutes;
