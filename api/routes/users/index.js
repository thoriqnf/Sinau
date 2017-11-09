const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/", controller.get);
router.get("/:id", controller.getOne);

// router.delete("/", controller.delete)
// rounter.put("/:id", controller.putOne)

module.exports = router;
