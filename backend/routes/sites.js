// get express server
const express = require("express");
// resolve routes
const path = require("path");
// creates new express server
const router = express();
// server routing for pages hosted

// static app
// router.use('/', express.static(path.resolve('..', 'static')));

// react app
router.use("/", express.static(path.resolve("build")));

module.exports = router;
