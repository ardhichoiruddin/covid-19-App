import React, { useState } from 'react';
import './assets/css/main.css';

import BgImage from './assets/image/bg-image.png';
import Header from './components/Layouts/Header';
import DataCovid from './components/DataCovid/DataCovid';
import NewsHealth from './components/NewsHealth/NewsHealth';
import SelectCountry from './components/SelectCountry/SelectCountry';
import { Context } from './store/Context/Context';


function App() {

  const [countryData, setCountryData] = useState([]);
  const [changeCountry, setChangeCountry] = useState('indonesia');
  const [countryId, setCountryId] = useState('id')
  const [boxCountry, setBoxCountry] = useState(false);

  return (
    <>
      <Context.Provider value={{
          countryData, 
          setCountryData, 
          changeCountry, 
          setChangeCountry,
          boxCountry,
          setBoxCountry,
          countryId,
          setCountryId
        }}>
          
        <div className="head-background">
          <Header/>
          <img src={BgImage} className="bg-image" alt=""/>
          <div className="container">
            <DataCovid/>
          </div>
        </div>
        <NewsHealth/>
        <SelectCountry/>
      </Context.Provider>
      
    </>
  );
}

export default App;
