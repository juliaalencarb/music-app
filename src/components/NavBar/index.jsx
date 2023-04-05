import {NavLink, Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ghost</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to='/' href="#home">Home</Nav.Link>
            <Nav.Link to='/about' href="#features">About</Nav.Link>
            <Nav.Link to='/music' href="#pricing">Music</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar;