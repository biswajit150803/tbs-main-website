import './App.css';
import About from './components/About/About';
import Activity from './components/Activity/Activity';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Work from './components/Work/Work';
import Whatistbs from './components/whatistbs/Whatistbs';

function App() {
  return (
    <div className="App">
    <Navbar />
    <About />
    <Whatistbs />
    <Work />
    <Activity />
    <Footer />
    </div>
  );
}

export default App;
