import React, { useState } from 'react'

import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

const  NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">MinnowPond</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button className="mr-1" variant="secondary">Sign Up</Button>
          <Button href="/user" variant="outline-primary">Sign In</Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
