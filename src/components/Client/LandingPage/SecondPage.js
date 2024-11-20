import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../../../styles/secondPage.css'; // Import styles

const SecondPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            className="second-page"
            initial={{ scale: 0.5 }} // Initial scale for zoom-out effect
            animate={{ scale: isVisible ? 1 : 0.5 }} // Zoom in when visible
            transition={{ duration: 0.5 }} // Duration of the zoom-in animation
        >
            <div className="content-wrapper-page-2">
                <h1>Leading the Way in AI Ethics and Responsibility</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel.</p>
                <button className="cta-button">Explore Course</button>
            </div>
        </motion.div>
    );
};

export default SecondPage;
