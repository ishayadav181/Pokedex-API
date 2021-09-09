import React from 'react';

const Card = (props) => {

    
    return ( 
        <div className="flex jc ai fc card">
        <h2 className="t2" >{props.name}</h2>
        
        <button 
        className="button t3" 
        onClick={()=>props.showComp(props.url)} > 
        Details</button>
      
        </div>
     );
}
 
export default Card;