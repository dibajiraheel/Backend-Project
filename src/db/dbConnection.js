import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const ConnectDB = async() => {
    try {
        // console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
        return await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log('Error Occured while connecting database inside dbConnection.js', error);
    }
}

export default ConnectDB