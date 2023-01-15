const router = require('express').Router();

router.get('/', ( req, res) => {
    res.json({
        status: 'successfully',
        page: 'About page'
    })
  });
  
  module.exports = router;
