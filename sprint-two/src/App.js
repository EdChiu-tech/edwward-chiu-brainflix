import { Component } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage"
import UploadPage from "./components/UploadPage/UploadPage"
import Header from "../src/components/Header/Header"
import "./App.scss"

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/upload_page" component={UploadPage} />
          <Route path="/:videoId" component={MainPage} />
          </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
