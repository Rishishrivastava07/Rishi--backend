// require('dotenv').config()
import mongoose from 'mongoose';
import { DB_Name } from '../constants.js'





const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/{DB_Name}`)
       console.log(`\n mongodb connected!! DB host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection ", error);
        process.exit(1)
    }
}
export default connectDB




    


