const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

env.config();
const app = express();
const port = process.env.PORT;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.kfks2hu.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database Connected");
  });

app.use(bodyParser());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
