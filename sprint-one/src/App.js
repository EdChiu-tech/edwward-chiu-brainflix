import { Component } from "react"
import Header from "./components/Header/Header"
import HeroVideo from "./components/HeroVideo/HeroVideo"
import VideoDescription from "./components/VideoDescription/VideoDescription"
import VideoList from "./components/VideoList/VideoList"
import DisplayComments from "./components/DisplayComments/DisplayComments"
import details from "../src/data/video-details.json"
import "./App.scss"

class App extends Component {

  state = {
    data: details,
    currentVideo: details[0],
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
    return (
      <div className="App">
        <Header />
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
    );
  }
}

export default App;
