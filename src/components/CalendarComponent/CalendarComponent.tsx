import './CalendarComponent.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaChevronLeft, FaChevronRight, FaCalendar, FaHome, FaUser, FaParking, FaBell, FaBars } from 'react-icons/fa';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday, startOfWeek, endOfWeek, addMinutes, roundToNearestMinutes, isAfter, NearestMinutes } from 'date-fns';
import logo from '../../assets/logo.png';

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('Select time');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const navigate = useNavigate();

  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const getDaysInMonth = () => {
    const start = startOfWeek(startOfMonth(currentDate));
    const end = endOfWeek(endOfMonth(currentDate));
    return eachDayOfInterval({ start, end });
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  // Update current time every minute
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    // Update immediately
    updateCurrentTime();

    // Then update every minute
    const timer = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(timer);
  }, []);

  // Generate time slots based on current time and selected date
  useEffect(() => {
    const generateTimeSlots = () => {
      const slots: string[] = [];
      const isToday = isSameDay(selectedDate, new Date());
      
      // Start time: if today, use next hour from current time, otherwise start from 9 AM
      let startTime = new Date(selectedDate);
      if (isToday) {
        // Start from next hour
        const nextHour = currentTime.getHours() + 1;
        startTime.setHours(nextHour, 0, 0, 0);
      } else {
        startTime.setHours(9, 0, 0, 0);
      }

      // End time is 6 PM (18:00)
      const endTime = new Date(selectedDate);
      endTime.setHours(18, 0, 0, 0);

      // Generate hourly slots only if start time is before end time
      if (startTime.getHours() < endTime.getHours()) {
        let currentSlot = startTime;
        while (currentSlot.getHours() <= endTime.getHours()) {
          // Only add if it's a future time
          if (currentSlot > currentTime) {
            slots.push(format(currentSlot, 'hh:mm a'));
          }
          currentSlot = addMinutes(currentSlot, 60);
        }
      }

      return slots;
    };

    const slots = generateTimeSlots();
    setAvailableTimeSlots(slots);
    
    // Set current time as initial display value
    if (selectedTime === 'Select time') {
      setSelectedTime(format(currentTime, 'hh:mm a'));
    }
  }, [selectedDate, currentTime, selectedTime]);

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
          <div className="notification-content">
            <div className="notification-left">
              <FaBell />
              <span>Notifications</span>
            </div>
            <span className="badge">12</span>
          </div>
        </div>
        <div className="user-profile">
          <img src={logo} alt="User" />
          <div className="user-info">
            <span className="name">Brooklyn Simmons</span>
            <span className="email">brooklyn@simmons.com</span>
          </div>
        </div>
      </div>

      <div className={`main-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        <div className="header-section">
          <h1>Calendar</h1>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search here..." />
          </div>
        </div>

        <div className="content-wrapper">
          <div className="calendar-section">
            <div className="calendar-container">
              <div className="calendar-header">
                <h2>{format(currentDate, 'MMMM yyyy')}</h2>
                <div className="navigation-buttons">
                  <button className="nav-btn" onClick={handlePrevMonth}>
                    <FaChevronLeft />
                  </button>
                  <button className="nav-btn" onClick={handleNextMonth}>
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <div className="calendar-grid">
                {days.map(day => (
                  <div key={day} className="day-header">{day}</div>
                ))}

                {getDaysInMonth().map((date, index) => (
                  <div 
                    key={index} 
                    className={`date-cell ${
                      isSameDay(date, selectedDate) ? 'selected' : ''
                    } ${isToday(date) ? 'today' : ''}`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {format(date, 'd')}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="booking-section">
            <div className="booking-form">
              <div className="form-group">
                <label>Date</label>
                <div className="input-with-icon">
                  <input 
                    type="text" 
                    value={format(selectedDate, 'dd MMM yyyy')} 
                    readOnly 
                  />
                  <FaCalendar className="icon" />
                </div>
              </div>

              <div className="form-group">
                <label>Time</label>
                <div className="input-with-icon">
                  <select 
                    value={selectedTime} 
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value={format(currentTime, 'hh:mm a')}>
                      {format(currentTime, 'hh:mm a')} (Current Time)
                    </option>
                    {availableTimeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent; 