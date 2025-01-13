import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HeroComponent from './components/HeroComponent/HeroComponent';
import MapFeatureComponent from './components/MapFeatureComponent/MapFeatureComponent';
import StatsComponent from './components/StatsComponent/StatsComponent';
import FeaturesComponent from './components/FeaturesComponent/FeaturesComponent';
import DownloadAppComponent from './components/DownloadAppComponent/DownloadAppComponent';
import PromoComponent from './components/PromoComponent/PromoComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import Login from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUpPage/SignUpPage';
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
  
  // Array of routes where navbar and footer should be hidden
  const hideNavFooterRoutes = ['/login', '/signup', '/parking-spot', '/calendar'];
  
  // Check if current route should hide navbar and footer
  const shouldHideNavFooter = hideNavFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideNavFooter && <NavbarComponent />}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page-transition"
          unmountOnExit
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/parking-spot" element={<ParkingSpotComponent />} />
            <Route path="/calendar" element={<CalendarComponent />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {!shouldHideNavFooter && <FooterComponent />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
