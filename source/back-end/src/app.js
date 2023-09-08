/*
const path = require("path");
const mongoose = require('mongoose');
const mongo = require("./db/sample.mongodb");
const express = require("express");
const sampleRouter = require("./routes/sample.routes");
const http = require("http");
*/
// this is to be able to use require in ES module
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import path from "path";
import mongoose from "mongoose";
import mongo from "./db/sample.mongodb.js";
import express from "express";
import sampleRouter from "./routes/sample.routes.js";
import http from "http";

const app = express();

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main(){

    // Get global variables from .env file
    require("dotenv").config({path: path.resolve(__dirname,"../.env")});

    // Connect to database
    //const { create_connection } = require("./db/sample.mongodb");
	const { create_connection } = mongo;
    await create_connection();

	// Set up routes
	console.log("Setting up routes...");
	app.use("/samplea", sampleRouter);

	// Error handling
	app.use((req, res, next) => {
		const error = new Error("Not found");

		res.status(404).json({
			message: error.message,
		});
	});

}

main();

// Open server in port 3000
const httpServer = http.createServer(app);
httpServer.listen(3000);