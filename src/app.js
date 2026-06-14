const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware FIRST
app.use(express.json());
app.use(cookieParser());

// Routes AFTER middleware
const authRoutes = require("./routes/auth.routes");

const musicRoutes = require("./routes/music.routes");
app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);

module.exports = app;