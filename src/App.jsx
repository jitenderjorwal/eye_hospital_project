import "./App.css";
import Nevbar from "./components/Nevbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import KnowYourEye from "./pages/KnowYourEye";
import Ourdoctors from "./pages/Ourdoctors";
import ContactUs from "./pages/ContactUs";
import ReviewSlider from "./pages/ReviewSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='container'>
        <Nevbar />

        <div id='home'>
          <Home />
        </div>

        <div id='about-us'>
          <About />
        </div>

        <div id='know-your-eye'>
          <KnowYourEye />
        </div>

        <div id='services'>
          <Services />
        </div>

        <div id='find-eye-specialist'>
          <Ourdoctors />
        </div>

        <div id='disease'>{/* Add your disease content here */}</div>

        <div id='review-slider'>
          <ReviewSlider />
        </div>

        <div id='contact-us'>
          <ContactUs />
        </div>
        <div id='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
