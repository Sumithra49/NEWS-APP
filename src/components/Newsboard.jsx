import React, { useEffect, useState } from 'react';
import NewsItems from '../components/NewsItems';

const Newsboard = ({category}) => {
    const [articles,setArticles]=useState([]);
    useEffect(() =>{
        //url from news api and we can change country and category as well
        let url=    ` https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url).then(res=>res.json())
    .then(data=>setArticles(data.articles));
  

    
    },[category])
  return (
    <div>
        <h2 className='text-center'>Latest <span className="badge bg-danger ">News</span></h2>
   {articles.map((news,index)=>{
    return <NewsItems key={index} title={news.title}
    description={news.description} src={news.urlToImage}
    url={news.url}

    />

   })}
   
    </div>
  )
}

export default Newsboard