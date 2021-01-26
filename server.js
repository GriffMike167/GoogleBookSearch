const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:1KLeGaDxOEGUNhlN@cluster0.1usim.mongodb.net/message?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});