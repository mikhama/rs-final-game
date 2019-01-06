const mongoose = require('mongoose');

const { Schema } = mongoose;

const scoreSchema = new Schema({
  name: String,
  monstersCount: Number,
});

scoreSchema.methods.cleanup = function cleanup() {
  return {
    name: this.name,
    monstersCount: this.monstersCount,
  };
};

module.exports = scoreSchema;
