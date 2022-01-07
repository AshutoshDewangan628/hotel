import React from 'react'

function PartOfCard(props){
    return (
        <>
        <div>

                
                    <img src={props.imgsrc} alt="no" className="card-img"/>
                    <p class="title">{props.title}</p>
                    <p class="description">{props.description}</p>
                    <span className="link">{props.link}</span>
                    </div>
                    
                
           
        </>
    )
}

export default PartOfCard;
