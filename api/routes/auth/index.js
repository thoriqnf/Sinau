const express = require("express");
const router = expess.Router();

const controller = require("./controller");

router.get("/", controller.get);

router.post("/signup", controller.signup);

router.post("/login", controller.login);

router.post("/check", controller.checkToken);

module.exports = router;
