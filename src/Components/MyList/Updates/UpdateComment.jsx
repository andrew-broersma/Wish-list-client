import React from 'react';
import './UpdateComment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom'

class UpdateComment extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isListUpdateOpen: false
        }
    }

    updateListItem(props) {
        console.log(this.state)

        let reqBody = {
            rating: this.state.rating,
            id: this.props.listFetch[this.props.removeValueKey].id
        }

        fetch(`http://localhost:3050/list/updateRating`, {
            method: "PUT",
            body: JSON.stringify(reqBody),
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": this.props.sessionToken
            })
        })
        .then((res) => res.json())
    }

    modalToggle = (event) => {
        event.preventDefault()
        this.state.isListUpdateOpen ? this.setState({isListUpdateOpen: false}) : this.setState({isListUpdateOpen: true})
    }

    listUpdateMethod() {
        if (this.state.comment !== this.props.listFetch[this.props.removeValueKey].comments.comment) {
            this.updateListItem()
            this.modalToggle()
        }
    }

    render() {
        return(
            <>
                <Modal
                    fullscreen="md"
                    isOpen={this.state.newModalOpen}
                    toggle={this.props.modalToggle}
                >
                    <ModalHeader toggle={this.props.modalToggle}>
                        Update Comment and Rating
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(event) => this.superUpdateMethod(event)}>
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
                            <Link to="/myList">
                                <Input
                                type="submit"
                                color="primary"
                                name="submit"
                                onClick={(event) => this.superUpdateMethod(event)} />
                            </Link>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default UpdateComment