//const { request, response } = require("express");
import { request, response } from "express";

// Mongoose Schemas
//const Sample = require("../models/sample.schema");
import Sample from "../models/sample.schema.js";

/**
 * Sample Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const sample = async (req = request, res = response) => {
    // Returns list of Sample objects under "result" field
    /* #swagger.responses[200] = {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                    "type" : "object",
                    "properties" : {
                        "result" : {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/Sample"
                            }
                        }
                    }
                }
              }
            }
        }
    */
    try {
        // Your Code Goes Here!!!!
        result = await Sample.find({});
        // Return query result
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};
/*
module.exports = {
    sample,
};*/
export default { sample };