import React, { useState, useEffect } from 'react'
import { Context } from '../App';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const { users, loggedin, setLoggedin } = React.useContext(Context);
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(response => response.json())
            .then(data => setItems(data))
    },[])
    return (
        <>
            {items.map((item, index) => {
                return (
                    <Row>
                        <Col>{item.item_name}</Col>
                    </Row>
                )
            })}
        </>

    )
}

export default Home;