import './DownloadAppComponent.scss';
import { Container } from 'react-bootstrap';
import appIllustration from '../../assets/appillustration.png';

const DownloadAppComponent = () => {
  return (
    <section className="download-section">
      <Container>
        <div className="download-content">
          <div className="illustration">
            <img src={appIllustration} alt="Mobile App Illustration" />
          </div>
          <div className="download-text">
            <h2>How to download</h2>
            <p>Take control of your parking journey with BookMySpot app today and experience seamless parking at your fingertips. Available on all major platforms, it's free, fast, and user-friendly.</p>
            <button className="learn-more">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadAppComponent; 