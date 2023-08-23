import "./App.css";
import { Container } from "semantic-ui-react";
import Navbar from "./Files/Navbar";
import Help from "./Files/Help";
import HomepageSlides from "./Files/HomepageSlides";
import Cards from "./Files/Cards";
import Funds from "./Files/Funds";
import Giving from "./Files/Giving";
import RaiseHelp from "./Files/RaiseHelp";
import Get from "./Files/Get";
import Footer from "./Files/Footer";
import Testimonial from "./Files/Testimonial";

function App() {
  return (
    <>
      <Help />
      <Container>
        <Navbar />
        <HomepageSlides />
        <Cards />
        <Funds />
        <Giving />
        <Get />
        <Testimonial />
        <RaiseHelp />
        <Footer />
      </Container>
    </>
  );
}

export default App;
