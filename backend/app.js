import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      "https://twidykwae.xyz",
      "https://www.twidykwae.xyz",
      "http://localhost:5173", // For local development
      "http://localhost:3000"   // For local development
    ].filter(Boolean); 
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],         
  credentials: true
}));
app.use(express.json()); 

const PORT = process.env.PORT || 3001;

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("App is working");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port:", PORT);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to DB, server not started", error);
  });

