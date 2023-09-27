"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Main from './main';

const Home: React.FC = () => {
  const [isMainVisible, setMainVisibility] = useState(false);

    const containerStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', // You can change this to 'scroll' if needed
      backgroundColor: '#000', // Fallback background color
      // Add other CSS properties as needed
    };
    

  const handleButtonClick = () => {
    setMainVisibility(!isMainVisible);
  };

  return (
    <div className="min-h-screen text-white" style={containerStyle}>
      {/* Header */}
      <header className="bg-black py-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">SIMPLEFIT</h1>
          <p className="text-lg mt-2">Welcome to the home of fitness!</p>
        </div>
        <div className='container mx-auto text-center'>
          <button className=" bg-blue-500 text-white pr-12 py-4 ps-12 mt-6 rounded-full hover:bg-blue-600 text-left text-xl" onClick={handleButtonClick}>
            {isMainVisible ? 'Home' : 'Workouts'}
          </button>
        </div>
      </header>

      {isMainVisible && <Main />}

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Discover the world of fitness</h2>
          <p className="text-white mt-4">Come through and change yourself for the better</p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-black py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Feature 1 */}
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Feature 1</h3>
              <p className="mt-4">Point based rewards system</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Feature 2</h3>
              <p className="mt-4">Focus on physical and mental health</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Feature 3</h3>
              <p className="mt-4">User friendly interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-full hover:bg-blue-600">
            Sign Up Now
          </button>
        </div>
        <br></br>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Already have an account?</h2>
          <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-full hover:bg-blue-600">
            Login
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Landing Page</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
