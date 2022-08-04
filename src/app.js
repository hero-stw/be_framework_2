import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import UserRoute from "./routes/users";
import RecordRoute from "./routes/records";
import SettingsRoute from "./routes/settings";
import HistoryRoute from "./routes/playingHistory";

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", UserRoute);
app.use("/api", RecordRoute);
app.use("/api", SettingsRoute);
app.use("/api", HistoryRoute);

mongoose
  .connect("mongodb://localhost:27017/mathtool")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error", err);
  });
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
