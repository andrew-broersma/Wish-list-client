import React from "react";
import './MyList.css'
import ListRender from "./ListRender";
import { CardImg, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import UpdateList from "./Updates/UpdateList";
import DeleteComment from "./Deletes/DeleteComment";
import DeleteList from "./Deletes/DeleteList";


class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            removeValueKey: 0,
            newModalOpen: false,        
        }
    }

    setListFetch = (data) => {
        this.setState({listFetch: data})
    }

    modalToggle = (event) => {
        event.preventDefault()
        this.state.newModalOpen ? this.setState({newModalOpen: false}) : this.setState({newModalOpen: true})
    }

    listGames(data) {

        console.log(data);

        return(

        data.map((index, key) => 
        <Card id={key} style={{width: "20%"}} >
                <CardImg src={index.background_image} alt="background splash for game" width="15%" top />
                <CardBody>
                    <CardTitle><strong>{index.gameName}</strong></CardTitle>
                    <p></p>
                    <br />
                    {(index.genres.length > 0) ? index.genres.map((genre, key) => <span className='genre'>{genre.name} </span>) : <CardSubtitle>No Genre Listed</CardSubtitle>}
                    <CardSubtitle>Metacritic Rating: {index.metacritic ? index.metacritic : "unrated"}</CardSubtitle>
                    <br />
                    {(index.stores.length > 0) ? index.stores.map((store, key) => <span>{store.store.name}</span>) : <CardSubtitle>No stores Listed</CardSubtitle>}
                    {index.tba ? <CardSubtitle>"Release Date not announced"</CardSubtitle> : <CardSubtitle>Release Date: {index.released}</CardSubtitle>}
                    <CardSubtitle>Rating: {index.rating}<Button onClick={()=>this.setState({newModalOpen: true})}>Update</Button></CardSubtitle>
                    <CardSubtitle>Why I'm Interested: {index.comments}<DeleteComment listFetch={this.props.listFetch} sessionToken={this.props.sessionToken} removeValueKey={this.state.removeValueKey} /></CardSubtitle>
                    <a href={"https://rawg.io/" + index.slug}>RAWG page</a>
                    <Button value={key} onClick={() => this.setState({removeValueKey: key})} ><DeleteList sessionToken={this.props.sessionToken} listFetch={this.props.listFetch} removeValueKey={this.state.removeValueKey}/></Button>
                </CardBody>
        </Card>
        ));


}

    // componentDidMount() {
    //     this.toggleRun()
    // }

    toggleRun() {
        if (this.props.listFetch !== []) {
            return this.listGames(this.props.listFetch)

        } else {
            return <></>
        }
    }

    getFromDB() {
        console.log(process.env.APIURL + "/myList")
        fetch(`http://localhost:3050/list/myList`, {
            method: "GET",
            headers: new Headers ({ 
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }),
        })
            .then((res) => res.json())
            .then((data) => this.listGames( data ))
            .then(console.log(this.state.listFetch))
            .catch((err) => {
                console.log(err);
                let dumbDiv = document.getElementById("cardWrapper");
                let noData = document.createElement("p");
                noData.innerText = "Failed to Fetch";
                dumbDiv.appendChild(noData);
            });
    }

    componentDidMount() {
        this.getFromDB()
    }

    render() {
        return(
            <div>
                {/* {this.getFromDB()} */}
                {/* {(this.state.listFetch.length > 0) ? <ListRender listFetch={this.props.listFetch} sessionToken={this.props.sessionToken} /> : null } */}
            </div>
        )
    }
}

export default MyList;