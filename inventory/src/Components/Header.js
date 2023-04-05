import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import { Context } from '../App';

const Header = () => {
    const { users, loggedin, setLoggedin } = React.useContext(Context);
    const navigate = useNavigate();
    return (
  
        <Nav>
            <Nav.Item>
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            </Nav.Item>
            {loggedin ? <Nav.Item className='justif-content-end'>
                <Nav.Link onClick={() => navigate('/profile')}>Profile</Nav.Link>
            </Nav.Item> : <Nav.Item className='justif-content-end'>
                <Nav.Link onClick={() => navigate('/login')}>login</Nav.Link>
            </Nav.Item>}
        </Nav>
    )
}

export default Header;