const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connects to a MongoDB database named experian_crud using mongoose.connect().

mongoose
  .connect('mongodb://127.0.0.1:27017/experian_crud')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to EXPERIANCRUD application." });
});

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use(express.json());