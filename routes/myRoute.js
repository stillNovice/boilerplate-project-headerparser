const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  let ip = req.headers['x-forwarded-for'];
  let userAgent = req.headers['user-agent'];
  let acceptLanguage = req.headers['accept-language'];

  res.json({
    ipaddress: ip,
    language: acceptLanguage,
    software: userAgent
  });
});

module.exports = router;
