import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../store/Context/Context';

import NewsLoader from '../ContentLoader/NewsLoader';
import NewsHealthItem from './NewsHealthItem';
import ArticleNotFound from '../404/ArticleNotFound';

const url = 'https://newsapi.org/v2/top-headlines?language=en';
const apiKey = '0f428063994d44b488fe222c96848b6b';

function NewsHealth() {

    const { changeCountry } = useContext(Context);

    const [newsData, setNewsData] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
    const [articleNotFound, setArticleNotFound] = useState(false);

    useEffect(() => {
        const fetchNews = () =>{
        
            setNewsLoading(true);
            setArticleNotFound(false)
            setNewsData([])
    
            setTimeout(() =>{
                return axios.get(`${url}&country=${changeCountry}&category=health&apiKey=${apiKey}`)
                        .then(res =>{
    
                            const { data : { articles } } = res;
    
                            if(articles.length > 0){
                                setNewsData(articles);
                                setNewsLoading(false);
                                setArticleNotFound(false);
                            }else{
                                setArticleNotFound(true);
                                setNewsLoading(false);
                            }
    
                        }).catch(err =>{
                            console.log(err);
                        });
            },3000);
           
        }


        fetchNews();


    },[changeCountry]);


    return (
        <>
            <div className="news-health">
                <div className="container">
                    <h2 className="news-health--title">Informasi Terbaru Kesehatan di {changeCountry}</h2>
                    <div className="mt-2">
                        {
                            newsLoading ? <NewsLoader/> : ''
                        }
                        {
                            newsData.map((data, idx) =>(
                                <NewsHealthItem key={idx} data={data}/>
                            ))
                        }
                        {
                            articleNotFound ? <ArticleNotFound/> : ''
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
