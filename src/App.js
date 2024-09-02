import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About'
import Navbar from './components/navbar/Navbar';
import Discover from './components/Discover/Discover';
import Experince from './components/Experince/Experince';
import Video from './components/vedioplayer/Video';
import Place from './components/Places/Place';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Final/Footer';












function App() {
  return (
    <div className="App">
   { <Navbar/> }
    <Home/>
    <About/>
    <Discover/>
    <Experince/>
    <Video/>
    <Place/>
    <Subscribe/>
    <Footer/>
    </div>
  );
}

export default App;
