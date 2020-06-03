import React from 'react'

export default function ClickedCountry({clicked, data, setClicked}) {

    let bordersArr = clicked.borders.map(border => border = data.filter( country=> country.alpha3Code === border)[0].name)


    return (
        <div className="cardBig">
            <img src={clicked.flag} alt={clicked.name} className="imgFlagBig"/>
            <div className="cardRight">
                <div className="cardTitleBig">{clicked.name}</div>
                <div className="cardRightMain">
                    <div className="nativeName"> Native name: {clicked.nativeName}</div>
                    <div className="regionBig">Region name: {clicked.region}</div>
                    <div className="subRegion">Sub region: {clicked.subregion}</div>
                    <div className="capitalBig">{clicked.capital ? `Capital: ${clicked.capital}` : "Capital: No Capital"}</div>
                    <div className="topLevelDomain">{`Top Level Domain: ${clicked.topLevelDomain}`}</div>
                    <div className="currencies">{`Currencies: ${clicked.currencies[0].code}`}</div>
                    <div className="languages">{`Languages: ${clicked.languages.map(language => language = " " + language.name )}`}</div>
                </div>
                <div className="borders">
                    {bordersArr.map((border, index) => (
                        <div className="borderBox" key={index} onClick={()=>setClicked(data.filter(country => country.name === border )[0])}>{border}</div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
