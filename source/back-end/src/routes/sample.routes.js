//const express = require("express");
//const controller = require("../controllers/sample.controller");
import express from "express";
import controller from "../controllers/sample.controller.js";

const router = express.Router();

router.get("/sample", (req, res) => {
	controller.sample(req, res);
});

export default router;
