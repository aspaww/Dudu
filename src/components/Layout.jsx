import Header from "./Header";
import Footer from "./Footer";
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
