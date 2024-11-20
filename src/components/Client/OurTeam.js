import React, { useEffect } from 'react';
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Instructor2 from '../../images/Instructor.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    description: "John is the CEO of RAI. He has over 10 years of experience in the tech industry.",
    image: Instructor2,
    isCEO: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO",
    description: "Jane oversees technology strategy with over 12 years of experience in software development.",
    image: Instructor2,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO",
    description: "Jane oversees technology strategy with over 12 years of experience in software development.",
    image: Instructor2,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO",
    description: "Jane oversees technology strategy with over 12 years of experience in software development.",
    image: Instructor2,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO",
    description: "Jane oversees technology strategy with over 12 years of experience in software development.",
    image: Instructor2,
  },
  // Additional members as needed
];

const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const ceo = teamMembers.find(member => member.isCEO);
  const otherMembers = teamMembers.filter(member => !member.isCEO);

  return (
    <main className='mt-[130px] p-3' data-aos="fade-up">
      <h1 className='text-center'>Our Team</h1>
      <p className='text-3xl text-center'>Meet the RAI team</p>
      <p className='text-center'>
        Our team is made up of professionals who are passionate about their work. We are dedicated to providing the best services to our clients.
      </p>
      {/* Team Members Grid */}
      <div className="grid md:grid-cols-4 gap-5 md:m-5">
        {otherMembers.map(member => (
          <div 
            key={member.id} 
            className="border border-slate-500 p-3 flex flex-col items-center rounded-sm bg-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:scale-105"
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-[150px] h-[200px] rounded-md object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h2>
            <p className="text-lg text-gray-500 mb-2">{member.title}</p>
            <p className="text-sm text-gray-600 text-center mb-4 px-3">{member.description}</p>
            <div className="flex gap-3">
              <ImLinkedin className="text-[#800080] text-2xl hover:text-purple-800 transition-colors duration-200" />
              <FaSquareInstagram className="text-[#800080] text-2xl hover:text-purple-800 transition-colors duration-200" />
              <FaTwitterSquare className="text-[#800080] text-2xl hover:text-purple-800 transition-colors duration-200" />
              <FaFacebookSquare className="text-[#800080] text-2xl hover:text-purple-800 transition-colors duration-200" />
            </div>
          </div>
        ))}
      </div>


    {/* CEO Section */}
      {ceo && (
        <section className="mt-10 flex justify-center">
          <div className="bg-gradient-to-r from-gray-100 to-gray-500 p-10 rounded-lg shadow-xl max-w-4xl transform transition-transform hover:scale-105 duration-300">
            <div className="grid md:grid-cols-2 items-center">
              <img 
                src={ceo.image} 
                alt={ceo.name} 
                className="w-[300px] h-[400px] object-cover mb-5 md:mb-0 md:mr-8" 
              />
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold text-white mb-2">{ceo.name}</h2>
                <p className="text-xl text-gray-200 italic mb-4">{ceo.title}</p>
                <p className="text-gray-100 mb-6">
                  {ceo.description}
                </p>
                <div className="flex justify-center space-x-4 mb-5">
                  <ImLinkedin className="text-white text-2xl hover:text-gray-300 transition-colors duration-200" />
                  <FaSquareInstagram className="text-white text-2xl hover:text-gray-300 transition-colors duration-200" />
                  <FaTwitterSquare className="text-white text-2xl hover:text-gray-300 transition-colors duration-200" />
                  <FaFacebookSquare className="text-white text-2xl hover:text-gray-300 transition-colors duration-200" />
                </div>
                <button className="text-white bg-[#800080] hover:bg-purple-600 transition-colors duration-200 px-6 py-2 rounded-full shadow-lg">
                  Follow on X
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

    </main>
  );
};

export default OurTeam;
