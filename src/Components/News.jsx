import React from 'react'
import NewsItem from './NewsItem'
import "./News.css"
import {useState , useEffect} from "react"

const News = ({category}) => {

    const API_KEY = `PbWBsRwk88xVWUetWCv65O63HtoHHmKg9LsmS94I`
    const [articles , setArticles] = useState([])

  async function getNews(){
       const url = `https://newsdata.io/api/1/latest?apikey=pub_53939b7dfe34e0dd94ddf6b3aabecd46a6eb6&q=${category }`
      const response =  await fetch(url)
      const data =  await response.json()
      console.log(data)
      setArticles(data.results)
      console.log(articles)
  }

    useEffect(() => {
      
     getNews()
    } , [category])
            
    
  


    return (
      <div className="container">
        <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
        <div className="newsContainer">
       
           
          { articles.map((article, index) => (
            <NewsItem 
              key={index} 
              title={article.title} 
              description={article.description} 
              image={article.image_url} 
              url={article.link}
            />
            
          ))  }
         
           
      
        </div>
      </div>
    );
    
}

export default News
