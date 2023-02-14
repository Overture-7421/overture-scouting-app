import React from "react";
import logoOverture from "./logoSimple.png";
import { Navbar, Container, Nav, NavItem, Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function handleClickLogOut(){
	sessionStorage.clear();
	signOut(auth);
}

function NavigationBar() {
	return (
		<>
	    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">
						<img
							alt=""
							src={ logoOverture }
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{ ' ' }
						Overture
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse 
						id="responsive-navbar-nav"
						style={{justifyContent: "space-between"}}>
						<Nav>
							<Nav.Item>
								<Nav.Link href="/">Home</Nav.Link>
							</Nav.Item>
							{sessionStorage.getItem("user")?(
								<>
							<Nav.Item>
								<Nav.Link href="/Pits">Pits</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/Teams">Teams</Nav.Link>
							</Nav.Item>
							</>
							):(
								<></>
							)}
						</Nav>
						{sessionStorage.getItem("user")?(
							<Nav>
								<NavItem>
									<Button
									as={Nav.Link}
									variant="link"
									href="/"
									onClick={handleClickLogOut}>
									LogOut
									</Button>
								</NavItem>
							</Nav>
						):(
							<></>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavigationBar;