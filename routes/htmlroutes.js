const express = require("express");
const router = express.Router();
const path = require("path");

// 'Get /notes'  should return the notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

// 'Get *' should return the notes.html file as default
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  module.exports = router;