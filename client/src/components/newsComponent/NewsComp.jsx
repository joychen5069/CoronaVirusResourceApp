import React from 'react';
import './news.css';
import axios from "axios";

//const dotenv = require('dotenv');
//const env = dotenv.config().parsed;

export default class NewsComp extends React.Component {
  state = {
    source: [],
    title: [],
    author: [],
    url: []
  }

  componentDidMount() {
    const APIkey = process.env.REACT_APP_API_KEY

    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=" + APIkey)
      .then(res => {

        this.setState({ source: res.data.response.docs })

      })
  };

  render() {
    return (
      <>
        {this.state.source.map((doc, idx) => {
          if (idx < 10) {
            return (
              <div className="col-sm-12 col-md-5 newsCol">
                <p><span className="newsTitle"> Title:</span> <a href={doc.web_url} target="_blank" rel="noopener noreferrer" className="newsTitleLine"><em>{doc.headline.main}</em></a></p>
                <p className="newsType">{doc.type_of_material}</p>
                <p className="newsDescription">{doc.snippet}</p>
              </div>
            )
          }
        })}
      </>
    )
  }
}
