import e from "express";
import mongoose from "mongoose";

const airports_schema = new mongoose.Schema({
    IATA_CODE : String,
    AIRPORT : String,
    CITY : String,
    STATE : String,
    COUNTRY : String,
});

const Airports = mongoose.model("Airports", airports_schema);

export default Airports;
