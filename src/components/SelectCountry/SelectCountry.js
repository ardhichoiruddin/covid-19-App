import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../store/Context/Context';

import SelectCountryItem from './SelectCountryItem';

const SelectCountry = () => {

    const { boxCountry, countryData, setCountryData, setBoxCountry } = useContext(Context);

    const boxCountryHandler = () => {
        return setBoxCountry(!boxCountry)
    }

    const newObjectKey = (object) =>{
        const newArrayOfObj = object.map(({ name , iso2: value }) => ({ name, value })).filter(val => val.value !== undefined);
        return newArrayOfObj;
    }

    useEffect(() => {
        
        const fetchCountry = () =>{
            return axios.get('https://covid19.mathdro.id/api/countries/').then(res =>{
                const { data : { countries }} = res;
                setCountryData(newObjectKey(countries));
            })
        }

        fetchCountry();
       
    },[])

    return(
        <>
            <div className="country-filter">
                <div className={`country-filter--box ${boxCountry ? 'show' : ''}`}>
                    <ul>
                        <SelectCountryItem data={ countryData }/> 
                    </ul>
                </div>
                <button onClick={boxCountryHandler} className={`country-filter--button ${boxCountry ? 'close' : ''}`}>
                    {
                        boxCountry ? 'Tutup' : 'Pilih Negara'
                    }
                </button>
            </div>

            {
                boxCountry ? <div onClick={boxCountryHandler} className="backdrop"></div> : ''
            }
        </>
    )
}

export default SelectCountry;