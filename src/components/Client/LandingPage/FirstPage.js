import React, { useState, useEffect } from 'react';
import '../../../styles/firstPage.css';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  {
    title: "Building a Responsible AI Future",
    text: "Join us in shaping a future where artificial intelligence is developed ethically, with a focus on transparency and societal well-being.",
  },
  {
    title: "Innovation through Technology",
    text: "Harness the power of cutting-edge technologies to drive transformative solutions that impact lives and inspire creativity.",
  },
  {
    title: "Empowering Communities",
    text: "Empowering communities with resources and knowledge to thrive in an increasingly digital world, fostering growth and opportunity.",
  }
];
const cardContents = [
  {
    title: "4 Online Courses",
    text: "Unlock your potential with our resources and start harnessing AI responsibly today."
  },
  {
    title: "Our Ambassadors",
    text: "Join our team of ambassadors driving Responsible AI initiatives."
  },
  {
    title: "Well-Curated Courses",
    text: "Be part of our community of Responsible AI learners."
  }
];
// Define your list of background colors or gradients
const backgroundColors = [
  "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
  "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 81, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
  "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
];

const FirstPage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 9000); // Change to 15000 ms (15 seconds)
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div 
      className="landing-page" 
      style={{ background: backgroundColors[currentMessage] }} // Dynamic background color
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          className="content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.5, ease: "easeInOut" } }}
        >
          <motion.div
            className="message-section"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>{messages[currentMessage].title}</h1>
            <p>{messages[currentMessage].text}</p>
            <button className="cta-button">Get Started</button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Card Section */}
      <div className="cards-section">
        {cardContents.map((card, index) => (
          <motion.div
            key={index}
            className="cards"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FirstPage;


