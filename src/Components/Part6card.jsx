import React from 'react'

function Part6card(props) {
    return (
        <div>
             
             <img src={props.cardimage} alt="no" class="imagepart6"/>
             
             <a href="a" className="Cardhead">{props.Cardhead}</a>
             <p className="discribe">{props.describe}</p>
             
             </div>
             


    )
}

export default Part6card
