import React from 'react';
import './ExamplePage.css';

export const ExamplePage: React.FC = () => {
  return (
    <div className="example-container-desktop">
      <header className="example-header-desktop">
        <div className="header-content">
          <h1>Desktop Experience</h1>
          <p>Enhanced for larger screens</p>
        </div>
        <nav className="desktop-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="example-content-desktop">
        <section className="hero-section">
          <h2>Welcome to Our Example Page</h2>
          <p>This version is optimized for desktop with a more expansive layout, taking advantage of the additional screen real estate.</p>
        </section>
        
        <div className="features-grid">
          <section className="card-desktop">
            <h2>Feature One</h2>
            <p>This desktop version provides more detailed information and a richer experience with additional content that wouldn't fit comfortably on smaller screens.</p>
            <button className="button-desktop">Learn More</button>
          </section>
          
          <section className="card-desktop">
            <h2>Feature Two</h2>
            <p>The desktop layout takes advantage of the horizontal space to present information in a side-by-side arrangement, allowing users to compare features more easily.</p>
            <button className="button-desktop">Explore</button>
          </section>
          
          <section className="card-desktop">
            <h2>Feature Three</h2>
            <p>Desktop interfaces can include more detailed graphics, larger images, and more sophisticated interactions that might be too complex for mobile devices.</p>
            <button className="button-desktop">Get Started</button>
          </section>
        </div>
        
        <section className="additional-content">
          <div className="left-column">
            <h3>Additional Resources</h3>
            <ul>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Developer Tools</li>
              <li>Community Forums</li>
            </ul>
          </div>
          <div className="right-column">
            <h3>Latest Updates</h3>
            <div className="update-item">
              <h4>Version 2.0 Released</h4>
              <p>Check out our latest features and improvements in the new release.</p>
            </div>
            <div className="update-item">
              <h4>Upcoming Webinar</h4>
              <p>Join us next week for a deep dive into advanced techniques.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="example-footer-desktop">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Documentation</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Example Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ExamplePage;