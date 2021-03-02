import React from "react";
import Person from "./Person";
import "bootstrap/dist/css/bootstrap.css";

const Map = props => {
  // functional component must return
  const info = props.apiData.map(x => {  // apiData is passed from state in App.js a prop in Map.js
    // data is coming from the component in which state is pased as prop
    return <Person data={x} key={x.id} />;  // x.id passes a unique key prop as id from aaray  x === this.state.data
  });

  return <div className="ui container centered mt-5">{info} </div>;
};

export default Map;
