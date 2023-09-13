import { request, response } from "express";

// Mongoose Schemas
import Flight from "../models/flight.schema.js";

/**
 * searches for flights by origin airport
 * @param {JSON} req request origin airport
 * @param {JSON} res response list of flights that start at the origin airport
 * @returns {JSON} return flights data
 */
const search_by_origin_airport = async (req = request, res = response) => {
    try {
		const originAirport = req.params.IATAcode;
		if (!originAirport) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Please provide a valid origin airport in the request body.'
            });
        }
		// watson assistant doesnt accept large responses, hence the limit
		const result = await Flight.find({ORIGIN_AIRPORT: originAirport}).limit(20);
		if (result.length === 0) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'No flights found for the provided origin airport.'
            });
        }
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

/**
 * searches for flights by destination airport
 * @param {JSON} req request destination airport
 * @param {JSON} res response list of flights that ends at the destination airport
 * @returns {JSON} return flights data
 */
const search_by_destination_airport = async (req = request, res = response) => {
    try {
		const destAirport = req.params.IATAcode;
		if (!destAirport) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Please provide a valid airport destination in the request body.'
            });
        }
		const result = await Flight.find({DESTINATION_AIRPORT: destAirport}).limit(20);
		if (result.length === 0) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'No flights found for the provided destination airport.'
            });
        }
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

/**
 * searches for flights by origin and destination airport
 * @param {JSON} req request origin and destination airport
 * @param {JSON} res response list of flights that starts
 * at the origin airport and ends at the destination airport
 * @returns {JSON} return flights data
 */
const search_by_ori_and_dest_airport = async (req = request, res = response) => {
    try {
		const originAirport = req.query.origin;
		const destAirport = req.query.destination;
		let filters = {};

		if ((!destAirport) || (!originAirport)) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Please provide a valid airport origin and destination in the request body.'
            });
        }
		filters.ORIGIN_AIRPORT = originAirport;
		filters.DESTINATION_AIRPORT = destAirport;

		const result = await Flight.find(filters).limit(20);

		if (result.length === 0) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'No flights found for the provided origin and destination airport.'
            });
        }
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

/**
 * searches for flights by departure date. It is possible to use origin airport,
 * destination airport, and airline as extra filters
 * @param {JSON} req request departure date
 * @param {JSON} res response list of flights that depart on the departure date
 * @returns {JSON} return flights data
 */
const search_by_departure_date = async (req = request, res = response) => {
    try {
		const data = req.body;
		const date = data.DEPARTURE_DATE;
		const filters = {};

		if (!date) {
			return res.status(400).json({
				status: 'Bad Request',
				message: 'Please provide a valid departure date in the request body.'
			});
		}
		const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        filters.DEPARTURE_DATE = {
            $gte: startOfDay,
            $lte: endOfDay
        };

        if (data.ORIGIN_AIRPORT) {
            filters.ORIGIN_AIRPORT = data.ORIGIN_AIRPORT;
        }
        if (data.DESTINATION_AIRPORT) {
            filters.DESTINATION_AIRPORT = data.DESTINATION_AIRPORT;
        }
        if (data.AIRLINE) {
            filters.AIRLINE = data.AIRLINE;
        }

		const result = await Flight.find(filters).limit(20);

		if (result.length === 0) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'No flights found for the provided date.'
            });
        }
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

/**
 * searches for information about a specific flight by id
 * @param {JSON} req request flight id
 * @param {JSON} res response flight requested
 * @returns {JSON} return flight data
 */
const flight_info = async (req = request, res = response) => {
    try {
		const flightId = req.params.id;
		if (!flightId) {
			return res.status(400).json({
				status: 'Bad Request',
				message: 'Please provide a valid id in the request body.'
			});
		}
        const result = await Flight.find({_id: flightId});
		if (result.length === 0) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'No flights found for the provided id.'
            });
        }
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

export default {
	search_by_origin_airport,
	search_by_destination_airport,
	search_by_ori_and_dest_airport,
	search_by_departure_date,
	flight_info
};
