import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({ dt, min, max, main, icon }) => {
  const date = new Date(dt);
  return (
    <div>
      <Card className="card-container">
        <Card.Img
          variant='top'
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <Card.Body>
          <Card.Title>{main}</Card.Title>
          <p>Min: {(((min / 5)*9)+32).toFixed(1)}</p>
          <p>Max: {(((max / 5)*9)+32).toFixed(1)}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
