const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const journalRoutes = require("./routes/journalRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/journal", journalRoutes);

app.get("/", (req, res) => {
  res.send("AI Journal API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});