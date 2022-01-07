import React from 'react'
// import Part4 from './Part4';
function PartOf4Card(props){
    return (
        <>
        <div>
             
             <img src={props.imghai} alt="no" class="card4img"/>
             
             <h5 class="title4">{props.title}</h5>
             <p class="about4">{props.about}</p>
             <p class="card-text">{props.Cardtext}</p>
             <button className="btnbook">{props.btn}</button> 
             

           
            </div>
                    
                
           
        </>
    )
}

export default PartOf4Card;