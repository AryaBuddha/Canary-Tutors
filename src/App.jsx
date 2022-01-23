import Hero from "./views/Landing/Hero";
import Navbar from "./views/Shared/Navbar";
import Features from "./views/Landing/Features";
import Footer from "./views/Landing/Footer";

import blobs from "./Assets/blobs.svg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
