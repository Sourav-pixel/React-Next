import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Items from'./newsItems'
 const NewsContext = () => {
const[articles,setArticles] =useState([])

useEffect(() => {
   
const getArticles = async()=> {
  
    const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-02-27&sortBy=publishedAt&apiKey=f71102107ed64fab991ba3d64369760e')
   
    setArticles(response.data.articles)
}
getArticles()
  
  },[]);

return(
    <div>
{articles.map(article =>{
    return(
        <Items
        titles={article.title}
        description={article.description}
        url={article.urlToImage}
        urlToImage={article.urlToImage}
        
        />
    )
})}

    </div>
)
}


export default NewsContext