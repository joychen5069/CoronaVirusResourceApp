import React, { Component } from 'react';
import './map.css';
import USAMap from "react-usa-map";

class Map extends Component {
  mapHandler = (event) => {
    const abrv = event.target.dataset.name
    var states = [
      ['Arizona', 'AZ'],
      ['Alabama', 'AL'],
      ['Alaska', 'AK'],
      ['Arkansas', 'AR'],
      ['California', 'CA'],
      ['Colorado', 'CO'],
      ['Connecticut', 'CT'],
      ['Delaware', 'DE'],
      ['Florida', 'FL'],
      ['Georgia', 'GA'],
      ['Hawaii', 'HI'],
      ['Idaho', 'ID'],
      ['Illinois', 'IL'],
      ['Indiana', 'IN'],
      ['Iowa', 'IA'],
      ['Kansas', 'KS'],
      ['Kentucky', 'KY'],
      ['Louisiana', 'LA'],
      ['Maine', 'ME'],
      ['Maryland', 'MD'],
      ['Massachusetts', 'MA'],
      ['Michigan', 'MI'],
      ['Minnesota', 'MN'],
      ['Mississippi', 'MS'],
      ['Missouri', 'MO'],
      ['Montana', 'MT'],
      ['Nebraska', 'NE'],
      ['Nevada', 'NV'],
      ['New%20Hampshire', 'NH'],
      ['New%20Jersey', 'NJ'],
      ['New%20Mexico', 'NM'],
      ['New%20York', 'NY'],
      ['North%20Carolina', 'NC'],
      ['North%20Dakota', 'ND'],
      ['Ohio', 'OH'],
      ['Oklahoma', 'OK'],
      ['Oregon', 'OR'],
      ['Pennsylvania', 'PA'],
      ['Rhode%20Island', 'RI'],
      ['South%20Carolina', 'SC'],
      ['South%20Dakota', 'SD'],
      ['Tennessee', 'TN'],
      ['Texas', 'TX'],
      ['Utah', 'UT'],
      ['Vermont', 'VT'],
      ['Virginia', 'VA'],
      ['Washington', 'WA'],
      ['West%20Virginia', 'WV'],
      ['Wisconsin', 'WI'],
      ['Wyoming', 'WY'],
    ];
    for (var i = 0; i < states.length; i++) {
      if (states[i][1] === abrv) {
        const stateParam = states[i][0]
        this.props.province(stateParam);
      }
    }
  };

  render() {
    return (
      <>
        <div className="container mapCol row">
          {/* <h5>The USA COVID-19 Summary</h5> */}
         <div className="detail">Click on a state map and choose a county from the list below.
      
           </div>
          <USAMap onClick={this.mapHandler} />
        </div >
      </>
    );
  }
};

export default Map;