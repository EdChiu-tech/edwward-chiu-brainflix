import { Component } from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage"
import UploadPage from "./components/pages/UploadPage/UploadPage"
import Header from "./components/components/Header/Header"
import "./App.scss"

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/upload" component={UploadPage} />
          <Route path="/:videoId" component={MainPage} />
          </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
