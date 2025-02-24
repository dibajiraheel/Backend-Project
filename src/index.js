import 'dotenv/config'
import ConnectDB from "./db/dbConnection.js";
import express from "express"
import { log } from 'node:console';

const app = express()

ConnectDB()
.then((res) => {
    if (!res) console.log('Response not found after db connection');
    else {
        console.log('DB Connected Successfully');
        app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}`);
        })
    }
    })
.catch((error) => {
    console.log('DB Connection failed in index.js with error', error);
})