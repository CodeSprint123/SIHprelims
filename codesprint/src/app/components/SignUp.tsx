// pages/SignUp.tsx

import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-white" style={{ backgroundImage: 'url("background.webp")' }}>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#workout">Workout</a>
        <a href="#meditation">Meditation</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 rounded-2xl">
        <h1 className="text-center text-3xl font-semibold border-b-2 border-silver py-4">SignUp</h1>
        <form className="px-10 py-4">
          <div className="mb-8">
            <input type="text" placeholder="First Name" className="w-full px-4 py-2 border-b-2 border-adadad focus:outline-none" />
          </div>
          <div className="mb-8">
            <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border-b-2 border-adadad focus:outline-none" />
          </div>
          <div className="mb-8">
            <input type="text" placeholder="Username" className="w-full px-4 py-2 border-b-2 border-adadad focus:outline-none" />
          </div>
          <div className="mb-8">
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border-b-2 border-adadad focus:outline-none" />
          </div>
          <input type="submit" value="SignUp" className="w-full bg-0f222e text-white py-2 rounded-2xl hover:border-aquamarine cursor-pointer" />
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? <a href="login.html" className="text-blue-500">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
