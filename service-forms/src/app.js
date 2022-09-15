const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const dependency = require("./utils/dependency");

const apiRouter = require("./router/api");

const connectToMongoDB = () => {
  mongoose.connect("mongodb://localhost:27017/atlan-collect", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const injectDependencies = (req, res, next) => {
  req.dependency = dependency();
  next();
};

const initServer = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.route("/api", injectDependencies, apiRouter)

  const port = process.env.PORT || 3002;
  app.listen(port, () => console.log(`server running on port: ${port}`));
};

module.exports = {
  initServer,
  connectToMongoDB,
};
