const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
  });
  
  module.exports = router;
