import express from "express";
import controller from "../controllers/flights.controller.js";

const router = express.Router();

router.get("/originAirport", (req, res) => {
	controller.SearchByOriginAirport(req, res);
});

router.get("/destAirport", (req, res) => {
	controller.SearchByDestinationAirport(req, res);
});

router.get("/depDate", (req, res) => {
	controller.SearchByDepartureDate(req, res);
});

router.get("/Info", (req, res) => {
	controller.Info(req, res);
});

export default router;
