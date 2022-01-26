import React from "react";
import { Route, Link, Switch } from 'react-router-dom'
import "./Sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionItem, AccordionHeader, Form, FormGroup, Label, Input } from 'reactstrap';
import MappingFun from "../Landing/MappingFun";
import MyList from "../MyList/MyList"


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenPlat: false,
            isOpenGenre: false,
            isOpenMeta: false
        }
    }

    filterPlatform() {

    }

    // <Input type="radio" name="PC" id="platPC" value="4" />
    // <Input type="radio" name="PS5" id="platPS5" value="187" />
    // <Input type="radio" name="Xbox X" id="platXX" value="186" />
    // <Input type="radio" name="Switch" id="platSw" value="7" />
    // <Input type="radio" name="PS4" id="platPS4" value="18" />
    // <Input type="radio" name="Xbox One" id="platX1" value="1" />
    
    // <Input type="radio" name="RPG" id="genRPG" value="5" />
    // <Input type="radio" name="Racing" id="genRace" value="1" />
    // <Input type="radio" name="Simulation" id="genSim" value="14" />
    // <Input type="radio" name="Indie" id="genIndie" value="51" />
    // <Input type="radio" name="Adventure" id="genAdv" value="3" />
    // <Input type="radio" name="Strategy" id="genStrat" value="10" />
    // <Input type="radio" name="Single Player" id="genCas" value="31" />


    render() {
        return(
            <div id="sidebar">
                <ul>           
                    {/* <li id="myList" ><a href="../MyList/MyList">My List</a></li>
                    <li id="browse">Back to Browse</li> */}
                    <li id="myList" ><Link to="/myList">My List</Link></li>
                    <li><Link to="/browseGames">Back to Browse</Link></li>
                    <li id="logout" ><button onClick={this.props.clearLocalStorage} ><Link to="/">Logout</Link></button></li>
                </ul>
                <div>
                    {/* <Switch>
                        <Route exact path='/mappingFun'><MappingFun/></Route>
                        <Route exact path='/myList'><MyList/></Route>
                    </Switch> */}
                </div>
            </div>
        )
    }
}

export default Sidebar