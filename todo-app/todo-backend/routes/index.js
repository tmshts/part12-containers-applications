const express = require('express');
const router = express.Router();

const configs = require('../util/config')

// test confirguration for Redis
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics. */
router.get('/statistics', async (_, res) => {
  const result = await redis.getAsync("added_todos")
  if(result === null) {
      res.send(json_format = {
        "added_todos": 0
      })
  }
  else {
    res.send(json_format = {
        "added_todos": result
    })
  }
  //res.send(json_format);
});

module.exports = router;
