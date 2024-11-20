import React, { useState,useEffect } from 'react';
// import { useHistory } from 'react-router-dom'; // If using React Router for navigation
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
  const [showSuccess, setShowSuccess] = useState(false); // For success message
  const [emailSubmitted, setEmailSubmitted] = useState(false); // To trigger the success message

  const topics = ['Design Thinking', 'Technology', 'Web3', 'Programming', 'AI'];
  const events = [
    { id: 1, title: 'Monthly Events With LEA Foundation', date: 'Mar 1, 1200 Hours', speaker: 'Mark Tuchel', type: 'Virtual', topic: 'Design Thinking' },
    { id: 2, title: 'Annual Team Building Event', date: 'Jan 2, 1700 Hours', speaker: 'Harry Oland', type: 'Onsite', topic: 'Team Building' },
    { id: 3, title: 'AI for Beginners Workshop', date: 'Apr 10, 1000 Hours', speaker: 'Alice Kim', type: 'Virtual', topic: 'AI' },
    { id: 4, title: 'Introduction to Web3', date: 'May 15, 1400 Hours', speaker: 'Ben Stark', type: 'Onsite', topic: 'Web3' },
    { id: 5, title: 'Programming Bootcamp', date: 'Jun 20, 0900 Hours', speaker: 'Carlos Diaz', type: 'Virtual', topic: 'Programming' },
    { id: 6, title: 'Advanced Technology Trends', date: 'Jul 22, 1300 Hours', speaker: 'Dana Smith', type: 'Onsite', topic: 'Technology' },
  ];

  const handleSearch = (e) => setSearch(e.target.value);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleClearFilter = () => setSelectedTopic('');

  const handleBookNow = (eventId) => {
    setSelectedEventId(eventId);
    setIsModalOpen(true); // Open the confirmation modal
  };

  const handleConfirmBooking = () => {
    // Logic for confirming the booking (e.g., API call)
    console.log(`Confirmed booking for event ID: ${selectedEventId}`);
    setIsModalOpen(false); // Close the modal
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(`Submitted email: ${email}`);
    setEmailSubmitted(true);
    setEmail(''); // Reset the email input

    // Show the success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false); // Hide after 5 seconds
    }, 5000);
  };

  // Filter events based on search input and selected topic
  const filteredEvents = events.filter(event =>
    (event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.speaker.toLowerCase().includes(search.toLowerCase()) ||
    event.date.toLowerCase().includes(search.toLowerCase())) &&
    (selectedTopic ? event.topic === selectedTopic : true)
  );

  return (
    <div className="p-5 font-sans mt-[100px]" data-aos="fade-up"> {/* Added margin top of 130px */}
      <h1 className="text-2xl font-bold">Upcoming Events</h1>
      <p className="text-gray-600">Powerful Trading Tools and Features for Experienced Investors</p>
      
      <div className="flex flex-col lg:flex-row mt-5 gap-5">
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/5">
          <h3 className="font-semibold">Events Topics</h3>
          <ul className="mb-5">
            {['Responsible AI', 'Team Building', 'Technology', 'Crypto', 'AI', 'Work'].map(topic => (
              <li key={topic} className="text-gray-700">{topic}</li>
            ))}
          </ul>
          <h3 className="font-semibold">Guide and Tools</h3>
          <ul>
            {['Guidelines', 'Mentorship', 'Tutorial', 'Training', 'Career', 'Self Care'].map(guide => (
              <li key={guide} className="text-gray-700">{guide}</li>
            ))}
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="w-full lg:w-4/5">
          <div className="flex flex-col lg:flex-row justify-between mb-5">
            <h2 className="text-xl font-semibold">Trending Events</h2>
            <input 
              type="text" 
              placeholder="Search by title, speaker, or date..." 
              value={search}
              onChange={handleSearch}
              className="p-2 border border-gray-300 rounded w-full lg:w-auto mt-2 lg:mt-0"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {topics.map(topic => (
              <button 
                key={topic} 
                onClick={() => handleTopicClick(topic)} 
                className={`px-3 py-1 border rounded ${selectedTopic === topic ? 'bg-[#800080] text-white' : 'border-gray-300'}`}
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
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div key={event.id} className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 p-5 bg-white rounded mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.date} | Speaker: {event.speaker} | <span className={event.type === 'Virtual' ? 'text-purple-600' : 'text-blue-600'}>{event.type}</span></p>
                    <p className="text-gray-500">I'm always trying to think of new and interesting business ideas...</p>
                    <button 
                      onClick={() => handleBookNow(event.id)} 
                       className="mt-2 px-3 py-1 text-white bg-[#800080] rounded"
                    >
                      Book Now
                    </button>
                  </div>
                  
                  {/* Right-side purple placeholder with white inner arc */}
                  <div className="relative w-32 h-32 rounded-full bg-[#800080] mt-5 lg:mt-0 lg:ml-5">
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-white rounded-full"></div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-red-600 italic">No events available for the search criteria.</p>
            )}
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-10 border-t border-gray-300 pt-5">
            <h2 className="text-xl font-semibold">Stay up to date</h2>
            <p className="text-gray-600">Join Our Newsletter</p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col lg:flex-row items-start lg:items-center mt-3">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-3 lg:mb-0 lg:mr-2 w-full lg:w-auto" 
                required
              />
              <button type="submit"   className="mt-2 px-3 py-1 text-white bg-[#800080] rounded"> Submit</button>
            </form>
            <p className="text-xs text-gray-500 mt-2">*You can unsubscribe anytime</p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className={`mt-4 p-4 bg-green-200 text-green-800 rounded transition-transform transform ${emailSubmitted ? 'translate-x-0' : 'translate-x-full'} duration-1000`}>
              You have submitted successfully!
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded p-5">
            <h2 className="text-lg font-semibold">Confirm Booking</h2>
            <p>Are you sure you want to book this event?</p>
            <div className="mt-4">
              <button onClick={() => setIsModalOpen(false)} className="mr-2 px-3 py-1 border rounded">Cancel</button>
              <button onClick={handleConfirmBooking} className="px-3 py-1 bg-[#800080] text-white rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
