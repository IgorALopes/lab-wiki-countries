import "./App.css";
import { useState } from "react";
import countriesDB from "./countries.json"
import { Navbar } from "./components/Navbar"
import {CountriesList} from "./components/CountriesList"
import {CountryDetails} from "./components/CountryDetails"

function App() {

  return <div className="App">
    <Navbar/>

    <div style={{diplay: "flex", }}>
      <CountriesList countriesDB={countriesDB}/>
      <CountryDetails/>
    </div>
  </div>;
}
export default App;
