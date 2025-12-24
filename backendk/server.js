import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.route.js"
import main from "./app.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded())

const PORT = process.env.PORT || 5000;

// Routes
// app.use("/api/auth", authRoutes);
// app.post("/api/auth/main", main);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
