import express from "express";
import rateLimit from "express-rate-limit";
import OpenAI from "openai";

const router = express.Router();

const ragRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Allow more requests for chat
  message: {
    error: "Too many requests. Please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.method === "OPTIONS"
});

// Personal knowledge base about Twidy Kwae
const personalContext = `
You are an AI assistant helping visitors learn about Twidy Kwae. Here's what you know about him:

**Basic Information:**
- Full name: Twidy Kelvin Kwae
- Currently studying Computer Science at Taylor University
- Concentration: Information Systems
- Minors: Cybersecurity and Data Science
- Email: twidy_kwae@taylor.edu or twidykwae20@gmail.com

**Current Work Experience:**
1. Field First Technician at Taylor University IT (May 2025 - Present)
   - Delivers technical support to students, faculty, and lecturers
   - Resolves hardware, software, and network issues
   - Uses Team Dynamix for ticket management
   - Configures and deploys laptops and workstations across campus

2. Peer Tutor at Taylor University (February 2025 - Present)
   - Provides one-on-one tutoring in Statistics, Introduction to Computational Solving with Python, Music Theory, and Calculus
   - Helps students improve grades and understanding

3. STEM Tutor at NexGen Educational Hub, Accra, Ghana (April 2024 - August 2024)
   - Instructed 100+ students (ages 6-15) in robotics
   - Taught Lego EV3 and Scratch programming
   - Created weekly interactive robotics challenges
   - Focused on problem-solving, creativity, and STEM passion

**Projects:**
1. NBA Win Probability Prediction ML Model
   - Developed logistic regression classifier
   - 95% prediction accuracy and 94% recall using 2025/26 data

2. UniCore
   - Campus-focused platform for students
   - Features: connecting, finding lost items, sharing prayer requests, building community

3. AI Battleship Player
   - Built in C++
   - Uses minimax algorithm and heuristics with probabilistic targeting
   - Achieved 90% win rate against competing AI

**Personal Interests:**
- Enjoys dressing up
- Likes taking photos

**Skills:**
- Programming languages: Python, C++
- Machine Learning and Data Science
- Technical support and troubleshooting
- Teaching and tutoring
- Robotics and STEM education

Answer questions about Twidy Kwae based on this information. Be friendly, concise, and helpful. If asked about something not in this context, politely say you don't have that information but suggest they can contact him directly.
`;

router.options("/rag", (req, res) => {
  res.sendStatus(200);
});

router.post("/rag", ragRateLimiter, async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return res.status(400).json({ error: "Please provide a valid question." });
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ 
        error: "AI service is not configured. Please contact the site administrator." 
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Create the conversation with context
    const messages = [
      {
        role: "system",
        content: personalContext
      },
      {
        role: "user",
        content: question.trim()
      }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 300,
    });

    const answer = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";

    res.status(200).json({ 
      answer: answer,
      question: question.trim()
    });

  } catch (error) {
    console.error("Error in /rag:", error);
    console.error("Error details:", {
      message: error.message,
      name: error.name,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data
    });
    
    // Handle OpenAI API specific errors
    if (error.response?.status === 401) {
      return res.status(500).json({ error: "AI service authentication failed. Please check API configuration." });
    }
    
    if (error.response?.status === 429) {
      return res.status(429).json({ error: "AI service rate limit exceeded. Please try again in a moment." });
    }

    // Handle other OpenAI errors
    if (error.message?.includes('API key')) {
      return res.status(500).json({ error: "AI service configuration error. Please contact the administrator." });
    }

    // Generic error with more context
    const errorMessage = error.message || "Failed to process your question. Please try again later.";
    res.status(500).json({ error: errorMessage });
  }
});

export default router;

