const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  userId: String,
  ambience: String,
  text: String,
  emotion: String,
  keywords: [String]
}, { timestamps: true });

module.exports = mongoose.model("Journal", journalSchema);