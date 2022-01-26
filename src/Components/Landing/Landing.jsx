import React from 'react';
import './landing.css';
import { Switch, Route } from 'react-router-dom'
import MappingFun from './MappingFun';
import Sidebar from '../Sidebar/Sidebar';
import MyList from '../MyList/MyList';

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            genericFetch: {},
            url: ""
        }
    }

    makeUrl() {
        const baseURL = "https://api.rawg.io/api/";
        const key = process.env.REACT_APP_API_KEY;
        let date = new Date().toISOString().slice(0, 10);
        let lastTwoWeek = () => {
        var today = new Date();
        var lastTwoWeek = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 14
        );
    return lastTwoWeek.toISOString().slice(0, 10);
    };

    let urlNew = baseURL + "games?key=" + key + "&dates=" + lastTwoWeek() + "," + date + "&platforms=4" + "&ordering=-metacritic"

        return urlNew
    }

    getInfo() {
        console.log(this.makeUrl())
        fetch(this.makeUrl(), {
            method: "GET",
            // headers: { "access-control-allow-origin": "*" },
        })
            .then((res) => res.json())
            .then((data) => {this.setState({genericFetch: data})})
            .catch((err) => {
                console.log(err);
                let dumbDiv = document.getElementById("cardWrapper");
                let noData = document.createElement("p");
                noData.innerText = "Failed to Fetch";
                dumbDiv.appendChild(noData);
            });
    }

    componentDidMount() {
        this.getInfo()
    }

    render() {
        console.log(this.state.genericFetch)

        return(
            <div id="cardWrapper">
                {/* <Sidebar clearLocalStorage={this.props.clearLocalStorage}/> */}
                    <MappingFun genericFetch={this.state.genericFetch} sessionToken={this.props.sessionToken}/>
                    
            </div>
        )
    }
}

export default Landing;