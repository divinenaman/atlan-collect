const mongo = require("./mongo");

module.exports = (dependency) => ({
  mongo: mongo(dependency),
});
