// Imports the express npm package
const express = require("express"); 

const fs = require("fs");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/api");
// const uuid = require("uuid");

// Use either the default port or port 3001
const PORT = process.env.PORT || 3001;

// This initalises express
const app = express();

// Middleware for parsing JSON and urlencoded form data.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

// This function listens to app in PORT
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
