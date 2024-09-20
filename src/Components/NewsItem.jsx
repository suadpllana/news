import React from "react";
import news from "../assets/news.png"

const NewsItem = (props) => {


  return (
 
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px", height: "auto"}}>
    <img src={props.image ? props.image : news} style={{height: "200px" , width: "100%"}} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{props.title ? props.title === "[Removed]" ? "" : props.title.slice(0,50) : <></>}</h5>
    <p className="card-text">{props.description ? props.description === "[Removed]" ? "" : props.description : <></> }</p>
    {props.url === "https://removed.com" ? <> </> : <a href={props.url} target="_blank" className="btn btn-primary">Read more</a>}
  </div>
  </div>
 
  
    
  );
};

export default NewsItem;
