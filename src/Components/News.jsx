import React from 'react'
import NewsItem from './NewsItem'
import "./News.css"
import {useState , useEffect} from "react"

const News = ({category}) => {

    const API_KEY = `697bdddcf91843d2885cbf1af3aa2ac5`
    const [articles , setArticles] = useState([])

  async function getNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      const response =  await fetch(url)
      const data =  await response.json()
      setArticles(data.articles)
  }

    useEffect(() => {
      
     getNews()
    } , [category])
            
    
  


    return (
      <div className="container">
        <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
        <div className="newsContainer">
       
            {articles ? 
           articles.map((article, index) => (
            <NewsItem 
              key={index} 
              title={article.title} 
              description={article.description} 
              image={article.urlToImage} 
              url={article.url}
            />
            
          ))  
           : <></>}
           
      
        </div>
      </div>
    );
    
}

export default News
