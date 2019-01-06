const mongoose = require('mongoose');

const scoreSchema = require('./score-schema');

const Score = mongoose.model('Score', scoreSchema);

module.exports.read = async function read({ limit = 0 }) {
  const scores = await Score.find()
    .sort({ monstersCount: -1, _id: 1 })
    .limit(parseInt(limit, 10))
    .exec();

  return scores.map(score => score.cleanup());
};

module.exports.create = async function create({ name, monstersCount }) {
  const score = await Score.create({ name, monstersCount });

  return score;
};
