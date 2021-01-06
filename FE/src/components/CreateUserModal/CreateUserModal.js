import React from 'react'
import { Modal,Form ,Button } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal.Dialog>
            <Form style={{ margin: 'auto', marginTop: '50px', width: '80%' }} >
                {/* <Form.Group >
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
                <Button variant="primary" style={{ marginRight: '20px' }} type="submit" disabled={!this.state.formIsValid} >
                    Create User
                        </Button> */}
                <Button variant="danger" >
                    Cancel
                        </Button>
                </Form>
        </Modal.Dialog>
    );
}

export default MyVerticallyCenteredModal