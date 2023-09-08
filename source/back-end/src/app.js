const path = require("path");
const mongoose = require('mongoose');
const mongo = require("./db/sample.mongodb");
const express = require("express");

const app = express();

async function main(){

    // Get global variables from .env file
    require("dotenv").config({path: path.resolve(__dirname,"../.env")});

    // Connect to database
    const { create_connection } = require("./db/sample.mongodb");
    await create_connection();

    const Sample = require("./models/sample.schema");

	/*
	async function sample_schema() {
  		console.log(await Sample.find({}));
	}
	sample_schema();
	*/
}

main();
