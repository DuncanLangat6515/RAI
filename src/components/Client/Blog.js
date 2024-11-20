import React, { useState,useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const topics = ['Design Thinking', 'Technology', 'Web3', 'Programming', 'AI'];
  const events = [
    { id: 1, title: 'Powerful Trading Tools and Features for Experienced Investors', date: 'Mar 1', speaker: 'Mark Tuchel', type: 'Virtual', topic: 'Design Thinking' },
    { id: 2, title: 'We are implementing AI and Technology', date: 'Jan 2', speaker: 'Harry Oland', type: 'Onsite', topic: 'AI' },
    // Add more events as necessary
  ];

  const handleSearch = (e) => setSearch(e.target.value);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleClearFilter = () => setSelectedTopic('');

  const handleBookNow = (eventId) => {
    setSelectedEventId(eventId);
    setIsModalOpen(true); 
  };

  const handleConfirmBooking = () => {
    console.log(`Confirmed booking for event ID: ${selectedEventId}`);
    setIsModalOpen(false); 
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const filteredEvents = events.filter(event =>
    (event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.speaker.toLowerCase().includes(search.toLowerCase()) ||
    event.date.toLowerCase().includes(search.toLowerCase())) &&
    (selectedTopic ? event.topic === selectedTopic : true)
  );

  return (
    <div className="container mx-auto mt-[100px] p-5 font-sans" data-aos="fade-up">
      <h1 className="text-2xl font-bold">Insight from our team</h1>
      <p className="text-gray-600">Powerful Trading Tools and Features for Experienced Investors</p>
        
      <div className="flex flex-col lg:flex-row mt-5 gap-5">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-1/5">
          <div className="mb-5">
            <h3 className="text-blue-600 font-semibold">Blog Topics</h3>
            <ul>
              {['Company', 'Design', 'Technology', 'Crypto', 'Artificial Intelligence', 'Work'].map(topic => (
                <li key={topic} className="text-gray-700 mt-2 cursor-pointer">{topic}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-blue-600 font-semibold">Guide and Tools</h3>
            <ul>
              {['Guidelines', 'Mentorship', 'Tutorial', 'Training', 'Career', 'Self Care'].map(guide => (
                <li key={guide} className="text-gray-700 mt-2 cursor-pointer">{guide}</li>
              ))}
            </ul>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="w-full lg:w-4/5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold">Trending Topics</h2>
            <input 
              type="text" 
              placeholder="Search by title, speaker, or date..." 
              value={search}
              onChange={handleSearch}
              className="p-2 border border-gray-300 rounded w-full lg:w-auto"
            />
          </div>

          <div className="flex gap-2 mb-5 flex-wrap">
            {topics.map(topic => (
              <button 
                key={topic} 
                onClick={() => handleTopicClick(topic)} 
                className={`px-3 py-1 border rounded-full ${selectedTopic === topic ? 'bg-[#800080] text-white' : 'border-gray-300'}`}
              >
                {topic}
              </button>
            ))}
            {selectedTopic && (
              <button 
                onClick={handleClearFilter} 
                className="px-3 py-1 bg-red-500 text-white rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          <div>
            {filteredEvents.map(event => (
              <div key={event.id} className="flex flex-col lg:flex-row items-center bg-gray-100 p-5 mb-5 rounded-lg shadow">
                <div className="flex-1">
                  <div className="text-purple-600 font-medium mb-2">{event.date}</div>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-gray-500 mt-1">By {event.speaker} • 7 min read</p>
                  <button 
                    onClick={() => handleBookNow(event.id)} 
                    className="mt-2 px-3 py-1 text-white bg-[#800080] rounded"
                  >
                    Read More
                  </button>
                </div>
                
                {/* Right-side purple graphic */}
                <div className="relative w-32 h-32 rounded-full bg-[#800080] mt-5 lg:mt-0 lg:ml-5">
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <section className="mt-10 border-t border-gray-300 pt-5">
            <h2 className="text-xl font-semibold text-purple-600">Stay up to date</h2>
            <p className="text-gray-600">Join Our Newsletter</p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col lg:flex-row mt-3">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-3 lg:mb-0 lg:mr-2 w-full lg:w-auto" 
                required
              />
              <button type="submit" className="px-3 py-1 text-white bg-[#800080] rounded"> Submit</button>
            </form>
            <p className="text-xs text-gray-500 mt-2">*You can unsubscribe anytime</p>
          </section>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-4 p-4 bg-green-200 text-green-800 rounded">
              You have submitted successfully!
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Events;
