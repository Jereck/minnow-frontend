import React from 'react'

import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const  NavBar = (props) => {
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
          <Button variant="outline-primary"><Nav.Link href="/login">Sign In</Nav.Link></Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
