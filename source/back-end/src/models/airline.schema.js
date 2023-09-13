import e from "express";
import mongoose from "mongoose";

const airline_schema = new mongoose.Schema({
  IATA_CODE : String,
  AIRLINE : String,
});

const Airlines = mongoose.model("Airlines", airline_schema);

export default Airlines;
