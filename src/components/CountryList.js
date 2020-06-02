import React from 'react'

export default function CountryList({filtedData}) {

    
    return (
        <div className="root">
           { filtedData.map((country, index) => 
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
