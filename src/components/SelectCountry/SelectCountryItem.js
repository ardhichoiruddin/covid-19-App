import React, { useContext } from 'react';
import { default as SelectSearch } from 'react-select-search';
import { Context } from '../../store/Context/Context';


const SelectCountryItem = ({ data }) => {


    const {
        changeCountry,
        setChangeCountry,
        setBoxCountry
    } = useContext(Context);


    const selectCountry = (e) => {
        if(e){
            setChangeCountry(e.toLowerCase());
            setBoxCountry(false)
        }
    }

    return (
        <>
            <SelectSearch 
                options={data} 
                search 
                printOptions="always" 
                onChange={(e) => selectCountry(e)} 
                value={changeCountry}
                placeholder="Tulis negara yang anda cari" />
            {/* {
                data.map((country, idx) =>(
                    <li key={idx} onClick={() => selectCountry(country.name, country.iso2)}><button>{ country.name }</button></li>
                ))
            } */}
        </>
    )
}

export default SelectCountryItem;