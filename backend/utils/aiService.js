const axios = require("axios");

exports.analyzeEmotion = async (text) => {
  try {

    const prompt = `
Analyze the emotion of this journal text.

Text: "${text}"

Return JSON with:
emotion,
keywords (array),
summary
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const result = response.data.choices[0].message.content;

    return JSON.parse(result);

  } catch (error) {
    console.error(error);
    return null;
  }
};