import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown,} from 'react-bootstrap';



const Navbars = () => {
  return (
    <div>
         <Navbar bg="light" variant="light" expand="lg" fixed="top" >
            <Container>
              <Navbar.Brand  to={"/MainContent"}>FieldEdge
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                
               
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item>FieldEdge Software</NavDropdown.Item>
                    <NavDropdown.Item >FieldEdge Payments</NavDropdown.Item>
                    <NavDropdown.Item>FieldEdge Flat Rate</NavDropdown.Item>
                    <NavDropdown.Item>ESC Software</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Industries" id="basic-nav-dropdown">
                  <NavDropdown.Item>HVAC Software</NavDropdown.Item>
                    <NavDropdown.Item >Plumbing Software</NavDropdown.Item>
                    <NavDropdown.Item>Electrician Software</NavDropdown.Item>
                    <NavDropdown.Item>Locksmith Software</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Resources" id="basic-nav-dropdown">
                  <NavDropdown.Item>Blog</NavDropdown.Item>
                    <NavDropdown.Item >News</NavDropdown.Item>
                    <NavDropdown.Item>FieldEdge</NavDropdown.Item>
                 

                  </NavDropdown>

                </Nav>
                <a class="btn btn-success"  role="button">Request Demo</a>
              </Navbar.Collapse>
            </Container>
          </Navbar>


    </div>
  )
}

export default Navbars





