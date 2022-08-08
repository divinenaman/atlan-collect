const router = require("express").Router();

const createPublicRoutes = require("./public");
const createMemberRoutes = require("./member");
const createOwnerRoutes = require("./owner");



createPublicRoutes(router);
createMemberRoutes(router);
createOwnerRoutes(router);

module.exports = router;