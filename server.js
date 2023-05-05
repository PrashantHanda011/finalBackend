import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import dotenv from "dotenv";
import loginRoutes from "./routes/login-routes.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use("/api/user", router);
app.use("/api/auth", loginRoutes);
//http://localhost:8080/api/user
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://handaprashant719:prashant123@cluster0.hr9a5ny.mongodb.net/PersonalityData?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
app.get('/', (req, res) => {
  res.json({ message: 'Backend WORKING' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
