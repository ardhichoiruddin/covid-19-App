import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../store/Context/Context';
import CountryLoader from '../ContentLoader/CountryLoader';


const SelectCountryItem = () =>{

    const { 
        setChangeCountry , 
        countryData, 
        setCountryData,
        setBoxCountry,
        setCountryId
    } = useContext(Context);

    const [loadingData, setLoadingData] = useState(true);
    
  

    const selectCountry = (country, id) =>{
        if(id){
            setChangeCountry(country);
            setCountryId(id.toLowerCase())
            setBoxCountry(false)
        }
    }

    useEffect(() => {
        
        const fetchCountry = () =>{
            return axios.get('https://covid19.mathdro.id/api/countries/').then(res =>{
                setCountryData(res.data.countries);
                setLoadingData(false)
            })
        }

        if(countryData.length <= 0){
            fetchCountry();
        }else{
            setLoadingData(false);
        }

    },[])

    return(
        <>
            {
                loadingData ? <CountryLoader/> : ''
            }

            {
                countryData.map((country, idx) =>(
                    <li key={idx} onClick={() => selectCountry(country.name, country.iso2)}><button>{ country.name }</button></li>
                ))
            }
        </>
    )
}

export default SelectCountryItem;