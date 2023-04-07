import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, InputGroup, Card } from "react-bootstrap";
import { Context } from '../App';

const MoreInfo = () => {
    const { loggedin, specificUser, setSpecificuser, userData, setUserData, moreInfo, setMoreInfo } = React.useContext(Context);
    return (
        <Row style={{marginTop: 50}} className='justify-content-center'>
            <Col md={{ span: 3 }}>
                <Card className="text-center" style={{ width: "400px" }}>
                    <Card.Header>User Added Item</Card.Header>
                    <Card.Body>
                        <Card.Title>{moreInfo.item_name}</Card.Title>
                        <Card.Text>Description: {moreInfo.description} <br /> Quantity: {moreInfo.quantity}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default MoreInfo