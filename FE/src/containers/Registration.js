import React, { Component } from 'react'
import { Form, Button, Spinner, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar/Navbar'
import * as actions from '../store/actions'

class Registration extends Component {

    state = {
        formData: {
            name: {
                value: "",
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 20
                },
                valid: false,
                touched: false
            },
            email: {
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phoneNumber: {
                value: "",
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            password: {
                value: "",
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 20
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }


    static getDerivedStateFromProps(props, state) {
        if (props.fail !== state.failAlert) {
            return {
                failAlert: props.fail
            };
        }
        return null;
    }


    checkValidation(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid
    }



    handleInputChange = (e) => {
        const type = e.target.name
        let formData = { ...this.state.formData }
        formData[type].value = e.target.value
        formData[type].touched = true
        formData[type].valid = this.checkValidation(e.target.value, formData[type].validation)
        let formIsValid = true
        for (let key in formData) {
            formIsValid = formData[key].valid && formIsValid
        }
        this.setState({ formData: formData, formIsValid: formIsValid })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: this.state.formData.name.value,
            email: this.state.formData.email.value,
            phoneNumber: this.state.formData.phoneNumber.value,
            password: this.state.formData.password.value
        }
        this.props.onSubmitRegistration(data)
    }

    login = () => {
        this.props.removeAlert()
        this.props.history.replace('/login')
    }


    render() {
        const successAlert = this.props.success
            ? <Alert variant="success">
                You have been registered successfully ! Login to continue
                </Alert>
            : null
        const failAlert = this.props.fail
            ? <Alert variant="danger">
                Email already exits
                </Alert>
            : null
        const form =
            <Form style={{ margin: 'auto', marginTop: '50px', width: '80%' }} onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleInputChange} placeholder="Enter User Name" />
                    {!this.state.formData.name.valid && this.state.formData.name.touched
                        ?
                        <Form.Text style={{ color: 'red' }}>
                            Name should be between 3 to 20 characters.
                            </Form.Text> : null
                    }
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleInputChange} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                            </Form.Text>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" name="phoneNumber" onChange={this.handleInputChange} placeholder="Enter Phone Number" />
                    {!this.state.formData.phoneNumber.valid && this.state.formData.phoneNumber.touched
                        ?
                        <Form.Text style={{ color: 'red' }}>
                            Phone Number should be of 10 digits.
                            </Form.Text> : null
                    }
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.handleInputChange} placeholder="Enter Password" />
                    {!this.state.formData.password.valid && this.state.formData.password.touched
                        ?
                        <Form.Text style={{ color: 'red' }}>
                            Password should be between 8 to 20 characters.
                            </Form.Text> : null
                    }
                </Form.Group>
                {this.props.loading
                    ?
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    : null
                }
                {successAlert}
                {failAlert}
                <Button variant="primary" style={{ marginRight: '20px' }} type="submit" disabled={!this.state.formIsValid} >
                    Submit
                        </Button>
                <Button style={{ marginRight: '20px' }} onClick={this.login} variant="info" >
                    Login
                </Button>
            </Form>
        return (
            <React.Fragment>
                <Navbar clicked={this.login} title="Login" />
                <div style={{ margin: 'auto', marginTop: '50px', width: '90%' }}>
                    <h2 style={{ textAlign: 'center' }}>Registration Form</h2>
                    {form}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        success: state.registerSuccess,
        fail: state.sameEmail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitRegistration: (data) => dispatch(actions.userRegistration(data)),
        removeAlert: () => dispatch(actions.removeAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)