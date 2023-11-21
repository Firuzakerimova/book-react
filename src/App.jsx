import React from 'react';
import axios from 'axios';
import Card from "./components/Card";



const App = () => {
  const getData =async()=>{
    const res =await axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBG2lxMMTXzeTP2KyheEYt9FSaFri2frWY");
    console.log(res.data);
  };
  getData();

  return (
    <div> 
     <Card/>
    </div>
  )
}

export default App