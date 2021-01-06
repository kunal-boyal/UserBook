import React from 'react'
import { Button, Card } from 'react-bootstrap'

function UserCard(props) {
    return (
        <Card style={{ width: '25%',display:'inline-block',margin:'10px'}} >
            <Card.Body>
                <Card.Title>Name : {props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Email : {props.email}</Card.Subtitle>
                <Card.Text>Phone Number : {props.phoneNumber}</Card.Text>
                <Button style={{margin:'8px'}} onClick={props.update} variant="primary">Edit</Button>
                <Button style={{ margin: '8px' }} onClick={props.delete} variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default UserCard