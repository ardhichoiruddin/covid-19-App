import React, { useState, useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Context } from '../../store/Context/Context';

import PencegahanIcon from '../../assets/image/pencegahan-icon.svg';
import DataCovidLoader from '../ContentLoader/DataCovidLoader';
import Flu from '../../assets/image/flu.svg';
import { Reducer } from '../../store/Reducer/Reducer';

const url ='https://covid19.mathdro.id/api';

function DataCovid() {

    const [{ data }, dispatch] = useReducer(Reducer, {
        data : {}
    })

    const { changeCountry } = useContext(Context);
    const [covidDataLoader, setCovidDataLoader] = useState(true);


    const numberFormat = (value) => {
        if(value){
            return new Intl.NumberFormat(['ban', 'id']).format(value);
        }
    };

    useEffect(() => {

        const fetchData = () =>{

            setCovidDataLoader(true)
    
            return axios.get(`${url}/countries/${changeCountry}`).then(res => {
                        const { data } = res;
                        dispatch({ type : 'fetch-data', data });
                        setCovidDataLoader(false);
            });
    
        }

        fetchData();
        
    }, [changeCountry]);


    const lastUpdate = data.lastUpdate
    const confirmed =  {...data.confirmed} 
    const recovered = {...data.recovered}
    const deaths = {...data.deaths}


    const Positif = <> <p>Positif</p><h3>{numberFormat(confirmed.value)}</h3></>
    const Meninggal = <> <p>Meninggal</p><h3>{numberFormat(deaths.value)}</h3></>
    const Sembuh = <> <p>Sembuh</p><h3>{numberFormat(recovered.value)}</h3></>
    
    return (
        <>
            <div className="data">
                <h1 className="data--title">Data Terbaru Covid-19 di <span>{changeCountry}</span></h1>
                <div className="data--box top">
                    <div className="data--box__inner top">
                        <div>
                            <p>Update Data</p>
                            <h3><Moment format="DD MMMM YYYY">{lastUpdate}</Moment></h3>
                        </div>
                        <div>
                            <img src={Flu} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="data--box">
                    <div className="data--box__inner">
                        {
                            covidDataLoader || (confirmed.value === 0) ? <DataCovidLoader/> : Positif
                        }
                        
                    </div>
                    <div className="data--box__inner">
                       {
                           covidDataLoader || (deaths.value === 0) ? <DataCovidLoader/> : Meninggal
                       }
                    </div>
                </div>
                <div className="data--box">
                    <div className="data--box__inner">
                    {
                        covidDataLoader || (recovered.value === 0) ? <DataCovidLoader/> : Sembuh
                    }
                    </div>
                    <div className="data--box__inner pencegahan">
                        <img src={PencegahanIcon} className="pencegahan-image" alt=""/>
                        <button className="btn-pencegahan">Pencegahan</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataCovid
