import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'; // Make sure to include your custom styles

const imagesWithStories = [
  {
    src: 'https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg',
    alt: 'Beautiful Beach',
    story: 'This serene beach is known for its golden sands and crystal-clear waters, perfect for a day of relaxation and sunbathing.'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENjvNBNeW4BbjY-QAld_9fgtEi2WCZiEY8w&s',
    alt: 'Mountain Range',
    story: 'A breathtaking view of the rugged mountain range, where adventurers come to hike, climb, and witness stunning sunrises.'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwfwz9HpyZUCgv27h1ODpFYA8v_Zho6r1Hw&s',
    alt: 'Cityscape',
    story: 'The bustling city lights illuminate the night, creating a mesmerizing cityscape that never sleeps and offers endless experiences.'
  },
  {
    src: 'https://www.shutterstock.com/image-photo/camels-desert-area-quarter-saudi-600nw-2484205491.jpg',
    alt: 'Desert Landscape',
    story: 'Explore the vast and mystic desert, with its golden dunes and star-filled skies that offer a once-in-a-lifetime adventure.'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKO4aA-uv0lDkCLSXQikGY6fCi9i11vh-kDw&s',
    alt: 'Lush Forest',
    story: 'A tranquil forest filled with the sound of chirping birds and rustling leaves, perfect for reconnecting with nature.'
  },
  {
    src: 'https://i.pinimg.com/736x/e2/16/80/e2168035565a9ebc9c1b3efd192d3776.jpg',
    alt: 'Snowy Mountains',
    story: 'Witness the majestic snowy peaks that attract skiers and nature lovers alike, offering a winter wonderland experience.'
  },
  // Add more images and stories as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Travel Gallery</h2>
      <div className="gallery-grid">
        {imagesWithStories.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal show onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <p className="image-story">{selectedImage.story}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
