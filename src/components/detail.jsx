import React, { useState, useEffect } from 'react';

const Detail = (props) => {
    const[data, setData]=useState({});

    useEffect(()=>{
        fetch(props.url)
        .then(res=>res.json())
        .then(res=>{
            setData(res)
        })
        
    },[])
    console.log(data,"hello")

    return(

        <div className="flex jc ai fc insideCard" >
         
         <h2 className="t1" >{data?.species?.name}</h2>

         <div className="flex se ai sb w100" >
         <h2 className="t2 featureCard">{data?.abilities?.[0].ability?.name}</h2>
         <h2 className="t2 featureCard">{data?.abilities?.[1].ability?.name}</h2>
         </div>
         

         <img src={data?.sprites?.back_default} alt="" />
         <button className="t3 button" onClick={props.removeComp} >Go back</button>

         </div>
    );
   
    
}
 
export default Detail;