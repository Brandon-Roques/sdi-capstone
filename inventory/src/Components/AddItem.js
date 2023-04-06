import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, InputGroup} from 'react-bootstrap';
import { Context } from '../App';

const AddItem = () => {
    const { loggedin, specificUser, setSpecificuser } = React.useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if (loggedin === false) navigate("/");
    }, [loggedin]);
    return (
        <Row>
            <Col className='text-center' md={{ span: 4, offset: 4 }}>
                <InputGroup>
                    <Form.Control
                        placeholder="Item Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputGroup>
                        <Form.Control
                            placeholder="Description"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            // onChange={(e) => setUsername(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Form.Control
                            placeholder="Quantity"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            // onChange={(e) => setUsername(e.target.value)}
                        />
                    </InputGroup>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default AddItem;