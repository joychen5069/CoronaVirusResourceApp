const axios = require("axios");
const db = require("../models/user");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const APPid = process.env.REACT_APP_SYMPTOM_ID;
const APPkey = process.env.REACT_APP_SYMPTOM_KEY;

module.exports = {
  questions: function (res) {
    axios
      .get("https://api.infermedica.com/covid19/symptoms", {
        headers: {
          "App-Id": APPid,
          "App-Key": APPkey,
        },
      })
      .then((response) => {
        //  console.log("response", response)
        //  console.log("response data", response.data)
      });
  },
  questionsPost: function (req, res) {
    // console.log(req, "controller req")
    console.log(req.body, "controller req body");
    axios({
      url: "https://api.infermedica.com/covid19/diagnosis",
      method: "POST",
      headers: {
        "App-Id": APPid,
        "App-Key": APPkey,
        //   'Content-Type': 'application/json'
      },
      data: {
        sex: "male",
        age: 20,
        evidence: req.body,
      },
    })
      .then((response) => {
        // response.data.headers['Content-Type'];
        //     console.log("headers", response.data.headers)
        //    console.log("response2", response)
        // console.log('response2 data', response.data);
        // console.log(response.data.question.items)
        return res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        //   console.log('Show error notification!');
      });
  },
  callTriage: function (req, res) {
    axios({
      url: "https://api.infermedica.com/covid19/triage",
      method: "POST",
      headers: {
        "App-Id": APPid,
        "App-Key": APPkey,
        //   'Content-Type': 'application/json'
      },
      data: {
        sex: "male",
        age: 20,
        evidence: req.body,
      },
    })
      .then((response) => {
        console.log("call triage response", response);
        return res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
