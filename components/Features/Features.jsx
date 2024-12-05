import React from "react";
import "../Features/features.css";

import feature1 from "../../assets/images/feature/beach-umbrella.png";
import feature2 from "../../assets/images/feature/deal.png";
import feature3 from "../../assets/images/feature/location.png";
import feature4 from "../../assets/images/feature/medal.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:false,
    autoplaySpeed:1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow:false,
          nextArrow:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:false,
          nextArrow:false,
        },
      },
    ],
  };

  const featureList = [
    {
        id:0,
        image:feature1,
        title : "Discover the possibilities",
        des: 'With nearly half a million places to explore, discover new experiences around every corner.',
    },
    {
        id: 1,
        image: feature2,
        title: 'Stay Connected',
        des: 'Stay connected with your travel buddies and find the best places to visit together.',
      },
      {
        id: 2,
        image: feature2,
        title: 'Immerse Yourself in Local Culture',
        des: 'Discover authentic experiences curated by locals to enrich your journey',
      },
      {
        id: 3,
        image: feature3,
        title: 'Smart Budget Planner',
        des: 'Plan your expenses and track your budget throughout the trip to make every penny count..',
      },
      {
        id: 4,
        image: feature4,
        title: 'Create Custom Travel Itineraries',
        des: 'Plan your days with our intuitive itinerary builder, helping you organize your travels efficiently.',
      },
  ];

  return (
    <>
    
      <section className="feature-section">
        <Container>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {featureList.map((feature, inx) => {
                  return (
                    <Card key={inx}>
                      <Card.Img
                        variant="top"
                        src={feature.image}
                        className="img-fluid"
                        alt={feature.title}
                      />
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.des}</Card.Text>
                    </Card>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;