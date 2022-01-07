import React from 'react'

function PartOf3Card(props){
    return (
        <>
        <div>
             
             <img src={props.cardimg} alt="no" class="card-img-top"/>
             <div class="card-body">
             <h5 class="card-title">{props.Cardtitle}</h5>
             <p class="place">{props.place}</p>
             <p class="card-text">{props.Cardtext}</p>
             <button className="btn-book">{props.btn}</button>

            </div>
            </div>
                    
                
           
        </>
    )
}

export default PartOf3Card;
