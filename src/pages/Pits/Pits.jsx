import React from "react";
import { Container, Stack, Form, Button, Row, Col} from "react-bootstrap";

function Pits() {
    return(
        <Container>
        <Form>
            <h1>Pits</h1>
            <Row className="mb-3" xs={1} lg={2}>
                <Col className="mt-2">
                <Stack gap={2}>
                    <Form.Group>
                        <Form.Label>Team Number</Form.Label>
                         <Form.Control type="text" id="teamNumber" />
                            <Form.Text id="passwordHelpBlock" muted>
                            </Form.Text>
                    </Form.Group>
                    <Form.Group>
                            <Form.Label>Mecanismo</Form.Label>
                            <Form.Select name="mecanismo">
                            <option>Elige una opción</option>
                            <option value={"Brazo"}>Brazo</option>
                            <option value={"Elevador"}>Elevador</option>
                            <option value={"Magia"}>Magia</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Autonomo</Form.Label>
                     <Form.Control type="text" id="autonomo" />
                        <Form.Text id="passwordHelpBlock" muted>
                        </Form.Text>
                    </Form.Group> 
                    <Form.Group>
                            <Form.Label>Pieza</Form.Label>
                            <Form.Select name="pieza">
                            <option>Elige una opción</option>
                            <option value={"Cono"}>Cono</option>
                            <option value={"Cubo"}>Cubo</option>
                            <option value={"Ambos"}>Ambos</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                            <Form.Label>Nivel</Form.Label>
                            <Form.Select name="nivel">
                            <option>Elige una opción</option>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            </Form.Select>
                    </Form.Group>
                    </Stack>
                </Col>
                <Col className="mt-2">
                <Stack gap={2}>
                    <Form.Group>
                            <Form.Label>Chasis</Form.Label>
                            <Form.Select name="mecanismo">
                            <option>Elige una opción</option>
                            <option value={"Tanque"}>Tanque</option>
                            <option value={"Swerve"}>Swerve</option>
                            <option value={"Otro"}>Otro</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Tiempo</Form.Label>
                     <Form.Control type="text" id="tiempo" />
                        <Form.Text id="passwordHelpBlock" muted>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                            <Form.Label>De donde recoge?</Form.Label>
                            <Form.Select name="mecanismo">
                            <option>Elige una opción</option>
                            <option value={"Piso"}>Piso</option>
                            <option value={"Loading"}>Loading</option>
                            <option value={"Ambos"}>Ambos</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Perimetro</Form.Label>
                     <Form.Control type="text" id="perimetro" />
                        <Form.Text id="passwordHelpBlock" muted>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                            <Form.Label>Balancea</Form.Label>
                            <Form.Select name="balancea">
                            <option>Elige una opción</option>
                            <option value={"Si"}>Si</option>
                            <option value={"No"}>No</option>
                            </Form.Select>
                    </Form.Group>
                </Stack>
                </Col>
            </Row>
            <Button type="submit">Submit</Button>
    </Form>
    </Container>
    );
    
}

export default Pits;