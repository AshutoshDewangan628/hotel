import React from 'react'
import PartOfCard from './PartOfCard';

function Part2(){
    return (
        <>
        <div className="card">
        <div class="container">
        <div class="row">
            <div class="col">

            <div className="img-card1">

            <PartOfCard
            imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLxglAwi4Kcx5difAiex0Y0gqy8K9eyOz6A&usqp=CAU"
            title="Secure"
            description="We strictly only deal with vendors that provide top notch security"
            link="Learn More-->"/>
            </div>
            </div>
    <div class="col">
    <div className="img-card2">
            <PartOfCard
            imgsrc="https://w7.pngwing.com/pngs/179/27/png-transparent-24-7-service-illustration-24-7-service-handyman-los-angeles-customer-service-twenty-four-company-text-service.png"
            title="24/7 Support"
            description="We strictly only deal with vendors that provide top notch security"
            link="Learn More-->"/>
            </div>
             </div>
    
            <div class="col">
            <div className="img-card3">

            <PartOfCard
            imgsrc="https://w7.pngwing.com/pngs/175/301/png-transparent-cryptocurrency-computer-icons-cardano-customizable-miscellaneous-trademark-logo.png"
            title="Customizable"
            description="We strictly only deal with vendors that provide top notch security"
            link="Learn More-->"/>
        </div>
        </div>
        </div>
    </div>
</div>
       
        
        
       
        </>
    )
        
    }
export default Part2;


