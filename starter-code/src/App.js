import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CountryDetails from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="countriesList">
          <h2>Countries</h2>

          <ul>
            {countries.map((country, index) => {
              return (
                <div className="countriesLists" key={index}>
                  <Link to={`/countries/${country.cca3}`}>
                    {country.name.common}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        <Switch>
          {/* <Route exact path="/" component={App} /> */}
          <Route exact path="/countries/:cca3" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
