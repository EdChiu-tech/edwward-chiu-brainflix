import { Component } from "react"
import HeroVideo from "../HeroVideo/HeroVideo"
import VideoDescription from "../VideoDescription/VideoDescription"
import VideoList from "../VideoList/VideoList"
import DisplayComments from "../DisplayComments/DisplayComments"
import details from "../../data/video-details.json"
import "../../App.scss"

class MainPage extends Component {
    state = {
        data: details,
        currentVideo: details[0],
    }

    componentDidMount(){

    }
    
    componentDidUpdate(){
    
    }


    generateSuggestedVideos = () => {
        return this.state.data.filter(video => video.id !== this.state.currentVideo.id)
    }

    clickHandler = (video) => {
        this.setState({ currentVideo: video })
    }

    preventDefault = (e) => {
        e.preventDefault()
    }
    
    render() {
        console.log(this.props.routeProps)
        return (
            <div>
                <HeroVideo
                    currentVideo={this.state.currentVideo}
                />
                <div className="App__divider-container">
                    <div className="App__main-content">
                        <VideoDescription
                            data={this.state.currentVideo}
                        />
                        <DisplayComments
                            data={this.state.currentVideo.comments}
                            preventDefault={this.preventDefault}
                        />
                    </div>
                    <div className="App__sidebar">
                        <VideoList
                            data={this.generateSuggestedVideos()}
                            clickHandler={this.clickHandler}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage
