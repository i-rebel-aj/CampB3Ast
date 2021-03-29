import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand>Campus B34st</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav justify className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/register">Sign Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/forum/create">Create Forum</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/forum/:id/post/create">Post Creation</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <Button variant="outline-primary">Login</Button>
            </Nav.Link>

            <Nav.Link href="/register">
              <Button variant="primary">Sign Up</Button>
            </Nav.Link>
            <Nav.Link href="/forum/create">
              <Button variant="primary">Create Forum</Button>
            </Nav.Link>
            <Nav.Link href="/forum/:id/post/create">
              <Button variant="primary">Post Creation</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
