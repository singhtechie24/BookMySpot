import './SignUpComponent.scss';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignUpComponent = () => {
  const [password, setPassword] = useState('');

  const validatePassword = (pass: string) => {
    const conditions = {
      length: pass.length >= 6,
      upperCase: /[A-Z]/.test(pass),
      lowerCase: /[a-z]/.test(pass),
      number: /[0-9]/.test(pass)
    };
    return conditions;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const conditions = validatePassword(password);

  return (
    <div className="signup-section">
      <div className="map-background"></div>
      <Container>
        <div className="signup-content">
          <h1>Sign up</h1>
          <p className="subtitle">Sign up for free to access to in any of our products</p>

          <form className="signup-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="password-requirements">
                <div className={`requirement ${conditions.length ? 'valid' : ''}`}>
                  At least 6 Characters
                </div>
                <div className={`requirement ${conditions.upperCase ? 'valid' : ''}`}>
                  At least 1 upper case letter (A-Z)
                </div>
                <div className={`requirement ${conditions.lowerCase ? 'valid' : 'invalid'}`}>
                  At least 1 lower case letter (a-z)
                </div>
                <div className={`requirement ${conditions.number ? 'valid' : ''}`}>
                  At least 1 Number (0-9)
                </div>
              </div>
            </div>

            <button type="submit" className="signup-button">Sign Up</button>

            <div className="login-link">
              Already a member? <a href="/login">Sign In</a>
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

export default SignUpComponent; 