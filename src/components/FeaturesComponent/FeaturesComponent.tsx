import './FeaturesComponent.scss';
import { Container } from 'react-bootstrap';
import parkingImg2 from '../../assets/parking2.png';
import parkingImg3 from '../../assets/parking3.png';
import parkingImg1 from '../../assets/parking1.png';
import ParkingSpotComponent from '../components/ParkingSpotComponent/ParkingSpotComponent';

const FeaturesComponent = () => {
  return (
    <section className="features-section">
      <Container>
        <h2>Find Your Spot with<br />Our Interactive Map Feature</h2>
        <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image">
              <img src={parkingImg1} alt="Hassle-free Parking" />
            </div>
            <h3>Hassle-free Parking Solutions</h3>
            <p>Discover personalized parking solutions tailored to your needs. Enjoy real-time availability, secure reservations, and a seamless parking journey.</p>
            <button className="discover-more">
              Discover More <span>→</span>
            </button>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={parkingImg2} alt="Save Time, Park Smart" />
            </div>
            <h3>Save Time, Park Smart</h3>
            <p>No more circling blocks for parking spots near your destination. Find and pay on the go, simplify your entire parking experience.</p>
            <button className="learn-more">
              Learn More <span>→</span>
            </button>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={parkingImg3} alt="Secure Parking" />
            </div>
            <h3>Secure Parking, Guaranteed</h3>
            <p>Your safety matters to us. Book parking spots verified by trusted space owners and enjoy a secure payment experience.</p>
            <button className="get-started">
              Get Started <span>→</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesComponent; 