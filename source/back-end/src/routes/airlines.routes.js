//const express = require("express");
//const controller = require("../controllers/sample.controller");
import express from "express";
import controller from "../controllers/airlines.controller.js";

const router = express.Router();

router.get("/airlines", (req, res) => {
	controller.associated_airlines(req, res);
});

router.get("/about", (req, res) => {
	controller.about(req, res);
});

export default router;
