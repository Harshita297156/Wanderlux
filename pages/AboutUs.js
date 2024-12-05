import React from 'react';
import './AboutUs.css'; // Ensure this imports the new styles

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="intro-section">
        <div className="intro-text">
          <h2>Our Story</h2>
          <p>
            Wanderlux was founded on the belief that travel has the power to transform lives. What started as a passion project by a group of avid travelers has turned into a global adventure company that connects people with unique experiences and unforgettable destinations.
          </p>
        </div>
        <div className="intro-image">
          <img 
            src="https://w0.peakpx.com/wallpaper/159/511/HD-wallpaper-amber-fort-jaipur-bing-amer-fort.jpg"
            alt="Wanderlux Journey"
          />
        </div>
      </div>

      <div className="values-section">
        <h3>Our Core Values</h3>
        <ul className="values-list">
          <li><strong>Passion for Exploration:</strong> We live to explore new horizons and share the wonders of the world with you.</li>
          <li><strong>Respect for Nature:</strong> Sustainability is at the heart of everything we do.</li>
          <li><strong>Authentic Experiences:</strong> We focus on real connections, helping you engage deeply with local cultures.</li>
          <li><strong>Customer First:</strong> Your journey is our priority, and we're committed to creating seamless, memorable adventures.</li>
        </ul>
      </div>
    </section>
  );
};

const TeamMember = ({ name, position, image }) => (
  <div className="team-member">
    <img src={image} alt={name} className="member-image" />
    <div className="name">{name}</div>
    <div className="position">{position}</div>
  </div>
);

export default AboutUs;
