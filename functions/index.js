const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MyaURSGxbqXWvmg5JR5aNCihf457cNkGlFsmmmW2TDj4FARN8sH8GQGskYJtYUB1JU0USIV0NYAHFVMv76rCSJe00iGTmcsZn');

//API

// App config 
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API routes
app.get('/',(request, response) => response.status(200).send('hello world'))

// Listen Command
exports.api = functions.https.onRequest(app)