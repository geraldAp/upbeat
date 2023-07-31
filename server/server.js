require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const newsletterRoutes = require('./routes/newsLetter')
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });


// Routes
app.use("/api/newsletters",newsletterRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  const port = process.env.PORT || 4000;
  app
    .listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
}) .catch((error) => {
    console.log(error);
  });
