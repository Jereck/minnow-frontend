import React, { useEffect } from 'react'
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container style={{ width: '80%', marginTop: 25}}>
      <Row>

        <Col xs={6} md={4}>
          <div>
            <h2>Joe McReader</h2>
            <div style={{ height: 250, width: 250 }}>
              <Image style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} src="https://images.unsplash.com/photo-1586083702768-190ae093d34d" />
            </div>
          </div>
        </Col>

        <Col xs={12} md={8}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Basic Info</Accordion.Header>
              <Accordion.Body>
                <p>DOB: 1/2/1988</p>
                <p>Location: Cedar Rapids, 12345</p>
                <p>Languages: English</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Biography</Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Course Certificates</Accordion.Header>
              <Accordion.Body>
                This is where certificates will be displayed
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

      </Row>
    </Container>
  )
}

export default Profile
