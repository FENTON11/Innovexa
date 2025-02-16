// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 5000;

// // OpenAI API Chat Route
// app.post("/chat", async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are an AI assistant for Innovexa, a tech company specializing in web and mobile app development.",
//           },
//           { role: "user", content: message },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          
//         },
//       }
//     );

//     res.json({ reply: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error("Error fetching AI response:", error.response?.data || error.message);
//     console.log("API Key Loaded:", process.env.OPENAI_API_KEY?.length > 10);
//     res.status(500).json({
//       error: "Failed to get response from AI. Please try again later.",
//     });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });

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