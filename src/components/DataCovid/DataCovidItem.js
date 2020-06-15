import React from 'react';
import Moment from 'react-moment';

import PencegahanIcon from '../../assets/image/pencegahan-icon.svg';
import DataCovidLoader from '../ContentLoader/DataCovidLoader';
import Flu from '../../assets/image/flu.svg';


const DataCovidItem = ({ lastUpdate, confirmed, deaths, recovered, nameCountry, covidDataLoader, numberFormat }) =>{

    const Positif = <> <p>Positif</p><h3>{numberFormat(confirmed.value)}</h3></>
    const Meninggal = <> <p>Meninggal</p><h3>{numberFormat(deaths.value)}</h3></>
    const Sembuh = <> <p>Sembuh</p><h3>{numberFormat(recovered.value)}</h3></>

    return(
        <>
           <div className="data">
                <h1 className="data--title">Data Terbaru Covid-19 di <span>{ nameCountry ? nameCountry : "Indonesia" }</span></h1>
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
                            covidDataLoader || (confirmed.value < 0) ? <DataCovidLoader/> : Positif
                        }
                        
                    </div>
                    <div className="data--box__inner">
                       {
                           covidDataLoader || (deaths.value < 0) ? <DataCovidLoader/> : Meninggal
                       }
                    </div>
                </div>
                <div className="data--box">
                    <div className="data--box__inner">
                    {
                        covidDataLoader || (recovered.value < 0) ? <DataCovidLoader/> : Sembuh
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

export default DataCovidItem;