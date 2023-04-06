import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, InputGroup, Button} from 'react-bootstrap';
import { Context } from '../App';

const AddItem = () => {
    const { loggedin, specificUser, setSpecificuser, userData, setUserData } = React.useContext(Context);
    const [itemName, setItemName] = useState([]);
    const [description, setDescription] = useState([]);
    const [quantityy, setQuantityy] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (loggedin === false) navigate("/");
    }, [loggedin]);
    const inputNewItem = () => {
        const dataToSend = {"userid": specificUser.userid, "item_name": itemName, "description": description, quantity: quantityy};
        fetch(`http://localhost:4000/additem/${specificUser.userid}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
                navigate('/profile')
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <>
        <Row>
            <Col className='text-center' md={{ span: 4, offset: 4 }}>
                <InputGroup>
                    <Form.Control
                        placeholder="Item Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <InputGroup>
                        <Form.Control
                            placeholder="Description"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Form.Control
                            placeholder="Quantity"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setQuantityy(e.target.value)}
                        />
                    </InputGroup>
                </InputGroup>
            </Col>
        </Row>
        <Row>
            {console.log(typeof quantityy)}
            <Col className='text-center' md={{ span:4, offset:4}}><Button onClick={inputNewItem}>Submit</Button></Col>
        </Row>
        </>
    )
}

export default AddItem;