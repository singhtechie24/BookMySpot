import './NavbarComponent.scss';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { FaArrowCircleRight } from 'react-icons/fa';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <img src={logo} alt="BS Logo" className="logo-img" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center Navigation Links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link>
            <Nav.Link as={Link} to="/feature">Feature</Nav.Link>
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/testimonial">Testimonial</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
          </Nav>
          
          {/* Auth Buttons */}
          <Nav className="auth-buttons">
            {/* <Button variant="login" className="me-2">Login</Button>
            <Button variant="signup">Sign up</Button> */}
            <ButtonComponent className='me-3' children={'Login'} variant={'orange'} icon = {<FaArrowCircleRight />} iconPosition='right'/>
            <ButtonComponent children={'Sign up'} variant={'blue'} icon = {<FaArrowCircleRight />} iconPosition='right'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
