import { useEffect, useState } from 'react';
import Intro from './slides/Intro';
import WhyIT from './slides/WhyIT';
import Projects from './slides/Projects';
import Phoenix from './slides/Phoenix';
import Final from './slides/FinalSlide';
import LanguageSelect from './components/LanguageSelect';
import InfoBar from './components/InfoBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Intro/>,
    <WhyIT/>,
    <Projects/>,
    <Phoenix/>,
    <Final/>
  ]

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
      <div className="pride-flag">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="purple"></div>
      </div>
      <LanguageSelect />
      <div className="main-content">
      {slides[currentSlide]}
      </div>
      <InfoBar currentSlide={currentSlide} />
    </div>
  );
}

export default App;
