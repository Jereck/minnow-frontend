import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Listing = () => {
  return (
    <div>
      <Card style={{ marginBottom: 15}}>
        <Card.Header>Listing #1</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>
            Short Description
          </Card.Text>
          <Button variant="primary">View Listing</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Listing #2</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>
            Short Description
          </Card.Text>
          <Button variant="primary">View Listing</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Listing