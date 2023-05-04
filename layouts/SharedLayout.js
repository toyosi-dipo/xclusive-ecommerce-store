import Footer from "./Footer";
import NavBar from "./NavBar";

function SharedLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default SharedLayout;
