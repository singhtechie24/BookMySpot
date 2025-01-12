import './LoginComponent.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginComponent = () => {
  return (
    <div className="login-section">
      <div className="map-background"></div>
      <Container>
        <div className="login-content">
          <h1>Sign In</h1>
          <p className="subtitle">Sign In for free to access to in any of our service</p>

          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
              <div className="forgot-password">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>

            <button type="submit" className="signin-button">Sign In</button>

            <div className="signup-link">
              Not a member? <Link to="/signup">Sign Up</Link>
            </div>

            <div className="divider">
              <span>Or</span>
            </div>

            <div className="social-buttons">
              <button type="button" className="facebook">
                <FaFacebook />
              </button>
              <button type="button" className="google">
                <FcGoogle />
              </button>
              <button type="button" className="apple">
                <FaApple />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default LoginComponent; 