const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const cors = require("cors");

app.use(cors());

// Routes Imported here
const userDataRoute = require("./Routes/UserRoutes.js");

app.get("/", (req, res) => {
  res.send("API running");
});

// Connect to MongoDB database (locally) and Create the database in MongoDB (test_data)
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(process.env.PORT || 8080, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Server running at port ${process.env.PORT || 8080}`);
      }
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

  app.use('/api',userDataRoute)