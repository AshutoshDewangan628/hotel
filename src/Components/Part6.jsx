import React from 'react'
import Part6card from './Part6card'
import RecentPost from './RecentPost'
function Part6() {
    return (
        <div>
            <div className="whole6part">
            <div class="row">
            <div class="col">
            <h1 style={{color:"#192B45"}}>Popular Posts</h1>
            <div className="cardpart6">
            <Part6card
                cardimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XIdx2f7B_XPXIOZKUhhjk-H7u3hAX4GgpA&usqp=CAU"
                Cardhead="Tips on how to travel safely in foreign country"
                describe="Some countries require that you have six months remaining on your passport from the time you’re scheduled to depart. Be sure to double check your passport "
            />
           </div>
            </div>
            <div class="col">
            <div className="card2part6">
            <Part6card
                cardimage="https://i.guim.co.uk/img/media/4f34bf8aef26dcb89867f4e99a0f4c5ecbf94283/0_451_4938_2962/master/4938.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=0d8a3adc02f3ab72d6c0dd12adc9f76f"
                Cardhead="Enjoying the beach life while on vaction"
                describe="Some countries require that you have six months remaining on your passport from the time you’re scheduled to depart. Be sure to double check your passport "
            />
            </div>
            </div>
            <div class="col">
            <h1 style={{marginBottom:"47px"}}>Recent Posts</h1>
            <RecentPost
                posthead="Gettign the most out of vacation"
                postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2f9M_HXABf4FpUhek4orLGpqJeL5L6k5nbQ&usqp=CAU"
                bywhome="Aron Patterson"
            />
            <RecentPost
                posthead="Choosing the perfect safaries in Africa"
                postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11C0XGH1fBWxKKUvMyRBWZ09qiaxBRsWzhA&usqp=CAU"
                bywhome="Sam Phipphen"
            />
            <RecentPost
                posthead="Hiking during monsoon in Asia "
                postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmF15Ymr12-zHBYQTHMv6_lhT4XN3LLbvbBQ&usqp=CAU"
                bywhome="Tony Howk"
            />
            <RecentPost
                posthead="Must cary items while travelling to Thailand"
                postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdfl6DEYsRWOBat3nVQoUAP3aR4x9PZTISA&usqp=CAU"
                bywhome="Himali Turn"
            />
            <RecentPost
                posthead="An extremely funny trip to the Swiss Alps"
                postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlupbFw800Rl8mHw_WyB7dqOAqxY6UZmopfA&usqp=CAU"
                bywhome="Naomi Watts"
            />

            
            </div>
    
        </div>
        </div>
        </div>
      
    )
}

export default Part6
