const { Router } = require("express");
const {
  getChampionByYear,
  postChampion,
} = require("../controllers/champion.js");

const router = Router();

router.get("/:year", getChampionByYear);
router.post("/", postChampion);

module.exports = router;
