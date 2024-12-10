"use strict";

const express = require("express");
const { Client } = require("pg");

const app = express();
const port = 5000; // Port for the API server

const cors = require('cors');
app.use(cors);



const start = async () => {
    const client = new Client({
        database: "qdb",       // Name of the database
        host: "127.0.0.1",     // QuestDB server host
        password: "quest",     // QuestDB password
        port: 8812,            // QuestDB PostgreSQL port            
        user: "admin",         // QuestDB username
    });

    try {
        // Connect to the database
        await client.connect();

        // Query the table named 'sensor.csv'
        const res = await client.query("SELECT * FROM sensor limit 10");

        // Log the results
        console.log(res.rows);
    } catch (err) {
        // Handle errors
        console.error("Error querying the database:", err);
    } finally {
        // Close the database connection
        await client.end();
    }
};

// Start the application
start(); 
