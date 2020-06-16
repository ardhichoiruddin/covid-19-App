import React, { useState, useEffect, useContext } from 'react';

import { FetchNews } from 'api/index';
import { Context } from 'store/Context/Context';
import { CountryTransform } from 'utils/CountryTranform';

import NewsLoader from 'components/ContentLoader/NewsLoader';
import NewsHealthItem from 'components/NewsHealth/NewsHealthItem';
import ArticleNotFound from 'components/404/ArticleNotFound';


function NewsHealth() {

    const { changeCountry, countryData } = useContext(Context);

    const [newsData, setNewsData] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
    const [articleNotFound, setArticleNotFound] = useState(false);


    useEffect(() => {

        (async() =>{

            setNewsData([])
            setNewsLoading(true)

            const data = await FetchNews(changeCountry)
 
            if(data && data.length !== 0){

                setNewsData(data)
                setNewsLoading(false);
                setArticleNotFound(false);

            }else{

                setNewsData([])
                setArticleNotFound(true);
                setNewsLoading(false);

            }

            
        })()



    },[changeCountry]);

    const countryName = CountryTransform(changeCountry, countryData);

    return (
        <>
            <div className="news-health">
                <div className="container">
                    <h2 className="news-health--title">Informasi Terbaru Kesehatan di {countryName ? countryName : "Indonesia"}</h2>
                    <div className="mt-2">
                        {
                            (newsLoading ? <NewsLoader/> : '')
                        }
                        {
                            newsData.map((data, idx) =>(
                                <NewsHealthItem key={idx} data={data}/>
                            ))
                        }
                        {
                            (articleNotFound ? <ArticleNotFound/> : '')
                        }

                        <br/>
                        <br/>
                        <br/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsHealth;
