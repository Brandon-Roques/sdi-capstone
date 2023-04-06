import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import { Row, Col, Button, Form, InputGroup, Card } from "react-bootstrap";

const Profile = () => {
    const { loggedin, specificUser, setSpecificuser } = React.useContext(Context);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [updateInfo, setUpdateInfo] = useState(true);
    const [firstname, setFirstName] = useState([]);
    const [lastname, setLastname] = useState([]);
    const [password, setPassword] = useState([]);
    const [username, setUsername] = useState([]);
    useEffect(() => {
        if (loggedin === false) navigate("/");
    }, [loggedin]);
    useEffect(() => {
        fetch(`http://localhost:4000/user/${specificUser.userid}`)
            .then((response) => response.json())
            .then((data) => setUserData(data));
    }, []);
    const sendUpdate = () => {
        const dataToSend = {};
        if (!Array.isArray(firstname)) {
            dataToSend["first_name"] = firstname;
        }
        if (!Array.isArray(lastname)) {
            dataToSend["last_name"] = lastname;
        }
        if (!Array.isArray(password)) {
            dataToSend["password"] = password;
        }
        if (!Array.isArray(username)) {
            dataToSend["username"] = username;
        }
        fetch(`http://localhost:4000/user/${specificUser.userid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => response.json())
            .then((data) => {
                setSpecificuser(data[0]);
                setUpdateInfo(true);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <>
            <Row>
                <Col className="text-center">User Info</Col>
                <Col className="text-center">User Items</Col>
            </Row>
            <Row>
            <Col md={{ span: 6, offset: 6 }} className="text-center">
                <Button onClick={() => navigate('/addItem')}>Add Item</Button>
            </Col>
                </Row>
            <Row className="justify-content-center">
                {updateInfo ? (
                    <Col className="text-center">
                        First Name: {specificUser.first_name} <br />
                        Last Name: {specificUser.last_name} <br />
                        Username: {specificUser.username} <br />
                        Password: {specificUser.password} <br />
                        <Button variant="primary" onClick={() => setUpdateInfo(false)}>
                            Update/Change Info
                        </Button>
                    </Col>
                ) : (
                    <Col className="text-center">
                        <InputGroup>
                            <Form.Control
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Form.Control
                                placeholder="Last Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Form.Control
                                placeholder="Password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputGroup>
                        <Button variant="primary" onClick={sendUpdate}>
                            Change
                        </Button>{" "}
                        <Button variant="primary" onClick={() => setUpdateInfo(true)}>
                            Go Back
                        </Button>
                    </Col>
                )}
        
                <Col className="text-center">
                    {console.log("userdata", userData)}
                    {userData.map((item) => {
                        return (
                            <Card className="text-center" style={{width: "400px"}}>
                                <Card.Header>User Added Item</Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.item_name}</Card.Title>
                                    <Card.Text>Description: {item.description} <br /> Quantity: {item.quantity}</Card.Text>
                                    <Button className="m-3" variant="primary">Edit</Button> 
                                    <Button classname="m-3" variant="primary">Delete</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        );
                    })}
                </Col>
            </Row>
        </>
    );
};

export default Profile;
