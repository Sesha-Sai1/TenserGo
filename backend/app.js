const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const emailRoutes = require("./routes/email");
require("./config/passport-setup"); // Google OAuth setup

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000", // The frontend URL
  credentials: true, // Allow credentials (cookies, headers)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowesHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(
  session({ secret: "your-secret", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use("/emails", emailRoutes);

mongoose
  .connect(
    "mongodb+srv://seshasaikothapalli1350:seshasai1@cluster0.2nwjhzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
