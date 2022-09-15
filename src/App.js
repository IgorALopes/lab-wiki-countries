import "./App.css";
import countriesDB from "./countries.json"
import { Navbar } from "./components/Navbar"
import {CountriesList} from "./components/CountriesList"
import {CountryDetails} from "./components/CountryDetails"
import { Routes, Route } from "react-router-dom"

function App() {

  return <div className="App">
    <Navbar/>

    <CountriesList countriesDB={countriesDB}/>
    
    <Routes>
      <Route path='/:alpha3Code' element={<CountryDetails countriesDB={countriesDB}/>} />
    </Routes>
  </div>;
}
export default App;
