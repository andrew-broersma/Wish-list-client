import React from "react";
import './auth.css';

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userName:'',
            isRegister: false
        }
    }

    landing = () => {
        return this.isRegister ? 'Signup' : 'Login'
    }

    setLastName(event) {
        this.setState({ lastName: event.target.value })
    }

    setFirstName(event) {
        this.setState({ firstName: event.target.value })
    }

    setEmail(event) {
        this.setState({ email: event.target.value })
    }

    setUserName(event) {
        this.setState({ userName: event.target.value })
    }

    setPassword(event) {
        this.setState({ password: event.target.value })
        console.log(this.state.password)
    }

    setIsRegister = () => {
        this.setState({ isRegister: true })
    }

    signupFields = () => this.state.isRegister ?
    (
        <>
            <label htmlFor='firstName'>First Name:</label>
            <br/>
            <input type='text' 
                id='firstName' 
                value={this.state.firstName} 
                onChange={(event) => this.setFirstName(event)} />
            <br/>
            <label htmlFor='lastName'>Last Name:</label>
            <br/>
            <input type='text' 
                id='lastName' 
                value={this.state.lastName} 
                onChange={(event) => this.setLastName(event)} />
            <br/>
            <label htmlFor="email" >Email:</label><br/>
            <input type="email"
            id="email"
            name="email"
            value={this.state.email} 
            onChange={(event) => this.setEmail(event)} />
            <br/>
        </>
    ): null

    handleSubmit = event => {
        event.preventDefault()

        let reqBody = !this.state.isRegister ? {
            userName: this.state.userName,
            password: this.state.password
        } : {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            userName: this.state.userName
        }

        let url = !this.state.isRegister ? 
            "http://localhost:3050/user/login" :
            "http://localhost:3050/user/register"
        console.log(reqBody)
        console.log(url)
        fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
        .then(res => res.json())
        .then(data => this.props.updateLocalStorage(data.token))
        .catch(err => console.log(err))
    }

    // componentDidUpdate() {

    // }

    render() {
        return(
            <div>
                <h3>Welcome to My LIST SITE</h3>
                <form>
                    {this.signupFields()}
                    <label htmlFor="userName">User Name:</label><br/>
                    <input type="text"
                    id="userName"
                    value={this.state.userName}
                    onChange={(event) => this.setUserName(event)} />
                    <br/>
                    <label htmlFor="password" >Password:</label><br/>
                    <input type="password"
                    id="password"
                    value={this.state.password}
                    onChange={(event) => this.setPassword(event)} />
                    <br/>
                </form>
                <button onClick={this.setIsRegister}>Register</button>
                <button onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}

export default Auth;