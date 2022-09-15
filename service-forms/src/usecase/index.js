const FormsUsecase = require("./forms");

module.exports = (dependency) => ({
  formsUsecase: new FormsUsecase(dependency),
});
