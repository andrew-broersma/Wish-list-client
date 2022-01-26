import React from 'react';
import './App.css';

import Auth from './Components/Auth/Auth';
import Landing from './Components/Landing/Landing';
import MyList from './Components/MyList/MyList';
import { Route, Switch } from "react-router-dom"
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';

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

  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      this.setState({sessionToken: localStorage.getItem("token")})
    }
  }
// PUT A NAV BAR COMPONENT IN THE RENDER

  render() {
    return (
    <div className="App">
      <Sidebar clearLocalStorage={this.clearLocalStorage}/>
      <Switch>
          <Route exact path="/"><Auth updateLocalStorage={this.updateLocalStorage} /></Route>
          <Route exact path="/browseGames"><Landing sessionToken={this.state.sessionToken} clearLocalStorage={this.clearLocalStorage}/></Route>
          <Route exact path="/myList"><MyList sessionToken={this.state.sessionToken} /></Route>
        </Switch>      
        <Footer />
    </div>
  )};
}

export default App;
