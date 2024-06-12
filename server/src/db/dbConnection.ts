import mongoose from "mongoose";

const connectDatabase = async() => {
    try {
        const connect = await mongoose.connect(`${process.env.DATABASE_URI}`);
        console.log("Database Successfully Connected: ", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDatabase;