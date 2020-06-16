import React from 'react';
import ArtikelNotFound from 'assets/image/not-found.svg';


const ArticleNotFound = () =>{
    return(
        <div className="article-not-found">
            <img src={ArtikelNotFound} alt=""/>
        </div>
    )
}

export default ArticleNotFound;