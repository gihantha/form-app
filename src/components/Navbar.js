import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarCom = () => {
    return (
        <Navbar className="fixed-top mb-lg-5 mt-4">
            <Container className='ms-4 fw-bolder'>
                <div className="text-start navbar-text">Buildform</div>
            </Container>
        </Navbar>
    );
}

export default NavbarCom