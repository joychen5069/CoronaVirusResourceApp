const router = require("express").Router();
const sypmtomChekerController = require("../../contollers/symptomController");

router.get("/", (req, res) => {
    console.log("symptom cheker is getting called")
    sypmtomChekerController.questionsPost({body: []}, res)
});

router.post("/", (req, res) =>{
    sypmtomChekerController.questionsPost(req, res)
  });

  router.post("/triage", (req,res) => {
    sypmtomChekerController.callTriage(req, res)
  })

module.exports = router






  