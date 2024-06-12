import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./db/dbConnection";
import userAPI from "./routes/userEndpoints";

dotenv.config();
connectDatabase();
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/userAPI", userAPI);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});