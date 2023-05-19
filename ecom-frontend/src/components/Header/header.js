import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate('/register');
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-comm</Navbar.Brand>
          <Nav className="me-auto navbar_warapper">
            {localStorage.getItem('user-info') ?
              <>
                <Link to="/">Product List</Link>
                <Link to="/add">Add Products</Link>
                {/* <Link to="/update">Update Products</Link> */}
                <Link to="/search">Search Products</Link>
              </> :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            }
          </Nav>
          <Nav>
            {localStorage.getItem('user-info') ?
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown> : null
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
