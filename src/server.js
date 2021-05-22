const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const app = express();

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

//environment variables
env.config();

//mongodb connection
//mongodb+srv://root:admin@cluster0.j1il9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.j1il9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Server",
  });
});

app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
