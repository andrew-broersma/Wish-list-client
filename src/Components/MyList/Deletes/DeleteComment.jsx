import React from 'react';
import './DeleteList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'
import APIURL from '../../../helpers/environment';

class DeleteComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

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

    deleteComment(e) {
        const id = e.target.id
        let reqBody = {
            listId: id
        }

        fetch(`${APIURL}/userComment/deleteComment`, {
            method: "DELETE",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.sessionToken
            })
        })
        .then((res) => res.json())
    }


    render() {
        return(
            <>
            <Button id={this.props.id} onClick={(e) => this.deleteComment(e)} style={{padding: '.75em', fontSize: ".75em", backgroundColor: 'orangered'}} >Delete Comment</Button>
            </>
        )
    }
}

export default DeleteComment