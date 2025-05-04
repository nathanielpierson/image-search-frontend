import axios from "axios";
import { useState, useEffect } from "react";
import { SearchIndex } from "/SearchIndex";

export function SearchPage() {
  const [castData, setCastData] = useState([]);
  async function asyncDo() {

    const options = {
      method: 'GET',
      url: 'https://imdb236.p.rapidapi.com/imdb/tt1204342/cast',
      headers: {
        'x-rapidapi-key': '26c5b29a5dmshd3a5d2acddf0041p1df667jsn3d03d3010961',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setCastData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  asyncDo();
    return (
      <div>
      <SearchIndex cast={castData}/>
      <p>search page</p>
      </div>
    )
}