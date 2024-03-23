import React from 'react';
import { Row, Col } from 'reactstrap';
import Tourdata from '../../assets/data/tour';
import TourList from '../../shared/TourList';

const FeaturedTourList = () => {
  return (
    <Row className="gx-4">
      {Tourdata.map((tour) => (
        <Col key={tour.id} lg="3" md="6" sm="6" xs="12" className="mb-4">
          <TourList tour={tour} />
        </Col>
      ))}
    </Row>
  );
};

export default FeaturedTourList;
