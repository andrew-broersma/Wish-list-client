import React from 'react';
import './App.css';

import Auth from './Components/Auth/Auth';
import Landing from './Components/Landing/Landing';
import MyList from './Components/MyList/MyList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      sessionToken: null,
      isLogin: true
    }
  }

  setSessionToken(token) {
    this.setState({ sessionToken: token })
  }

  updateLocalStorage = (newToken) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken })
  }

  clearLocalStorage = () => {
    localStorage.clear()
    this.setState({sessionToken: null})
  }

  loginChecker() {
    return (localStorage.getItem("token") !== null ? 
    <Router><Landing sessionToken={this.state.sessionToken} clearLocalStorage={this.clearLocalStorage}/></Router> : 
    <Auth updateLocalStorage={this.updateLocalStorage} />
    )
  }

  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      this.setState({sessionToken: localStorage.getItem("token")})
    }
  }
// PUT A NAV BAR COMPONENT IN THE RENDER

  render() {
    return (
    <div className="App">
      {/* {this.loginChecker()} */}
      <Router>
        <Switch>
          <Route><Auth exact path="/" updateLocalStorage={this.updateLocalStorage} /></Route> :
          <Route><Landing path="/browseGames" sessionToken={this.state.sessionToken} clearLocalStorage={this.clearLocalStorage}/></Route>
        </Switch>
      </Router>
    </div>
  )};
}

export default App;
