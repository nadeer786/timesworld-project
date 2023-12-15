/* eslint-disable react/prop-types */
import { Card, Col } from "react-bootstrap";

const CountryCard = ({ countryData }) => {
  return (
    <Col md={6} className="mb-3">
      <Card className="country-card">
        <Card.Body className="card-body">
          <div>
            <img src={countryData?.flag} alt={`flag`} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
            <Card.Title>{countryData?.name}</Card.Title>
            <Card.Text>{countryData?.region}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CountryCard;
