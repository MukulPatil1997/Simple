import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import './App.css';
import Header from './Component/Header/Header';
import Definitions from './Component/Definitions/Definitions';


function App() {
   
  const [word , setWord] = useState();
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
 
  useEffect(()=> {
    dictionaryApi();
  },[word, category])

   const dictionaryApi = async () => {
    // const dapi = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

    // const data = await dapi.json();
    // console.log(data);
    // setMeanings(data.meanings);

    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      console.log(data);
      setMeanings(data.data);
    } catch (error){
      console.log(error)
    }
  }
  
  // console.log(meanings)

  return (
    <div className="App">
      <Container maxWidth="md" style={{display: "flex", flexDirection: "column", height: "100vh"}}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
       {meanings && (<Definitions word={word} category={category} meanings={meanings} />)}
      </Container>
         </div>
  );
}

export default App;
