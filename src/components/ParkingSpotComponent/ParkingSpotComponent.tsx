import './ParkingSpotComponent.scss';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEllipsisH, FaSearch, FaHome, FaUser, FaCalendar, FaParking, FaBell, FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const ParkingSpotComponent = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCalendarClick = () => {
    navigate('/calendar');
  };

  return (
    <div className="parking-spot-page">
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="BookMySpot" />
          </div>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <nav className="nav-menu">
          <a href="#" className="nav-item">
            <FaHome />
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item">
            <FaUser />
            <span>Users</span>
          </a>
          <a onClick={handleCalendarClick} className="nav-item" style={{ cursor: 'pointer' }}>
            <FaCalendar />
            <span>Calendar</span>
          </a>
          <a href="#" className="nav-item active">
            <FaParking />
            <span>Parking Spot</span>
          </a>
        </nav>
        <div className="notifications">
          <FaBell />
          <span className="badge">12</span>
        </div>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User" />
          <div className="user-info">
            <span className="name">Brooklyn Simmons</span>
            <span className="email">brooklyn@simmons.com</span>
          </div>
        </div>
      </div>

      <div className={`main-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        <Container>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search here..." />
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27544.035233486815!2d-97.75710867812902!3d30.267574599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50a22f2576f%3A0x8d595f404e9bf30e!2sDowntown%20Austin%2C%20Austin%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1709838433695!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <h3 className="section-title">List of Slots near you</h3>
          
          <div className="parking-slots-grid">
            {[1, 2, 3, 4].map((slot) => (
              <div key={slot} className="parking-slot-card">
                <div className="slot-image">
                  <div className="time-badge">07:00 PM</div>
                  <div className="options-menu">
                    <FaEllipsisH />
                  </div>
                </div>
                <div className="slot-info">
                  <h4>Location name</h4>
                  <div className="date">October 30, 2023</div>
                  <div className="price">$ 123</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ParkingSpotComponent; 