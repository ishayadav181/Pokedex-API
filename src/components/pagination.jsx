import React, { useState, useEffect } from 'react';

const Pagenation = (props) => {

    
    const[pages,setPages]=useState([1,2,3,4,5]);
    const [active, setActive]=useState(1);

    const[prevDisabled, setPrevDisabled]=useState(false);
    const[nextDisabled, setNextDisabled]=useState(false);

    const clickPage=(page)=>{ 
     
         if(page==="next" )
         setActive(active+1)
         
        else if(page==="prev")
         setActive(active-1)
        else
         setActive(page)
        
        }
        

    useEffect(()=>{

        const newPages=[];

        for( let i= Math.max(1,active-2); i<= Math.min(props.total, active+2);i++)
        newPages.push(i);


        if(active===1)
        setPrevDisabled(true);
        else setPrevDisabled(false);
        

        if(active===props.total)
        setNextDisabled(true);
        else setNextDisabled(false);

        
        setPages(newPages);
        props.newUrl(active)



    },[active]);



    return ( 
      <div className="pagediv ">

          <button 
          className={"page t3  "+(prevDisabled ? " disabled": " ")} 
          disabled={prevDisabled} name="prev"
          onClick={()=>clickPage("prev")} >
          prev
          </button>

          {pages.map( (page) =><button 
          className={"page t3"+(page==active?" active":"")} 
          name={page} 
          onClick={()=>clickPage(page)} >
          {page}</button> )}


          <button  
          className="page t3" 
          disabled={nextDisabled} 
          name="next" 
          onClick={()=>clickPage("next")}>
          next</button>
          
      </div>
     );
}
 
export default Pagenation;