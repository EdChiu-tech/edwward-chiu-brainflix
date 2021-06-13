import React from "react"
import "./HeroVideo.scss"

function HeroVideo (props){
    return(
        <section className = "hero">
            <div className = "hero__container">
                <video className = "hero__video" poster = {props.currentVideo.image}  controls/>
            </div>
        </section>
        
    )
}

export default HeroVideo