import React from 'react'

function RecentPost(props) {
    return (
        <div class="container">
        <div class="row">
            <div class="col">
            <a href="a" className="posthead">{props.posthead}</a>
            <p className="bywhome">{props.bywhome}</p>
            
            </div>
            <div class="col">
            <img src={props.postimg} alt="" className="Recentpostimage"/>
            </div>
            </div>
            </div>
        
       
    )
}

export default RecentPost
