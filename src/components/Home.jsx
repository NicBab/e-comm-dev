import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button  } from 'react-bootstrap'

const Home = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" className="w-100">
        <Navbar.Brand href="#home">ShewNet</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link><Link to="/products">products</Link></Nav.Link>
        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
        <Nav.Link><Link to="/signup">signup</Link></Nav.Link>
        </Nav>
        <Form inline>
        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2 w-100"  />
        <Button variant="outline-info">Search</Button> */}
    </Form>
  </Navbar>
        </>
    )
}

export default Home 
