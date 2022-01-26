import React from "react";
import './MyList.css'
import ListRender from "./ListRender";
import APIURL from "../../helpers/environment";
// import { CardImg, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';



class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            removeValueKey: 0,
            newModalOpen: false,
            listFetch: {}        
        }
    }

    setListFetch = (data) => {
        this.setState({listFetch: data})
    }

    modalToggle = (event) => {
        event.preventDefault()
        this.state.newModalOpen ? this.setState({newModalOpen: false}) : this.setState({newModalOpen: true})
    }

    toggleRun() {
        if (this.props.listFetch !== []) {
            return this.listGames(this.state.listFetch)

        } else {
            return <></>
        }
    }

    getFromDB() {
        fetch(`${APIURL}/list/myList`, {
            method: "GET",
            headers: new Headers ({ 
                "Content-Type": "application/json",
                "Authorization": this.props.sessionToken
            }),
        })
            .then((res) => res.json())
            .then((data) => this.setListFetch(data))
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getFromDB()
    }



    render() {
        return(
            <div id="myList">
                <ListRender listFetch={this.state.listFetch} setListFetch={this.setListFetch} getFromDB={this.getFromDB} sessionToken={this.props.sessionToken} />
            </div>
        )
    }
}

export default MyList;