const { response } = require("express");
const Champion = require("../models/champion");

const getChampionByYear = async (req, res = response) => {
  const { year } = req.params;

  const champion = await Champion.findOne({ year });
  res.json({
    champion,
  });
};

const postChampion = async (req, res) => {
  const { name, lastname, nationality, team, year } = req.body;
  const champion = new Champion({ name, lastname, nationality, team, year });
  await champion.save();
  res.json({
    msg: "post",
    champion,
  });
};

module.exports = {
  getChampionByYear,
  postChampion,
};
