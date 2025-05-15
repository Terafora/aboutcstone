import { useEffect, useState } from 'react';
import Intro from './slides/Intro';
import WhyIT from './slides/WhyIT';
import Projects from './slides/Projects';
import Phoenix from './slides/Phoenix';
import Final from './slides/FinalSlide';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  //My slides array
  const slides = [
    <Intro/>,
    <WhyIT/>,
    <Projects/>,
    <Phoenix/>,
    <Final/>
  ]

  //This is for using arrow keys to move between "slides"
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
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

  return <>{slides[currentSlide]}</>;
}

export default App;
