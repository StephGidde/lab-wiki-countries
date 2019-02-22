import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const countryDetails = props => {
  const getCountry = cca3 => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    };
    return countries.find(theCountry);
  };

  const cca3 = props.match.params.cca3; // entspricht const id = props.match.params.id und holt sich die id in der browser url bar
  const foundCountry = getCountry(cca3);

  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <div className="card-body countryDetails">
        <h5 className="card-title">{foundCountry.name.common}</h5>
        <p>Capital: {foundCountry.capital}</p>
        <p>Borders:</p>
        <ul className="borderlist">
          {foundCountry.borders.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default countryDetails;
