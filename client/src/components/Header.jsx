import { useState, useContext } from "react";
import { AuthContext } from "../App";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

function Header() {
  const { dispatch } = useContext(AuthContext);
  const { state } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("userToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      <Navbar fluid='true' className='navbar' variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">PairPro</Navbar.Brand>
          <Nav>
            <Button variant="outline-success" onClick={logout}>Logout</Button>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
    
export default Header;
