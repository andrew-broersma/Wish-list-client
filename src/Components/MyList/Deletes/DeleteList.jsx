import React from 'react';
import './DeleteList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class DeleteList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    deleteListItem(e) {
        let reqBody = {
            id: e.target.id
        }

        console.log(e.target.id)


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

    // deleteListMethod() {
    //     this.props.setRemoveValueKey(this.props.listFetch[])
    // }

    // componentDidUpdate() {
    //     this.props.getFromDB()
    // }

    render() {
        return(
            <>
            <Button id={this.props.id} className="listButton" onClick={(e) => this.deleteListItem(e)}>Remove Game from List</Button>
            </>
        )
    }
}

export default DeleteList