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

    setRemoveValueKey = (key) => {
        console.log("before", this.state.removeValueKey)
        this.setState({removeValueKey: key})
        console.log("after", this.state.removeValueKey)
    }

    setModalAndValueKey = (key, bool) => {
        this.setState({removeValueKey: key, newModalOpen: bool})
    }

    modalToggle = (event) => {
        this.state.newModalOpen ? this.setState({newModalOpen: false}) : this.setState({newModalOpen: true})
    }

    listGames(data) {

        // console.log(data);

        let myCards = Object.values(data)

        // console.log(myCards)

        return(

        Object.entries(myCards).map((index, key) =>
        <Card key={key} className="card" style={{width: "20%"}} >
            {/* {console.log(myCards[key].id)} */}
            {console.log(index[1].id)}
            {/* {console.log(key)} */}
                <CardImg src={index[1].background} alt="background splash for game" width="15%" top />
                <CardBody>
                    <CardTitle className="cardTitle" ><strong>{index[1].gameName}</strong></CardTitle>
                    <p></p>
                    <br />
                    <CardSubtitle className="headingsSorta">Metacritic Rating: </CardSubtitle>
                    <CardSubtitle><strong>{index[1].metacritic ? index[1].metacritic : "unrated"}</strong></CardSubtitle>
                    <br />
                    <CardSubtitle className="headingsSorta">Release Date: </CardSubtitle>
                    <CardSubtitle><strong>{index[1].releaseDate.slice(0, 10)}</strong></CardSubtitle>
                    <br />
                    <CardSubtitle className="headingsSorta">My Rating: <strong>{index[1].rating}/5</strong> <Button className="button" value={key} onClick={(event)=>this.setState({newModalOpen: true, removeValueKey: event.target.value})}>Update My Rating</Button></CardSubtitle>
                    {/* <CardSubtitle className="headingsSorta">My Rating: <strong>{index[1].rating}/5</strong><Button className="button" onClick={()=>this.setRemoveValueKey(myCards[key].id, true)}>Update My Rating</Button></CardSubtitle> */}
                    <br />
                    <CardSubtitle className="headingsSorta">Why I'm Interested: </CardSubtitle>
                    <CardSubtitle><strong>{(index[1].comments.length > 0) ? index[1].comments[0].comment : null}</strong></CardSubtitle>
                    <DeleteComment id={index[1].id} setListFetch={this.props.setListFetch} getFromDB={this.props.getFromDB} listFetch={this.props.listFetch} sessionToken={this.props.sessionToken} removeValueKey={this.state.removeValueKey} setRemoveValueKey={this.setRemoveValueKey} />
                    <p></p>
                    <a href={"https://rawg.io/" + index[1].slug} className="rawgLink">RAWG page</a>
                    <p></p>
                    <Button className="button" value={key} onClick={(event) => this.setRemoveValueKey(event.target.value )} ><DeleteList id={index[1].id} setListFetch={this.props.setListFetch} getFromDB={this.props.getFromDB} sessionToken={this.props.sessionToken} listFetch={this.props.listFetch} removeValueKey={this.state.removeValueKey} setRemoveValueKey={this.setRemoveValueKey} /></Button>
                    {/* <Button className="button" onClick={() => this.setRemoveValueKey(myCards[key].id)} ><DeleteList setListFetch={this.props.setListFetch} getFromDB={this.props.getFromDB} sessionToken={this.props.sessionToken} listFetch={this.props.listFetch} removeValueKey={this.state.removeValueKey} setRemoveValueKey={this.setRemoveValueKey} /></Button> */}
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
            {this.state.newModalOpen ? <UpdateList newModalOpen={this.state.newModalOpen} setListFetch={this.props.setListFetch} getFromDB={this.props.getFromDB} modalToggle={this.modalToggle} listFetch={this.props.listFetch} removeValueKey={this.state.removeValueKey} setRemoveValueKey={this.setRemoveValueKey} sessionToken={this.props.sessionToken} /> : null}
            </div>
        )
}
}

export default ListRender