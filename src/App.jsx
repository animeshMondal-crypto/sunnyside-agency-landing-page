import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="h-full w-full">
      <Header />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
