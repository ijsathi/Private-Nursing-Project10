import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import headerLogo from '../../images/logo/header-logo.webp';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img style={{color:'white'}} className='w-50 logo' src={headerLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className='justify-text-end fw-normal'>
                <Nav className="me-auto ">
                <Nav.Link>
                <Link style={{color:'white', textDecoration:'none'}} to='/home'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/ourservices'>Services</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/ourdoctors'>Doctors</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/contactus'>Contact Us</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/aboutus'>About Us</Link> 
                </Nav.Link>
                </Nav>
                {
                 user.email && <span style={{color:'white'}}>{user.displayName} </span>
                }
               
                {user?.email ?
                    <button onClick={logOut}>Log out</button>:
                    
                    <Link style={{color:'white', textDecoration:'none'}} to='/login'>Sign Up </Link> 
                }
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/signup'>Login</Link> 
                </Nav.Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;