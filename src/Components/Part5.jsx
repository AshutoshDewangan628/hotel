import React from 'react'

function Part5() {


    const h1S={
        color:"#243E63",
        marginBottom:"50px"
    }
    const pS={
        color:"#243E63",
        fontFamily: "'Inter', sans-serif",
        fontSize:"18px",
        marginBottom:"120px"
    }
    const numbers={
        color:"#6415FF",
        fontFamily: "'Inter', sans-serif",
        fontSize:"27px",
        fontWeight:"600"
    }
    const detail={
       
        color:"#1A202C",
        fontFamily: "'Inter', sans-serif",
        fontSize:"27px",
        fontWeight:"600",
        marginBottom:"40px"
    }

    return (
        <div>
        <div className="part5">
        <div class="container">
        <div class="row">
        <div class="col">
        <img  src="https://images.unsplash.com/photo-1528913775512-624d24b27b96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="homenearseaimge" style={{width:"90%"}}/>
        </div>
        <div class="col">
        <h1 style={h1S}>We have the best service.</h1>
        <p  style={pS}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
      
        <div class="row">
        <div class="col">
        <span style={numbers}>192</span>
        <p style={detail}>Countries</p>
        </div>
        <div class="col">
        <span style={numbers}>479</span>
        <p style={detail}>Hotes</p>
        </div>
        </div>

         
        <div class="row">
        <div class="col">
        <span style={numbers}>2093</span>
        <p style={detail}>Rooms</p>
        </div>
        <div class="col">
        <span style={numbers}>10345</span>
        <p style={detail}>Workers</p>
        </div>
        </div>
        </div>

        
        
  </div>
</div>

        </div>
        </div>
    )
}

export default Part5

