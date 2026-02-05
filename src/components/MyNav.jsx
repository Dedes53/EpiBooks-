import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav(props) {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                        <NavDropdown title="Genres" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Horror</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Romance</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Scifi</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav;