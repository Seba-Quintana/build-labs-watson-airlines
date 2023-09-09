import { request, response } from "express";

// Mongoose Schemas
import Flight from "../models/flight.schema.js";

/**
 * Airlines Controller
 * @param {JSON} req request associated airlines
 * @param {JSON} res response list of associated airlines
 * @returns {JSON} return description
 */
const SearchByOriginAirport = async (req = request, res = response) => {
    try {
		let originAirport = req.body;
		let result = await Flight.find({DESTINATION_AIRPORT: originAirport});
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
 * Airlines Controller
 * @param {JSON} req request associated airlines
 * @param {JSON} res response list of associated airlines
 * @returns {JSON} return description
 */
const SearchByDestinationAirport = async (req = request, res = response) => {
    try {
		let destAirport = req.body;
		let result = await Flight.find({DESTINATION_AIRPORT: destAirport});
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
 * Airlines Controller
 * @param {JSON} req request associated airlines
 * @param {JSON} res response list of associated airlines
 * @returns {JSON} return description
 */
const SearchByDepartureDate = async (req = request, res = response) => {
    try {
		let date = req.body;
		let result = await Flight.find({DEPARTURE_DATE: date});
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
 * Airlines Controller
 * @param {JSON} req request information about Watson Airlines
 * @param {JSON} res response Watson Airlines description
 * @returns {JSON} return description
 */
const Info = async (req = request, res = response) => {
    try {
        let result = await Flight.find({})
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

export default { SearchByOriginAirport, SearchByDestinationAirport, SearchByDepartureDate, Info };
