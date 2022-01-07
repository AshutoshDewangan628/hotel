import React from 'react'
import PartOf3Card from './PartOf3Card'
function Part3() {
    return (
        <div>
            <h1 style={{marginTop:"41px",marginLeft:"57px"}}>Popular Hotels</h1>
            <div className="whole-body">
            <div class="row ">
            
            <div class="col">
            <div class="card" style={{width: "21rem"}}>
           
            <PartOf3Card
            cardimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7A5bmCRgVAw7F9nRJx_rwLM9C-E4sxZ6YA&usqp=CAU"
            Cardtitle="Wyatt Residency"
            place="Rome,Italy     USD 39/day"
            Cardtext= "Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Book Now"
            />
            </div> 
            </div>
            <div class="col">
            <div class="card" style={{width: "21rem"}}>
           
            <PartOf3Card
            cardimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjobchSUfPnp0ObuGgAmuWfBkZcelos7JsQ&usqp=CAU"
            Cardtitle="SOHO PARADISE"
            place="Rome,Italy     USD 50/day"
            Cardtext= "Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Book Now"
            />
            </div> 
            </div>
            <div class="col">
            <div class="card" style={{width: "21rem"}}>
           
            <PartOf3Card
            cardimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3pVqrKDrK2Og2jl8rSCHisJYotrcD5lglw&usqp=CAU"
            Cardtitle="Hotel BAJA"
            place="Rome,Italy     USD 19/day"
            Cardtext= "Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Book Now"
            />
            </div> 
            </div>
            {/* <div class="col">
            <div class="card" style={{width: "18rem"}}>
           
            <PartOf3Card
            cardimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7A5bmCRgVAw7F9nRJx_rwLM9C-E4sxZ6YA&usqp=CAU"
            Cardtitle="Wyatt Residency"
             place="Rome,Italy     USD 39/day"
            Cardtext= "Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Book Now"
            />
            </div> 
            </div> */}
            </div>
            </div>
            </div>
    )
}

export default Part3
