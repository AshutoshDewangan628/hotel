import React from 'react'
import PartOf4Card from './Part4Card'
function Part4() {


   const mst={
  
    marginTtop: "33px",
    color: "#192B45",
    fontSize: "17px"

   } 
    return (
        <div>

            <div class="container4">
             <div class="row">
            <div class="col">
            <h1 style={{color:"#243E63",}}>Trending Tours</h1>
            <p style={mst}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
            <a  href="view">View all tours--></a>
                </div>
            
            <div class="col">
            <div class="card" style={{width: "21rem"}}>
           
            <PartOf4Card
            imghai="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7A5bmCRgVAw7F9nRJx_rwLM9C-E4sxZ6YA&usqp=CAU"
            title="Beachfront"
            about="A Trip to the Bahamas and the Carribean Ocean"
            Cardtext="TRENDING 7 DAYS TOUR AFRICA"
            btn="Book now"
            />
            </div> 
            </div>
    
            <div class="col">
            <div class="card" style={{width: "21rem"}}>
           
            <PartOf4Card
           imghai="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Gm9Jm_grMadrSh_ZSYEkKF_opvnHvqhfgg&usqp=CAU"
            title="Cruise"
            about="Cruise to the Mariana Trench and the Phillipines"
            Cardtext="RENDING 15 DAYS TOUR AUSTRALIA"
            btn="Book now"
            />
            </div> 
            </div>
</div>
       
        </div>
        </div>
    )
}

export default Part4
