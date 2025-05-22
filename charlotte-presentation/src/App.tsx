import { useEffect, useState } from 'react';
import Intro from './slides/Intro';
import WhyIT from './slides/WhyIT';
import Projects from './slides/Projects';
import Phoenix from './slides/Phoenix';
import Final from './slides/FinalSlide';
import LanguageSelect from './components/LanguageSelect';
import InfoBar from './components/InfoBar';
import SideMenu from './components/SideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  const slides = [
    <Intro/>,
    <WhyIT/>,
    <Projects/>,
    <Phoenix/>,
    <Final/>
  ];

  const slideNames = [
    'slide1',
    'slide2',
    'slide3',
    'slide4',
    'slide5'
  ];

  useEffect(() => {
    setAnimateKey(prev => prev + 1);
  }, [currentSlide]);

  //This is for using arrow keys to move between "slides"
  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [slides.length]);

  return (
    <div>
      <div className="pride-flag trans-flag">
        <div className="white"></div>
        <div className="pink"></div>
        <div className="blue"></div>
      </div>
      <LanguageSelect />
      <SideMenu slides={slideNames} currentSlide={currentSlide} onSelect={setCurrentSlide} />
      <div className="corner-cover" />
      <div className="corner-cover bottom" /> {/* Add this line */}
      <div className="main-content" key={animateKey}>
      {slides[currentSlide]}
      </div>
      <InfoBar currentSlide={currentSlide} />
    </div>
  );
}

export default App;
