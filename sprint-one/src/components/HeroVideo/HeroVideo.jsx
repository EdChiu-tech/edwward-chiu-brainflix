import React from "react"

function HeroVideo (props){
    return(
        <section className = "hero">
            <div className = "hero__container">
                <video className = "hero__video" poster = {props.currentVideo.image} height = "auto" width ="100%" controls/>
            </div>
        </section>
        
    )
}

export default HeroVideo