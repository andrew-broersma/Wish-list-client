import React from "react";
import './NewItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input } from 'reactstrap'

class NewItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 0,
            comment: "",
            listResponse: [],
        }
    }

    parseJwt = (token) => {
        if (!token) { 
            return(null); 
        } else {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        let userId = JSON.parse(window.atob(base64));
        return(userId)
    }}

    setListResponse = (data) => {
        this.setState({listResponse: data})
    }

    postComment(listId) {
        // const id = this.parseJwt(localStorage.token).id

        let reqBody = {
            comment: this.state.comment,
            gameId: this.props.genericFetch.results[this.props.cardValueKey].id,
            listId
        }

        fetch(`http://localhost:3050/userComment/addComment`, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(console.log(reqBody))
    }

    postList(props, event) {
        console.log(this.state)
        console.log(process.env.APIURL)
        let reqBody = {
            gameName: this.props.genericFetch.results[this.props.cardValueKey].name,
            releaseDate: this.props.genericFetch.results[this.props.cardValueKey].released,
            apiQuery: "&" + this.props.genericFetch.results[this.props.cardValueKey].id,
            gameId: this.props.genericFetch.results[this.props.cardValueKey].id,
            background: this.props.genericFetch.results[this.props.cardValueKey].background_image,
            genres: this.props.genericFetch.results[this.props.cardValueKey].genres,
            metacritic: this.props.genericFetch.results[this.props.cardValueKey].metacritic,
            stores: this.props.genericFetch.results[this.props.cardValueKey].stores,
            rawgLink: "https://rawg.io" + this.props.genericFetch.results[this.props.cardValueKey].slug,
            screenshots: this.props.genericFetch.results[this.props.cardValueKey].short_screenshots,
            rating: this.state.rating,
        }

        fetch(`http://localhost:3050/list/updateList`, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.sessionToken
            })
        })
            .then((res) => res.json())
            // .then((data) => this.setListResponse(data))
            .then((data) => {this.postComment(data.id)})
            .then(console.log(reqBody))
    }

    superSpecialMethod = (event) => {
        event.preventDefault()
        // this.postComment(event);
        console.log(this.state.rating)
        console.log(this.state.comment)
        this.postList(event);
        this.props.modalToggle(event);
    }

    render() {
        return (
            <>
                <Modal
                    fullscreen="md"
                    isOpen={this.props.isModalOpen}
                    toggle={this.props.modalToggle}
                >
                    <ModalHeader toggle={this.props.modalToggle}>
                        Add an interest rating and why you are interested
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(event) => this.superSpecialMethod(event)}>
                            <FormGroup tag="fieldset">
                                <legend>Rating (5 is best)</legend>
                            <Input type="radio" name="radioRating" value="1" className="rating" onClick={(event) => this.setState({rating: event.target.value})}/>
                            <Input type="radio" name="radioRating" value="2" className="rating" onClick={(event) => this.setState({rating: event.target.value})}/>
                            <Input type="radio" name="radioRating" value="3" className="rating" onClick={(event) => this.setState({rating: event.target.value})}/>
                            <Input type="radio" name="radioRating" value="4" className="rating" onClick={(event) => this.setState({rating: event.target.value})}/>
                            <Input type="radio" name="radioRating" value="5" className="rating" onClick={(event) => this.setState({rating: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <legend>Why were you interested?</legend>
                            <Input type="text" className="commentBox" onChange={(event) => this.setState({comment: event.target.value}) }/>
                            <Input
                            type="submit"
                            color="primary"
                            name="submit"
                            onClick={(event) => this.superSpecialMethod(event)} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default NewItem