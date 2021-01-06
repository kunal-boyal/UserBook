import React from 'react'
import { Modal, Button } from 'react-bootstrap'

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
                    Confirm Delete
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer >
                <Button variant="danger" onClick={props.clicked} style={{ marign: 'auto' }}>Yes</Button>
                <Button variant="primary" onClick={props.onHide} style={{ marign: 'auto' }}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal