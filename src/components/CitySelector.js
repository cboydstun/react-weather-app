import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";

const CitySelector = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState(null);
  return (
    <>
      <Row>
        <Col>
          <h1>Five Day Weather Forecast</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            placeholder='Enter city'
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => onSelectButtonClick(city)}>
            Check Weather
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
