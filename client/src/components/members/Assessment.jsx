import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./assessments.css";

const Assessment = () => {
  const [questionsObject, setQuestionsObject] = useState({
    items: [],
    text: "",
    type: "",
    choices: [],
  });
  const [storedAnswers, setStoredAnswers] = useState([]);
  const [isTriage, setIsTriage] = useState(false);
  const [triageResult, setTriageResult] = useState({});

  useEffect(() => {
    // console.log("use effect This is being called");
    API.getQuestions().then((res) => {
      // console.log(" use effect assessment", res.data);
      const response = res.data.question;
      setQuestionsObject(response);
      const answerArray = response.items.map((question) => {
        return { id: question.id, choice_id: "absent" };
      });
      setStoredAnswers(answerArray);
    });
  }, []);

  const checkedAnswer = (e) => {
    const id = e.target.id;
    const foundAnswer = storedAnswers.find((answer) => answer.id === id);
    const newAnswer =
      foundAnswer.choice_id === "present" ? "absent" : "present";
    const filteredArray = storedAnswers.filter((answer) => answer.id !== id);
    filteredArray.push({ id: id, choice_id: newAnswer });
    setStoredAnswers(filteredArray);
  };

  const groupMultiple = (items) => {
    return (
      <form id="answerCheckBoxes">
        <ul>
          {questionsObject.items.map((question, i) => (
            <label key={i} className="checkText">
              {question.name}
              <input onClick={checkedAnswer} id={question.id} type="checkbox" />
              <span className="checkmark"></span>
            </label>
          ))}
        </ul>
      </form>
    );
  };

  const groupSingle = (items) => {
    return (
      <form id="answerCheckBoxes">
        <ul>
          {questionsObject.items.map((question, i) => (
            <label key={i} className="checkText">
              {question.name}
              <input
                onClick={checkedAnswer}
                id={question.id}
                type="radio"
                name="answer"
                value="present"
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </ul>
      </form>
    );
  };

  const single = () => {
    return (
      <form id="answerCheckBoxes">
        <ul>
          {questionsObject.items.map((question, i) => (
            <label key={i} className="checkText checkTextFinal">
              {question.name}
              <br></br>
              <button
                onClick={checkedAnswer}
                id={question.id}
                type="button"
                data-value="present"
                className="btn btn-choice"
              >
                Yes
              </button>

              <button
                onClick={checkedAnswer}
                id={question.id}
                type="button"
                data-value="absent"
                className="btn btn-choice"
              >
                No
              </button>
              <br></br>
              <div className="nextBtnWrapper">
                <button onClick={nextQuestion} className="next-question btn">
                  Next question
                </button>
              </div>
            </label>
          ))}
        </ul>
      </form>
    );
  };

  const nextQuestion = async (e) => {
    e.preventDefault();
    const res = await API.postAnswers(storedAnswers);

    console.log("onclick res", res);
    if (res.data.should_stop) {
      setIsTriage(true);
      console.log("made it to reroute");

      const triageRes = await API.callTriage(storedAnswers);
      console.log("triage res", triageRes);
      setTriageResult(triageRes.data);
      return;
    }
    const response = res.data.question;
    setQuestionsObject(response);
    const answerArray = response.items.map((question) => {
      return { id: question.id, choice_id: "absent" };
    });
    const previousAnswers = [...storedAnswers];
    const combinedAnswers = answerArray.concat(previousAnswers);
    setStoredAnswers(combinedAnswers);
    if (!isTriage) {
      document.getElementById("answerCheckBoxes").reset();
    }
  };
  if (isTriage) {
    return (
      <div className="col-sm-12 assessmentCol checkText">
        <h5>Follow preventive measures</h5>
        <br></br>
        <p>{triageResult.description}</p>
        <br></br>
        <p>{triageResult.label}</p>
        <div className="text-left disclaimer">
          <hr />
          <small>
            <span className="disclosure">Disclosure: </span>
            Please be advised the Covid sympotm checker is not a diagnosis, it
            is for informational purposes only and does not represent, in any
            way, a qualified medical opinion. The symptom checker and its
            results are entirely based on WHO and CDC guidelines concerning
            COVID-19 only. If this is an emergency, call your local emergency
            number immediately. Do not proceed with the symptom checker. Medical
            attention is required immediately. Your data is safe. Information
            that you provide is anonymous and not shared with anyone.
          </small>
        </div>
      </div>
    );
  }

  return (
    <div className="col-sm-12 assessmentCol">
      <h5> Assess Your COVID-19 Risk</h5>
      <br></br>
      <p className="text-center">
        Answer few questions to find out your symptoms and risk factors of the
        COVID-19.{" "}
      </p>
      <hr />
      <p className="font-weight-bold">{questionsObject.text}.</p>
      <br></br>
      <div>
        {questionsObject.type === "single"
          ? single()
          : questionsObject.type === "group_multiple"
          ? groupMultiple()
          : groupSingle()}
        {questionsObject.type !== "single" ? (
          <div className="nextBtnWrapper">
            {" "}
            <button onClick={nextQuestion} className="next-question btn">
              Next question
            </button>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="text-left disclaimer">
        <hr />
        <small>
          <span className="disclosure">Disclosure: </span>
          Please be advised the Covid sympotm checker is not a diagnosis, it is
          for informational purposes only and does not represent, in any way, a
          qualified medical opinion. The symptom checker and its results are
          entirely based on WHO and CDC guidelines concerning COVID-19 only. If
          this is an emergency, call your local emergency number immediately. Do
          not proceed with the symptom checker. Medical attention is required
          immediately. Your data is safe. Information that you provide is
          anonymous and not shared with anyone.
        </small>
      </div>
    </div>
  );
};
export default Assessment;
