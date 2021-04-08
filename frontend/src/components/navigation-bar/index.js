import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import api from "../../API/api";
import { isAutheticated } from "../../_helpers";
import { useSelector, useDispatch } from "react-redux";
import { authSuccess, authError } from "../../redux/auth/authActions";

function NavBar() {
  const history = useHistory();

  const auth = useSelector((state) => state.auth);

  console.log("AUTH", auth);
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
            {isAutheticated() ? (
              <>
                {" "}
                <Nav.Item>
                  <Nav.Link href="/forum/create">Create Forum</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/profile/${auth.user?.username}`}>
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/forum/create">Create Forum</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/forum/:id/post/create">
                    Post Creation
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : null}
          </Nav>
          <Nav>
            {isAutheticated() ? (
              <>
                {" "}
                <Nav.Item>{auth.user?.name}</Nav.Item>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    api.logout();
                    history.push("/home");
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link href="/login">
                  <Button variant="outline-primary">Login</Button>
                </Nav.Link>
                <Nav.Link href="/register">
                  <Button variant="primary">Sign Up</Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
