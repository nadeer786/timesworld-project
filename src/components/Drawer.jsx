/* eslint-disable react/prop-types */
// import component 👇
import { Nav } from "react-bootstrap";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { regions } from "../utils/constants";
import { useSelector } from "react-redux";

const DrawerComponent = ({ isOpen, handleDrawer, handleRegionSelection }) => {
  const { selectedRegion } = useSelector((state) => state.country);
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div style={{ padding: "25px" }}>
          <Nav className="flex-column">
            <ul>
              {regions.map((item) => {
                return (
                  <>
                    <Nav.Item
                      style={{ marginRight: "20px" }}
                      onClick={() => {
                        handleRegionSelection(item.id);
                        handleDrawer(!isOpen);
                      }}
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
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
