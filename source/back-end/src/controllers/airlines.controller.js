import { request, response } from "express";

// Mongoose Schemas
import Airline from "../models/airline.schema.js";

/**
 * searches for associated airlines with Watson Airlines
 * @param {JSON} res response list of associated airlines
 * @returns {JSON} return airlines data
 */
const associated_airlines = async (req = request, res = response) => {
    try {
		// find({}) returns every airline
        const result = await Airline.find({});

		if (result.length === 0) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'No airlines found.'
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
 * gives short description about Watson Airlines
 * @param {JSON} res response Watson Airlines description
 * @returns {JSON} return description
 */
const about = async (req = request, res = response) => {
    try {
        const result = "Watson Airlines is a one of the largest airlines in America. With over 30 years of history, we connect people to opportunities while expanding the understanding of our planet and the people within it. We offer our one-of-a-kind value and Hospitality at over 50 airports across more than 15 countries. In addition, we are members of the International Air Transport Association (IATA), a trade association that represents over 300 airlines, equivalent to about 83% of total air traffic. This allows us to operate safely, securely, efficiently, and economically under clearly defined rules. \nWe are pioneers in the usage of technology, and actively advocate for its usage to improve our customer's experience.";
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

export default { associated_airlines, about };
