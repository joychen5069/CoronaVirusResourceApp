const router = require("express").Router();
const countyController = require("../../contollers/countyController")

router.get("/county", (req, res) => {
    countyController.county(res)
});

module.exports = router