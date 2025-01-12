import './FooterComponent.scss';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="BookMySpot Logo" className="footer-logo" />
            <p>Copyright © 2024 Book My Spot<br />All rights reserved</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help center</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Status</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Stay up to date</h3>
              <div className="newsletter">
                <input type="email" placeholder="Your email address" />
                <button type="submit" aria-label="Subscribe">→</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent; 