const formsController = require("../../controllers/forms/member");

const createMemberRoutes = (r) => {
  r.get("/:formId/view", formsController.view);
  r.post("/:formId/submit", formsController.submit);
  r.get("/:formId/edit", formsController.view);
  r.get("/:formId/responses", formsController.view);
};

module.exports = createMemberRoutes;
