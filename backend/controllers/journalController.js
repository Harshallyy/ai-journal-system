const Journal = require("../models/Journal");
const { analyzeEmotion } = require("../utils/aiService");

exports.createJournal = async (req, res) => {
  try {
    const entry = await Journal.create(req.body);
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJournals = async (req, res) => {
  try {
    const entries = await Journal.find({ userId: req.params.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.analyzeJournal = async (req, res) => {
  try {
    const { text } = req.body;

    const analysis = await analyzeEmotion(text);

    res.json(analysis);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getInsights = async (req, res) => {
  try {
    const { userId } = req.params;

    const entries = await Journal.find({ userId });

    const totalEntries = entries.length;

    const ambienceCount = {};
    entries.forEach(e => {
      ambienceCount[e.ambience] =
        (ambienceCount[e.ambience] || 0) + 1;
    });

    const mostUsedAmbience =
      Object.keys(ambienceCount).reduce((a, b) =>
        ambienceCount[a] > ambienceCount[b] ? a : b
      , "");

    res.json({
      totalEntries,
      mostUsedAmbience
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};