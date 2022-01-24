import React from 'react';
import './UpdateList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Input } from 'reactstrap'

class UpdateList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 0,
            comment: ""
        }
    }

    updateListItem(props) {
        console.log(this.state)

        let reqBody = {
            rating: this.state.rating,
            gameId: this.props.listFetch.gameId
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
        .then((data) => console.log(data))
        .then(console.log(reqBody))
    }

    updateCommentItem(props) {
        let reqBody = {
            comment: this.state.comment,
            gameId: this.props.listFetch.gameId,
        }

        fetch(`http://localhost:3050/userComment/updateComment`, {
            method: "PUT",
            body: JSON.stringify(reqBody),
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(console.log(reqBody))
    }

    superUpdateMethod() {
        if (this.state.rating !== this.props.listFetch[this.props.cardValueKey].rating) {
        this.updateCommentItem()
        }

        if (this.state.comment !== this.props.listFetch[this.props.cardValueKey].comments)
        this.updateListItem()
    }

    render() {
        return(
            <>
                <Modal
                    fullscreen="md"
                    isOpen={this.props.newModalOpen}
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
                            <Input
                            type="submit"
                            color="primary"
                            name="submit"
                            onClick={(event) => this.superUpdateMethod(event)} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default UpdateList