import React from 'react'
import "./footer.css"

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <ul>
                    <li>My List</li>
                    <li>Home</li>
                </ul>
                <p>Copyright 2022</p>
                <p>This site get's it's game data from <a href="https://rawg.io">RAWG.io</a>.</p>
            </div>
        )
    }
}