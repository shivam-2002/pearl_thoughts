const express = require("express");
const sendWithRetry = require("./retryLogic");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static("public")); // Serve static files from "public" directory
app.use(express.static("views")); // Serve JavaScript files from "views" directory

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;
  const emailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
  };

  try {
    await sendWithRetry(emailOptions);
    res.status(200).send("Email sent successfully.");
  } catch (error) {
    res.status(500).send("Failed to send email.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
