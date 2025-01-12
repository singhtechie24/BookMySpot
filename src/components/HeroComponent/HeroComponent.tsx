import './HeroComponent.scss';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HeroComponent = () => {
  const navigate = useNavigate();

  const handleFindSpot = () => {
    navigate('/parking-spot');
  };

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
            <button className="list-spot">
              List Spot <span>→</span>
            </button>
            <button className="find-spot" onClick={handleFindSpot}>
              Find Spot <span>→</span>
            </button>
          </div>
        </div>
      </Container>
      <div className="car-showcase">
        <div className="car-background"></div>
        <div className="car-foreground"></div>
      </div>
    </div>
  );
};

export default HeroComponent; 