import axios from "axios";

export default {
  // Gets all books
  getQuestions: function() {
    return axios.get("/api/symptomchecker");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Save Evidence to backend api
  postAnswers: function(answers) {
    console.log(answers)
    return axios.post("/api/symptomchecker", answers);

  },
  callTriage: function(answers) {
    console.log(answers)
    return axios.post ("/api/symptomchecker/triage", answers);
  }
};