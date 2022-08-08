const express = require("express");
const cors = require("cors");

const formsRouter = require("./router/forms");

const init = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.route("/forms", formsRouter);
  
  const port = process.env.PORT || 3002;
  app.listen(port, () => console.log(`server running on port: ${port}`));
};

module.exports = init;