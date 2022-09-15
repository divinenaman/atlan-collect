const Repo = require("../repository");
const Usecase = require("../usecase");
const Database = require("../database");

const dependency = () => {
  const dependency = {};

  const database = Database(dependency);
  dependency["database"] = database;

  const repo = Repo(dependency);
  dependency["repo"] = repo;

  const usecase = Usecase(dependency);
  dependency["usecase"] = usecase;

  return Object.freeze(dependency);
};


module.exports = dependency;