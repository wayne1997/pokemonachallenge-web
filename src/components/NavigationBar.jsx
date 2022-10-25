import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./NavigationBar.css";


export default function NavigationBar() {
  return (
    <>
        <Navbar collapseOnSelect fixed="top" bg="dark" expand="sm" variant="dark">
            <Container fluid>
                <Navbar.Brand>
                    <span className="nes-text is-error title">
                        PokemonApp
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                <Navbar.Offcanvas 
                    id={`offcanvasNavbar-expand-sm`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                    placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`} > 
                        <span className="nes-text is-error title" >Opciones</span>
                     </Offcanvas.Title>
                </Offcanvas.Header>
                 <Offcanvas.Body>
                 <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link className="text-decoration-none">
                            <span className=" nes-text is-error options-menu text-decoration-none">     
                            Información
                            </span>
                        </Nav.Link>
                        <Nav.Link className="text-decoration-none">
                           <span className="nes-text is-error options-menu">     
                            Contacto
                            </span>
                        </Nav.Link>
                    </Nav>
                 </Offcanvas.Body>   
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>
  )
}

