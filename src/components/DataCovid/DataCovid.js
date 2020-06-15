import React, { useState, useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
import { Context } from '../../store/Context/Context';


import { Reducer } from '../../store/Reducer/Reducer';
import DataCovidItem from './DataCovidItem';

const url ='https://covid19.mathdro.id/api';

function DataCovid() {

    const [{ data }, dispatch] = useReducer(Reducer, {
        data : {}
    })

    const { changeCountry, countryData } = useContext(Context);
    const [covidDataLoader, setCovidDataLoader] = useState(true);


    const numberFormat = (value) => {
        if(value){
            return new Intl.NumberFormat(['ban', 'id']).format(value);
        }
    };

    const selectCountry = (country) =>{
        const countryOption = countryData.find(cntry => cntry.value === country.toUpperCase());
        const { name } = {...countryOption};
        return name;
    }

    useEffect(() => {

        const fetchData = async() =>{

            setCovidDataLoader(true)
    
            return await axios.get(`${url}/countries/${changeCountry}`)
                        .then(res => {
                                const { data } = res;
                                dispatch({ type : 'fetch-data', data });
                                setCovidDataLoader(false);
                        }
            );
    
        }
        
        fetchData();
        
    }, [changeCountry]);


    const lastUpdate = data.lastUpdate
    const confirmed =  {...data.confirmed} 
    const recovered = {...data.recovered}
    const deaths = {...data.deaths}


    const nameCountry = selectCountry(changeCountry);
    
    return (
        <>
         <DataCovidItem
            lastUpdate={lastUpdate}
            confirmed={confirmed}
            deaths={deaths}
            recovered={recovered}
            nameCountry={nameCountry}
            covidDataLoader={covidDataLoader}
            numberFormat={numberFormat}
         />
        </>
    )
}

export default DataCovid
