const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const fs = require("fs");
const videos = require("../data/videos.json");

module.exports = router;