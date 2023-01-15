const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h1>Contact Page</h1>')
  });
  
  module.exports = router;
