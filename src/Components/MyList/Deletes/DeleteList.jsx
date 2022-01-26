import React from 'react';
import './DeleteList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import APIURL from '../../../helpers/environment';

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


        fetch(`${APIURL}/list/deleteGame`, {
            method: "DELETE",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.sessionToken
            })
        })
        .then((res) => res.json())
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