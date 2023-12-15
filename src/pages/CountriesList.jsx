import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../components/CountryCard";
import Menu from "../components/Menu";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getCountries } from "../store/slices/country";
import Meta from "../components/Meta";
import Footer from "../components/Footer";

const CountriesList = () => {
  const dispatch = useDispatch();
  const { selectedRegion, countries } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountries({ region: selectedRegion }));
  }, [dispatch, selectedRegion]);
  return (
    <Container>
      <Meta title="Countries" />
      <Menu />
      <div style={{ marginTop: "63px" }}>
        <Row>
          {countries.map((item) => (
            <CountryCard countryData={item} key={item.id} />
          ))}
        </Row>
      </div>
      <Footer />
    </Container>
  );
};

export default CountriesList;
