import React from 'react';
import './DeleteList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'

class DeleteList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    // deleteComment() {
    //     let reqBody = {
    //         gameId: this.props.listFetch.gameId
    //     }

    //     fetch(`http://localhost:3050/userComment/deleteComment`, {
    //         method: "DELETE",
    //         body: JSON.stringify(reqBody),
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //             "Authorization": this.props.sessionToken
    //         })
    //     })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //     .then(console.log(reqBody))
    // }

    deleteListItem() {
        let reqBody = {
            gameId: this.props.listFetch[this.props.removeValueKey].gameId
        }

        fetch(`http://localhost:3050/list/deleteGame`, {
            method: "DELETE",
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

    render() {
        return(
            <>
            <Button onClick={() => this.deleteListItem()}>X</Button>
            </>
        )
    }
}

export default DeleteList