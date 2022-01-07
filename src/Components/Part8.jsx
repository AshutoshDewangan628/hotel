import React from 'react'
import Accordion from './Accordion'
function Part8() {
    

    const imgs={
        width:"90%",
        height:"90%"
    }
    return (
        <div className="whole8part">
            <div class="container">
            <div class="row">
            <div class="col">
             <img src="https://images.unsplash.com/photo-1575424909972-82cf8c74e559?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="no" style={imgs}/>
            </div>
            <div class="col">
            <h1 style={{color:"#243E63",marginBottom:"30px"}}>Questions</h1>
            <p style={{color:"#243E63",fontSize:"20px",marginBottom:"40px"}}>Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.</p>
           
           
            <Accordion/>
            </div>
    
            </div>
        </div>
        </div>
    )
}

export default Part8

