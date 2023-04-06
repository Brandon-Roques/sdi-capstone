import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../App";
import { Button, Row, Col, Form, InputGroup } from 'react-bootstrap';

const Login = () => {
    const { users, setLoggedin, setSpecificuser } = React.useContext(Context);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const logginCheck = () => {
        var login_check = 'no'
        users.map((user) => {
            if(username === user.username && password === user.password) {
                setLoggedin(true)
                setSpecificuser(user)
                login_check = 'yes'
                alert("Login successful", navigate('/profile'))
            }
        })
        if (login_check === 'no') {
            alert('Login unsuccessful, please try again')
        }
    }
    return (
        <>
            <Row className="justify-content-center">
                <Col md="auto">Please Login</Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md='auto'>
                    <InputGroup md="auto">
                        <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setUsername(e.target.value)} />
                    </InputGroup>
                    <Form.Group md="auto">
                        <Form.Control type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button md="auto" varient="primary" onClick={() => logginCheck()}>Submit</Button>
                </Col>
            </Row>
        </>
    )
}

export default Login;