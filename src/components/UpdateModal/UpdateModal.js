import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter" >
                    Update User
                </Modal.Title>
            </Modal.Header>
            <Form style={{margin:'10px'}}>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={props.inputchange} placeholder={props.name} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={props.inputchange} placeholder={props.email} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" name="phoneNumber" onChange={props.inputchange} placeholder={props.phoneNumber} />
                </Form.Group>
            </Form>
            <Modal.Footer >
                <Button variant="warning" onClick={props.updateUser} style={{ marign: 'auto' }}>Update</Button>
                <Button variant="primary" onClick={props.onHide} style={{ marign: 'auto' }}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal