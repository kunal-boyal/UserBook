import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar/Navbar'
import UserCard from '../components/Card/Card'
import Modal from '../components/Modal/Modal'
import UpdateModal from '../components/UpdateModal/UpdateModal'
import * as actions from '../store/actions'

class Dashboard extends Component {

    state = {
        openModal: false,
        updateModal: false,
        userId: '',
        name: '',
        email: '',
        phoneNumber: null
    }

    componentDidMount() {
        this.props.onGetUsers()
    }

    componentDidUpdate() {
        this.props.onGetUsers()
    }

    logout = () => {
        this.props.removeAlert()
        this.props.onLogout()
        this.props.history.replace('/')
    }

    createUser = () => {
        this.props.history.push('/createUser')
    }

    deleteUser = (id) => {
        this.props.onDeleteUser(id)
        this.setState({ openModal: false })
    }

    modalOpen = (id, value) => {
        this.setState({ openModal: value, userId: id })
    }

    handleInputChange = (e) => {
        const type = e.target.name
        this.setState({ [type]: e.target.value })
    };

    updateModal = (value, id, nam, email, phoneNumber) => {
        this.setState({ updateModal: value, userId: id, name: nam, email: email, phoneNumber: phoneNumber })
    }

    updateUser = () => {
        const data = {
            formData: {
                name: this.state.name,
                email: this.state.email,
                phoneNumber: +this.state.phoneNumber
            },
            userId: this.state.userId
        }
        this.props.onUpdateUser(data)
        this.setState({ updateModal: false })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar clicked={this.logout} title="Logout" name={this.props.currentUser.name} />
                <div style={{ margin: "20px", textAlign: "center", border: "2px solid gray", borderRadius: "20px" }}>
                    <h1 style={{ display: "inline-block", marginRight: '200px', padding: '20px', paddingLeft: '50px', paddingRight: '50px' }}>List of users</h1>
                    <Button onClick={this.createUser} variant="primary" style={{ display: "inline-block", marginBottom: '15px' }}>
                        Create New User
                    </Button>
                </div>
                <div>
                    {this.props.users.map(user => <UserCard key={user._id} name={user.name} email={user.email} phoneNumber={user.phoneNumber} update={() => this.updateModal(true, user._id, user.name, user.email, user.phoneNumber)} delete={() => this.modalOpen(user._id, true)} />)}
                </div>
                <Modal show={this.state.openModal} clicked={() => this.deleteUser(this.state.userId)} onHide={() => this.modalOpen(false)} />
                <UpdateModal show={this.state.updateModal} name={this.state.name} email={this.state.email} phoneNumber={this.state.phoneNumber} updateUser={this.updateUser} onHide={() => this.updateModal(false)} inputchange={this.handleInputChange} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        userId: state.currentUser._id,
        users: state.users,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUsers: () => dispatch(actions.getAllUsers()),
        onDeleteUser: (id) => dispatch(actions.deleteUser({ id: id })),
        onUpdateUser: (data) => dispatch(actions.updateUser({ userData: data.formData, id: data.userId })),
        removeAlert: () => dispatch(actions.removeAlert()),
        onLogout: () => dispatch(actions.userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)