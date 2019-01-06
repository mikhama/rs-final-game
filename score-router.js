const express = require('express');
const scoreModel = require('./score-model');
const asyncHandler = require('./utils');

const { Router } = express;

const router = new Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { query } = req;
    const scores = await scoreModel.read(query);

    res.json(scores);
    res.end();
  }),
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { name, monstersCount } = req.body;
    const score = await scoreModel.create({ name, monstersCount });

    res.json(score.cleanup());
    res.end();
  }),
);

module.exports = router;
