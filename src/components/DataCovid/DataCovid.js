import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../store/Context/Context';
import { CountryTransform  } from '../../utils/CountryTranform'

import { fetchData } from '../../api/index';
import DataCovidItem from './DataCovidItem';



function DataCovid() {

    const { changeCountry, countryData } = useContext(Context);
    const [ covidDataLoader, setCovidDataLoader ] = useState(true);
    const [ data, setData ] = useState({})


    useEffect(() => {
       
        (async() =>{

            setCovidDataLoader(true)
            const data = await fetchData(changeCountry)
            if(data){
                setCovidDataLoader(false)
                setData(data)
            }

        })()
        
    }, [changeCountry]);


    const lastUpdate = data.lastUpdate
    const confirmed =  { ...data.confirmed } 
    const recovered = { ...data.recovered }
    const deaths = { ...data.deaths }

    const nameCountry = CountryTransform(changeCountry, countryData);
    
    return (
        <>
         <DataCovidItem
            lastUpdate={lastUpdate}
            confirmed={confirmed}
            deaths={deaths}
            recovered={recovered}
            nameCountry={nameCountry}
            covidDataLoader={covidDataLoader}
         />
        </>
    )
}

export default DataCovid
