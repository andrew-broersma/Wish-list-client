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
                <p>Copyright 2022 This site get's it's game data from <a href="https://rawg.io">RAWG.io</a>.</p>
            </div>
        )
    }
}

export default Footer