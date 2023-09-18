import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <Navbar bg='light' data-bs-theme='light'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Navbar
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/blog'>
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to='/blog-froala'>
            Blog Froala
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNavbar
