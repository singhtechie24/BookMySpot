import './MapFeatureComponent.scss';
import { Container } from 'react-bootstrap';
import mapFeatureImg from '../../assets/mapfeature.png';

const MapFeatureComponent = () => {
  return (
    <section className="map-feature-section">
      <Container>
        <div className="feature-content">
          <div className="feature-image">
            <img src={mapFeatureImg} alt="Interactive Map Feature" />
          </div>
          <div className="feature-text">
            <h2>Effortless Parking: Find Your Spot with Our Interactive Map Feature</h2>
            <p>Discover parking like never before with our advanced map feature. Daily tracks nearby parking spaces, check availability in real time, and reserve your spot. Find a way to park that works for you.</p>
            <button className="learn-more">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MapFeatureComponent; 