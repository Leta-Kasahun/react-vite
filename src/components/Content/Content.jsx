import { useState } from 'react';
import letaImage from '../../assets/leta-200-200.png';
import './Content.css';

function Content() {
  const [activeTab, setActiveTab] = useState('home');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="content">
      <div className="content-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`tab ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'home' && (
            <div className="home-content">
              <div 
                className={`image-container ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => alert("Welcome to my first React app!")}
              >
                <img 
                  src={letaImage} 
                  alt="Leta Logo"
                  className="home-image"
                />
                {isHovered && (
                  <div className="image-overlay">
                    <p>Click me!</p>
                  </div>
                )}
              </div>
              <h2>Welcome to My First React App</h2>
            </div>
          )}
          {activeTab === 'features' && <FeaturesContent />}
          {activeTab === 'contact' && <ContactContent />}
        </div>
      </div>
    </main>
  );
}

function FeaturesContent() {
  return (
    <div>
      <h2>App Features</h2>
      <ul>
        <li>Simple design</li>
        <li>Easy navigation</li>
        <li>Interactive elements</li>
      </ul>
    </div>
  );
}

function ContactContent() {
  return (
    <div>
      <h2>Contact Info</h2>
      <p>Email: example@example.com</p>
    </div>
  );
}

export default Content;