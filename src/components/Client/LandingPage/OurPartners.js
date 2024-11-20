import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../../styles/ourPartners.css';

// Import images
import nodeImage from '../../../images/ourpartners/node.png';
import phpImage from '../../../images/ourpartners/php.png';
import mysqlImage from '../../../images/ourpartners/mysql.png';
import javaImage from '../../../images/ourpartners/java.png';
import dotnetImage from '../../../images/ourpartners/dotnet.png';
import pythonImage from '../../../images/ourpartners/python.png';
import railsImage from '../../../images/ourpartners/Rails.png';
import golangImage from '../../../images/ourpartners/golang.png';
import mongodbImage from '../../../images/ourpartners/mongodb.png';

const imagesTop = [
  { src: nodeImage, alt: "Node" },
  { src: phpImage, alt: "PHP" },
  { src: mysqlImage, alt: "MySQL" },
  { src: javaImage, alt: "Java" },
  { src: dotnetImage, alt: ".NET" },
];

const imagesBottom = [
  { src: pythonImage, alt: "Python" },
  { src: railsImage, alt: "Rails" },
  { src: golangImage, alt: "GoLang" },
  { src: mongodbImage, alt: "MongoDB" },
];

const OurPartners = () => {
  const headingControls = useAnimation();
  const imageControls = useAnimation();
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: containerRef, inView: containerInView } = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (headerInView) {
      headingControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, ease: [0.42, 0, 0.58, 1] },
      });
    } else {
      headingControls.start({ opacity: 0, y: -50 });
    }
  }, [headerInView, headingControls]);

  React.useEffect(() => {
    if (containerInView) {
      imageControls.start((index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.15, duration: 1, ease: [0.42, 0, 0.58, 1] },
      }));
    } else {
      imageControls.start({ opacity: 0, y: 30 });
    }
  }, [containerInView, imageControls]);

  return (
    <div className="ourPartners-wrapper text-gray-500 py-8" ref={headerRef}>
      <div className="text-center mb-48 mt-14">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={headingControls}
          className="partnersHeader"
        >
          <p className="text-3xl text-gray-500 font-extralight">Our</p>
          <p className="text-3xl text-gray-500 font-extralight">Partners</p>
        </motion.div>
      </div>

      <div className="partnersContainer pb-4" ref={containerRef}>
        <div className="topPartners flex justify-center space-x-3 mb-6">
          {imagesTop.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-36 h-16 object-contain p-3"
              custom={index}
              initial={{ opacity: 0, y: 30 }}
              animate={imageControls}
            />
          ))}
        </div>

        <div className="bottomPartners flex justify-center space-x-3 mb-16">
          {imagesBottom.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-36 h-16 object-contain p-3"
              custom={index + imagesTop.length}
              initial={{ opacity: 0, y: 30 }}
              animate={imageControls}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
