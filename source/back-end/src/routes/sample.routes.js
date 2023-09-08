const express = require("express");
const controller = require("../controllers/sample.controller");

const router = express.Router();

router.get("/getSample", (req, res, next) => {
	controller.getSample(req, res, next);
});

export default router;
