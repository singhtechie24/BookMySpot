import './PromoComponent.scss';
import { Container } from 'react-bootstrap';
import { FaClock, FaCarAlt } from 'react-icons/fa';
import driverImg from '../../assets/driver.jpg';

const PromoComponent = () => {
  return (
    <section className="promo-section">
      <Container>
        <div className="promo-content">
          <div className="promo-text">
            <span className="save">Save</span>
            <h2>Unlock Your Parking Savings Today!</h2>
            <p>Experience the convenience of urban parking with a special offer. Enjoy 15% off your first booking and simplify your parking experience.</p>
            
            <div className="promo-features">
              <div className="feature">
                <FaClock />
                <div className="feature-text">
                  <h3>Limited Time</h3>
                  <p>Don't miss out on this exclusive discount for new users!</p>
                </div>
              </div>
              <div className="feature">
                <FaCarAlt />
                <div className="feature-text">
                  <h3>Get Started</h3>
                  <p>Join our community and find your perfect parking spot today.</p>
                </div>
              </div>
            </div>

            <div className="promo-buttons">
              <button className="claim">Claim</button>
              <button className="learn-more">Learn More <span>→</span></button>
            </div>
          </div>
          <div className="promo-image">
            <img src={driverImg} alt="Happy driver using BookMySpot" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PromoComponent; 