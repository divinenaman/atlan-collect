const FormsRepo = require("./forms");

module.exports = (dependency) => ({
  formsRepo: new FormsRepo(dependency),
});
