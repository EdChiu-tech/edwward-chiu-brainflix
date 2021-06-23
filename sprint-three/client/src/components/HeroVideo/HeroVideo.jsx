import React from "react"
import "./HeroVideo.scss"

function HeroVideo(props) {

    return (
        <section className="hero">
            <div className="hero__container">
                <video className="hero__video" poster={props.currentVideo.image} width="100%" height="auto" controls />
            </div>
        </section>
    )
}

export default HeroVideo