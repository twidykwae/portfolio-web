import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
dotenv.config();

const app = express();

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin || 'none'}`);
  next();
});

app.use(express.json());

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      "https://www.twidykwae.xyz",
      "https://portfolio-web-production-421f.up.railway.app"
    ].filter(Boolean);
    
    if (allowedOrigins.includes(origin) || allowedOrigins.some(allowed => origin.includes(allowed))) {
      callback(null, true);
    } else {
      callback(null, true); // Allow all origins for now to debug
    }
  },
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],         
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200
})); 

const PORT = process.env.PORT || 3001;

app.use("/api", contactRoutes);

// Test endpoint to verify API routing works
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working", timestamp: new Date().toISOString() });
});

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

