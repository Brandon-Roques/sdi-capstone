import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
    const { users, loggedin, setLoggedin, moreInfo, setMoreInfo } = React.useContext(Context);
    const navigate = useNavigate();
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    return (
        <Row>
            {items.map((item, index) => {
                return (
                        <Col md={{span:3, offset:1}} style={{marginBottom: 20}}>
                            <Card className="text-center" style={{width: 400, minHeight: 260}}>
                                <Card.Header>User Added Item</Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.item_name}</Card.Title>
                                    <Card.Text>Description: {item.description.length < 100 ? item.description : item.description.slice(0, 99) + "..."} <br /> Quantity: {item.quantity}</Card.Text>
                                    <Button onClick={() =>{
                                        setMoreInfo(item)
                                        navigate('/moreinfo')}}>More Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                )
            })}
        </Row>

    )
}

export default Home;