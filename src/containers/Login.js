import React, { Component } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar/Navbar'
import * as actions from '../store/actions'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    componentDidUpdate() {
        if (this.props.isAuth) this.props.history.replace('/dashboard')
    }

    handleInputChange = (e) => {
        const type = e.target.name
        this.setState({ [type]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmitLogin(this.state)
    }

    register = () => {
        this.props.removeAlert()
        this.props.history.replace('/')
    }

    render() {
        const spinner = this.props.loading
            ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            : null
        const form = 
            <Form style={{ margin: 'auto', marginTop: '50px', width: '80%' }} onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleInputChange} placeholder="Enter email" />

                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.handleInputChange} placeholder="Enter Password" />
                </Form.Group>
                {this.props.loginFail ? <Alert variant="danger"> Invalid Credentials</Alert> : null}
                <div style={{ margin:'10px'}}>

                {spinner}
                </div>
                <Button variant="primary" type="submit">
                    Submit
                    </Button>
            </Form>

        return (
            <React.Fragment>
                <Navbar clicked={this.register} title="Register" />
                <div style={{ margin: 'auto', marginTop: '50px', width: '90%' }}>
                    <h2 style={{ textAlign: 'center' }}>Login Form</h2>
                    {form}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuthenticated,
        loading: state.loading,
        loginFail: state.loginFail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitLogin: (data) => dispatch(actions.userLogin(data)),
        removeAlert: () => dispatch(actions.removeAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)