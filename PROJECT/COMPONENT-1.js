import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./COMPONENT1.css"

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <img src = "\img\images.jpg" alt = "locataion" width="130" height="60"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="http://localhost:3000/"><b>Home</b></Nav.Link>
            <Nav.Link href="https://www.atlassian.com/software/jira?campaign=18442427757&adgroup=143485223644&targetid=kwd-855725830&matchtype=e&network=g&device=c&device_model=&creative=656562805594&keyword=jira&placement=&target=&ds_eid=700000001558501&ds_e1=GOOGLE&gad_source=1&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LCQo__j9IxcLZ9zaAM5kK1usCeTc0hctbwejvJtTfLwuQPj3XW2OKxoCaNkQAvD_BwE"><b>website</b></Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Chennai"><b>Chennai</b></NavDropdown.Item>
              <NavDropdown.Item href="#Bangalore">
              <b>Bangalore</b>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Foreign">
              <b>Foreign</b>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            <b>Link</b>
            </Nav.Link>
          </Nav>
          <h2>Welcome</h2>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><b>Search</b></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
  );
}

export default NavScrollExample;