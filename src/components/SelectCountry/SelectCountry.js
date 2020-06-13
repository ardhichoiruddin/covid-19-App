import React, { useContext } from 'react';
import { Context } from '../../store/Context/Context';

import SelectCountryItem from './SelectCountryItem';

const SelectCountry = () => {

    const { boxCountry, setBoxCountry } = useContext(Context);

    const boxCountryHandler = () => {
        return setBoxCountry(!boxCountry)
    }

    return(
        <>
            <div className="country-filter">
                <div className={`country-filter--box ${boxCountry ? 'show' : ''}`}>
                    <ul>
                        <SelectCountryItem/> 
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