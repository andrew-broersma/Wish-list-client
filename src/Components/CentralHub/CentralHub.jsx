import React from 'react';
import './CentralHub.css';
import { Switch, Route, Link } from 'react-router-dom'
import Auth from '../Auth/Auth';
import Landing from '../Landing/Landing';

class CentralHub extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route><Auth exact path="/login" updateLocalStorage={this.props.updateLocalStorage} /></Route>
                    <Route><Landing path="/browseGames" sessionToken={this.props.sessionToken} clearLocalStorage={this.props.clearLocalStorage}/></Route>
                </Switch>
            </div>
        )
    }
}

export default CentralHub