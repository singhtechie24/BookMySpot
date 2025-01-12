import './NavbarComponent.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="BookMySpot Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#feature">Feature</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <div className="nav-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign up</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
