import React from 'react'
import data from '../data/countryData.json'

export default function CountryList() {
    console.log(data);
    
    return (
        <div className="root">
           { data.map((country, index) => 
                <div className="card" key={index}>
                    <img className="img" src={country.flag} alt="flag"/>
                    <div className="cardTitle">{country.name}</div>
                    <div className="population">Population: {country.population}</div>
                    <div className="region">Region: {country.region}</div>
                    <div className="capital">Capital: {country.capital}</div>
                </div>
            )}
        </div>
    )
}
