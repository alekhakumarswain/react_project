import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../styles/custom.scss';

function NavigationMenu() {
  // Check if user is logged in
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const userName = loggedInUser ? loggedInUser.name : 'Guest';
  const activity = loggedInUser ? 'LogOut' : 'LogIn';
  const history = useHistory();

  // Function to handle logout
  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('loggedInUser');
    history.push('/login');
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Online Assessment Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <b>Welcome, {userName}</b>&nbsp;
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout} className={loggedInUser ? 'text-danger' : ''}>{activity}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationMenu;
