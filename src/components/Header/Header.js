import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import headerLogo from '../../images/logo/header-logo.webp';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img style={{color:'white'}} className='w-50 logo' src={headerLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className='justify-text-end fw-normal'>
                <Nav className="me-auto ">
                <Nav.Link style={{color:'white'}} href="#home">HOME</Nav.Link>
                <Nav.Link style={{color:'white'}} href="#features">SERVICES</Nav.Link>
                <Nav.Link style={{color:'white'}} href="#pricing">DIAGNOSES</Nav.Link>
                <Nav.Link style={{color:'white'}} href="#pricing">FEATURES</Nav.Link>
                <Nav.Link style={{color:'white'}} href="#pricing">ABOUT US</Nav.Link>
                </Nav>
                <Navbar.Brand href="#home"> <i className="fas fa-ambulance"></i>        <i className="fas fa-phone-alt">+1 234 567 8989</i><i className="fas fa-hand-holding-medical text-end ps-5"></i></Navbar.Brand>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;