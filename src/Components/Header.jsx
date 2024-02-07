import React from 'react'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <Navbar expand="lg" bg='primary' variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Brand>
             <Link to='/' style={{color: 'black', textDecoration: 'none'}}>Workshop Ecommerce</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart"> Cart <i className='fas fa-shopping-cart'></i> </Nav.Link>
            <NavDropdown title="Shipping Address" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/editshipping">Edit Shipping Address</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/showshipping">Show shipping address</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header