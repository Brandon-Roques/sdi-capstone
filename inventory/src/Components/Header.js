import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Context } from "../App";

const Header = () => {
    const { users, loggedin, setLoggedin } = React.useContext(Context);
    const navigate = useNavigate();
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand onClick={() => navigate("/")}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {loggedin ? (<Nav>
                <Nav.Item className="justif-content-end">
                    <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item className="justif-content-end">
                    <Nav.Link onClick={() => {
                        setLoggedin(false)
                        navigate("/")
                    }}>Signout</Nav.Link>
                </Nav.Item>
            </Nav>

            ) : (
                <Nav>
                <Nav.Item className="justif-content-end">
                    <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
                </Nav.Item>
                 <Nav.Item className="justif-content-end">
                 <Nav.Link onClick={() => navigate("/signup")}>Sign Up</Nav.Link>
             </Nav.Item>
             </Nav>
            )}
        </Navbar>
    );
};

export default Header;
