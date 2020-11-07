const express = require('express');
const router = new express.Router();


router.get("/api", function(req, res, next) {
  res.send("Y0");
});




module.exports = router;