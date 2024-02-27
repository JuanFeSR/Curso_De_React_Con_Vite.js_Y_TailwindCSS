import PropTypes from "prop-types";

function Layout({ children }) {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <div className="flex flex-col items-center mt-20">{children}</div>;
}

export default Layout;
