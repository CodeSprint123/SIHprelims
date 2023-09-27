import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';

const FitnessPage = () => {
  const workoutIdeas = [
    {
      title: 'High-Intensity Interval Training (HIIT)',
      description: 'Short bursts of intense exercise followed by brief rest periods. Great for burning calories and improving cardiovascular health.',
    },
    {
      title: 'Strength Training',
      description: 'Lift weights or use resistance bands to build muscle, increase metabolism, and enhance overall strength.',
    },
    {
      title: 'Yoga',
      description: 'A mind-body practice that improves flexibility, balance, and mental well-being. Great for reducing stress.',
    },
    {
      title: 'Running',
      description: 'An excellent cardiovascular workout that can be done almost anywhere. Start with a brisk walk and progress to running.',
    },
    {
      title: 'Swimming',
      description: 'A full-body workout that is easy on the joints. Improves endurance, strength, and flexibility.',
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Fitness Ideas</h1>
        <p className="text-lg text-gray-600 mb-8">
          Here are some fitness ideas to help you stay active and healthy:
        </p>

        <ul className="space-y-4">
          {workoutIdeas.map((idea, index) => (
            <li className="border p-4 rounded-lg shadow-md text-black" key={index}>
              <h2 className="text-xl font-semibold mb-2">{idea.title}</h2>
              <p>{idea.description}</p>
            </li>
          ))}
        </ul>

        <Link href="/schedule">
          <p className="block mt-8 text-blue-500 text-lg hover:underline">Create a Workout Schedule</p>
        </Link>
      </div>
    </div>
  );
};

export default FitnessPage;
