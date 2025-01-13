import './BookingPage.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaHome, FaCalendar, FaParking, FaBell, FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const BookingPage = () => {
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

  const handleParkingSpotClick = () => {
    navigate('/parking-spot');
  };

  return (
    <div className="booking-page">
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
          <a onClick={handleCalendarClick} className="nav-item" style={{ cursor: 'pointer' }}>
            <FaCalendar />
            <span>Calendar</span>
          </a>
          <a onClick={handleParkingSpotClick} className="nav-item" style={{ cursor: 'pointer' }}>
            <FaParking />
            <span>Parking Spot</span>
          </a>
        </nav>
        <div className="notifications">
          <div className="notification-content">
            <div className="notification-left">
              <FaBell />
              <span>Notifications</span>
            </div>
            <span className="badge">12</span>
          </div>
        </div>
      </div>

      <div className={`main-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        <div className="header-section">
          <h1>Booking Details</h1>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search here..." />
          </div>
        </div>

        <div className="booking-details">
          <div className="selected-spot">
            <h2>Selected Parking Spot</h2>
            <div className="spot-card">
              <div className="spot-image"></div>
              <div className="spot-info">
                <h3>Downtown Parking - Spot A1</h3>
                <p className="location">123 Main Street, Austin, TX</p>
                <p className="time">Selected Time: 2:00 PM - 4:00 PM</p>
                <p className="price">$15/hour</p>
              </div>
            </div>
          </div>

          <div className="booking-form">
            <h2>Confirm Booking</h2>
            <div className="form-group">
              <label>Duration</label>
              <select>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4 hours</option>
              </select>
            </div>

            <div className="form-group">
              <label>Vehicle Details</label>
              <input type="text" placeholder="License Plate Number" />
            </div>

            <div className="price-summary">
              <div className="price-row">
                <span>Parking Fee</span>
                <span>$30.00</span>
              </div>
              <div className="price-row">
                <span>Service Fee</span>
                <span>$2.00</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>$32.00</span>
              </div>
            </div>

            <button className="confirm-booking">Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 