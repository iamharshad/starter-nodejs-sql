const express = require("express");

const { index, add, post } = require("../controllers/controller");

const router = express.Router();

router.get("/", index);
router.get("/add", add);
router.post("/post", post);

module.exports = router;
