import React , {useState} from 'react';
import SearchBar from "material-ui-search-bar";

import Container from '@material-ui/core/Container';


// import {Switch, Route} from 'react-router-dom';
import Header from './header';
import MediaCard from './mediaCard';
import {GET_Request} from './request';



function News() {
  
  const [query, changeQuery] = useState("")
  const [articleData, changeArticles] = useState(0)

  function search () {
    if (!query)
      return;
    console.log("Query is ")
    console.log(query)
    let queryString = query.trim()
    queryString = queryString.split(' ').join('+');
    GET_Request(queryString)
    .then (async ({data}) => await changeArticles(data) )
    .then (() => fillMediaCards() )
    .catch(err => console.log(err))
  }
  
  function fillMediaCards () {
    if (!articleData)
      return "";
      
    const {articles} = articleData
    let cards = articles.map ( (index, i) => {
      return (<>
          <br/><MediaCard props = {articles[i]}/>
        </>)
    } )
    
    return (<> {cards} </>)
  }
  
  
  function change (newQuery) {
    changeQuery(newQuery);
  }
  
  return (
    <>
      <Header/>
      <Container maxWidth = "md" 
      style ={{ margin: "100px 0px 0px 0px" , background : "grey", padding:"20px"}}>
      <SearchBar
        value={query}
        placeholder = "Search....."
        onChange={(newQuery) => change( newQuery )}
        onRequestSearch={search}
      />
      </Container >
      <div style = {{padding : "30px", margin : "auto" , width : "100%", 
        background : "red"}}>
        {articleData? fillMediaCards() : "Search Please !"}
      </div>
    </>
  );
}

export default News;
