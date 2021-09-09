import './App.css';
import React, {  useEffect, useState } from 'react';
import Card from './components/card';
import Detail from './components/detail';
import Pagenation from './components/pagination';
function App() {
 
  const[ result, setResult]=useState([]);
  const[url, setUrl]=useState(null);
  const[total,setTotal] =useState(5)
  const[offSet, setOffset]=useState(0);

  const showComp=url=>setUrl(url)
  const removeComp=()=>setUrl(null)
  const newUrl=(active)=>{setOffset((active-1)*20);console.log(offSet,active,"offset")};

  
  

  useEffect( () =>{
      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=20`)
      .then(res => res.json())
      .then(res=> {
          setResult(res.results);
          setTotal(res.count);
     })
      
     
  },[offSet]);

  
 if(url===null)
 return ( 

  <div  className="flex fc jc ai">
     <h1 className="t1">Pokedex</h1>
     <div className="flex ai  jc wrap">
        {result.map((item) => (<Card  name={item?.name} key={item?.name} url={item?.url}  showComp={showComp}/>))}
     </div>

     <Pagenation total={total} newUrl={newUrl} />
  </div> 
      
  

     
  );
  else
  return(
      <div className="flex jc ai full">
         <Detail  url={url}  removeComp={removeComp} />
      </div>
  );
  
}

export default App;
