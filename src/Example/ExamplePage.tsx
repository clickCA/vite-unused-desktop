import React from 'react';
import './ExamplePage.css';

export const ExamplePage: React.FC = () => {
  return (
    <div className="example-container-mobile">
      <header className="example-header-mobile">
        <h1>Mobile Experience</h1>
        <p>Optimized for smaller screens</p>
      </header>
      
      <main className="example-content-mobile">
        <section className="card-mobile">
          <h2>Feature One</h2>
          <p>This is a mobile-optimized description that takes less horizontal space.</p>
          <button className="button-mobile">Learn More</button>
        </section>
        
        <section className="card-mobile">
          <h2>Feature Two</h2>
          <p>Mobile users will appreciate this simplified layout with stacked elements.</p>
          <button className="button-mobile">Explore</button>
        </section>
        
        <section className="card-mobile">
          <h2>Feature Three</h2>
          <p>Touch-friendly interface with larger tap targets for mobile users.</p>
          <button className="button-mobile">Get Started</button>
        </section>
      </main>
      
      <footer className="example-footer-mobile">
        <p>Mobile Footer • Simplified for smaller screens</p>
      </footer>
    </div>
  );
};

