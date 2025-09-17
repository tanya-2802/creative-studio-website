import { useState, useEffect } from 'react';
import './Hero.css';
import HeroBg from '../assets/hero-bg.jpg';

const taglines = [
  "We Bring Your Ideas to Life.",
  "Stunning Designs, Powerful Results.",
  "Your Vision, Our Expertise."
];

// Configuration for the typing effect
const TYPING_SPEED = 75;
const DELETING_SPEED = 35;
const PAUSE_DURATION = 2000;

const Hero = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentSentence = taglines[sentenceIndex];
      // Determine if we are typing or deleting
      if (isDeleting) {
        // Set text to a shorter substring
        setDisplayedText(currentSentence.substring(0, displayedText.length - 1));
      } else {
        // Set text to a longer substring
        setDisplayedText(currentSentence.substring(0, displayedText.length + 1));
      }

      // Logic to switch states
      if (!isDeleting && displayedText === currentSentence) {
        // Pause at the end of the sentence, then start deleting
        setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      } else if (isDeleting && displayedText === '') {
        // Finished deleting, move to the next sentence
        setIsDeleting(false);
        setSentenceIndex((prevIndex) => (prevIndex + 1) % taglines.length);
      }
    };

    // Set the speed of the effect
    const typingTimeout = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    // Cleanup function to clear the timer
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, sentenceIndex]);
  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            {displayedText}
            <span className="typing-cursor"></span>
          </h1>
          <button className="btn"  onClick={handleScroll}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;