import React from 'react';
import './App.css';

import Auth from './Components/Auth/Auth';
import Landing from './Components/Landing/Landing';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      sessionToken: undefined,
      isLogin: true
    }
  }

  setSessionToken(token) {
    this.setState({ sessionToken: token })
  }

  tokenOnLoad() {
    if (localStorage.getItem("token")) {
      this.setSessionToken(localStorage.getItem("token"))
    }
  } 

  updateLocalStorage = newToken => {
    localStorage.setItem("token", newToken)
    this.setSessionToken(newToken)
  }

  clearLocalStorage = () => {
    localStorage.clear()
    this.setSessionToken(undefined)
  }

  loginChecker() {
    return this.state.sessionToken !== undefined ?
    <Landing sessionToken={this.state.sessionToken} /> :
    <Auth updateLocalStorage={this.updateLocalStorage} />
  }

// PUT A NAV BAR COMPONENT IN THE RENDER

  render() {
    return (
    <div className="App">
      {this.loginChecker()}
    </div>
  )};
}

export default App;
