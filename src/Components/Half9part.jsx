import React from 'react'

function Half9part() {

    const h1={
        color:"#F7FAFC",
        marginLeft: "144px",
    }
    const p={
        fontSize:"13px",
        color:"#F7FAFC",
        marginLeft: "211px",
        
    }

    return (
        
        <div className="firsth">
        <div class="container">
        <div class="row">
            <div class="col">
            <h1 style={h1}>📧Newsletter</h1>
            <p style={p}>Subscribe now to get our latest blog posts</p>
            </div>
            <div class="col">
            <input type="email" name="" id="" placeholder="Enter Your Email" className="email"/>
            <button  type="button" className="suscribe-btn">Suscribe Now</button>
            </div>
            </div>
            </div>
        </div>
           
           
        
    )
}

export default Half9part