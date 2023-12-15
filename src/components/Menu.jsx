import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedRegion } from "../store/slices/country";
import useResponsive from "../hooks/useResponsive";
import { useState } from "react";
import DrawerComponent from "./Drawer";
import { regions } from "../utils/constants";

const Menu = () => {
  const dispatch = useDispatch();
  const { isDeskTop } = useResponsive();
  console.log("isDesktopOrLaptop", isDeskTop);

  const { selectedRegion } = useSelector((state) => state.country);

  const [isOpen, setIsOpen] = useState(false);

  const handleRegionSelection = (id) => {
    dispatch(getSelectedRegion(id));
  };

  const handleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          style={{ fontWeight: "700", color: "#3D3D3D", fontSize: "24px" }}
        >
          Template
        </Link>
        {isDeskTop ? (
          <Nav variant="underline" defaultActiveKey={selectedRegion}>
            <ul
              className="nav col-12 col-md-auto mb-2 justify-center mb-md-0"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              {regions.map((item) => {
                return (
                  <>
                    <Nav.Item
                      style={{ marginRight: "20px" }}
                      onClick={() => handleRegionSelection(item.id)}
                    >
                      <Nav.Link
                        active={item.id === selectedRegion}
                        style={{ color: "gray" }}
                      >
                        {item.label}
                      </Nav.Link>
                    </Nav.Item>
                  </>
                );
              })}
            </ul>
          </Nav>
        ) : (
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src="/tag.png" onClick={handleDrawer} />
              <DrawerComponent
                isOpen={isOpen}
                handleDrawer={handleDrawer}
                handleRegionSelection={handleRegionSelection}
              />
            </div>
          </div>
        )}
      </header>
    </Container>
  );
};

export default Menu;
