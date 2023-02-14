import React from "react";
import { Container, Stack, Form, Button, Row, Col } from "react-bootstrap";

function Home() {
    return (
            <Container>
            <Form>
                    <h1>Autonomous</h1>
                    <Row className="mb-3" xs={1} lg={2}>
                    <Col className="mt-2">
                        <Stack gap={2}>
                        <Form.Check 
                            type="checkbox" 
                            label="Se movio?" 
                            name="seMovio" 
                        />
                        <Form.Check 
                            type="checkbox" 
                            label="Sale del Area?" 
                            name="saledelArea" 
                        />
                        <Form.Check 
                            type="checkbox" 
                            label="Agarro Pieza?" 
                            name="agarroPieza" 
                        />
                        </Stack> 
                        </Col> 
                        <Col className="mt-2">
                        <Stack gap={2}>
                        <Form.Check 
                            type="checkbox" 
                            label="Se balanceo?" 
                            name="seBalanceo" 
                        />
                        <Form.Check 
                        type="checkbox" 
                        label="Empieza con Pieza?" 
                        name="empiezaconPieza" 
                        />
                        <Form.Group>
                            <Form.Label>Posición</Form.Label>
                            <Form.Control type="text" id="posicionPiezas" />
                            <Form.Text id="passwordHelpBlock" muted>
                                Especifica la pieza, donde anota y si es constante
                            </Form.Text>
                        </Form.Group>
                        </Stack>
                        </Col>
                    </Row>
                <h1>Teleoperated</h1>
                    <Row className="mb-3" xs={1} lg={2}>
                    <Col className="mt-2">
                        <Stack gap={2}>
                        <Form.Group>
                            <Form.Label>Cantidad de Conos y Cubos</Form.Label>
                            <Form.Control type="text" id="cantidadPiezas" />
                            <Form.Text id="passwordHelpBlock" muted>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>De donde agarro la pieza</Form.Label>
                            <Form.Select name="dondeAgarra">
                            <option>Elige una opción</option>
                            <option value={"Piso"}>Piso</option>
                            <option value={"Loading"}>Loading</option>
                            <option value={"Ambos"}>Ambos</option>
                            </Form.Select>
                        </Form.Group> 
                        <Form.Check 
                            type="checkbox" 
                            label="Se descompuso?" 
                            name="seDescompuso" 
                        />                 
                        </Stack>  
                        </Col>
                        <Col className="mt-2">
                        <Stack gap={2}>
                        <Form.Group>
                            <Form.Label>En que niveles puso?</Form.Label>
                            <Form.Control type="text" id="nivelPuso" />
                            <Form.Text id="passwordHelpBlock" muted>
                            </Form.Text>
                        </Form.Group>
                        <Form.Check 
                            type="checkbox" 
                            label="Defendio?" 
                            name="defendio" 
                        />                 
                        </Stack>
                        </Col>
                    </Row>
                    <h1>Endgame</h1>
                    <Row className="mb-3" xs={1} lg={2}>
                    <Col className="mt-2">
                        <Stack gap={2}>
                        <Form.Group>
                            <Form.Label>Que hizo al final?</Form.Label>
                            <Form.Select name="dondeAgarra">
                            <option>Elige una opción</option>
                            <option value={"Park"}>Park</option>
                            <option value={"Balanceo"}>Balanceo</option>
                            <option value={"Puntos"}>Puntos</option>
                            </Form.Select>
                        </Form.Group>                     
                        </Stack>
                        </Col>  
                        <Col className="mt-2">
                        <Stack gap={2}>
                        <Form.Group>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control type="text" id="commentarios" />
                            <Form.Text id="passwordHelpBlock" muted>
                            </Form.Text>
                        </Form.Group>
                        </Stack>
                        </Col>
                    </Row>
                    <Button type="submit" size='lg'>Submit</Button>
                    
            </Form>
            </Container>
    );
}

export default Home;