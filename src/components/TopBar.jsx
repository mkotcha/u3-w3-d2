import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-body-tertiary">
      <Container>
        <Row>
          <Col xs={10} className="mx-auto">
            <Navbar expand="md">
              <NavLink className="navbar-brand" to="/">
                Fatica2000
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/favourites">
                    Favourites
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default TopBar;
