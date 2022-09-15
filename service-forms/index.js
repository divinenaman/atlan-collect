const app = require("./src/app");
const mongoose = require("mongoose");

app.connectToMongoDB();

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("connected to mongo")
  app.initServer();
});