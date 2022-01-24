import React from "react";
import './ListRender.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardImg, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import UpdateList from "./Updates/UpdateList";
import DeleteComment from "./Deletes/DeleteComment";
import DeleteList from "./Deletes/DeleteList";

class ListRender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            removeValueKey: 0,
            newModalOpen: false,
        }
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
                    <CardTitle><strong>{index.name}</strong></CardTitle>
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

    componentDidMount() {
        this.toggleRun()
    }

    toggleRun() {
        if (this.props.listFetch !== []) {
            return this.listGames(this.props.listFetch)

        } else {
            return <></>
        }
    }

    render() {
        return(
            <div id="listWrapper">
            {this.toggleRun()}
            {this.state.newModalOpen ? <UpdateList newModalOpen={this.state.newModalOpen} modalToggle={this.modalToggle} listFetch={this.props.listFetch} removeValueKey={this.state.removeValueKey} sessionToken={this.props.sessionToken} /> : null}
            </div>
        )
}
}

export default ListRender