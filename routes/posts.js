const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, (req, res) => {
  res.json({
    posts: {
      title: 'my first post',
      description: 'random data you should not access'
    }
  });
});

module.exports = router;
