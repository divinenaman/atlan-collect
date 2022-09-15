const FormsDatabase = require("./forms");

module.exports = (dependency) => {
  formsDatabase: new FormsDatabase(dependency);
};
