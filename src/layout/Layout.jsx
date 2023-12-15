/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

Layout.prototype = {
  children: PropTypes.node,
};
