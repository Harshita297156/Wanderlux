// ToursPage.jsx
import React from 'react';
import './ToursPage.css'; // Make sure to create a CSS file for styling

const tourPackages = [
  {
    id: 1,
    name: 'Beach Paradise',
    location: 'Maldives',
    description: 'Enjoy a luxurious beach vacation in the Maldives with pristine white sand and crystal-clear waters.',
    price: '$1,500',
    imageUrl: 'https://afar.brightspotcdn.com/dims4/default/dd4ced2/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg',
  },
  {
    id: 2,
    name: 'Mountain Adventure',
    location: 'Swiss Alps',
    description: 'Experience thrilling hikes and stunning views in the breathtaking Swiss Alps.',
    price: '$2,000',
    imageUrl: 'https://www.nordicvisitor.com/images/switzerland/grindelwald-view.jpg',
  },
  {
    id: 3,
    name: 'Cultural Exploration',
    location: 'Japan',
    description: 'Discover the rich culture and heritage of Japan, from Tokyo’s skyscrapers to Kyoto’s temples.',
    price: '$1,800',
    imageUrl: 'https://assets.cntraveller.in/photos/651d5314c480f400a44a7176/3:2/w_2118,h_1412,c_limit/japan-GettyImages-1345059895.jpeg',
  },
];

const ToursPage = () => {
  return (
    <div className="tours-page">
      <h1>Our Tour Packages</h1>
      <div className="tour-packages">
        {tourPackages.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.imageUrl} alt={tour.name} className="tour-image" />
            <h2 className="tour-name">{tour.name}</h2>
            <p className="tour-location">{tour.location}</p>
            <p className="tour-description">{tour.description}</p>
            <p className="tour-price">{tour.price}</p>
            <button className="book-now-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
