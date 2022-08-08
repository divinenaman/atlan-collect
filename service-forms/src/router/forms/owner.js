const formsController = require("../../controllers/forms/owner");

const createMemberRoutes = (r) => {
  r.get("/create", formsController.create);
  r.get("/:formId/view", formsController.view);
  r.post("/:formId/submit", formsController.submit);
  r.get("/:formId/edit", formsController.edit);
  r.get("/:formId/responses", formsController.responses);
};

module.exports = createMemberRoutes;
