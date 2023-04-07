import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import { Row, Col, Button, Form, InputGroup, Card } from "react-bootstrap";

const Profile = () => {
    const { loggedin, specificUser, setSpecificuser, userData, setUserData, moreInfo, setMoreInfo } = React.useContext(Context);
    const navigate = useNavigate();
    const [updateInfo, setUpdateInfo] = useState(true);
    const [updateItem, setUpdateItem] = useState([true, []]);
    const [firstname, setFirstName] = useState([]);
    const [lastname, setLastname] = useState([]);
    const [password, setPassword] = useState([]);
    const [username, setUsername] = useState([]);
    const [itemName, setItemName] = useState([]);
    const [description, setDescription] = useState([]);
    const [quantityy, setQuantityy] = useState([]);
    useEffect(() => {
        if (loggedin === false) navigate("/");
    }, [loggedin]);
    useEffect(() => {
        fetch(`http://localhost:4000/user/${specificUser.userid}`)
            .then((response) => response.json())
            .then(data => setUserData(data));
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
    const deleteItem = (itemid) => {
        const body = { "userid": specificUser.userid }
        fetch(`http://localhost:4000/item/${itemid}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => {
                setUserData(data)
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }
    const itemUpdate = (itemid) => {
        const dataToSend = { 'id': itemid };
        if (!Array.isArray(itemName)) {
            dataToSend["item_name"] = itemName;
        }
        if (!Array.isArray(description)) {
            dataToSend["description"] = description;
        }
        if (!Array.isArray(quantityy) && Number.isInteger(Number(quantityy)) === true) {
            dataToSend["quantity"] = quantityy;
        }
        fetch(`http://localhost:4000/item/${specificUser.userid}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => response.json())
            .then((data) => {
                setUserData(data)
                setUpdateItem(true)
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }
    return (
        <>
            {console.log('specificUser', specificUser)}
            {console.log('userData', userData)}
            <Row>
                <Col className="text-center" style={{ fontSize: 30, margin: 20 }}>User Info</Col>
                <Col className="text-center" style={{ fontSize: 30, margin: 20 }}>User Items</Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 6 }} className="text-center">
                    <Button onClick={() => navigate('/addItem')}>Add Item</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
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
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Password"
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
                </Col>
                <Col className="text-center" >
                    <Row>
                        {updateItem[0] ? userData.map((item) => {
                            return (
                                <Col style={{ margin: 20, marginLeft: 60 }} md={{span:4}}>
                                    <Card className="text-center" style={{ width: "400px", margin:20, minHeight: 350 }}>
                                        <Card.Header>User Added Item</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{item.item_name}</Card.Title>
                                            <Card.Text>Description: {item.description.length < 100 ? item.description : item.description.slice(0, 99) + "..."} <br /> Quantity: {item.quantity}</Card.Text>
                                            <Button className="m-3" variant="primary" onClick={() => setUpdateItem([false, item.id])}>Edit</Button>
                                            <Button classname="m-3" variant="primary" onClick={() => deleteItem(item.id)}>Delete</Button> <br />
                                            <Button classname="m-3" variant="primary" onClick={() => {
                                                setMoreInfo(item)
                                                navigate('/moreinfo')
                                            }}>More Info</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }) : userData.map((item) => {
                            if (!Array.isArray(updateItem[1]) && item.id === updateItem[1]) {
                                return (
                                    <Col style={{ margin: 20, marginLeft: 60 }} md={{span:4}}>
                                    <Card className="text-center" style={{ width: "400px", minHeight: 350 }}>
                                        <Card.Header>User Added Item</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <InputGroup>
                                                    Item Name:
                                                    <Form.Control
                                                        placeholder={item.item_name}
                                                        onChange={(e) => setItemName(e.target.value)}
                                                    />
                                                </InputGroup>
                                                <InputGroup>
                                                    Description:
                                                    <Form.Control
                                                        placeholder={item.description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                    />
                                                </InputGroup>
                                                <InputGroup>
                                                    Quantity:
                                                    <Form.Control
                                                        placeholder={item.quantity}
                                                        onChange={(e) => setQuantityy(e.target.value)}
                                                    />
                                                </InputGroup>
                                            </Card.Title>
                                            <Button className="m-3" variant="primary" onClick={() => itemUpdate(item.id)}>Submit</Button>
                                            <Button classname="m-3" variant="primary" onClick={() => setUpdateItem([false, []])}>Go back</Button>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                )
                            } else {
                                return (
                                    <Col style={{ margin: 20, marginLeft: 60 }} md={{span:4}}>
                                    <Card className="text-center" style={{ width: "400px", minHeight: 350 }}>
                                        <Card.Header>User Added Item</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Item Name <br />{item.item_name}</Card.Title>
                                            <Card.Text>Description: {item.description.length < 100 ? item.description : item.description.slice(0, 99) + "..."} <br /> Quantity: {item.quantity}</Card.Text>
                                            <Button className="m-3" variant="primary" onClick={() => setUpdateItem([false, item.id])}>Edit</Button>
                                            <Button classname="m-3" variant="primary" onClick={() => deleteItem(item.id)}>Delete</Button> <br />
                                                        <Button classname="m-3" variant="primary" onClick={() => {
                                                setMoreInfo(item)
                                                navigate('/moreinfo')
                                            }}>More Info</Button>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                )
                            }
                        })}
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Profile;