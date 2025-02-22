
// gemini model
 const express = require("express");
 const cors = require("cors");
 const {GoogleGenerativeAI} = require("@google/generative-ai");
 require("dotenv").config();

  const app = express();
  app.use(express.json());
  app.use(cors());

  const PORT = process.env.PORT || 5000;

  // initialize Google Gemini AI
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  app.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(message);
      const aiResponse = result.response.text();
      res.json({ reply: aiResponse });
    } catch (error) {
      console.error("Error fetching AI response:", error);
      res.status(500).json({
        error: "Failed to get response from AI. Please try again later.",
      });
    }
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });