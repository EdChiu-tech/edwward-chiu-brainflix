import {Component} from "react"
import Header from "./components/Header/Header"
import HeroVideo from "./components/HeroVideo/HeroVideo"
import VideoDescription from "./components/VideoDescription/VideoDescription"
import VideoList from "./components/VideoList/VideoList"
import Comments from "./components/Comments/Comments"
import videos from "../src/data/videos.json"
import details from "../src/data/video-details.json"

class App extends Component {

state = {
  data: details,
  // list: videos
}

  render(){
    return (
      <div className="App">
        <Header />
        <HeroVideo />
        <VideoDescription />
        <Comments />
        <VideoList
            data = {this.state.data}
            // list = {this.state.list}
        />
      </div>
    );
  }
}

export default App;
