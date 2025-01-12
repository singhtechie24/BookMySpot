import './CalendarComponent.scss';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaChevronLeft, FaChevronRight, FaCalendar, FaHome, FaUser, FaParking, FaBell, FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState('18 - 05 - 2025');
  const [selectedTime, setSelectedTime] = useState('Select time');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const currentMonth = 'May 2023';

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleDateClick = (date: number) => {
    if (date >= 5) { // Not disabled
      setSelectedDate(`${date} - 05 - 2025`);
    }
  };

  // Generate calendar dates
  const dates = Array.from({ length: 35 }, (_, i) => {
    const day = i + 1;
    if (day <= 31) return day;
    return day - 31;
  });

  return (
    <div className="calendar-page">
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
          <a href="#" className="nav-item active">
            <FaCalendar />
            <span>Calendar</span>
          </a>
          <a onClick={() => navigate('/parking-spot')} className="nav-item" style={{ cursor: 'pointer' }}>
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

          <div className="calendar-container">
            <div className="calendar-header">
              <h2>{currentMonth}</h2>
              <div className="navigation-buttons">
                <button className="nav-btn"><FaChevronLeft /></button>
                <button className="nav-btn"><FaChevronRight /></button>
              </div>
            </div>

            <div className="calendar-grid">
              {days.map(day => (
                <div key={day} className="day-header">{day}</div>
              ))}

              {dates.map((date, index) => (
                <div 
                  key={index} 
                  className={`date-cell ${selectedDate.startsWith(date.toString()) ? 'selected' : ''} ${date < 5 ? 'disabled' : ''}`}
                  onClick={() => handleDateClick(date)}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>

          <div className="booking-form">
            <div className="form-group">
              <label>Date</label>
              <div className="input-with-icon">
                <input type="text" value={selectedDate} readOnly />
                <FaCalendar className="icon" />
              </div>
            </div>

            <div className="form-group">
              <label>Time</label>
              <div className="input-with-icon">
                <select 
                  value={selectedTime} 
                  onChange={(e) => setSelectedTime(e.target.value)}
                  style={{ cursor: 'pointer' }}
                >
                  <option value="Select time">Select time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Location</label>
              <div className="input-with-icon">
                <input type="text" placeholder="Search location" />
                <FaSearch className="icon" />
              </div>
            </div>

            <button className="view-slots-btn">View Available Slots</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CalendarComponent; 