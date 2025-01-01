import React from 'react'
import NewsItem from './NewsItem'
import "./News.css"
import {useState , useEffect} from "react"

const News = ({category}) => {

    const API_KEY = import.meta.env.VITE_API_KEY
    const [articles , setArticles] = useState([])
    const [loading , setLoading] = useState(false)

  async function getNews(){
    setLoading(true)
       const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${category}&language=en`
      const response =  await fetch(url)
      const data = await response.json()
      if(data.status !== "error"){
        console.log(data)
        setArticles(data.results)
        setLoading(false)
      }
      else{
        alert("API limit exceeded , please try again after 15 minutes!")
        return
      }
     
    
  }

    useEffect(() => {
      
     getNews()
    } , [category])
            
    
  


    return (
      <div className="container">
     
        <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
        <div className="newsContainer">
        {loading ? <h1>Loading...</h1> : 
           articles.map((article, index) => (
            <NewsItem 
              key={index} 
              title={article.title} 
              description={article.description} 
              image={article.image_url} 
              url={article.link}
            />
            
          ))  
        }
       
           
        
         
           
      
        </div>
      </div>
    );
    
}

export default News
