import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { Context } from '../App';

const Signup = () => {
    const { users, setUsers } = React.useContext(Context);
    const navigate = useNavigate();
    const [firstname, setFirstName] = useState([]);
    const [lastname, setLastname] = useState([]);
    const [password, setPassword] = useState([]);
    const [username, setUsername] = useState([]);
    const signUp = () => {
        const dataToSend = {
            "first_name": firstname,
            "last_name": lastname,
            "username": username,
            "password": password
        }
        fetch('http://localhost:4000/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                navigate('/login')
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

return (
    <>
        <Row>
            <Col md={{ span: 4, offset: 4 }} className={'text-center'}>Enter Your info</Col>
        </Row>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>First Name</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Last Name</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>UserName</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Password     </InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 4, offset: 4 }} className={'text-center'}>
                <Button onClick={signUp}>Signup!</Button>
            </Col>
        </Row>
    </>
)
}

export default Signup