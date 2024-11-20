// import React, { useState } from 'react';
// import vid from "../../images/vid.png";
// import "../../styles/video.css";

// const VideoModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to open and close the modal
//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="video-modal-container">
//       {/* Watch Now Image */}
//       <div className="watch-now" data-aos="zoom-in" onClick={toggleModal}>
//         <img
//           src={vid} 
//           alt="Watch Now"
//           className="cursor-pointer blink w-64 h-64 hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Modal */}
//       {isOpen && (
//         <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="modal-content relative bg-white rounded-lg shadow-lg w-full max-w-2xl">
//             <button
//               className="absolute top-4 right-4 text-black text-2xl font-bold cursor-pointer"
//               onClick={toggleModal}
//             >
//               &times;
//             </button>
//             <div className="video-container p-8">
                
//               <iframe
//                 width="100%"
//                 height="400"
//                 src="https://www.youtube.com/embed/S0Ql2ieLeyM?si=UIY37hy9Q5905DTT" 
//                 title="Explainer Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoModal;
