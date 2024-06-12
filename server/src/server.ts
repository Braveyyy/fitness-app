import express from "express";
import cors from "cors";
import connectDatabase from "./db/dbConnection";
import userRecords from "./routes/userEndpoints";

connectDatabase();
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/userRecords", userRecords);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});