const { Schema, model } = require("mongoose");

const ChampionSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

module.exports = model("Champion", ChampionSchema);
