import express from "express";
import controller from "../controllers/flights.controller.js";

const router = express.Router();

router.get("/originAirport", (req, res) => {
	controller.search_by_origin_airport(req, res);
});

router.get("/destAirport", (req, res) => {
	controller.search_by_destination_airport(req, res);
});

router.get("/oriDestAirport", (req, res) => {
	controller.search_by_ori_and_dest_airport(req, res);
});

router.get("/depDate", (req, res) => {
	controller.search_by_departure_date(req, res);
});

router.get("/info", (req, res) => {
	controller.flight_info(req, res);
});

export default router;
