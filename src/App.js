import './App.css';
import About from './components/About/About';
import Choose from './components/Choose/Choose';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Business from './components/business/Business';
import Testimonial from './components/testimonials/Testimonial';
import Whatistbs from './components/whatistbs/Whatistbs';

function App() {
  return (
    <div className="App">
    <Navbar />
    <About />
    <Whatistbs />
    <Choose />
    <Business />
    <Testimonial />
    <Footer />
    </div>
  );
}

export default App;
