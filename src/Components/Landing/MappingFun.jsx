import React from 'react';
import './MappingFun.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardImg, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import NewItem from './NewItem';

class MappingFun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
            cardValueKey: 0
        }
    }

    modalToggle = (event) => {
        event.preventDefault()
        this.state.isModalOpen ? this.setState({isModalOpen: false}) : this.setState({isModalOpen: true})
    }

    browsingGames(data) {

        return(

        data.results.map((index, key) => 
        <Card id={key} style={{width: "20%"}} >
                <CardImg src={index.background_image} alt="background splash for game" width="15%" top />
                <CardBody>
                    <CardTitle><strong>{index.name}</strong></CardTitle>
                    <p></p>
                    <br />
                    <CardSubtitle><strong>Genre:</strong></CardSubtitle>
                    {(index.genres.length > 0) ? index.genres.map((genre, key) => <span className='genre'>{genre.name} </span>) : <CardSubtitle>No Genre Listed</CardSubtitle>}
                    <br />
                    <CardSubtitle><strong>Metacritic Rating:</strong></CardSubtitle>
                    <CardSubtitle>{index.metacritic ? index.metacritic : "unrated"}</CardSubtitle>
                    <br />
                    <CardSubtitle><strong>Stores:</strong></CardSubtitle>
                    {(index.stores.length > 0) ? index.stores.map((store, key) => <span>{store.store.name}</span>) : <CardSubtitle>No stores Listed</CardSubtitle>}
                    <p></p>
                    {index.tba ? <CardSubtitle>"Release Date not announced"</CardSubtitle> : <CardSubtitle><strong>Release Date:</strong><br/> {index.released}</CardSubtitle>}
                    <p></p>
                    <a style={{color:"navajowhite"}} href={"https://rawg.io/" + index.slug}>RAWG page</a>
                    <p></p>
                    <Button value={key} onClick={() => this.setState({cardValueKey: key, isModalOpen: true})}>Add to Wishlist</Button>
                </CardBody>
        </Card>
        ));
}

    toggleRun() {
        if (Object.keys(this.props.genericFetch).length === 0) {
            return <></>
        } else {
            return this.browsingGames(this.props.genericFetch)
        }
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div id="cardWrapper">
            {this.toggleRun()}
            {this.state.isModalOpen ? <NewItem genericFetch={this.props.genericFetch} sessionToken={this.props.sessionToken} cardValueKey={this.state.cardValueKey} modalToggle={this.modalToggle} isModalOpen={this.state.isModalOpen} /> : <></>}
            </div>
        )
    }
}

export default MappingFun