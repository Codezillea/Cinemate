//this is a custom hook
import { useState,useEffect } from "react";


export const useFetch = (apiPath,queryTerm="") => {

    const [data,setData]=useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    //api prop is replaced since in the actual url the value what the apiPath holds is unique in every link like upcoming,top rated...other queries in the link in common in all
  useEffect( () =>{
    async function fetchMovies()
    {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results) //data.results will contain array of objects which also includes movies infos (any doubts tets the above link in tester extension)
    }
    fetchMovies(); //don't forget to call the asyn function which is important to fetch api and retrieve datas from the api

  },[url])
  return {data}
}
