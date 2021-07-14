import logo from './logo.svg';
import './App.css';
import {getData} from "./http/api";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Card, Col, Container, Image, ListGroup, Navbar, Row} from "react-bootstrap";
import pic from "./assets/pic_2.png"
import LikeButton from "./components/LikeButton";

const App = observer(() => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        getData().then(data => setData(data))
    }, [])
    data ? console.log(data.response) : console.log("nothing")

    return (
        <div className="App">
            <Row>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">Middle level</Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Выполнила <a href="https://github.com/ISMAKOVA">Исмакова Даяна</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
            <Row className="justify-content-center">
                {data ?
                    data.response.map((apartment) =>
                        <Col md={3} sm={6} className={"mt-3"}>
                            <Card style={{width: 250}} className="mx-2">
                                <Card.Img variant="top" src={pic}/>
                                <Card.Body>
                                    <Card.Title>{apartment.attributes.title}</Card.Title>
                                    <Card.Subtitle
                                        className="mb-2 text-muted">Адрес: {apartment.attributes.address.city},
                                        ул. {apartment.attributes.address.street},
                                        дом. {apartment.attributes.address.house},
                                        кв. {apartment.attributes.address.room}</Card.Subtitle>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Количество комнат: {apartment.attributes.rooms}</ListGroup.Item>
                                        <ListGroup.Item>Площадь: {apartment.attributes.area} {apartment.attributes.unit}</ListGroup.Item>
                                        <ListGroup.Item>{apartment.relationships.type}: {apartment.relationships.attributes.last_name} {apartment.relationships.attributes.first_name} {apartment.relationships.attributes.middle_name}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <LikeButton/>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) : ""}</Row>
        </div>
    );
});

export default App;
