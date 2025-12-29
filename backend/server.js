import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: [process.env.FRONTEND_URL, "https://www.twidykwae.xyz"],
  methods: ["GET", "POST"],         
  credentials: true
})); 

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

