import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import CountryList from './components/CountryList';
import SearchNavbar from './components/SearchNavbar';
import data from './data/countryData.json'
import ClickedCountry from './components/ClickedCountry';

function App() {
  let filtedData = data

  const [search, setSearch] = useState("")

  const [select, setSelect] = useState("")

  const [clicked, setClicked] = useState({})



  if(search){filtedData =  data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))}

  if(select){ filtedData = data.filter(country => country.region === select)}


  if(search && select){
    filtedData = data.filter(country => country.region === select).filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
  }

  console.log(clicked);
  




  return (
    <div className="App">
      <NavBar/>
      <SearchNavbar setSearch={setSearch} setSelect={setSelect}/>
      {clicked.name ?  <ClickedCountry clicked={clicked} data={data} setClicked={setClicked}/> : <CountryList filtedData={filtedData} setClicked={setClicked}/>} 
    </div>
  );
}

export default App;
