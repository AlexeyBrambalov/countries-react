import React from 'react'
import data from '../data/countryData.json'

export default function SearchNavbar({setSearch, setSelect}) {



    let regionArr = data.map( country => country = country.region)
    let filteredRegions = Array.from(new Set(regionArr)).filter(item => item)

    function SortByName(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }

    return (    
    <div className="search-nav">
        <input 
            type="text" 
            className="searchInput" 
            placeholder="Search for a country" 
            onChange={(e) => setSearch(e.target.value)}/>


            <select className="searchSelect"  onChange={(e) => setSelect(e.target.value)}>
                {filteredRegions.sort(SortByName).map((region, index) => (
                    <option value={region} key={index}>{region}</option> 
                )
                )} 
            </select>



        
    </div>
    )
}
