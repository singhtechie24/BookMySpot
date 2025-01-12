import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HeroComponent from './components/HeroComponent/HeroComponent';
import MapFeatureComponent from './components/MapFeatureComponent/MapFeatureComponent';
import StatsComponent from './components/StatsComponent/StatsComponent';
import FeaturesComponent from './components/FeaturesComponent/FeaturesComponent';
import DownloadAppComponent from './components/DownloadAppComponent/DownloadAppComponent';
import PromoComponent from './components/PromoComponent/PromoComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import SignUpComponent from './components/SignUpComponent/SignUpComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import ParkingSpotComponent from './components/ParkingSpotComponent/ParkingSpotComponent';
import CalendarComponent from './components/CalendarComponent/CalendarComponent';
import './App.scss';

const HomePage = () => (
  <>
    <HeroComponent />
    <MapFeatureComponent />
    <StatsComponent />
    <FeaturesComponent />
    <DownloadAppComponent />
    <PromoComponent />
  </>
);

function AppContent() {
  const location = useLocation();
  const showNavbar = !['signup', 'login', 'parking-spot', 'calendar'].includes(location.pathname.slice(1));

  return (
    <>
      {showNavbar && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/parking-spot" element={<ParkingSpotComponent />} />
        <Route path="/calendar" element={<CalendarComponent />} />
      </Routes>
      {showNavbar && <FooterComponent />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
