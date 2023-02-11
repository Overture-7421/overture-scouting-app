import React from "react";
import { Container, Stack, Form, Button } from "react-bootstrap";

function Home() {
    return (
            <Container>
            <Form>
                <Stack gap={2}>
                    <h1>Autonomous</h1>
                    <Stack gap={2} direction="horizontal">
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
                    </Stack>
                <h1>Teleoperated</h1>
                    <Stack gap={2} direction="horizontal">
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
                    </Stack>
                    <h1>Endgame</h1>
                    <Stack gap={2} direction="horizontal">
                        <Stack gap={2}>
                        <Form.Group>
                            <Form.Label>Que hizo al final?</Form.Label>
                            <Form.Select name="dondeAgarra">
                            <option>Elige una opción</option>
                            <option value={"Park"}>Park</option>
                            <option value={"Balanceo"}>Balanceo</option>
                            </Form.Select>
                        </Form.Group>                     
                        </Stack>  
                        <Stack gap={2}>
                        <Form.Group>
                            <Form.Label>Coments</Form.Label>
                            <Form.Control type="text" id="commentarios" />
                            <Form.Text id="passwordHelpBlock" muted>
                            </Form.Text>
                        </Form.Group>
                        </Stack>
                    </Stack>
                    <Button type="submit">Submit</Button>
                    </Stack>
            </Form>
            </Container>
    );
}

export default Home;