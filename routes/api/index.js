const path = require ("path");
const SymptopmChecker =require ("./SymptomChecker");
const  router  = require("express").Router();

router.use("/symptomchecker", SymptopmChecker)

module.exports = router;
