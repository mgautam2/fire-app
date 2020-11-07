import axios from "axios";


export function GET_Request(query)
{
    var options = {
        url : `http://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=4c2dbfd846404d67b136562da0739825`,
        method: 'GET',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type':  'application/json'
          },
        redirect: 'follow'
      };
      return axios( options);
}

