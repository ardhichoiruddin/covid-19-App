import React from 'react';

const NewsHealthItem = ({data}) =>{

    return(
        <div className="news-health--box">
            <img src={data.urlToImage} className="news-health--box__image" alt="" title={data.title}/>
            <div className="news-health--box__desc">
                <h1><a href={data.url} target="__blank">{data.title}</a></h1>
                <p>{data.source.name}</p>
            </div>
        </div>
    )
}

export default NewsHealthItem;