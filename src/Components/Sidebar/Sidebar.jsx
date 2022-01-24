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
            <div>
                <ul>           
                    <li id="myList" ><Link to="/myList">My List</Link></li>
                    <li id="browse"><Link to="/">Back to Browse</Link></li>
                    {/* <li id="myList" ><Link to="/">My List</Link></li>
                    <li><Link to="/mappingFun">Back to Browse</Link></li> */}
                    <Form>
                        <FormGroup>
                            <Label for="filterPlat">Filter by Platform</Label>
                            <Input id="fitlerPlat" name="PlatformSelect" type="select">
                                <option>PC</option>
                                <option>PS5</option>
                                <option>Xbox X</option>
                                <option>Switch</option>
                                <option>PS4</option>
                                <option>Xbox One</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="filterGen">Filter by Genre</Label>
                            <Input id="filterGen" name="GenreSelect" type="select">
                                <option>RPG</option>
                                <option>Racing</option>
                                <option>Simulation</option>
                                <option>Indie</option>
                                <option>Adventure</option>
                                <option>Strategy</option>
                                <option>Single Player</option>
                            </Input>
                        </FormGroup>
                    </Form>
                    <li id="logout" ><button onClick={this.props.clearLocalStorage} >Logout</button></li>
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