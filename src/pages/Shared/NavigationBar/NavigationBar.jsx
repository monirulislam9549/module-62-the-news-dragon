import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/category/0">Home</Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {user &&
                            <FaUserCircle style={{ fontSize: '2rem' }}>
                            </FaUserCircle>
                        }

                        {user ? <Button onClick={handleLogout} variant="secondary">Logout</Button> :
                            <Link to="/login">
                                <Button variant="secondary">Login</Button>
                            </Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;