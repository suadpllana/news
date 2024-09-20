import React from 'react'
import NewsItem from './NewsItem'
import "./News.css"
import {useState , useEffect} from "react"

const News = ({category}) => {

    const API_KEY = `697bdddcf91843d2885cbf1af3aa2ac5`
    const [articles , setArticles] = useState([])

    useEffect(() => {
    
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
      
      fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
         setArticles(data.articles); // Handle the data from the API here
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      
     
    } , [category])
            
    
  


    return (
      <div className="container">
        <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
        <div className="newsContainer">
       
            
            {articles.map((article, index) => (
              <NewsItem 
                key={index} 
                title={article.title} 
                description={article.description} 
                image={article.urlToImage} 
                url={article.url}
              />
              
            ))}
           
      
        </div>
      </div>
    );
    
}

export default News
