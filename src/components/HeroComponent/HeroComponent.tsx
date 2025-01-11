import './HeroComponent.scss';
import { Container, Button } from 'react-bootstrap';
import heroCar from '../../assets/heroCar.jpg';

const HeroComponent = () => {
  return (
    <div className="hero-section">
      <Container>
        <div className="hero-content">
          <h1>
            <span className="title-top">Effortless Parking</span>
            <span className="title-bottom">Solutions For Urban Life</span>
          </h1>
          
          <div className="hero-description">
            <p>Discover convenient parking options tailored to your needs.</p>
            <p>Join us in transforming the way you park in the city.</p>
          </div>

          <div className="hero-buttons">
            <Button className="list-spot">
              List Spot <span>→</span>
            </Button>
            <Button className="find-spot">
              Find Spot <span>→</span>
            </Button>
          </div>
        </div>
      </Container>
      
      <div className="hero-image">
        <img src={heroCar} alt="Luxury car with blue and orange effects" />
      </div>
    </div>
  );
};

export default HeroComponent; 