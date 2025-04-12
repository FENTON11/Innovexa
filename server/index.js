
// gemini model
 const express = require("express");
 const cors = require("cors");
 const {GoogleGenerativeAI} = require("@google/generative-ai");
 const nodemailer = require("nodemailer");
 require("dotenv").config();

  const app = express();
  app.use(express.json());
  app.use(cors());

  const PORT = process.env.PORT || 5000;

  // initialize Google Gemini AI
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  // Email transporter configuration
  const transporter = nodemailer.createTransport({  
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });  
 
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
  // Contact Form Endpoint
  app.post("/contact",async(req,res)=>{
    const {name,email,phone,message}=req.body;
    try {
      // save to database
      // send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to:process.env.ADMIN_EMAIL,
        subject:`New message from ${name}`,
        text:`
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        `,
      })
      res.status(200).json({message:"Message sent successfully"});
    } catch (error) {
       console.error("Error sending email:", error);
       res.status(500).json({error:"Failed to send message. Please try again later."});
    }
  })

  // Start server
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });