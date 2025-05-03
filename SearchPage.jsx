import axios from "axios";
import { useState, useEffect } from "react";

export function SearchPage() {
  const [imageData, setImageData] = useState([]);
  axios.get('rapidapi.com', {
    params: {
      App: 'default-application_10547932',
      'X-RapidAPI-Key': 'value2',
    }}).then(response => {
      setImageData(response.data);
      console.log(response.data);
    })
  return(
    <div>
    <p>search page</p>
    </div>
  )
}