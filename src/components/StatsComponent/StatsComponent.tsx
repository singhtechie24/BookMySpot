import './StatsComponent.scss';
import { Container } from 'react-bootstrap';
import { FaCar, FaUserFriends } from 'react-icons/fa';

const StatsComponent = () => {
  return (
    <section className="stats-section">
      <Container>
        <div className="stats-header">
          <h2>Helping a local <span>Driver</span></h2>
          <h3>to find a Parking Space</h3>
          <p>We simplify their way our hard work and dedication</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <FaCar className="stat-icon" />
            <div className="stat-info">
              <h4>828,867</h4>
              <p>Monthly Users</p>
            </div>
          </div>
          <div className="stat-item">
            <FaUserFriends className="stat-icon" />
            <div className="stat-info">
              <h4>1,926,436</h4>
              <p>Parking Spots Found</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatsComponent; 